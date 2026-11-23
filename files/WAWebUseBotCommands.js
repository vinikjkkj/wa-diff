__d(
  "WAWebUseBotCommands",
  [
    "WAWebBotBaseGating",
    "WAWebBotProfileGetters",
    "WAWebBusinessProfileGetters",
    "WAWebMsgGetters",
    "WAWebUseBusinessProfile.react",
    "WAWebUserUtils",
    "useWAWebBusinessProfileValues",
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
      var t, n;
      (o("WAWebMsgGetters").getIsGroupMsg(e.unsafe()) ||
        (n = o("WAWebUserUtils").isMeAccount(e.from) ? e.to : e.from),
        o("WAWebUseBusinessProfile.react").useBusinessProfile(n));
      var r =
          (t = o(
            "useWAWebBusinessProfileValues",
          ).useOptionalBusinessProfileValues(n, [
            o("WAWebBusinessProfileGetters").getCommands,
          ])) != null
            ? t
            : [],
        a = r[0];
      return a;
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
