__d(
  "WAWebPttFileIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ptt-file";
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
      var S = 55,
        R = 55;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 55 55",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              version: "1.1",
              x: "0px",
              y: "0px",
              enableBackground: "new 0 0 55 55",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", { fill: "#FA6533", d: "M0,0h55v55H0V0z" }),
                c.jsx("path", {
                  fill: "#FFFFFF",
                  d: "M27.1,14.8c1.8,0,3.2,1.5,3.2,3.5v9.5c0,1.9-1.4,3.5-3.2,3.5c-1.8,0-3.2-1.5-3.2-3.5v-9.5 C24,16.3,25.4,14.8,27.1,14.8z",
                }),
                c.jsx("path", {
                  fill: "#FFFFFF",
                  d: "M27.4,35.1c-0.1,0-0.5,0-0.7,0l-0.2,0c-3.1-0.3-5.6-2.9-6-6.3l0-0.3c0-0.4,0.3-0.7,0.7-0.7h0.3 c0.4,0,0.7,0.3,0.7,0.7l0.1,0.3c0.5,2.5,2.5,4.4,5,4.4c2.4,0,4.5-1.9,4.9-4.4l0.1-0.4c0-0.4,0.3-0.7,0.7-0.7h0.3 c0.4,0,0.7,0.3,0.7,0.7c0,0,0,0.1-0.1,0.5c-0.5,3.3-3.1,5.9-6.3,6.1L27.4,35.1z",
                }),
                c.jsx("path", {
                  fill: "#FFFFFF",
                  d: "M28,39.5c0,0.4-0.3,0.7-0.7,0.7H27c-0.4,0-0.7-0.3-0.7-0.7v-4.6c0-0.4,0.3-0.7,0.7-0.7h0.3 c0.4,0,0.7,0.3,0.7,0.7V39.5z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.PttFileIcon = m));
  },
  98,
);
