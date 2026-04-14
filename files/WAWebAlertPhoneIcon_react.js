__d(
  "WAWebAlertPhoneIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "alert-phone";
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
      var S = 48,
        R = 48;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 48 48",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              version: "1.1",
              x: "0px",
              y: "0px",
              enableBackground: "new 0 0 48 48",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  fill: "currentColor",
                  d: "M24.154,2C11.919,2,2,11.924,2,24.165S11.919,46.33,24.154,46.33 s22.154-9.924,22.154-22.165S36.389,2,24.154,2z",
                }),
                c.jsx("path", {
                  className: "icon-shape",
                  fill: "#FFBC00",
                  d: "M19.352,30.776c0.809-0.008,1.626,0,2.443,0c0.008-2.05,0.008-4.109,0-6.159h-2.451 C19.336,26.667,19.328,28.725,19.352,30.776z M15.876,22.102l1.928-1.928l1.929,1.928l0.964-0.964l-1.929-1.929l1.929-1.928 l-0.964-0.964l-1.929,1.928l-1.928-1.928l-0.965,0.964l1.929,1.928l-1.929,1.929L15.876,22.102z M15.635,27.1 c0.008,1.225,0.008,2.443,0,3.668c0.825,0.016,1.642,0,2.467,0.008c0.008-1.233,0-2.459,0-3.692 C17.277,27.084,16.452,27.052,15.635,27.1z M30.42,17.232c0,4.517-0.008,9.026,0,13.544c0.825-0.008,1.642,0.008,2.467-0.008 c-0.008-4.509-0.008-9.01,0-13.52C32.07,17.2,31.245,17.24,30.42,17.232z M26.72,20.131c0.008,3.548-0.008,7.096,0.008,10.644 c0.817,0,1.634-0.008,2.443,0c0.032-3.684,0-7.377,0.016-11.061c-0.809-0.056-1.626,0-2.435-0.032 C26.728,19.827,26.72,19.979,26.72,20.131z M23.052,22.15c-0.024,0.152-0.024,0.312-0.024,0.464 c0.008,2.723-0.008,5.438,0.008,8.161h2.451c0.016-0.961,0-1.914,0.008-2.875c-0.016-1.914,0.024-3.836-0.016-5.751 C24.67,22.158,23.861,22.158,23.052,22.15z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.AlertPhoneIcon = m));
  },
  98,
);
