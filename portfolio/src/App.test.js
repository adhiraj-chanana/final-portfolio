import { render, screen } from '@testing-library/react';
import App from './App';

// jsdom has no WebGL support, so the hero's ogl-based canvas background
// (Threads.jsx) throws on mount in tests. Stub ogl with no-op equivalents --
// only their shape (constructible, with the properties Threads.jsx reads/
// writes) matters here, not real rendering behavior.
// eslint-disable-next-line no-unused-vars
let mockCanvas;

jest.mock('ogl', () => {
  const makeGl = () => ({
    canvas: mockCanvas,
    clearColor: jest.fn(),
    enable: jest.fn(),
    blendFunc: jest.fn(),
    getExtension: jest.fn(() => ({ loseContext: jest.fn() })),
    BLEND: 0,
    SRC_ALPHA: 0,
    ONE_MINUS_SRC_ALPHA: 0,
  });

  class Renderer {
    constructor() {
      this.gl = makeGl();
    }
    setSize() {}
    render() {}
  }

  class Color {
    constructor(r = 0, g = 0, b = 0) {
      this.r = r;
      this.g = g;
      this.b = b;
    }
  }

  class Program {
    constructor(_gl, { uniforms } = {}) {
      this.uniforms = uniforms || {};
    }
  }

  class Mesh {}
  class Triangle {}

  return { Renderer, Program, Mesh, Triangle, Color };
});

beforeEach(() => {
  mockCanvas = document.createElement('canvas');
});

test('renders the hero name', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { level: 1, name: /adhiraj chanana/i });
  expect(heading).toBeInTheDocument();
});

test('renders a main landmark', () => {
  render(<App />);
  expect(screen.getByRole('main')).toBeInTheDocument();
});
