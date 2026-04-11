__d(
  "WAWebChannelsVideoPlayWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumVideoPlayOrigin",
    "WAWebWamEnumVideoPlayResult",
    "WAWebWamEnumVideoPlayType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ChannelsVideoPlay: [
            6556,
            {
              autoPlayT: [1, e.TYPES.INTEGER],
              cid: [2, e.TYPES.STRING],
              finishCount: [13, e.TYPES.INTEGER],
              height: [3, e.TYPES.INTEGER],
              postId: [4, e.TYPES.STRING],
              videoDuration: [5, e.TYPES.INTEGER],
              videoInitialBufferingT: [6, e.TYPES.TIMER],
              videoPlayOrigin: [
                7,
                o("WAWebWamEnumVideoPlayOrigin").VIDEO_PLAY_ORIGIN,
              ],
              videoPlayResult: [
                8,
                o("WAWebWamEnumVideoPlayResult").VIDEO_PLAY_RESULT,
              ],
              videoPlayT: [9, e.TYPES.INTEGER],
              videoPlayType: [
                10,
                o("WAWebWamEnumVideoPlayType").VIDEO_PLAY_TYPE,
              ],
              videoSize: [11, e.TYPES.NUMBER],
              watchingModule: [14, e.TYPES.STRING],
              width: [12, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ChannelsVideoPlay: [] },
      );
    l.ChannelsVideoPlayWamEvent = s;
  },
  98,
);
