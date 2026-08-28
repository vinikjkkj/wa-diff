__d(
  "BillingSelfServeToMIConfirmPayNowState",
  [
    "BillingError",
    "BillingSelfServeToMIConfirmPayNowScreen.react",
    "BillingWizardDisplayState",
    "Promise",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.name = "self_serve_to_mi_confirm_pay_now_state_display"),
            (e.mapPropsToQuery = function (e) {
              var t = e.paymentAccountID;
              return { paymentAccountID: t };
            }),
            (e.query = o(
              "BillingSelfServeToMIConfirmPayNowScreen.react",
            ).query),
            (e.fetchPolicy = "network-only"),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.onDisplay = function (t, n) {
            if (t.paymentAmount == null || t.invoiceIDs == null)
              throw new (r("BillingError"))(
                "BillingSelfServeToMIConfirmPayNowState:onDisplay paymentAmount or invoice ids undef",
                "required parameter is missing or invalid",
                {
                  event_action: "enter",
                  event_result: "failure",
                  event_side: "client_side",
                },
                { action: "load" },
                "critical_error",
              );
            if (
              t.paymentMethodID == null ||
              t.paymentMethodType !== "EXTENDED_CREDIT"
            )
              throw new (r("BillingError"))(
                "BillingSelfServeToMIConfirmPayNowState:onDisplay missing credit line ID / type",
                "required parameter is missing or invalid",
                {
                  event_action: "enter",
                  event_result: "failure",
                  event_side: "client_side",
                },
                { action: "load" },
                "critical_error",
              );
            var e = function (r, o, a, i, l, s) {
              return n("onConfirm", {
                accountBalance: i,
                entryPoint: "SS_TO_MI_SWITCH",
                invoiceIDs: t.invoiceIDs,
                miID: t.paymentMethodID,
                paymentIntent: l,
                paymentMethodID: r,
                paymentMethodType: o,
              });
            };
            return u.jsx(
              o("BillingSelfServeToMIConfirmPayNowScreen.react")
                .BillingSelfServeToMIConfirmPayNowScreen,
              babelHelpers.extends({}, t, { onConfirm: e }),
            );
          }),
          (i.onExit = function (r, o) {
            return (e || (e = n("Promise"))).resolve({ event: r, newProps: o });
          }),
          a
        );
      })(o("BillingWizardDisplayState").DisplayState);
    l.default = c;
  },
  98,
);
