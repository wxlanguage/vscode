// Custom `wx/*` requests the language server adds on top of standard LSP,
// declared as typed `RequestType`s so `sendRequest` checks both the params
// and the result. Each mirrors its `#[derive(Deserialize)]` counterpart in
// `crates/wx-lsp/src/lib.rs`; keep them in sync.

import { RequestType } from "vscode-languageclient/node";

export interface VirtualFileContentParams {
	uri: string;
}

export const virtualFileContent = new RequestType<
	VirtualFileContentParams,
	string,
	void
>("wx/virtualFileContent");

export interface FullDiagnosticParams {
	uri: string;
	index: number;
}

export const fullDiagnostic = new RequestType<
	FullDiagnosticParams,
	string,
	void
>("wx/fullDiagnostic");
