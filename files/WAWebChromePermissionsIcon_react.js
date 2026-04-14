__d(
  "WAWebChromePermissionsIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "chrome-permissions";
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
      var S = 14,
        R = 14;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 14 14",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M11.13 7.617a2.76 2.76 0 0 1 2.62 2.758l-.004.141a2.76 2.76 0 0 1-2.758 2.62l-.142-.003a2.76 2.76 0 0 1-2.616-2.617l-.003-.141a2.76 2.76 0 0 1 2.762-2.762zm-.142 1.796a.962.962 0 1 0 .001 1.924.962.962 0 0 0 0-1.924",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M7 11.295H.863v-1.84H7z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M3.153.867a2.76 2.76 0 0 1 2.62 2.758l-.003.141a2.76 2.76 0 0 1-2.758 2.62l-.143-.003A2.76 2.76 0 0 1 .254 3.766L.25 3.625A2.76 2.76 0 0 1 3.012.863zm-.141 1.796a.962.962 0 1 0 0 1.924.962.962 0 0 0 0-1.924",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M13.137 4.545H7v-1.84h6.137z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.ChromePermissionsIcon = m));
  },
  98,
);
