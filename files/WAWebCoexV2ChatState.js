__d(
  "WAWebCoexV2ChatState",
  ["WAWebCoexV2BotWid", "WAWebUserPrefsMeUser"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return !e.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) ||
        t == null ||
        o("WAWebUserPrefsMeUser").isMeAccount(t) ||
        !t.isUser()
        ? null
        : t;
    }
    l.normalizeCoexV2BotChatStateWid = e;
  },
  98,
);
