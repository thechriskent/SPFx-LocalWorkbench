// ReactDOM Shim for esbuild
// Maps ReactDOM imports to the global set by the local vendor UMD bundle

export default window.ReactDOM;
export const { render, unmountComponentAtNode, findDOMNode, createPortal, flushSync } = window.ReactDOM;
