__d(
  "WAWebIcSpreadsheetIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-spreadsheet";
    function m(t) {
      var n = t.height,
        a = t.iconXstyle,
        i = t.name,
        l = t.viewBox,
        u = t.width,
        m = babelHelpers.objectWithoutPropertiesLoose(t, e),
        p;
      if (l) {
        var _ = l.height,
          f = _ === void 0 ? 0 : _,
          g = l.width,
          h = g === void 0 ? 0 : g,
          y = l.x,
          C = y === void 0 ? 0 : y,
          b = l.y,
          v = b === void 0 ? 0 : b;
        p = [C, v, h, f].join(" ");
      }
      var S = 26,
        R = 22;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 22 26",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  fill: "currentColor",
                  d: "M1 5.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C3.28 1 4.12 1 5.8 1h5.549c.978 0 1.468 0 1.928.11.408.099.798.26 1.156.48.404.247.75.593 1.441 1.285L17 4l2.125 2.125c.692.692 1.038 1.038 1.286 1.442a4 4 0 0 1 .479 1.156c.11.46.11.95.11 1.928V20.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 25 17.88 25 16.2 25H5.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C1 22.72 1 21.88 1 20.2V5.8Z",
                }),
                c.jsx("path", {
                  stroke: "#fff",
                  strokeOpacity: 0.15,
                  strokeWidth: 0.5,
                  d: "m11.349.75.648.002c.578.005.966.026 1.338.115l.321.091c.318.103.622.243.907.418l.162.105c.37.26.729.618 1.327 1.216l1.125 1.126 2.126 2.125.457.46c.405.413.664.702.864 1.029l.163.29c.152.298.268.613.346.938l.039.188c.08.445.078.953.078 1.798v9.55c0 .835 0 1.477-.042 1.99-.037.45-.107.82-.248 1.147l-.065.138A3.25 3.25 0 0 1 19.7 24.77l-.223.125c-.362.185-.77.27-1.286.313-.512.042-1.154.042-1.99.042H5.8c-.836 0-1.478 0-1.99-.042-.452-.037-.82-.107-1.148-.248l-.138-.065A3.25 3.25 0 0 1 1.23 23.7l-.125-.223c-.184-.362-.27-.77-.312-1.286C.75 21.678.75 21.036.75 20.2V5.8c0-.836 0-1.478.042-1.99.042-.516.128-.924.312-1.286l.125-.223a3.25 3.25 0 0 1 1.295-1.197l.138-.064C2.99.9 3.358.829 3.81.792 4.322.75 4.964.75 5.8.75h5.549Z",
                }),
                c.jsx("g", {
                  filter: "url(#a)",
                  children: c.jsx("path", {
                    fill: "#fff",
                    fillOpacity: 0.4,
                    fillRule: "evenodd",
                    d: "m20.71 8.092-5.975-.026a1 1 0 0 1-.995-1.004l.025-5.81c.219.086.43.19.631.314.4.244.744.586 1.43 1.268L17 3.999l2.143 2.13c.701.696 1.052 1.044 1.302 1.452.101.164.19.335.266.511Z",
                    clipRule: "evenodd",
                    shapeRendering: "crispEdges",
                  }),
                }),
                c.jsx("mask", {
                  id: "b",
                  fill: "#fff",
                  children: c.jsx("rect", {
                    width: 11.2,
                    height: 8,
                    x: 5.4,
                    y: 12.5,
                    rx: 0.5,
                  }),
                }),
                c.jsx("rect", {
                  width: 11.2,
                  height: 8,
                  x: 5.4,
                  y: 12.5,
                  stroke: "#fff",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  mask: "url(#b)",
                  rx: 0.5,
                }),
                c.jsx("path", { fill: "#fff", d: "M5.4 16h10.4v1H5.4z" }),
                c.jsx("path", { fill: "#fff", d: "M9 13.3h1v6.4H9z" }),
                c.jsx("defs", {
                  children: c.jsxs("filter", {
                    id: "a",
                    width: 7.97,
                    height: 7.84,
                    x: 13.239,
                    y: 1.253,
                    colorInterpolationFilters: "sRGB",
                    filterUnits: "userSpaceOnUse",
                    children: [
                      c.jsx("feFlood", {
                        floodOpacity: 0,
                        result: "BackgroundImageFix",
                      }),
                      c.jsx("feColorMatrix", {
                        in: "SourceAlpha",
                        result: "hardAlpha",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                      }),
                      c.jsx("feOffset", { dy: 0.5 }),
                      c.jsx("feGaussianBlur", { stdDeviation: 0.25 }),
                      c.jsx("feComposite", {
                        in2: "hardAlpha",
                        operator: "out",
                      }),
                      c.jsx("feColorMatrix", {
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0",
                      }),
                      c.jsx("feBlend", {
                        in2: "BackgroundImageFix",
                        result: "effect1_dropShadow_261_26893",
                      }),
                      c.jsx("feBlend", {
                        in: "SourceGraphic",
                        in2: "effect1_dropShadow_261_26893",
                        result: "shape",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.IcSpreadsheetIcon = m));
  },
  98,
);
