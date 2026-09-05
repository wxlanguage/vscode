# Changelog

All notable changes to the "WX - WebAssembly Expressive Language" VS Code
extension will be documented in this file. For changes to the WX language
and compiler itself, see the [wx changelog](https://github.com/wxlanguage/wx/blob/main/CHANGELOG.md).

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [0.2.0] - 2026-09-05

Use WX CLI 0.5.0 or newer for manifest-based formatting and file watching.
The CLI is installed separately from this extension.

### Added

- Syntax highlighting for `match`, `crate`, and `super`.
- Float highlighting now supports scientific notation (e.g. `1e10` and
  `1.5e-3`) and digit separators (e.g. `1_000.5`).
- Server shutdown logs include the reason, client state, and any errors.

### Changed

- **Breaking:** removed `wx.formatter.indentSize` and
  `wx.formatter.maxWidth`. Configure formatting in your package's
  `wx.json` using `format.indent_width`, `format.max_line_width`, and
  `format.trailing_comma`. With WX 0.5.0, format-on-save uses the same
  settings as `wx format`.
- Updated keyword highlighting from `module` to `mod`.
- File watching now follows the language server's registrations. With
  WX 0.5.0, both `.wx` files and `wx.json` are watched, so changes to
  project configuration and unopened source files trigger updates.
- Automatic server restarts are now limited to changes to `wx.path`.

### Fixed

- Server startup, restart, and shutdown are serialized, preventing
  overlapping operations that could forcibly terminate the server.
- Standard-library document and full-diagnostic requests wait for pending
  server transitions before accessing the client.
- Diagnostic decoration providers are created per extension activation,
  avoiding reuse of a disposed provider.

## [0.1.2] - 2026-07-20

### Fixed

- When running the extension in a development host (`F5`), the locally
  built `target/debug/wx` binary is now found and preferred over a
  configured `wx.path` setting, instead of the other way around. The
  relative path to that dev binary was also corrected — it was off by
  one directory level after the extension was extracted into its own
  [wxlanguage/vscode](https://github.com/wxlanguage/vscode) repo.

### Added

- The output channel now logs the resolved `wx` command and arguments
  when the language server starts, to make it easier to confirm which
  binary is actually running.

## [0.1.1] - 2026-07-11

### Changed

- The extension no longer bundles a `wx` binary. It now looks for `wx` on
  your `PATH` instead (same approach as the Deno extension) — install it
  once with `npm install -g @wx-lang/cli` and every editor picks it up.
- If `wx` can't be found, you now get a clear error message with a button
  to open settings, instead of a silent failure. Use the new `wx.path`
  setting if you'd rather point at a specific `wx` install.

### Added

- A proper README with setup instructions and a feature overview.

## [0.1.0] - 2026-07-09

First published release.

### Added

- Syntax highlighting for `.wx` files (TextMate grammar).
- Diagnostics, completions, and formatting via the `wx-lsp` language
  server, bundled per-platform (Linux, macOS x64/arm64, Windows).
- Format-on-save enabled by default for WX files.
- `wx.formatter.indentSize` and `wx.formatter.maxWidth` settings.
- "WX: Restart Language Server" command.
