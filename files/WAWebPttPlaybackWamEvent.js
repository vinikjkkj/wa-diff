__d(
  "WAWebPttPlaybackWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumAudioOutputRoute",
    "WAWebWamEnumAudioStreamType",
    "WAWebWamEnumPttPlaybackSpeedType",
    "WAWebWamEnumPttPlayerType",
    "WAWebWamEnumPttStreamType",
    "WAWebWamEnumPttTriggerType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          PttPlayback: [
            2044,
            {
              audioStreamType: [
                19,
                o("WAWebWamEnumAudioStreamType").AUDIO_STREAM_TYPE,
              ],
              pttAudioRouteBluetoothTime: [23, e.TYPES.TIMER],
              pttAudioRouteChangeCount: [20, e.TYPES.INTEGER],
              pttAudioRouteEarpieceTime: [24, e.TYPES.TIMER],
              pttAudioRouteHeadsetTime: [25, e.TYPES.TIMER],
              pttAudioRouteInitial: [
                21,
                o("WAWebWamEnumAudioOutputRoute").AUDIO_OUTPUT_ROUTE,
              ],
              pttAudioRouteLast: [
                22,
                o("WAWebWamEnumAudioOutputRoute").AUDIO_OUTPUT_ROUTE,
              ],
              pttAudioRouteSpeakerTime: [26, e.TYPES.TIMER],
              pttDuration: [12, e.TYPES.TIMER],
              pttMainThreadBlock: [7, e.TYPES.BOOLEAN],
              pttMiniPlayerClick: [15, e.TYPES.INTEGER],
              pttMiniPlayerClose: [16, e.TYPES.BOOLEAN],
              pttMiniPlayerPauseCnt: [17, e.TYPES.INTEGER],
              pttPlayRequestT: [1, e.TYPES.TIMER],
              pttPlaybackFailed: [8, e.TYPES.BOOLEAN],
              pttPlaybackOverallT: [4, e.TYPES.TIMER],
              pttPlaybackSpeed: [
                10,
                o("WAWebWamEnumPttPlaybackSpeedType").PTT_PLAYBACK_SPEED_TYPE,
              ],
              pttPlaybackSpeedCnt: [11, e.TYPES.INTEGER],
              pttPlayedOutOfChat: [18, e.TYPES.BOOLEAN],
              pttPlayedPct: [14, e.TYPES.NUMBER],
              pttPlayer: [9, o("WAWebWamEnumPttPlayerType").PTT_PLAYER_TYPE],
              pttPlayerInitT: [2, e.TYPES.TIMER],
              pttPlayerPlayT: [3, e.TYPES.TIMER],
              pttSeekCnt: [13, e.TYPES.INTEGER],
              pttTrigger: [5, o("WAWebWamEnumPttTriggerType").PTT_TRIGGER_TYPE],
              pttType: [6, o("WAWebWamEnumPttStreamType").PTT_STREAM_TYPE],
              pttVolumeUpAfterMaxCount: [27, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { PttPlayback: [] },
      );
    l.PttPlaybackWamEvent = s;
  },
  98,
);
