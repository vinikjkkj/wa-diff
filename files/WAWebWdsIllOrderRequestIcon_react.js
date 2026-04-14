__d(
  "WAWebWdsIllOrderRequestIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ill-order-request";
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
      var S = 120,
        R = 180;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 180 120",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              version: "1.1",
              id: "Layer_1",
              x: "0px",
              y: "0px",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  fill: "#25D366",
                  stroke: "#111B21",
                  strokeWidth: 1.5,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M107.4,74.2H155v24.5c0,11.2-9.1,20.3-20.3,20.3h-27.2L107.4,74.2L107.4,74.2z",
                }),
                c.jsx("path", {
                  fill: "#E6FFDA",
                  stroke: "#111B21",
                  strokeWidth: 1.5,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M114.6,1c-4.5,0-4.5,4.3-9,4.3s-4.5-4.3-9-4.3s-4.5,4.3-8.9,4.3c-4.5,0-4.5-4.3-9-4.3s-4.5,4.3-8.9,4.3 S65.3,1,60.8,1s-4.5,4.3-9,4.3S47.4,1,42.9,1s-4.5,4.3-9,4.3S29.4,1,24.9,1v97.4c0,11.3,6.9,20.6,18.2,20.6h89.6 c-11.3,0-18.2-9.2-18.2-20.6L114.6,1L114.6,1z",
                }),
                c.jsx("path", {
                  fill: "none",
                  stroke: "#111B21",
                  strokeWidth: 1.5,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M46,77h44 M46,99h44 M46,34.4h44 M46,56.4h44",
                }),
                c.jsx("path", {
                  fill: "#FCF5EB",
                  stroke: "#111B21",
                  strokeWidth: 1.5,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M137.9,60.4L96.5,61c-1.1,0-1.9-1.3-1.3-2.2l3.9-6.3l-0.2-14.7c-0.1-9.5,7.5-17.3,17-17.5l21.5-0.3 c9.5-0.1,17.3,7.5,17.5,17l0.1,5.9C155,52.5,147.4,60.3,137.9,60.4L137.9,60.4z",
                }),
                c.jsx("path", {
                  fill: "none",
                  stroke: "#111B21",
                  strokeWidth: 1.5,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M112.1,29.6h2.5c1.4,0,2.7,1,2.9,2.5l2,11.9c0.2,1.3,1.3,2.2,2.7,2.2h14.4",
                }),
                c.jsx("path", {
                  fill: "none",
                  stroke: "#111B21",
                  strokeWidth: 1.5,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M119.1,41.9h15.7c1.5,0,2.8-1.1,3-2.6l0.9-6.5h-21.3 M122.7,53c1,0,1.9-0.8,1.9-1.9c0-1-0.8-1.9-1.9-1.9 c-1,0-1.9,0.8-1.9,1.9C120.8,52.2,121.6,53,122.7,53z M134.1,53c1,0,1.9-0.8,1.9-1.9c0-1-0.8-1.9-1.9-1.9c-1,0-1.9,0.8-1.9,1.9 C132.3,52.2,133.1,53,134.1,53z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WdsIllOrderRequestIcon = m));
  },
  98,
);
