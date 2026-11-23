__d(
  "AdsPETypeaheadDeliveryStatusV2FilterSearchableEntry",
  [
    "AdsObjectTypes",
    "AdsPEFilterFieldConfig",
    "AdsPEFilterFields",
    "AdsPETypeaheadDeliveryStatusV2BaseFilterSearchableEntry",
    "AdsPETypeaheadSearchableEntryTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        ((e = {}),
        (e[r("AdsObjectTypes").CAMPAIGN_GROUP] =
          "CAMPAIGN_GROUP_DELIVERY_STATUS"),
        (e[r("AdsObjectTypes").CAMPAIGN] = "CAMPAIGN_DELIVERY_STATUS"),
        (e[r("AdsObjectTypes").ADGROUP] = "ADGROUP_DELIVERY_STATUS"),
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
            return o("AdsPETypeaheadSearchableEntryTypes").DELIVERY_STATUS_V2;
          }),
          (t.create = function (n, a) {
            a === void 0 && (a = "");
            var e = r(
              "AdsPETypeaheadDeliveryStatusV2BaseFilterSearchableEntry",
            ).getTitle(n);
            return new t({
              auxiliaryData: n,
              title: e,
              uniqueID:
                a +
                "delivery_status_filter_v2_" +
                n.objectType +
                "_" +
                n.deliveryStatus,
              type: o("AdsPETypeaheadSearchableEntryTypes").DELIVERY_STATUS_V2,
            });
          }),
          t
        );
      })(r("AdsPETypeaheadDeliveryStatusV2BaseFilterSearchableEntry"));
    l.default = u;
  },
  98,
);
