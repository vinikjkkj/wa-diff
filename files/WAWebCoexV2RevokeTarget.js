__d(
  "WAWebCoexV2RevokeTarget",
  [
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2RevokeAuthorization",
    "WAWebLidMigrationUtils",
    "WAWebMsgCollection",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r = o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled()
          ? o(
              "WAWebCoexV2RevokeAuthorization",
            ).getCoexV2ParticipantlessRevokeKey(e)
          : null;
      if (r == null) return null;
      var a = o("WAWebLidMigrationUtils").getAlternateMsgKey(r),
        i =
          (t = o("WAWebMsgCollection").MsgCollection.get(r)) != null
            ? t
            : a != null
              ? o("WAWebMsgCollection").MsgCollection.get(a)
              : null;
      return (i == null || (n = i.senderWithDevice) == null
        ? void 0
        : n.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID)) === !0
        ? i
        : null;
    }
    l.getCoexV2ReplyForRevokeKey = e;
  },
  98,
);
