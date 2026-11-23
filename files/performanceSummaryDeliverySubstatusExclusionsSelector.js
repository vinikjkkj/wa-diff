__d(
  "performanceSummaryDeliverySubstatusExclusionsSelector",
  [
    "adsCreateSelector",
    "adsMgmtRecommendationsQEFilteredWithoutLogDangerousToUseSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map([
        ["aggregated_budget_limited", "budget_limited_learning_fail"],
      ]),
      s = new Set(e.values()),
      u = r("adsCreateSelector")(
        [r("adsMgmtRecommendationsQEFilteredWithoutLogDangerousToUseSelector")],
        function (n) {
          var t = new Map();
          if (n.hasValueWithoutError()) {
            var r = n.getValue();
            return (
              r == null ||
                r.data.forEach(function (n) {
                  var r = n.recommendation_type;
                  if (e.has(r)) {
                    var o = e.get(r);
                    if (o != null) {
                      var a = n.ad_object_ids,
                        i = t.get(o);
                      i != null ? i.add.apply(i, a) : t.set(o, new Set(a));
                    }
                  }
                }),
              {
                deliverySubstatusToIDExclusionMap: t,
                deliverySubstatusExclusionSet: new Set(),
              }
            );
          }
          return {
            deliverySubstatusToIDExclusionMap: t,
            deliverySubstatusExclusionSet: s,
          };
        },
        {
          name: i.id + ".performanceSummaryDeliverySubstatusExclusionsSelector",
        },
      ),
      c = u;
    l.default = c;
  },
  98,
);
