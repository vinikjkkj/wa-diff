__d(
  "WAWebAECompanionEligibility",
  ["WAWebCoexCanonicalMembership"],
  function (t, n, r, o, a, i, l) {
    var e = {
      bspOrInbox: 0,
      ai: 2,
      automation: null,
      authorizedAgent: null,
      bbPro: null,
    };
    function s(e) {
      if (!e.isBusinessAccount()) return "not_business_account";
      if (!e.hasCtwaContext()) return "missing_ctwa_context";
      var t = e.getCoexSurfaces();
      return t == null || t.length === 0
        ? "coex_state_unavailable"
        : t.includes(o("WAWebCoexCanonicalMembership").AE_SURFACE)
          ? "already_onboarded"
          : d(t, e.getCompatibilityBits())
            ? e.isOnboardingFeatureEnabled()
              ? e.isCompanionGateEnabled()
                ? "presented"
                : "not_primary_device"
              : "feature_disabled"
            : "coex_incompatible";
    }
    function u(e) {
      if (!e.isBusinessAccount()) return !1;
      var t = e.getCoexSurfaces();
      return t == null || !c(t)
        ? !1
        : e.isOnboardingFeatureEnabled() && e.isCompanionGateEnabled();
    }
    function c(e) {
      return (
        e.includes(o("WAWebCoexCanonicalMembership").AE_SURFACE) &&
        e.some(function (e) {
          return e !== o("WAWebCoexCanonicalMembership").AE_SURFACE;
        })
      );
    }
    function d(t, n) {
      return t.every(function (t) {
        var r = e[t];
        return r == null || Math.floor(n / Math.pow(2, r)) % 2 === 1;
      });
    }
    ((l.getAEOnboardingRouteResult = s),
      (l.isAEOffboardingAvailable = u),
      (l.canCompanionOffboardAE = c));
  },
  98,
);
