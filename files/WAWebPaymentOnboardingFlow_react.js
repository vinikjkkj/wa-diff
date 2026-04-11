__d(
  "WAWebPaymentOnboardingFlow.react",
  [
    "$InternalEnum",
    "WAWebBizPaymentsBrazilAddPixModalRefreshed.react",
    "WAWebUserPrefsCustomPaymentMethods",
    "react",
    "react-compiler-runtime",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = n("$InternalEnum").Mirrored(["AddEditCredential"]);
    function c(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.previousScreen,
        a = e.referral,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = o("WAWebUserPrefsCustomPaymentMethods").getPIX()), (t[0] = i))
        : (i = t[0]);
      var l = i,
        c = o("useWAWebFlow").useFlow(u.AddEditCredential),
        d = c[0],
        m = c[1];
      if (m.step == null) return null;
      var p;
      switch (m.step) {
        case u.AddEditCredential: {
          var _;
          t[1] !== m
            ? ((_ = function () {
                m.end();
              }),
              (t[1] = m),
              (t[2] = _))
            : (_ = t[2]);
          var f;
          t[3] !== m
            ? ((f = function () {
                return m.end();
              }),
              (t[3] = m),
              (t[4] = f))
            : (f = t[4]);
          var g;
          (t[5] !== n || t[6] !== a || t[7] !== _ || t[8] !== f
            ? ((g = s.jsx(
                r("WAWebBizPaymentsBrazilAddPixModalRefreshed.react"),
                {
                  onClose: _,
                  pixData: l,
                  previousScreen: n,
                  referral: a,
                  onSuccess: f,
                },
              )),
              (t[5] = n),
              (t[6] = a),
              (t[7] = _),
              (t[8] = f),
              (t[9] = g))
            : (g = t[9]),
            (p = g));
        }
      }
      var h;
      return (
        t[10] !== d || t[11] !== p || t[12] !== m
          ? ((h = s.jsx(d, { flow: m, children: p })),
            (t[10] = d),
            (t[11] = p),
            (t[12] = m),
            (t[13] = h))
          : (h = t[13]),
        h
      );
    }
    l.default = c;
  },
  98,
);
