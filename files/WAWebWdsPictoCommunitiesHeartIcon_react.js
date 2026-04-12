__d(
  "WAWebWdsPictoCommunitiesHeartIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-picto-communities-heart";
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
                c.jsx("path", {
                  fill: "#25d366",
                  stroke: "#111b21",
                  strokeWidth: 1.5,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M10.9 67.9c-2.4 0-4.4-1.9-4.5-4.4 0-1.4-.1-3.8.1-5 .3-2.4 1.7-4.2 3.2-5.4 2.9-2.2 7.2-3.3 11.7-3.3 5.6 0 23.4 3.3 23.4 3.3s17.8-3.3 23.4-3.3c4.5 0 8.8 1 11.7 3.3 1.5 1.2 2.9 2.9 3.2 5.4.1 1.1.1 3.6.1 5-.1 2.5-2.1 4.4-4.5 4.4z",
                  className: "st0",
                }),
                c.jsx("path", {
                  fill: "#25d366",
                  stroke: "#111b21",
                  strokeWidth: 1.5,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M61.8 67.9c2.4 0 4.4-1.9 4.5-4.4.3-6.2-.3-7.8-.5-8.4-2.2-6.7-15.4-8.2-20.4-8.2S27.1 48.4 25 55.1c-.2.6-.8 2.3-.5 8.4.1 2.4 2 4.4 4.5 4.4zm6.8-21c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9m-23.3-3c6.6 0 12-5.4 12-12s-5.4-12-12-12-12 5.4-12 12 5.4 12 12 12m-23.2 3c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9",
                  className: "st0",
                }),
                c.jsx("path", {
                  d: "M60.2 73.6c6.6-5.7 11.1-9.4 11.1-13.3 0-4.7-4.1-5.7-5.8-5.7-3.5 0-5.3 2.7-5.3 2.7s-1.9-2.7-5.3-2.7c-1.7 0-5.8 1-5.8 5.7 0 3.9 4.5 7.6 11.1 13.3",
                  fill: "#e6ffda",
                  stroke: "#111b21",
                  strokeWidth: 1.5,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WdsPictoCommunitiesHeartIcon = m));
  },
  98,
);
