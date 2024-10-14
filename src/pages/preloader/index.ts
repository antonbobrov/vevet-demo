import { Preloader } from 'vevet';

const container = document.getElementById('v-preloader') as HTMLElement;

const preloader = new Preloader({ container });
preloader.addCallback('hidden', () => preloader.destroy());

const hideButton = document.getElementById('v-preloader-hide');

if (hideButton) {
  preloader.changeProps({ hideAnimation: false });

  preloader.addCallback('loaded', () => {
    hideButton.removeAttribute('disabled');
  });

  hideButton.addEventListener('click', () => preloader.hide());
}
