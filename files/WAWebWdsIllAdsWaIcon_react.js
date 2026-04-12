__d(
  "WAWebWdsIllAdsWaIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ill-ads-WA";
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
              x: "0",
              y: "0",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("style", {
                  children:
                    ".st0{fill:#d9fdd3}.st0,.st1,.st2{stroke:#111b21;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}.st1{fill:none}.st2{fill:#25d366}",
                }),
                c.jsx("path", {
                  className: "st0",
                  d: "M24.2 13.4 95.4 1.1c3.6-.6 7 1.8 7.6 5.4L119 99c.6 3.6-1.8 7-5.4 7.6l-71.2 12.3c-3.6.6-7-1.8-7.6-5.4L18.9 21c-.6-3.6 1.8-7 5.3-7.6",
                }),
                c.jsx("path", {
                  className: "st1",
                  d: "m22.1 39.6 84.1-14.5m9.6 55.3L31.6 94.9m-.2-62.1c2.4-.4 4-2.7 3.6-5.1s-2.7-4-5.1-3.6-4 2.7-3.6 5.1c.5 2.4 2.8 4 5.1 3.6",
                }),
                c.jsx("path", {
                  className: "st2",
                  d: "M108.9 42.6c5.8-5.8 13.6-8.8 21.8-8.8h.2c17 0 30.6 13.8 30.4 30.8 0 5.4-1.4 10.8-4.2 15.6-8.6 14.6-27.2 19.6-41.8 11l-14.4 4.2 3.6-15c-3-4.8-4.6-10.6-4.6-16.2 0-8.2 3.2-15.8 9-21.6",
                }),
                c.jsx("path", {
                  d: "M107.3 64.6c0-12.8 10.4-23.4 23.4-23.4s23.4 10.6 23.2 23.4c0 4.2-1 8.4-3.2 12-6.6 11-20.8 14.8-31.8 8.4l-11 3.2 2.8-11.4c-2.4-3.8-3.4-8-3.4-12.2q0 0 0 0",
                  style: {
                    fill: "#fff",
                    stroke: "#111b21",
                    strokeWidth: 1.5,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  },
                }),
                c.jsx("path", {
                  className: "st2",
                  d: "M126.7 56.2c0-1.4-4.8-6.6-6.4-6.6-3.4.2-5.4 4.8-4.8 8.4.6 7.8 12 18.8 20.2 20.4 7.4 1.8 10.2-2.4 9.4-4.4-.4-1-5.2-6.6-7.2-6.6-1.8 0-2.2 3-4.2 3.4s-10.8-7.4-9.4-11c.4-1.2 2.6-2.6 2.4-3.6",
                }),
                c.jsx("path", {
                  className: "st1",
                  d: "m41.9 101.9 43.2-7.6m-42 14.7 25.3-4.5",
                }),
                c.jsx("path", {
                  className: "st0",
                  d: "m57.4 63.9 5.3-5.4 12.4 12.1c1.4 1.5 1.4 3.8.1 5.2-1.5 1.4-3.8 1.4-5.2.1zM85 40.8c4-.7 6.6-4.5 6-8.2-.6-3.8-4.5-6.6-8.4-5.9-4 .7-6.6 4.5-5.9 8.4.6 4 4.3 6.4 8.3 5.7",
                }),
                c.jsx("path", {
                  className: "st0",
                  d: "m85.6 54.7 7.1-1.6h0c1.1-.2 1.7-1.5 1.2-2.1v-.2c-5.8-12.1-13.5-23.2-23.1-32.4-.7-.9-2-.6-2.7.3L62 28.4c-3.6 5.9-8.1 10.9-13.1 15.7l-8.5 6.1h0c-2.2 1.8-2.8 5-1.3 7.2l7 9.9c1.8 2.4 5 3 7.4 1.3l8.4-5.9c7.6-3.8 15.6-6.2 23.7-8",
                }),
                c.jsx("path", { className: "st1", d: "M59.4 65.5 46.3 47" }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WdsIllAdsWaIcon = m));
  },
  98,
);
