import createConfig from '@qrq-repo/eslint-config/create-config';
// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

export default createConfig({
  vue: true,
  plugins: [storybook],
});
