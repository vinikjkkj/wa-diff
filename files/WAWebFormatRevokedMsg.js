__d(
  "WAWebFormatRevokedMsg",
  [
    "fbt",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebMsgGetters",
    "WAWebWidFormat",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = function (t) {
      var e = o("WAWebContactCollection").ContactCollection.get(t);
      return e
        ? e.shortName ||
            e.name ||
            o("WAWebFrontendContactGetters").getDisplayName(e)
        : o("WAWebWidFormat").widToFormattedUser(t);
    };
    function u(t) {
      return o("WAWebMsgGetters").getIsRevokedByMe(t)
        ? s._(/*BTDS*/ "You deleted this message as admin")
        : t.revokeSender == null
          ? s._(/*BTDS*/ "This message was deleted by an admin")
          : s._(/*BTDS*/ "This message was deleted by admin {admin}", [
              s._param("admin", e(t.revokeSender)),
            ]);
    }
    function c(e) {
      return o("WAWebMsgGetters").getIsSentByMe(e)
        ? s._(/*BTDS*/ "You deleted this message")
        : s._(/*BTDS*/ "This message was deleted");
    }
    function d(e) {
      var t,
        n = (t = e.subtype) != null ? t : "sender";
      switch (n) {
        case "sender":
          return c(e);
        case "admin":
          return u(e);
      }
    }
    function m(e) {
      var t,
        n = (t = e.subtype) != null ? t : "sender";
      switch (n) {
        case "sender":
          return c(e);
        case "admin":
          return o("WAWebMsgGetters").getIsNewsletterMsg(e) ? p(e) : u(e);
      }
    }
    function p(e) {
      return o("WAWebMsgGetters").getIsRevokedByMe(e)
        ? s._(/*BTDS*/ "You deleted this update")
        : s._(/*BTDS*/ "This update was deleted");
    }
    ((l.formatRevokedComment = d), (l.formatRevokedMsg = m));
  },
  226,
);
