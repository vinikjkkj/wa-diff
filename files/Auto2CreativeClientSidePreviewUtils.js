__d(
  "Auto2CreativeClientSidePreviewUtils",
  [
    "AdsRenderSpecDefaults",
    "ApiAdObjectTypes",
    "Auto2CreativePreviewPlacementGroups",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "/images/404/thumb_grey_bg-2x.png",
      s = new Map(),
      u = function (t) {
        var e =
          t === "horizontal"
            ? "HORIZONTAL"
            : t === "square"
              ? "SQUARE"
              : t === "vertical"
                ? "FULLSCREEN_VERTICAL"
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        t,
                    );
                  })();
        for (var n of o("Auto2CreativePreviewPlacementGroups")
          .ASPECT_RATIO_GROUP_TO_PLACEMENT_GROUPS[t])
          s.set(n, e);
      };
    for (var c of Object.keys(
      o("Auto2CreativePreviewPlacementGroups")
        .ASPECT_RATIO_GROUP_TO_PLACEMENT_GROUPS,
    ))
      u(c);
    var d = new Map();
    for (var m of o("Auto2CreativePreviewPlacementGroups").PREVIEW_PLACEMENTS) {
      var p = m.group,
        _ = m.key,
        f = s.get(p);
      f != null && d.set(_, f);
    }
    function g(e, t) {
      var n,
        r = (n = e.creativeCrops) == null ? void 0 : n.entries;
      if (r == null || r.length === 0) return null;
      var o = d.get(t);
      if (o == null) return null;
      var a = r.find(function (e) {
        return e.aspect_ratio_type === o;
      });
      return a == null
        ? null
        : [
            [a.top_left_x, a.top_left_y],
            [a.bottom_right_x, a.bottom_right_y],
          ];
    }
    function h(e) {
      var t;
      return (t = e == null ? void 0 : e.find(Boolean)) != null ? t : null;
    }
    function y(e) {
      switch (e) {
        case "Shop Now":
          return "SHOP_NOW";
        case "Shop Collection":
          return "SHOP_NOW";
        case "Shop Gifts":
          return "SHOP_NOW";
        case "Learn More":
          return "LEARN_MORE";
        default:
          return null;
      }
    }
    function C(e, t, n) {
      var r,
        a,
        i,
        l,
        s,
        u,
        c,
        d = (r = (a = e.adTexts) == null ? void 0 : a.cta) != null ? r : null;
      return babelHelpers.extends(
        {},
        o("AdsRenderSpecDefaults").EMPTY_RENDER_SPEC_CARD,
        {
          callToAction: d,
          callToActionAppDestination: null,
          callToActionType: y(d),
          description:
            (i = h((l = e.adTexts) == null ? void 0 : l.descriptions)) != null
              ? i
              : "",
          destinationLink: e.destinationUrl,
          displayURL: e.destinationUrl,
          headline:
            (s = h((u = e.adTexts) == null ? void 0 : u.headlines)) != null
              ? s
              : "",
          hasDynamicLeadGenCallToAction: !1,
          media: {
            backgroundColor: null,
            imageCrops: g(e, t),
            imageURL: (c = e.imageUrl) != null ? c : e.thumbnailUrl,
            videoURL: n != null ? n : null,
          },
        },
      );
    }
    function b(t, n, o, a) {
      var i, l, s, u, c, d;
      return {
        cards: [C(t, o, a)],
        igStoryRenderProps: null,
        isCanvasAd: !1,
        mediaFormat: t.description === "VIDEO" && a != null ? "VIDEO" : "IMAGE",
        message:
          (i = h((l = t.adTexts) == null ? void 0 : l.primary_texts)) != null
            ? i
            : "",
        messageEntityRanges: [],
        objectType: r("ApiAdObjectTypes").SHARE,
        profiles: {
          instagram: {
            imageURL: (s = n.igProfilePictureUrl) != null ? s : e,
            name: (u = n.igProfileTitle) != null ? u : "Instagram account",
            verified: !1,
          },
          page: {
            imageURL: (c = n.pageProfilePictureUrl) != null ? c : e,
            name: (d = n.pageProfileTitle) != null ? d : "Facebook Page",
            verified: !1,
          },
        },
      };
    }
    function v(e) {
      switch (e) {
        case "instagram_feed":
          return "INSTAGRAM_STANDARD";
        case "instagram_stories":
          return "INSTAGRAM_STORY";
        case "instagram_reels":
          return "INSTAGRAM_REELS";
        case "instagram_search_grid":
          return "INSTAGRAM_SEARCH_GRID";
        default:
          return "INSTAGRAM_STANDARD";
      }
    }
    var S = {
      facebook_feed: "MOBILE_FEED_STANDARD",
      facebook_profile_feed: "FACEBOOK_PROFILE_FEED_MOBILE",
      facebook_reels: "FACEBOOK_REELS_MOBILE",
      instagram_explore_home: "INSTAGRAM_EXPLORE_GRID_HOME",
      instagram_feed: "INSTAGRAM_STANDARD",
      instagram_profile_reels: "INSTAGRAM_PROFILE_REELS",
      instagram_reels: "INSTAGRAM_REELS",
      instagram_search_grid: "INSTAGRAM_SEARCH_GRID",
      instagram_shop: "INSTAGRAM_SHOP",
      instagram_stories: "INSTAGRAM_STORY",
    };
    function R(e, t) {
      var n = new Set();
      for (var r of o("Auto2CreativePreviewPlacementGroups").PREVIEW_PLACEMENTS)
        (r.requiresCreativeStepV2 === !0 && !e) ||
          (t != null && !t.has(r.key)) ||
          n.add(S[r.key]);
      return Array.from(n);
    }
    ((l.buildAuto2RenderSpec = b),
      (l.getPreviewApiFormat = v),
      (l.getAuto2PortablePreviewApiFormats = R));
  },
  98,
);
