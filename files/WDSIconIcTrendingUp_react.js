__d(
  "WDSIconIcTrendingUp.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-trending-up";
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
                  d: "M2.69999 17.625C2.49999 17.425 2.40415 17.1875 2.41249 16.9125C2.42082 16.6375 2.51665 16.4083 2.69999 16.225L7.97499 10.875C8.35832 10.4917 8.83332 10.3 9.39999 10.3C9.96665 10.3 10.4417 10.4917 10.825 10.875L13.4 13.475L18.6 8.32501H17C16.7167 8.32501 16.4792 8.22918 16.2875 8.03751C16.0958 7.84585 16 7.60835 16 7.32501C16 7.04168 16.0958 6.80418 16.2875 6.61251C16.4792 6.42085 16.7167 6.32501 17 6.32501H21C21.2833 6.32501 21.5208 6.42085 21.7125 6.61251C21.9042 6.80418 22 7.04168 22 7.32501V11.325C22 11.6083 21.9042 11.8458 21.7125 12.0375C21.5208 12.2292 21.2833 12.325 21 12.325C20.7167 12.325 20.4792 12.2292 20.2875 12.0375C20.0958 11.8458 20 11.6083 20 11.325V9.72501L14.825 14.9C14.4417 15.2833 13.9667 15.475 13.4 15.475C12.8333 15.475 12.3583 15.2833 11.975 14.9L9.39999 12.325L4.09999 17.625C3.91665 17.8083 3.68332 17.9 3.39999 17.9C3.11665 17.9 2.88332 17.8083 2.69999 17.625Z",
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
