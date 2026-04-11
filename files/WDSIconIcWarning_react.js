__d(
  "WDSIconIcWarning.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-warning";
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
                  d: "M2.725 21C2.54167 21 2.375 20.9542 2.225 20.8625C2.075 20.7708 1.95834 20.65 1.875 20.5C1.79167 20.35 1.74584 20.1875 1.7375 20.0125C1.72917 19.8375 1.775 19.6667 1.875 19.5L11.125 3.5C11.225 3.33333 11.3542 3.20833 11.5125 3.125C11.6708 3.04167 11.8333 3 12 3C12.1667 3 12.3292 3.04167 12.4875 3.125C12.6458 3.20833 12.775 3.33333 12.875 3.5L22.125 19.5C22.225 19.6667 22.2708 19.8375 22.2625 20.0125C22.2542 20.1875 22.2083 20.35 22.125 20.5C22.0417 20.65 21.925 20.7708 21.775 20.8625C21.625 20.9542 21.4583 21 21.275 21H2.725ZM4.45 19H19.55L12 6L4.45 19ZM12 18C12.2833 18 12.5208 17.9042 12.7125 17.7125C12.9042 17.5208 13 17.2833 13 17C13 16.7167 12.9042 16.4792 12.7125 16.2875C12.5208 16.0958 12.2833 16 12 16C11.7167 16 11.4792 16.0958 11.2875 16.2875C11.0958 16.4792 11 16.7167 11 17C11 17.2833 11.0958 17.5208 11.2875 17.7125C11.4792 17.9042 11.7167 18 12 18ZM12 15C12.2833 15 12.5208 14.9042 12.7125 14.7125C12.9042 14.5208 13 14.2833 13 14V11C13 10.7167 12.9042 10.4792 12.7125 10.2875C12.5208 10.0958 12.2833 10 12 10C11.7167 10 11.4792 10.0958 11.2875 10.2875C11.0958 10.4792 11 10.7167 11 11V14C11 14.2833 11.0958 14.5208 11.2875 14.7125C11.4792 14.9042 11.7167 15 12 15Z",
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
