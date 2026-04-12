__d(
  "WAWebInfoFilledGreenCircleIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "info-filled-green-circle";
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
      var S = 49,
        R = 48;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 48 49",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M46 24.5C46 36.6503 36.1503 46.5 24 46.5C11.8497 46.5 2 36.6503 2 24.5C2 12.3497 11.8497 2.5 24 2.5C36.1503 2.5 46 12.3497 46 24.5Z",
                  fill: "#00A884",
                }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M23.9998 16.167C19.3998 16.167 15.6665 19.9003 15.6665 24.5003C15.6665 29.1003 19.3998 32.8337 23.9998 32.8337C28.5998 32.8337 32.3332 29.1003 32.3332 24.5003C32.3332 19.9003 28.5998 16.167 23.9998 16.167ZM23.9998 28.667C23.5415 28.667 23.1665 28.292 23.1665 27.8337V24.5003C23.1665 24.042 23.5415 23.667 23.9998 23.667C24.4582 23.667 24.8332 24.042 24.8332 24.5003V27.8337C24.8332 28.292 24.4582 28.667 23.9998 28.667ZM23.1665 22.0003H24.8332V20.3337H23.1665V22.0003Z",
                  fill: "white",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.InfoFilledGreenCircleIcon = m));
  },
  98,
);
