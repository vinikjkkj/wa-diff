__d(
  "LWICometPlacementAssetUtils",
  ["LWICometCTAUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      FEED: {
        facebook_positions: [
          "feed",
          "instream_video",
          "marketplace",
          "video_feeds",
        ],
        instagram_positions: ["stream", "explore"],
        publisher_platforms: ["facebook", "instagram"],
      },
      INSTANT_ARTICLES: {
        facebook_positions: ["instant_article", "search"],
        publisher_platforms: ["facebook"],
      },
      STORIES: {
        facebook_positions: ["story"],
        instagram_positions: ["story"],
        publisher_platforms: ["facebook", "instagram"],
      },
    };
    function s(e) {
      var t = e.asset_feed_spec,
        n = e.object_story_spec;
      if (!(n == null || t == null)) {
        var r = u(t);
        return babelHelpers.extends({}, n, { link_data: r });
      }
    }
    function u(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        s,
        u,
        c = e.bodies,
        d = e.call_to_actions,
        m = e.descriptions,
        p = e.images,
        _ = e.link_urls,
        f = e.titles,
        g =
          d != null && d.length > 0
            ? o("LWICometCTAUtils").getTypedLinkDataCTAfromAFS(d[0])
            : void 0;
      return {
        call_to_action: g,
        description: m == null || (t = m[0]) == null ? void 0 : t.text,
        image_hash: p == null || (n = p[0]) == null ? void 0 : n.hash,
        link:
          (r = _ == null || (a = _[0]) == null ? void 0 : a.website_url) != null
            ? r
            : g == null || (i = g.value) == null
              ? void 0
              : i.link,
        message: c == null || (l = c[0]) == null ? void 0 : l.text,
        name: f == null || (s = f[0]) == null ? void 0 : s.text,
        picture: p == null || (u = p[0]) == null ? void 0 : u.url,
      };
    }
    function c(t, n) {
      var r,
        o,
        a = t.asset_customization_rules;
      if (a == null) return null;
      var i =
        (r = a.find(function (t) {
          var r,
            o = t.customization_spec;
          return o == null
            ? !1
            : ((r = o.facebook_positions) == null
                ? void 0
                : r.some(function (t) {
                    var r;
                    return (r = e[n].facebook_positions) == null
                      ? void 0
                      : r.some(function (e) {
                          return e === t;
                        });
                  })) === !0;
        })) == null
          ? void 0
          : r.image_label;
      if (i == null) return null;
      var l =
        (o = t.images) == null ||
        (o = o.find(function (e) {
          var t;
          return (
            ((t = e.adlabels) == null
              ? void 0
              : t.some(function (e) {
                  return e.name === (i == null ? void 0 : i.name);
                })) === !0
          );
        })) == null
          ? void 0
          : o.image_crops;
      return l != null ? JSON.stringify(l) : null;
    }
    ((l.getObjectStorySpecFromClientCreative = s),
      (l.getPlacementImageCropString = c));
  },
  98,
);
