__d(
  "XCometProfileControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (t, n, r, o, a, i, l) {
    var e = r("jsRouteBuilder")(
        "/profile.php",
        Object.freeze({
          show_switched_toast: !1,
          show_switched_tooltip: !1,
          is_tour_dismissed: !1,
          is_tour_completed: !1,
          show_podcast_settings: !1,
          show_community_review_changes: !1,
          should_open_composer: !1,
          badge_type: "NEW_MEMBER",
          show_community_rollback_toast: !1,
          show_community_rollback: !1,
          show_follower_visibility_disclosure: !1,
        }),
        new Set([
          "show_switched_toast",
          "show_switched_tooltip",
          "is_tour_dismissed",
          "is_tour_completed",
          "show_podcast_settings",
          "show_community_review_changes",
          "should_open_composer",
          "show_community_rollback_toast",
          "show_community_rollback",
          "show_follower_visibility_disclosure",
        ]),
      ),
      s = e;
    l.default = s;
  },
  98,
);
