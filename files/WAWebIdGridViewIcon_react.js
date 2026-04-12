__d(
  "WAWebIdGridViewIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "id-grid-view";
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
                  fill: "currentColor",
                  d: "M5 11c-.55 0-1.02-.2-1.41-.59C3.19 10.02 3 9.55 3 9V5c0-.55.2-1.02.59-1.41C3.98 3.19 4.45 3 5 3h4c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v4c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H5Zm0 10c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41v-4c0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59h4c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v4c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H5Zm10-10c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V5c0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59h4c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v4c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59h-4Zm0 10c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41v-4c0-.55.2-1.02.59-1.41.39-.4.86-.59 1.41-.59h4c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v4c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59h-4ZM5 9h4V5H5v4Zm10 0h4V5h-4v4Zm0 10h4v-4h-4v4ZM5 19h4v-4H5v4Z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.IdGridViewIcon = m));
  },
  98,
);
