import { ChocoCanvasElement } from "../elements";
export interface ChocoViewCreateOptions {
	resizeTo: HTMLElement | Window;
}

export class View {
	private _options: ChocoViewCreateOptions;
	private _canvas: ChocoCanvasElement;

	constructor(options: Partial<ChocoViewCreateOptions>) {
		this._options = {
			resizeTo: window,
		};
		Object.assign(this._options, options);
		this._canvas = document.createElement("choco-canvas");
	}

	get canvas() {
		return this._canvas;
	}

	resize() {}
}
