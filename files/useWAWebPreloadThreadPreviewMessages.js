__d(
  "useWAWebPreloadThreadPreviewMessages",
  [
    "WAWebChatLoadMessages",
    "WAWebThreadsGating",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e, t) {
      var n = o("react-compiler-runtime").c(5),
        r;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = new Set()), (n[0] = r))
        : (r = n[0]);
      var a = c(r),
        i,
        l;
      (n[1] !== t || n[2] !== e
        ? ((i = function () {
            if (
              o("WAWebThreadsGating").isThreadLoadingInfraEnabled() &&
              !(e.msgs.length > 0)
            ) {
              var n = e.id.toString();
              a.current.has(n) ||
                (a.current.add(n),
                o("WAWebChatLoadMessages").loadEarlierMsgs({
                  chat: t,
                  msgCollection: e.msgs,
                  threadId: e.id,
                }));
            }
          }),
          (l = [e, t]),
          (n[1] = t),
          (n[2] = e),
          (n[3] = i),
          (n[4] = l))
        : ((i = n[3]), (l = n[4])),
        u(i, l));
    }
    l.default = d;
  },
  98,
);
