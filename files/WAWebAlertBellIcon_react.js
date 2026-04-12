__d(
  "WAWebAlertBellIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "alert-bell";
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
      var S = 20,
        R = 16;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 16 20",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M8.0013 20C9.16145 20 10.1107 19.0769 10.1107 17.9487H5.89194C5.89194 19.0769 6.8306 20 8.0013 20ZM14.3294 13.8462V8.71795C14.3294 5.56923 12.5997 2.93333 9.58332 2.2359V1.53846C9.58332 0.68718 8.87668 0 8.0013 0C7.12591 0 6.41928 0.68718 6.41928 1.53846V2.2359C3.39235 2.93333 1.67322 5.55897 1.67322 8.71795V13.8462L0.312688 15.1692C-0.351759 15.8154 0.112299 16.9231 1.05096 16.9231H14.9411C15.8798 16.9231 16.3544 15.8154 15.6899 15.1692L14.3294 13.8462Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.AlertBellIcon = m));
  },
  98,
);
