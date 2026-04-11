__d(
  "WDSIconWdsIcCalendarSearch.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ic-calendar-search";
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
                  stroke: "currentColor",
                  d: "M16.5 12.5q1.67 0 2.83 1.17a3.8 3.8 0 0 1 1 3.95q-.2.55-.46 1.03l-.2.33.28.27 2.5 2.5q.13.12.13.35t-.13.35a.5.5 0 0 1-.35.13.5.5 0 0 1-.35-.13l-2.5-2.5-.27-.27-.33.19q-.48.27-1.03.46a3.84 3.84 0 0 1-3.95-1 3.8 3.8 0 0 1-1.17-2.83q0-1.67 1.17-2.83a3.8 3.8 0 0 1 2.83-1.17ZM15 2.5q.23 0 .36.14.14.14.14.36v1.5H17q.62 0 1.06.44T18.5 6v4.01q0 .23-.14.36-.14.15-.36.14a.5.5 0 0 1-.36-.14.5.5 0 0 1-.14-.36V9.5h-13v9h5.9q.22 0 .35.14.14.14.14.36 0 .23-.14.36-.13.15-.36.14H5q-.62 0-1.06-.44T3.5 18V6q0-.62.44-1.06T5 4.5h1.5V3q0-.23.14-.36.13-.15.36-.14t.36.14.14.36v1.5h7V3q0-.23.14-.36.13-.15.36-.14Zm1.5 11q-1.25 0-2.13.87-.87.88-.87 2.13t.87 2.13q.88.87 2.13.87t2.13-.87q.87-.88.87-2.13t-.87-2.13a3 3 0 0 0-2.13-.87Zm-12-5h13v-3h-13z",
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
