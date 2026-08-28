__d(
  "logTrafficLpvEligibilityOutcome",
  ["AdsInterfacesLogger", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      r("gkx")("3260") &&
        r("AdsInterfacesLogger").logOnce({
          eventName: "marketing_message_traffic_lpv_eligibility_outcome",
          data:
            ((t = {}),
            (t.subsequent_data = JSON.stringify({
              campaign_id: e.campaignID,
              gk_enabled: !0,
              optimization_goal: e.optimizationGoal,
              outcome: e.isEligible ? "eligible" : "ineligible",
              reason_code: e.reasonCode,
            })),
            t),
        });
    }
    l.logTrafficLpvEligibilityOutcome = e;
  },
  98,
);
