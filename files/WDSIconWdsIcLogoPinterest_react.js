__d(
  "WDSIconWdsIcLogoPinterest.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ic-logo-pinterest";
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
                  d: "M12 2.08a9.92 9.92 0 0 0-3.98 19.01c-.03-.7-.01-1.52.17-2.28l1.28-5.4s-.32-.64-.32-1.58c0-1.47.85-2.57 1.91-2.57.9 0 1.34.68 1.34 1.5 0 .9-.58 2.26-.87 3.52-.25 1.05.52 1.9 1.56 1.9 1.88 0 3.15-2.4 3.15-5.27 0-2.17-1.47-3.8-4.13-3.8a4.7 4.7 0 0 0-4.89 4.75c0 .87.26 1.47.66 1.95.18.21.2.3.14.55l-.2.8c-.07.25-.27.34-.5.25-1.39-.57-2.03-2.09-2.03-3.8 0-2.82 2.38-6.2 7.09-6.2 3.79 0 6.29 2.74 6.29 5.69 0 3.9-2.17 6.8-5.36 6.8-1.07 0-2.08-.58-2.43-1.24 0 0-.57 2.3-.7 2.73a8 8 0 0 1-1 2.13A9.93 9.93 0 1 0 12 2.08",
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
