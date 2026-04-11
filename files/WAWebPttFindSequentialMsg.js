__d(
  "WAWebPttFindSequentialMsg",
  [
    "WAArrayFindNext",
    "WAWebAck",
    "WAWebFrontendMsgGetters",
    "WAWebPttIsValidPlaybackSequence",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.id,
        n = r("WAArrayFindNext")(
          o("WAWebFrontendMsgGetters").getChat(e.unsafe()).msgs.toArray(),
          function (e) {
            return t.equals(e.id);
          },
        );
      if (!n) return null;
      var a =
        o("WAWebFrontendMsgGetters").getAsAudio(n) ||
        o("WAWebFrontendMsgGetters").getAsPtt(n);
      return a &&
        o("WAWebPttIsValidPlaybackSequence").isValidPlaybackSequence({
          currentMsg: e,
          nextMsg: a,
          playedBefore: e.ack === o("WAWebAck").ACK.PLAYED,
        })
        ? a
        : null;
    }
    function s(e) {
      var t = e.id,
        n = r("WAArrayFindNext")(
          o("WAWebFrontendMsgGetters").getChat(e.unsafe()).msgs.toArray(),
          function (e) {
            return t.equals(e.id);
          },
        );
      return n ? o("WAWebFrontendMsgGetters").getAsPtv(n) : null;
    }
    ((l.findSequentialMsg = e), (l.findSequentialPtv = s));
  },
  98,
);
