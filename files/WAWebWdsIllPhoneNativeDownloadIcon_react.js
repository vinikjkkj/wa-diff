__d(
  "WAWebWdsIllPhoneNativeDownloadIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ill-phone-native-download";
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
      var S = 152,
        R = 228;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 228 152",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M187.56 19.76a18 18 0 0 0-18-18H111.6v149.48h57.97a18.003 18.003 0 0 0 18-18V19.76z",
                  fill: "#25d366",
                  stroke: "#111b21",
                  strokeWidth: 1.5,
                  strokeMiterlimit: 10,
                }),
                c.jsx("path", {
                  d: "M121.8 15.52a2.212 2.212 0 0 0 1.563-3.773 2.212 2.212 0 0 0-3.773 1.563 2.21 2.21 0 0 0 2.21 2.21",
                  fill: "#111b21",
                }),
                c.jsx("path", {
                  d: "M177.54 19.76a18 18 0 0 0-18-18H88.57a18 18 0 0 0-18 18v113.48a18 18 0 0 0 18 18h70.97a18.005 18.005 0 0 0 16.63-11.112 18 18 0 0 0 1.37-6.888z",
                  fill: "#25d366",
                  stroke: "#111b21",
                  strokeWidth: 1.5,
                  strokeMiterlimit: 10,
                }),
                c.jsx("path", {
                  d: "M117.73 12.52h12.66",
                  stroke: "#111b21",
                  strokeWidth: 1.5,
                  strokeLinecap: "round",
                }),
                c.jsx("path", {
                  d: "M124.06 138.64a7.42 7.42 0 1 0 0-14.84 7.42 7.42 0 0 0 0 14.84Z",
                  stroke: "#111b21",
                  strokeWidth: 1.5,
                }),
                c.jsx("circle", {
                  cx: 73,
                  cy: 75,
                  r: 50,
                  fill: "#e6ffda",
                  stroke: "#111b21",
                  strokeWidth: 1.5,
                  strokeMiterlimit: 10,
                  strokeLinejoin: "round",
                }),
                c.jsx("path", {
                  d: "M87.853 59.8c1.443 0 2.753 1.064 2.764 2.567v14.755c0 .427.418.921 1.101.921h8.511c1.288 0 2.268.768 2.632 1.755.352 1.01.044 2.183-1.013 2.885l-14.16 11.003-10.966 9.16a4.966 4.966 0 0 1-6.287.066l-25.28-20.229a2.43 2.43 0 0 1-1.013-2.885 2.7 2.7 0 0 1 1.03-1.3 2.7 2.7 0 0 1 1.601-.455h7.861c.694 0 1.113-.494 1.113-.921V62.367c0-1.503 1.32-2.567 2.752-2.567zm0-13.8c1.443 0 2.764 1.075 2.764 2.567v3.258c0 1.492-1.321 2.556-2.753 2.556H58.5c-1.442 0-2.752-1.064-2.752-2.556v-3.258c0-1.492 1.31-2.567 2.752-2.567z",
                  fill: "#25d366",
                  stroke: "#111b21",
                  strokeWidth: 1.5,
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WdsIllPhoneNativeDownloadIcon = m));
  },
  98,
);
