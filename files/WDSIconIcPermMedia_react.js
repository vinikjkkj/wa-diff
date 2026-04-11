__d(
  "WDSIconIcPermMedia.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-perm-media";
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
                  d: "M3 21C2.45 21 1.97917 20.8042 1.5875 20.4125C1.19583 20.0208 1 19.55 1 19V7C1 6.71667 1.09583 6.47917 1.2875 6.2875C1.47917 6.09583 1.71667 6 2 6C2.28333 6 2.52083 6.09583 2.7125 6.2875C2.90417 6.47917 3 6.71667 3 7V19H19C19.2833 19 19.5208 19.0958 19.7125 19.2875C19.9042 19.4792 20 19.7167 20 20C20 20.2833 19.9042 20.5208 19.7125 20.7125C19.5208 20.9042 19.2833 21 19 21H3ZM7 17C6.45 17 5.97917 16.8042 5.5875 16.4125C5.19583 16.0208 5 15.55 5 15V4C5 3.45 5.19583 2.97917 5.5875 2.5875C5.97917 2.19583 6.45 2 7 2H11.175C11.4417 2 11.6958 2.05 11.9375 2.15C12.1792 2.25 12.3917 2.39167 12.575 2.575L14 4H21C21.55 4 22.0208 4.19583 22.4125 4.5875C22.8042 4.97917 23 5.45 23 6V15C23 15.55 22.8042 16.0208 22.4125 16.4125C22.0208 16.8042 21.55 17 21 17H7ZM7 15H21V6H13.175L11.175 4H7V15ZM13.25 11.5L12.1 10C12 9.86667 11.8667 9.8 11.7 9.8C11.5333 9.8 11.4 9.86667 11.3 10L9.625 12.2C9.49167 12.3667 9.47083 12.5417 9.5625 12.725C9.65417 12.9083 9.80833 13 10.025 13H17.975C18.1917 13 18.3458 12.9083 18.4375 12.725C18.5292 12.5417 18.5083 12.3667 18.375 12.2L15.95 9.025C15.85 8.89167 15.7167 8.825 15.55 8.825C15.3833 8.825 15.25 8.89167 15.15 9.025L13.25 11.5Z",
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
