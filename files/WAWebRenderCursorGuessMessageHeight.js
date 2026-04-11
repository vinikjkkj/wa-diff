__d(
  "WAWebRenderCursorGuessMessageHeight",
  [
    "WAUnicodeUtils",
    "WAWebMessageLiveLocation.react",
    "WAWebMessageLocation.react",
    "WAWebMsgGetters",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 10;
    function s(t) {
      var n,
        r,
        a = 0;
      if (!t) return a;
      if (o("WAWebMsgGetters").getIsBotPluginCarouselMsg(t)) return e;
      switch ((t.quotedMsg && (a += 54), t.caption && (a += 31), t.type)) {
        case o("WAWebMsgType").MSG_TYPE.NOTIFICATION:
        case o("WAWebMsgType").MSG_TYPE.GP2:
        case o("WAWebMsgType").MSG_TYPE.BROADCAST_NOTIFICATION:
        case o("WAWebMsgType").MSG_TYPE.E2E_NOTIFICATION:
        case o("WAWebMsgType").MSG_TYPE.CALL_LOG:
        case o("WAWebMsgType").MSG_TYPE.CIPHERTEXT:
        case o("WAWebMsgType").MSG_TYPE.REVOKED:
        case o("WAWebMsgType").MSG_TYPE.CHAT: {
          var i;
          o("WAWebMsgGetters").getLinkPreview(t) && (a += 53);
          var l = o("WAUnicodeUtils").numCodepoints(
            (i = t.body) == null
              ? void 0
              : i
                  .slice(0, o("WAWebMsgGetters").getInitialPageSize(t))
                  .toString(),
          );
          return a + Math.ceil(l / 100) * 19 + 13;
        }
        case o("WAWebMsgType").MSG_TYPE.IMAGE:
          return a +
            ((((n = t.mediaData) == null ? void 0 : n.fullWidth) &&
              ((r = t.mediaData) == null ? void 0 : r.fullHeight)) ||
              0)
            ? Math.floor(
                Math.min(
                  (330 / t.mediaData.fullWidth) * t.mediaData.fullHeight,
                  330,
                ),
              )
            : 330;
        case o("WAWebMsgType").MSG_TYPE.VIDEO:
        case o("WAWebMsgType").MSG_TYPE.AUDIO:
          return t.isGif ? a + 137 : a + 166;
        case o("WAWebMsgType").MSG_TYPE.LOCATION:
          return a + t.isLive
            ? o("WAWebMessageLiveLocation.react").MSG_HEIGHT
            : o("WAWebMessageLocation.react").PREVIEW_HEIGHT;
        case o("WAWebMsgType").MSG_TYPE.PTT:
          return a + 67;
        case o("WAWebMsgType").MSG_TYPE.VCARD:
          return a + 74;
        case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
          return a + 188;
        case o("WAWebMsgType").MSG_TYPE.STICKER:
          return a + 125;
        case o("WAWebMsgType").MSG_TYPE.UNKNOWN:
        default:
          return a;
      }
    }
    l.default = s;
  },
  98,
);
