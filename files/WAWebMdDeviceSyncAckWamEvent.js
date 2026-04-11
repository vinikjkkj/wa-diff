__d(
  "WAWebMdDeviceSyncAckWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumAddressingMode",
    "WAWebWamEnumEncryptionTypeCode",
    "WAWebWamEnumInvisibleMessageCategoryType",
    "WAWebWamEnumMessageChatType",
    "WAWebWamEnumTypeOfGroupEnum",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        MdDeviceSyncAck: [
          2180,
          {
            chatType: [1, o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE],
            encryptionType: [
              8,
              o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE,
            ],
            invisibleMessageCategory: [
              7,
              o("WAWebWamEnumInvisibleMessageCategoryType")
                .INVISIBLE_MESSAGE_CATEGORY_TYPE,
            ],
            isLid: [3, o("WAWebWamCodegenUtils").TYPES.BOOLEAN],
            localAddressingMode: [
              5,
              o("WAWebWamEnumAddressingMode").ADDRESSING_MODE,
            ],
            revoke: [2, o("WAWebWamCodegenUtils").TYPES.BOOLEAN],
            serverAddressingMode: [
              6,
              o("WAWebWamEnumAddressingMode").ADDRESSING_MODE,
            ],
            typeOfGroup: [
              4,
              o("WAWebWamEnumTypeOfGroupEnum").TYPE_OF_GROUP_ENUM,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { MdDeviceSyncAck: [] },
    );
    l.MdDeviceSyncAckWamEvent = e;
  },
  98,
);
