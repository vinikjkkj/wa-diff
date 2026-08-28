__d(
  "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
  [
    "AdsPlacementDependentPlatformGatingUtils",
    "AdsPlacementPositionPlugins",
    "AdsPlacementSOOBundleGatingUtils",
    "adsPlacementAPISpecReaderIsActivePosition",
    "convertSoftOptOutPlacementsToPositionKeys",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e == null) return !1;
      var t = r("convertSoftOptOutPlacementsToPositionKeys")(e);
      return t.size > 0;
    }
    function s(e, t) {
      var n;
      if (t == null || t.spec == null) return !1;
      var a =
        e == null || (n = e.parentPlacements) == null ? void 0 : n.first();
      if (
        a == null ||
        o(
          "AdsPlacementDependentPlatformGatingUtils",
        ).shouldSkipPlacementParentDependency(e.key, a, t.capabilities)
      )
        return !0;
      var i = t.softOptOutSpec,
        l = r("AdsPlacementPositionPlugins").get(a);
      if (l == null) return !1;
      var s = r("adsPlacementAPISpecReaderIsActivePosition")(
        t.spec,
        l.platformKey,
        l.apiPosition,
      );
      if (i == null) return s;
      var u = r("convertSoftOptOutPlacementsToPositionKeys")(i),
        c = u.has(a);
      return s || c;
    }
    function u(t, n) {
      var a,
        i = o(
          "AdsPlacementSOOBundleGatingUtils",
        ).isAccountEligibleForSOOExpansionBundle(n.objective),
        l = e(n.spec);
      if (!i || !l) return null;
      var u = s(t, n),
        c = t == null || (a = t.parentPlacements) == null ? void 0 : a.first();
      return t.key === "threads/stream" && r("gkx")("5514")
        ? null
        : !u && c != null
          ? {
              type: "PARENT_NOT_IN_TARGET_SPEC_OR_SOFT_OPT_OUT_SPEC",
              parentPositionPluginKey: c,
            }
          : null;
    }
    function c(e, t) {
      return o(
        "AdsPlacementSOOBundleGatingUtils",
      ).isAccountEligibleForSOOExpansionBundle(t.objective)
        ? e.filter(function (e) {
            return (e.key === "threads/stream" && r("gkx")("5514")) || s(e, t);
          })
        : e;
    }
    ((l.isSpecInitializedWithPositions = e),
      (l.getIsPositionParentInTargetSpecOrSOO = s),
      (l.getSOOBundleParentIneligibilityReason = u),
      (l.getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut =
        c));
  },
  98,
);
