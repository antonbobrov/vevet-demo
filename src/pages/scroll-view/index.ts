import { ScrollView, vevet } from 'vevet';

const scrollView = new ScrollView({
  intersectionRoot: null,
  isEnabled: false,
  rootMargin: 0.1,
  states: 'inout',
  classToToggle: 'viewed',
  hasDelay: true,
  maxDelay: 1000,
});

vevet
  .onPageLoad()
  .then(() => {
    scrollView.changeProps({ isEnabled: true });
  })
  .catch(() => {});

const elements = document.querySelectorAll('.js-global-view');
elements.forEach((element) => {
  scrollView.addElement(element);
});

scrollView.addCallback('in', ({ element }) => {
  console.log(element);
});
