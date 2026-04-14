__d(
  "WAWebPanelRecentIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "panel-recent";
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
              version: "1.1",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M20.5378905,11.9748276 C20.5378905,7.24555819 16.704097,3.41176471 11.9748276,3.41176471 C7.24555819,3.41176471 3.41176471,7.24555819 3.41176471,11.9748276 C3.41176471,16.704097 7.24555819,20.5378905 11.9748276,20.5378905 C16.704097,20.5378905 20.5378905,16.704097 20.5378905,11.9748276 Z M21.9496552,11.9748276 C21.9496552,17.4837931 17.4837931,21.9496552 11.9748276,21.9496552 C6.46586207,21.9496552 2,17.4837931 2,11.9748276 C2,6.46586207 6.46586207,2 11.9748276,2 C17.4837931,2 21.9496552,6.46586207 21.9496552,11.9748276 Z M12.1176471,6.70588235 L12.1176471,12.396898 L16.5044771,15.0244548 C16.8389217,15.2247753 16.9476508,15.6582881 16.7473302,15.9927327 C16.5470097,16.3271773 16.1134969,16.4359063 15.7790523,16.2355858 L10.7058824,13.1969356 L10.7058824,6.70588235 C10.7058824,6.31603429 11.0219166,6 11.4117647,6 C11.8016128,6 12.1176471,6.31603429 12.1176471,6.70588235 Z",
                  fill: "currentColor",
                  fillRule: "nonzero",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.PanelRecentIcon = m));
  },
  98,
);
