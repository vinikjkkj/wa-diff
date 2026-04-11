__d(
  "WDSIconIcFormatBold.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-format-bold";
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
                  d: "M8.79999 19C8.24999 19 7.77915 18.8042 7.38749 18.4125C6.99582 18.0208 6.79999 17.55 6.79999 17V7C6.79999 6.45 6.99582 5.97917 7.38749 5.5875C7.77915 5.19583 8.24999 5 8.79999 5H12.325C13.4083 5 14.4083 5.33333 15.325 6C16.2417 6.66667 16.7 7.59167 16.7 8.775C16.7 9.625 16.5083 10.2792 16.125 10.7375C15.7417 11.1958 15.3833 11.525 15.05 11.725C15.4667 11.9083 15.9292 12.25 16.4375 12.75C16.9458 13.25 17.2 14 17.2 15C17.2 16.4833 16.6583 17.5208 15.575 18.1125C14.4917 18.7042 13.475 19 12.525 19H8.79999ZM9.82499 16.2H12.425C13.225 16.2 13.7125 15.9958 13.8875 15.5875C14.0625 15.1792 14.15 14.8833 14.15 14.7C14.15 14.5167 14.0625 14.2208 13.8875 13.8125C13.7125 13.4042 13.2 13.2 12.35 13.2H9.82499V16.2ZM9.82499 10.5H12.15C12.7 10.5 13.1 10.3583 13.35 10.075C13.6 9.79167 13.725 9.475 13.725 9.125C13.725 8.725 13.5833 8.4 13.3 8.15C13.0167 7.9 12.65 7.775 12.2 7.775H9.82499V10.5Z",
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
