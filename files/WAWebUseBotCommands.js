__d(
  "WAWebUseBotCommands",
  [
    "WAWebBotBaseGating",
    "WAWebBotProfileGetters",
    "WAWebMsgGetters",
    "WAWebUseBusinessProfile.react",
    "WAWebUserPrefsMeUser",
    "useWAWebMsgValues",
    "useWAWebOptionalBotProfileValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = s(e),
        n = u(e);
      return t || n;
    }
    function s(e) {
      var t;
      o("WAWebMsgGetters").getIsGroupMsg(e) ||
        (t = o("WAWebUserPrefsMeUser").isMeAccount(e.from) ? e.to : e.from);
      var n = o("WAWebUseBusinessProfile.react").useBusinessProfile(t, [
        "commands",
      ]);
      return n == null ? void 0 : n.commands;
    }
    function u(e) {
      var t;
      e.id.remote.isBot() ? (t = e.id.remote) : (t = e.invokedBotWid);
      var n = o("useWAWebMsgValues").useMsgValues(e.id, [
          o("WAWebMsgGetters").getIsBotQuery,
        ]),
        r = n[0],
        a = o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(
          t,
          [o("WAWebBotProfileGetters").getCommands],
        ),
        i = a[0];
      return !o("WAWebBotBaseGating").isBotEnabled() || !r ? null : i;
    }
    l.useBotCommands = e;
  },
  98,
);
