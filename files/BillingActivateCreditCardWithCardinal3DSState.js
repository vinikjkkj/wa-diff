__d(
  "BillingActivateCreditCardWithCardinal3DSState",
  ["BillingCardinal3DSConnector.react", "BillingWizardDisplayState", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.name = "activate_credit_card_with_cardinal_3ds_display"),
            n
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.onDisplay = function (t, n) {
            var e = function () {
                n("onFailure");
              },
              o = function () {
                n("onNext");
              };
            return s.jsx(r("BillingCardinal3DSConnector.react"), {
              chargeAmount: t.chargeAmount,
              credentialAuthenticationId: t.credentialAuthenticationId,
              onFailure: e,
              onSuccess: o,
              paymentAccountID: t.paymentAccountID,
              wrapperProps: t.wrapperProps,
            });
          }),
          t
        );
      })(o("BillingWizardDisplayState").DisplayState);
    l.default = u;
  },
  98,
);
