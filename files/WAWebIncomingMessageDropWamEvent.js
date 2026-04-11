__d(
  "WAWebIncomingMessageDropWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumAddressingMode",
    "WAWebWamEnumAgentEngagementEnumType",
    "WAWebWamEnumBotType",
    "WAWebWamEnumE2eCiphertextType",
    "WAWebWamEnumE2eDestination",
    "WAWebWamEnumE2eDeviceType",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWamEnumEncryptionTypeCode",
    "WAWebWamEnumInvisibleMessageCategoryType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageDropReasonType",
    "WAWebWamEnumRevokeType",
    "WAWebWamEnumTypeOfGroupEnum",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          IncomingMessageDrop: [
            3724,
            {
              agentEngagementType: [
                12,
                o("WAWebWamEnumAgentEngagementEnumType")
                  .AGENT_ENGAGEMENT_ENUM_TYPE,
              ],
              botType: [14, o("WAWebWamEnumBotType").BOT_TYPE],
              e2eCiphertextType: [
                1,
                o("WAWebWamEnumE2eCiphertextType").E2E_CIPHERTEXT_TYPE,
              ],
              e2eDestination: [
                2,
                o("WAWebWamEnumE2eDestination").E2E_DESTINATION,
              ],
              e2eFailureReason: [
                9,
                o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON,
              ],
              e2eSenderType: [
                3,
                o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE,
              ],
              encryptionType: [
                18,
                o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE,
              ],
              invisibleMessageCategory: [
                13,
                o("WAWebWamEnumInvisibleMessageCategoryType")
                  .INVISIBLE_MESSAGE_CATEGORY_TYPE,
              ],
              isLid: [15, e.TYPES.BOOLEAN],
              isPq: [20, e.TYPES.BOOLEAN],
              isSimpleSignal: [19, e.TYPES.BOOLEAN],
              localAddressingMode: [
                16,
                o("WAWebWamEnumAddressingMode").ADDRESSING_MODE,
              ],
              messageDropReason: [
                4,
                o("WAWebWamEnumMessageDropReasonType").MESSAGE_DROP_REASON_TYPE,
              ],
              messageMediaType: [5, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              offline: [6, e.TYPES.BOOLEAN],
              offlineCount: [11, e.TYPES.INTEGER],
              retryCount: [7, e.TYPES.INTEGER],
              revokeType: [8, o("WAWebWamEnumRevokeType").REVOKE_TYPE],
              typeOfGroup: [
                10,
                o("WAWebWamEnumTypeOfGroupEnum").TYPE_OF_GROUP_ENUM,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { IncomingMessageDrop: [] },
      );
    l.IncomingMessageDropWamEvent = s;
  },
  98,
);
