__d(
  "AdsPlacementDependentPlatformGatingUtils",
  ["AudienceNetworkUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      "audience_network/classic",
      "audience_network/instream_video",
      "audience_network/rewarded_video",
    ]);
    function s(t, n, r) {
      return n !== "facebook/feed" || !e.has(t)
        ? !1
        : o("AudienceNetworkUtils").canUseFANExclusively(r);
    }
    function u() {
      return r("gkx")("1944");
    }
    ((l.shouldSkipPlacementParentDependency = s),
      (l.isOrphanedDependentPlatformRemovalEnabled = u));
  },
  98,
);
