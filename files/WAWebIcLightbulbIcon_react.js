__d(
  "WAWebIcLightbulbIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-lightbulb";
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
                  d: "M12 22c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41h4c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59Zm-3-3a.97.97 0 0 1-.71-.29A.97.97 0 0 1 8 18c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h6c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71-.19.2-.43.29-.71.29H9Zm-.75-3a7.66 7.66 0 0 1-2.74-2.75A7.28 7.28 0 0 1 4.5 9.5c0-2.08.73-3.85 2.19-5.31A7.23 7.23 0 0 1 12 2c2.08 0 3.85.73 5.31 2.19A7.23 7.23 0 0 1 19.5 9.5c0 1.35-.34 2.6-1.01 3.75A7.66 7.66 0 0 1 15.75 16h-7.5Zm.6-2h6.3a5.55 5.55 0 0 0 2.35-4.5 5.3 5.3 0 0 0-1.6-3.9A5.3 5.3 0 0 0 12 4a5.3 5.3 0 0 0-3.9 1.6 5.3 5.3 0 0 0-1.6 3.9A5.38 5.38 0 0 0 8.85 14Z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.IcLightbulbIcon = m));
  },
  98,
);
