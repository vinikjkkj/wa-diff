__d(
  "WAWebActionCheckCircleIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "action-check-circle";
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
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M0.5 5C0.5 2.24 2.74 0 5.5 0C8.26 0 10.5 2.24 10.5 5C10.5 7.76 8.26 10 5.5 10C2.74 10 0.5 7.76 0.5 5ZM2.35 5.35L4.145 7.145C4.34 7.34 4.66 7.34 4.85 7.145L8.645 3.35C8.84 3.155 8.84 2.84 8.645 2.645C8.45 2.45 8.135 2.45 7.94 2.645L4.5 6.085L3.055 4.645C2.86 4.45 2.545 4.45 2.35 4.645C2.25637 4.73842 2.20376 4.86524 2.20376 4.9975C2.20376 5.12976 2.25637 5.25658 2.35 5.35Z",
                  fill: "#00A884",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.ActionCheckCircleIcon = m));
  },
  98,
);
