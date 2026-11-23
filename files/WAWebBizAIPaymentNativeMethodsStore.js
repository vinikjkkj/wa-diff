__d(
  "WAWebBizAIPaymentNativeMethodsStore",
  [
    "WAWebBizAIPaymentNativeMethodsAdapter",
    "WAWebCustomPaymentMethods",
    "WAWebUIListener",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o(
          "WAWebBizAIPaymentNativeMethodsAdapter",
        ).readNativeMethodsSnapshot(),
        t = new Set(),
        n = function () {
          ((e = o(
            "WAWebBizAIPaymentNativeMethodsAdapter",
          ).readNativeMethodsSnapshot()),
            t.forEach(function (e) {
              return e();
            }));
        },
        r = null;
      return {
        getSnapshot: function () {
          return e;
        },
        refresh: n,
        subscribe: function (a) {
          var e = t.size === 0;
          return (
            t.add(a),
            e &&
              ((r = new (o("WAWebUIListener").Listener)(
                o("WAWebCustomPaymentMethods").CustomPaymentMethods,
                o("WAWebCustomPaymentMethods")
                  .CUSTOM_PAYMENT_METHODS_CHANGE_EVENT,
                n,
              )),
              r.engage(),
              n()),
            function () {
              if ((t.delete(a), t.size === 0)) {
                var e;
                ((e = r) == null || e.disengage(), (r = null));
              }
            }
          );
        },
      };
    }
    l.createNativeMethodsStore = e;
  },
  98,
);
