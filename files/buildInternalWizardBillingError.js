__d(
  "buildInternalWizardBillingError",
  ["BillingError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return new (r("BillingError"))(
        e,
        t,
        {
          event_action: "parse",
          event_result: "failure",
          event_side: "client_side",
        },
        { action: "verify", document_name: "wizard_transition" },
        "critical_error",
        { errorCode: n },
      );
    }
    l.default = e;
  },
  98,
);
