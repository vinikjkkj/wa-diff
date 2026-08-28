__d(
  "adsCampaignBrandSafetyConfigAccessorsFactory",
  ["AdsAdObjectsAccessorUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n;
      return babelHelpers.extends(
        {},
        (n = o("AdsAdObjectsAccessorUtils")).baseFieldAccessorFactory(e, t),
        {
          comment_moderation_filter: n.basicFieldAccessorFactory(
            e,
            t,
            "comment_moderation_filter",
          ),
          fb_comment_moderation_filter: n.basicFieldAccessorFactory(
            e,
            t,
            "fb_comment_moderation_filter",
          ),
          ig_comment_moderation_filter: n.basicFieldAccessorFactory(
            e,
            t,
            "ig_comment_moderation_filter",
          ),
          threads_comment_moderation_filter: n.basicFieldAccessorFactory(
            e,
            t,
            "threads_comment_moderation_filter",
          ),
        },
      );
    }
    l.default = e;
  },
  98,
);
