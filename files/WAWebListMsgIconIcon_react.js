__d(
  "WAWebListMsgIconIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "list-msg-icon";
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
      var S = 12,
        R = 15;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 -4 15 20",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              version: "1.1",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("g", {
                  id: "Page-1",
                  stroke: "none",
                  strokeWidth: 1,
                  fill: "none",
                  fillRule: "evenodd",
                  children: c.jsxs("g", {
                    id: "format_list_bulleted-black-18dp",
                    transform: "translate(-1.000000, -3.000000)",
                    children: [
                      c.jsx("polygon", {
                        id: "Path",
                        points: "0 0 18 0 18 18 0 18",
                      }),
                      c.jsx("path", {
                        d: "M3,7.875 C2.3775,7.875 1.875,8.3775 1.875,9 C1.875,9.6225 2.3775,10.125 3,10.125 C3.6225,10.125 4.125,9.6225 4.125,9 C4.125,8.3775 3.6225,7.875 3,7.875 Z M3,3.375 C2.3775,3.375 1.875,3.8775 1.875,4.5 C1.875,5.1225 2.3775,5.625 3,5.625 C3.6225,5.625 4.125,5.1225 4.125,4.5 C4.125,3.8775 3.6225,3.375 3,3.375 Z M3,12.375 C2.3775,12.375 1.875,12.885 1.875,13.5 C1.875,14.115 2.385,14.625 3,14.625 C3.615,14.625 4.125,14.115 4.125,13.5 C4.125,12.885 3.6225,12.375 3,12.375 Z M5.25,14.25 L15.75,14.25 L15.75,12.75 L5.25,12.75 L5.25,14.25 Z M5.25,9.75 L15.75,9.75 L15.75,8.25 L5.25,8.25 L5.25,9.75 Z M5.25,3.75 L5.25,5.25 L15.75,5.25 L15.75,3.75 L5.25,3.75 Z",
                        id: "Shape",
                        fill: "currentColor",
                        fillRule: "nonzero",
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
      (l.ListMsgIconIcon = m));
  },
  98,
);
