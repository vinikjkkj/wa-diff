__d(
  "WAWebMessageHighRetryCountWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumE2eDeviceType",
    "WAWebWamEnumEncryptionTypeCode",
    "WAWebWamEnumInvisibleMessageCategoryType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumSizeBucket",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MessageHighRetryCount: [
            3132,
            {
              deviceSizeBucket: [5, o("WAWebWamEnumSizeBucket").SIZE_BUCKET],
              e2eSenderType: [
                3,
                o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE,
              ],
              encryptionType: [
                10,
                o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE,
              ],
              invisibleMessageCategory: [
                6,
                o("WAWebWamEnumInvisibleMessageCategoryType")
                  .INVISIBLE_MESSAGE_CATEGORY_TYPE,
              ],
              isPq: [9, e.TYPES.BOOLEAN],
              isReceiverLidBased: [7, e.TYPES.BOOLEAN],
              isSenderLidBased: [8, e.TYPES.BOOLEAN],
              mediaType: [1, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              messageType: [4, o("WAWebWamEnumMessageType").MESSAGE_TYPE],
              retryCount: [2, e.TYPES.INTEGER],
            },
            [1, 20, 20],
            "regular",
          ],
        },
        { MessageHighRetryCount: [] },
      );
    l.MessageHighRetryCountWamEvent = s;
  },
  98,
);
