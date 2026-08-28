__d(
  "AdsEditorSelectors",
  [
    "AdsAccountStore",
    "AdsAdObjectsSelectors",
    "AdsDMLQueryHandler_DerivedDataBase",
    "AdsEditorSelectedIDsSelector",
    "AdsObjectTypeUtils",
    "AdsObjectTypes",
    "AdsSelectionLevelSelectors",
    "AdsSelectorUtils",
    "LoadObject",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsUEditorCrepeCurrentLevelIDsSelector",
    "adsUEditorCrepeCurrentLevelSelector",
    "adsUEditorInjectEditingCampaignGroupContext",
    "isFalsey",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = (u = r("adsCreateStoreSelector"))(
        (s = o(
          "AdsAdObjectsSelectors",
        )).getChildAdObjectIDsLoadObjectSelector.getStores(),
        function (t) {
          var e = t.accountID,
            n = t.currentIDs,
            a = t.objectType;
          switch (a) {
            case r("AdsObjectTypes").CAMPAIGN:
              return o(
                "AdsAdObjectsSelectors",
              ).getChildAdObjectIDsLoadObjectSelector({
                accountID: e,
                campaignIDs: n,
                adObjectLevel: "ad",
              });
            case r("AdsObjectTypes").CAMPAIGN_GROUP:
              return o(
                "AdsAdObjectsSelectors",
              ).getChildAdObjectIDsLoadObjectSelector({
                accountID: e,
                campaignGroupIDs: n,
                adObjectLevel: "ad",
              });
          }
          return r("LoadObject").empty({ creatorModuleID: i.id });
        },
        { name: i.id + ".getAdgroupIDsForSelection" },
      ),
      d = u(
        [].concat(
          s.getChildAdObjectIDsLoadObjectSelector.getStores(),
          s.getParentAdObjectIDsLoadObjectSelector.getStores(),
        ),
        function (t) {
          var e = t.accountID,
            n = t.currentIDs,
            a = t.objectType;
          switch (a) {
            case r("AdsObjectTypes").CAMPAIGN_GROUP:
              return o(
                "AdsAdObjectsSelectors",
              ).getChildAdObjectIDsLoadObjectSelector({
                accountID: e,
                campaignGroupIDs: n,
                adObjectLevel: "ad_set",
              });
            case r("AdsObjectTypes").ADGROUP:
              return o(
                "AdsAdObjectsSelectors",
              ).getParentAdObjectIDsLoadObjectSelector({
                adgroupIDs: n,
                adObjectLevel: "ad_set",
              });
          }
          return r("LoadObject").empty({ creatorModuleID: i.id });
        },
        { name: i.id + ".getCampaignsIDsForSelection" },
      ),
      m = u(
        s.getParentAdObjectIDsLoadObjectSelector.getStores(),
        function (t) {
          var e = t.currentIDs,
            n = t.objectType;
          switch (n) {
            case r("AdsObjectTypes").CAMPAIGN:
              return o(
                "AdsAdObjectsSelectors",
              ).getParentAdObjectIDsLoadObjectSelector({
                campaignIDs: e,
                adObjectLevel: "campaign",
              });
            case r("AdsObjectTypes").ADGROUP:
              return o(
                "AdsAdObjectsSelectors",
              ).getParentAdObjectIDsLoadObjectSelector({
                adgroupIDs: e,
                adObjectLevel: "campaign",
              });
          }
          return r("LoadObject").empty({ creatorModuleID: i.id });
        },
        { name: i.id + ".getCampaignGroupsIDsForSelection" },
      ),
      p = {
        adgroupIDs: r("LoadObject").loading({ creatorModuleID: i.id }),
        campaignIDs: r("LoadObject").loading({ creatorModuleID: i.id }),
        campaignGroupIDs: r("LoadObject").loading({ creatorModuleID: i.id }),
      },
      _ = r("adsCreateSelector")(
        [
          r("AdsAccountStore").getSelectedAccountID,
          r("adsUEditorInjectEditingCampaignGroupContext")(
            r("adsUEditorCrepeCurrentLevelSelector"),
          ),
          r("adsUEditorInjectEditingCampaignGroupContext")(
            r("adsUEditorCrepeCurrentLevelIDsSelector"),
          ),
        ],
        function (t, n, a) {
          if (r("isFalsey")(t)) return p;
          var e = r("nullthrows")(o("AdsObjectTypeUtils").fromObjectLevel(n));
          return {
            adgroupIDs: c({ accountID: t, currentIDs: a, objectType: e }),
            campaignIDs: d({ accountID: t, currentIDs: a, objectType: e }),
            campaignGroupIDs: m({ accountID: t, currentIDs: a, objectType: e }),
          };
        },
        { name: i.id + ".getAdObjectIDsForSelectionCrepeSelector" },
      ),
      f = u(
        [].concat(
          (e || (e = o("AdsSelectorUtils"))).getStores([
            o("AdsSelectionLevelSelectors").adsEditorLevelSelector,
            o("AdsEditorSelectedIDsSelector").AdsEditorSelectedIDsSelector,
            c,
            d,
            m,
          ]),
          [r("AdsAccountStore")],
        ),
        function () {
          var e = r("AdsAccountStore").getSelectedAccountID();
          if (r("isFalsey")(e)) return p;
          var t = o("AdsSelectionLevelSelectors").adsEditorLevelSelector(),
            n = o("AdsObjectTypeUtils").getAdLevelFromObjectLevel(t),
            a = o("AdsEditorSelectedIDsSelector").AdsEditorSelectedIDsSelector(
              r("nullthrows")(n),
            ),
            i = r("nullthrows")(o("AdsObjectTypeUtils").fromObjectLevel(t));
          return {
            adgroupIDs: c({ accountID: e, currentIDs: a, objectType: i }),
            campaignIDs: d({ accountID: e, currentIDs: a, objectType: i }),
            campaignGroupIDs: m({ accountID: e, currentIDs: a, objectType: i }),
          };
        },
        { name: i.id + ".getAdObjectIDsForSelectionSelector" },
      ),
      g = o("AdsDMLQueryHandler_DerivedDataBase").modularLoader(function (e) {
        return f.getStores(e);
      }, f);
    ((l.getAdObjectIDsForSelectionCrepeSelector = _),
      (l.getAdObjectIDsForSelectionSelector = f),
      (l.dmlGetAdObjectIDsForSelectionSelector = g));
  },
  98,
);
