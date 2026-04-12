__d(
  "WAWebPremiumChannelFilledIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "premium-channel-filled";
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
                  d: "m8.628 10.4 2.082 10.55a2 2 0 0 0 2.58 0l2.082-10.55zm-1.834 0 1.54 7.81-5.655-6.622a3.5 3.5 0 0 1-.667-1.188zM1.913 8.604 2 8.6h4.787L8.557 3H7.4a4 4 0 0 0-3.378 1.857L2.385 7.44a3.5 3.5 0 0 0-.472 1.164M8.674 8.6h6.652l-1.684-5.329A.9.9 0 0 1 13.6 3h-3.2q0 .135-.042.271zm8.539 0L15.443 3H16.6a4 4 0 0 1 3.378 1.857l1.638 2.583c.23.363.387.756.471 1.16zm4.775 1.8c-.14.427-.362.831-.667 1.188l-5.656 6.622 1.541-7.81z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.PremiumChannelFilledIcon = m));
  },
  98,
);
