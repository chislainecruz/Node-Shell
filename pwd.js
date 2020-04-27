const pwd = () => {
  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    if (cmd === "pwd") {
      const pwd = process.cwd();
      process.stdout.write(pwd);
    }
    process.stdout.write("\nprompt > ");
  });
};

module.exports.pwd = pwd;
