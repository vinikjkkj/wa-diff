__d(
  "WDSIconWdsIcRead.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ic-read";
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
                  d: "M14.73 6.01002C15.08 5.58002 15.71 5.51002 16.14 5.86002L16.15 5.87001C16.58 6.22001 16.65 6.85002 16.3 7.28002L7.59995 18.01C7.41995 18.23 7.14995 18.37 6.86995 18.38H6.81995C6.55995 18.38 6.29995 18.27 6.10995 18.08L2.07995 13.99C1.67995 13.6 1.68995 12.97 2.07995 12.58C2.46995 12.18 3.09995 12.19 3.48995 12.58L6.73995 15.87L14.73 6.01002Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M20.4399 6.13013C20.7899 5.70013 21.4199 5.63013 21.8499 5.98013H21.8399C22.2699 6.33013 22.3399 6.96013 21.9899 7.39013L13.5799 17.8401C13.3999 18.0601 13.1299 18.2001 12.8499 18.2101H12.7999C12.5299 18.2101 12.2799 18.1001 12.0899 17.9101L10.7299 16.6501C10.4899 16.4401 10.4799 16.0701 10.7099 15.8401L11.2699 15.1601C11.4799 14.9601 11.7999 14.9501 12.0199 15.1301L12.7299 15.7101L20.4399 6.13013Z",
                  fill: "currentColor",
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
