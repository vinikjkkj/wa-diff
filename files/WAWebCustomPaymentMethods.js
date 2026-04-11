__d(
  "WAWebCustomPaymentMethods",
  [
    "WAWebEventEmitter",
    "WAWebQuickReplySmartDefaults",
    "WAWebUserPrefsCustomPaymentMethods",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "custom_payment_methods_change",
      s = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.setCustomPaymentMethods = function (n) {
            (o("WAWebUserPrefsCustomPaymentMethods").setCustomPaymentMethods(n),
              o("WAWebQuickReplySmartDefaults").getOrUpdatePixKeySmartDefault(),
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
