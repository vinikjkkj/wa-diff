__d(
  "WAWebSearchTheWebFunnelWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumImageSearchFailedErrorType",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumStwEntryPoint",
    "WAWebWamEnumStwFormat",
    "WAWebWamEnumStwInteraction",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        SearchTheWebFunnel: [
          5702,
          {
            imageSearchFailedErrorType: [
              5,
              o("WAWebWamEnumImageSearchFailedErrorType")
                .IMAGE_SEARCH_FAILED_ERROR_TYPE,
            ],
            messageType: [1, o("WAWebWamEnumMessageType").MESSAGE_TYPE],
            stwEntryPoint: [2, o("WAWebWamEnumStwEntryPoint").STW_ENTRY_POINT],
            stwFormat: [3, o("WAWebWamEnumStwFormat").STW_FORMAT],
            stwInteraction: [
              4,
              o("WAWebWamEnumStwInteraction").STW_INTERACTION,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { SearchTheWebFunnel: [] },
    );
    l.SearchTheWebFunnelWamEvent = e;
  },
  98,
);
