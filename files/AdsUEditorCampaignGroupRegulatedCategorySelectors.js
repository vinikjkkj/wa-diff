__d(
  "AdsUEditorCampaignGroupRegulatedCategorySelectors",
  [
    "AdsAccountStore",
    "AdsMixedValue",
    "AdsRegulatedCategory",
    "AdsRegulatedCategoryConstants",
    "AdsRegulatedCategoryConvertAdproRegulatedCategory",
    "AdsSpecialAdCategoryVisibilityProvider",
    "AdsUEditorCampaignGroupRegulatedCategorySelectorsUtils",
    "AdsUEditorCampaignGroupSACSelectedCountriesSelector",
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "adsRegulatedCategoryGetCategoryDisableMessageMap",
    "adsRegulatedCategoryIsHECRegulatedCategory",
    "adsUEditorCampaignGroupPublishStatusSelector",
    "adsUEditorCampaignGroupSelectedRegulatedCategoriesSetSelector",
    "adsUEditorSelectedCampaignGroupIDsSelector",
    "emptyArray",
    "isFalsey",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("AdsSpecialAdCategoryVisibilityProvider").toFluxSelector(),
      c = (s = o("AdsUEditorSelectors")).campaignGroup.bulkByAccessorToJS(
        function (e) {
          return e.special_ad_categories;
        },
      ),
      d = (e = r("adsCreateSelector"))(
        [
          s.campaignGroup.bulkByAccessorToJS(function (e) {
            return e.special_ad_categories;
          }),
        ],
        function (t) {
          return t instanceof r("AdsMixedValue");
        },
        { name: i.id + ".mixedSelectedRegulatedCategorySelector" },
      ),
      m = e(
        [
          s.campaignGroup.bulkByAccessorToJS(function (e) {
            return e.special_ad_categories;
          }),
        ],
        function (t) {
          return o(
            "AdsUEditorCampaignGroupRegulatedCategorySelectorsUtils",
          ).isSelectedRegulatedCategory(t);
        },
        { name: i.id + ".isSelectedRegulatedCategorySelector" },
      ),
      p = e(
        [
          u,
          r("AdsAccountStore").getSelectedAccountID,
          o("adsUEditorCampaignGroupSelectedRegulatedCategoriesSetSelector")
            .adsUEditorCampaignGroupSelectedRegulatedCategoriesSetSelector,
          o("adsUEditorSelectedCampaignGroupIDsSelector")
            .adsUEditorSelectedCampaignGroupIDsSelector,
          o("adsUEditorCampaignGroupPublishStatusSelector")
            .adsUEditorCampaignGroupPublishStatusSelector,
        ],
        function (t, n, r, o, a) {
          return _(t, n, r, o, a);
        },
        { name: i.id + ".adsSpecialAdCategoryListSelector" },
      );
    function _(e, t, n, a, i) {
      if (t == null) return [];
      var l = e.get(t),
        s = l.match({
          loaded: function (t) {
            return o(
              "AdsRegulatedCategoryConvertAdproRegulatedCategory",
            ).adsRegulatedCategoryConvertAdproRegulatedCategory(t);
          },
          loading: function () {
            return r("emptyArray");
          },
          error: function () {
            return r("emptyArray");
          },
        }),
        u = a.every(function (e) {
          var t;
          return (t = i.get(e)) == null ? void 0 : t.hasDraft;
        }),
        c = a.every(function (e) {
          var t;
          return (t = i.get(e)) == null ? void 0 : t.isNew;
        }),
        d = u && c,
        m = s.map(function (e) {
          return e === r("AdsRegulatedCategory").FINANCIAL_PRODUCTS_SERVICES
            ? r("AdsRegulatedCategory").CREDIT
            : e;
        });
      return n.includes(r("AdsRegulatedCategory").CREDIT) && !d ? m : s;
    }
    var f = e(
        [
          s.campaignGroup.bulkByAccessorToJS(function (e) {
            return e.special_ad_categories;
          }),
        ],
        function (t) {
          return t.getValues().some(function (e) {
            return (
              e &&
              e.some(function (e) {
                return r("adsRegulatedCategoryIsHECRegulatedCategory")(e);
              })
            );
          });
        },
        { name: i.id + ".isSelectedHECRegulatedCategorySelector" },
      ),
      g = e(
        [
          f,
          o("AdsUEditorCampaignGroupSACSelectedCountriesSelector")
            .selectedSACCountriesSelector,
        ],
        function (t, n) {
          return t && n.includes("US");
        },
        { name: i.id + ".isSelectedHECRegulatedCategoryInUSSelector" },
      ),
      h = e(
        [
          s.campaignGroup.bulkByAccessorToJS(function (e) {
            var t;
            return (t = e.promoted_object) == null
              ? void 0
              : t.product_catalog_id;
          }),
          s.campaignGroup.bulkByAccessorToJS(function (e) {
            return e.is_pca_unified;
          }),
        ],
        function (t, n) {
          return t.getValues().some(function (e, t) {
            return !r("isFalsey")(e) && n.getValueForIndex(t) !== !0;
          });
        },
        { name: i.id + ".isCatalogPromotedByAnyCampaignGroupSelector" },
      );
    function y(e, t, n, a, i) {
      var l = r("adsRegulatedCategoryGetCategoryDisableMessageMap")(e, n, a, i);
      return t
        ? l.set(
            r("AdsRegulatedCategory").ISSUES_ELECTIONS_POLITICS,
            o("AdsRegulatedCategoryConstants")
              .SIEP_DISABLE_MESSAGE_MIXED_POLITICAL_CAMPAIGN,
          )
        : l;
    }
    ((l.bulkSelectedRegulatedCategoriesSelector = c),
      (l.mixedSelectedRegulatedCategorySelector = d),
      (l.isSelectedRegulatedCategorySelector = m),
      (l.adsSpecialAdCategoryListSelector = p),
      (l.isSelectedHECRegulatedCategorySelector = f),
      (l.isSelectedHECRegulatedCategoryInUSSelector = g),
      (l.isCatalogPromotedByAnyCampaignGroupSelector = h),
      (l.adsUEditorCampaignGroupDisabledRegulatedCategoryMap = y));
  },
  98,
);
