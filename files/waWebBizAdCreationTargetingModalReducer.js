__d(
  "waWebBizAdCreationTargetingModalReducer",
  ["FBImmer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 18;
    function s(t, n) {
      if (((t.targeting_automation = { advantage_audience: n ? 1 : 0 }), n)) {
        var r, o, a;
        ((t.age_range = [
          Math.max((r = t.age_min) != null ? r : e, e),
          (o = t.age_max) != null ? o : 65,
        ]),
          (t.age_min = Math.min(
            25,
            Math.max((a = t.age_min) != null ? a : e, e),
          )),
          (t.age_max = 65),
          (t.targeting_optimization = "expansion_all"));
      } else
        (t.age_range != null &&
          ((t.age_min = t.age_range[0]),
          (t.age_max = t.age_range[1]),
          delete t.age_range),
          t.targeting_optimization === "expansion_all" &&
            (t.targeting_optimization = "none"));
    }
    function u(e, t) {
      return o("FBImmer").produce(e, function (e) {
        switch (t.type) {
          case "wa_web_biz_ad_creation_targeting_modal_reducer.update_genders":
            e.genders = [t.gender];
            break;
          case "wa_web_biz_ad_creation_targeting_modal_reducer.update_age_min":
            e.age_min = t.ageMin;
            break;
          case "wa_web_biz_ad_creation_targeting_modal_reducer.update_age_max":
            e.age_max = t.ageMax;
            break;
          case "wa_web_biz_ad_creation_targeting_modal_reducer.update_age_range":
            t.ageRange != null
              ? (e.age_range = t.ageRange)
              : delete e.age_range;
            break;
          case "wa_web_biz_ad_creation_targeting_modal_reducer.update_locations":
            e.geo_locations = t.geoLocations;
            break;
          case "wa_web_biz_ad_creation_targeting_modal_reducer.update_interests":
            e.flexible_spec = t.flexibleSpec;
            break;
          case "wa_web_biz_ad_creation_targeting_modal_reducer.update_targeting_automation":
            s(e, t.enabled);
            break;
        }
      });
    }
    l.default = u;
  },
  98,
);
