const fs = require('fs');

exports.getFilenames = function getFilenames(dir, isRecur = false, Exclude = []) {
  const contents = fs.readdirSync(dir);
  const files = contents.filter((name) => !fs.statSync(`${dir}/${name}`).isDirectory());

  if (!isRecur) return files;

  const subdirs = contents.filter((name) => fs.statSync(`${dir}/${name}`).isDirectory());
  const allFiles = subdirs.reduce((acc, subdir) => acc.concat(getFilenames(`${dir}/${subdir}`, true).map((name) => `${subdir}/${name}`)), files);
  return allFiles.filter((item) => {
    const ext = item.split('.').pop();
    return !(Exclude.indexOf(ext) > -1);
  });
};

exports.noop = () => {};
