__d(
  "WAWebMicFilledIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "mic-filled";
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
                  d: "M12 14a2.9 2.9 0 0 1-2.125-.875A2.9 2.9 0 0 1 9 11V5q0-1.25.875-2.125A2.9 2.9 0 0 1 12 2q1.25 0 2.125.875T15 5v6q0 1.25-.875 2.125A2.9 2.9 0 0 1 12 14m0 7a1 1 0 0 1-1-1v-2.075q-2.6-.35-4.3-2.325-1.37-1.59-1.636-3.603C4.992 11.45 5.448 11 6 11s.988.452 1.09.995q.274 1.443 1.373 2.543Q9.926 16 12 16q2.075 0 3.537-1.463 1.099-1.098 1.373-2.543c.102-.542.538-.994 1.09-.994s1.008.45.936.997Q18.669 14.01 17.3 15.6q-1.7 1.975-4.3 2.325V20a1 1 0 0 1-1 1",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.MicFilledIcon = m));
  },
  98,
);
