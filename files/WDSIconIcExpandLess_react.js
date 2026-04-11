__d(
  "WDSIconIcExpandLess.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-expand-less";
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
                  d: "M12 10.775L8.1 14.675C7.91667 14.8584 7.68334 14.95 7.4 14.95C7.11667 14.95 6.88334 14.8584 6.7 14.675C6.51667 14.4917 6.425 14.2584 6.425 13.975C6.425 13.6917 6.51667 13.4584 6.7 13.275L11.3 8.67502C11.4 8.57502 11.5083 8.50419 11.625 8.46252C11.7417 8.42086 11.8667 8.40002 12 8.40002C12.1333 8.40002 12.2583 8.42086 12.375 8.46252C12.4917 8.50419 12.6 8.57502 12.7 8.67502L17.3 13.275C17.4833 13.4584 17.575 13.6917 17.575 13.975C17.575 14.2584 17.4833 14.4917 17.3 14.675C17.1167 14.8584 16.8833 14.95 16.6 14.95C16.3167 14.95 16.0833 14.8584 15.9 14.675L12 10.775Z",
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
