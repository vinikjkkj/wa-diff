__d(
  "WAWebBoltFilledIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "bolt-filled";
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
                  d: "M8.99997 15H5.89997C5.49997 15 5.20414 14.8209 5.01247 14.4625C4.8208 14.1042 4.84164 13.7584 5.07497 13.425L12.55 2.67503C12.7166 2.44169 12.9333 2.27919 13.2 2.18753C13.4666 2.09586 13.7416 2.10003 14.025 2.20003C14.3083 2.30003 14.5166 2.47503 14.65 2.72503C14.7833 2.97503 14.8333 3.24169 14.8 3.52503L14 10H17.875C18.3083 10 18.6125 10.1917 18.7875 10.575C18.9625 10.9584 18.9083 11.3167 18.625 11.65L10.4 21.5C10.2166 21.7167 9.99164 21.8584 9.72497 21.925C9.4583 21.9917 9.19997 21.9667 8.94997 21.85C8.69997 21.7334 8.50414 21.5542 8.36247 21.3125C8.2208 21.0709 8.16664 20.8084 8.19997 20.525L8.99997 15Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.BoltFilledIcon = m));
  },
  98,
);
