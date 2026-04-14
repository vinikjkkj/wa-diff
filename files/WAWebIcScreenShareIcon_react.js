__d(
  "WAWebIcScreenShareIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-screen-share";
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
                  d: "M11 11h2v1.4q0 .18.15.24t.28-.07l2.22-2.22a.5.5 0 0 0 0-.7l-2.22-2.23q-.13-.12-.28-.06T13 7.6V9h-2q-1.25 0-2.12.88A3 3 0 0 0 8 12v1q0 .42.29.71.29.3.71.29.42 0 .71-.29.3-.29.29-.71v-1q0-.42.29-.71.29-.3.71-.29M2 21a1 1 0 0 1-.71-.29A1 1 0 0 1 1 20q0-.42.29-.71.29-.3.71-.29h20q.42 0 .71.29.3.29.29.71 0 .42-.29.71-.29.3-.71.29zm2-3q-.82 0-1.41-.59-.6-.59-.59-1.41V5q0-.82.59-1.41Q3.18 2.99 4 3h16q.83 0 1.41.59.6.58.59 1.41v11q0 .83-.59 1.41-.59.6-1.41.59zm0-2h16V5H4z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.IcScreenShareIcon = m));
  },
  98,
);
