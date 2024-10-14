import { CustomCursor } from 'vevet';

const cursor = new CustomCursor({
  container: window,
  isNativeCursorHidden: false,
  lerp: 0.25,
  isFpsNormalized: true,
});

const stickyAutosize = document.getElementById('cursor-sticky-autosize');
if (stickyAutosize) {
  cursor.addHoverElement({
    element: stickyAutosize,
    isSticky: true,
    padding: 8,
  });
}

const withSize = document.getElementById('cursor-with-size');
if (withSize) {
  cursor.addHoverElement({
    element: withSize,
    width: 20,
    height: 20,
  });
}

const links = document.querySelectorAll('a');

links.forEach((link) => {
  cursor.addHoverElement({
    element: link,
    isSticky: true,
    padding: 8,
  });
});
