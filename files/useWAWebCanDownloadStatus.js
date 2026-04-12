__d(
  "useWAWebCanDownloadStatus",
  [
    "WAWebMsgGetters",
    "WAWebMusicGatingUtils",
    "WAWebStatusGatingUtils",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("useWAWebMsgValues").useMsgValues(e.id, [
          o("WAWebMsgGetters").getIsSentByMe,
          o("WAWebMsgGetters").getIsMedia,
          o("WAWebMsgGetters").isStatusWithMusic,
        ]),
        n = t[0],
        r = t[1],
        a = t[2];
      return !n ||
        !r ||
        !o("WAWebStatusGatingUtils").isStatusSaveToDiskEnabled()
        ? !1
        : !a || o("WAWebMusicGatingUtils").isStatusMusicSaveToDiskEnabled();
    }
    l.default = e;
  },
  98,
);
