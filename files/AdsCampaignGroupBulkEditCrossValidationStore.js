__d(
  "AdsCampaignGroupBulkEditCrossValidationStore",
  [
    "AdsAccountStore",
    "AdsBaseValidationStore",
    "AdsCampaignCombinedListStore",
    "AdsCampaignCombinedStore",
    "AdsCampaignGroupBudgetValidator",
    "AdsCampaignGroupBulkEditStore",
    "AdsCampaignGroupDraftFragmentStore",
    "AdsDataAtom",
    "AdsLoadObjectUtils",
    "AdsLoadState_LEGACY",
    "AdsMgmtCampaignGroupTodaySpentStore",
    "AdsObjectTypes",
    "shallowEqual",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        r("AdsAccountStore"),
        r("AdsCampaignCombinedListStore"),
        r("AdsCampaignCombinedStore"),
        r("AdsCampaignGroupBulkEditStore"),
        r("AdsCampaignGroupDraftFragmentStore"),
        r("AdsMgmtCampaignGroupTodaySpentStore"),
      ],
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
            return [r("AdsCampaignGroupBudgetValidator")];
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
              s = r("AdsAccountStore").getSelectedAccount();
            if (!s.hasValueWithoutError()) return null;
            var u = s.getValueEnforcing(),
              c = r("AdsCampaignCombinedListStore")
                .getForCampaignGroups(u.account_id, [t])
                .get(t);
            if (!c || c.loadState !== r("AdsLoadState_LEGACY").LOADED)
              return null;
            var d = r("AdsCampaignCombinedStore").getAllObjects(c.list);
            if (o("AdsLoadObjectUtils").anyLoadingOrEmpty(d.values()))
              return null;
            var m = d
                .map(function (e) {
                  return e.getValueEnforcing();
                })
                .toArray(),
              p = r("AdsCampaignGroupDraftFragmentStore").hasDraft(t),
              _ = i !== l,
              f = null;
            if (i != null && i.has != null && i.has("today_spent")) {
              var g = r("AdsMgmtCampaignGroupTodaySpentStore").get(t);
              g.hasValueWithoutError() && (f = g.getValueEnforcing());
            }
            return (
              i != null &&
                i.has != null &&
                i.has("today_spent") &&
                i.set != null &&
                (i = i.set("today_spent", f)),
              l != null &&
                l.has != null &&
                l.has("today_spent") &&
                l.set != null &&
                (l = l.set("today_spent", f)),
              {
                account: u,
                anyCampaignsHaveDraft: !1,
                campaignGroup: i,
                campaignGroupHasDraft: p || _,
                campaigns: m,
              }
            );
          }),
          (a.__areEqual = function (t, n) {
            return r("shallowEqual")(t, n);
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
