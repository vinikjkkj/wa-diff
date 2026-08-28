__d(
  "adsAdgroupMarketingMessageStructuredSpecAutoReplyAccessorsFactory",
  ["AdsAdObjectsAccessorUtils", "MarketingMessageButtonFields"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          text: n.basicFieldAccessorFactory(e, t, "text"),
          image_hash: n.basicFieldAccessorFactory(e, t, "image_hash"),
          video_id: n.basicFieldAccessorFactory(e, t, "video_id"),
          save_template: n.basicFieldAccessorFactory(e, t, "save_template"),
          template_name: n.basicFieldAccessorFactory(e, t, "template_name"),
          is_optimized_auto_reply: n.basicFieldAccessorFactory(
            e,
            t,
            "is_optimized_auto_reply",
          ),
          video_thumbnail_url: n.basicFieldAccessorFactory(
            e,
            t,
            "video_thumbnail_url",
          ),
          buttons: n.nonPrimitiveListFieldAccessorsFactory(
            function (t) {
              var n;
              return (n = e(t)) == null ? void 0 : n.buttons;
            },
            [].concat(t, ["buttons"]),
            Object.values(r("MarketingMessageButtonFields")),
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
