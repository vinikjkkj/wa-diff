__d(
  "BillingRestoreMIPaymentMethodPropsState",
  ["BillingError", "BillingWizardDecisionState", "Promise"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function o() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.name = "restore_mi_payment_method_props_state_decision"),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(o, t);
        var a = o.prototype;
        return (
          (a.onDecide = function (o) {
            var t = o.miID;
            if (t == null)
              throw new (r("BillingError"))(
                "BillingRestoreMIPaymentMethodPropsState:onDecide missing credit line ID",
                "required parameter is missing or invalid",
                {
                  event_action: "enter",
                  event_result: "failure",
                  event_side: "client_side",
                },
                { action: "load" },
                "critical_error",
              );
            return (e || (e = n("Promise"))).resolve({
              event: "onNext",
              newProps: babelHelpers.extends({}, o, {
                paymentMethodID: t,
                paymentMethodType: "EXTENDED_CREDIT",
              }),
            });
          }),
          o
        );
      })(o("BillingWizardDecisionState").DecisionState);
    l.default = s;
  },
  98,
);
