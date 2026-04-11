__d(
  "WAWebE2eMessageRecvWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumAddressingMode",
    "WAWebWamEnumAgentEngagementEnumType",
    "WAWebWamEnumBotType",
    "WAWebWamEnumE2eCiphertextType",
    "WAWebWamEnumE2eDestination",
    "WAWebWamEnumE2eDeviceType",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWamEnumEditType",
    "WAWebWamEnumEncryptionTypeCode",
    "WAWebWamEnumGroupEncryptionType",
    "WAWebWamEnumInvisibleMessageCategoryType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageDistributionEnumType",
    "WAWebWamEnumRevokeType",
    "WAWebWamEnumStanzaType",
    "WAWebWamEnumTypeOfGroupEnum",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          E2eMessageRecv: [
            478,
            {
              agentEngagementType: [
                15,
                o("WAWebWamEnumAgentEngagementEnumType")
                  .AGENT_ENGAGEMENT_ENUM_TYPE,
              ],
              botType: [19, o("WAWebWamEnumBotType").BOT_TYPE],
              e2eCiphertextType: [
                5,
                o("WAWebWamEnumE2eCiphertextType").E2E_CIPHERTEXT_TYPE,
              ],
              e2eCiphertextVersion: [6, e.TYPES.INTEGER],
              e2eDestination: [
                4,
                o("WAWebWamEnumE2eDestination").E2E_DESTINATION,
              ],
              e2eFailureReason: [
                2,
                o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON,
              ],
              e2eSenderType: [
                8,
                o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE,
              ],
              e2eSuccessful: [1, e.TYPES.BOOLEAN],
              editType: [13, o("WAWebWamEnumEditType").EDIT_TYPE],
              encryptionType: [
                25,
                o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE,
              ],
              groupEncryptionState: [
                23,
                o("WAWebWamEnumGroupEncryptionType").GROUP_ENCRYPTION_TYPE,
              ],
              invisibleMessageCategory: [
                22,
                o("WAWebWamEnumInvisibleMessageCategoryType")
                  .INVISIBLE_MESSAGE_CATEGORY_TYPE,
              ],
              isHostedChat: [20, e.TYPES.BOOLEAN],
              isLid: [11, e.TYPES.BOOLEAN],
              isPq: [27, e.TYPES.BOOLEAN],
              isSimpleSignal: [26, e.TYPES.BOOLEAN],
              localAddressingMode: [
                16,
                o("WAWebWamEnumAddressingMode").ADDRESSING_MODE,
              ],
              messageAddressingMode: [
                17,
                o("WAWebWamEnumAddressingMode").ADDRESSING_MODE,
              ],
              messageDistributionType: [
                21,
                o("WAWebWamEnumMessageDistributionEnumType")
                  .MESSAGE_DISTRIBUTION_ENUM_TYPE,
              ],
              messageMediaType: [7, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              offline: [9, e.TYPES.BOOLEAN],
              retryCount: [3, e.TYPES.INTEGER],
              revokeType: [10, o("WAWebWamEnumRevokeType").REVOKE_TYPE],
              serverAddressingMode: [
                18,
                o("WAWebWamEnumAddressingMode").ADDRESSING_MODE,
              ],
              stanzaType: [14, o("WAWebWamEnumStanzaType").STANZA_TYPE],
              typeOfGroup: [
                12,
                o("WAWebWamEnumTypeOfGroupEnum").TYPE_OF_GROUP_ENUM,
              ],
            },
            [1, 1, 20],
            "regular",
          ],
        },
        { E2eMessageRecv: [] },
      );
    l.E2eMessageRecvWamEvent = s;
  },
  98,
);
