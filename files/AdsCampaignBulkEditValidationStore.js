__d(
  "AdsCampaignBulkEditValidationStore",
  [
    "AdsAPICampaignRecordUtilsShared",
    "AdsAccountStore",
    "AdsBaseValidationStore",
    "AdsCampaignAgeValidator",
    "AdsCampaignAttributionCountTypeValidator",
    "AdsCampaignBudgetValidator",
    "AdsCampaignBulkEditOriginalStartTimeValidator",
    "AdsCampaignBulkEditStore",
    "AdsCampaignCLODataSourceValidator",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignLeadGenOnsiteCloHasNoCrmPixelValidator",
    "AdsCampaignMaxMinSpendLimitCoexistingValidator",
    "AdsCampaignMaxMinSpendLimitConflictValidator",
    "AdsCampaignMaxSpendLimitValidator",
    "AdsCampaignMetaSourceNotSetUpValidator",
    "AdsCampaignNameValidator",
    "AdsCampaignTimeValidator",
    "AdsDataAtom",
    "AdsODAXUtils",
    "AdsObjectTypes",
    "AdsPECampaignGroupSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        r("AdsAccountStore"),
        r("AdsCampaignBulkEditStore"),
        r("AdsCampaignDraftFragmentStore"),
      ].concat(o("AdsPECampaignGroupSelectors").getCachedSelector.getStores()),
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
              r("AdsCampaignNameValidator"),
              r("AdsCampaignBudgetValidator"),
              r("AdsCampaignAgeValidator"),
              r("AdsCampaignTimeValidator"),
              r("AdsCampaignMaxMinSpendLimitConflictValidator"),
              r("AdsCampaignMaxMinSpendLimitCoexistingValidator"),
              r("AdsCampaignMaxSpendLimitValidator"),
              r("AdsCampaignCLODataSourceValidator"),
              r("AdsCampaignMetaSourceNotSetUpValidator"),
              r("AdsCampaignLeadGenOnsiteCloHasNoCrmPixelValidator"),
              r("AdsCampaignAttributionCountTypeValidator"),
              r("AdsCampaignBulkEditOriginalStartTimeValidator"),
            ];
          }),
          (a.__shouldValidate = function (t) {
            return r("AdsCampaignBulkEditStore").getState().rows.has(t);
          }),
          (a.__getDraftFragmentStore = function () {
            return r("AdsCampaignDraftFragmentStore");
          }),
          (a.__getData = function (t) {
            var e,
              n = r("AdsCampaignBulkEditStore").getState().rows,
              a = n.get(t).current,
              i = (e = n.get(t)) == null ? void 0 : e.original,
              l = a.campaign_id,
              s = o("AdsPECampaignGroupSelectors")
                .getCachedSelector()(l)
                .getValueEnforcing(),
              u = r("AdsAccountStore").getSelectedAccount().getValue(),
              c = !t || r("AdsCampaignDraftFragmentStore").isNew(t),
              d = o("AdsAPICampaignRecordUtilsShared").getPromotedObjectType(
                u,
                s.objective,
                a,
              ),
              m = o("AdsODAXUtils").maybeTranslateObjective(
                s.objective,
                d,
                a.optimization_goal,
              );
            return {
              campaign: a,
              campaignGroup: s,
              account: u,
              isCampaignNew: c,
              isKpiExpressionEligible: !1,
              originalCampaign: i,
              effectiveObjective: m,
            };
          }),
          (a.__areEqual = function (t, n) {
            return (
              t.campaign === n.campaign &&
              t.account === n.account &&
              t.originalCampaign === n.originalCampaign &&
              t.campaignGroup === n.campaignGroup &&
              t.isCampaignNew === n.isCampaignNew &&
              t.isKpiExpressionEligible === n.isKpiExpressionEligible
            );
          }),
          (a.__getAdsObjectType = function () {
            return r("AdsObjectTypes").CAMPAIGN;
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
