__d(
  "AdsAdgroupCombinedListStore",
  [
    "invariant",
    "AdsAdgroupDraftFragmentStore",
    "AdsAdgroupLiveListStore",
    "AdsBaseCombinedListStore",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupDraftFragmentStore",
    "AdsDMLQueryHandler_DerivedDataBase",
    "AdsDataAtom",
    "AdsLoadStateUtils_LEGACY",
    "AdsLoadState_LEGACY",
    "AdsPEAdgroupSelectors",
    "AdsSelectorUtils",
    "LoadObject",
    "adsCreateStoreThunkSelector",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = { loadState: r("AdsLoadState_LEGACY").LOADED, list: [] },
      d = (function (t) {
        function n() {
          for (var e, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
            a[i] = arguments[i];
          return (
            (e = t.call.apply(t, [this].concat(a)) || this),
            (e.getForCampaignsSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(e),
              function (t) {
                var n = t[0],
                  r = t[1];
                return e.getForCampaigns(n, r);
              },
            )),
            (e.getAdgroupIDsSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(e),
              function (n, r) {
                var a = [],
                  i = t.prototype.__getForAll.call(
                    babelHelpers.assertThisInitialized(e),
                    n,
                    "campaign",
                    [r],
                  );
                return (
                  Array.from(i.values()).forEach(function (e) {
                    o("AdsLoadStateUtils_LEGACY").isLoaded(e) &&
                      a.push.apply(a, e.list);
                  }),
                  a
                );
              },
            )),
            (e.getForCampaignGroupsSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(e),
              function (t, n) {
                return e.getForCampaignGroups(t, n);
              },
            )),
            (e.getCampaignIDForDraftAdgroupSelector = r(
              "adsCreateStoreThunkSelector",
            )(babelHelpers.assertThisInitialized(e), function (t) {
              return e.__getParentIDForDraftChild(t, "campaign");
            })),
            (e.getCampaignGroupIDForDraftAdgroupSelector = r(
              "adsCreateStoreThunkSelector",
            )(babelHelpers.assertThisInitialized(e), function (t) {
              return e.__getParentIDForDraftChild(t, "campaignGroup");
            })),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getForCampaigns = function (n, r) {
            return t.prototype.__getForAll.call(this, n, "campaign", r);
          }),
          (a.getForCampaign = function (t, n) {
            return this.getForCampaigns(t, [n]).get(n);
          }),
          (a.getForCampaignGroups = function (n, r) {
            return t.prototype.__getForAll.call(this, n, "campaignGroup", r);
          }),
          (a.getAdgroupIDs = function (n, a) {
            var e = [],
              l = t.prototype.__getForAll.call(this, n, "campaignGroup", a),
              s = !1,
              u = null;
            for (var c of l.values())
              o("AdsLoadStateUtils_LEGACY").isLoaded(c)
                ? e.push.apply(e, c.list)
                : o("AdsLoadStateUtils_LEGACY").isError(c)
                  ? (u = c)
                  : (s = !0);
            if (u != null) {
              var d;
              return r("LoadObject").withError(
                (d = o("AdsLoadStateUtils_LEGACY").getError(u)) != null
                  ? d
                  : r("err")(
                      "Failed to load adgroup IDs for campaignGroupIDs %s",
                      a.join(","),
                    ),
                { creatorModuleID: i.id },
              );
            } else
              return s
                ? r("LoadObject").loading({ creatorModuleID: i.id }).setValue(e)
                : r("LoadObject").withValue(e, { creatorModuleID: i.id });
          }),
          (a.getForAccount = function (n) {
            return t.prototype.__getFor.call(this, n, "account", n);
          }),
          (a.__getAllDraftIDsForAccount = function (t) {
            return r("AdsAdgroupDraftFragmentStore").getNewIDsFor(t);
          }),
          (a.__getLiveList = function (t, n, o) {
            switch (n) {
              case "account":
                return r("AdsAdgroupLiveListStore").getForAccount(t);
              case "campaign":
                var e = o;
                return r("AdsCampaignDraftFragmentStore").isNew(e)
                  ? c
                  : r("AdsAdgroupLiveListStore").getForCampaign(t, e);
              case "campaignGroup":
                var a = o;
                return r("AdsCampaignGroupDraftFragmentStore").isNew(a)
                  ? c
                  : r("AdsAdgroupLiveListStore").getForCampaignGroup(t, a);
              default:
                s(0, 620);
            }
          }),
          (a.__getParentIDForDraftChild = function (n, a) {
            (u || (u = r("AdsDataAtom"))).isDispatching() &&
              (u || (u = r("AdsDataAtom"))).waitFor(
                (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens([
                  o("AdsPEAdgroupSelectors").getCachedByFieldsSelector,
                ]),
              );
            var t = o("AdsPEAdgroupSelectors")
              .getCachedByFieldsSelector()(
                n,
                { account_id: null, adset_id: null, campaign_id: null },
                i.id,
              )
              .getValue();
            if (!t) return null;
            switch (a) {
              case "account":
                return t.account_id;
              case "campaign":
                return t.adset_id;
              case "campaignGroup":
                return t.campaign_id;
              default:
                s(0, 620);
            }
          }),
          (a.__startLoadingDataFor = function (t, n, o) {
            if (n === "campaign") {
              var e = o.filter(function (e) {
                return !r("AdsCampaignDraftFragmentStore").isNew(e);
              });
              r("AdsAdgroupLiveListStore").getForCampaigns(t, e);
            } else if (n === "campaignGroup") {
              var a = o.filter(function (e) {
                return !r("AdsCampaignGroupDraftFragmentStore").isNew(e);
              });
              r("AdsAdgroupLiveListStore").getForCampaignGroups(t, a);
            }
          }),
          (a.__getStores = function () {
            return [].concat(
              o("AdsPEAdgroupSelectors").getCachedByFieldsSelector.getStores(),
              [
                r("AdsAdgroupDraftFragmentStore"),
                r("AdsAdgroupLiveListStore"),
                r("AdsCampaignDraftFragmentStore"),
                r("AdsCampaignGroupDraftFragmentStore"),
              ],
            );
          }),
          n
        );
      })(r("AdsBaseCombinedListStore"));
    d.__moduleID = i.id;
    var m = new d(),
      p = o("AdsDMLQueryHandler_DerivedDataBase").modularLoader(
        function () {
          return [m];
        },
        function (e) {
          var t = [],
            n = m.getForCampaigns(e.accountID, e.campaignIDs);
          return (
            Array.from(n.values()).forEach(function (e) {
              o("AdsLoadStateUtils_LEGACY").isLoaded(e) &&
                t.push.apply(t, e.list);
            }),
            t
          );
        },
      );
    ((l.AdsAdgroupCombinedListStore = m), (l.dmlL1AdgroupLoadedList = p));
  },
  98,
);
