__d(
  "WAWebMsgCountReporter",
  ["WAWebMsgType", "WAWebWebcMessageQueryWamEvent"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return new (o("WAWebWebcMessageQueryWamEvent").WebcMessageQueryWamEvent)({
        webcResponseBytes: 0,
        webcMessageCount: 0,
        webcTextMessageCount: 0,
        webcVideoMessageCount: 0,
        webcPhotoMessageCount: 0,
        webcAudioMessageCount: 0,
        webcPttMessageCount: 0,
        webcStickerMessageCount: 0,
        webcDocumentMessageCount: 0,
        webcOtherMessageCount: 0,
        webcMessageQueryTrigger: e,
      });
    }
    function s(e, t) {
      e.webcMessageCount += t.length;
      for (var n = 0, r = t[n]; n < t.length; ++n, r = t[n])
        switch (r.type) {
          case o("WAWebMsgType").MSG_TYPE.CHAT:
          case o("WAWebMsgType").MSG_TYPE.LOCATION:
          case o("WAWebMsgType").MSG_TYPE.PAYMENT:
          case o("WAWebMsgType").MSG_TYPE.VCARD:
          case o("WAWebMsgType").MSG_TYPE.CIPHERTEXT:
          case o("WAWebMsgType").MSG_TYPE.MULTI_VCARD:
          case o("WAWebMsgType").MSG_TYPE.REVOKED:
          case o("WAWebMsgType").MSG_TYPE.OVERSIZED:
            e.webcTextMessageCount += 1;
            break;
          case o("WAWebMsgType").MSG_TYPE.IMAGE:
          case o("WAWebMsgType").MSG_TYPE.PRODUCT:
            e.webcPhotoMessageCount += 1;
            break;
          case o("WAWebMsgType").MSG_TYPE.VIDEO:
            e.webcVideoMessageCount += 1;
            break;
          case o("WAWebMsgType").MSG_TYPE.AUDIO:
            e.webcAudioMessageCount += 1;
            break;
          case o("WAWebMsgType").MSG_TYPE.PTT:
            e.webcPttMessageCount += 1;
            break;
          case o("WAWebMsgType").MSG_TYPE.STICKER:
            e.webcStickerMessageCount += 1;
            break;
          case o("WAWebMsgType").MSG_TYPE.DOCUMENT:
            e.webcDocumentMessageCount += 1;
            break;
          default:
            e.webcOtherMessageCount += 1;
            break;
        }
    }
    ((l.newMessageQueryEvent = e), (l.logMessageCounts = s));
  },
  98,
);
