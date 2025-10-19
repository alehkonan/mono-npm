/** @type {import('stylelint').Config} */
export default {
  allowEmptyInput: true,
  cache: true,
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-high-performance-animation',
  ],
};
