import "./style.css";
import { Gizmo2D } from "@gizmo2d/gizmos";

const appContainer = document.getElementById("app")!;
const gizmo = new Gizmo2D(window);

appContainer.appendChild(gizmo.view);
