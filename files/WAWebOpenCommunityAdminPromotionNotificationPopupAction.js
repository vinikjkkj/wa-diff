__d(
  "WAWebOpenCommunityAdminPromotionNotificationPopupAction",
  [
    "WAWebChatGroupUtils",
    "WAWebCommunityAdminPromotionNotificationFlowLoadable",
    "WAWebGroupType",
    "WAWebModalManager",
    "WAWebNux",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsNuxPreferences",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t,
        n = e.groupMetadata;
      if (n != null) {
        var r,
          a = n.groupType;
        switch (a) {
          case o("WAWebGroupType").GroupType.COMMUNITY:
            r = n;
            break;
          case o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP:
            r = (t = n.getParentGroupChat()) == null ? void 0 : t.groupMetadata;
            break;
          default:
            break;
        }
        return r;
      }
    }
    function c(e) {
      if (
        e == null ||
        o("WAWebChatGroupUtils").isDeactivatedCommunityAnnouncementGroup(e) ||
        o("WAWebChatGroupUtils").isSuspendedGroup(e)
      )
        return !1;
      var t = u(e);
      return !(
        t == null ||
        !t.participants.iAmAdmin() ||
        o("WAWebUserPrefsMeUser").isMeAccount(t.owner) ||
        !o("WAWebUserPrefsNuxPreferences").shouldShowNUX(
          o("WAWebNux").getCommunityAdminPromotionNuxKey(t.id.toString()),
        )
      );
    }
    function d(e) {
      if (e != null) {
        var t = u(e);
        t != null &&
          o("WAWebModalManager").ModalManager.open(
            s.jsx(
              o("WAWebCommunityAdminPromotionNotificationFlowLoadable")
                .CommunityAdminPromotionNotificationFlowLoadable,
              { communityMetadata: t },
            ),
          );
      }
    }
    ((l.shouldOpenCommunityAdminPromotionNotificationPopup = c),
      (l.openCommunityAdminPromotionNotificationPopup = d));
  },
  98,
);
