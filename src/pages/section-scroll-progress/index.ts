import { SectionScrollProgress } from 'vevet';

const sections = document.querySelectorAll<HTMLElement>('.js-section');

sections.forEach((section) => {
  const handler = new SectionScrollProgress({
    section,
    scrollContainer: window,
  });

  const render = () => {
    section.innerHTML = `
      <div>progressGlobal: <b>${handler.progressGlobal.toFixed(2)}</b></div>
      <div>progressIn: <b>${handler.progressIn.toFixed(2)}</b></div>
      <div>progressMove: <b>${handler.progressMove.toFixed(2)}</b></div>
      <div>progressOut: <b>${handler.progressOut.toFixed(2)}</b></div>
    `;
  };

  render();

  handler.addCallback('render', () => render());
});
