__d(
  "WAWebWdsIllPhoneTextDownloadV2Icon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ill-phone-text-download-v2";
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
                  d: "M207.561 19.76a18 18 0 0 0-18-18h-57.96v149.48h57.97a18.003 18.003 0 0 0 18-18V19.76z",
                  fill: "#25d366",
                  stroke: "#111b21",
                  strokeWidth: 1.5,
                  strokeMiterlimit: 10,
                }),
                c.jsx("path", {
                  d: "M141.8 15.52a2.212 2.212 0 0 0 1.563-3.773 2.212 2.212 0 0 0-3.773 1.563 2.21 2.21 0 0 0 2.21 2.21",
                  fill: "#111b21",
                }),
                c.jsx("path", {
                  d: "M197.54 19.76a18 18 0 0 0-18-18h-56.97a18 18 0 0 0-18 18v113.48a18 18 0 0 0 5.272 12.728 18 18 0 0 0 12.728 5.272h56.97c2.364 0 4.705-.466 6.889-1.37a18.02 18.02 0 0 0 9.741-9.742 18 18 0 0 0 1.37-6.888z",
                  fill: "#25d366",
                  stroke: "#111b21",
                  strokeWidth: 1.5,
                  strokeMiterlimit: 10,
                }),
                c.jsx("path", {
                  d: "M144.73 12.52h12.66",
                  stroke: "#111b21",
                  strokeWidth: 1.5,
                  strokeLinecap: "round",
                }),
                c.jsx("path", {
                  d: "M151.061 138.64a7.42 7.42 0 1 0 0-14.84 7.42 7.42 0 0 0 0 14.84Z",
                  stroke: "#111b21",
                  strokeWidth: 1.5,
                }),
                c.jsx("path", {
                  d: "M73.65 10.92c30.28-.98 55.43 17.76 56.17 41.85a36 36 0 0 1-3.7 16.94l8.99 14.22c1.27 2-.2 4.82-2.4 4.84l-22.73-1.05c-9.15 6.17-20.83 10.05-33.65 10.47-30.28.98-55.43-17.76-56.17-41.86s23.2-44.43 53.49-45.41Z",
                  fill: "#e6ffda",
                  stroke: "#111b21",
                  strokeWidth: 1.5,
                  strokeMiterlimit: 10,
                  strokeLinejoin: "round",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WdsIllPhoneTextDownloadV2Icon = m));
  },
  98,
);
