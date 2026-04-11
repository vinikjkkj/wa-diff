__d(
  "WDSIconWdsIcLogoMessenger.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ic-logo-messenger";
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
                  d: "M16.98 9.26c.4-.3.91.18.65.6l-2.75 4.37a1.4 1.4 0 0 1-2.04.37l-2.19-1.64a.6.6 0 0 0-.68 0l-2.95 2.25c-.4.3-.91-.18-.65-.6l2.75-4.37a1.4 1.4 0 0 1 2.04-.37l2.19 1.64c.2.15.48.15.68 0z",
                }),
                c.jsx("path", {
                  fill: "currentColor",
                  fillRule: "evenodd",
                  d: "M12 1.86c5.8 0 10.38 4.28 10.38 10.1 0 5.8-4.58 10.09-10.38 10.09q-1.5 0-2.89-.38l-1.78.79c-1.14.5-2.42-.3-2.46-1.55l-.05-1.56a10 10 0 0 1-3.2-7.4C1.63 6.14 6.2 1.85 12 1.85m0 2c-4.77 0-8.37 3.46-8.37 8.1 0 2.44 1 4.53 2.6 5.97l.13.13q.37.4.45.94l.01.18.04 1.3 1.52-.67.14-.06c.33-.1.7-.12 1.03-.03q1.16.32 2.45.33c4.77 0 8.38-3.46 8.38-8.1s-3.61-8.1-8.38-8.1",
                  clipRule: "evenodd",
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
