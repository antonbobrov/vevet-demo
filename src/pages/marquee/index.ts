import { Marquee } from 'vevet';

function createMarquee(parent: Element) {
  const container = parent.querySelector('.js-marquee') as HTMLElement;

  if (!container) {
    return;
  }

  const speed = container.getAttribute('data-speed')
    ? Number(container.getAttribute('data-speed'))
    : 1;

  const gap = container.getAttribute('data-gap')
    ? Number(container.getAttribute('data-gap'))
    : 0;

  const shouldPauseOnHover = !!container.getAttribute('data-pause-on-hover');

  const instance = new Marquee({
    container,
    speed,
    gap,
    pauseOnHover: shouldPauseOnHover,
    isEnabled: true,
  });

  parent
    .querySelector('.js-play')
    ?.addEventListener('click', () =>
      instance.changeProps({ isEnabled: true }),
    );

  parent
    .querySelector('.js-pause')
    ?.addEventListener('click', () =>
      instance.changeProps({ isEnabled: false }),
    );

  parent
    .querySelector('.js-render')
    ?.addEventListener('click', () =>
      instance.render(10 * instance.props.speed),
    );
}

document
  .querySelectorAll('.js-marquee')
  .forEach((container) => createMarquee(container));
