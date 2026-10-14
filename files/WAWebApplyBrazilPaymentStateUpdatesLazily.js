__d(
  "WAWebApplyBrazilPaymentStateUpdatesLazily",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebLazyLoadedRetriable",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "uniqueBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebApplyBrazilPaymentStateUpdates",
        )
          .__setRef("WAWebApplyBrazilPaymentStateUpdatesLazily")
          .load();
      }, "WAWebApplyBrazilPaymentStateUpdates");
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t.length === 0) return !0;
          try {
            var n = yield s(),
              a = n.applyBrazilPaymentStateUpdates;
            return yield a(
              r("uniqueBy")(t, function (e) {
                return e.id.toString();
              }),
            );
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[br-payment-state] could not apply the updates",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("br-payment-state-handler-load-failed"),
              !1
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.applyBrazilPaymentStateUpdatesLazily = u;
  },
  98,
);
