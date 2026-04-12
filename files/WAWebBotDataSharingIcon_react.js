__d(
  "WAWebBotDataSharingIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "bot-data-sharing";
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
                  d: "M5.081 12.9c.44 2.98 2.87 5.41 5.86 5.84 2.22.33 4.26-.38 5.73-1.72.5-.45 1.22-.56 1.8-.22.87.5 1 1.71.26 2.39-2.09 1.92-4.99 2.95-8.13 2.53-4.38-.59-7.92-4.13-8.51-8.51a10.02 10.02 0 0 1 6.98-10.96c.96-.29 1.93.44 1.93 1.44v.02c0 .67-.45 1.24-1.09 1.43a6.996 6.996 0 0 0-4.83 7.76Zm7.92-9.19v-.02c0-1 .97-1.73 1.92-1.44 4.1 1.25 7.08 5.07 7.08 9.57 0 .76-.09 1.51-.26 2.23-.23.96-1.35 1.41-2.21.91l-.01-.01c-.57-.34-.83-1-.69-1.64.11-.48.17-.97.17-1.49 0-3.14-2.07-5.79-4.92-6.68-.63-.2-1.08-.76-1.08-1.43Z",
                  fill: "#8696A0",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.BotDataSharingIcon = m));
  },
  98,
);
