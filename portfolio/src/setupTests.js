// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// jsdom has no window.matchMedia implementation at all. Several components
// call it directly or via framer-motion's useReducedMotion() (Threads,
// TextType, DecryptedText) and via inline hover-capability checks
// (Home/Projects CTAs), so without this every test that mounts them throws.
if (typeof window !== 'undefined' && !window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}

// jsdom also has no IntersectionObserver. Used by Threads' visibility-pause,
// and by DecryptedText/TextType's scroll-triggered reveal -- without a stub,
// mounting any of them throws "IntersectionObserver is not defined".
if (typeof window !== 'undefined' && !window.IntersectionObserver) {
  class MockIntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  window.IntersectionObserver = MockIntersectionObserver;
  global.IntersectionObserver = MockIntersectionObserver;
}
