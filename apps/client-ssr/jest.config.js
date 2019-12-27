module.exports = {
  name: 'client-ssr',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/client-ssr',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
