__d(
  "AdsCampaignCombinedListStore",
  [
    "invariant",
    "AdsBaseCombinedListStore",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupDraftFragmentStore",
    "AdsCampaignLiveListStore",
    "AdsDataAtom",
    "AdsLoadStateUtils_LEGACY",
    "AdsLoadState_LEGACY",
    "AdsPECampaignRawCombinedTableStore",
    "LoadObject",
    "adsCreateStoreThunkSelector",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = { loadState: r("AdsLoadState_LEGACY").LOADED, list: [] },
      c = (function (t) {
        function n() {
          for (var e, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(o)) || this),
            (e.getForCampaignGroupsSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(e),
              function (t, n) {
                return e.getForCampaignGroups(t, n);
              },
            )),
            (e.getCampaignIDsSelector_DEPRECATED = r(
              "adsCreateStoreThunkSelector",
            )(babelHelpers.assertThisInitialized(e), function (t, n) {
              return e.getCampaignIDs_DEPRECATED(t, [n]);
            })),
            (e.getCampaignIDsByCampaignGroupIDsSelector_DEPRECATED = r(
              "adsCreateStoreThunkSelector",
            )(babelHelpers.assertThisInitialized(e), function (t, n) {
              return e.getCampaignIDs_DEPRECATED(t, n);
            })),
            (e.getCampaignGroupIDForDraftCampaignSelector = r(
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
          (a.getForCampaignGroups = function (n, r) {
            return t.prototype.__getForAll.call(this, n, "campaignGroup", r);
          }),
          (a.getForCampaignGroup = function (t, n) {
            return this.getForCampaignGroups(t, [n]).get(n);
          }),
          (a.getCampaignIDs_DEPRECATED = function (n, r) {
            var e = [],
              a = t.prototype.__getForAll.call(this, n, "campaignGroup", r);
            return (
              Array.from(a.values()).forEach(function (t) {
                o("AdsLoadStateUtils_LEGACY").isLoaded(t) &&
                  e.push.apply(e, t.list);
              }),
              e
            );
          }),
          (a.getCampaignIDs = function (n, a) {
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
                  : r("err")("Failed to load campaignGroupIDs %s", a.join(",")),
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
            return r("AdsCampaignDraftFragmentStore").getNewIDsFor(t);
          }),
          (a.__getStores = function () {
            return [
              r("AdsPECampaignRawCombinedTableStore"),
              r("AdsCampaignDraftFragmentStore"),
              r("AdsCampaignGroupDraftFragmentStore"),
              r("AdsCampaignLiveListStore"),
            ];
          }),
          (a.__getLiveList = function (t, n, o) {
            switch (n) {
              case "account":
                return r("AdsCampaignLiveListStore").getForAccount(t);
              case "campaignGroup":
                var e = o;
                return r("AdsCampaignGroupDraftFragmentStore").isNew(e)
                  ? u
                  : r("AdsCampaignLiveListStore").getForCampaignGroup(t, e);
              default:
                s(0, 620);
            }
          }),
          (a.__getParentIDForDraftChild = function (n, o) {
            (e || (e = r("AdsDataAtom"))).isDispatching() &&
              (e || (e = r("AdsDataAtom"))).waitFor([
                r("AdsPECampaignRawCombinedTableStore").getDispatchToken(),
              ]);
            var t = r("AdsPECampaignRawCombinedTableStore")
              .getCachedByFields(n, { account_id: null, campaign_id: null })
              .getValue();
            if (t == null) return null;
            switch (o) {
              case "account":
                return t.account_id;
              case "campaignGroup":
                return t.campaign_id;
              default:
                s(0, 620);
            }
          }),
          (a.__startLoadingDataFor = function (t, n, o) {
            if (n === "campaignGroup") {
              var e = o.filter(function (e) {
                return !r("AdsCampaignGroupDraftFragmentStore").isNew(e);
              });
              r("AdsCampaignLiveListStore").getForCampaignGroups(t, e);
            }
          }),
          n
        );
      })(r("AdsBaseCombinedListStore"));
    c.__moduleID = i.id;
    var d = new c();
    l.default = d;
  },
  98,
);
