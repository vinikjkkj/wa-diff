__d(
  "WAWebLocalShippingIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "local-shipping";
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
      var S = 8,
        R = 12;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 12 8",
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
                  d: "M8.5 2H9.75C9.905 2 10.055 2.075 10.15 2.2L11.3 3.735C11.43 3.91 11.5 4.12 11.5 4.335V6C11.5 6.275 11.275 6.5 11 6.5H10.5C10.5 7.33 9.83 8 9 8C8.17 8 7.5 7.33 7.5 6.5H4.5C4.5 7.33 3.83 8 3 8C2.17 8 1.5 7.33 1.5 6.5C0.95 6.5 0.5 6.05 0.5 5.5V1C0.5 0.45 0.95 0 1.5 0H7.5C8.05 0 8.5 0.45 8.5 1V2ZM2.5 6.5C2.5 6.775 2.725 7 3 7C3.275 7 3.5 6.775 3.5 6.5C3.5 6.225 3.275 6 3 6C2.725 6 2.5 6.225 2.5 6.5ZM9.75 2.75L10.73 4H8.5V2.75H9.75ZM8.5 6.5C8.5 6.775 8.725 7 9 7C9.275 7 9.5 6.775 9.5 6.5C9.5 6.225 9.275 6 9 6C8.725 6 8.5 6.225 8.5 6.5Z",
                  fill: "#667781",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.LocalShippingIcon = m));
  },
  98,
);
