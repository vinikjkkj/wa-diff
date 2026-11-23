__d(
  "WAWebKeepAndApplyBrazilPaymentStateUpdates",
  [
    "WALogger",
    "WAWebApplyBrazilPaymentStateUpdatesWithRetries",
    "WAWebBrazilPaymentStateUpdatePayload",
    "WAWebPaymentsGatingUtils",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return (
        o("WAWebBrazilPaymentStateUpdatePayload").isBrazilPaymentStateUpdateMsg(
          e,
        ) && p()
      );
    }
    function c(e) {
      return e.filter(function (e) {
        return !u(e);
      });
    }
    async function d(t, n) {
      (n ||
        (await o(
          "WAWebApplyBrazilPaymentStateUpdatesWithRetries",
        ).keepBrazilPaymentStateUpdatesUntilApplied([t])),
        o("WAWebApplyBrazilPaymentStateUpdatesWithRetries")
          .applyThenRemoveStoredBrazilPaymentStateRow(t)
          .catch(function (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[br-payment-state] could not apply the update",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("br-payment-state-apply-failed");
          }));
    }
    async function m(e) {
      var t = e.filter(u);
      (o("WAWebPaymentsGatingUtils").isBrazilPaymentStateUpdateSupported() &&
        (await o(
          "WAWebApplyBrazilPaymentStateUpdatesWithRetries",
        ).replayPendingBrazilPaymentStateUpdates(e)),
        t.length !== 0 &&
          (await o(
            "WAWebApplyBrazilPaymentStateUpdatesWithRetries",
          ).keepBrazilPaymentStateUpdatesUntilApplied(t),
          o("WAWebApplyBrazilPaymentStateUpdatesWithRetries")
            .applyThenRemoveReplacedBrazilPaymentStateRows(t, t)
            .catch(function (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[br-payment-state] could not apply the batch updates",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("br-payment-state-batch-apply-failed");
            })));
    }
    function p() {
      return r("justknobx")._("6445");
    }
    ((l.isRoutedBrazilPaymentStateUpdateMsg = u),
      (l.withoutRoutedBrazilPaymentStateUpdates = c),
      (l.keepAndApplyBrazilPaymentStateUpdate = d),
      (l.keepAndApplyBrazilPaymentStateUpdatesInBatch = m));
  },
  98,
);
