__d(
  "WAWebGroupAdminChats",
  ["WAWebChatCollection", "WAWebChatGetters", "WAWebFrontendChatGetters"],
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
    ((l.isAdminGroupChat = e),
      (l.getAdminGroupChats = s),
      (l.haveSameAdminGroupChats = u));
  },
  98,
);
