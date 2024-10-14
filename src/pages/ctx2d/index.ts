import { Ctx2D, NCtx2D } from 'vevet';

const container = document.getElementById('ctx-container')!;

const instance = new Ctx2D({
  container,
  dpr: 'auto',
  hasResize: true,
  viewportTarget: 'any',
  shouldAppend: true,
});

const render: NCtx2D.TRender = ({ ctx, width, height }) => {
  ctx.beginPath();
  ctx.fillStyle = '#ccc';
  ctx.fillRect(0, 0, width, height);
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle = '#000';
  ctx.fillRect(25, 25, 200, 200);
  ctx.closePath();
};

instance.render(render);
instance.addCallback('resize', () => instance.render(render));
