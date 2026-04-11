__d(
  "WAWebNonMessagePeerDataOperationResponseWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumPeerDataRequestErrorCode",
    "WAWebWamEnumPeerDataRequestType",
    "WAWebWamEnumPeerDataResponseApplyResultType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          NonMessagePeerDataOperationResponse: [
            3904,
            {
              peerDataErrorCount: [1, e.TYPES.INTEGER],
              peerDataNotFoundCount: [2, e.TYPES.INTEGER],
              peerDataRequestErrorCode: [
                9,
                o("WAWebWamEnumPeerDataRequestErrorCode")
                  .PEER_DATA_REQUEST_ERROR_CODE,
              ],
              peerDataRequestSessionId: [3, e.TYPES.STRING],
              peerDataRequestType: [
                4,
                o("WAWebWamEnumPeerDataRequestType").PEER_DATA_REQUEST_TYPE,
              ],
              peerDataResponseApplyResult: [
                8,
                o("WAWebWamEnumPeerDataResponseApplyResultType")
                  .PEER_DATA_RESPONSE_APPLY_RESULT_TYPE,
              ],
              peerDataResponseCount: [5, e.TYPES.INTEGER],
              peerDataSuccessProcessCount: [6, e.TYPES.INTEGER],
              peerDataSuccessResponseCount: [7, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { NonMessagePeerDataOperationResponse: [] },
      );
    l.NonMessagePeerDataOperationResponseWamEvent = s;
  },
  98,
);
