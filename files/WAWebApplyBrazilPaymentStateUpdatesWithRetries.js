__d(
  "WAWebApplyBrazilPaymentStateUpdatesWithRetries",
  [
    "WALogger",
    "WAWebApplyBrazilPaymentStateUpdatesLazily",
    "WAWebBrazilPaymentStatePendingUpdates",
    "WAWebRemoveReplacedBrazilPaymentStateRows",
    "getErrorSafe",
    "uniqueBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = [5e3, 3e4, 12e4],
      _ = !1;
    function f(e) {
      return C(
        [e],
        function () {
          return o(
            "WAWebRemoveReplacedBrazilPaymentStateRows",
          ).removeReplacedBrazilPaymentStateRows([e]);
        },
        0,
      );
    }
    async function g(e, t) {
      var n = new Set(
        t.map(function (e) {
          return e.id.toString();
        }),
      );
      await r("uniqueBy")(e, function (e) {
        return e.id.toString();
      }).reduce(function (e, t) {
        return e.then(function () {
          return C(
            [t],
            function () {
              return n.has(t.id.toString())
                ? o(
                    "WAWebRemoveReplacedBrazilPaymentStateRows",
                  ).removeReplacedBrazilPaymentStateRows([t])
                : Promise.resolve();
            },
            0,
          );
        });
      }, Promise.resolve());
    }
    async function h(t) {
      try {
        await o(
          "WAWebBrazilPaymentStatePendingUpdates",
        ).savePendingBrazilPaymentStateUpdates(t);
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[br-payment-state] could not keep the updates until they apply",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("br-payment-state-pending-save-failed");
      }
    }
    async function y(e) {
      var t = !_,
        n = t
          ? void 0
          : new Set(
              e.map(function (e) {
                return e.id.id;
              }),
            );
      try {
        var a = await o(
          "WAWebBrazilPaymentStatePendingUpdates",
        ).getPendingBrazilPaymentStateUpdateMsgs(n);
        (t && (_ = !0),
          a.forEach(function (e) {
            f(e);
          }));
      } catch (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[br-payment-state] could not replay the pending updates",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("br-payment-state-pending-replay-failed");
      }
    }
    async function C(e, t, n) {
      if (
        await o(
          "WAWebApplyBrazilPaymentStateUpdatesLazily",
        ).applyBrazilPaymentStateUpdatesLazily(e)
      ) {
        (await v(t)) && (await b(e));
        return;
      }
      var a = p[n];
      if (a == null) {
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[br-payment-state] giving up on updates after their retries",
              ])),
          )
          .sendLogs("br-payment-state-apply-gave-up");
        return;
      }
      self.setTimeout(function () {
        C(e, t, n + 1).catch(function (e) {
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-state] a retried update could not be finished",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("br-payment-state-retry-failed");
        });
      }, a);
    }
    async function b(e) {
      try {
        await o(
          "WAWebBrazilPaymentStatePendingUpdates",
        ).removePendingBrazilPaymentStateUpdates(e);
      } catch (e) {
        o("WALogger")
          .WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[br-payment-state] could not forget the applied updates",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("br-payment-state-pending-remove-failed");
      }
    }
    async function v(e) {
      try {
        return (await e(), !0);
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-state] could not remove the rows an update resolved",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("br-payment-state-row-removal-failed"),
          !1
        );
      }
    }
    ((l.applyThenRemoveStoredBrazilPaymentStateRow = f),
      (l.applyThenRemoveReplacedBrazilPaymentStateRows = g),
      (l.keepBrazilPaymentStateUpdatesUntilApplied = h),
      (l.replayPendingBrazilPaymentStateUpdates = y));
  },
  98,
);
