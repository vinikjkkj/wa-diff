__d(
  "FriendingCometFriendRequestsOptimisticUpdaters",
  [
    "ProfileActionFriendingMutationUtils",
    "ProfileActionMutationUtils",
    "ProfileCometBannerUtils",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, r) {
      var e = t.get(r);
      if (e != null) {
        (e.setValue(n, "friendship_status"), e.setValue(r, "id"));
        var a = t.get(o("ProfileActionMutationUtils").getProfileActionID(r, 1));
        if (a != null) {
          var i = a.getOrCreateLinkedRecord("icon_image", "Image", {
              icon_color: "fds-black",
              icon_size: "16",
              icon_variant: "filled",
              scale: o("WebPixelRatio").get(),
            }),
            l = a.getOrCreateLinkedRecord("title", "TextWithEntities");
          if (!(i == null || l == null)) {
            var s = o(
              "ProfileActionFriendingMutationUtils",
            ).getOptimisticActionForFriendshipStatus(n, r);
            (n === "ARE_FRIENDS" && a.setValue(!1, "is_active"),
              a.setValue(s.__typename, "__typename"),
              a.setValue(s.is_optimistic_update, "is_optimistic_update"),
              i.setValue(s.icon_image.height, "height"),
              i.setValue(s.icon_image.scale, "scale"),
              i.setValue(s.icon_image.width, "width"),
              i.setValue(s.icon_image.uri, "uri"),
              l.setValue(s.title.text, "text"),
              o(
                "ProfileCometBannerUtils",
              ).removeProfilePendingFriendRequestBanner(e));
          }
        }
      }
    };
    l.updateFriendRequesterFieldsOptimistic = e;
  },
  98,
);
