__d(
  "WAWebSingleChevronInCircleIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "single-chevron-in-circle";
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
        R = 20;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 20 20",
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
                  d: "M10.0034 1.66992C14.6034 1.66992 18.3367 5.40326 18.3367 10.0033C18.3367 14.6033 14.6034 18.3366 10.0034 18.3366C5.40338 18.3366 1.67004 14.6033 1.67004 10.0033C1.67004 5.40326 5.40338 1.66992 10.0034 1.66992ZM10.0034 3.33659C6.32004 3.33659 3.33671 6.31992 3.33671 10.0033C3.33671 13.6866 6.32004 16.6699 10.0034 16.6699C13.6867 16.6699 16.67 13.6866 16.67 10.0033C16.67 6.31992 13.6867 3.33659 10.0034 3.33659ZM10.7327 9.99904L8.57734 12.1565C8.25234 12.4815 8.26068 13.0148 8.57734 13.3398C8.90234 13.6648 9.42734 13.6648 9.75234 13.3398L12.4994 10.5907C12.8244 10.2657 12.8244 9.74071 12.4994 9.41571L9.75563 6.67319C9.43063 6.34819 8.90563 6.34819 8.58063 6.67319C8.25563 6.99819 8.25563 7.52319 8.58063 7.84819L10.7327 9.99904Z",
                  fill: "currentColor ",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.SingleChevronInCircleIcon = m));
  },
  98,
);
