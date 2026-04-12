__d(
  "WAWebChatAssignmentWithContainerIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "chat-assignment-with-container";
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
                  d: "M14.7 11.9998C16.7 11.9998 18.3 10.3998 18.3 8.3998C18.3 6.3998 16.7 4.7998 14.7 4.7998C12.7 4.7998 11.1 6.3998 11.1 8.3998C11.1 10.3998 12.7 11.9998 14.7 11.9998ZM14.7 13.7998C12.3 13.7998 7.5 14.9998 7.5 17.3998V19.1998H22V17.3998C21.9 14.9998 17.1 13.7998 14.7 13.7998Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M9.09961 12.0643H2.09961V10.2578H9.09961V12.0643Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M7.85521 11.1162L5.51172 8.7727L6.77368 7.51074L10.3791 11.1162L6.77368 14.7216L5.51172 13.4597L7.85521 11.1162Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.ChatAssignmentWithContainerIcon = m));
  },
  98,
);
