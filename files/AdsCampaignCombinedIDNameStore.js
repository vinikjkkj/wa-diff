__d(
  "AdsCampaignCombinedIDNameStore",
  [
    "AdsBaseCombinedIDNameStore",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupDraftFragmentStore",
    "AdsCampaignLiveIDNameListStore",
    "AdsDataAtom",
    "AdsPECampaignRawCombinedTableStore",
    "LoadObject",
    "adsCreateStoreThunkSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function n() {
          for (var e, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(o)) || this),
            (e.getForCampaignGroupsSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(e),
              function (t) {
                var n = t[0],
                  r = t[1];
                return e.getForCampaignGroups(n, r);
              },
            )),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.getForCampaignGroups = function (n, r) {
            return t.prototype.__getForAll.call(this, n, "campaignGroup", r);
          }),
          (o.__getAllDraftIDsForAccount = function (t) {
            return r("AdsCampaignDraftFragmentStore")
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
          (o.__getLiveList = function (t, n, o) {
            return r("AdsCampaignGroupDraftFragmentStore").isNew(o)
              ? r("LoadObject").empty({ creatorModuleID: i.id })
              : r("AdsCampaignLiveIDNameListStore").getForCampaignGroup(t, o);
          }),
          (o.__getParentIDForDraftChild = function (n) {
            return (
              (e || (e = r("AdsDataAtom"))).isDispatching() &&
                (e || (e = r("AdsDataAtom"))).waitFor([
                  r("AdsPECampaignRawCombinedTableStore").getDispatchToken(),
                ]),
              r("AdsPECampaignRawCombinedTableStore")
                .getCachedSingleField(n, "campaign_id")
                .getValue()
            );
          }),
          (o.__isNewParentID = function (t) {
            return r("AdsCampaignGroupDraftFragmentStore").isNew(t);
          }),
          (o.__getNameForDraftChildID = function (n) {
            return (
              (e || (e = r("AdsDataAtom"))).isDispatching() &&
                (e || (e = r("AdsDataAtom"))).waitFor([
                  r("AdsPECampaignRawCombinedTableStore").getDispatchToken(),
                ]),
              r("AdsPECampaignRawCombinedTableStore")
                .getCachedSingleField(n, "name")
                .getValueEnforcing()
            );
          }),
          (o.__startLoadingDataFor = function (t, n, o) {
            if (n === "campaignGroup") {
              var e = o.filter(function (e) {
                return !r("AdsCampaignGroupDraftFragmentStore").isNew(e);
              });
              e.length &&
                r("AdsCampaignLiveIDNameListStore").getForCampaignGroups(t, e);
            }
          }),
          (o.__getStores = function () {
            return [
              r("AdsCampaignDraftFragmentStore"),
              r("AdsCampaignGroupDraftFragmentStore"),
              r("AdsCampaignLiveIDNameListStore"),
              r("AdsPECampaignRawCombinedTableStore"),
            ];
          }),
          n
        );
      })(r("AdsBaseCombinedIDNameStore")),
      u = new s();
    l.default = u;
  },
  98,
);
