__d(
  "WAWebWebcMediaRmrWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumWebcChatType",
    "WAWebWamEnumWebcRmrReasonCode",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebcMediaRmr: [
            1906,
            {
              messageMediaType: [10, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              webcBrowserNetworkType: [2, e.TYPES.STRING],
              webcBrowserStorageQuotaBytes: [11, e.TYPES.INTEGER],
              webcBrowserStorageQuotaUsedBytes: [12, e.TYPES.INTEGER],
              webcChatPosition: [1, e.TYPES.INTEGER],
              webcChatType: [9, o("WAWebWamEnumWebcChatType").WEBC_CHAT_TYPE],
              webcMediaRmrError: [8, e.TYPES.BOOLEAN],
              webcMediaRmrT: [6, e.TYPES.TIMER],
              webcMediaSize: [7, e.TYPES.INTEGER],
              webcMessageIndex: [3, e.TYPES.INTEGER],
              webcMessageT: [5, e.TYPES.TIMER],
              webcRmrReason: [
                14,
                o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE,
              ],
              webcRmrStatusCode: [13, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { WebcMediaRmr: [] },
      );
    l.WebcMediaRmrWamEvent = s;
  },
  98,
);
