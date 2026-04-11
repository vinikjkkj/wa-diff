__d(
  "WAWebWaFsSingleEmojiMessageDailyWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WaFsSingleEmojiMessageDaily: [
            5602,
            {
              animatedEmojiEnabled: [1, e.TYPES.BOOLEAN],
              animatedEmojiReceiveCnt: [2, e.TYPES.INTEGER],
              animatedEmojiSendCnt: [3, e.TYPES.INTEGER],
              emojiClickCnt: [4, e.TYPES.INTEGER],
              emojiReplyCount: [5, e.TYPES.INTEGER],
              pauseAnimationCnt: [6, e.TYPES.INTEGER],
              replayAnimationCnt: [7, e.TYPES.INTEGER],
              singleEmojiReceiveCnt: [8, e.TYPES.INTEGER],
              singleEmojiSendCnt: [9, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { WaFsSingleEmojiMessageDaily: [] },
      );
    l.WaFsSingleEmojiMessageDailyWamEvent = s;
  },
  98,
);
