__d(
  "WAWebShoppingCartEmptyIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "shopping-cart-empty";
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
      var S = 90,
        R = 90;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p,
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsxs("g", {
                  fillRule: "nonzero",
                  fill: "currentColor",
                  children: [
                    c.jsx("path", {
                      d: "M36.6666667 55C34.8333333 55 33.35 56.5 33.35 58.3333333 33.35 60.1666667 34.8333333 61.6666667 36.6666667 61.6666667 38.5 61.6666667 40 60.1666667 40 58.3333333 40 56.5 38.5 55 36.6666667 55zM26.6666667 30C26.6666667 30.9166667 27.4166667 31.6666667 28.3333333 31.6666667L30 31.6666667 36 44.3166667 33.75 48.3833333C32.5333333 50.6166667 34.1333333 53.3333333 36.6666667 53.3333333L55 53.3333333C55.9166667 53.3333333 56.6666667 52.5833333 56.6666667 51.6666667 56.6666667 50.75 55.9166667 50 55 50L36.6666667 50 38.5 46.6666667 50.9166667 46.6666667C52.1666667 46.6666667 53.2666667 45.9833333 53.8333333 44.95L59.8 34.1333333C60.4166667 33.0333333 59.6166667 31.6666667 58.35 31.6666667L33.6833333 31.6666667 32.5666667 29.2833333C32.3 28.7 31.7 28.3333333 31.0666667 28.3333333L28.3333333 28.3333333C27.4166667 28.3333333 26.6666667 29.0833333 26.6666667 30zM53.3333333 55C51.5 55 50.0166667 56.5 50.0166667 58.3333333 50.0166667 60.1666667 51.5 61.6666667 53.3333333 61.6666667 55.1666667 61.6666667 56.6666667 60.1666667 56.6666667 58.3333333 56.6666667 56.5 55.1666667 55 53.3333333 55z",
                    }),
                    c.jsx("path", {
                      d: "M44.957,2 C21.221,2 2,21.264 2,45 C2,68.736 21.221,88 44.957,88 C68.736,88 88,68.736 88,45 C88,21.264 68.736,2 44.957,2 Z M45,90 C20.1375,90 0,69.8625 0,45 C0,20.1375 20.1375,0 45,0 C69.8625,0 90,20.1375 90,45 C90,69.8625 69.8625,90 45,90 Z",
                    }),
                  ],
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.ShoppingCartEmptyIcon = m));
  },
  98,
);
