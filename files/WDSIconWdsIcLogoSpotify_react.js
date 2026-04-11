__d(
  "WDSIconWdsIcLogoSpotify.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ic-logo-spotify";
    function m(t) {
      var n = t.height,
        o = t.iconXstyle,
        a = t.viewBox,
        i = t.width,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        u;
      if (a) {
        var m = a.height,
          p = m === void 0 ? 0 : m,
          _ = a.width,
          f = _ === void 0 ? 0 : _,
          g = a.x,
          h = g === void 0 ? 0 : g,
          y = a.y,
          C = y === void 0 ? 0 : y;
        u = [h, C, f, p].join(" ");
      }
      var b = 24,
        v = 24;
      return (
        (n != null || i != null) && ((b = n), (v = i)),
        c.jsx(
          r("WDSSvgComponentBase.react"),
          babelHelpers.extends({}, l, {
            children: c.jsxs("svg", {
              viewBox: u != null ? u : "0 0 24 24",
              height: b,
              width: v,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(o),
              fill: "currentColor",
              children: [
                c.jsx("title", { children: d }),
                c.jsx("path", {
                  fill: "currentColor",
                  d: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m4.59 14.42a.6.6 0 0 1-.86.2q-3.54-2.14-8.79-.95a.62.62 0 0 1-.27-1.22c3.8-.87 7.07-.5 9.7 1.12.3.18.4.56.22.85m1.22-2.72a.8.8 0 0 1-1.07.26 13.1 13.1 0 0 0-9.97-1.17.78.78 0 0 1-.45-1.49c3.63-1.1 8.15-.57 11.23 1.33.37.22.49.7.26 1.07m.1-2.84C14.7 8.95 9.37 8.77 6.3 9.71a.94.94 0 1 1-.55-1.8c3.54-1.06 9.4-.86 13.12 1.35a.93.93 0 1 1-.96 1.6",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
