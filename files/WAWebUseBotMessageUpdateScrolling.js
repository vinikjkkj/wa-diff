__d(
  "WAWebUseBotMessageUpdateScrolling",
  [
    "WAWebBotFrontendUtils",
    "WAWebCmd",
    "WAWebMsgGetters",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = o("useWAWebMsgValues").useMsgValues(e.id, [
          o("WAWebMsgGetters").getLastBotEditBodyLength,
        ]),
        n = t[0],
        r = o("WAWebBotFrontendUtils").getBotMsgBodyLength(e);
      s(
        function () {
          r == null ||
            n == null ||
            (r !== n && o("WAWebCmd").Cmd.scrollChatToBottom());
        },
        [n, r],
      );
    }
    l.useBotMessageUpdateScrolling = u;
  },
  98,
);
