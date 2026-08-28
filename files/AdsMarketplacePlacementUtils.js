__d(
  "AdsMarketplacePlacementUtils",
  ["AdsAPIObjectives"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Set([
        (e = r("AdsAPIObjectives")).MESSAGES,
        e.LINK_CLICKS,
        e.CONVERSIONS,
        e.VIDEO_VIEWS,
        e.REACH,
        e.BRAND_AWARENESS,
        e.LEAD_GENERATION,
      ]);
    function u(e) {
      return s.has(e.objective);
    }
    l.isEligibleForMessengerDestination = u;
  },
  98,
);
