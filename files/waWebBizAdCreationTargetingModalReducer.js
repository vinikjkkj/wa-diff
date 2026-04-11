__d(
  "waWebBizAdCreationTargetingModalReducer",
  ["FBImmer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
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
        }
      });
    }
    l.default = e;
  },
  98,
);
