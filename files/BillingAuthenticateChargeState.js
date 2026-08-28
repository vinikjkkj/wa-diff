__d(
  "BillingAuthenticateChargeState",
  [
    "fbt",
    "BillingAddFundsUtils",
    "BillingAuthenticateChargeScreen.react",
    "BillingCurrencyAmount",
    "BillingWizardDisplayState",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "authenticate_charge_state_display"),
            (t.mapPropsToQuery = function (e) {
              var t = e.paymentAccountID;
              return { paymentAccountID: t };
            }),
            (t.query = o("BillingAuthenticateChargeScreen.react").query),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var r = t.prototype;
        return (
          (r.onDisplay = function (t, r, a) {
            var e = a.gk,
              i = a.qe,
              l = o("BillingCurrencyAmount").getFromPaymentAmountInput(
                t.paymentAmount,
              ),
              c = function () {
                return r("onFailure", {
                  status: {
                    body: s._(
                      /*BTDS*/ "We weren't able to add funds to your account, please try again.",
                    ),
                    headline: s._(/*BTDS*/ "Couldn't Add Funds"),
                    title: s._(/*BTDS*/ "Couldn't Add Funds"),
                    type: "ERROR",
                  },
                });
              },
              d = o("BillingAddFundsUtils").getShouldUpdateSpanishOrPortuguese(
                e,
                i,
              ),
              m = o(
                "BillingAddFundsUtils",
              ).getShouldUpdateSpanishOrPortuguesePostpayPhaseTwo(e, i),
              p = function (t) {
                var e;
                return {
                  body: d()
                    ? s._(
                        /*BTDS*/ "You will have {total prepay balance available to use} in available funds. It usually takes a few minutes for funds to appear in your account. In a few cases, it may take several days.",
                        [
                          s._param(
                            "total prepay balance available to use",
                            t.toString(),
                          ),
                        ],
                      )
                    : m()
                      ? s._(
                          /*BTDS*/ "You will have {total prepay balance available to use} in available funds. It usually takes a few minutes for funds to appear in your account. In a few cases, it may take several days.",
                          [
                            s._param(
                              "total prepay balance available to use",
                              t.toString(),
                            ),
                          ],
                        )
                      : s._(
                          /*BTDS*/ "You will have {total prepay balance available to use} in available funds. It usually takes a few minutes for funds to appear in your account. In a few cases, it may take several days.",
                          [
                            s._param(
                              "total prepay balance available to use",
                              t.toString(),
                            ),
                          ],
                        ),
                  headline: s._(/*BTDS*/ "{amount user added} will be added", [
                    s._param(
                      "amount user added",
                      (e = l == null ? void 0 : l.toString()) != null ? e : "0",
                    ),
                  ]),
                  type: "SUCCESS",
                };
              },
              _ = (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    return r(
                      t.showAutoReloadOption === !0 &&
                        t.paymentStatusEntID == null
                        ? "onSuccessWithAutoReloadOption"
                        : "onSuccess",
                      {
                        paymentStatusEntID: t.paymentStatusEntID,
                        status: t.paymentStatusEntID == null ? p(e) : void 0,
                      },
                    );
                  },
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })();
            return u.jsx(
              o("BillingAuthenticateChargeScreen.react")
                .BillingAuthenticateChargeScreen,
              babelHelpers.extends({}, t, { onFailure: c, onSuccess: _ }),
            );
          }),
          t
        );
      })(o("BillingWizardDisplayState").DisplayState);
    l.default = c;
  },
  226,
);
