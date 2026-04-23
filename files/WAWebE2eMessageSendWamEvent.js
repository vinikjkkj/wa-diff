__d(
  "WAWebE2eMessageSendWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumAddressingMode",
    "WAWebWamEnumAgentEngagementEnumType",
    "WAWebWamEnumBotType",
    "WAWebWamEnumDeviceType",
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
    "WAWebWamEnumReachabilityStatus",
    "WAWebWamEnumRevokeType",
    "WAWebWamEnumTypeOfGroupEnum",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          E2eMessageSend: [
            476,
            {
              agentEngagementType: [
                15,
                o("WAWebWamEnumAgentEngagementEnumType")
                  .AGENT_ENGAGEMENT_ENUM_TYPE,
              ],
              botType: [17, o("WAWebWamEnumBotType").BOT_TYPE],
              e2eBackfill: [18, e.TYPES.BOOLEAN],
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
              e2eReceiverDeviceType: [
                19,
                o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE,
              ],
              e2eReceiverType: [8, o("WAWebWamEnumDeviceType").DEVICE_TYPE],
              e2eSuccessful: [1, e.TYPES.BOOLEAN],
              editType: [14, o("WAWebWamEnumEditType").EDIT_TYPE],
              encRetryCount: [9, e.TYPES.INTEGER],
              encryptionType: [
                23,
                o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE,
              ],
              groupEncryptionState: [
                22,
                o("WAWebWamEnumGroupEncryptionType").GROUP_ENCRYPTION_TYPE,
              ],
              initialSendAttemptReachabilityStatus: [
                26,
                o("WAWebWamEnumReachabilityStatus").REACHABILITY_STATUS,
              ],
              invisibleMessageCategory: [
                21,
                o("WAWebWamEnumInvisibleMessageCategoryType")
                  .INVISIBLE_MESSAGE_CATEGORY_TYPE,
              ],
              isLid: [12, e.TYPES.BOOLEAN],
              isPq: [25, e.TYPES.BOOLEAN],
              isSimpleSignal: [24, e.TYPES.BOOLEAN],
              localAddressingMode: [
                16,
                o("WAWebWamEnumAddressingMode").ADDRESSING_MODE,
              ],
              messageDistributionType: [
                20,
                o("WAWebWamEnumMessageDistributionEnumType")
                  .MESSAGE_DISTRIBUTION_ENUM_TYPE,
              ],
              messageIsInvisible: [10, e.TYPES.BOOLEAN],
              messageMediaType: [7, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              retryCount: [3, e.TYPES.INTEGER],
              revokeType: [11, o("WAWebWamEnumRevokeType").REVOKE_TYPE],
              typeOfGroup: [
                13,
                o("WAWebWamEnumTypeOfGroupEnum").TYPE_OF_GROUP_ENUM,
              ],
            },
            [1, 20, 20],
            "regular",
          ],
        },
        { E2eMessageSend: [] },
      );
    l.E2eMessageSendWamEvent = s;
  },
  98,
);
