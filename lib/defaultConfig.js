const config = {
  SecretId: process.env.COS_SECRET_ID,
  SecretKey: process.env.COS_SECRET_KEY,
  Recursive: true,
  Bucket: 'static',
  Directory: 'default',
  Region: 'cn-east',
  Filepath: 'dist',
  Exclude: [],
};
module.exports = config;
