__d(
  "AdsCampaignGroupBulkEditValidationStore",
  [
    "AdsAccountStore",
    "AdsBaseValidationStore",
    "AdsBulkEditCampaignGroupEditorContext",
    "AdsBulkEditContextUtils",
    "AdsCampaignGroupBulkEditStore",
    "AdsCampaignGroupDraftFragmentStore",
    "AdsCampaignGroupNameValidator",
    "AdsCampaignGroupSpendCapValidator",
    "AdsDataAtom",
    "AdsObjectTypes",
    "adsUEditorCampaignGroupSpendCapTotalSpentSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [r("AdsAccountStore"), r("AdsCampaignGroupBulkEditStore")].concat(
        o(
          "adsUEditorCampaignGroupSpendCapTotalSpentSelectors",
        ).adsUEditorCampaignGroupSpendCapTotalSpentSelector.getStores(
          r("AdsBulkEditCampaignGroupEditorContext"),
        ),
        [r("AdsCampaignGroupDraftFragmentStore")],
      ),
      u = s.map(function (e) {
        return e.getDispatchToken();
      }),
      c = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.__onDispatch = function (o) {
            (t.prototype.__onDispatch.call(this, o),
              (e || (e = r("AdsDataAtom"))).waitFor(u),
              s.some(function (e) {
                return e.hasChanged();
              }) && this.__emitChange());
          }),
          (a.__getValidators = function () {
            return [
              r("AdsCampaignGroupNameValidator"),
              r("AdsCampaignGroupSpendCapValidator"),
            ];
          }),
          (a.__shouldValidate = function (t) {
            return r("AdsCampaignGroupBulkEditStore").getState().rows.has(t);
          }),
          (a.__getDraftFragmentStore = function () {
            return r("AdsCampaignGroupDraftFragmentStore");
          }),
          (a.__getData = function (t) {
            var e,
              n,
              a = r("AdsCampaignGroupBulkEditStore").getState().rows,
              i = (e = a.get(t)) == null ? void 0 : e.current,
              l = (n = a.get(t)) == null ? void 0 : n.original,
              s = r("AdsAccountStore").getSelectedAccount().getValue(),
              u = o("AdsBulkEditContextUtils").getCampaignGroupContext([t]),
              c = o("adsUEditorCampaignGroupSpendCapTotalSpentSelectors")
                .adsUEditorCampaignGroupSpendCapTotalSpentSelector(u)
                .getValue();
            return {
              campaignGroup: i,
              account: s,
              originalCampaignGroup: l,
              totalSpent: c,
            };
          }),
          (a.__areEqual = function (t, n) {
            return (
              t.account === n.account &&
              t.originalCampaignGroup === n.originalCampaignGroup &&
              t.campaignGroup === n.campaignGroup
            );
          }),
          (a.__getAdsObjectType = function () {
            return r("AdsObjectTypes").CAMPAIGN_GROUP;
          }),
          n
        );
      })(r("AdsBaseValidationStore"));
    c.__moduleID = i.id;
    var d = new c();
    l.default = d;
  },
  98,
);
