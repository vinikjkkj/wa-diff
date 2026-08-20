__d(
  "XCometProfileVanityControllerRouteBuilder",
  ["jsRouteBuilder"],
  function (t, n, r, o, a, i, l) {
    var e = r("jsRouteBuilder")(
        "/{vanity}/",
        Object.freeze({
          should_open_composer: !1,
          show_switched_toast: !1,
          show_invite_to_follow: !1,
          show_switched_tooltip: !1,
          show_podcast_settings: !1,
          show_community_review_changes: !1,
          show_community_rollback: !1,
          show_follower_visibility_disclosure: !1,
        }),
        new Set([
          "show_switched_toast",
          "show_invite_to_follow",
          "show_switched_tooltip",
          "show_podcast_settings",
          "show_community_review_changes",
          "show_community_rollback",
          "show_follower_visibility_disclosure",
        ]),
      ),
      s = e;
    l.default = s;
  },
  98,
);
