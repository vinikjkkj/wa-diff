__d(
  "AdsCampaignBudgetODAXMigratedPluginResolver",
  [
    "AdsCampaignBudgetODAXMigratedPluginType",
    "AdsCampaignBudgetODAXMigratedPlugins",
    "AdsCampaignBudgetPluginResolver",
    "AdsInterfacesLogger",
    "adsMemoizeWithArgs",
    "adsMultiPivotPluginResolverFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsMultiPivotPluginResolverFactory")(function () {
        return n("AdsCampaignBudgetODAXMigratedPlugins").getArray();
      }, o("AdsCampaignBudgetODAXMigratedPluginType").order),
      s = {
        resolve: r("adsMemoizeWithArgs")(
          function (t) {
            var n = e.resolve(t),
              o = r("AdsCampaignBudgetPluginResolver").resolve({
                destinationType: t.destinationType,
                objective: t.objective,
                promotedObjectType: t.promotedObjectType,
              });
            if (n.originalKey !== o.key) {
              var a;
              r("AdsInterfacesLogger").log({
                eventName: "pre_odax_objective_deprecation_mismatch",
                data:
                  ((a = {}),
                  (a.component_name = i.id),
                  (a.message = JSON.stringify(t)),
                  (a.new_value = n.key),
                  (a.old_value = o.key),
                  a),
              });
            }
            return o;
          },
          u,
          i.id + ".resolve",
        ),
      };
    function u(e) {
      var t, n, r;
      return (
        ((t = e.objective) != null ? t : "") +
        "|" +
        e.promotedObjectType +
        "|" +
        ((n = e.destinationType) != null ? n : "") +
        "|" +
        ((r = e.optimizationGoal) != null ? r : "") +
        "|" +
        (e.hasCatalogId === !0 ? "t" : "f") +
        "}"
      );
    }
    var c = s;
    l.default = c;
  },
  98,
);
