__d(
  "WAWebWdsPictoTimerFeedbackWarningIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "innerStyles", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-picto-timer-feedback-warning";
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
      var R = 88,
        L = 176;
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
                c.jsx("rect", {
                  width: 133.5,
                  height: 58.5,
                  x: 21.3,
                  y: 14.8,
                  fill: "#F7F5F3",
                  stroke: "#111B21",
                  strokeWidth: 1.5,
                  rx: 15.3,
                  className: s(i == null ? void 0 : i.rectContainer),
                }),
                c.jsx("path", {
                  fill: "#FFB938",
                  stroke: "#111B21",
                  strokeMiterlimit: 10,
                  strokeWidth: 1.5,
                  d: "M150.4 84.9a15 15 0 1 1 0-30 15 15 0 0 1 0 30Z",
                }),
                c.jsx("path", {
                  fill: "#fff",
                  d: "M150 60.4h.9c1.2 0 2.1 1 2.1 2.2v6.6c0 1.2-1 2.1-2.2 2.1h-.9c-1.2 0-2.1-1-2.1-2.1v-6.6c0-1.2 1-2.2 2.1-2.2ZM150 74.6h.9c1.2 0 2.1 1 2.1 2.2v.4c0 1.2-1 2.2-2.2 2.2h-.9c-1.2 0-2.1-1-2.1-2.2v-.4c0-1.2 1-2.2 2.1-2.2Z",
                }),
                c.jsx("path", {
                  stroke: "#111B21",
                  strokeLinejoin: "round",
                  strokeMiterlimit: 10,
                  strokeWidth: 1.5,
                  d: "M150 60.4h.9c1.2 0 2.1 1 2.1 2.2v6.6c0 1.2-1 2.1-2.2 2.1h-.9c-1.2 0-2.1-1-2.1-2.1v-6.6c0-1.2 1-2.2 2.1-2.2ZM150 74.6h.9c1.2 0 2.1 1 2.1 2.2v.4c0 1.2-1 2.2-2.2 2.2h-.9c-1.2 0-2.1-1-2.1-2.2v-.4c0-1.2 1-2.2 2.1-2.2Z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WdsPictoTimerFeedbackWarningIcon = m));
  },
  98,
);
