__d(
  "WAWebPaymentVisaLogoIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "payment-visa-logo";
    function m(t) {
      var n = o("react-compiler-runtime").c(27),
        a,
        i,
        l,
        u,
        m,
        p;
      n[0] !== t
        ? ((a = t.height),
          (l = t.iconXstyle),
          (i = t.name),
          (m = t.viewBox),
          (p = t.width),
          (u = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = u),
          (n[5] = m),
          (n[6] = p))
        : ((a = n[1]),
          (i = n[2]),
          (l = n[3]),
          (u = n[4]),
          (m = n[5]),
          (p = n[6]));
      var _;
      if (m) {
        var f = m,
          g = f.height,
          h = f.width,
          y = f.x,
          C = f.y,
          b = g === void 0 ? 0 : g,
          v = h === void 0 ? 0 : h,
          S = y === void 0 ? 0 : y,
          R = C === void 0 ? 0 : C,
          L;
        (n[7] !== b || n[8] !== v || n[9] !== S || n[10] !== R
          ? ((L = [S, R, v, b]),
            (n[7] = b),
            (n[8] = v),
            (n[9] = S),
            (n[10] = R),
            (n[11] = L))
          : (L = n[11]),
          (_ = L.join(" ")));
      }
      var E = 24,
        k = 24;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 24 24",
        D = E,
        x = k,
        $;
      n[12] !== l
        ? (($ = (s || (s = r("stylex")))(l)), (n[12] = l), (n[13] = $))
        : ($ = n[13]);
      var P = i != null ? i : d,
        N;
      n[14] !== P
        ? ((N = c.jsx("title", { children: P })), (n[14] = P), (n[15] = N))
        : (N = n[15]);
      var M;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = c.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "m17.006 8.969-.241 1.385-.16-.073a3.3 3.3 0 0 0-1.33-.245c-.695 0-1.017.284-1.017.55-.004.299.376.496.997.792 1.025.457 1.499 1.01 1.492 1.738-.014 1.327-1.226 2.184-3.094 2.184-.797-.008-1.564-.163-1.98-.341l.25-1.431.23.101c.583.239.96.336 1.672.336.51 0 1.058-.196 1.063-.625.003-.28-.23-.48-.921-.793-.674-.306-1.567-.818-1.557-1.737.01-1.243 1.247-2.11 3.003-2.11.689 0 1.24.139 1.593.269m-12.977 1.4C3.272 9.683 2.255 9.147 1 8.849l.023-.133h2.865c.386.014.698.135.805.54l.597 2.814q.045.11.08.22l.185.886 1.74-4.36h1.882l-2.798 6.382-1.88.002-1.59-5.592a5 5 0 0 1 1.12.76M23 15.207l-1.438-6.39h-1.373c-.425 0-.744.114-.93.53l-2.64 5.86h1.866q.306-.787.375-.96h1.025l1.25.002a85 85 0 0 1 .216.958zM9.896 8.811h1.777l-1.112 6.394H8.785zm10.95 4.127H19.37q.147-.367.708-1.787c-.005.008.028-.076.073-.191.05-.128.115-.294.162-.42l.12.552z",
            fill: "#1434CB",
          })),
          (n[16] = M))
        : (M = n[16]);
      var w;
      n[17] !== E || n[18] !== k || n[19] !== T || n[20] !== $ || n[21] !== N
        ? ((w = c.jsxs("svg", {
            viewBox: T,
            height: D,
            width: x,
            preserveAspectRatio: "xMidYMid meet",
            className: $,
            fill: "none",
            children: [N, M],
          })),
          (n[17] = E),
          (n[18] = k),
          (n[19] = T),
          (n[20] = $),
          (n[21] = N),
          (n[22] = w))
        : (w = n[22]);
      var A;
      return (
        n[23] !== u || n[24] !== I || n[25] !== w
          ? ((A = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: I }, u, { children: w }),
            )),
            (n[23] = u),
            (n[24] = I),
            (n[25] = w),
            (n[26] = A))
          : (A = n[26]),
        A
      );
    }
    l.PaymentVisaLogoIcon = m;
  },
  98,
);
