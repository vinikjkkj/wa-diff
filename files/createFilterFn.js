__d(
  "createFilterFn",
  [
    "invariant",
    "AdsPEFilterFields",
    "adsMgmtFilterFnCreators",
    "emptyFunction",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c =
        ((e = {}),
        (e.CAMPAIGN_GROUP_DELIVERY_INFO = (u = o(
          "adsMgmtFilterFnCreators",
        )).createDeliveryInfoFilterFn),
        (e.CAMPAIGN_DELIVERY_INFO = u.createDeliveryInfoFilterFn),
        (e.ADGROUP_DELIVERY_INFO = u.createDeliveryInfoFilterFn),
        (e.CAMPAIGN_GROUP_DELIVERY_STATUS = u.createDeliveryStatusFilterFn),
        (e.CAMPAIGN_DELIVERY_STATUS = u.createDeliveryStatusFilterFn),
        (e.ADGROUP_DELIVERY_STATUS = u.createDeliveryStatusFilterFn),
        (e.LEARNING_PHASE_STATUS = u.createLearningPhaseStatusFilterFn),
        (e.SEARCH_BY_LABEL = u.createLabelFilterFn),
        (e.SEARCH_BY_TOPLINE = u.createToplineFilterFn),
        (e.CAMPAIGN_GROUP_CHANGED = u.createChangedFilterFn),
        (e.CAMPAIGN_CHANGED = u.createChangedFilterFn),
        (e.ADGROUP_CHANGED = u.createChangedFilterFn),
        (e.CAMPAIGN_GROUP_START_TIME = u.createStartTimeFilterFn),
        (e.CAMPAIGN_START_TIME = u.createStartTimeFilterFn),
        (e.CAMPAIGN_GROUP_END_TIME = u.createEndTimeFilterFn),
        (e.CAMPAIGN_END_TIME = u.createEndTimeFilterFn),
        (e.OBJECTIVE = u.createObjectivesFilterFn),
        (e.CONVERSION_LOCATION = u.createConversionLocationFn),
        (e["adset.placement.page_types"] = u.createPlacementFilterFn),
        (e.CAMPAIGN_GROUP_SELECTED = u.createSelectedFilterFn),
        (e.CAMPAIGN_SELECTED = u.createSelectedFilterFn),
        (e.ADGROUP_SELECTED = u.createSelectedFilterFn),
        (e.FUNDING_PAGE_ID = u.createIDFilterFn),
        (e.SEARCH_BY_CAMPAIGN_GROUP_NAME = u.createNameFilterFn),
        (e.SEARCH_BY_CAMPAIGN_NAME = u.createNameFilterFn),
        (e.SEARCH_BY_ADGROUP_NAME = u.createNameFilterFn),
        (e.SEARCH_BY_CAMPAIGN_GROUP_ID = u.createIDFilterFn),
        (e.SEARCH_BY_CAMPAIGN_GROUP_IDS = u.createIDsFilterFn),
        (e.SEARCH_BY_CAMPAIGN_ID = u.createIDFilterFn),
        (e.SEARCH_BY_CAMPAIGN_IDS = u.createIDsFilterFn),
        (e.SEARCH_BY_ADGROUP_ID = u.createIDFilterFn),
        (e.SEARCH_BY_ADGROUP_IDS = u.createIDsFilterFn),
        (e.CAMPAIGN_GROUP_TYPE = u.createCampaignGroupTypeFilterFn),
        (e.PRODUCT_CATALOG_ID = u.createProductCatalogIDFilterFn),
        (e.HAS_PRODUCT_CATALOG_ID = u.createHasProductCatalogIDFilterFn),
        (e.IS_MESSAGE_CAMPAIGN = u.createIsMessageCampaignFilterFn),
        (e.CAMPAIGN_GROUP_ACTION_TYPES = u.createDraftFilterFn),
        (e.CAMPAIGN_ACTION_TYPES = u.createDraftFilterFn),
        (e.ADGROUP_ACTION_TYPES = u.createDraftFilterFn),
        e);
    function d(e) {
      var t = e.field,
        n = e.operator,
        o = e.value;
      r("AdsPEFilterFields")[t] == null && s(0, 28301, t);
      var a = c[t];
      return a != null ? a(n, o) : r("emptyFunction").thatReturnsFalse;
    }
    l.default = d;
  },
  98,
);
