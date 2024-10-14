import { IVevet, IViewport, vevet } from 'vevet';

// Application

function setVevet() {
  Object.keys(vevet).forEach((key) => {
    const element = document.getElementById(key);
    if (element) {
      const value = vevet[key as keyof IVevet];
      if (typeof value === 'object') {
        element.innerHTML = `<i>vevet.${key}</i> = <b><pre>${JSON.stringify(value, null, 2)}</b>`;
      } else {
        element.innerHTML = `<i>vevet.${key}</i> = <b>${value}</b>`;
      }
    }
  });
}

setVevet();

document.getElementById('update-vevet')?.addEventListener('click', setVevet);

// Viewport

function setViewport() {
  Object.keys(vevet.viewport).forEach((key) => {
    const element = document
      .getElementById('viewport-list')
      ?.querySelector(`#${key}`);

    if (element) {
      const value = vevet.viewport[key as keyof IViewport];
      element.innerHTML = `<i>vevet.${key}</i> = <b>${value}</b>`;
    }
  });
}

setViewport();

vevet.viewport.callbacks.add('any', setViewport);
