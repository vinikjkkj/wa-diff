__d(
  "WAWebMediaStreamPlaybackWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumPlaybackOriginType",
    "WAWebWamEnumPlaybackStateType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MediaStreamPlayback: [
            1584,
            {
              bytesDownloadedStart: [4, e.TYPES.NUMBER],
              bytesTransferred: [5, e.TYPES.NUMBER],
              didPlay: [15, e.TYPES.BOOLEAN],
              forcedPlayCount: [12, e.TYPES.INTEGER],
              initialBufferingT: [7, e.TYPES.TIMER],
              mediaSize: [2, e.TYPES.NUMBER],
              mediaType: [3, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              overallPlayT: [10, e.TYPES.TIMER],
              overallT: [1, e.TYPES.TIMER],
              playbackCount: [14, e.TYPES.INTEGER],
              playbackError: [17, e.TYPES.INTEGER],
              playbackOrigin: [
                16,
                o("WAWebWamEnumPlaybackOriginType").PLAYBACK_ORIGIN_TYPE,
              ],
              playbackState: [
                11,
                o("WAWebWamEnumPlaybackStateType").PLAYBACK_STATE_TYPE,
              ],
              seekCount: [13, e.TYPES.INTEGER],
              statusId: [18, e.TYPES.STRING],
              totalRebufferingCount: [9, e.TYPES.INTEGER],
              totalRebufferingT: [8, e.TYPES.TIMER],
              videoDuration: [6, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MediaStreamPlayback: [] },
      );
    l.MediaStreamPlaybackWamEvent = s;
  },
  98,
);
