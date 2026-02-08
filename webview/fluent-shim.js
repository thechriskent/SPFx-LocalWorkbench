// Fluent UI Shim for esbuild
// Maps @fluentui/react imports to the global set by the local vendor UMD bundle

// Export all Fluent UI components and utilities from the global
module.exports = window.FluentUIReact;
