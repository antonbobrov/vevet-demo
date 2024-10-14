import { SlideProgress } from 'vevet';

const container = document.getElementById('slide-progress')!;
const elements = Array.from(container.children) as HTMLElement[];

const instance = new SlideProgress({
  container,
  min: 0,
  max: elements.length - 1,
  step: 0.5,
  dragDirection: 'x',
  friction: 0,
  stickyEndDuration: 250,
  ease: 0.5,
});

instance.addCallback('render', () => {
  elements.forEach((element, index) => {
    const x = instance.progress * -100 + index * 100;

    element.style.transform = `translate(${x}%, 0)`;
  });
});

instance.render();
