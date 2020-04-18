import init from './index.js';

export default {
  title: 'Demo',
};

export const Test = () => {
  const div = document.createElement('div');
  init(div);
  return div;
};
