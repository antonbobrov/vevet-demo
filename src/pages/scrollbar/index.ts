/* eslint-disable no-new */
import { CustomScroll, ScrollBar } from 'vevet';

new ScrollBar({
  container: window,
  canAutoHide: false,
});

// inside

const scrollContainer = document.getElementById('scrollable') as HTMLElement;
const scrollContainerParent = document.getElementById(
  'scrollable-parent',
) as HTMLElement;

new ScrollBar({
  container: scrollContainer,
  domParent: scrollContainerParent,
  canAutoHide: false,
});

// custom scroll

const customScroll = new CustomScroll({
  container: '#custom-scroll',
});

new ScrollBar({ container: customScroll });
