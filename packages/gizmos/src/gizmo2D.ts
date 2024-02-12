import * as Choco from "@gizmo2d/choco";

export class Gizmo2D {
	private chocoView: Choco.View;

	constructor(container: HTMLElement | Window) {
		this.chocoView = new Choco.View({ resizeTo: container });
	}

	get view() {
		return this.chocoView.canvas;
	}
}
