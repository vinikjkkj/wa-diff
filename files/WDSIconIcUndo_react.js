__d(
  "WDSIconIcUndo.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-undo";
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
                  d: "M7.99999 19C7.71665 19 7.47915 18.9042 7.28749 18.7125C7.09582 18.5209 6.99999 18.2834 6.99999 18C6.99999 17.7167 7.09582 17.4792 7.28749 17.2875C7.47915 17.0959 7.71665 17 7.99999 17H14.1C15.15 17 16.0625 16.6667 16.8375 16C17.6125 15.3334 18 14.5 18 13.5C18 12.5 17.6125 11.6667 16.8375 11C16.0625 10.3334 15.15 10 14.1 10H7.79999L9.69999 11.9C9.88332 12.0834 9.97499 12.3167 9.97499 12.6C9.97499 12.8834 9.88332 13.1167 9.69999 13.3C9.51665 13.4834 9.28332 13.575 8.99999 13.575C8.71665 13.575 8.48332 13.4834 8.29999 13.3L4.69999 9.70005C4.59999 9.60005 4.52915 9.49172 4.48749 9.37505C4.44582 9.25838 4.42499 9.13338 4.42499 9.00005C4.42499 8.86672 4.44582 8.74172 4.48749 8.62505C4.52915 8.50838 4.59999 8.40005 4.69999 8.30005L8.29999 4.70005C8.48332 4.51672 8.71665 4.42505 8.99999 4.42505C9.28332 4.42505 9.51665 4.51672 9.69999 4.70005C9.88332 4.88338 9.97499 5.11672 9.97499 5.40005C9.97499 5.68338 9.88332 5.91672 9.69999 6.10005L7.79999 8.00005H14.1C15.7167 8.00005 17.1042 8.52505 18.2625 9.57505C19.4208 10.625 20 11.9334 20 13.5C20 15.0667 19.4208 16.375 18.2625 17.425C17.1042 18.475 15.7167 19 14.1 19H7.99999Z",
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
