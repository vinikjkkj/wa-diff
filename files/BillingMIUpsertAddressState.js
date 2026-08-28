__d(
  "BillingMIUpsertAddressState",
  ["BillingMIUpsertAddressScreen.react", "BillingWizardDisplayState", "react"],
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
            (t.name = "mi_upsert_address_state_display"),
            (t.mapPropsToQuery = function (e) {
              var t = e.addressType,
                n = e.miInfo,
                r = e.paymentAccountID,
                o = e.paymentMethodID;
              return {
                addressType: t,
                aoabOrgID:
                  t !== "LIABLE_TO" &&
                  n.billingOrgChangeReason === "CREATE_AOAB_AD_ACCOUNT"
                    ? n == null
                      ? void 0
                      : n.billToOrgID
                    : null,
                paymentAccountID: r,
                paymentMethodID: o,
              };
            }),
            (t.query = o("BillingMIUpsertAddressScreen.react").query),
            (t.fetchPolicy = "network-only"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.onDisplay = function (t, n) {
            var e = function (t, r, o, a) {
                var e = a;
                return (
                  t === "BILL_TO"
                    ? (e.billToAddress = { id: r, singleLineAddress: o })
                    : t === "LIABLE_TO"
                      ? (e.liableAddress = { id: r, singleLineAddress: o })
                      : t === "SOLD_TO" &&
                        (e.soldToAddress = { id: r, singleLineAddress: o }),
                  n("onNext", { miInfo: e })
                );
              },
              r = function (t, r, o) {
                return n("onValidate", {
                  addressType: t,
                  country: r,
                  registrationNumber: o,
                });
              };
            return s.jsx(
              o("BillingMIUpsertAddressScreen.react")
                .BillingMIUpsertAddressScreen,
              babelHelpers.extends({}, t, { onNext: e, onValidate: r }),
            );
          }),
          t
        );
      })(o("BillingWizardDisplayState").DisplayState);
    l.default = u;
  },
  98,
);
