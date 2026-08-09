__d(
  "ProfileCometBannerUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [
        "ProfilePlusAdminNoticeRenderer",
        "TransparencyInformContent",
        "ProfileAppealBanner",
        "ProfileBanner",
        "ProfilePYMKBanner",
        "CoppaSelfCertifyBanner",
      ],
      l = ["ProfilePendingFriendBanner", "ProfilePlusAdminNoticeRenderer"],
      s = function (n) {
        var t = n.getLinkedRecord("comet_profile_banner", {
          render_location: "TIMELINE_TAB_TOP",
          supported: e,
        });
        (t == null ? void 0 : t.getType()) === "ProfileEscapeHatch" &&
          (t == null ? void 0 : t.getValue("type")) ===
            "PENDING_FRIEND_REQUEST" &&
          n.setValue(null, "comet_profile_banner", {
            render_location: "TIMELINE_TAB_TOP",
            supported: e,
          });
        var r = n.getLinkedRecord("comet_profile_banner", {
          render_location: "PROFILE_HEADER",
          supported: l,
        });
        (r == null ? void 0 : r.getType()) === "ProfilePendingFriendBanner" &&
          n.setValue(null, "comet_profile_banner", {
            render_location: "PROFILE_HEADER",
            supported: l,
          });
      };
    i.removeProfilePendingFriendRequestBanner = s;
  },
  66,
);
