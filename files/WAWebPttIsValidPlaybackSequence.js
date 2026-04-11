__d(
  "WAWebPttIsValidPlaybackSequence",
  ["WAWebFrontendMsgGetters", "WAWebMsgGetters"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.currentMsg,
        n = e.nextMsg,
        r = e.playedBefore;
      return o("WAWebFrontendMsgGetters").getAsPttLike(n.unsafe()) == null
        ? !1
        : !o("WAWebMsgGetters").getIsSentByMe(n) ||
            o("WAWebMsgGetters").getIsSentByMe(t)
          ? !0
          : !!r;
    }
    l.isValidPlaybackSequence = e;
  },
  98,
);
