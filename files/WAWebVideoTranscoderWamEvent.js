__d(
  "WAWebVideoTranscoderWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumVideoTranscoderAlgorithmType",
    "WAWebWamEnumVideoTranscoderResultType",
    "WAWebWamEnumVideoTranscoderSourceFormatType",
    "WAWebWamEnumVideoTranscoderTargetFormatType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          VideoTranscoder: [
            1802,
            {
              sourceAudioBitRate: [12, e.TYPES.NUMBER],
              sourceAudioCodec: [23, e.TYPES.STRING],
              sourceContainerFormat: [24, e.TYPES.STRING],
              sourceDuration: [8, e.TYPES.TIMER],
              sourceFileExtension: [25, e.TYPES.STRING],
              sourceFileSize: [7, e.TYPES.NUMBER],
              sourceFormat: [
                14,
                o("WAWebWamEnumVideoTranscoderSourceFormatType")
                  .VIDEO_TRANSCODER_SOURCE_FORMAT_TYPE,
              ],
              sourceFrameRate: [13, e.TYPES.NUMBER],
              sourceHeight: [10, e.TYPES.NUMBER],
              sourceMimeType: [26, e.TYPES.STRING],
              sourceVideoBitRate: [11, e.TYPES.NUMBER],
              sourceVideoCodec: [27, e.TYPES.STRING],
              sourceWidth: [9, e.TYPES.NUMBER],
              targetAudioBitRate: [20, e.TYPES.NUMBER],
              targetDuration: [16, e.TYPES.TIMER],
              targetFileSize: [15, e.TYPES.NUMBER],
              targetFormat: [
                22,
                o("WAWebWamEnumVideoTranscoderTargetFormatType")
                  .VIDEO_TRANSCODER_TARGET_FORMAT_TYPE,
              ],
              targetFrameRate: [21, e.TYPES.NUMBER],
              targetHeight: [18, e.TYPES.NUMBER],
              targetVideoBitRate: [19, e.TYPES.NUMBER],
              targetWidth: [17, e.TYPES.NUMBER],
              transcoderAlgorithm: [
                1,
                o("WAWebWamEnumVideoTranscoderAlgorithmType")
                  .VIDEO_TRANSCODER_ALGORITHM_TYPE,
              ],
              transcoderContainsVideocomposition: [5, e.TYPES.BOOLEAN],
              transcoderHasEdits: [6, e.TYPES.BOOLEAN],
              transcoderIsPassthrough: [4, e.TYPES.BOOLEAN],
              transcoderResult: [
                2,
                o("WAWebWamEnumVideoTranscoderResultType")
                  .VIDEO_TRANSCODER_RESULT_TYPE,
              ],
              transcoderT: [3, e.TYPES.TIMER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { VideoTranscoder: [] },
      );
    l.VideoTranscoderWamEvent = s;
  },
  98,
);
