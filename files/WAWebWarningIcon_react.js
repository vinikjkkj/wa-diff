__d(
  "WAWebWarningIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "warning";
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
      var S = 18,
        R = 20;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 20 18",
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
                  d: "M17.5301 17.5046C19.0701 17.5046 20.0301 15.8346 19.2601 14.5046L11.7301 1.49457C10.9601 0.16457 9.04012 0.16457 8.27012 1.49457L0.740121 14.5046C-0.0298788 15.8346 0.930121 17.5046 2.47012 17.5046H17.5301ZM10.0001 10.5046C9.45012 10.5046 9.00012 10.0546 9.00012 9.50457V7.50457C9.00012 6.95457 9.45012 6.50457 10.0001 6.50457C10.5501 6.50457 11.0001 6.95457 11.0001 7.50457V9.50457C11.0001 10.0546 10.5501 10.5046 10.0001 10.5046ZM9.00012 12.5046V14.5046H11.0001V12.5046H9.00012Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.WarningIcon = m));
  },
  98,
);
