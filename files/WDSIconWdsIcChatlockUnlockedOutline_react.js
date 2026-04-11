__d(
  "WDSIconWdsIcChatlockUnlockedOutline.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ic-chatlock-unlocked-outline";
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
                c.jsxs("g", {
                  clipPath: "url(#clip0_4359_63)",
                  children: [
                    c.jsx("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M5.16471 7.14771C3.69195 7.14771 2.49805 8.34161 2.49805 9.81437V18.4571C2.49805 19.9299 3.69195 21.1238 5.16471 21.1238H6.50684V22.8956C6.50684 23.6729 7.37031 24.1455 8.03684 23.7456L11.5068 21.1259H16.4876V21.1238H18.8353C20.3081 21.1238 21.502 19.9299 21.502 18.4571V9.81437C21.502 8.34161 20.308 7.14771 18.8353 7.14771H5.16471ZM18.8353 9.14771H5.16471C4.79653 9.14771 4.49805 9.44619 4.49805 9.81437V18.4571C4.49805 18.8253 4.79653 19.1238 5.16471 19.1238H8.50684V20.8848L10.8367 19.1259H14.4876V19.1238H18.8353C19.2035 19.1238 19.502 18.8253 19.502 18.4571V9.81437C19.502 9.44629 19.2033 9.14787 18.8353 9.14771Z",
                      fill: "currentColor",
                    }),
                    c.jsx("path", {
                      d: "M7.50038 13H16.5018C17.054 13 17.5018 12.5523 17.5018 12C17.5018 11.4477 17.054 11 16.5018 11H7.49786C6.94558 11 6.49786 11.4477 6.49786 12C6.49786 12.5523 6.94558 13 7.49786 13H7.50038ZM7.50177 15C6.94949 15 6.50177 15.4477 6.50177 16C6.50177 16.5523 6.94949 17 7.50177 17H13.4979C14.0501 17 14.4979 16.5523 14.4979 16C14.4979 15.4477 14.0501 15 13.4979 15H7.50177ZM12.9546 5.52295V7.24744H14.9546V5.52295C14.9546 3.57728 16.5319 2 18.4776 2C20.4232 2 22.0005 3.57728 22.0005 5.52295V6.03882C22.0005 6.59096 22.448 7.03862 23.0002 7.03882C23.5526 7.03902 24.0005 6.59125 24.0005 6.03882V5.52295C24.0005 2.47271 21.5278 0 18.4776 0C15.4273 0 12.9546 2.47271 12.9546 5.52295Z",
                      fill: "currentColor",
                    }),
                  ],
                }),
                c.jsx("defs", {
                  children: c.jsx("clipPath", {
                    id: "clip0_4359_63",
                    children: c.jsx("rect", {
                      width: 24,
                      height: 24,
                      fill: "white",
                    }),
                  }),
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
