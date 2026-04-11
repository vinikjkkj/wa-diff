__d(
  "WDSIconIcEmojiFoodBeverage.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-emoji-food-beverage";
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
                  d: "M5 21C4.71667 21 4.47917 20.9042 4.2875 20.7125C4.09583 20.5208 4 20.2833 4 20C4 19.7167 4.09583 19.4792 4.2875 19.2875C4.47917 19.0958 4.71667 19 5 19H19C19.2833 19 19.5208 19.0958 19.7125 19.2875C19.9042 19.4792 20 19.7167 20 20C20 20.2833 19.9042 20.5208 19.7125 20.7125C19.5208 20.9042 19.2833 21 19 21H5ZM8 17C6.9 17 5.95833 16.6083 5.175 15.825C4.39167 15.0417 4 14.1 4 13V5.225C4 4.60833 4.21667 4.08333 4.65 3.65C5.08333 3.21667 5.60833 3 6.225 3H20C20.55 3 21.0208 3.19583 21.4125 3.5875C21.8042 3.97917 22 4.45 22 5V8C22 8.55 21.8042 9.02083 21.4125 9.4125C21.0208 9.80417 20.55 10 20 10H18V13C18 14.1 17.6083 15.0417 16.825 15.825C16.0417 16.6083 15.1 17 14 17H8ZM18 8H20V5H18V8ZM14 15C14.55 15 15.0208 14.8042 15.4125 14.4125C15.8042 14.0208 16 13.55 16 13V5H10V5.4L11.8 6.85C11.8333 6.88333 11.9 7.01667 12 7.25V11.5C12 11.6333 11.95 11.75 11.85 11.85C11.75 11.95 11.6333 12 11.5 12H7.5C7.36667 12 7.25 11.95 7.15 11.85C7.05 11.75 7 11.6333 7 11.5V7.25C7 7.21667 7.06667 7.08333 7.2 6.85L9 5.4V5H6V13C6 13.55 6.19583 14.0208 6.5875 14.4125C6.97917 14.8042 7.45 15 8 15H14Z",
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
