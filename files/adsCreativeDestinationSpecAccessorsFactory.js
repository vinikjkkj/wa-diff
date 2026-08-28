__d(
  "adsCreativeDestinationSpecAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "adsCreativeGuidanceMetadataAccessorsFactory",
    "adsCreativeLiveVideoDestinationAccessorsFactory",
    "adsCreativeMessageDestinationAccessorsFactory",
    "adsCreativeNativeCommerceExperienceAccessorsFactory",
    "adsCreativeWebsiteDestinationAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return babelHelpers.extends(
        {},
        o("AdsAdObjectsAccessorUtils").baseFieldAccessorFactory(e, t),
        {
          destination_type: o(
            "AdsAdObjectsAccessorUtils",
          ).basicFieldAccessorFactory(e, t, "destination_type"),
          guidance_metadata: r("adsCreativeGuidanceMetadataAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.guidance_metadata;
            },
            [].concat(t, ["guidance_metadata"]),
          ),
          website: r("adsCreativeWebsiteDestinationAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.website;
            },
            [].concat(t, ["website"]),
          ),
          message_destination: r(
            "adsCreativeMessageDestinationAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.message_destination;
            },
            [].concat(t, ["message_destination"]),
          ),
          native_commerce_experience: r(
            "adsCreativeNativeCommerceExperienceAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.native_commerce_experience;
            },
            [].concat(t, ["native_commerce_experience"]),
          ),
          live_video_destination: r(
            "adsCreativeLiveVideoDestinationAccessorsFactory",
          )(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.live_video_destination;
            },
            [].concat(t, ["live_video_destination"]),
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
