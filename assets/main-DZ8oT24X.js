import { j as jsxRuntimeExports, c as clientExports, r as reactExports } from "./client-CueT7bxU.js";
function LandingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "landing-page", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      className: "btn btn-primary btn-stuff",
      onClick: openStuff,
      children: "Stuff!"
    }
  ) }) });
}
function openStuff() {
  window.location.href = "./pages/stuff";
}
clientExports.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(LandingPage, {}) })
);
