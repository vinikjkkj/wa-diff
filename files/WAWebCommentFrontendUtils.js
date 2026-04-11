__d(
  "WAWebCommentFrontendUtils",
  [
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgLinks",
    "WAWebMsgPhoneNumbers",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e.body;
      if (n == null) return e.links;
      var r = o("WAWebMsgLinks").getLinksFromMsgImpl({
          content: n,
          sender: e.author,
          cachedValue: e.links,
          currentIndex: e.linksIndexParsed,
          endIndex: t,
        }),
        a = r[0],
        i = r[1];
      return ((e.linksIndexParsed = i), (e.links = a), a);
    }
    function s(e, t) {
      var n = e.body;
      if (n == null) return e.phoneNumbers;
      var r = o("WAWebMsgPhoneNumbers").getPhoneNumbersFromMsgImpl({
          content: n,
          cachedValue: e.phoneNumbers,
          currentIndex: e.phoneNumbersIndexParsed,
          endIndex: t,
        }),
        a = r[0],
        i = r[1];
      return ((e.phoneNumbersIndexParsed = i), (e.phoneNumbers = a), a);
    }
    function u(e) {
      if (o("WAWebUserPrefsMeUser").isMeAccount(e.author)) return !0;
      var t = o("WAWebContactCollection").ContactCollection.get(e.author);
      if (t != null && o("WAWebFrontendContactGetters").getIsMyContact(t))
        return !0;
      var n = o("WAWebChatCollection").ChatCollection.get(
        e.parentMsgKey.remote,
      );
      return n != null ? n.isTrusted() && n.notSpam : !1;
    }
    function c(e) {
      return (
        e.length > 1 &&
        o("WAWebFrontendMsgGetters").getAsAlbumAsset(e[0]) != null
      );
    }
    ((l.getLinksFromComment = e),
      (l.getPhoneNumbersFromComment = s),
      (l.isTrustedComment = u),
      (l.isAlbumMessageContainer = c));
  },
  98,
);
