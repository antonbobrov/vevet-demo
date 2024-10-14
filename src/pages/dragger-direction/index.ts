import { DraggerDirection } from 'vevet';

const container = document.getElementById('drag-container') as HTMLElement;

const dragger = new DraggerDirection({
  container,
  minLength: 50,
});

dragger.addCallback('left', () => {
  container.innerHTML = 'left';
});

dragger.addCallback('right', () => {
  container.innerHTML = 'right';
});

dragger.addCallback('up', () => {
  container.innerHTML = 'up';
});

dragger.addCallback('down', () => {
  container.innerHTML = 'down';
});
