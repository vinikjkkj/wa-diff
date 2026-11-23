__d(
  "AdsPETypeaheadDeliveryStatusFilterSearchableEntry",
  [
    "AdsObjectTypes",
    "AdsPEFilterFieldConfig",
    "AdsPEFilterFields",
    "AdsPETypeaheadDeliveryStatusBaseFilterSearchableEntry",
    "AdsPETypeaheadSearchableEntryTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        ((e = {}),
        (e[r("AdsObjectTypes").CAMPAIGN_GROUP] =
          "CAMPAIGN_GROUP_DELIVERY_INFO"),
        (e[r("AdsObjectTypes").CAMPAIGN] = "CAMPAIGN_DELIVERY_INFO"),
        (e[r("AdsObjectTypes").ADGROUP] = "ADGROUP_DELIVERY_INFO"),
        (e.LOWEST_LEVEL = ""),
        e),
      u = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getFilterFieldType = function (t) {
            return s[t];
          }),
          (n.getFilterField = function (t) {
            return r("AdsPEFilterFields")[t];
          }),
          (n.getFilterFieldsConfig = function () {
            return r("AdsPEFilterFieldConfig");
          }),
          (n.getEntryType = function () {
            return o("AdsPETypeaheadSearchableEntryTypes").DELIVERY_STATUS;
          }),
          (t.create = function (n) {
            var e = r(
              "AdsPETypeaheadDeliveryStatusBaseFilterSearchableEntry",
            ).getTitle(n);
            return new t({
              auxiliaryData: n,
              title: e,
              uniqueID:
                "delivery_status_filter_" +
                n.objectType +
                "_" +
                n.deliveryStatus,
              type: o("AdsPETypeaheadSearchableEntryTypes").DELIVERY_STATUS,
            });
          }),
          t
        );
      })(r("AdsPETypeaheadDeliveryStatusBaseFilterSearchableEntry"));
    l.default = u;
  },
  98,
);
