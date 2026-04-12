__d(
  "WAWebKeepWarningIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "keep-warning";
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
      var S = 60,
        R = 60;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 60 60",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M42.5 7.5H17.5C14.75 7.5 12.525 9.75 12.525 12.5L12.5 52.5L30 45L47.5 52.5V12.5C47.5 9.75 45.25 7.5 42.5 7.5Z",
                  fill: "white",
                }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M30.0211 12.501C28.2835 12.501 26.875 13.9095 26.875 15.647V26.8549C26.875 28.5924 28.2835 30.001 30.0211 30.001C31.7586 30.001 33.1671 28.5924 33.1671 26.8549V15.647C33.1671 13.9095 31.7586 12.501 30.0211 12.501ZM33.125 35.001H26.875V41.251H33.125V35.001Z",
                  fill: "#00A884",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.KeepWarningIcon = m));
  },
  98,
);
