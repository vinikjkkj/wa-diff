__d(
  "WAWebAuthAgentFeatureControlGateKeeper",
  [
    "WAWebBizCoexGatingUtils",
    "WAWebFeatureControlCache",
    "WAWebFeatureControlPolicy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n =
          o("WAWebBizCoexGatingUtils").authAgentFeatureControlEnabled() &&
          o("WAWebFeatureControlCache").getUserIsAA();
      return n
        ? o("WAWebFeatureControlPolicy").featureState(
            (t = o("WAWebFeatureControlCache").getPolicy()) != null
              ? t
              : o("WAWebFeatureControlPolicy").PILOT_DEFAULT,
            e,
          )
        : "ENABLED";
    }
    function s(t) {
      return e(t) === "ENABLED";
    }
    function u(t) {
      return e(t) === "DISABLED";
    }
    function c(t) {
      return e(t) === "LOCKED";
    }
    function d(t) {
      return e(t) !== "ENABLED";
    }
    ((l.getFeatureState = e),
      (l.isFeatureEnabled = s),
      (l.isFeatureDisabled = u),
      (l.isFeatureLocked = c),
      (l.isFeatureNotEnabled = d));
  },
  98,
);
