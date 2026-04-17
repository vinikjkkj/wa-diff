__d(
  "WAWebSignupFlowLoggerLazy",
  [
    "JSResourceForInteraction",
    "WAWebABProps",
    "WAWebNoop",
    "WAWebWamEnumSignupUserJourneyOperation",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      o("WAWebABProps").getABPropConfigValue(
        "inapp_signup_m1_logging_enabled",
      ) &&
        r("JSResourceForInteraction")("WAWebSignupFlowLogger")
          .__setRef("WAWebSignupFlowLoggerLazy")
          .load()
          .then(function (t) {
            var n = t.logSignupFlowOp;
            n(e);
          })
          .catch(r("WAWebNoop"));
    }
    ((l.SIGNUP_USER_JOURNEY_OPERATION = o(
      "WAWebWamEnumSignupUserJourneyOperation",
    ).SIGNUP_USER_JOURNEY_OPERATION),
      (l.logSignupOp = e));
  },
  98,
);
