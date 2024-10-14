import { ProgressPreloader } from 'vevet';

const container = document.getElementById('v-preloader') as HTMLElement;
const percent = document.getElementById('percent') as HTMLElement;
const hideButton = document.getElementById('v-preloader-hide');

const preloader = new ProgressPreloader({ container });

console.log(preloader.images, preloader.videos, preloader.customResources);

preloader.addCallback('progress', () => {
  percent.textContent = `${(preloader.progress * 100).toFixed(0).padStart(2, '0')}%`;
});

preloader.addCallback('hidden', () => preloader.destroy());

// HIDE BUTTON

if (hideButton) {
  preloader.changeProps({ hideAnimation: false });

  preloader.addCallback('loaded', () => {
    hideButton.removeAttribute('disabled');
  });

  hideButton.addEventListener('click', () => preloader.hide());
}

// CUSTOM RESOURCE

const customResource = document.querySelector('.js-preload');

if (customResource) {
  customResource.addEventListener('click', () => {
    if (customResource.getAttribute('data-load-count')) {
      const currentProgress = Number(
        customResource.getAttribute('data-is-loaded') ?? 0,
      );

      customResource.setAttribute(
        'data-is-loaded',
        `${currentProgress + 0.25}`,
      );
    } else {
      customResource.setAttribute('data-is-loaded', '1');
    }
  });
}
