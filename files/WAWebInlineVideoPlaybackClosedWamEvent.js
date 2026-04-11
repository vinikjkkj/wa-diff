__d(
  "WAWebInlineVideoPlaybackClosedWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumInlineVideoCtaClick",
    "WAWebWamEnumInlineVideoType",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumPlatformType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          InlineVideoPlaybackClosed: [
            2032,
            {
              chatSize: [14, e.TYPES.INTEGER],
              inlineVideoCancelBeforePlayStateT: [7, e.TYPES.TIMER],
              inlineVideoComplete: [8, e.TYPES.BOOLEAN],
              inlineVideoCompletionRate: [9, e.TYPES.INTEGER],
              inlineVideoCtaClick: [
                10,
                o("WAWebWamEnumInlineVideoCtaClick").INLINE_VIDEO_CTA_CLICK,
              ],
              inlineVideoDurationT: [2, e.TYPES.TIMER],
              inlineVideoError: [11, e.TYPES.STRING],
              inlineVideoHasRcat: [13, e.TYPES.BOOLEAN],
              inlineVideoPlayStartT: [6, e.TYPES.TIMER],
              inlineVideoPlayed: [3, e.TYPES.BOOLEAN],
              inlineVideoStallT: [4, e.TYPES.TIMER],
              inlineVideoType: [
                1,
                o("WAWebWamEnumInlineVideoType").INLINE_VIDEO_TYPE,
              ],
              inlineVideoWatchT: [5, e.TYPES.TIMER],
              isSentByMe: [15, e.TYPES.BOOLEAN],
              messageType: [12, o("WAWebWamEnumMessageType").MESSAGE_TYPE],
              rcatSenderPlatform: [
                16,
                o("WAWebWamEnumPlatformType").PLATFORM_TYPE,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { InlineVideoPlaybackClosed: [] },
      );
    l.InlineVideoPlaybackClosedWamEvent = s;
  },
  98,
);
