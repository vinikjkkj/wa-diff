__d(
  "WAWebUseBotMessageWithAnimation",
  [
    "WAWebBotTypes",
    "WAWebCmd",
    "WAWebMsgGetters",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(11),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = []), (t[0] = n))
        : (n = t[0]);
      var r = c(n),
        a = d(0),
        i = a[0],
        l = a[1],
        s;
      t[1] !== e
        ? ((s =
            o("WAWebMsgGetters").getIsMetaBotResponse(e) &&
            e.activeBotMsgStreamingInProgress === !0),
          (t[1] = e),
          (t[2] = s))
        : (s = t[2]);
      var g = s,
        y = e.body;
      if (g) {
        var C;
        (t[3] !== e.body || t[4] !== e.lastBotEditBodyLength
          ? ((C =
              e.lastBotEditBodyLength != null
                ? e.body.slice(0, e.lastBotEditBodyLength)
                : e.body),
            (t[3] = e.body),
            (t[4] = e.lastBotEditBodyLength),
            (t[5] = C))
          : (C = t[5]),
          (y = C));
      }
      var b = d(y),
        v = b[0],
        S = b[1],
        R = c(0),
        L,
        E;
      return (
        t[6] !== i || t[7] !== e || t[8] !== g
          ? ((L = function () {
              var t;
              if (g) {
                var n = e.body
                  .slice((t = e.lastBotEditBodyLength) != null ? t : 0)
                  .trim()
                  .split(" ");
                if (
                  (e.lastBotEditBodyLength != null &&
                    R.current !== e.lastBotEditBodyLength &&
                    ((R.current = e.lastBotEditBodyLength),
                    (r.current = r.current.concat(n).filter(h))),
                  e.lastBotEditBodyLength != null && i < r.current.length)
                ) {
                  var a = self.setTimeout(function () {
                    (S(function (t) {
                      var n =
                          (e == null ? void 0 : e.botEditType) ===
                          o("WAWebBotTypes").BotMsgEditType.LAST,
                        a = n ? i + 1 : i,
                        l = n ? r.current.length : i + f,
                        s = r.current.slice(a, l).join(" ");
                      return t.trim() + " " + s.trim();
                    }),
                      l(function (t) {
                        return (e == null ? void 0 : e.botEditType) ===
                          o("WAWebBotTypes").BotMsgEditType.LAST
                          ? r.current.length - 1
                          : t + f;
                      }));
                  }, m);
                  return (
                    i % _ && o("WAWebCmd").Cmd.scrollChatHeight(p),
                    function () {
                      return self.clearTimeout(a);
                    }
                  );
                } else
                  e.botEditType === o("WAWebBotTypes").BotMsgEditType.LAST &&
                    e.activeBotMsgStreamingInProgress === !0 &&
                    (e.unsafe().activeBotMsgStreamingInProgress = !1);
              }
            }),
            (E = [i, g, e]),
            (t[6] = i),
            (t[7] = e),
            (t[8] = g),
            (t[9] = L),
            (t[10] = E))
          : ((L = t[9]), (E = t[10])),
        u(L, E),
        v
      );
    }
    function h(e) {
      return !r("isStringNullOrEmpty")(e) && e !== " ";
    }
    l.useBotMessageWithAnimation = g;
  },
  98,
);
