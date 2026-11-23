__d(
  "AdsCampaignGroupBudgetBulkEditBidStrategyValidationBaseStore",
  [
    "AdsAccountStore",
    "AdsBaseValidationStore",
    "AdsBulkEditDialogTypes",
    "AdsCampaignGroupBidStrategyChangeBudgetValidator",
    "AdsCampaignGroupToggleBidStrategyDialogUIDataProvider",
    "AdsDataAtom",
    "AdsMgmtCampaignGroupTodaySpentStore",
    "AdsObjectTypes",
    "AdsPECampaignGroupSelectors",
    "adsCampaignGroupToggleBidStrategyDialogUIStateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [].concat(
        r("AdsAccountStore").getSelectedAccount.getStores(),
        o("AdsPECampaignGroupSelectors").getCachedSelector.getStores(),
        [
          r(
            "AdsCampaignGroupToggleBidStrategyDialogUIDataProvider",
          ).toFluxStore(),
          r("AdsMgmtCampaignGroupTodaySpentStore"),
        ],
      ),
      u = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.__onDispatch = function (o) {
            t.prototype.__onDispatch.call(this, o);
            var n = s.concat([this.__getBulkEditDataStore()]);
            ((e || (e = r("AdsDataAtom"))).waitFor(
              n.map(function (e) {
                return e.getDispatchToken();
              }),
            ),
              s.some(function (e) {
                return e.hasChanged();
              }) && this.__emitChange());
          }),
          (a.__getValidators = function () {
            return [r("AdsCampaignGroupBidStrategyChangeBudgetValidator")];
          }),
          (a.__shouldValidate = function (t) {
            var e = this.__getBulkEditDataStore().getState().dialogType;
            return this.__supportedDialogTypes(e);
          }),
          (a.__supportedDialogTypes = function (t) {
            if (t == null) return !1;
            switch (t) {
              case r("AdsBulkEditDialogTypes").ALL_CAMPAIGN_BID_CAPS:
              case r("AdsBulkEditDialogTypes").ALL_CAMPAIGN_COST_CAPS:
                return !0;
              default:
                return !1;
            }
          }),
          (a.__getData = function (t) {
            var e = r("AdsAccountStore").getSelectedAccount(),
              n = o("AdsPECampaignGroupSelectors")
                .getCachedSelector()(t)
                .getValue();
            if (!e.hasValueWithoutError() || !n) return null;
            var a = null,
              i = r("AdsMgmtCampaignGroupTodaySpentStore").get(t);
            (i.hasValueWithoutError() && (a = i.getValueEnforcing()),
              n != null &&
                (n = babelHelpers.extends({}, n, { today_spent: a })));
            var l = e.getValueEnforcing(),
              s = this.__getBulkEditDataStore(),
              u = Array.from(s.getState().rows.values()).map(function (e) {
                return e.current;
              }),
              c = r("adsCampaignGroupToggleBidStrategyDialogUIStateSelector")(),
              d = c.budgetAmount,
              m = c.budgetMode;
            return {
              account: l,
              campaignGroup: n,
              campaigns: u,
              budgetAmount: d,
              budgetMode: m,
            };
          }),
          (a.__getAdsObjectType = function () {
            return r("AdsObjectTypes").CAMPAIGN_GROUP;
          }),
          n
        );
      })(r("AdsBaseValidationStore"));
    ((u.__moduleID = i.id), (l.default = u));
  },
  98,
);
