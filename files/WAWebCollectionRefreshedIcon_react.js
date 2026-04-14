__d(
  "WAWebCollectionRefreshedIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "collection-refreshed";
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
                  d: "M6.64286 2C5.45939 2 4.5 2.89543 4.5 4H19.5C19.5 2.89543 18.5406 2 17.3571 2H6.64286ZM5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V8C3 7.45 3.19583 6.97917 3.5875 6.5875C3.97917 6.19583 4.45 6 5 6H19C19.55 6 20.0208 6.19583 20.4125 6.5875C20.8042 6.97917 21 7.45 21 8V20C21 20.55 20.8042 21.0208 20.4125 21.4125C20.0208 21.8042 19.55 22 19 22H5ZM5 20H19V8H5V20ZM7 10.5C7 10.2239 7.22386 10 7.5 10H10.5C10.7761 10 11 10.2239 11 10.5V12.5C11 12.7761 10.7761 13 10.5 13H7.5C7.22386 13 7 12.7761 7 12.5V10.5ZM7 15.5C7 15.2239 7.22386 15 7.5 15H10.5C10.7761 15 11 15.2239 11 15.5V17.5C11 17.7761 10.7761 18 10.5 18H7.5C7.22386 18 7 17.7761 7 17.5V15.5ZM13.5 10C13.2239 10 13 10.2239 13 10.5V12.5C13 12.7761 13.2239 13 13.5 13H16.5C16.7761 13 17 12.7761 17 12.5V10.5C17 10.2239 16.7761 10 16.5 10H13.5ZM13 15.5C13 15.2239 13.2239 15 13.5 15H16.5C16.7761 15 17 15.2239 17 15.5V17.5C17 17.7761 16.7761 18 16.5 18H13.5C13.2239 18 13 17.7761 13 17.5V15.5Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.CollectionRefreshedIcon = m));
  },
  98,
);
