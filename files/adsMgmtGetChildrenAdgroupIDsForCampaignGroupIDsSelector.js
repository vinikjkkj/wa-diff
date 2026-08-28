__d(
  "adsMgmtGetChildrenAdgroupIDsForCampaignGroupIDsSelector",
  [
    "AdsAccountStore",
    "AdsAdgroupCombinedListStore",
    "AdsLoadState_LEGACY",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [],
      s = r("adsCreateSelector")(
        [
          o("AdsAdgroupCombinedListStore").AdsAdgroupCombinedListStore
            .getForCampaignGroupsSelector,
          r("AdsAccountStore").getSelectedAccountID,
        ],
        function (n, o) {
          return function (t) {
            if (o == null) return e;
            var a = [],
              i = t.filter(Boolean);
            if (i != null && i.length) {
              var l = n(o, i),
                s = !1;
              if (
                (l.forEach(function (e) {
                  (e == null ? void 0 : e.loadState) ===
                    r("AdsLoadState_LEGACY").LOADING && (s = !0);
                }),
                s)
              )
                return e;
              l.forEach(function (e) {
                e.list && e.list.length && (a = a.concat(e.list));
              });
            }
            return a.filter(Boolean);
          };
        },
        {
          name:
            i.id + ".adsMgmtGetChildrenAdgroupIDsForCampaignGroupIDsSelector",
        },
      ),
      u = s;
    l.default = u;
  },
  98,
);
