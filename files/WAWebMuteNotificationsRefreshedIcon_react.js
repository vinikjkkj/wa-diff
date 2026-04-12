__d(
  "WAWebMuteNotificationsRefreshedIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "mute-notifications-refreshed";
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
                  d: "M5.00039 19C4.44811 19 4.00039 18.5523 4.00039 18C4.00039 17.4477 4.44811 17 5.00039 17H6.00039V10C6.00039 9.45 6.07122 8.90833 6.21289 8.375C6.35456 7.84167 6.56706 7.33333 6.85039 6.85L8.35039 8.35C8.23372 8.61667 8.14622 8.8875 8.08789 9.1625C8.02956 9.4375 8.00039 9.71667 8.00039 10V17H14.2004L2.10039 4.9C1.71379 4.5134 1.71379 3.8866 2.10039 3.5C2.48699 3.1134 3.11379 3.1134 3.50039 3.5L20.498 20.4976C20.8859 20.8855 20.8859 21.5145 20.498 21.9024C20.1119 22.2885 19.4867 22.2906 19.098 21.9072L16.1504 19H5.00039ZM18.0004 15.15L16.0004 13.15V10C16.0004 8.9 15.6087 7.95833 14.8254 7.175C14.0421 6.39167 13.1004 6 12.0004 6C11.5671 6 11.1504 6.06667 10.7504 6.2C10.3504 6.33333 9.98372 6.53333 9.65039 6.8L8.20039 5.35C8.53372 5.08333 8.89206 4.85 9.27539 4.65C9.65872 4.45 10.0671 4.3 10.5004 4.2V3.5C10.5004 3.08333 10.6462 2.72917 10.9379 2.4375C11.2296 2.14583 11.5837 2 12.0004 2C12.4171 2 12.7712 2.14583 13.0629 2.4375C13.3546 2.72917 13.5004 3.08333 13.5004 3.5V4.2C14.8337 4.53333 15.9171 5.2375 16.7504 6.3125C17.5837 7.3875 18.0004 8.61667 18.0004 10V15.15ZM12.0004 22C11.4504 22 10.9796 21.8042 10.5879 21.4125C10.1962 21.0208 10.0004 20.55 10.0004 20H14.0004C14.0004 20.55 13.8046 21.0208 13.4129 21.4125C13.0212 21.8042 12.5504 22 12.0004 22Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.MuteNotificationsRefreshedIcon = m));
  },
  98,
);
