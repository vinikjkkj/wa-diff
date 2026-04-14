__d(
  "WAWebChatRefreshedIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "chat-refreshed";
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
                  d: "M3.00013 9L0.940133 5.53C0.540219 4.86348 1.01283 4 1.79012 4H19.3335C20.8062 4 22.0001 5.19391 22.0001 6.66667V17.3333C22.0001 18.8061 20.8062 20 19.3335 20H5.6668C4.19404 20 3.00013 18.8061 3.00013 17.3333V9ZM5.00013 8.44603L3.53252 6H19.3335C19.7017 6 20.0001 6.29848 20.0001 6.66667V17.3333C20.0001 17.7015 19.7017 18 19.3335 18H5.6668C5.29861 18 5.00013 17.7015 5.00013 17.3333V8.44603Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M7.00013 10C7.00013 9.44772 7.44785 9 8.00013 9H17.0001C17.5524 9 18.0001 9.44772 18.0001 10C18.0001 10.5523 17.5524 11 17.0001 11H8.00013C7.44785 11 7.00013 10.5523 7.00013 10Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M7.00013 14C7.00013 13.4477 7.44785 13 8.00013 13H14.0001C14.5524 13 15.0001 13.4477 15.0001 14C15.0001 14.5523 14.5524 15 14.0001 15H8.00013C7.44785 15 7.00013 14.5523 7.00013 14Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.ChatRefreshedIcon = m));
  },
  98,
);
