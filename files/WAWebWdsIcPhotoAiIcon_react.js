__d(
  "WAWebWdsIcPhotoAiIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ic-photo-ai";
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
                  d: "M14.79 4a1 1 0 0 0-1-1H5c-.55 0-1.02.2-1.41.59C3.19 3.98 3 4.45 3 5v14c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59h14c.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41v-8.32a1 1 0 1 0-2 0V19H5V5h8.79a1 1 0 0 0 1-1ZM19.47.64a.58.58 0 0 1 1.06 0l.77 1.78c.06.14.16.24.3.3l1.79.77c.47.2.47.86 0 1.06l-1.79.76a.58.58 0 0 0-.3.3l-.79 1.83a.58.58 0 0 1-1.05 0l-.84-1.83a.58.58 0 0 0-.3-.3l-1.73-.76a.58.58 0 0 1 0-1.06l1.8-.77a.58.58 0 0 0 .3-.3l.78-1.78Z",
                }),
                c.jsx("path", {
                  fill: "currentColor",
                  d: "M7 16.93h10c.2 0 .35-.1.45-.28a.44.44 0 0 0-.05-.52l-2.75-3.68a.48.48 0 0 0-.4-.2c-.17 0-.3.07-.4.2l-2.6 3.48-1.85-2.48a.48.48 0 0 0-.4-.2c-.17 0-.3.07-.4.2l-2 2.68a.44.44 0 0 0-.05.52c.1.19.25.28.45.28Z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WdsIcPhotoAiIcon = m));
  },
  98,
);
