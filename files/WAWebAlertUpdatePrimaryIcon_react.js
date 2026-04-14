__d(
  "WAWebAlertUpdatePrimaryIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "alert-update-primary";
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
      var S = 49,
        R = 49;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 49 49",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("circle", {
                  cx: 24.5,
                  cy: 24.5,
                  r: 24.5,
                  fill: "#02A698",
                }),
                c.jsx("path", {
                  d: "M16 13.5455V36.4545C16 37.8545 17.0929 39 18.4286 39H30.5714C31.9071 39 33 37.8545 33 36.4545V13.5455C33 12.1455 31.9071 11 30.5714 11H18.4286C17.0929 11 16 12.1455 16 13.5455ZM30.5714 32.6364H18.4286V17.3636H30.5714V32.6364ZM29.3571 25H25.7143V19.9091H23.2857V25H19.6429L24.5 30.0909L29.3571 25Z",
                  fill: "white",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.AlertUpdatePrimaryIcon = m));
  },
  98,
);
