__d(
  "WAWebPaymentVisaLogoIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "payment-visa-logo";
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
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "m17.006 8.969-.241 1.385-.16-.073a3.3 3.3 0 0 0-1.33-.245c-.695 0-1.017.284-1.017.55-.004.299.376.496.997.792 1.025.457 1.499 1.01 1.492 1.738-.014 1.327-1.226 2.184-3.094 2.184-.797-.008-1.564-.163-1.98-.341l.25-1.431.23.101c.583.239.96.336 1.672.336.51 0 1.058-.196 1.063-.625.003-.28-.23-.48-.921-.793-.674-.306-1.567-.818-1.557-1.737.01-1.243 1.247-2.11 3.003-2.11.689 0 1.24.139 1.593.269m-12.977 1.4C3.272 9.683 2.255 9.147 1 8.849l.023-.133h2.865c.386.014.698.135.805.54l.597 2.814q.045.11.08.22l.185.886 1.74-4.36h1.882l-2.798 6.382-1.88.002-1.59-5.592a5 5 0 0 1 1.12.76M23 15.207l-1.438-6.39h-1.373c-.425 0-.744.114-.93.53l-2.64 5.86h1.866q.306-.787.375-.96h1.025l1.25.002a85 85 0 0 1 .216.958zM9.896 8.811h1.777l-1.112 6.394H8.785zm10.95 4.127H19.37q.147-.367.708-1.787c-.005.008.028-.076.073-.191.05-.128.115-.294.162-.42l.12.552z",
                  fill: "#1434CB",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.PaymentVisaLogoIcon = m));
  },
  98,
);
