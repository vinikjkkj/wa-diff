__d(
  "WDSIconWdsIcChatlockOutline.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ic-chatlock-outline";
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
                  d: "M18.8 7.09998H17.5V5.59998C17.5 2.59998 15 0.0999756 12 0.0999756C9 0.0999756 6.5 2.59998 6.5 5.59998V7.09998H5.2C3.7 7.09998 2.5 8.29998 2.5 9.79998V18.4C2.5 19.9 3.7 21.1 5.2 21.1H6.5V22.9C6.5 23.5 7 23.9 7.5 23.9C7.7 23.9 7.8 23.9 8 23.7L11.5 21.1H18.8C20.3 21.1 21.5 19.9 21.5 18.4V9.79998C21.5 8.29998 20.3 7.09998 18.8 7.09998ZM8.5 5.59998C8.5 3.59998 10.1 2.09998 12 2.09998C13.9 2.09998 15.5 3.69998 15.5 5.59998V7.09998H8.5V5.59998ZM19.5 18.5C19.5 18.9 19.2 19.2 18.8 19.2H10.8L8.5 21V19.2H5.2C4.8 19.2 4.5 18.9 4.5 18.5V9.79998C4.5 9.39998 4.8 9.09998 5.2 9.09998H18.9C19.3 9.09998 19.6 9.39998 19.6 9.79998V18.5H19.5Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M16.5 11H7.5C6.9 11 6.5 11.4 6.5 12C6.5 12.6 6.9 13 7.5 13H16.5C17.1 13 17.5 12.6 17.5 12C17.5 11.4 17.1 11 16.5 11Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M13.5 15H7.5C6.9 15 6.5 15.4 6.5 16C6.5 16.6 6.9 17 7.5 17H13.5C14.1 17 14.5 16.6 14.5 16C14.5 15.4 14.1 15 13.5 15Z",
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
