__d(
  "WAWebAudioFileIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "audio-file";
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
                c.jsx("path", { fill: "#FFAD1F", d: "M0,0h55v55H0V0z" }),
                c.jsx("path", {
                  fill: "#FFFFFF",
                  d: "M27.5,16c-5.6,0-10,4.4-10,10v7.8c0,1.9,1.4,3.3,3.3,3.3h3.3v-8.9h-4.4V26c0-4.3,3.4-7.8,7.8-7.8 s7.8,3.4,7.8,7.8v2.2h-4.4v8.9h3.3c1.9,0,3.3-1.4,3.3-3.3V26C37.5,20.4,33.1,16,27.5,16z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.AudioFileIcon = m));
  },
  98,
);
