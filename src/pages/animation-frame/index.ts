/* eslint-disable @typescript-eslint/no-use-before-define */
import { AnimationFrame } from 'vevet';

// todo: add `time` to `AnimationFrame` in vevet

let startTime = 0;

function createTest(container: Element) {
  const fpsAttr = container.getAttribute('data-fps');

  let fps: 'auto' | number;
  if (fpsAttr === 'auto') {
    fps = 'auto';
  } else if (fpsAttr === 'adaptive') {
    fps = 120;
  } else {
    fps = Number(fpsAttr);
  }

  // RAF

  const raf = new AnimationFrame({ fps }, false);

  if (fpsAttr === 'adaptive') {
    raf.addResponsiveProps({
      breakpoint: 'viewport_tablet',
      settings: { fps: 50 },
    });

    raf.addResponsiveProps({
      breakpoint: 'viewport_phone',
      settings: { fps: 10 },
    });
  }

  raf.init();

  raf.addCallback('frame', () => handleRender(container, raf));

  handleRender(container, raf);

  // SET EVENTS

  container
    .querySelector('.js-play')
    ?.addEventListener('click', () => raf.play());

  container
    .querySelector('.js-pause')
    ?.addEventListener('click', () => raf.pause());
}

document.querySelectorAll('.js-test').forEach((element) => {
  createTest(element);
});

function handleRender(container: Element, raf: AnimationFrame) {
  const targetFps = container.querySelector('.js-target-fps');
  const computedFps = container.querySelector('.js-computed-fps');
  const fpsMultiplier = container.querySelector('.js-fps-multiplier');
  const time = container.querySelector('.js-time');

  startTime += 1;

  if (targetFps) {
    targetFps.innerHTML = `props.fps = <b>${raf.props.fps}</b>`;
  }

  if (computedFps) {
    computedFps.innerHTML = `.computedFPS = <b>${raf.computedFPS}</b>`;
  }

  if (fpsMultiplier) {
    fpsMultiplier.innerHTML = `.fpsMultiplier = <b>${raf.fpsMultiplier.toFixed(2)}</b>`;
  }

  if (time) {
    time.innerHTML = `time = <b>${startTime}</b>`;
  }
}
