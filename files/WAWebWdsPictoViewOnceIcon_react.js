__d(
  "WAWebWdsPictoViewOnceIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-picto-view-once";
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
      var S = 88,
        R = 88;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 88 88",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              id: "Layer_1",
              x: "0",
              y: "0",
              version: "1.1",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("style", {
                  children:
                    ".st1{fill:none;stroke:#111b21;stroke-width:1.5;stroke-linecap:round;stroke-miterlimit:10}",
                }),
                c.jsx("path", {
                  d: "M77.5 44c0 18.5-15 33.5-33.5 33.5S10.5 62.5 10.5 44s15-33.5 33.5-33.5 33.5 15 33.5 33.5z",
                  style: {
                    fill: "#25d366",
                    stroke: "#111b21",
                    strokeWidth: 1.5,
                    strokeMiterlimit: 10,
                  },
                }),
                c.jsx("path", {
                  d: "M43.3 16.5c-14.2.8-25.4 11.3-27.1 23.8-2 14.8 9.9 29.9 27.1 31.3",
                  className: "st1",
                }),
                c.jsx("path", {
                  d: "M46.4 57.2c1.3 0 2.2-1.1 2.2-2.2V34.4c0-2.2-2.1-4-4.3-3.5l-5.8 1.4c-1.6.3-2.6 1.8-2.6 3.5 0 2.2 2.1 3.8 4.2 3.5l1.8-.3v16c0 1.3 1.1 2.2 2.2 2.2h2.3z",
                  style: {
                    fill: "none",
                    stroke: "#111b21",
                    strokeWidth: 1.5,
                    strokeMiterlimit: 10,
                  },
                }),
                c.jsx("circle", {
                  cx: 56.6,
                  cy: 20.5,
                  r: 1.7,
                  className: "st1",
                }),
                c.jsx("circle", {
                  cx: 66.6,
                  cy: 30.8,
                  r: 1.7,
                  className: "st1",
                }),
                c.jsx("circle", {
                  cx: 70.3,
                  cy: 44.5,
                  r: 1.7,
                  className: "st1",
                }),
                c.jsx("circle", {
                  cx: 66.6,
                  cy: 58.3,
                  r: 1.7,
                  className: "st1",
                }),
                c.jsx("circle", { cx: 57, cy: 67.9, r: 1.7, className: "st1" }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WdsPictoViewOnceIcon = m));
  },
  98,
);
