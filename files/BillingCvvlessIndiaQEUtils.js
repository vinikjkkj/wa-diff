__d(
  "BillingCvvlessIndiaQEUtils",
  ["BillingWizardRootUPLogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
      {
        feature: "CVVLESS_PAYU_INDIA_2026_H2",
        param: "cvv_less_for_payu_india_param",
        universe: "cvv_less_routing_for_payu_india_v1",
        wizardParam: function (t) {
          return t.cvv_less_routing_for_payu_india_v1
            .cvv_less_for_payu_india_param;
        },
      },
      {
        feature: "CVVLESS_RAZORPAY_INDIA_2026_H2",
        param: "cvv_less_for_razorpay_india_param",
        universe: "cvv_less_routing_for_razorpay_india_v1",
        wizardParam: function (t) {
          return t.cvv_less_routing_for_razorpay_india_v1
            .cvv_less_for_razorpay_india_param;
        },
      },
    ];
    function s(t) {
      return e.some(function (e) {
        return (t == null ? void 0 : t.includes(e.feature)) === !0;
      });
    }
    function u(t, n) {
      return e.some(function (e) {
        if ((n == null ? void 0 : n.includes(e.feature)) !== !0) return !1;
        try {
          return e.wizardParam(t).read();
        } catch (t) {
          return (
            r("BillingWizardRootUPLogger").logBillingPayloadError(
              "client side unknown error",
              {
                event: {
                  event_action: "default_fallback",
                  event_side: "client_side",
                },
                exception_message: r("getErrorSafe")(t).message,
              },
              { document_name: e.universe },
            ),
            !1
          );
        }
      });
    }
    function c(e, t) {
      u(e, t);
    }
    ((l.CVVLESS_INDIA_QES = e),
      (l.isCvvlessIndiaMember = s),
      (l.isCvvlessIndiaTreatmentForWizard = u),
      (l.logCvvlessIndiaExposureForWizard = c));
  },
  98,
);
