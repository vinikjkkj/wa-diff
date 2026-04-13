__d(
  "WAWebBizPaymentsHomeBanner.react",
  [
    "WAWebBizAddPixKeyPromo.react",
    "WAWebBizPixKeyPromo.react",
    "WAWebCustomPaymentMethods",
    "WAWebPaymentsPixBannerUtils",
    "WAWebUserPrefsCustomPaymentMethods",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useState;
    function m(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.onTryIt,
        a = d(!1),
        i = a[1],
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = function () {
            i(p);
          }),
          (t[0] = l))
        : (l = t[0]);
      var u = l;
      if (
        (o("useWAWebListener").useListener(
          o("WAWebCustomPaymentMethods").CustomPaymentMethods,
          o("WAWebCustomPaymentMethods").CUSTOM_PAYMENT_METHODS_CHANGE_EVENT,
          u,
        ),
        !o("WAWebUserPrefsCustomPaymentMethods").isPIXValid())
      ) {
        var c;
        return (
          t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = s.jsx(r("WAWebBizAddPixKeyPromo.react"), {})), (t[1] = c))
            : (c = t[1]),
          c
        );
      }
      if (o("WAWebPaymentsPixBannerUtils").shouldShowTryItPixKeyPromo()) {
        var m;
        return (
          t[2] !== n
            ? ((m = s.jsx(r("WAWebBizPixKeyPromo.react"), { onTryIt: n })),
              (t[2] = n),
              (t[3] = m))
            : (m = t[3]),
          m
        );
      }
      return null;
    }
    function p(e) {
      return !e;
    }
    l.default = m;
  },
  98,
);
