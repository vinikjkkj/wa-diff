__d(
  "WAWebCustomPaymentMethods",
  [
    "WAWebEventEmitter",
    "WAWebPaymentMethodTypeRegistry",
    "WAWebQuickReplySmartDefaults",
    "WAWebUserPrefsCustomPaymentMethods",
    "WAWebUserPrefsTypes",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "custom_payment_methods_change",
      s = (function (t) {
        function n() {
          var e;
          return (
            (e = t.call(this) || this),
            o(
              "WAWebPaymentMethodTypeRegistry",
            ).registerPaymentMethodSmartDefault(
              o("WAWebUserPrefsTypes").WACustomPaymentMethodType.PIX_KEY,
              o("WAWebQuickReplySmartDefaults").getOrUpdatePixKeySmartDefault,
            ),
            e
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.setCustomPaymentMethods = function (n) {
            (o("WAWebUserPrefsCustomPaymentMethods").setCustomPaymentMethods(n),
              o(
                "WAWebPaymentMethodTypeRegistry",
              ).runAllPaymentMethodSmartDefaults(),
              this.trigger(e));
          }),
          n
        );
      })(r("WAWebEventEmitter")),
      u = new s();
    ((l.CUSTOM_PAYMENT_METHODS_CHANGE_EVENT = e), (l.CustomPaymentMethods = u));
  },
  98,
);
