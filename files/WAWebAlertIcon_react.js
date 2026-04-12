__d(
  "WAWebAlertIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "alert";
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
      var S = 10,
        R = 11;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 11 10",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              version: "1.1",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  fill: "currentColor",
                  d: "M1.3,10h8.3c0.8,0,1.3-0.6,1.3-1.3c0-0.2-0.1-0.4-0.2-0.6L6.7,0.7C6.4,0.2,6,0,5.5,0C5,0,4.6,0.2,4.3,0.7L0.2,8     C0.1,8.2,0,8.4,0,8.6C0,9.4,0.5,10,1.3,10z M5.5,6.4C5.2,6.4,5,6.2,5,5.9L4.9,3.5C4.9,3.2,5.2,3,5.5,3c0.3,0,0.6,0.2,0.6,0.6L6,5.9     C6,6.2,5.8,6.4,5.5,6.4z M5.5,8.3c-0.4,0-0.6-0.2-0.6-0.6c0-0.3,0.3-0.6,0.6-0.6c0.4,0,0.6,0.2,0.6,0.6S5.9,8.3,5.5,8.3z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.AlertIcon = m));
  },
  98,
);
