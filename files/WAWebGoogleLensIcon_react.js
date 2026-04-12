__d(
  "WAWebGoogleLensIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "google-lens";
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
                  d: "M18.0088 20C19.1133 20 20.0088 19.1046 20.0088 18C20.0088 16.8954 19.1133 16 18.0088 16C16.9042 16 16.0088 16.8954 16.0088 18C16.0088 19.1046 16.9042 20 18.0088 20Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M12.0087 16C13.6656 16 15.0087 14.6569 15.0087 13C15.0087 11.3431 13.6656 10 12.0087 10C10.3519 10 9.00875 11.3431 9.00875 13C9.00875 14.6569 10.3519 16 12.0087 16Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M3 16.9C3 19.1637 4.83625 21 7.1 21H10.9988C11.5517 21 12 20.5517 12 19.9988C12 19.4468 11.5532 18.9989 11.0013 18.9975L6.9875 18.9875C5.8875 18.9875 5 17.9638 5 16.75V15.5C5 14.9477 4.55228 14.5 4 14.5C3.44772 14.5 3 14.9477 3 15.5V16.9Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M9.7 3.4C9.88885 3.14819 10.1852 3 10.5 3H13.5C13.8148 3 14.1111 3.14819 14.3 3.4L15.2 4.6C15.3889 4.85181 15.6852 5 16 5H16.9C19.1637 5 21 6.83625 21 9.1V12C21 12.5523 20.5523 13 20 13C19.4477 13 19 12.5523 19 12V9.25C19 8.03625 18.1 7 17 7H7C5.9 7 5 8.03625 5 9.25V10.5C5 11.0523 4.55228 11.5 4 11.5C3.44772 11.5 3 11.0523 3 10.5V9.1C3 6.83625 4.83625 5 7.1 5H8C8.31476 5 8.61115 4.85181 8.8 4.6L9.7 3.4Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.GoogleLensIcon = m));
  },
  98,
);
