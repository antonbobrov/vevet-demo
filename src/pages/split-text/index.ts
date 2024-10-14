import { SplitText } from 'vevet';
import anime from 'animejs';

const textWords = new SplitText({
  container: '#text-words',
  hasLetters: false,
  hasLines: false,
});

document.getElementById('animate-text-words')?.addEventListener('click', () => {
  anime({
    targets: `#${textWords.container.id} .v-split-text__word`,
    duration: 250,
    delay: anime.stagger(75),
    easing: 'easeInOutSine',
    opacity: [0, 1],
    translateY: ['50%', '0'],
  });
});

///

const textLetters = new SplitText({
  container: '#text-letters',
  hasLetters: true,
  hasLines: true,
});

document
  .getElementById('animate-text-letters')
  ?.addEventListener('click', () => {
    anime({
      targets: `#${textLetters.container.id} .v-split-text__letter`,
      duration: 50,
      delay: anime.stagger(16),
      easing: 'easeInOutSine',
      opacity: [0, 1],
      translateY: ['50%', '0'],
    });
  });

///

const textLines = new SplitText({
  container: '#text-lines',
  hasLetters: true,
  hasLines: true,
});

document.getElementById('animate-text-lines')?.addEventListener('click', () => {
  anime({
    targets: `#${textLines.container.id} .v-split-text__line`,
    duration: 500,
    delay: anime.stagger(100),
    easing: 'easeInOutSine',
    opacity: [0, 1],
    translateY: ['50%', '0'],
  });
});
