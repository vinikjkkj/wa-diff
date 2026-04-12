__d(
  "WAWebMessageReportRefreshedIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "message-report-refreshed";
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
                  d: "M2.99986 8.84848L0.944176 5.52617C0.531966 4.85997 1.01114 4 1.79455 4H19.3332C20.806 4 21.9999 5.19391 21.9999 6.66667V17.3333C21.9999 18.8061 20.806 20 19.3332 20H5.66652C4.19376 20 2.99986 18.8061 2.99986 17.3333V8.84848ZM4.99986 17.3333V8.27977L3.58925 6H19.3332C19.7014 6 19.9999 6.29848 19.9999 6.66667V17.3333C19.9999 17.7015 19.7014 18 19.3332 18H5.66652C5.29833 18 4.99986 17.7015 4.99986 17.3333ZM13.2125 15.2875C13.0208 15.0958 12.7833 15 12.5 15C12.2167 15 11.9792 15.0958 11.7875 15.2875C11.5958 15.4792 11.5 15.7167 11.5 16C11.5 16.2833 11.5958 16.5208 11.7875 16.7125C11.9792 16.9042 12.2167 17 12.5 17C12.7833 17 13.0208 16.9042 13.2125 16.7125C13.4042 16.5208 13.5 16.2833 13.5 16C13.5 15.7167 13.4042 15.4792 13.2125 15.2875ZM13.2125 7.2875C13.0208 7.09583 12.7833 7 12.5 7C12.2167 7 11.9792 7.09583 11.7875 7.2875C11.5958 7.47917 11.5 7.71667 11.5 8V12C11.5 12.2833 11.5958 12.5208 11.7875 12.7125C11.9792 12.9042 12.2167 13 12.5 13C12.7833 13 13.0208 12.9042 13.2125 12.7125C13.4042 12.5208 13.5 12.2833 13.5 12V8C13.5 7.71667 13.4042 7.47917 13.2125 7.2875Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.MessageReportRefreshedIcon = m));
  },
  98,
);
