__d(
  "AdsAdgroupCombinedIDNameStore",
  [
    "AdsAdgroupDraftFragmentStore",
    "AdsAdgroupLiveIDNameListStore",
    "AdsAdgroupLiveListStore",
    "AdsBaseCombinedIDNameStore",
    "AdsCampaignDraftFragmentStore",
    "AdsDataAtom",
    "AdsPEAdgroupSelectors",
    "AdsSelectorUtils",
    "LoadObject",
    "adsCreateStoreThunkSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (function (t) {
        function n() {
          for (var e, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(o)) || this),
            (e.getForCampaignsSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(e),
              function (t) {
                var n = t[0],
                  r = t[1];
                return e.getForCampaigns(n, r);
              },
            )),
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
          (a.__getAllDraftIDsForAccount = function (t) {
            return r("AdsAdgroupDraftFragmentStore")
              .getFragmentsInDraftFor(t)
              .filter(function (e) {
                return (
                  e.hasValue() &&
                  e.getValueEnforcing().getChangedFields().includes("name")
                );
              })
              .keySeq()
              .toSet();
          }),
          (a.__getLiveList = function (t, n, a) {
            return r("AdsCampaignDraftFragmentStore").isNew(a)
              ? r("LoadObject").empty({ creatorModuleID: i.id })
              : o(
                  "AdsAdgroupLiveIDNameListStore",
                ).AdsAdgroupLiveIDNameListStore.getForCampaign(t, a);
          }),
          (a.__getParentIDForDraftChild = function (n) {
            (s || (s = r("AdsDataAtom"))).isDispatching() &&
              (s || (s = r("AdsDataAtom"))).waitFor(
                (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens([
                  o("AdsPEAdgroupSelectors").getCachedSelector_LEGACY,
                ]),
              );
            var t = o("AdsPEAdgroupSelectors")
              .getCachedSelector_LEGACY()(n)
              .getValue();
            return t && t.adset_id;
          }),
          (a.__isNewParentID = function (t) {
            return r("AdsCampaignDraftFragmentStore").isNew(t);
          }),
          (a.__getNameForDraftChildID = function (n) {
            (s || (s = r("AdsDataAtom"))).isDispatching() &&
              (s || (s = r("AdsDataAtom"))).waitFor(
                (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens([
                  o("AdsPEAdgroupSelectors").getCachedSelector_LEGACY,
                ]),
              );
            var t = o("AdsPEAdgroupSelectors")
              .getCachedSelector_LEGACY()(n)
              .getValueEnforcing();
            return t && t.name;
          }),
          (a.__startLoadingDataFor = function (t, n, a) {
            if (n === "campaign") {
              var e = a.filter(function (e) {
                return !r("AdsCampaignDraftFragmentStore").isNew(e);
              });
              o(
                "AdsAdgroupLiveIDNameListStore",
              ).AdsAdgroupLiveIDNameListStore.getForCampaigns(t, e);
            }
          }),
          (a.__getStores = function () {
            return [
              r("AdsAdgroupDraftFragmentStore"),
              r("AdsAdgroupLiveListStore"),
              o("AdsAdgroupLiveIDNameListStore").AdsAdgroupLiveIDNameListStore,
              r("AdsCampaignDraftFragmentStore"),
            ];
          }),
          n
        );
      })(r("AdsBaseCombinedIDNameStore")),
      c = new u();
    l.default = c;
  },
  98,
);
