__d(
  "WAWebRevoke",
  [
    "WAWebBotUtils",
    "WAWebMsgKey",
    "WAWebRevokeMsgConstants",
    "WAWebUserPrefsMeUser",
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
    function u(e) {
      var t = e.revokeKey,
        n = e.revoker,
        r = e.targetKey;
      return (
        o("WAWebBotUtils").isHatchBot(r.remote) &&
        !r.fromMe &&
        t.fromMe &&
        t.remote.equals(r.remote) &&
        o("WAWebUserPrefsMeUser").isMeAccount(n)
      );
    }
    ((l.getMsgKeyAfterRevoke = e),
      (l.isWithinRevokeWindow = s),
      (l.isMyRevokeOfHatchAgentReply = u));
  },
  98,
);
