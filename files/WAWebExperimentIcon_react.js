__d(
  "WAWebExperimentIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "experiment";
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
                c.jsx("path", {
                  d: "M4.3001 21C3.6001 21 3.10427 20.675 2.8126 20.025C2.52093 19.375 2.61677 18.7833 3.1001 18.25L9.3001 11.25V4.5H8.0001C7.78343 4.5 7.60427 4.42917 7.4626 4.2875C7.32093 4.14583 7.2501 3.96667 7.2501 3.75C7.2501 3.53333 7.32093 3.35417 7.4626 3.2125C7.60427 3.07083 7.78343 3 8.0001 3H16.0001C16.2168 3 16.3959 3.07083 16.5376 3.2125C16.6793 3.35417 16.7501 3.53333 16.7501 3.75C16.7501 3.96667 16.6793 4.14583 16.5376 4.2875C16.3959 4.42917 16.2168 4.5 16.0001 4.5H14.7001V11.25L20.9001 18.25C21.3834 18.7833 21.4793 19.375 21.1876 20.025C20.8959 20.675 20.4001 21 19.7001 21H4.3001Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.ExperimentIcon = m));
  },
  98,
);
