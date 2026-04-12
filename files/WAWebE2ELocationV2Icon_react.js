__d(
  "WAWebE2ELocationV2Icon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "e2e-location-v2";
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
      var S = 20,
        R = 14;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 14 20",
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
                  d: "M0 7.26562C0 3.39563 3.13 0.265625 7 0.265625C10.87 0.265625 14 3.39563 14 7.26562C14 11.4356 9.58 17.1856 7.77 19.3756C7.37 19.8556 6.64 19.8556 6.24 19.3756C4.42 17.1856 0 11.4356 0 7.26562ZM4.5 7.26562C4.5 8.64563 5.62 9.76562 7 9.76562C8.38 9.76562 9.5 8.64563 9.5 7.26562C9.5 5.88562 8.38 4.76562 7 4.76562C5.62 4.76562 4.5 5.88562 4.5 7.26562Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.E2ELocationV2Icon = m));
  },
  98,
);
