__d(
  "AdsCLODefaultDestinationUtils",
  ["AdsInterfacesRouter", "AdsPromotedObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = r("AdsInterfacesRouter").get(),
        t = e.getParams(),
        n = t.nav_entry_point,
        o = t.recommendation_type;
      return n === "syd_guidance_hub" && o === "conversion_leads_optimization"
        ? {
            conversion_location: r("AdsPromotedObjectTypes").ON_AD,
            source: "clo_pcr_source",
          }
        : n === "syd_guidance_hub" &&
            o === "offsite_conversion_leads_optimization"
          ? {
              conversion_location: r("AdsPromotedObjectTypes").WEBSITE,
              source: "offsite_clo_pcr_source",
            }
          : null;
    }
    l.getDefaultDataFromCloPcrSource = e;
  },
  98,
);
