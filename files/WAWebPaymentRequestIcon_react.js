__d(
  "WAWebPaymentRequestIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "payment-request";
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
        R = 24;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 24 22",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              version: "1.1",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M1.42371587,3.0063004 L17.8212007,3.0063004 C20.1258609,3.0063004 21.9941571,4.87459661 21.9941571,7.17925674 L21.9941571,14.8251014 C21.9941571,17.1297615 20.1258609,18.9980577 17.8212007,18.9980577 L7.05250228,18.9980577 C4.74784211,18.9980577 2.8795459,17.1297615 2.8795459,14.8251014 L2.8795459,7.67246944 L0.72764689,4.27016141 C0.48450288,3.88573312 0.5990364,3.37698525 0.98346469,3.13384125 C1.11519074,3.05052686 1.26785363,3.0063004 1.42371587,3.0063004 Z",
                  fill: "currentColor",
                  fillRule: "nonzero",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.PaymentRequestIcon = m));
  },
  98,
);
