__d(
  "AdsCampaignBulkEditCrossValidationStore",
  [
    "AdsAccountStore",
    "AdsBaseValidationStore",
    "AdsCampaignBulkEditStore",
    "AdsCampaignCombinedListStore",
    "AdsCampaignCombinedStore",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupCombinedStore",
    "AdsCampaignGroupDraftFragmentStore",
    "AdsCampaignMaxSpendLimitSumValidator",
    "AdsCampaignMinSpendLimitSumValidator",
    "AdsDataAtom",
    "AdsLoadObjectUtils",
    "AdsLoadState_LEGACY",
    "AdsObjectTypes",
    "shallowEqual",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        r("AdsAccountStore"),
        r("AdsCampaignCombinedStore"),
        r("AdsCampaignBulkEditStore"),
        r("AdsCampaignCombinedListStore"),
        r("AdsCampaignDraftFragmentStore"),
        r("AdsCampaignGroupCombinedStore"),
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
            return [
              r("AdsCampaignMinSpendLimitSumValidator"),
              r("AdsCampaignMaxSpendLimitSumValidator"),
            ];
          }),
          (a.__shouldValidate = function (t) {
            return r("AdsCampaignBulkEditStore").getState().rows.has(t);
          }),
          (a.__getDraftFragmentStore = function () {
            return r("AdsCampaignDraftFragmentStore");
          }),
          (a.__getData = function (t) {
            var e = r("AdsCampaignBulkEditStore").getState().rows,
              n = e.get(t).current,
              a = r("AdsAccountStore").getSelectedAccount().getValue(),
              i = a == null ? void 0 : a.account_id,
              l = n.campaign_id;
            if (i == null) return null;
            var s = r("AdsCampaignCombinedListStore")
              .getForCampaignGroups(i, [l])
              .get(l);
            if (!s || s.loadState !== r("AdsLoadState_LEGACY").LOADED)
              return null;
            var u = r("AdsCampaignGroupCombinedStore")
                .getCachedObject(l)
                .getValueEnforcing(),
              c = [],
              d = [],
              m = [];
            s.list.forEach(function (t) {
              var n = e.get(t);
              n != null ? (c.push(n.current), d.push(t)) : m.push(t);
            });
            var p = r("AdsCampaignCombinedStore").getAllObjects(m);
            if (o("AdsLoadObjectUtils").anyLoadingOrEmpty(p.values()))
              return null;
            var _ = p
                .map(function (e) {
                  return e.getValueEnforcing();
                })
                .toArray()
                .concat(c),
              f = r("AdsCampaignGroupDraftFragmentStore").hasDraft(l);
            return {
              account: a,
              anyCampaignsHaveDraft:
                d.some(function (t) {
                  var n = e.get(t);
                  return n != null && n.current !== n.original;
                }) ||
                s.list.some(function (e) {
                  return r("AdsCampaignDraftFragmentStore").hasDraft(e);
                }),
              campaignGroup: u,
              campaignGroupHasDraft: f,
              campaigns: _,
            };
          }),
          (a.__areEqual = function (t, n) {
            return r("shallowEqual")(t, n);
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
