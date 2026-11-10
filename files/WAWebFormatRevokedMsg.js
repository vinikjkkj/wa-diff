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
    function u(e) {
      return c(o("WAWebMsgGetters").getIsRevokedByMe(e), e.revokeSender);
    }
    function c(t, n) {
      return t
        ? s._(/*BTDS*/ "You deleted this message as admin")
        : n == null
          ? s._(/*BTDS*/ "This message was deleted by an admin")
          : s._(/*BTDS*/ "This message was deleted by admin {admin}", [
              s._param("admin", e(n)),
            ]);
    }
    function d(e) {
      return m(o("WAWebMsgGetters").getIsSentByMe(e));
    }
    function m(e) {
      return e
        ? s._(/*BTDS*/ "You deleted this message")
        : s._(/*BTDS*/ "This message was deleted");
    }
    function p(e) {
      var t,
        n = (t = e.subtype) != null ? t : "sender";
      switch (n) {
        case "sender":
          return d(e);
        case "admin":
          return u(e);
      }
    }
    function _(e) {
      var t = e.unsafe();
      return f({
        isNewsletterMsg: o("WAWebMsgGetters").getIsNewsletterMsg(t),
        isRevokedByMe: o("WAWebMsgGetters").getIsRevokedByMe(t),
        isSentByMe: o("WAWebMsgGetters").getIsSentByMe(t),
        revokeSender: e.revokeSender,
        subtype: e.subtype,
      });
    }
    function f(e) {
      var t = e.isNewsletterMsg,
        n = e.isRevokedByMe,
        r = e.isSentByMe,
        o = e.revokeSender,
        a = e.subtype;
      return a !== "admin" ? m(r) : t ? g(n) : c(n, o);
    }
    function g(e) {
      return e
        ? s._(/*BTDS*/ "You deleted this update")
        : s._(/*BTDS*/ "This update was deleted");
    }
    ((l.formatRevokedComment = p),
      (l.formatRevokedMsg = _),
      (l.formatRevokedMsgFor = f));
  },
  226,
);
