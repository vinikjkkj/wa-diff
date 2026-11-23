__d(
  "AdsPEFilterZeroResultRecoveryLevel",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e === "campaign" || e === "ad_set" || e === "ad";
    }
    function l(e, t) {
      return e === "campaign"
        ? t.campaignGroupTotalCount
        : e === "ad_set"
          ? t.campaignTotalCount
          : e === "ad"
            ? t.adgroupTotalCount
            : null;
    }
    function s(e) {
      var t, n, r;
      return JSON.stringify([
        [
          "campaignGroup",
          Array.from((t = e.get("campaignGroup")) != null ? t : []).sort(),
        ],
        [
          "campaign",
          Array.from((n = e.get("campaign")) != null ? n : []).sort(),
        ],
        ["adgroup", Array.from((r = e.get("adgroup")) != null ? r : []).sort()],
      ]);
    }
    ((i.getIsAdsPEFilterZeroResultRecoveryLevelSupported = e),
      (i.getAdsPEFilterZeroResultRecoveryActiveTotal = l),
      (i.getAdsPEFilterZeroResultRecoveryAncestorKey = s));
  },
  66,
);
