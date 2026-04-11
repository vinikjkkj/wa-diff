__d(
  "WAWebPlaceholderActivityWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumAddressingMode",
    "WAWebWamEnumBotType",
    "WAWebWamEnumE2eDeviceType",
    "WAWebWamEnumEncryptionTypeCode",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumPlaceholderAction",
    "WAWebWamEnumPlaceholderChatType",
    "WAWebWamEnumPlaceholderPopulationType",
    "WAWebWamEnumPlaceholderReasonType",
    "WAWebWamEnumPlaceholderType",
    "WAWebWamEnumSizeBucket",
    "WAWebWamEnumTypeOfGroupEnum",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          PlaceholderActivity: [
            1980,
            {
              botType: [24, o("WAWebWamEnumBotType").BOT_TYPE],
              deviceCount: [9, e.TYPES.INTEGER],
              deviceSizeBucket: [8, o("WAWebWamEnumSizeBucket").SIZE_BUCKET],
              e2eSenderType: [
                16,
                o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE,
              ],
              encryptionType: [
                22,
                o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE,
              ],
              isHostedChat: [19, e.TYPES.BOOLEAN],
              isLid: [12, e.TYPES.BOOLEAN],
              isSimpleSignal: [23, e.TYPES.BOOLEAN],
              localAddressingMode: [
                20,
                o("WAWebWamEnumAddressingMode").ADDRESSING_MODE,
              ],
              messageBeforeReg: [15, e.TYPES.BOOLEAN],
              messageIsRevoke: [7, e.TYPES.BOOLEAN],
              messageKeyHash: [14, e.TYPES.STRING],
              messageMediaType: [6, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              messageType: [5, o("WAWebWamEnumMessageType").MESSAGE_TYPE],
              participantCount: [10, e.TYPES.INTEGER],
              placeholderActionInd: [
                2,
                o("WAWebWamEnumPlaceholderAction").PLACEHOLDER_ACTION,
              ],
              placeholderAddReason: [
                11,
                o("WAWebWamEnumPlaceholderReasonType").PLACEHOLDER_REASON_TYPE,
              ],
              placeholderChatTypeInd: [
                3,
                o("WAWebWamEnumPlaceholderChatType").PLACEHOLDER_CHAT_TYPE,
              ],
              placeholderPopulationType: [
                17,
                o("WAWebWamEnumPlaceholderPopulationType")
                  .PLACEHOLDER_POPULATION_TYPE,
              ],
              placeholderTimePeriod: [4, e.TYPES.INTEGER],
              placeholderTypeInd: [
                1,
                o("WAWebWamEnumPlaceholderType").PLACEHOLDER_TYPE,
              ],
              typeOfGroup: [
                13,
                o("WAWebWamEnumTypeOfGroupEnum").TYPE_OF_GROUP_ENUM,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { PlaceholderActivity: [] },
      );
    l.PlaceholderActivityWamEvent = s;
  },
  98,
);
