__d(
  "WAWebIcSyncIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-sync";
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
                  d: "M6 12.05a5.84 5.84 0 0 0 1.75 4.15l.25.25V15c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v4c0 .28-.1.52-.29.71-.19.2-.43.29-.71.29H5a.97.97 0 0 1-.71-.29A.97.97 0 0 1 4 19c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h1.75l-.4-.35a6.32 6.32 0 0 1-1.82-2.62A8.82 8.82 0 0 1 4 12.04a8 8 0 0 1 4.43-7.2.77.77 0 0 1 .73-.02c.26.11.43.3.52.57.08.25.07.5-.02.75-.09.25-.25.44-.48.57A6.14 6.14 0 0 0 6 12.05Zm12-.1a5.84 5.84 0 0 0-1.75-4.15L16 7.55V9c0 .28-.1.52-.29.71-.19.2-.43.29-.71.29a.97.97 0 0 1-.71-.29A.97.97 0 0 1 14 9V5c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h4c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71-.19.2-.43.29-.71.29h-1.75l.4.35a7.77 7.77 0 0 1 2.35 5.6 8 8 0 0 1-4.43 7.2.77.77 0 0 1-.73.02.9.9 0 0 1-.52-.57 1.1 1.1 0 0 1 .02-.75c.09-.25.25-.44.48-.58A6.14 6.14 0 0 0 18 11.95Z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.IcSyncIcon = m));
  },
  98,
);
