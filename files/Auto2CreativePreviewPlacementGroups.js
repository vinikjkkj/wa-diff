__d(
  "Auto2CreativePreviewPlacementGroups",
  ["fbt", "FacebookReelsOverlayStoreUtils"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "all",
      u = "aspect_all";
    function c() {
      return [
        { label: s._(/*BTDS*/ ""), value: "all" },
        { label: s._(/*BTDS*/ ""), value: "feeds" },
        { label: s._(/*BTDS*/ ""), value: "stories_status_reels" },
        {
          label: o(
            "FacebookReelsOverlayStoreUtils",
          ).getInstreamPositionGroupFbt(),
          value: "in_stream_reels",
        },
        { label: s._(/*BTDS*/ ""), value: "search_results" },
        { label: s._(/*BTDS*/ ""), value: "messages" },
        { label: s._(/*BTDS*/ ""), value: "apps_and_sites" },
      ];
    }
    var d = {
        horizontal: new Set(),
        square: new Set(["feeds", "in_stream_reels", "search_results"]),
        vertical: new Set(["stories_status_reels", "apps_and_sites"]),
      },
      m = [
        { label: s._(/*BTDS*/ ""), value: "aspect_all" },
        { label: s._(/*BTDS*/ ""), value: "vertical" },
        { label: s._(/*BTDS*/ ""), value: "square" },
        { label: s._(/*BTDS*/ ""), value: "horizontal" },
      ];
    function p(e, t) {
      return (function (t) {
        if (t === "all" || t === "aspect_all") return !0;
        if (t === "vertical") return d.vertical.has(e);
        if (t === "square") return d.square.has(e);
        if (t === "horizontal") return d.horizontal.has(e);
        {
          var n = t;
          return e === n;
        }
      })(t);
    }
    var _ = [
        {
          group: "feeds",
          key: "facebook_feed",
          supportsVideo: !0,
          title: "Facebook Feed",
        },
        {
          group: "feeds",
          key: "facebook_profile_feed",
          supportsVideo: !0,
          title: "Facebook Profile Feed",
        },
        {
          group: "stories_status_reels",
          key: "facebook_reels",
          requiresCreativeStepV2: !0,
          supportsVideo: !0,
          title: "Facebook Reels",
        },
        {
          group: "feeds",
          key: "instagram_feed",
          supportsVideo: !0,
          title: "Instagram Feed",
        },
        {
          group: "stories_status_reels",
          key: "instagram_stories",
          supportsVideo: !0,
          title: "Instagram Stories",
        },
        {
          group: "stories_status_reels",
          key: "instagram_reels",
          supportsVideo: !0,
          title: "Instagram Reels",
        },
        {
          group: "stories_status_reels",
          key: "instagram_profile_reels",
          supportsVideo: !0,
          title: "Instagram Profile Reels",
        },
        {
          group: "feeds",
          key: "instagram_explore_home",
          supportsVideo: !0,
          title: "Instagram Explore",
        },
        {
          group: "search_results",
          key: "instagram_search_grid",
          supportsVideo: !1,
          title: "Instagram Search",
        },
        {
          group: "feeds",
          key: "instagram_shop",
          supportsVideo: !1,
          title: "Instagram Shop",
        },
      ],
      f = new Set(
        _.map(function (e) {
          return e.group;
        }),
      ),
      g = new Set(
        _.map(function (e) {
          return e.key;
        }),
      );
    function h() {
      return c().filter(function (t) {
        return t.value === e || f.has(t.value);
      });
    }
    function y(e) {
      if (e === "aspect_all") return !0;
      for (var t of d[e]) if (f.has(t)) return !0;
      return !1;
    }
    var C = m.filter(function (e) {
      return y(e.value);
    });
    function b(e) {
      var t = new Set(["aspect_all"]),
        n = function () {
          var n = r.value;
          if (n === "aspect_all") return 1;
          var o = _.some(function (t) {
            return p(t.group, e) && p(t.group, n);
          });
          o && t.add(n);
        };
      for (var r of m) n();
      return t;
    }
    ((l.DEFAULT_PLACEMENT_GROUP = e),
      (l.DEFAULT_ASPECT_RATIO_GROUP = u),
      (l.ASPECT_RATIO_GROUP_TO_PLACEMENT_GROUPS = d),
      (l.placementMatchesSelection = p),
      (l.PREVIEW_PLACEMENTS = _),
      (l.ALL_AUTO2_PREVIEW_PLACEMENT_KEYS = g),
      (l.getVisiblePreviewPlacementGroups = h),
      (l.VISIBLE_PREVIEW_ASPECT_RATIO_GROUPS = C),
      (l.getEnabledAspectRatioGroups = b));
  },
  226,
);
