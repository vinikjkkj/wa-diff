__d(
  "WDSIconWdsIcLogoThreads.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ic-logo-threads";
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
                  fillRule: "evenodd",
                  d: "M19.8 13.79a5.3 5.3 0 0 0-2.97-2.7 5 5 0 0 0-1.32-3.32 4.5 4.5 0 0 0-3.3-1.2h-.03c-1.66 0-3.05.67-3.91 1.91l-.06.09 1.67 1.1.05-.09a2.6 2.6 0 0 1 2.25-1.05h.02q1.32.01 1.95.7.42.48.58 1.28-1.14-.16-2.46-.1a5.2 5.2 0 0 0-3.15 1.13 3.18 3.18 0 0 0 .45 5.13c.79.5 1.8.74 2.84.68a4.3 4.3 0 0 0 3.24-1.5q.82-1.01 1.08-2.6.86.53 1.22 1.33c.44.97.47 2.57-.9 3.88-1.22 1.15-2.67 1.66-4.9 1.68q-3.7-.04-5.5-2.23Q4.95 15.85 4.9 12q.04-3.85 1.74-5.9 1.8-2.2 5.5-2.24 3.74.04 5.61 2.25a7 7 0 0 1 1.38 2.68l.03.1 1.95-.5-.02-.1a9 9 0 0 0-1.8-3.44c-1.64-1.94-4.05-2.93-7.14-2.95h-.01c-3.08.02-5.47 1.01-7.07 2.96C3.65 6.6 2.92 9 2.9 12v.02q.03 4.52 2.18 7.13c1.6 1.95 3.99 2.94 7.07 2.96h.01c2.74-.02 4.68-.7 6.29-2.24 2.1-2 2.04-4.52 1.34-6.07m-5.92 1.04c-.46.41-1.03.53-1.57.56a3 3 0 0 1-1.54-.3c-.43-.24-.71-.6-.74-1.08-.02-.35.11-.73.47-1.04.37-.3.96-.54 1.89-.6a11 11 0 0 1 2.4.15c-.1 1.22-.47 1.91-.91 2.31",
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
