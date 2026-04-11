__d(
  "useWAWebCanDownloadStatus",
  [
    "WAWebMsgGetters",
    "WAWebMusicGatingUtils",
    "WAWebStatusGatingUtils",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("react-compiler-runtime").c(3),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = [
            o("WAWebMsgGetters").getIsSentByMe,
            o("WAWebMsgGetters").getIsMedia,
            o("WAWebMsgGetters").isStatusWithMusic,
          ]),
          (t[0] = n))
        : (n = t[0]);
      var r = o("useWAWebMsgValues").useMsgValues(e.id, n),
        a = r[0],
        i = r[1],
        l = r[2];
      if (!a || !i || !o("WAWebStatusGatingUtils").isStatusSaveToDiskEnabled())
        return !1;
      var s;
      return (
        t[1] !== l
          ? ((s =
              !l ||
              o("WAWebMusicGatingUtils").isStatusMusicSaveToDiskEnabled()),
            (t[1] = l),
            (t[2] = s))
          : (s = t[2]),
        s
      );
    }
    l.default = e;
  },
  98,
);
