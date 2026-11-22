__d(
  "WAWebLabyrinthShadowRecord",
  ["WAWebAck", "WAWebMsgType", "WAWebViewMode.flow"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Set([
        (e = o("WAWebMsgType")).MSG_TYPE.AUDIO,
        e.MSG_TYPE.CHAT,
        e.MSG_TYPE.DOCUMENT,
        e.MSG_TYPE.IMAGE,
        e.MSG_TYPE.LOCATION,
        e.MSG_TYPE.MULTI_VCARD,
        e.MSG_TYPE.POLL_CREATION,
        e.MSG_TYPE.PTT,
        e.MSG_TYPE.PTV,
        e.MSG_TYPE.STICKER,
        e.MSG_TYPE.VCARD,
        e.MSG_TYPE.VIDEO,
      ]);
    function u(e) {
      var t;
      return (
        s.has(e.type) &&
        (e.viewMode == null ||
          e.viewMode === o("WAWebViewMode.flow").ViewModeType.VISIBLE) &&
        e.isLive !== !0 &&
        e.isViewOnce !== !0 &&
        ((t = e.ephemeralDuration) != null ? t : 0) === 0
      );
    }
    function c(e) {
      var t;
      return (
        u(e) &&
        !(
          e.id.fromMe &&
          ((t = e.ack) != null ? t : o("WAWebAck").ACK.SENT) <
            o("WAWebAck").ACK.SENT
        )
      );
    }
    ((l.isLabyrinthShadowComparable = u),
      (l.isLabyrinthShadowComparableLocal = c));
  },
  98,
);
