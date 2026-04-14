__d(
  "WAWebUseBotMessageWithAnimation",
  [
    "WAWebBotTypes",
    "WAWebCmd",
    "WAWebMsgGetters",
    "isStringNullOrEmpty",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef,
      d = s.useState,
      m = 50,
      p = 100,
      _ = 5,
      f = 1;
    function g(e) {
      var t = c([]),
        n = d(0),
        a = n[0],
        i = n[1],
        l =
          o("WAWebMsgGetters").getIsMetaBotResponse(e) &&
          e.activeBotMsgStreamingInProgress === !0,
        s = e.body;
      l &&
        (s =
          e.lastBotEditBodyLength != null
            ? e.body.slice(0, e.lastBotEditBodyLength)
            : e.body);
      var g = d(s),
        h = g[0],
        y = g[1],
        C = c(0);
      return (
        u(
          function () {
            var n;
            if (l) {
              var s = e.body
                .slice((n = e.lastBotEditBodyLength) != null ? n : 0)
                .trim()
                .split(" ");
              if (
                (e.lastBotEditBodyLength != null &&
                  C.current !== e.lastBotEditBodyLength &&
                  ((C.current = e.lastBotEditBodyLength),
                  (t.current = t.current.concat(s).filter(function (e) {
                    return !r("isStringNullOrEmpty")(e) && e !== " ";
                  }))),
                e.lastBotEditBodyLength != null && a < t.current.length)
              ) {
                var u = self.setTimeout(function () {
                  (y(function (n) {
                    var r =
                        (e == null ? void 0 : e.botEditType) ===
                        o("WAWebBotTypes").BotMsgEditType.LAST,
                      i = r ? a + 1 : a,
                      l = r ? t.current.length : a + f,
                      s = t.current.slice(i, l).join(" ");
                    return n.trim() + " " + s.trim();
                  }),
                    i(function (n) {
                      return (e == null ? void 0 : e.botEditType) ===
                        o("WAWebBotTypes").BotMsgEditType.LAST
                        ? t.current.length - 1
                        : n + f;
                    }));
                }, m);
                return (
                  a % _ && o("WAWebCmd").Cmd.scrollChatHeight(p),
                  function () {
                    return self.clearTimeout(u);
                  }
                );
              } else
                e.botEditType === o("WAWebBotTypes").BotMsgEditType.LAST &&
                  e.activeBotMsgStreamingInProgress === !0 &&
                  (e.unsafe().activeBotMsgStreamingInProgress = !1);
            }
          },
          [a, l, e],
        ),
        h
      );
    }
    l.useBotMessageWithAnimation = g;
  },
  98,
);
