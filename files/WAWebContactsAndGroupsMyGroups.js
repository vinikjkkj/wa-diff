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
      return o("WAWebChatCollection").ChatCollection.filter(s).sort(p);
    }
    function s(e) {
      return !o("WAWebChatGetters").getIsGroup(e) ||
        e.groupMetadata == null ||
        e.isLocked ||
        e.isReadOnly
        ? !1
        : !o("WAWebFrontendChatGetters").getIsCommunity(e) &&
            !o("WAWebFrontendChatGetters").getIsCAG(e) &&
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
      if (o("WAWebL10NAccentFold").accentFold(e.trim()) === "")
        return o("WAWebBoolFunc").returnTrue;
      var t = m(e);
      return function (e) {
        return t(o("WAWebFrontendChatGetters").getFormattedTitle(e));
      };
    }
    function m(e) {
      var t = o("WAWebL10NAccentFold").accentFold(e.trim());
      return t === ""
        ? o("WAWebBoolFunc").returnTrue
        : function (e) {
            return o("WAWebL10NAccentFold").accentFold(e).includes(t);
          };
    }
    function p(e, t) {
      return e.isFavorite !== t.isFavorite
        ? e.isFavorite
          ? -1
          : 1
        : o("WAWebGroupAdminGroupSort").compareByRecent(e, t);
    }
    function _(e) {
      return f({
        groupMetadata: e.groupMetadata,
        isCommunity: o("WAWebFrontendChatGetters").getIsCommunity(e),
      });
    }
    function f(e) {
      var t = e.groupMetadata,
        n = e.isCommunity;
      if (t == null) return null;
      var r = n ? g(t) : t.participants.length;
      return r > 0 ? r : null;
    }
    function g(e) {
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
      (l.createNameSearch = m),
      (l.compareMyGroups = p),
      (l.getGroupMemberCount = _),
      (l.getGroupMemberCountFor = f));
  },
  98,
);
