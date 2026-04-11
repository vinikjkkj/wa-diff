__d(
  "WDSIconIcExpandMore.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-expand-more";
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
                  d: "M12 14.95C11.8667 14.95 11.7417 14.9292 11.625 14.8875C11.5083 14.8459 11.4 14.775 11.3 14.675L6.7 10.075C6.51667 9.89169 6.425 9.65836 6.425 9.37502C6.425 9.09169 6.51667 8.85836 6.7 8.67502C6.88334 8.49169 7.11667 8.40002 7.4 8.40002C7.68334 8.40002 7.91667 8.49169 8.1 8.67502L12 12.575L15.9 8.67502C16.0833 8.49169 16.3167 8.40002 16.6 8.40002C16.8833 8.40002 17.1167 8.49169 17.3 8.67502C17.4833 8.85836 17.575 9.09169 17.575 9.37502C17.575 9.65836 17.4833 9.89169 17.3 10.075L12.7 14.675C12.6 14.775 12.4917 14.8459 12.375 14.8875C12.2583 14.9292 12.1333 14.95 12 14.95Z",
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
