__d(
  "WAWebContactsAndGroupsMyGroups",
  [
    "WAWebBoolFunc",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebCommunityAnnouncementGroupUtils",
    "WAWebFrontendChatGetters",
    "WAWebGroupAdminGroupSort",
    "WAWebL10NAccentFold",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebChatCollection").ChatCollection.filter(s).sort(m);
    }
    function s(e) {
      return !o("WAWebChatGetters").getIsGroup(e) ||
        e.groupMetadata == null ||
        e.isLocked
        ? !1
        : o("WAWebFrontendChatGetters").getIsCommunity(e)
          ? !0
          : !o("WAWebFrontendChatGetters").getIsCAG(e) &&
            o("WAWebFrontendChatGetters").getShouldAppearInList(e);
    }
    function u(e) {
      return new Map(
        e.map(function (e, t) {
          return [e.id.toString(), t];
        }),
      );
    }
    function c(e, t) {
      return e
        .map(function (e, n) {
          var r;
          return {
            chat: e,
            rank: (r = t.get(e.id.toString())) != null ? r : t.size + n,
          };
        })
        .sort(function (e, t) {
          return e.rank - t.rank;
        })
        .map(function (e) {
          var t = e.chat;
          return t;
        });
    }
    function d(e) {
      var t = o("WAWebL10NAccentFold").accentFold(e.trim());
      return t === ""
        ? o("WAWebBoolFunc").returnTrue
        : function (e) {
            return o("WAWebL10NAccentFold")
              .accentFold(o("WAWebFrontendChatGetters").getFormattedTitle(e))
              .includes(t);
          };
    }
    function m(e, t) {
      return e.isFavorite !== t.isFavorite
        ? e.isFavorite
          ? -1
          : 1
        : o("WAWebGroupAdminGroupSort").compareByRecent(e, t);
    }
    function p(e) {
      var t = e.groupMetadata;
      if (t == null) return null;
      var n = o("WAWebFrontendChatGetters").getIsCommunity(e)
        ? _(t)
        : t.participants.length;
      return n > 0 ? n : null;
    }
    function _(e) {
      var t,
        n = o(
          "WAWebCommunityAnnouncementGroupUtils",
        ).getCommunityAnnouncementGroupMetadata(e);
      if (n == null) return 0;
      var r = (t = n.size) != null ? t : 0;
      return r > 0 ? r : n.participants.iAmAdmin() ? n.participants.length : 0;
    }
    ((l.getMyGroups = e),
      (l.isMyGroup = s),
      (l.getGroupRanks = u),
      (l.keepInitialOrder = c),
      (l.createGroupSearch = d),
      (l.compareMyGroups = m),
      (l.getGroupMemberCount = p));
  },
  98,
);
