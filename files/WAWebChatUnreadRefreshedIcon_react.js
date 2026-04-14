__d(
  "WAWebChatUnreadRefreshedIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "chat-unread-refreshed";
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
                  d: "M7.00016 10C7.00016 9.44772 7.44787 9 8.00016 9H17.0002C17.5524 9 18.0002 9.44772 18.0002 10C18.0002 10.5523 17.5524 11 17.0002 11H8.00016C7.44787 11 7.00016 10.5523 7.00016 10Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M7.00016 14C7.00016 13.4477 7.44787 13 8.00016 13H14.0002C14.5524 13 15.0002 13.4477 15.0002 14C15.0002 14.5523 14.5524 15 14.0002 15H8.00016C7.44787 15 7.00016 14.5523 7.00016 14Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M16.0002 5C16.0002 4.44772 15.5524 4 15.0002 4H1.79015C1.01286 4 0.540213 4.86348 0.940127 5.53L3.00016 9V17.3333C3.00016 18.8061 4.19406 20 5.66682 20H19.3335C20.8062 20 22.0002 18.8061 22.0002 17.3333V11C22.0002 10.4477 21.5524 10 21.0002 10C20.4479 10 20.0002 10.4477 20.0002 11V17.3333C20.0002 17.7015 19.7017 18 19.3335 18H5.66682C5.29863 18 5.00016 17.7015 5.00016 17.3333V8.44603L3.53254 6H15.0002C15.5524 6 16.0002 5.55228 16.0002 5Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M21.0002 8C21.8002 8 22.5602 7.68 23.1202 7.12C23.6802 6.56 24.0002 5.79 24.0002 5C24.0002 4.21 23.6802 3.44 23.1202 2.88C22.5602 2.32 21.7902 2 21.0002 2C20.2102 2 19.4402 2.32 18.8802 2.88C18.3202 3.44 18.0002 4.21 18.0002 5C18.0002 5.79 18.3202 6.56 18.8802 7.12C19.4402 7.68 20.2102 8 21.0002 8Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.ChatUnreadRefreshedIcon = m));
  },
  98,
);
