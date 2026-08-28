__d(
  "BillingMIScheduleUpdateState",
  [
    "BillingMIUpdateBillToPartyScreen.react",
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
            (t.name = "mi_schedule_update_state_display"),
            (t.mapPropsToQuery = function (e) {
              var t = e.miInfo,
                n = e.paymentAccountID,
                r = e.paymentMethodID;
              return {
                organizationID: t == null ? void 0 : t.billToOrgID,
                paymentAccountID: n,
                paymentMethodID: r,
              };
            }),
            (t.query = o("BillingMIUpdateBillToPartyScreen.react").query),
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
              return n("onNext", { shouldExit: !0, status: t });
            };
            return s.jsx(
              o("BillingMIUpdateBillToPartyScreen.react")
                .BillingMIUpdateBillToPartyScreen,
              babelHelpers.extends({}, t, { onNext: e }),
            );
          }),
          t
        );
      })(o("BillingWizardDisplayState").DisplayState);
    l.default = u;
  },
  98,
);
