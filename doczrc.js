import { resolve } from 'path';

const srcPath = resolve(__dirname, '../packages');
const nodeModulePath = resolve(__dirname, '../node_modules');

export default {
  title: 'sinoui-docs',
  codeSandbox: false,
  typescript: true,
  onCreateWebpackChain: (config) => {
    config.module
      .rule('ts')
      .include.add(srcPath)
      .end()
      .exclude.add(nodeModulePath)
      .end();

    return config;
  },
};