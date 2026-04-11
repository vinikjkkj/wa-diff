__d(
  "WAWebWebcMessageQueryWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumWebcChatType",
    "WAWebWamEnumWebcMessageQueryDirection",
    "WAWebWamEnumWebcQueryTriggerType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebcMessageQuery: [
            1876,
            {
              webcAudioMessageCount: [14, e.TYPES.INTEGER],
              webcBrowserNetworkType: [1, e.TYPES.STRING],
              webcBrowserStorageQuotaBytes: [20, e.TYPES.INTEGER],
              webcBrowserStorageQuotaUsedBytes: [21, e.TYPES.INTEGER],
              webcChatPosition: [2, e.TYPES.INTEGER],
              webcChatType: [13, o("WAWebWamEnumWebcChatType").WEBC_CHAT_TYPE],
              webcDocumentMessageCount: [16, e.TYPES.INTEGER],
              webcEarliestMessageIndex: [11, e.TYPES.INTEGER],
              webcEarliestMessageT: [12, e.TYPES.TIMER],
              webcMessageCount: [4, e.TYPES.INTEGER],
              webcMessageQueryTrigger: [
                19,
                o("WAWebWamEnumWebcQueryTriggerType").WEBC_QUERY_TRIGGER_TYPE,
              ],
              webcMessageQueryType: [
                3,
                o("WAWebWamEnumWebcMessageQueryDirection")
                  .WEBC_MESSAGE_QUERY_DIRECTION,
              ],
              webcOtherMessageCount: [18, e.TYPES.INTEGER],
              webcPhotoMessageCount: [7, e.TYPES.INTEGER],
              webcPttMessageCount: [15, e.TYPES.INTEGER],
              webcQueryT: [9, e.TYPES.TIMER],
              webcResponseBytes: [10, e.TYPES.INTEGER],
              webcStickerMessageCount: [17, e.TYPES.INTEGER],
              webcTextMessageCount: [5, e.TYPES.INTEGER],
              webcVideoMessageCount: [6, e.TYPES.INTEGER],
            },
            [1, 1, 5],
            "regular",
          ],
        },
        { WebcMessageQuery: [] },
      );
    l.WebcMessageQueryWamEvent = s;
  },
  98,
);
