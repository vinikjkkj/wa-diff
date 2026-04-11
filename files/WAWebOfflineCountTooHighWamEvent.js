__d(
  "WAWebOfflineCountTooHighWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumCallStanzaType",
    "WAWebWamEnumE2eDeviceType",
    "WAWebWamEnumEncryptionTypeCode",
    "WAWebWamEnumInvisibleMessageCategoryType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumStanzaType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          OfflineCountTooHigh: [
            2638,
            {
              callStanzaType: [
                7,
                o("WAWebWamEnumCallStanzaType").CALL_STANZA_TYPE,
              ],
              e2eSenderType: [
                10,
                o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE,
              ],
              encryptionType: [
                9,
                o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE,
              ],
              invisibleMessageCategory: [
                8,
                o("WAWebWamEnumInvisibleMessageCategoryType")
                  .INVISIBLE_MESSAGE_CATEGORY_TYPE,
              ],
              mediaType: [3, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              messageType: [4, o("WAWebWamEnumMessageType").MESSAGE_TYPE],
              notificationStanzaType: [6, e.TYPES.STRING],
              offlineCount: [2, e.TYPES.INTEGER],
              receiptStanzaType: [5, e.TYPES.STRING],
              stanzaType: [1, o("WAWebWamEnumStanzaType").STANZA_TYPE],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { OfflineCountTooHigh: [] },
      );
    l.OfflineCountTooHighWamEvent = s;
  },
  98,
);
