__d(
  "WAWebUseBotCommands",
  [
    "WAWebBotBaseGating",
    "WAWebBotProfileGetters",
    "WAWebBusinessProfileGetters",
    "WAWebMsgGetters",
    "WAWebUseBusinessProfile.react",
    "WAWebUserPrefsMeUser",
    "react-compiler-runtime",
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
      (o("WAWebMsgGetters").getIsGroupMsg(e) ||
        (n = o("WAWebUserPrefsMeUser").isMeAccount(e.from) ? e.to : e.from),
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
      var t = o("react-compiler-runtime").c(2),
        n;
      e.id.remote.isBot() ? (n = e.id.remote) : (n = e.invokedBotWid);
      var r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = [o("WAWebMsgGetters").getIsBotQuery]), (t[0] = r))
        : (r = t[0]);
      var a = o("useWAWebMsgValues").useMsgValues(e.id, r),
        i = a[0],
        l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [o("WAWebBotProfileGetters").getCommands]), (t[1] = l))
        : (l = t[1]);
      var s = o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(
          n,
          l,
        ),
        u = s[0];
      return !o("WAWebBotBaseGating").isBotEnabled() || !i ? null : u;
    }
    l.useBotCommands = e;
  },
  98,
);
