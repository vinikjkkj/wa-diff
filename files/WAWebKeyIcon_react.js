__d(
  "WAWebKeyIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "key";
    function m(t) {
      var n = t.height,
        a = t.iconXstyle,
        i = t.name,
        l = t.viewBox,
        u = t.width,
        m = babelHelpers.objectWithoutPropertiesLoose(t, e),
        p;
      if (l) {
        var _ = l.height,
          f = _ === void 0 ? 0 : _,
          g = l.width,
          h = g === void 0 ? 0 : g,
          y = l.x,
          C = y === void 0 ? 0 : y,
          b = l.y,
          v = b === void 0 ? 0 : b;
        p = [C, v, h, f].join(" ");
      }
      var S = 20,
        R = 20;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 20 20",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("mask", {
                  id: "main",
                  style: { maskType: "alpha" },
                  maskUnits: "userSpaceOnUse",
                  x: 0,
                  y: 0,
                  width: 20,
                  height: 20,
                  children: c.jsx("rect", {
                    width: 20,
                    height: 20,
                    fill: "currentColor",
                  }),
                }),
                c.jsx("g", {
                  mask: "url(#main)",
                  children: c.jsx("path", {
                    d: "M6.00367 12.8125C5.36233 12.8125 4.81597 12.588 4.36458 12.1391C3.91319 11.6902 3.6875 11.145 3.6875 10.5037C3.6875 9.86233 3.91197 9.31597 4.36092 8.86458C4.80985 8.41319 5.35499 8.1875 5.99633 8.1875C6.63767 8.1875 7.18403 8.41197 7.63542 8.8609C8.08681 9.30984 8.3125 9.85499 8.3125 10.4963C8.3125 11.1377 8.08803 11.684 7.63908 12.1354C7.19015 12.5868 6.64501 12.8125 6.00367 12.8125ZM6 15.5C7.02778 15.5 7.98611 15.1875 8.875 14.5625C9.76389 13.9375 10.3681 13.1319 10.6875 12.1458H11L12.0646 13.2105C12.1465 13.2924 12.2431 13.3542 12.3542 13.3958C12.4653 13.4375 12.5764 13.4583 12.6875 13.4583C12.7986 13.4583 12.9062 13.4375 13.0104 13.3958C13.1146 13.3542 13.2069 13.2931 13.2874 13.2126L14.3333 12.1667L15.3958 13.2083C15.4792 13.2917 15.5729 13.3542 15.6771 13.3958C15.7813 13.4375 15.8889 13.4583 16 13.4583C16.1111 13.4583 16.2218 13.4359 16.3322 13.391C16.4425 13.3461 16.5401 13.2853 16.625 13.2083L18.7368 11.0822C18.8151 10.9996 18.8785 10.9028 18.9271 10.7917C18.9757 10.6806 19 10.5694 19 10.4583C19 10.3472 18.9754 10.2365 18.9261 10.1262C18.8769 10.0158 18.8112 9.91821 18.7292 9.83333L17.9583 9.0625C17.8745 8.97917 17.7802 8.91667 17.6755 8.875C17.5707 8.83333 17.4624 8.8125 17.3507 8.8125H10.6875C10.3681 7.85417 9.77431 7.0625 8.90625 6.4375C8.03819 5.8125 7.06944 5.5 6 5.5C4.61111 5.5 3.43056 5.98611 2.45833 6.95833C1.48611 7.93056 1 9.11111 1 10.5C1 11.8889 1.48611 13.0694 2.45833 14.0417C3.43056 15.0139 4.61111 15.5 6 15.5Z",
                    fill: "currentColor",
                  }),
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.KeyIcon = m));
  },
  98,
);
