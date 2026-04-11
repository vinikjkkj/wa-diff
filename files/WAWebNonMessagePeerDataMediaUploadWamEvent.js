__d(
  "WAWebNonMessagePeerDataMediaUploadWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumPeerDataRequestType",
    "WAWebWamEnumPeerDataResponseResultType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          NonMessagePeerDataMediaUpload: [
            3902,
            {
              peerDataErrorCount: [1, e.TYPES.INTEGER],
              peerDataExistingDataNoUploadCount: [2, e.TYPES.INTEGER],
              peerDataNotFoundCount: [3, e.TYPES.INTEGER],
              peerDataRequestCount: [4, e.TYPES.INTEGER],
              peerDataRequestSessionId: [5, e.TYPES.STRING],
              peerDataRequestType: [
                6,
                o("WAWebWamEnumPeerDataRequestType").PEER_DATA_REQUEST_TYPE,
              ],
              peerDataResponseResult: [
                8,
                o("WAWebWamEnumPeerDataResponseResultType")
                  .PEER_DATA_RESPONSE_RESULT_TYPE,
              ],
              peerDataSuccessInlineNoUploadCount: [9, e.TYPES.INTEGER],
              peerDataSuccessUploadCount: [7, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { NonMessagePeerDataMediaUpload: [] },
      );
    l.NonMessagePeerDataMediaUploadWamEvent = s;
  },
  98,
);
