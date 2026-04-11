__d(
  "WDSIconIcReply.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-reply";
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
                  d: "M6.82502 12L9.72502 14.9C9.92502 15.1 10.0209 15.3333 10.0125 15.6C10.0042 15.8667 9.90002 16.1 9.70002 16.3C9.50002 16.4833 9.26669 16.5792 9.00002 16.5875C8.73336 16.5958 8.50002 16.5 8.30002 16.3L3.70002 11.7C3.50002 11.5 3.40002 11.2667 3.40002 11C3.40002 10.7333 3.50002 10.5 3.70002 10.3L8.30002 5.69999C8.48336 5.51665 8.71252 5.42499 8.98752 5.42499C9.26252 5.42499 9.50002 5.51665 9.70002 5.69999C9.90002 5.89999 10 6.13749 10 6.41249C10 6.68749 9.90002 6.92499 9.70002 7.12499L6.82502 9.99999H16C17.3834 9.99999 18.5625 10.4875 19.5375 11.4625C20.5125 12.4375 21 13.6167 21 15V18C21 18.2833 20.9042 18.5208 20.7125 18.7125C20.5209 18.9042 20.2834 19 20 19C19.7167 19 19.4792 18.9042 19.2875 18.7125C19.0959 18.5208 19 18.2833 19 18V15C19 14.1667 18.7084 13.4583 18.125 12.875C17.5417 12.2917 16.8334 12 16 12H6.82502Z",
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
