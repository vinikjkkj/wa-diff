__d(
  "WAWebIcHelpFilledIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-help-filled";
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
              viewBox: p,
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  fill: "currentColor",
                  d: "M11.95 18c.35 0 .65-.12.89-.36s.36-.54.36-.89-.12-.65-.36-.89a1.2 1.2 0 0 0-.89-.36c-.35 0-.65.12-.89.36a1.2 1.2 0 0 0-.36.89c0 .35.12.65.36.89s.54.36.89.36Zm.05 4a10.1 10.1 0 0 1-9.21-6.1A9.74 9.74 0 0 1 2 12a10.1 10.1 0 0 1 6.1-9.21A9.74 9.74 0 0 1 12 2a10.1 10.1 0 0 1 9.21 6.1c.53 1.22.79 2.52.79 3.9s-.26 2.68-.79 3.9a10.1 10.1 0 0 1-5.31 5.31A9.74 9.74 0 0 1 12 22Zm.1-14.3c.42 0 .78.13 1.09.4.3.27.46.6.46 1 0 .37-.11.7-.34.97-.22.29-.48.55-.76.8-.38.34-.72.7-1.01 1.1-.3.4-.44.85-.44 1.35 0 .24.09.43.26.6.18.15.38.23.62.23s.46-.08.63-.25c.18-.17.29-.38.34-.63a2 2 0 0 1 .45-.93c.23-.28.48-.54.75-.79.38-.37.71-.77.99-1.2.27-.43.41-.92.41-1.45 0-.85-.35-1.55-1.04-2.09A3.8 3.8 0 0 0 12.1 6c-.63 0-1.24.13-1.81.4a2.8 2.8 0 0 0-1.31 1.22.9.9 0 0 0-.12.64c.04.23.16.4.34.52.23.13.48.17.73.12a1 1 0 0 0 .62-.43 1.95 1.95 0 0 1 1.55-.77Z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.IcHelpFilledIcon = m));
  },
  98,
);
