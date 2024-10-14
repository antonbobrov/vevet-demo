import {
  CustomScroll,
  CustomScrollDragPlugin,
  CustomScrollKeyboardPlugin,
  ScrollBar,
} from 'vevet';

// DEFAULT

const scrollDefault = new CustomScroll({
  container: '#custom-scroll-default',
  direction: 'vertical',
  isEnabled: true,
});

// eslint-disable-next-line no-new
new ScrollBar({ container: scrollDefault });

scrollDefault.addPlugin(new CustomScrollDragPlugin());
scrollDefault.addPlugin(new CustomScrollKeyboardPlugin());

// WITH DIFFERENT LERP

const scrollWithDifferentLerp = new CustomScroll({
  container: '#custom-scroll-with-different-lerp',
  elements: '.js-element',
  direction: 'vertical',
  isEnabled: true,
  lerp: 0.1,
});

// eslint-disable-next-line no-new
new ScrollBar({ container: scrollWithDifferentLerp });

scrollWithDifferentLerp.addPlugin(new CustomScrollDragPlugin());
scrollWithDifferentLerp.addPlugin(new CustomScrollKeyboardPlugin());

// WITH HORIZONTAL

const scrollWithHorziontal = new CustomScroll({
  container: '#custom-scroll-with-horizontal',
  direction: 'horizontal',
  isInversedHandlerDirection: true,
  isEnabled: true,
  lerp: 0.1,
});

// eslint-disable-next-line no-new
new ScrollBar({ container: scrollWithHorziontal });

scrollWithHorziontal.addPlugin(new CustomScrollDragPlugin());
scrollWithHorziontal.addPlugin(new CustomScrollKeyboardPlugin());
