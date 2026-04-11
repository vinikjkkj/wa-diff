__d(
  "WAWebE2eRetryRejectWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumDeviceType",
    "WAWebWamEnumE2eDeviceType",
    "WAWebWamEnumEncryptionTypeCode",
    "WAWebWamEnumInvisibleMessageCategoryType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumRetryRejectReason",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          E2eRetryReject: [
            3578,
            {
              e2eSenderType: [
                10,
                o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE,
              ],
              encryptionType: [
                9,
                o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE,
              ],
              invisibleMessageCategory: [
                6,
                o("WAWebWamEnumInvisibleMessageCategoryType")
                  .INVISIBLE_MESSAGE_CATEGORY_TYPE,
              ],
              isPq: [8, e.TYPES.BOOLEAN],
              mediaType: [7, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              messageKeyHash: [11, e.TYPES.STRING],
              messageType: [1, o("WAWebWamEnumMessageType").MESSAGE_TYPE],
              msgRetryCount: [2, e.TYPES.INTEGER],
              retryRejectReason: [
                3,
                o("WAWebWamEnumRetryRejectReason").RETRY_REJECT_REASON,
              ],
              retryRevoke: [4, e.TYPES.BOOLEAN],
              senderDeviceType: [5, o("WAWebWamEnumDeviceType").DEVICE_TYPE],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { E2eRetryReject: [] },
      );
    l.E2eRetryRejectWamEvent = s;
  },
  98,
);
