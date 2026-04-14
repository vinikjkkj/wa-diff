__d(
  "WAWebScissorsIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "scissors";
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
      var S = 24,
        R = 24;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 24 24",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("circle", {
                  cx: 6,
                  cy: 18,
                  r: 3.125,
                  stroke: "currentColor",
                  strokeWidth: 1.75,
                }),
                c.jsx("circle", {
                  cx: 6,
                  cy: 6,
                  r: 3.125,
                  stroke: "currentColor",
                  strokeWidth: 1.75,
                }),
                c.jsx("path", {
                  d: "M7.71745 14.7425C7.32693 15.1331 7.32693 15.7662 7.71745 16.1567C8.10798 16.5473 8.74114 16.5473 9.13167 16.1567L11.9372 13.3512L10.523 11.937L7.71745 14.7425Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M13.3742 9.08579L14.7884 10.5L20.6956 4.59285C21.0861 4.20232 21.0861 3.56916 20.6956 3.17864C20.305 2.78811 19.6719 2.78811 19.2814 3.17864L13.3742 9.08579Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M9.01594 7.60173C8.62542 7.21121 7.99226 7.21121 7.60173 7.60173C7.21121 7.99226 7.21121 8.62542 7.60173 9.01594L19.3586 20.7728C19.7492 21.1634 20.3823 21.1634 20.7728 20.7728C21.1634 20.3823 21.1634 19.7492 20.7728 19.3586L9.01594 7.60173ZM12 12.5001C12.2761 12.5001 12.5 12.2762 12.5 12.0001C12.5 11.724 12.2761 11.5001 12 11.5001C11.7239 11.5001 11.5 11.724 11.5 12.0001C11.5 12.2762 11.7239 12.5001 12 12.5001Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.ScissorsIcon = m));
  },
  98,
);
