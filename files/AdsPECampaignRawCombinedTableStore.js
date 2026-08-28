__d(
  "AdsPECampaignRawCombinedTableStore",
  [
    "AdsAPICampaignRecord",
    "AdsCampaignDraftFragmentStore",
    "AdsDataAtom",
    "AdsObjectIDLevelRegistry",
    "AdsObjectTypes",
    "AdsPEBaseCombinedTableStore",
    "AdsPECampaignLiveTableStore",
    "adsCreateStoreThunkSelector",
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
            (t.getRecordSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(t),
              function (e) {
                return t.getRecord(e);
              },
            )),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__getStores = function () {
            return [
              r("AdsCampaignDraftFragmentStore"),
              r("AdsPECampaignLiveTableStore"),
            ];
          }),
          (n.__getDraftFragmentStore = function () {
            return r("AdsCampaignDraftFragmentStore");
          }),
          (n.__getLiveTableStore = function () {
            return r("AdsPECampaignLiveTableStore");
          }),
          (n.__createRecord = function (t) {
            return new (r("AdsAPICampaignRecord"))(t);
          }),
          (n.__getData = function (n, a) {
            return (
              o("AdsObjectIDLevelRegistry").checkIDLevel(
                n,
                r("AdsObjectTypes").CAMPAIGN,
                "AdsPECampaignRawCombinedTableStore",
              ),
              e.prototype.__getData.call(this, n, a)
            );
          }),
          (n.__getCachedData = function (n) {
            return (
              o("AdsObjectIDLevelRegistry").checkIDLevel(
                n,
                r("AdsObjectTypes").CAMPAIGN,
                "AdsPECampaignRawCombinedTableStore",
              ),
              e.prototype.__getCachedData.call(this, n)
            );
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
