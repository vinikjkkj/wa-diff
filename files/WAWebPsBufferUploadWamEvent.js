__d(
  "WAWebPsBufferUploadWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumApplicationState",
    "WAWebWamEnumPsBufferUploadResult",
    "WAWebWamEnumPsTokenNotReadyReason",
    "WAWebWamEnumPsUploadReason",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          PsBufferUpload: [
            2244,
            {
              applicationState: [
                6,
                o("WAWebWamEnumApplicationState").APPLICATION_STATE,
              ],
              isFromWamsys: [12, e.TYPES.BOOLEAN],
              isRealtime: [15, e.TYPES.BOOLEAN],
              isUserSampled: [14, e.TYPES.BOOLEAN],
              psBufferSequenceNumber: [13, e.TYPES.INTEGER],
              psBufferUploadHttpResponseCode: [3, e.TYPES.INTEGER],
              psBufferUploadResult: [
                1,
                o("WAWebWamEnumPsBufferUploadResult").PS_BUFFER_UPLOAD_RESULT,
              ],
              psBufferUploadT: [2, e.TYPES.TIMER],
              psDitheredT: [11, e.TYPES.INTEGER],
              psForceUpload: [10, e.TYPES.BOOLEAN],
              psTokenNotReadyReason: [
                4,
                o("WAWebWamEnumPsTokenNotReadyReason")
                  .PS_TOKEN_NOT_READY_REASON,
              ],
              psUploadReason: [
                9,
                o("WAWebWamEnumPsUploadReason").PS_UPLOAD_REASON,
              ],
              waConnectedToChatd: [5, e.TYPES.BOOLEAN],
            },
            [1, 1, 100],
            "regular",
          ],
        },
        { PsBufferUpload: [] },
      );
    l.PsBufferUploadWamEvent = s;
  },
  98,
);
