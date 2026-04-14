__d(
  "WAWebWdsSmbPictoArrowsTransferIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-smb-picto-arrows-transfer";
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
      var S = 88,
        R = 88;
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
                  fill: "#25D366",
                  stroke: "#111B21",
                  strokeWidth: 1.5,
                  d: "m59.67 36.796 1.281-1.28h-44.13a4.234 4.234 0 1 1 0-8.47h44.13l-1.28-1.28-1.789-1.788a4.234 4.234 0 1 1 5.988-5.988l10.298 10.297a4.234 4.234 0 0 1 0 5.988l-9.728 9.727a4.234 4.234 0 0 1-5.988-5.988l1.219-1.218ZM28.322 51.204l-1.28 1.28h44.13a4.234 4.234 0 1 1 0 8.47h-44.13l1.28 1.28 1.788 1.788a4.234 4.234 0 1 1-5.988 5.988L13.825 59.713a4.234 4.234 0 0 1 0-5.988l9.727-9.727a4.234 4.234 0 0 1 5.988 5.988l-1.218 1.218Z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WdsSmbPictoArrowsTransferIcon = m));
  },
  98,
);
