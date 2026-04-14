__d(
  "WAWebArchivedFilledIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "archived-filled";
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
                  d: "M21.4471 4.44238L19.8956 2.55288C19.6806 2.21493 19.2352 2 18.6668 2H5.33321C4.78033 2 4.33491 2.21493 3.99696 2.55288L2.55288 4.44238C2.21493 4.8878 2 5.33321 2 5.88646V19.7726C2 21.0013 2.9983 22 4.22745 22H19.7726C21.0013 22 22 21.0017 22 19.7726V5.88646C22 5.33321 21.7847 4.8878 21.4471 4.44238ZM12.0152 18.1135L5.90165 12H9.78811V9.77255H14.2274V12H18.1139L12.0152 18.1135ZM4.35047 4.22745L5.24131 3.12132H18.5745L19.5728 4.22745H4.35047Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.ArchivedFilledIcon = m));
  },
  98,
);
