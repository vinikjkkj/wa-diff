__d(
  "useWAWebPreloadThreadPreviewMessages",
  ["WAWebChatLoadMessages", "WAWebThreadsGating", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e, t) {
      var n = c(new Set());
      u(
        function () {
          if (
            o("WAWebThreadsGating").isThreadLoadingInfraEnabled() &&
            !(e.msgs.length > 0)
          ) {
            var r = e.id.toString();
            n.current.has(r) ||
              (n.current.add(r),
              o("WAWebChatLoadMessages").loadEarlierMsgs({
                chat: t,
                msgCollection: e.msgs,
                threadId: e.id,
              }));
          }
        },
        [e, t],
      );
    }
    l.default = d;
  },
  98,
);
