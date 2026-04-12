__d(
  "WAWebChatMsgIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "chat-msg";
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
      var S = 29,
        R = 28;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 28 29",
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
                  d: "M3.56494 8.6945C3.56494 7.22174 4.75885 6.02783 6.23161 6.02783H26.2658C27.0701 6.02783 27.5453 6.92903 27.091 7.59269L24.4353 11.4723V21.2501C24.4353 22.7228 23.2414 23.9167 21.7686 23.9167H6.23161C4.75885 23.9167 3.56494 22.7228 3.56494 21.2501V8.6945ZM7.2916 12.4723C7.2916 11.92 7.73932 11.4723 8.2916 11.4723H19.7083C20.2606 11.4723 20.7083 11.92 20.7083 12.4723V12.8056C20.7083 13.3579 20.2606 13.8056 19.7083 13.8056H8.2916C7.73932 13.8056 7.2916 13.3579 7.2916 12.8056V12.4723ZM8.2916 16.139C7.73932 16.139 7.2916 16.5867 7.2916 17.139V17.4723C7.2916 18.0246 7.73932 18.4723 8.2916 18.4723H14.4907C15.043 18.4723 15.4907 18.0246 15.4907 17.4723V17.139C15.4907 16.5867 15.043 16.139 14.4907 16.139H8.2916Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.ChatMsgIcon = m));
  },
  98,
);
