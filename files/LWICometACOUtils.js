__d(
  "LWICometACOUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "USER_ENROLLED_NON_DCO",
      l = "USER_ENROLLED_LWI_ACO",
      s = [
        "INSTAGRAM_REELS",
        "INSTAGRAM_STORY",
        "INSTAGRAM_STANDARD",
        "MOBILE_FEED_STANDARD",
      ];
    function u(e) {
      return (e === void 0 && (e = !1), !e);
    }
    function c(e) {
      e.authorization_category !== "POLITICAL"
        ? (e.degrees_of_freedom_spec = {
            degrees_of_freedom_type: "USER_ENROLLED_LWI_ACO",
          })
        : (e.degrees_of_freedom_spec = null);
    }
    function d(e, t) {
      var n = t.asset_feed_spec;
      e == null || e.authorization_category !== "POLITICAL"
        ? (t.degrees_of_freedom_spec = {
            degrees_of_freedom_type: "USER_ENROLLED_LWI_ACO",
          })
        : ((e.degrees_of_freedom_spec = null),
          (n == null ? void 0 : n.audios) != null && (n.audios = null));
    }
    ((i.LWI_ACO_FLAG_V1 = e),
      (i.LWI_ACO_FLAG_V2 = l),
      (i.ADS_CREATIVE_OPTIMIZATION_INFO_ALLOWED_FORMATS = s),
      (i.inACOExperimentEnable = u),
      (i.setCreativeDegreesOfFreedomType = c),
      (i.setClientCreativeDegreesOfFreedomType = d));
  },
  66,
);
