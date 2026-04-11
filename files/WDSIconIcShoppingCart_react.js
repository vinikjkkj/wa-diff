__d(
  "WDSIconIcShoppingCart.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-shopping-cart";
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
                  d: "M7 22C6.45 22 5.97917 21.8042 5.5875 21.4125C5.19583 21.0208 5 20.55 5 20C5 19.45 5.19583 18.9792 5.5875 18.5875C5.97917 18.1958 6.45 18 7 18C7.55 18 8.02083 18.1958 8.4125 18.5875C8.80417 18.9792 9 19.45 9 20C9 20.55 8.80417 21.0208 8.4125 21.4125C8.02083 21.8042 7.55 22 7 22ZM17 22C16.45 22 15.9792 21.8042 15.5875 21.4125C15.1958 21.0208 15 20.55 15 20C15 19.45 15.1958 18.9792 15.5875 18.5875C15.9792 18.1958 16.45 18 17 18C17.55 18 18.0208 18.1958 18.4125 18.5875C18.8042 18.9792 19 19.45 19 20C19 20.55 18.8042 21.0208 18.4125 21.4125C18.0208 21.8042 17.55 22 17 22ZM6.15 6L8.55 11H15.55L18.3 6H6.15ZM5.2 4H19.95C20.3333 4 20.625 4.17083 20.825 4.5125C21.025 4.85417 21.0333 5.2 20.85 5.55L17.3 11.95C17.1167 12.2833 16.8708 12.5417 16.5625 12.725C16.2542 12.9083 15.9167 13 15.55 13H8.1L7 15H18C18.2833 15 18.5208 15.0958 18.7125 15.2875C18.9042 15.4792 19 15.7167 19 16C19 16.2833 18.9042 16.5208 18.7125 16.7125C18.5208 16.9042 18.2833 17 18 17H7C6.25 17 5.68333 16.6708 5.3 16.0125C4.91667 15.3542 4.9 14.7 5.25 14.05L6.6 11.6L3 4H2C1.71667 4 1.47917 3.90417 1.2875 3.7125C1.09583 3.52083 1 3.28333 1 3C1 2.71667 1.09583 2.47917 1.2875 2.2875C1.47917 2.09583 1.71667 2 2 2H3.625C3.80833 2 3.98333 2.05 4.15 2.15C4.31667 2.25 4.44167 2.39167 4.525 2.575L5.2 4Z",
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
