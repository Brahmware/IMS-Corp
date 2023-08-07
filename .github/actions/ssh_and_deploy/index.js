const core = require('@actions/core');
const { Client } = require('ssh2');

async function run() {
  try {
    const host = core.getInput('host');
    const username = core.getInput('username');
    const key = core.getInput('key');

    const client = new Client();

    client.on('ready', function () {
      console.log('SSH connection established');

      const deployScript = `
        cd ~/IMS-Corp
        git pull origin dev
        docker compose build
        docker compose up -d
      `;

      client.exec(deployScript, function (err, stream) {
        if (err) throw err;

        stream.on('close', function (code, signal) {
          console.log(`Stream closed with code: ${code}, signal: ${signal}`);
          client.end();
        });

        stream.on('data', function (data) {
          console.log(`STDOUT: ${data}`);
        });

        stream.stderr.on('data', function (data) {
          console.error(`STDERR: ${data}`);
        });
      });
    })
    .connect({
      host,
      port: 22,
      username,
      privateKey: key
    });

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
