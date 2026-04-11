__d(
  "WDSIconIcChevronLeft.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-chevron-left";
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
                  d: "M10.8 12L14.7 15.9C14.8833 16.0834 14.975 16.3167 14.975 16.6C14.975 16.8834 14.8833 17.1167 14.7 17.3C14.5167 17.4834 14.2833 17.575 14 17.575C13.7167 17.575 13.4833 17.4834 13.3 17.3L8.7 12.7C8.6 12.6 8.52917 12.4917 8.4875 12.375C8.44584 12.2584 8.425 12.1334 8.425 12C8.425 11.8667 8.44584 11.7417 8.4875 11.625C8.52917 11.5084 8.6 11.4 8.7 11.3L13.3 6.70005C13.4833 6.51672 13.7167 6.42505 14 6.42505C14.2833 6.42505 14.5167 6.51672 14.7 6.70005C14.8833 6.88338 14.975 7.11672 14.975 7.40005C14.975 7.68338 14.8833 7.91672 14.7 8.10005L10.8 12Z",
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
