__d(
  "WAWebBackRefreshedIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "back-refreshed";
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
                  d: "M7.8248 13L12.7248 17.9C12.9248 18.1 13.0206 18.3333 13.0123 18.6C13.004 18.8667 12.8998 19.1 12.6998 19.3C12.4998 19.4833 12.2665 19.5792 11.9998 19.5875C11.7331 19.5958 11.4998 19.5 11.2998 19.3L4.6998 12.7C4.5998 12.6 4.52897 12.4917 4.4873 12.375C4.44564 12.2583 4.4248 12.1333 4.4248 12C4.4248 11.8667 4.44564 11.7417 4.4873 11.625C4.52897 11.5083 4.5998 11.4 4.6998 11.3L11.2998 4.69999C11.4831 4.51665 11.7123 4.42499 11.9873 4.42499C12.2623 4.42499 12.4998 4.51665 12.6998 4.69999C12.8998 4.89999 12.9998 5.13749 12.9998 5.41249C12.9998 5.68749 12.8998 5.92499 12.6998 6.12499L7.8248 11H18.9998C19.2831 11 19.5206 11.0958 19.7123 11.2875C19.904 11.4792 19.9998 11.7167 19.9998 12C19.9998 12.2833 19.904 12.5208 19.7123 12.7125C19.5206 12.9042 19.2831 13 18.9998 13H7.8248Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.BackRefreshedIcon = m));
  },
  98,
);
