__d(
  "WAWebReelPluginVideoIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "reel-plugin-video";
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
      var S = 22,
        R = 22;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 22 22",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M15.105 5.27L11.945 0H7.445H7.185C6.845 0.005 6.52 0.02 6.22 0.04L9.005 5.265H15.105V5.27ZM4.545 0.315C3.53 0.58 2.605 1.11 1.865 1.85C0.94 2.775 0.34 3.975 0.155 5.27H7.185L4.545 0.315ZM21.84 5.27C21.66 3.985 21.065 2.79 20.15 1.865C18.805 0.565 17.31 0 14.555 0H13.815L16.975 5.27H21.84ZM22 7.25C22 7.12 21.995 7.125 21.99 7H0.00999999L0.005 7.06C-4.65661e-09 7.185 0 7.315 0 7.445V14.56V14.77C0.03 17.39 0.595 18.84 1.85 20.14C3.195 21.435 4.69 22 7.445 22H14.555H14.765C17.385 21.97 18.835 21.405 20.135 20.155C21.435 18.81 22 17.315 22 14.56V7.445V7.25ZM14.59 14.675L9.455 17.675L9.4 17.705C9 17.9 8.52 17.73 8.33 17.33C8.275 17.22 8.25 17.1 8.25 16.98V10.98V10.915C8.285 10.475 8.67 10.145 9.115 10.18C9.235 10.19 9.35 10.225 9.455 10.285L14.59 13.285L14.65 13.325C15.01 13.58 15.095 14.085 14.835 14.445C14.775 14.54 14.69 14.615 14.59 14.675Z",
                  fill: "white",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.ReelPluginVideoIcon = m));
  },
  98,
);
