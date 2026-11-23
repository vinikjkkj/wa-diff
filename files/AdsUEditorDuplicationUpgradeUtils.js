__d(
  "AdsUEditorDuplicationUpgradeUtils",
  ["AdsPlacementValues"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o, a;
      if (e.length !== 1 || t !== r("AdsPlacementValues").AUTOMATIC) return !1;
      var i =
          (o = n.get("advantage_plus_placements_duplication")) == null
            ? void 0
            : o.eligibleAdObjectIDsMap,
        l =
          (a = n.get("automatic_placements")) == null
            ? void 0
            : a.eligibleAdObjectIDsMap;
      return !(
        (i == null || !i.ad_set.has(e[0])) &&
        (l == null || !l.ad_set.has(e[0]))
      );
    }
    function s(e, t) {
      var n;
      if (e.length !== 1) return !1;
      var r =
        (n = t.get("upsell_soft_opt_out_to_non_aplus_p")) == null
          ? void 0
          : n.eligibleAdObjectIDsMap;
      return !(r == null || !r.ad_set.has(e[0]));
    }
    ((l.shouldDisplayDuplicationUpgradeAdvantagePlusPlacementsMessage = e),
      (l.shouldDisplayDuplicationUpgradeUpsellSoftOptOutMessage = s));
  },
  98,
);
