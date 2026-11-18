__d(
  "WAWebChatStickerStatusEligibility",
  [
    "WAWebChatStickerForwardToMyStatusGating",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebSoundStickerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        e.length > 0 &&
        e.every(s) &&
        o(
          "WAWebChatStickerForwardToMyStatusGating",
        ).isChatStickerForwardToMyStatusEnabled()
      );
    }
    function s(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.STICKER &&
        !o("WAWebMsgGetters").getHasOriginatedFromNewsletter(e) &&
        !o("WAWebSoundStickerUtils").isSoundStickerMsg(e) &&
        o("WAWebMsgActionCapability").canForwardMsg(e)
      );
    }
    l.canForwardChatStickersToMyStatus = e;
  },
  98,
);
