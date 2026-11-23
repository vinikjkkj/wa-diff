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
      var t,
        n = o("useWAWebMsgValues").useMsgValues(e, [
          (t = o("WAWebMsgGetters")).getLastBotEditBodyLength,
          t.getBody,
          t.getRichResponse,
          t.getType,
        ]),
        r = n[0],
        a = n[1],
        i = n[2],
        l = n[3],
        u = o("WAWebBotFrontendUtils").getBotMsgBodyLengthFor({
          body: a,
          richResponse: i,
          type: l,
        });
      s(
        function () {
          u == null ||
            r == null ||
            (u !== r && o("WAWebCmd").Cmd.scrollChatToBottom());
        },
        [r, u],
      );
    }
    l.useBotMessageUpdateScrolling = u;
  },
  98,
);
