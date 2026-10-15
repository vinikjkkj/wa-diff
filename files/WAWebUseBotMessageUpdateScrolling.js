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
      var t = o("react-compiler-runtime").c(9),
        n;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var r;
        ((n = [
          (r = o("WAWebMsgGetters")).getLastBotEditBodyLength,
          r.getBody,
          r.getRichResponse,
          r.getType,
        ]),
          (t[0] = n));
      } else n = t[0];
      var a = o("useWAWebMsgValues").useMsgValues(e, n),
        i = a[0],
        l = a[1],
        u = a[2],
        c = a[3],
        d;
      t[1] !== l || t[2] !== u || t[3] !== c
        ? ((d = o("WAWebBotFrontendUtils").getBotMsgBodyLengthFor({
            body: l,
            richResponse: u,
            type: c,
          })),
          (t[1] = l),
          (t[2] = u),
          (t[3] = c),
          (t[4] = d))
        : (d = t[4]);
      var m = d,
        p,
        _;
      (t[5] !== m || t[6] !== i
        ? ((p = function () {
            m == null ||
              i == null ||
              (m !== i && o("WAWebCmd").Cmd.scrollChatToBottom());
          }),
          (_ = [i, m]),
          (t[5] = m),
          (t[6] = i),
          (t[7] = p),
          (t[8] = _))
        : ((p = t[7]), (_ = t[8])),
        s(p, _));
    }
    l.useBotMessageUpdateScrolling = u;
  },
  98,
);
