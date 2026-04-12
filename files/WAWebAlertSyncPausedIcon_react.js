__d(
  "WAWebAlertSyncPausedIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "alert-sync-paused";
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
      var S = 21,
        R = 20;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 20 21",
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
                  d: "M10 0.5C4.48 0.5 0 4.98 0 10.5C0 16.02 4.48 20.5 10 20.5C15.52 20.5 20 16.02 20 10.5C20 4.98 15.52 0.5 10 0.5ZM10 11.5C9.45 11.5 9 11.05 9 10.5V6.5C9 5.95 9.45 5.5 10 5.5C10.55 5.5 11 5.95 11 6.5V10.5C11 11.05 10.55 11.5 10 11.5ZM9 13.5V15.5H11V13.5H9Z",
                  fill: "#FFD279",
                }),
                c.jsx("path", {
                  d: "M9 13.5V15.5H11V13.5H9Z",
                  fill: "#667781",
                }),
                c.jsx("path", {
                  d: "M10 11.5C9.45 11.5 9 11.05 9 10.5V6.5C9 5.95 9.45 5.5 10 5.5C10.55 5.5 11 5.95 11 6.5V10.5C11 11.05 10.55 11.5 10 11.5Z",
                  fill: "#54656F",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.AlertSyncPausedIcon = m));
  },
  98,
);
