__d(
  "WDSIconWdsIcChatlockUnlockedFilled.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ic-chatlock-unlocked-filled";
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
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M12.9541 7.14844V5.52295C12.9541 2.47271 15.4268 0 18.4771 0C21.5273 0 24 2.47271 24 5.52295V6.03882C24 6.59125 23.5521 7.03902 22.9996 7.03882C22.4475 7.03862 22 6.59096 22 6.03882V5.52295C22 3.57728 20.4227 2 18.4771 2C16.5314 2 14.9541 3.57728 14.9541 5.52295V7.14844H18.8353C20.308 7.14844 21.502 8.34235 21.502 9.81511V18.4578C21.502 19.9306 20.3081 21.1245 18.8353 21.1245H16.4876V21.1266H11.5068L8.03684 23.7463C7.37031 24.1462 6.50684 23.6736 6.50684 22.8963V21.1245H5.16471C3.69195 21.1245 2.49805 19.9306 2.49805 18.4578V9.81511C2.49805 8.34235 3.69195 7.14844 5.16471 7.14844H12.9541ZM7.50056 13H16.502C17.0542 13 17.502 12.5523 17.502 12C17.502 11.4477 17.0542 11 16.502 11H7.49804C6.94576 11 6.49805 11.4477 6.49805 12C6.49805 12.5523 6.94576 13 7.49805 13H7.50056ZM7.50196 15C6.94967 15 6.50196 15.4477 6.50196 16C6.50196 16.5523 6.94967 17 7.50196 17H13.498C14.0503 17 14.498 16.5523 14.498 16C14.498 15.4477 14.0503 15 13.498 15H7.50196Z",
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
