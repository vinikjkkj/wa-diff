__d(
  "AdsMgmtCleanUnsupportedFilterInFilterSet",
  [
    "AdsGenericFilter",
    "AdsGenericFilterFieldType",
    "AdsGenericFilterSet",
    "AdsPEFilterFields",
    "customMetricFilteringUtils",
    "enumUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      var e = new Set();
      return (
        t.forEach(function (t) {
          switch (t) {
            case "active":
              e.add("active");
              break;
            case "inactive":
              e.add("off");
              break;
            case "permanently_deleted":
              e.add("deleted");
              break;
            case "archived":
            case "archived_in_draft":
              e.add("archived");
              break;
            case "completed":
            case "recently_completed":
            case "limited":
              e.add("inactive");
              break;
            case "not_delivering":
              (e.add("error"), e.add("inactive"));
              break;
            case "pending_review":
            case "scheduled":
            case "not_published":
              e.add("pending");
              break;
            case "rejected":
            case "recently_rejected":
              e.add("error");
              break;
          }
        }),
        Array.from(e)
      );
    };
    function s(t) {
      var n = t.values.filter(function (e) {
        var t = e.field;
        return (
          o("enumUtils").coerceKey(t.name, r("AdsPEFilterFields")) != null ||
          o("customMetricFilteringUtils").isValidCustomMetricWithLevel(t.name)
        );
      });
      if (
        ((n = n
          .filter(function (e) {
            return (
              (!Array.isArray(e.value) && e.value != null) ||
              (Array.isArray(e.value) && e.value.length > 0)
            );
          })
          .map(function (e) {
            if (
              typeof e.value == "string" &&
              e.field.type === r("AdsGenericFilterFieldType").NUMBER
            ) {
              var t = parseFloat(e.value);
              return new (r("AdsGenericFilter"))(
                e.getField(),
                e.operator,
                isNaN(t) ? null : t,
                e.extraRenderingProps,
                e.prefixes,
              );
            }
            return e;
          })),
        (n = n.map(function (t) {
          var n;
          switch (t.field.key) {
            case r("AdsPEFilterFields").CAMPAIGN_GROUP_DELIVERY_INFO.key:
              n = r("AdsPEFilterFields").CAMPAIGN_GROUP_DELIVERY_STATUS;
              break;
            case r("AdsPEFilterFields").CAMPAIGN_DELIVERY_INFO.key:
              n = r("AdsPEFilterFields").CAMPAIGN_DELIVERY_STATUS;
              break;
            case r("AdsPEFilterFields").ADGROUP_DELIVERY_INFO.key:
              n = r("AdsPEFilterFields").ADGROUP_DELIVERY_STATUS;
              break;
            default:
              return t;
          }
          return t.operator === "IN" && Array.isArray(t.value)
            ? new (r("AdsGenericFilter"))(
                n,
                "IN",
                e(t.value),
                t.extraRenderingProps,
                t.prefixes,
              )
            : t;
        })),
        n.length > 0)
      )
        return new (r("AdsGenericFilterSet"))(n);
    }
    l.default = s;
  },
  98,
);
