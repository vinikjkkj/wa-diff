__d(
  "WAWebSpeakerCrossedIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "speaker-crossed";
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
      var S = 24,
        R = 24;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 24 24",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M8.17295 8.44087C8.17295 8.32308 8.23459 8.21389 8.33543 8.15303L12.3622 5.72284C12.7728 5.46882 13.3171 5.74791 13.3171 6.21249V15.9904C13.3171 16.4449 12.7936 16.7257 12.3822 16.4918L8.343 14.1959C8.23788 14.1361 8.17295 14.0245 8.17295 13.9036V8.44087ZM2 10.2005C2 9.12385 2.92124 8.25109 4.05765 8.25109H6.80793C6.99361 8.25109 7.14412 8.40161 7.14412 8.58728V13.763C7.14412 13.9487 6.99361 14.0992 6.80793 14.0992H6.20602L7.15101 17.4458C7.23322 17.737 7.06213 18.0333 6.76887 18.1076L5.78098 18.3579C5.48772 18.4323 5.18334 18.2565 5.10113 17.9654L4.0305 14.1737C4.02344 14.1487 4.01825 14.1237 4.01485 14.0988C2.8982 14.0772 2 13.2129 2 12.1498V10.2005Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M15.9116 13.2149L15.8232 13.3033L15.9116 13.3917L16.9723 14.4523L17.0607 14.5407L17.149 14.4523L19.182 12.4194L21.2149 14.4523L21.3033 14.5407L21.3917 14.4523L22.4523 13.3917L22.5407 13.3033L22.4523 13.2149L20.4194 11.182L22.4523 9.14905L22.5407 9.06066L22.4523 8.97227L21.3917 7.91161L21.3033 7.82322L21.2149 7.91161L19.182 9.94454L17.149 7.91161L17.0607 7.82322L16.9723 7.91161L15.9116 8.97227L15.8232 9.06066L15.9116 9.14905L17.9445 11.182L15.9116 13.2149Z",
                  fill: "currentColor",
                  stroke: "currentColor",
                  strokeWidth: 0.25,
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.SpeakerCrossedIcon = m));
  },
  98,
);
