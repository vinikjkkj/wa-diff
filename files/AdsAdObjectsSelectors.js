__d(
  "AdsAdObjectsSelectors",
  [
    "invariant",
    "AdsAPIAdgroupRecord",
    "AdsAPICampaignRecord",
    "AdsAdgroupCombinedListStore",
    "AdsCampaignCombinedListStore",
    "AdsCampaignCombinedStore",
    "AdsLoadObjectUtils",
    "AdsLoadStateUtils_LEGACY",
    "AdsPEAdgroupSelectors",
    "LoadObject",
    "VultureJSDeadSelector",
    "adsCreateStoreSelector",
    "distinctArray",
    "flattenArray",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = r("LoadObject").withValue([], { creatorModuleID: i.id });
    function d(e, t, n) {
      if (e.length === 0) return c;
      var a = t(e).toArray();
      return o("AdsLoadObjectUtils")
        .all(a)
        .map(function (e) {
          return (u || (u = r("distinctArray")))(
            e.map(function (e) {
              return n(e);
            }),
          );
        });
    }
    var m = (e = r("adsCreateStoreSelector"))(
        [].concat(
          o("AdsPEAdgroupSelectors").getAllByFieldsSelector.getStores(),
          [r("AdsCampaignCombinedStore")],
        ),
        function (t) {
          var e = t.adgroupIDs,
            n = e === void 0 ? [] : e,
            a = t.campaignIDs,
            l = a === void 0 ? [] : a,
            c = t.adObjectLevel;
          switch (c) {
            case "campaign":
              var m = d(
                  l,
                  function (e) {
                    return r("AdsCampaignCombinedStore").getAllObjects(e);
                  },
                  function (e) {
                    return e.campaign_id;
                  },
                ),
                p = d(
                  n,
                  function (e) {
                    return o("AdsPEAdgroupSelectors").getAllByFieldsSelector()(
                      e,
                      { campaign_id: null },
                      i.id,
                    );
                  },
                  function (e) {
                    return e.campaign_id;
                  },
                );
              return m.mapValue(function (e) {
                return p.mapValue(function (t) {
                  return (u || (u = r("distinctArray")))(e.concat(t));
                });
              });
            case "ad_set":
              return d(
                n,
                function (e) {
                  return o("AdsPEAdgroupSelectors").getAllByFieldsSelector()(
                    e,
                    { adset_id: null },
                    i.id,
                  );
                },
                function (e) {
                  return e.adset_id;
                },
              );
            default:
              s(0, 861, c);
          }
        },
        { name: i.id + ".getParentAdObjectIDsLoadObjectSelector" },
      ),
      p = e(
        [
          r("AdsCampaignCombinedListStore"),
          o("AdsAdgroupCombinedListStore").AdsAdgroupCombinedListStore,
        ],
        function (t) {
          var e = t.accountID,
            n = t.campaignIDs,
            a = n === void 0 ? [] : n,
            l = t.campaignGroupIDs,
            u = l === void 0 ? [] : l,
            c = t.adObjectLevel,
            d = new Map(),
            m = new Map();
          switch (c) {
            case "ad_set":
              m = r("AdsCampaignCombinedListStore").getForCampaignGroups(e, u);
              break;
            case "ad":
              ((m = o(
                "AdsAdgroupCombinedListStore",
              ).AdsAdgroupCombinedListStore.getForCampaignGroups(e, u)),
                (d = o(
                  "AdsAdgroupCombinedListStore",
                ).AdsAdgroupCombinedListStore.getForCampaigns(e, a)));
              break;
            default:
              s(0, 862, c);
          }
          if (!o("AdsLoadStateUtils_LEGACY").allLoaded(m, d))
            return r("LoadObject").loading({ creatorModuleID: i.id });
          var p = Array.from(d.values(), function (e) {
              var t = e.list;
              return t;
            }),
            _ = Array.from(m.values(), function (e) {
              var t = e.list;
              return t;
            }),
            f = new Set(r("flattenArray")(p.concat(_)));
          return r("LoadObject").withValue(Array.from(f.values()), {
            creatorModuleID: i.id,
          });
        },
        { name: i.id + ".getChildAdObjectIDsLoadObjectSelector" },
      ),
      _ = e(
        [r("AdsCampaignCombinedStore")].concat(
          o("AdsPEAdgroupSelectors").getAllSelector_LEGACY.getStores(),
          p.getStores(),
        ),
        function (t) {
          var e = t.accountID,
            n = t.campaignIDs,
            a = n === void 0 ? [] : n,
            l = t.campaignGroupIDs,
            u = l === void 0 ? [] : l,
            c = t.adObjectLevel,
            d = p({
              accountID: e,
              campaignIDs: a,
              campaignGroupIDs: u,
              adObjectLevel: c,
            });
          if (d.isLoading())
            return r("LoadObject").loading({ creatorModuleID: i.id });
          var m = d.getValueEnforcing(),
            _;
          switch (c) {
            case "ad_set":
              _ = r("AdsCampaignCombinedStore").getAllObjects(m);
              break;
            case "ad":
              _ = o("AdsPEAdgroupSelectors").getAllSelector_LEGACY()(m);
              break;
            default:
              s(0, 862, c);
          }
          return o("AdsLoadObjectUtils").anyLoadingOrEmpty(_.values())
            ? r("LoadObject").loading({ creatorModuleID: i.id })
            : r("LoadObject").withValue(
                _.map(function (e) {
                  return e.getValueEnforcing();
                }).toArray(),
                { creatorModuleID: i.id },
              );
        },
        { name: i.id + ".getChildAdObjectsLoadObjectSelector" },
      ),
      f = r("VultureJSDeadSelector")(
        i.id,
        "getChildAdgroupIDsLoadObjecSelector",
      ),
      g = e(
        [].concat(_.getStores()),
        function (t) {
          var e = t.accountID,
            n = t.campaignIDs,
            o = n === void 0 ? [] : n,
            a = t.campaignGroupIDs,
            l = a === void 0 ? [] : a,
            s = _({
              accountID: e,
              campaignIDs: o,
              campaignGroupIDs: l,
              adObjectLevel: "ad",
            });
          if (s.isLoading())
            return r("LoadObject").loading({ creatorModuleID: i.id });
          var u = s.getValueEnforcing();
          return r("LoadObject").withValue(
            r("immutable").Map(
              u.map(function (e) {
                return [
                  e == null ? void 0 : e.id,
                  new (r("AdsAPIAdgroupRecord"))(e),
                ];
              }),
            ),
            { creatorModuleID: i.id },
          );
        },
        { name: i.id + ".getChildAdgroupsLoadObjectSelector" },
      ),
      h = e(
        [].concat(_.getStores()),
        function (t) {
          var e = t.accountID,
            n = t.campaignGroupIDs,
            o = _({
              accountID: e,
              campaignGroupIDs: n,
              adObjectLevel: "ad_set",
            });
          if (o.isLoading())
            return r("LoadObject").loading({ creatorModuleID: i.id });
          var a = o.getValueEnforcing();
          return r("LoadObject").withValue(
            r("immutable").Map(
              a.map(function (e) {
                return [e.id, new (r("AdsAPICampaignRecord"))(e)];
              }),
            ),
            { creatorModuleID: i.id },
          );
        },
        { name: i.id + ".getChildCampaignsLoadObjectSelector" },
      );
    ((l.getParentAdObjectIDsLoadObjectSelector = m),
      (l.getChildAdObjectIDsLoadObjectSelector = p),
      (l.getChildAdObjectsLoadObjectSelector = _),
      (l.getChildAdgroupIDsLoadObjecSelector = f),
      (l.getChildAdgroupsLoadObjectSelector = g),
      (l.getChildCampaignsLoadObjectSelector = h));
  },
  98,
);
