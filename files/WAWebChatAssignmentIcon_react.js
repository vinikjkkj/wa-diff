__d(
  "WAWebChatAssignmentIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "chat-assignment";
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
      var S = 16,
        R = 20;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 20 16",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M12.7 7.9998C14.7 7.9998 16.3 6.3998 16.3 4.3998C16.3 2.3998 14.7 0.799805 12.7 0.799805C10.7 0.799805 9.1 2.3998 9.1 4.3998C9.1 6.3998 10.7 7.9998 12.7 7.9998ZM12.7 9.7998C10.3 9.7998 5.5 10.9998 5.5 13.3998V15.1998H20V13.3998C19.9 10.9998 15.1 9.7998 12.7 9.7998Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M7.09961 8.06427H0.0996094V6.25781H7.09961V8.06427Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M5.85521 7.11619L3.51172 4.7727L4.77368 3.51074L8.37912 7.11619L4.77368 10.7216L3.51172 9.45968L5.85521 7.11619Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.ChatAssignmentIcon = m));
  },
  98,
);
