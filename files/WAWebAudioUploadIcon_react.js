__d(
  "WAWebAudioUploadIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "audio-upload";
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
                  d: "M22,22.5H12c-0.3,0-0.5,0.2-0.5,0.5v0.5c0,0.3,0.2,0.5,0.5,0.5h10c0.3,0,0.5-0.2,0.5-0.5 V23C22.5,22.7,22.3,22.5,22,22.5z M15,16v4.3c0,0.3,0.3,0.6,0.6,0.6h2.8c0.3,0,0.6-0.3,0.6-0.6V16h2.8c0.5,0,0.7-0.3,0.3-0.7 l-4.5-4.8c-0.5-0.6-0.9-0.5-1.3,0l-4.5,4.8c-0.4,0.4-0.2,0.7,0.3,0.7H15z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.AudioUploadIcon = m));
  },
  98,
);
