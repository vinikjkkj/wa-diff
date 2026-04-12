__d(
  "WAWebCheckShieldIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "check-shield";
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
      var S = 20,
        R = 16;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 16 20",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              color: "#54656F",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M6.95 10.6999L5.55 9.2999C5.35 9.0999 5.11667 8.9999 4.85 8.9999C4.58333 8.9999 4.35 9.0999 4.15 9.2999C3.95 9.4999 3.85 9.7374 3.85 10.0124C3.85 10.2874 3.95 10.5249 4.15 10.7249L6.25 12.8499C6.45 13.0499 6.68333 13.1499 6.95 13.1499C7.21667 13.1499 7.45 13.0499 7.65 12.8499L11.9 8.5999C12.1 8.3999 12.2 8.1624 12.2 7.8874C12.2 7.6124 12.1 7.3749 11.9 7.1749C11.7 6.9749 11.4625 6.8749 11.1875 6.8749C10.9125 6.8749 10.675 6.9749 10.475 7.1749L6.95 10.6999ZM8 19.8999C7.88333 19.8999 7.775 19.8916 7.675 19.8749C7.575 19.8582 7.475 19.8332 7.375 19.7999C5.125 19.0499 3.33333 17.6624 2 15.6374C0.666667 13.6124 0 11.4332 0 9.0999V4.3749C0 3.95824 0.120833 3.58324 0.3625 3.2499C0.604167 2.91657 0.916667 2.6749 1.3 2.5249L7.3 0.274902C7.53333 0.191569 7.76667 0.149902 8 0.149902C8.23333 0.149902 8.46667 0.191569 8.7 0.274902L14.7 2.5249C15.0833 2.6749 15.3958 2.91657 15.6375 3.2499C15.8792 3.58324 16 3.95824 16 4.3749V9.0999C16 11.4332 15.3333 13.6124 14 15.6374C12.6667 17.6624 10.875 19.0499 8.625 19.7999C8.525 19.8332 8.425 19.8582 8.325 19.8749C8.225 19.8916 8.11667 19.8999 8 19.8999ZM8 17.8999C9.73333 17.3499 11.1667 16.2499 12.3 14.5999C13.4333 12.9499 14 11.1166 14 9.0999V4.3749L8 2.1249L2 4.3749V9.0999C2 11.1166 2.56667 12.9499 3.7 14.5999C4.83333 16.2499 6.26667 17.3499 8 17.8999Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.CheckShieldIcon = m));
  },
  98,
);
