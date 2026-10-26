__d(
  "WAWebCoexV2RevokeAuthorization",
  [
    "WAWebCoexV2BotWid",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = c(e, t);
      return n == null ? null : o("WAWebUserPrefsMeUser").isMeAccount(n);
    }
    function s(e, t, n, r) {
      var a = c(e, t);
      return a == null
        ? null
        : r || n == null
          ? !1
          : n.isSameAccountAndAddressingMode(
              o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID,
            ) || d(a, n);
    }
    function u(e) {
      var t = e.fromMe,
        n = e.id,
        o = e.participant,
        a = e.remote;
      return o != null && a.isUser() && (a.equals(o) || o.isBot())
        ? new (r("WAWebMsgKey"))({ fromMe: t, remote: a, id: n })
        : null;
    }
    function c(e, t) {
      return (e == null
        ? void 0
        : e.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID)) === !0
        ? t
        : null;
    }
    function d(e, t) {
      var n = o("WAWebLidMigrationUtils").toCommonAddressingMode(e, t),
        r = n[0],
        a = n[1];
      return r != null && a != null && r.isSameAccountAndAddressingMode(a);
    }
    ((l.getCoexV2RevokeAuthorizationForCurrentUser = e),
      (l.getCoexV2RevokeAuthorization = s),
      (l.getCoexV2ParticipantlessRevokeKey = u));
  },
  98,
);
