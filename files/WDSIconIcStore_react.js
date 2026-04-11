__d(
  "WDSIconIcStore.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-store";
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
                  d: "M5.00001 4H19C19.2833 4 19.5208 4.09583 19.7125 4.2875C19.9042 4.47917 20 4.71667 20 5C20 5.28333 19.9042 5.52083 19.7125 5.7125C19.5208 5.90417 19.2833 6 19 6H5.00001C4.71668 6 4.47918 5.90417 4.28751 5.7125C4.09585 5.52083 4.00001 5.28333 4.00001 5C4.00001 4.71667 4.09585 4.47917 4.28751 4.2875C4.47918 4.09583 4.71668 4 5.00001 4ZM5.00001 20C4.71668 20 4.47918 19.9042 4.28751 19.7125C4.09585 19.5208 4.00001 19.2833 4.00001 19V14H3.82501C3.50835 14 3.25001 13.8792 3.05001 13.6375C2.85001 13.3958 2.78335 13.1167 2.85001 12.8L3.85001 7.8C3.90001 7.56667 4.01668 7.375 4.20001 7.225C4.38335 7.075 4.59168 7 4.82501 7H19.175C19.4083 7 19.6167 7.075 19.8 7.225C19.9833 7.375 20.1 7.56667 20.15 7.8L21.15 12.8C21.2167 13.1167 21.15 13.3958 20.95 13.6375C20.75 13.8792 20.4917 14 20.175 14H20V19C20 19.2833 19.9042 19.5208 19.7125 19.7125C19.5208 19.9042 19.2833 20 19 20C18.7167 20 18.4792 19.9042 18.2875 19.7125C18.0958 19.5208 18 19.2833 18 19V14H14V19C14 19.2833 13.9042 19.5208 13.7125 19.7125C13.5208 19.9042 13.2833 20 13 20H5.00001ZM6.00001 18H12V14H6.00001V18ZM5.05001 12H18.95L18.35 9H5.65001L5.05001 12Z",
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
