__d(
  "BillingAddFundsCheckRiskVerificationState",
  ["BillingWizardDecisionState", "BillingWizardRootUPLogger", "Promise"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function o() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.name = "add_funds_check_risk_verification_state_decision"),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(o, t);
        var a = o.prototype;
        return (
          (a.evaluateRiskVerification = function (t) {
            var e,
              n = t.riskInfo,
              r =
                n == null || (e = n.verification_info) == null
                  ? void 0
                  : e.resolvable_type,
              o;
            r === "SOFT_DESCRIPTOR"
              ? (o = "isSDCRestricted")
              : r === "THREE_D_SECURE"
                ? (o = "isSDCRestricted3DS")
                : (o = "notRestricted");
            var a = babelHelpers.extends({}, t, {
              isSinglePMFlow: !0,
              riskInfo:
                n != null
                  ? babelHelpers.extends({}, n, { useForVerification: !0 })
                  : n,
            });
            return { event: o, newProps: a };
          }),
          (a.onDecide = function (o) {
            var t,
              a,
              i,
              l = this.evaluateRiskVerification(o);
            return (
              r("BillingWizardRootUPLogger").logEvent({
                event_action: "assess",
                event_result: "completed",
                event_side: "client",
                extra_data: {
                  assessment: "add_funds_risk_verification",
                  credential_id: (t = o.paymentMethodID) != null ? t : "",
                  resolvable_type:
                    (a =
                      (i = o.riskInfo) == null ||
                      (i = i.verification_info) == null
                        ? void 0
                        : i.resolvable_type) != null
                      ? a
                      : "",
                  restriction: l.event,
                },
                target_name: "BillingAddFundsCheckRiskVerificationState",
              }),
              (e || (e = n("Promise"))).resolve(l)
            );
          }),
          o
        );
      })(o("BillingWizardDecisionState").DecisionState);
    l.default = s;
  },
  98,
);
