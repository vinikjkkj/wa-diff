__d(
  "WAWebMessageReportIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "message-report";
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
                  d: "M0.941247 5.52617L2.99693 8.84848V17.3333C2.99693 18.8061 4.19083 20 5.66359 20H19.3303C20.803 20 21.9969 18.8061 21.9969 17.3333V6.66667C21.9969 5.19391 20.803 4 19.3303 4H1.79162C1.00821 4 0.529036 4.85997 0.941247 5.52617ZM4.99693 8.27977V17.3333C4.99693 17.7015 5.2954 18 5.66359 18H19.3303C19.6985 18 19.9969 17.7015 19.9969 17.3333V6.66667C19.9969 6.29848 19.6985 6 19.3303 6H3.58632L4.99693 8.27977Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M13.1061 15.7125C12.9144 15.9042 12.6769 16 12.3936 16C12.1102 16 11.8727 15.9042 11.6811 15.7125C11.4894 15.5208 11.3936 15.2833 11.3936 15C11.3936 14.7167 11.4894 14.4792 11.6811 14.2875C11.8727 14.0958 12.1102 14 12.3936 14C12.6769 14 12.9144 14.0958 13.1061 14.2875C13.2977 14.4792 13.3936 14.7167 13.3936 15C13.3936 15.2833 13.2977 15.5208 13.1061 15.7125Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M13.1061 12.7125C12.9144 12.9042 12.6769 13 12.3936 13C12.2602 13 12.1311 12.975 12.0061 12.925C11.8811 12.875 11.7727 12.8042 11.6811 12.7125C11.5894 12.6208 11.5186 12.5125 11.4686 12.3875C11.4186 12.2625 11.3936 12.1333 11.3936 12V9C11.3936 8.71667 11.4894 8.47917 11.6811 8.2875C11.8727 8.09583 12.1102 8 12.3936 8C12.6769 8 12.9144 8.09583 13.1061 8.2875C13.2977 8.47917 13.3936 8.71667 13.3936 9V12C13.3936 12.2833 13.2977 12.5208 13.1061 12.7125Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.MessageReportIcon = m));
  },
  98,
);
