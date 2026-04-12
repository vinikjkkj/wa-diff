__d(
  "WAWebBizPaymentsHomeBanner.react",
  [
    "WAWebBizAddPixKeyPromo.react",
    "WAWebBizPixKeyPromo.react",
    "WAWebCustomPaymentMethods",
    "WAWebPaymentsPixBannerUtils",
    "WAWebUserPrefsCustomPaymentMethods",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useState;
    function m(e) {
      var t = e.onTryIt,
        n = d(!1),
        a = n[1],
        i = c(function () {
          a(function (e) {
            return !e;
          });
        }, []);
      return (
        o("useWAWebListener").useListener(
          o("WAWebCustomPaymentMethods").CustomPaymentMethods,
          o("WAWebCustomPaymentMethods").CUSTOM_PAYMENT_METHODS_CHANGE_EVENT,
          i,
        ),
        o("WAWebUserPrefsCustomPaymentMethods").isPIXValid()
          ? o("WAWebPaymentsPixBannerUtils").shouldShowTryItPixKeyPromo()
            ? s.jsx(r("WAWebBizPixKeyPromo.react"), { onTryIt: t })
            : null
          : s.jsx(r("WAWebBizAddPixKeyPromo.react"), {})
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
