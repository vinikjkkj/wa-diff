__d(
  "hasDateChangeRelatedFilter",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set([
      "CAMPAIGN_GROUP_SELECTED",
      "CAMPAIGN_SELECTED",
      "ADGROUP_SELECTED",
      "SEARCH_BY_CAMPAIGN_GROUP_ID",
      "SEARCH_BY_CAMPAIGN_ID",
      "SEARCH_BY_ADGROUP_ID",
      "CAMPAIGN_GROUP_DELIVERY_INFO",
      "CAMPAIGN_DELIVERY_INFO",
      "ADGROUP_DELIVERY_INFO",
      "CAMPAIGN_GROUP_DELIVERY_STATUS",
      "CAMPAIGN_DELIVERY_STATUS",
      "ADGROUP_DELIVERY_STATUS",
      "FUNDING_PAGE_ID",
      "PRODUCT_CATALOG_ID",
      "SEARCH_BY_CAMPAIGN_GROUP_NAME",
      "SEARCH_BY_CAMPAIGN_NAME",
      "SEARCH_BY_ADGROUP_NAME",
      "OBJECTIVE",
    ]);
    function l(t) {
      return t
        ? !t.values.every(function (t) {
            return e.has(t.field.name);
          })
        : !1;
    }
    i.default = l;
  },
  66,
);
