__d(
  "WDSIconIcEdit.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-edit";
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
                  d: "M5 18.9999H6.4L16.2 9.22494L14.775 7.79994L5 17.5999V18.9999ZM4 20.9999C3.71667 20.9999 3.47917 20.9041 3.2875 20.7124C3.09583 20.5208 3 20.2833 3 19.9999V17.5749C3 17.3083 3.05 17.0541 3.15 16.8124C3.25 16.5708 3.39167 16.3583 3.575 16.1749L16.2 3.57494C16.3833 3.39161 16.6 3.24994 16.85 3.14994C17.1 3.04994 17.3583 2.99994 17.625 2.99994C17.8917 2.99994 18.1458 3.04994 18.3875 3.14994C18.6292 3.24994 18.85 3.39994 19.05 3.59994L20.425 4.99994C20.625 5.18327 20.7708 5.39577 20.8625 5.63744C20.9542 5.87911 21 6.13327 21 6.39994C21 6.64994 20.9542 6.89994 20.8625 7.14994C20.7708 7.39994 20.625 7.62494 20.425 7.82494L7.825 20.4249C7.64167 20.6083 7.42917 20.7499 7.1875 20.8499C6.94583 20.9499 6.69167 20.9999 6.425 20.9999H4Z",
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
