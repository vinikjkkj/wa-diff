__d(
  "WAWebAudioDownloadIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "audio-download";
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
      var S = 34,
        R = 34;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 34 34",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              version: "1.1",
              x: "0px",
              y: "0px",
              enableBackground: "new 0 0 34 34",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  fill: "currentColor",
                  d: "M17,2c8.3,0,15,6.7,15,15s-6.7,15-15,15S2,25.3,2,17S8.7,2,17,2 M17,1C8.2,1,1,8.2,1,17 s7.2,16,16,16s16-7.2,16-16S25.8,1,17,1L17,1z",
                }),
                c.jsx("path", {
                  fill: "currentColor",
                  d: "M22.4,17.5h-3.2v-6.8c0-0.4-0.3-0.7-0.7-0.7h-3.2c-0.4,0-0.7,0.3-0.7,0.7v6.8h-3.2 c-0.6,0-0.8,0.4-0.4,0.8l5,5.3c0.5,0.7,1,0.5,1.5,0l5-5.3C23.2,17.8,23,17.5,22.4,17.5z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.AudioDownloadIcon = m));
  },
  98,
);
