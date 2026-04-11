__d(
  "WDSIconIcBolt.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-bolt";
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
                  d: "M10.55 18.2001L15.725 12.0001H11.725L12.45 6.32509L7.82497 13.0001H11.3L10.55 18.2001ZM8.99997 15.0001H5.89997C5.49997 15.0001 5.20414 14.8209 5.01247 14.4626C4.8208 14.1043 4.84164 13.7584 5.07497 13.4251L12.55 2.67509C12.7166 2.44175 12.9333 2.27925 13.2 2.18759C13.4666 2.09592 13.7416 2.10009 14.025 2.20009C14.3083 2.30009 14.5166 2.47509 14.65 2.72509C14.7833 2.97509 14.8333 3.24175 14.8 3.52509L14 10.0001H17.875C18.3083 10.0001 18.6125 10.1918 18.7875 10.5751C18.9625 10.9584 18.9083 11.3168 18.625 11.6501L10.4 21.5001C10.2166 21.7168 9.99164 21.8584 9.72497 21.9251C9.4583 21.9918 9.19997 21.9668 8.94997 21.8501C8.69997 21.7334 8.50414 21.5543 8.36247 21.3126C8.2208 21.0709 8.16664 20.8084 8.19997 20.5251L8.99997 15.0001Z",
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
