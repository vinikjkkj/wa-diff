__d(
  "WAWebArchiveFilledRefreshedIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "archive-filled-refreshed";
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
                  d: "M5 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19V6.525q0-.35.112-.675.113-.325.338-.6L4.7 3.725q.274-.35.688-.538Q5.8 3 6.25 3h11.5q.45 0 .863.188.412.187.687.537l1.25 1.525q.225.274.337.6t.113.675V19q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21zm.4-15h13.2l-.85-1H6.25zm6.6 4a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 11v3.2l-.9-.9a.95.95 0 0 0-.7-.275.95.95 0 0 0-.7.275.95.95 0 0 0-.275.7q0 .425.275.7l2.6 2.6q.3.3.7.3t.7-.3l2.6-2.6a.95.95 0 0 0 .275-.7.95.95 0 0 0-.275-.7.95.95 0 0 0-.7-.275.95.95 0 0 0-.7.275l-.9.9V11a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 10",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.ArchiveFilledRefreshedIcon = m));
  },
  98,
);
