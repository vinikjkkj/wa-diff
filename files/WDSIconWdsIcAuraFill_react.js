__d(
  "WDSIconWdsIcAuraFill.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ic-aura-fill";
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
                  d: "M5.89 4.25a51 51 0 0 1 12.21 0c.47.1.94.26 1.25.65l.2.31 1.88 3.73c.4.64.2 1.61-.25 2.17l-7.66 9.15q-.61.7-1.52.73c-.6 0-1.12-.3-1.52-.73l-7.65-9.15c-.46-.55-.65-1.53-.25-2.17L4.45 5.2q.1-.17.2-.31c.3-.38.77-.56 1.24-.65m6.55 3.04a.47.47 0 0 0-.88 0l-.84 1.98-2.15.17c-.42.03-.63.57-.29.84l1.64 1.43-.48 2.1c-.12.4.39.74.72.5l1.84-1.1 1.84 1.1c.33.24.84-.1.72-.5l-.48-2.1 1.64-1.43c.34-.27.13-.81-.29-.84l-2.15-.17z",
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
