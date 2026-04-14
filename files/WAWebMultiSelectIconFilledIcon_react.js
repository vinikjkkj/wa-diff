__d(
  "WAWebMultiSelectIconFilledIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "innerStyles", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "multi-select-icon-filled";
    function m(t) {
      var n = t.height,
        a = t.iconXstyle,
        i = t.innerStyles,
        l = t.name,
        u = t.viewBox,
        m = t.width,
        p = babelHelpers.objectWithoutPropertiesLoose(t, e),
        _;
      if (u) {
        var f = u.height,
          g = f === void 0 ? 0 : f,
          h = u.width,
          y = h === void 0 ? 0 : h,
          C = u.x,
          b = C === void 0 ? 0 : C,
          v = u.y,
          S = v === void 0 ? 0 : v;
        _ = [b, S, y, g].join(" ");
      }
      var R = 12,
        L = 19;
      return (
        (n != null || m != null) && ((R = n), (L = m)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: l != null ? l : d }, p, {
            children: c.jsxs("svg", {
              viewBox: _,
              height: R,
              width: L,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: l != null ? l : d }),
                c.jsx("path", {
                  fill: "#0A1014",
                  d: "m12.3 6.9-1.08-1.07a.47.47 0 0 0-.35-.14.47.47 0 0 0-.34.14c-.1.09-.14.2-.14.35 0 .14.04.25.13.35l1.43 1.42a.48.48 0 0 0 .7 0l2.82-2.82c.1-.1.14-.21.14-.35a.47.47 0 0 0-.13-.35.47.47 0 0 0-.36-.14.47.47 0 0 0-.34.14zM13 11a4.87 4.87 0 0 1-3.54-1.46A5.05 5.05 0 0 1 8.4 4.05 5.05 5.05 0 0 1 13 1a4.87 4.87 0 0 1 3.54 1.46 5.05 5.05 0 0 1 1.07 5.49A5.05 5.05 0 0 1 13 11",
                  className: s(i == null ? void 0 : i.background),
                }),
                c.jsx("path", {
                  fill: "#0A1014",
                  d: "M8.72 10.2A4.87 4.87 0 0 1 6 11a4.87 4.87 0 0 1-3.54-1.46A5.05 5.05 0 0 1 1.4 4.05 5.05 5.05 0 0 1 6 1a4.87 4.87 0 0 1 2.71.8 5.98 5.98 0 0 0-1.65 3.34L5.3 6.9 4.22 5.83a.47.47 0 0 0-.34-.14.47.47 0 0 0-.35.14c-.1.09-.14.2-.14.35 0 .14.04.25.13.35l1.43 1.42a.48.48 0 0 0 .7 0l1.38-1.38a5.93 5.93 0 0 0 1.69 3.63",
                  className: s(i == null ? void 0 : i.background),
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.MultiSelectIconFilledIcon = m));
  },
  98,
);
