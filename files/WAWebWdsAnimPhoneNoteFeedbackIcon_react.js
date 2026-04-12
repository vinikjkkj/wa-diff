__d(
  "WAWebWdsAnimPhoneNoteFeedbackIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-anim-phone-note-feedback";
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
      var S = 88,
        R = 133;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p,
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("rect", {
                  width: 45.57,
                  height: 75.05,
                  x: 23.5,
                  y: 6.58,
                  fill: "#25D366",
                  stroke: "#111B21",
                  strokeWidth: 1.5,
                  rx: 5.25,
                }),
                c.jsx("rect", {
                  width: 34.11,
                  height: 55.56,
                  x: 29.23,
                  y: 14.53,
                  fill: "#25D366",
                  stroke: "#111B21",
                  strokeWidth: 1.5,
                  rx: 1.75,
                }),
                c.jsx("path", {
                  stroke: "#111B21",
                  strokeLinecap: "round",
                  strokeMiterlimit: 10,
                  strokeWidth: 1.5,
                  d: "M39.75 75.92h12.54",
                }),
                c.jsx("path", {
                  fill: "#E6FFDA",
                  stroke: "#111B21",
                  strokeWidth: 1.5,
                  d: "M55.16 29.1h39.18a6.66 6.66 0 0 1 6.66 6.66v39.18a6.66 6.66 0 0 1-6.66 6.66H55.16a6.66 6.66 0 0 1-6.66-6.66V35.76a6.66 6.66 0 0 1 6.66-6.66Z",
                }),
                c.jsx("path", {
                  stroke: "#111B21",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 1.5,
                  d: "M90.75 42h-31M88.75 55h-29M86.75 68h-27",
                }),
                c.jsx("path", {
                  fill: "#25D366",
                  stroke: "#111B21",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                  strokeWidth: 1.5,
                  d: "M117.85 47.08 95.8 67.78l-12.58.4 1.45-12.25 22.06-20.7a4.84 4.84 0 0 1 6.78.24l4.62 4.92a4.7 4.7 0 0 1-.26 6.69h0Z",
                }),
                c.jsx("path", {
                  stroke: "#111B21",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                  strokeWidth: 1.5,
                  d: "m87.7 68.04-3.92-4.18M115.21 49.24l-11-11.52",
                }),
                c.jsx("path", {
                  fill: "#25D366",
                  d: "m95.79 67.79-.07-.73a3.47 3.47 0 0 0-2.93-3.1l-.72-.12-.09-.82A3.48 3.48 0 0 0 89 59.97l-.62-.1-.15-.96a3.48 3.48 0 0 0-3.14-2.94l-.43-.04",
                }),
                c.jsx("path", {
                  stroke: "#111B21",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                  strokeWidth: 1.5,
                  d: "m95.79 67.79-.07-.73a3.47 3.47 0 0 0-2.93-3.1l-.72-.12-.09-.82A3.48 3.48 0 0 0 89 59.97l-.62-.1-.15-.96a3.48 3.48 0 0 0-3.14-2.94l-.43-.04",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WdsAnimPhoneNoteFeedbackIcon = m));
  },
  98,
);
