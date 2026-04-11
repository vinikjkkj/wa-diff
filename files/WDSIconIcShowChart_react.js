__d(
  "WDSIconIcShowChart.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-show-chart";
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
                  d: "M2.74999 17.75C2.53332 17.5333 2.42499 17.2833 2.42499 17C2.42499 16.7166 2.53332 16.4666 2.74999 16.25L8.07499 10.925C8.45832 10.5416 8.93332 10.35 9.49999 10.35C10.0667 10.35 10.5417 10.5416 10.925 10.925L13.5 13.5L19.9 6.27495C20.0833 6.05828 20.3208 5.94995 20.6125 5.94995C20.9042 5.94995 21.15 6.04995 21.35 6.24995C21.5333 6.43328 21.6292 6.65412 21.6375 6.91245C21.6458 7.17078 21.5583 7.39995 21.375 7.59995L14.9 14.9C14.5167 15.3333 14.0417 15.5625 13.475 15.5875C12.9083 15.6125 12.4167 15.4166 12 15L9.49999 12.5L4.24999 17.75C4.03332 17.9666 3.78332 18.075 3.49999 18.075C3.21665 18.075 2.96665 17.9666 2.74999 17.75Z",
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
