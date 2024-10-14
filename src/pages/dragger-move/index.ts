import { DraggerMove } from 'vevet';

const thumb = document.getElementById('drag-thumb') as HTMLElement;

const dragger = new DraggerMove({
  container: thumb,
});

dragger.addCallback('move', ({ diff }) => {
  thumb.style.transition = '';
  thumb.style.transform = `translate(${diff.x}px, ${diff.y}px)`;
});

dragger.addCallback('end', () => {
  thumb.style.transition = 'transform 0.35s';
  thumb.style.transform = '';
});
