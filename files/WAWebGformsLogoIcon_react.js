__d(
  "WAWebGformsLogoIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "gforms-logo";
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
        R = 64;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 64 88",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "m42 22 12.065 2.28L64 22 42 0l-3.035 10.43Z",
                  fill: "#56368a",
                }),
                c.jsx("path", {
                  d: "M42 22V0H6C2.685 0 0 2.685 0 6v76c0 3.315 2.685 6 6 6h52c3.315 0 6-2.685 6-6V22Z",
                  fill: "#7248b9",
                }),
                c.jsx("path", {
                  d: "M17 63.5c-1.655 0-3-1.345-3-3s1.345-3 3-3 3 1.345 3 3-1.345 3-3 3m0-12c-1.655 0-3-1.345-3-3s1.345-3 3-3 3 1.345 3 3-1.345 3-3 3m0-12c-1.655 0-3-1.345-3-3s1.345-3 3-3 3 1.345 3 3-1.345 3-3 3M50 63H25v-5h25zm0-12H25v-5h25zm0-12H25v-5h25z",
                  fill: "#fff",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.GformsLogoIcon = m));
  },
  98,
);
