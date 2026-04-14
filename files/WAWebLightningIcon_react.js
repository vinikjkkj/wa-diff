__d(
  "WAWebLightningIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "lightning";
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
              viewBox: p != null ? p : "0 0 13 22",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M4.48313 22C4.05536 22 3.72536 21.6211 3.78647 21.1933L4.88647 13.4444H0.608689C-0.466867 13.4444 0.205356 12.5278 0.2298 12.4911C1.7698 9.76556 4.0798 5.73222 7.13536 0.354444C7.25758 0.134444 7.50202 0 7.74647 0C8.17424 0 8.50424 0.378889 8.44313 0.806667L7.34313 8.55556H11.6331C12.122 8.55556 12.3909 8.78778 12.122 9.36222C8.10091 16.3778 5.76647 20.4722 5.09424 21.6456C4.97202 21.8656 4.7398 22 4.48313 22Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.LightningIcon = m));
  },
  98,
);
