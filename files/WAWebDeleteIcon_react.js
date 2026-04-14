__d(
  "WAWebDeleteIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "delete";
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
      var S = 25,
        R = 24;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 24 25",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M7 21.5C6.45 21.5 5.97917 21.3042 5.5875 20.9125C5.19583 20.5208 5 20.05 5 19.5V6.5C4.71667 6.5 4.47917 6.40417 4.2875 6.2125C4.09583 6.02083 4 5.78333 4 5.5C4 5.21667 4.09583 4.97917 4.2875 4.7875C4.47917 4.59583 4.71667 4.5 5 4.5H9C9 4.21667 9.09583 3.97917 9.2875 3.7875C9.47917 3.59583 9.71667 3.5 10 3.5H14C14.2833 3.5 14.5208 3.59583 14.7125 3.7875C14.9042 3.97917 15 4.21667 15 4.5H19C19.2833 4.5 19.5208 4.59583 19.7125 4.7875C19.9042 4.97917 20 5.21667 20 5.5C20 5.78333 19.9042 6.02083 19.7125 6.2125C19.5208 6.40417 19.2833 6.5 19 6.5V19.5C19 20.05 18.8042 20.5208 18.4125 20.9125C18.0208 21.3042 17.55 21.5 17 21.5H7ZM17 6.5H7V19.5H17V6.5ZM10 17.5C10.2833 17.5 10.5208 17.4042 10.7125 17.2125C10.9042 17.0208 11 16.7833 11 16.5V9.5C11 9.21667 10.9042 8.97917 10.7125 8.7875C10.5208 8.59583 10.2833 8.5 10 8.5C9.71667 8.5 9.47917 8.59583 9.2875 8.7875C9.09583 8.97917 9 9.21667 9 9.5V16.5C9 16.7833 9.09583 17.0208 9.2875 17.2125C9.47917 17.4042 9.71667 17.5 10 17.5ZM14 17.5C14.2833 17.5 14.5208 17.4042 14.7125 17.2125C14.9042 17.0208 15 16.7833 15 16.5V9.5C15 9.21667 14.9042 8.97917 14.7125 8.7875C14.5208 8.59583 14.2833 8.5 14 8.5C13.7167 8.5 13.4792 8.59583 13.2875 8.7875C13.0958 8.97917 13 9.21667 13 9.5V16.5C13 16.7833 13.0958 17.0208 13.2875 17.2125C13.4792 17.4042 13.7167 17.5 14 17.5Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.DeleteIcon = m));
  },
  98,
);
