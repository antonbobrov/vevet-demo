import { EaseInOutBounce, Timeline } from 'vevet';

const range = document.getElementById('range') as HTMLInputElement;
const thumb = document.getElementById('thumb');

const tm = new Timeline({
  duration: 3500,
  easing: EaseInOutBounce,
});

tm.addCallback('progress', ({ e, p }) => {
  if (range) {
    range.value = `${p}`;
  }

  if (thumb) {
    thumb.style.left = `${e * 100}%`;
  }
});

range?.addEventListener('input', () => {
  tm.p = parseFloat(range.value);
});

const play = document.getElementById('play');
const pause = document.getElementById('pause');
const reverse = document.getElementById('reverse');
const reset = document.getElementById('reset');

play?.addEventListener('click', () => tm.play());
pause?.addEventListener('click', () => tm.pause());
reverse?.addEventListener('click', () => tm.reverse());
reset?.addEventListener('click', () => tm.reset());
