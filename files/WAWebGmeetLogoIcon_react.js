__d(
  "WAWebGmeetLogoIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "gmeet-logo";
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
      var S = 72,
        R = 87.5;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 87.5 72",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  fill: "#00832d",
                  d: "m49.5 36 8.53 9.75 11.47 7.33 2-17.02-2-16.64-11.69 6.44z",
                }),
                c.jsx("path", {
                  fill: "#0066da",
                  d: "M0 51.5V66c0 3.315 2.685 6 6 6h14.5l3-10.96-3-9.54-9.95-3z",
                }),
                c.jsx("path", {
                  fill: "#e94235",
                  d: "M20.5 0 0 20.5l10.55 3 9.95-3 2.95-9.41z",
                }),
                c.jsx("path", { fill: "#2684fc", d: "M20.5 20.5H0v31h20.5z" }),
                c.jsx("path", {
                  fill: "#00ac47",
                  d: "M82.6 8.68 69.5 19.42v33.66l13.16 10.79c1.97 1.54 4.85.135 4.85-2.37V11c0-2.535-2.945-3.925-4.91-2.32M49.5 36v15.5h-29V72h43c3.315 0 6-2.685 6-6V53.08z",
                }),
                c.jsx("path", {
                  fill: "#ffba00",
                  d: "M63.5 0h-43v20.5h29V36l20-16.57V6c0-3.315-2.685-6-6-6",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.GmeetLogoIcon = m));
  },
  98,
);
