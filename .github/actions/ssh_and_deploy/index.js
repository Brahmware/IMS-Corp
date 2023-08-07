const { execSync } = require('child_process');
const core = require('@actions/core');

try {
  const host = core.getInput('host');
  const username = core.getInput('username');
  const key = core.getInput('key');

  // Writing the SSH key to a file
  require('fs').writeFileSync('private_key.pem', key, { mode: '600' });

  // SSH and deploy commands
  const deployCommands = [
    'cd ~/IMS-Corp',
    'git pull origin dev',
    'docker compose build',
    'docker compose up -d',
  ];

  // Running the commands
  execSync(`ssh -i private_key.pem ${username}@${host} "${deployCommands.join(' && ')}"`);

  console.log('Deployment successful.');
} catch (error) {
  core.setFailed(`Deployment failed with error: ${error}`);
}
