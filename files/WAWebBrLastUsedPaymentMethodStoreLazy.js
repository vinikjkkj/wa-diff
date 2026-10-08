__d(
  "WAWebBrLastUsedPaymentMethodStoreLazy",
  ["JSResourceForInteraction", "WALogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n) {
      r("JSResourceForInteraction")("WAWebBrLastUsedPaymentMethodStore")
        .__setRef("WAWebBrLastUsedPaymentMethodStoreLazy")
        .load()
        .then(function (e) {
          var r = e.recordLastUsedBrPaymentMethod;
          return r(t, n);
        })
        .catch(function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[BR_LAST_USED_PAYMENT_METHOD] store load failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("br-last-used-payment-method-load-failed");
        });
    }
    l.recordLastUsedBrPaymentMethodLazy = s;
  },
  98,
);
