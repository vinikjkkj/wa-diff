__d(
  "WAWebIcBusinessCenterIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-business-center";
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
              viewBox: p,
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  fill: "currentColor",
                  d: "M4 21a2 2 0 0 1-1.4-.6A2 2 0 0 1 2 19V8c0-.5.2-1 .6-1.4A2 2 0 0 1 4 6h4V4c0-.5.2-1 .6-1.4A2 2 0 0 1 10 2h4c.6 0 1 .2 1.4.6.4.4.6.9.6 1.4v2h4c.6 0 1 .2 1.4.6.4.4.6.9.6 1.4v11c0 .6-.2 1-.6 1.4a2 2 0 0 1-1.4.6H4Zm6-15h4V4h-4v2Zm10 9h-5v1c0 .3-.1.5-.3.7a1 1 0 0 1-.7.3h-4a1 1 0 0 1-.7-.3A1 1 0 0 1 9 16v-1H4v4h16v-4Zm-9 0h2v-2h-2v2Zm-7-2h5v-1c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h4c.3 0 .5.1.7.3.2.2.3.4.3.7v1h5V8H4v5Z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.IcBusinessCenterIcon = m));
  },
  98,
);
