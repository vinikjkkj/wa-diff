__d(
  "WAWebSettingsBlockedIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "settings-blocked";
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
                  d: "M12 2.3C6.7 2.3 2.3 6.6 2.3 12C2.3 17.4 6.6 21.7 12 21.7C17.4 21.7 21.7 17.4 21.7 12C21.7 6.6 17.3 2.3 12 2.3ZM4.7 12C4.7 8 8 4.7 12 4.7C13.6 4.7 15.1 5.2 16.3 6.1L6.1 16.3C5.2 15.1 4.7 13.6 4.7 12ZM12 19.3C10.4 19.3 9 18.8 7.8 17.9L17.9 7.8C18.8 9 19.3 10.4 19.3 12C19.3 16 16 19.3 12 19.3Z",
                  fill: "currentColor",
                  style: { fillOpacity: 1 },
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.SettingsBlockedIcon = m));
  },
  98,
);
