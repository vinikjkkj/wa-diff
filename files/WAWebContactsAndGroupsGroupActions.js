__d(
  "WAWebContactsAndGroupsGroupActions",
  [
    "WAWebChatGroupUtils",
    "WAWebCmd",
    "WAWebContactsAndGroupsNavigationAction",
    "WAWebFrontendChatGetters",
    "WAWebLeaveCommunityModalUtilsLoadable",
    "WAWebOpenLeaveAndReportGroupModalLoadable",
    "WAWebSetArchiveChatAction",
    "WAWebSpamConstants",
    "WAWebWamEnumFavoritesUpdateEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (o("WAWebFrontendChatGetters").getIsCommunity(e)) {
        (o("WAWebContactsAndGroupsNavigationAction").closeContactsAndGroups(),
          o("WAWebCmd").Cmd.openCommunityHome(e.id, void 0));
        return;
      }
      o("WAWebContactsAndGroupsNavigationAction").openChatFromContactsAndGroups(
        e,
      );
    }
    function s(e) {
      o("WAWebCmd").Cmd.favoriteChat(
        e,
        !e.isFavorite,
        o("WAWebWamEnumFavoritesUpdateEntryPoint").FAVORITES_UPDATE_ENTRY_POINT
          .GROUP_INFO,
      );
    }
    function u(e) {
      o("WAWebSetArchiveChatAction").setArchive(e, !e.archive, !0);
    }
    function c(e) {
      var t;
      if (o("WAWebFrontendChatGetters").getIsCommunity(e)) {
        o("WAWebLeaveCommunityModalUtilsLoadable").openLeaveCommunityModal({
          chat: e,
        });
        return;
      }
      if (
        o("WAWebChatGroupUtils").shouldShowLeaveAndReportGroupModalForChat(e)
      ) {
        o(
          "WAWebOpenLeaveAndReportGroupModalLoadable",
        ).openLeaveAndReportGroupModal(
          e.id,
          o("WAWebSpamConstants").SpamFlow.GroupInfoLeaveReportUpsell,
        );
        return;
      }
      var n = (t = e.groupMetadata) == null ? void 0 : t.getParentGroupChat();
      if (
        n != null &&
        o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e)
      ) {
        o("WAWebLeaveCommunityModalUtilsLoadable").openLeaveCommunityModal({
          chat: n,
        });
        return;
      }
      o("WAWebCmd").Cmd.deleteOrExitChat(e);
    }
    ((l.openGroupFromContactsAndGroups = e),
      (l.toggleGroupFavoriteFromContactsAndGroups = s),
      (l.toggleGroupArchiveFromContactsAndGroups = u),
      (l.exitGroupFromContactsAndGroups = c));
  },
  98,
);
