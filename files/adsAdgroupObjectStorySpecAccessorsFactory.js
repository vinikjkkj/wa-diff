__d(
  "adsAdgroupObjectStorySpecAccessorsFactory",
  [
    "AdsAdObjectsAccessorUtils",
    "ApiObjectStorySpecProductFields",
    "adsAdgroupCreativeLinkDataAccessorsFactory",
    "adsAdgroupCreativePhotoDataAccessorsFactory",
    "adsAdgroupCreativeTemplateDataAccessorsFactory",
    "adsAdgroupCreativeVideoDataAccessorsFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          instagram_actor_id: n.basicFieldAccessorFactory(
            e,
            t,
            "instagram_actor_id",
          ),
          instagram_user_id: n.basicFieldAccessorFactory(
            e,
            t,
            "instagram_user_id",
          ),
          link_data: r("adsAdgroupCreativeLinkDataAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.link_data;
            },
            [].concat(t, ["link_data"]),
          ),
          page_id: n.basicFieldAccessorFactory(e, t, "page_id"),
          photo_data: r("adsAdgroupCreativePhotoDataAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.photo_data;
            },
            [].concat(t, ["photo_data"]),
          ),
          template_data: r("adsAdgroupCreativeTemplateDataAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.template_data;
            },
            [].concat(t, ["template_data"]),
          ),
          text_data: {},
          threads_user_id: n.basicFieldAccessorFactory(e, t, "threads_user_id"),
          video_data: r("adsAdgroupCreativeVideoDataAccessorsFactory")(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.video_data;
            },
            [].concat(t, ["video_data"]),
          ),
          product_data: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.product_data;
            },
            [].concat(t, ["product_data"]),
            Object.values(r("ApiObjectStorySpecProductFields")),
          ),
          whats_app_business_asset_id: n.basicFieldAccessorFactory(
            e,
            t,
            "whats_app_business_asset_id",
          ),
          whats_app_business_phone_number_id: n.basicFieldAccessorFactory(
            e,
            t,
            "whats_app_business_phone_number_id",
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
