import { LitElement, PropertyValueMap, css, html } from "lit";
import { customElement, query } from "lit/decorators.js";

@customElement("choco-canvas")
export class ChocoCanvasElement extends LitElement {
	static styles = css`
		.choco-canvas-container {
			height: 100%;
			width: 100%;
			display: flex;
		}

		.choco-canvas-root {
			flex: 1;
			height: 100%;
		}
	`;

	protected override render() {
		return html`
			<div class="choco-canvas-container">
				<svg id="choco-canvas-root" class="choco-canvas-root">
					<circle cx="0" cy="0" r="10" fill="red" />
				</svg>
			</div>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"choco-canvas": ChocoCanvasElement;
	}
}
