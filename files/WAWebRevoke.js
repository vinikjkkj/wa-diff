__d(
  "WAWebRevoke",
  [
    "WAWebBotUtils",
    "WAWebMessageAssociation.flow",
    "WAWebMsgKey",
    "WAWebRevokeMsgConstants",
    "WAWebUserUtils",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.originalKey,
        n = e.revokeKey;
      return new (r("WAWebMsgKey"))({
        fromMe: t.fromMe,
        id: n.id,
        remote: t.remote,
        participant: t.participant,
      });
    }
    function s(e) {
      var t = e.revokedMsgKey,
        n = e.revokedMsgTimestamp,
        a = e.revokeTimestamp,
        i = r("WAWebWid").isNewsletter(t.remote)
          ? o("WAWebRevokeMsgConstants").NEWSLETTER_REVOKE_WINDOW
          : o("WAWebRevokeMsgConstants").REVOKE_WINDOW,
        l = i + o("WAWebRevokeMsgConstants").REVOKE_WINDOW_RECEIVER_MARGIN;
      return a - n <= l;
    }
    var u = new Set([
      o("WAWebMessageAssociation.flow").MessageAssociationType
        .STICKER_ANNOTATION,
      o("WAWebMessageAssociation.flow").MessageAssociationType.UNKNOWN,
    ]);
    function c(e) {
      var t = e.associationType,
        n = e.revokedMsgKey,
        r = e.subtype;
      return n.fromMe && r === "sender_revoke" && t != null && u.has(t);
    }
    function d(e) {
      var t = e.revokeKey,
        n = e.revoker,
        r = e.targetKey;
      return (
        o("WAWebBotUtils").isHatchBot(r.remote) &&
        !r.fromMe &&
        t.fromMe &&
        t.remote.equals(r.remote) &&
        o("WAWebUserUtils").isMeAccount(n)
      );
    }
    ((l.getMsgKeyAfterRevoke = e),
      (l.isWithinRevokeWindow = s),
      (l.canRevokeOutsideWindow = c),
      (l.isMyRevokeOfHatchAgentReply = d));
  },
  98,
);
