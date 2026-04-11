__d(
  "getWAWebBizAdCreationCreativeCarouselReducer",
  ["FBImmer", "LWICometAssetFeedSpecUtils", "WAWebMmsMediaTypes", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("FBImmer").produce(e, function (e) {
        var n = e.adgroupSpecs[e.selectedAdgroupID],
          a = n.assetFeedSpecPlus,
          i = n.creative;
        if (!(i == null || i.object_story_spec == null || a == null)) {
          var l = [];
          switch (t.type) {
            case "creative_carousel_reducer.set_carousel_cards":
              ((a.carousel_cards = []),
                (a.images = []),
                (a.videos = []),
                (a.ad_formats = ["CAROUSEL"]),
                t.carouselCardsData.forEach(function (e) {
                  if (
                    e.type ===
                    o("WAWebMmsMediaTypes").MEDIA_TYPES.NATIVE_AD_IMAGE
                  )
                    l.push({ images: [{ hash: e.hash, url: e.url }] });
                  else if (
                    e.type ===
                    o("WAWebMmsMediaTypes").MEDIA_TYPES.NATIVE_AD_VIDEO
                  )
                    l.push({
                      videos: [{ thumbnail_url: e.url, video_id: e.videoId }],
                    });
                  else
                    throw r("err")(
                      "Invalid ad media type: " +
                        e.type +
                        ". Expected 'ads-image' or 'ads-video'",
                    );
                }),
                (a.carousel_cards = l),
                l.length === 1 &&
                  o(
                    "LWICometAssetFeedSpecUtils",
                  ).convertCarouselCardsToSingleMediaFormat(a, i));
              break;
            case "creative_carousel_reducer.update_body_text":
              a.bodies = [{ text: t.bodyText }];
              break;
            case "creative_carousel_reducer.clear_carousel_cards":
              ((a.carousel_cards = []),
                (a.images = []),
                (a.videos = []),
                (a.ad_formats = ["CAROUSEL"]));
              break;
            case "creative_carousel_reducer.remove_carousel_card": {
              var s = a.carousel_cards;
              s != null && s.length > 1
                ? ((a.carousel_cards = s
                    .slice(0, t.cardIndex)
                    .concat(s.slice(t.cardIndex + 1))),
                  a.carousel_cards.length === 1 &&
                    o(
                      "LWICometAssetFeedSpecUtils",
                    ).convertCarouselCardsToSingleMediaFormat(a, i))
                : ((a.carousel_cards = []), (a.images = []), (a.videos = []));
              break;
            }
            case "creative_carousel_reducer.reorder_carousel_card": {
              var u = a.carousel_cards;
              if (u != null && u.length > 1) {
                var c = [].concat(u),
                  d = c.splice(t.fromIndex, 1),
                  m = d[0];
                (c.splice(t.toIndex, 0, m), (a.carousel_cards = c));
              }
              break;
            }
          }
        }
      });
      return [n];
    }
    l.default = e;
  },
  98,
);
