__d(
  "WAWebPaymentLogoPixIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "payment-logo-pix";
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
      var S = 14,
        R = 14;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 14 14",
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
                  d: "M3.518 3.548c.51 0 .99.199 1.35.56l1.958 1.956c.14.141.37.142.512 0l1.95-1.95c.36-.36.84-.559 1.35-.559h.235L8.397 1.078a1.975 1.975 0 0 0-2.793 0l-2.47 2.47zm7.12 6.898c-.51 0-.99-.199-1.35-.56l-1.95-1.95a.37.37 0 0 0-.512 0L4.869 9.895c-.36.36-.84.559-1.35.559h-.385l2.47 2.47a1.975 1.975 0 0 0 2.793 0l2.476-2.477zm.787-6.339 1.497 1.497a1.975 1.975 0 0 1 0 2.793l-1.497 1.497a.3.3 0 0 0-.106-.022h-.68a1.34 1.34 0 0 1-.945-.391l-1.95-1.95a.96.96 0 0 0-1.324 0L4.463 9.488a1.35 1.35 0 0 1-.945.391h-.836a.3.3 0 0 0-.101.02L1.078 8.398a1.975 1.975 0 0 1 0-2.793l1.503-1.503q.048.019.1.02h.837c.352 0 .696.143.945.392L6.42 6.47a.934.934 0 0 0 1.324 0l1.95-1.95c.248-.248.592-.391.944-.391h.68a.3.3 0 0 0 .107-.022",
                  style: { fill: "color(display-p3 .1961 .7373 .6745)" },
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.PaymentLogoPixIcon = m));
  },
  98,
);
