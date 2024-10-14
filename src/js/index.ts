import '../styles/index.scss';

const path = window.location.pathname;

if (path.includes('/application')) {
  import('../pages/application/index');
}

if (path.includes('/animation-frame')) {
  import('../pages/animation-frame/index');
}

if (path.includes('/ctx2d-prerender')) {
  import('../pages/ctx2d-prerender/index');
} else if (path.includes('/ctx2d')) {
  import('../pages/ctx2d/index');
}

if (path.includes('/custom-cursor')) {
  import('../pages/custom-cursor/index');
}

if (path.includes('/custom-scroll')) {
  import('../pages/custom-scroll/index');
}

if (path.includes('/dragger-direction')) {
  import('../pages/dragger-direction/index');
}

if (path.includes('/dragger-move')) {
  import('../pages/dragger-move/index');
}

if (path.includes('/marquee')) {
  import('../pages/marquee/index');
}

if (path.includes('/preloader')) {
  import('../pages/preloader/index');
}

if (path.includes('/progress-preloader')) {
  import('../pages/progress-preloader/index');
}

if (path.includes('/scrollbar')) {
  import('../pages/scrollbar/index');
}

if (path.includes('/section-scroll-progress')) {
  import('../pages/section-scroll-progress/index');
}

if (path.includes('/slide-progress')) {
  import('../pages/slide-progress/index');
}

if (path.includes('/scroll-view')) {
  import('../pages/scroll-view/index');
}

if (path.includes('/split-text')) {
  import('../pages/split-text/index');
}

if (path.includes('/timeline')) {
  import('../pages/timeline/index');
}
