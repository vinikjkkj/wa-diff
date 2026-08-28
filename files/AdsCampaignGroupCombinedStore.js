__d(
  "AdsCampaignGroupCombinedStore",
  [
    "AdsAPICampaignGroupRecord",
    "AdsCampaignGroupDraftFragmentStore",
    "AdsDataAtom",
    "AdsObjectIDLevelRegistry",
    "AdsObjectTypes",
    "AdsPEBaseCombinedTableStore",
    "AdsPECampaignGroupLiveTableStore",
    "adsCreateStoreThunkSelector",
    "adsUEditorSlowSelectorsLogging",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
        function t() {
          for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(o)) || this),
            (t.getSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(t),
              function (e) {
                return t.get(e);
              },
            )),
            (t.getCachedSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(t),
              function (e) {
                return t.getCached(e);
              },
            )),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__getData = function (n, a) {
            return (
              o("AdsObjectIDLevelRegistry").checkIDLevel(
                n,
                r("AdsObjectTypes").CAMPAIGN_GROUP,
                "AdsCampaignGroupCombinedStore",
              ),
              e.prototype.__getData.call(this, n, a)
            );
          }),
          (n.__getCachedData = function (n) {
            return (
              o("AdsObjectIDLevelRegistry").checkIDLevel(
                n,
                r("AdsObjectTypes").CAMPAIGN_GROUP,
                "AdsCampaignGroupCombinedStore",
              ),
              e.prototype.__getCachedData.call(this, n)
            );
          }),
          (n.getAllByFields = function (n, r) {
            return o(
              "adsUEditorSlowSelectorsLogging",
            ).checkAndLogCampaignGroupStoreOverfetching(
              e.prototype.getAllByFields.call(this, n, r),
            );
          }),
          (n.__getStores = function () {
            return [
              r("AdsCampaignGroupDraftFragmentStore"),
              r("AdsPECampaignGroupLiveTableStore"),
            ];
          }),
          (n.__getDraftFragmentStore = function () {
            return r("AdsCampaignGroupDraftFragmentStore");
          }),
          (n.__getLiveTableStore = function () {
            return r("AdsPECampaignGroupLiveTableStore");
          }),
          (n.__createRecord = function (t) {
            return new (r("AdsAPICampaignGroupRecord"))(t);
          }),
          t
        );
      })(r("AdsPEBaseCombinedTableStore"));
    s.__moduleID = i.id;
    var u = new s(e || (e = r("AdsDataAtom")));
    l.default = u;
  },
  98,
);
