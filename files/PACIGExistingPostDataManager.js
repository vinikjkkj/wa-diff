__d(
  "PACIGExistingPostDataManager",
  ["AdsGraphAPI", "FBLogger", "isTruthy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.convertPostToAssetFeedSpec = function (t, n, a, l) {
            l === void 0 && (l = !1);
            var e = [
              "asset_feed_spec_from_instagram_media",
              "source_instagram_media_id(" + n + ")",
            ];
            if (r("isTruthy")(a) && r("isTruthy")(a.type)) {
              var s = JSON.stringify(a);
              e.push("call_to_action(" + s + ")");
            }
            l === !0 && e.push("use_posts_ad_format(true)");
            var u = e.join(".");
            return o("AdsGraphAPI")
              .get(i.id)
              .adaccount(t)
              .get({ fields: u })
              .then(
                function (e) {
                  return e.asset_feed_spec_from_instagram_media;
                },
                function (e) {
                  r("FBLogger")("ads")
                    .catching(e)
                    .mustfix("Fetching IG post to asset_feed_spec error");
                },
              );
          }),
          e
        );
      })(),
      s = new e();
    l.default = s;
  },
  98,
);
