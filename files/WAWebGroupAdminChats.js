__d(
  "WAWebGroupAdminChats",
  [
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebFrontendChatGetters",
    "WAWebL10NAccentFold",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.groupMetadata;
      return !o("WAWebChatGetters").getIsGroup(e) ||
        t == null ||
        o("WAWebFrontendChatGetters").getIsCommunity(e) ||
        o("WAWebFrontendChatGetters").getIsCAG(e)
        ? !1
        : o("WAWebFrontendChatGetters").getShouldAppearInList(e) &&
            t.participants.iAmAdmin();
    }
    function s() {
      return o("WAWebChatCollection").ChatCollection.filter(e);
    }
    function u(e, t) {
      var n = new Set(e);
      return (
        e.length === t.length &&
        t.every(function (e) {
          return n.has(e);
        })
      );
    }
    function c(e, t) {
      var n = o("WAWebL10NAccentFold").accentFold(t.trim());
      return (
        n === "" ||
        o("WAWebL10NAccentFold")
          .accentFold(o("WAWebFrontendChatGetters").getFormattedTitle(e))
          .includes(n)
      );
    }
    ((l.isAdminGroupChat = e),
      (l.getAdminGroupChats = s),
      (l.haveSameAdminGroupChats = u),
      (l.chatMatchesGroupSearch = c));
  },
  98,
);
