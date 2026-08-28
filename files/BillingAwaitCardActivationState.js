__d(
  "BillingAwaitCardActivationState",
  [
    "BillingAwaitCardActivationScreen.react",
    "BillingWizardDisplayState",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "await_card_activation_state_display"),
            (t.mapPropsToQuery = function (e) {
              var t = e.cardStatusEntID,
                n = e.paymentAccountID,
                r = e.paymentMethodID;
              return {
                eventContext: "ACTIVATE_CREDIT_CARD",
                paymentAccountID: n,
                paymentMethodID: r != null ? r : "",
                statusEntID: t != null ? t : "",
              };
            }),
            (t.query = o("BillingAwaitCardActivationScreen.react").query),
            (t.fetchPolicy = "network-only"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.onDisplay = function (t, n) {
            var e = function (t) {
                return n("onNext", {
                  paymentMethodType: "CREDIT_CARD",
                  status: t,
                });
              },
              r = function (t) {
                return n("onFailure", { status: t });
              },
              a = function (t) {
                return n("onTimeout", { status: t });
              };
            return s.jsx(
              o("BillingAwaitCardActivationScreen.react")
                .BillingAwaitCardActivationScreen,
              babelHelpers.extends({}, t, {
                onFailure: r,
                onNext: e,
                onTimeout: a,
              }),
            );
          }),
          t
        );
      })(o("BillingWizardDisplayState").DisplayState);
    l.default = u;
  },
  98,
);
