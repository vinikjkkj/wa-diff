__d(
  "WAWebNonMessagePeerDataRequestWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumPeerDataRequestErrorCode",
    "WAWebWamEnumPeerDataRequestType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        NonMessagePeerDataRequest: [
          3906,
          {
            peerDataRequestCount: [1, o("WAWebWamCodegenUtils").TYPES.INTEGER],
            peerDataRequestErrorCode: [
              4,
              o("WAWebWamEnumPeerDataRequestErrorCode")
                .PEER_DATA_REQUEST_ERROR_CODE,
            ],
            peerDataRequestSessionId: [
              2,
              o("WAWebWamCodegenUtils").TYPES.STRING,
            ],
            peerDataRequestType: [
              3,
              o("WAWebWamEnumPeerDataRequestType").PEER_DATA_REQUEST_TYPE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { NonMessagePeerDataRequest: [] },
    );
    l.NonMessagePeerDataRequestWamEvent = e;
  },
  98,
);
