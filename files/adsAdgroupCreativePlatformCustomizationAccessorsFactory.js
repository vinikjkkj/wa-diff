__d(
  "adsAdgroupCreativePlatformCustomizationAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          caption_ids: n.basicListFieldAccessorFactory(e, t, "caption_ids"),
          image_crops: n.basicFieldAccessorFactory(e, t, "image_crops"),
          image_hash: n.basicFieldAccessorFactory(e, t, "image_hash"),
          image_url: n.basicFieldAccessorFactory(e, t, "image_url"),
          thumbnail_source: n.basicFieldAccessorFactory(
            e,
            t,
            "thumbnail_source",
          ),
          video_id: n.basicFieldAccessorFactory(e, t, "video_id"),
        },
      );
    }
    l.default = e;
  },
  98,
);
