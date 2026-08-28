__d(
  "adsShouldDefaultCTXFromGuidanceSourceInEngagementUtil",
  ["AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      t === void 0 && (t = !1);
      var n = t === !0 ? "withoutLogging" : "withLogging";
      return (
        r("AdsInterfacesLogger").log({
          eventName: "ads_ctx_guidance_source_default_conversion_location",
          data: { source: n },
        }),
        !0
      );
    }
    l.default = e;
  },
  98,
);
