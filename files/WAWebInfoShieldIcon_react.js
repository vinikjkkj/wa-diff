__d(
  "WAWebInfoShieldIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "info-shield";
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
      var S = 16,
        R = 12;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 12 16",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "currentColor",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M5.25 11.75H6.75V7.25H5.25V11.75ZM6 5.75C6.2125 5.75 6.39063 5.67813 6.53438 5.53438C6.67813 5.39062 6.75 5.2125 6.75 5C6.75 4.7875 6.67813 4.60938 6.53438 4.46563C6.39063 4.32188 6.2125 4.25 6 4.25C5.7875 4.25 5.60938 4.32188 5.46563 4.46563C5.32188 4.60938 5.25 4.7875 5.25 5C5.25 5.2125 5.32188 5.39062 5.46563 5.53438C5.60938 5.67813 5.7875 5.75 6 5.75ZM6 15.5C4.2625 15.0625 2.82812 14.0656 1.69688 12.5094C0.565625 10.9531 0 9.225 0 7.325V2.75L6 0.5L12 2.75V7.325C12 9.225 11.4344 10.9531 10.3031 12.5094C9.17188 14.0656 7.7375 15.0625 6 15.5ZM6 13.925C7.3 13.5125 8.375 12.6875 9.225 11.45C10.075 10.2125 10.5 8.8375 10.5 7.325V3.78125L6 2.09375L1.5 3.78125V7.325C1.5 8.8375 1.925 10.2125 2.775 11.45C3.625 12.6875 4.7 13.5125 6 13.925Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.InfoShieldIcon = m));
  },
  98,
);
