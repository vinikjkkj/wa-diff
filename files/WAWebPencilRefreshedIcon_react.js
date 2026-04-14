__d(
  "WAWebPencilRefreshedIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "pencil-refreshed";
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
                  d: "M5 18.9999H6.4L16.2 9.22488L14.775 7.79988L5 17.5999V18.9999ZM4 20.9999C3.71667 20.9999 3.47917 20.904 3.2875 20.7124C3.09583 20.5207 3 20.2832 3 19.9999V17.5749C3 17.3082 3.05 17.054 3.15 16.8124C3.25 16.5707 3.39167 16.3582 3.575 16.1749L16.2 3.57488C16.3833 3.39154 16.6 3.24988 16.85 3.14988C17.1 3.04988 17.3583 2.99988 17.625 2.99988C17.8917 2.99988 18.1458 3.04988 18.3875 3.14988C18.6292 3.24988 18.85 3.39988 19.05 3.59988L20.425 4.99988C20.625 5.18321 20.7708 5.39571 20.8625 5.63738C20.9542 5.87904 21 6.13321 21 6.39988C21 6.64988 20.9542 6.89988 20.8625 7.14988C20.7708 7.39988 20.625 7.62488 20.425 7.82488L7.825 20.4249C7.64167 20.6082 7.42917 20.7499 7.1875 20.8499C6.94583 20.9499 6.69167 20.9999 6.425 20.9999H4Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.PencilRefreshedIcon = m));
  },
  98,
);
