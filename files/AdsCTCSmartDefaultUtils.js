__d(
  "AdsCTCSmartDefaultUtils",
  ["AdsInterfacesLogger", "AdsInterfacesRouter", "AdsPromotedObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function () {
        r("AdsInterfacesLogger").logOnce({
          eventName: "ctc_am_smart_defaulting_source_contains_call",
        });
      },
      s = function () {
        var e = r("AdsInterfacesRouter").get().getTypedParams(),
          t = e.nav_entry_point,
          n = e.recommendation_type;
        return t === "syd_guidance_hub" && n === "website_and_calls_upsell"
          ? {
              conversion_location: r("AdsPromotedObjectTypes")
                .WEBSITE_AND_PHONE_CALL,
              source: "website_and_calls_pcr_source",
            }
          : null;
      };
    ((l.logCTCSmartDefaultingSourceContainsCall = e),
      (l.getDefaultDataFromWebsiteAndCallsPcrSource = s));
  },
  98,
);
