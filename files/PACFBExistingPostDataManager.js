__d(
  "PACFBExistingPostDataManager",
  ["AdsGraphAPI", "FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {
          this.maybeFetchPACInternalPost = function (e, t) {
            var n = [
                "maybe_pac_internal_post_from_primary_post",
                "object_story_id(" + t + ")",
              ],
              a = n.join(".");
            return o("AdsGraphAPI")
              .get(i.id)
              .adaccount(e)
              .get({ fields: a })
              .then(
                function (e) {
                  return e.maybe_pac_internal_post_from_primary_post;
                },
                function (e) {
                  return (
                    r("FBLogger")("ads")
                      .catching(e)
                      .mustfix(
                        "Fetching internal PAC post to given post error",
                      ),
                    e
                  );
                },
              );
          };
        }
        var t = e.prototype;
        return (
          (t.convertPostToAssetFeedSpec = function (t, n, a) {
            var e = [
              "asset_feed_spec_from_existing_post",
              "object_story_id(" + n + ")",
            ];
            a != null && e.push("instagram_actor_id(" + a + ")");
            var l = e.join(".");
            return o("AdsGraphAPI")
              .get(i.id)
              .adaccount(t)
              .get({ fields: l })
              .then(
                function (e) {
                  return e.asset_feed_spec_from_existing_post;
                },
                function (e) {
                  return (
                    r("FBLogger")("ads")
                      .catching(e)
                      .mustfix("Fetching FB post to asset_feed_spec error"),
                    e
                  );
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
