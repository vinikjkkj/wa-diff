__d(
  "WAWebUseBotCommands",
  [
    "WAWebBotBaseGating",
    "WAWebBotProfileGetters",
    "WAWebMsgGetters",
    "WAWebUseBusinessProfile.react",
    "WAWebUserPrefsMeUser",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(1),
        n;
      o("WAWebMsgGetters").getIsGroupMsg(e) ||
        (n = o("WAWebUserPrefsMeUser").isMeAccount(e.from) ? e.to : e.from);
      var r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = ["commands"]), (t[0] = r))
        : (r = t[0]);
      var a = o("WAWebUseBusinessProfile.react").useBusinessProfile(n, r);
      return a == null ? void 0 : a.commands;
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
