/* eslint-disable no-new */
import { Ctx2DPrerender, loadImage } from 'vevet';

loadImage('https://picsum.photos/400/600')
  .then((image) => {
    const container = document.getElementById('ctx-container')!;

    const instance = new Ctx2DPrerender({
      media: image,
      container,
      hasResize: true,
      posRule: 'cover',
    });

    const positionButtons = document.querySelectorAll('.js-position');

    positionButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const rule = button.getAttribute('data-position');

        instance.changeProps({ posRule: rule as any });
      });
    });

    // use further
    console.log(instance.canvas);
  })
  .catch(() => {});
