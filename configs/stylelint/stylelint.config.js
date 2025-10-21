/** @type {import('stylelint').Config} */
export const baseConfig = {
  allowEmptyInput: true,
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-high-performance-animation',
  ],
};
