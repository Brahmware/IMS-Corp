const core = require('@actions/core');
const { exec } = require('@actions/exec');

async function run() {
  try {
    // Define the command to checkout the code
    const checkoutCommand = 'git checkout';

    // Execute the checkout command
    await exec(checkoutCommand);

    console.log('Code successfully checked out');
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
