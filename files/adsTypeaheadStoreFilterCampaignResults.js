__d(
  "adsTypeaheadStoreFilterCampaignResults",
  [
    "AdsAccountStore",
    "AdsAdgroupDraftFragmentStore",
    "AdsDataAtom",
    "AdsPEAdgroupSelectors",
    "AdsSelectorUtils",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u() {
      (s || (s = r("AdsDataAtom"))).isDispatching() &&
        (s || (s = r("AdsDataAtom"))).waitFor(
          [].concat(
            (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens([
              o("AdsPEAdgroupSelectors").getAllSelector_LEGACY,
            ]),
            [
              r("AdsAccountStore").getDispatchToken(),
              r("AdsAdgroupDraftFragmentStore").getDispatchToken(),
            ],
          ),
        );
      var t = r("AdsAccountStore").getSelectedAccountIDX(),
        n = r("AdsAdgroupDraftFragmentStore").getNewIDsFor(t),
        a = o("AdsPEAdgroupSelectors").getAllSelector_LEGACY()(n.toArray());
      return a
        .filter(function (e) {
          return e.hasValue();
        })
        .map(function (e) {
          return e.getValueEnforcing().adset_id;
        })
        .toSet();
    }
    function c(e) {
      var t = null;
      return e.filter(function (e) {
        var n = e.asset_feed_id;
        if (!e.is_dynamic_creative_optimization || r("isTruthy")(n)) return !0;
        var o = e.id;
        return (t === null && (t = u()), !t.has(o));
      });
    }
    l.default = c;
  },
  98,
);
