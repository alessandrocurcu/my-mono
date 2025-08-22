import antfu from '@antfu/eslint-config';

export default function createConfig(options, ...userConfigs) {
  return antfu(
    {
      formatters: true,
      stylistic: {
        indent: 2,
        semi: true,
      },
      ...options,
    },
    ...userConfigs,
  );
}
