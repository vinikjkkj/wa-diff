__d(
  "WAWebUseBotMessageUpdateScrolling",
  [
    "WAWebBotFrontendUtils",
    "WAWebCmd",
    "WAWebMsgGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = o("react-compiler-runtime").c(7),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = [o("WAWebMsgGetters").getLastBotEditBodyLength]), (t[0] = n))
        : (n = t[0]);
      var r = o("useWAWebMsgValues").useMsgValues(e.id, n),
        a = r[0],
        i;
      t[1] !== e
        ? ((i = o("WAWebBotFrontendUtils").getBotMsgBodyLength(e)),
          (t[1] = e),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        u,
        c;
      (t[3] !== l || t[4] !== a
        ? ((u = function () {
            l == null ||
              a == null ||
              (l !== a && o("WAWebCmd").Cmd.scrollChatToBottom());
          }),
          (c = [a, l]),
          (t[3] = l),
          (t[4] = a),
          (t[5] = u),
          (t[6] = c))
        : ((u = t[5]), (c = t[6])),
        s(u, c));
    }
    l.useBotMessageUpdateScrolling = u;
  },
  98,
);
