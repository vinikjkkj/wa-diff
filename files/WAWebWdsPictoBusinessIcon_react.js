__d(
  "WAWebWdsPictoBusinessIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-picto-business";
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
                    ".st1{fill:none;stroke:#111b21;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}",
                }),
                c.jsx("path", {
                  d: "M83.8 35.1c0 4.9-2.2 9-5.5 11.9l-.1 20.8c0 5.1-4.2 9.3-9.3 9.2l-50.2-.2c-5.1 0-9.3-4.2-9.2-9.3l.1-20.8c-3.2-2.9-5.4-7-5.4-11.9l2.7-18.1c.4-3.2 3-5.7 6.1-5.7l62.3.2c3 0 5.6 2.4 6.1 5.7z",
                  style: {
                    fill: "#25d366",
                    stroke: "#111b21",
                    strokeWidth: 1.5,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  },
                }),
                c.jsx("path", {
                  d: "M30.7 46.9c-.2.2-.6.4-1.1.7-.7.4-1.7 1-3 1.6-2.5 1.1-5 1.6-7.5 1.4m0 0c-.4.9-.6 1.9-.6 2.8m.6-2.8c-.4.9-.6 1.8-.6 2.8m.6-2.8c-3.6-.2-6.9-1.6-9.6-3.9v20.7c0 5.1 4.2 9.3 9.2 9.3l16.8.1.1-23.3m-17.1-.1-.1 23.3",
                  className: "st1",
                }),
                c.jsx("path", {
                  d: "M69.1 61c0 3.8-3.1 6.9-6.9 6.8h-13c-3.8 0-6.9-3.1-6.8-6.9v-8.8c-3.3-.3-9.7-4-11.8-5.2 1.7 1.2 4.9 1.9 4.9 6.6l-.1 23.3 33.5.1c5.1 0 9.3-4.2 9.3-9.2l.1-20.8c-2.5 2.2-5.8 3.6-9.2 3.9z",
                  className: "st1",
                }),
                c.jsx("path", {
                  d: "M61.3 49.3c-2.5-1.2-4.1-2.3-4.1-2.3-1.1 1-5.8 5.1-13.1 5.2-.6 0-1.2 0-1.8-.1v8.8c0 3.8 3.1 6.9 6.8 6.9h13c3.8 0 6.9-3.1 6.9-6.8V50.7c-2.5.3-5.2-.2-7.7-1.4m22.5-14.2-79.1-.3m27.7-23.7-1.8 35.8m25-35.4L57.2 47",
                  className: "st1",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WdsPictoBusinessIcon = m));
  },
  98,
);
