__d(
  "AdsAdgroupBulkEditValidationStore",
  [
    "AdsAccountStore",
    "AdsAdAccountPublisherBlockListsProvider",
    "AdsAdgroupBulkEditStore",
    "AdsAdgroupDisplayURLValidator",
    "AdsAdgroupDraftFragmentStore",
    "AdsAdgroupEditorStore",
    "AdsAdgroupNameValidator",
    "AdsAdgroupScheduleValidator",
    "AdsAdgroupWebsiteURLValidator",
    "AdsAssetFeedWebsiteURLValidator",
    "AdsBaseValidationStore",
    "AdsDataAtom",
    "AdsODAXUtils",
    "AdsObjectTypes",
    "AdsPEAdgroupLiveSelectors",
    "AdsPECampaignGroupSelectors",
    "AdsPECampaignSelectors",
    "AdsPlacementEligibilityInfoUtils",
    "AdsSelectorUtils",
    "adsPromotedObjectTypeSelector_LEGACY",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = [
        r("AdsAccountStore"),
        r("AdsAdgroupBulkEditStore"),
        r("AdsAdgroupEditorStore"),
        r("AdsAdAccountPublisherBlockListsProvider").toFluxStore(),
      ].concat(
        o("AdsPECampaignSelectors").getCachedSelector.getStores(),
        o("AdsPECampaignGroupSelectors").getCachedSelector.getStores(),
        r("adsPromotedObjectTypeSelector_LEGACY").getStores(),
        [r("AdsAdgroupDraftFragmentStore")],
      ),
      c = u.map(function (e) {
        return e.getDispatchToken();
      }),
      d = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.__onDispatch = function (n) {
            (t.prototype.__onDispatch.call(this, n),
              (s || (s = r("AdsDataAtom"))).waitFor(c),
              u.some(function (e) {
                return e.hasChanged();
              }) && this.__emitChange());
          }),
          (a.__getValidators = function () {
            return [
              r("AdsAdgroupDisplayURLValidator"),
              r("AdsAdgroupNameValidator"),
              r("AdsAdgroupWebsiteURLValidator"),
              r("AdsAssetFeedWebsiteURLValidator"),
              r("AdsAdgroupScheduleValidator"),
            ];
          }),
          (a.__shouldValidate = function (t) {
            return r("AdsAdgroupBulkEditStore").getState().rows.has(t);
          }),
          (a.__getDraftFragmentStore = function () {
            return r("AdsAdgroupDraftFragmentStore");
          }),
          (a.__getData = function (n) {
            var t,
              a = r("AdsAdgroupBulkEditStore").getState().rows,
              i = a.get(n).current,
              l = (t = a.get(n)) == null ? void 0 : t.original,
              u = r("AdsAccountStore").getSelectedAccount();
            if (!u.hasValueWithoutError()) return null;
            var c = u.getValueEnforcing(),
              d = i == null ? void 0 : i.adset_id;
            (s || (s = r("AdsDataAtom"))).isDispatching() &&
              (s || (s = r("AdsDataAtom"))).waitFor(
                (e || (e = o("AdsSelectorUtils"))).getStoreDispatchTokens([
                  o("AdsPECampaignSelectors").getCachedSelector,
                ]),
              );
            var m = o("AdsPECampaignSelectors").getCachedSelector()(d),
              p = m.getValueEnforcing(),
              _ = p.campaign_id,
              f = o("AdsPECampaignGroupSelectors").getCachedSelector()(_),
              g = f.getValueEnforcing(),
              h = r("adsPromotedObjectTypeSelector_LEGACY")(i.adset_id),
              y = r("AdsAdgroupEditorStore").getCachedPageID(n),
              C = g.buying_type,
              b = g.objective,
              v = r("AdsAdAccountPublisherBlockListsProvider")().get(
                c.account_id,
              ),
              S = o(
                "AdsPlacementEligibilityInfoUtils",
              ).buildEligibilityInformationFromCampaignSpec(
                p,
                C,
                c.capabilities,
                b,
                (v && v.getValue()) || [],
                void 0,
                void 0,
                void 0,
                void 0,
                g.buy_with_integration_partner,
                g.buy_with_prime_type,
                g.smart_promotion_type,
                g.special_ad_categories,
                g.is_opted_into_experiments,
                g.campaign_group_creation_source,
                void 0,
                void 0,
                void 0,
                void 0,
                g.special_ad_category_country,
              ),
              R = o("AdsODAXUtils").maybeTranslateObjective(
                b,
                h,
                S == null ? void 0 : S.optimizationGoal,
              ),
              L = o("AdsPEAdgroupLiveSelectors")
                .getCachedByFieldsSelector()(i.id, {
                  ad_schedule_end_time: null,
                  ad_schedule_start_time: null,
                })
                .getValue();
            return {
              account: c,
              adgroup: i.toJS(),
              adgroupLiveFields: L,
              campaign: p,
              campaignGroup: g,
              eligibilityInfo: S,
              effectiveObjective: R,
              originalAdgroup: l,
              promotedObjectType: h,
              ui: { cachedPageID: y },
            };
          }),
          (a.__areEqual = function (t, n) {
            return (
              t.adgroup === n.adgroup &&
              t.account === n.account &&
              t.campaignGroup === n.campaignGroup &&
              t.originalAdgroup === n.originalAdgroup &&
              t.ui === n.ui
            );
          }),
          (a.__getAdsObjectType = function () {
            return r("AdsObjectTypes").ADGROUP;
          }),
          n
        );
      })(r("AdsBaseValidationStore"));
    d.__moduleID = i.id;
    var m = new d();
    l.default = m;
  },
  98,
);
