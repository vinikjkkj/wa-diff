__d(
  "WAWebForwardMediaUtils",
  ["WAWebFileUtils", "WAWebForwardDocCaptionGating", "WAWebMsgGetters"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.filter(function (e) {
        return o("WAWebMsgGetters").getHasOriginatedFromNewsletter(e) ||
          (!o("WAWebMsgGetters").getIsMedia(e) &&
            !o("WAWebFileUtils").isDocument(e)) ||
          !e.caption
          ? !1
          : o("WAWebFileUtils").isDocument(e) && e.caption === e.filename
            ? !o("WAWebForwardDocCaptionGating").isForwardDocCaptionEnabled()
            : !0;
      });
      return t;
    }
    function s(e) {
      var t = 5,
        n =
          o("WAWebMsgGetters").getNumTimesForwarded(e) +
          (o("WAWebMsgGetters").getShouldDisplayAsForwarded(e) ? 1 : 0);
      return n >= t ? o("WAWebMsgGetters").FREQUENTLY_FORWARDED_SENTINEL : n;
    }
    ((l.getMediaMsgWithCaptionForForwarding = e),
      (l.getMsgForwardingScoreWhenForwarded = s));
  },
  98,
);
