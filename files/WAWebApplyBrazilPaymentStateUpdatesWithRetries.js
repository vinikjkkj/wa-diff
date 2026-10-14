__d(
  "WAWebApplyBrazilPaymentStateUpdatesWithRetries",
  [
    "Promise",
    "WALogger",
    "WAWebApplyBrazilPaymentStateUpdatesLazily",
    "WAWebBrazilPaymentStatePendingUpdates",
    "WAWebRemoveReplacedBrazilPaymentStateRows",
    "asyncToGeneratorRuntime",
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
      p,
      _ = [5e3, 3e4, 12e4],
      f = !1;
    function g(e) {
      return R(
        [e],
        function () {
          return o(
            "WAWebRemoveReplacedBrazilPaymentStateRows",
          ).removeReplacedBrazilPaymentStateRows([e]);
        },
        0,
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = new Set(
            t.map(function (e) {
              return e.id.toString();
            }),
          );
          yield r("uniqueBy")(e, function (e) {
            return e.id.toString();
          }).reduce(
            function (e, t) {
              return e.then(function () {
                return R(
                  [t],
                  function () {
                    return a.has(t.id.toString())
                      ? o(
                          "WAWebRemoveReplacedBrazilPaymentStateRows",
                        ).removeReplacedBrazilPaymentStateRows([t])
                      : (p || (p = n("Promise"))).resolve();
                  },
                  0,
                );
              });
            },
            (p || (p = n("Promise"))).resolve(),
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            yield o(
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
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = !f,
            n = t
              ? void 0
              : new Set(
                  e.map(function (e) {
                    return e.id.id;
                  }),
                );
          try {
            var a = yield o(
              "WAWebBrazilPaymentStatePendingUpdates",
            ).getPendingBrazilPaymentStateUpdateMsgs(n);
            (t && (f = !0),
              a.forEach(function (e) {
                g(e);
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
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (
            yield o(
              "WAWebApplyBrazilPaymentStateUpdatesLazily",
            ).applyBrazilPaymentStateUpdatesLazily(e)
          ) {
            (yield I(t)) && (yield E(e));
            return;
          }
          var a = _[n];
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
            R(e, t, n + 1).catch(function (e) {
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
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield o(
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
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            return (yield e(), !0);
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
        })),
        T.apply(this, arguments)
      );
    }
    ((l.applyThenRemoveStoredBrazilPaymentStateRow = g),
      (l.applyThenRemoveReplacedBrazilPaymentStateRows = h),
      (l.keepBrazilPaymentStateUpdatesUntilApplied = C),
      (l.replayPendingBrazilPaymentStateUpdates = v));
  },
  98,
);
