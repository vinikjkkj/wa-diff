__d(
  "WAWebMessageReceiveWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumAddressingMode",
    "WAWebWamEnumAgentEngagementEnumType",
    "WAWebWamEnumBotType",
    "WAWebWamEnumChatOriginsType",
    "WAWebWamEnumDisappearingChatInitiatorType",
    "WAWebWamEnumE2eDeviceType",
    "WAWebWamEnumEditType",
    "WAWebWamEnumEncryptionTypeCode",
    "WAWebWamEnumEphemeralityInitiatorType",
    "WAWebWamEnumEphemeralityTriggerActionType",
    "WAWebWamEnumInvisibleMessageCategoryType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumOppositeVisibleIdentificationType",
    "WAWebWamEnumPairedMediaType",
    "WAWebWamEnumPrivateAiFeatureName",
    "WAWebWamEnumRevokeType",
    "WAWebWamEnumSizeBucket",
    "WAWebWamEnumStickerMakerSourceType",
    "WAWebWamEnumTypeOfGroupEnum",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MessageReceive: [
            450,
            {
              afterReadDuration: [61, e.TYPES.INTEGER],
              agentEngagementType: [
                28,
                o("WAWebWamEnumAgentEngagementEnumType")
                  .AGENT_ENGAGEMENT_ENUM_TYPE,
              ],
              appContext: [43, e.TYPES.STRING],
              appContextBitfield: [44, e.TYPES.INTEGER],
              botType: [37, o("WAWebWamEnumBotType").BOT_TYPE],
              chatOrigins: [
                38,
                o("WAWebWamEnumChatOriginsType").CHAT_ORIGINS_TYPE,
              ],
              deviceCount: [16, e.TYPES.INTEGER],
              deviceSizeBucket: [10, o("WAWebWamEnumSizeBucket").SIZE_BUCKET],
              disappearingChatInitiator: [
                14,
                o("WAWebWamEnumDisappearingChatInitiatorType")
                  .DISAPPEARING_CHAT_INITIATOR_TYPE,
              ],
              e2eSenderType: [
                57,
                o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE,
              ],
              editType: [25, o("WAWebWamEnumEditType").EDIT_TYPE],
              encryptionType: [
                54,
                o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE,
              ],
              ephemeralityDuration: [13, e.TYPES.INTEGER],
              ephemeralityInitiator: [
                26,
                o("WAWebWamEnumEphemeralityInitiatorType")
                  .EPHEMERALITY_INITIATOR_TYPE,
              ],
              ephemeralityTriggerAction: [
                27,
                o("WAWebWamEnumEphemeralityTriggerActionType")
                  .EPHEMERALITY_TRIGGER_ACTION_TYPE,
              ],
              hasUsername: [39, e.TYPES.BOOLEAN],
              hasUsernamePin: [45, e.TYPES.BOOLEAN],
              invisibleMessageCategory: [
                41,
                o("WAWebWamEnumInvisibleMessageCategoryType")
                  .INVISIBLE_MESSAGE_CATEGORY_TYPE,
              ],
              isAComment: [36, e.TYPES.BOOLEAN],
              isAReply: [19, e.TYPES.BOOLEAN],
              isAfterRead: [62, e.TYPES.BOOLEAN],
              isForwardedForward: [18, e.TYPES.BOOLEAN],
              isLid: [24, e.TYPES.BOOLEAN],
              isPq: [55, e.TYPES.BOOLEAN],
              isViewOnce: [9, e.TYPES.BOOLEAN],
              localAddressingMode: [
                33,
                o("WAWebWamEnumAddressingMode").ADDRESSING_MODE,
              ],
              messageAddressingMode: [
                34,
                o("WAWebWamEnumAddressingMode").ADDRESSING_MODE,
              ],
              messageIsInternational: [4, e.TYPES.BOOLEAN],
              messageIsInvisible: [23, e.TYPES.BOOLEAN],
              messageIsOffline: [5, e.TYPES.BOOLEAN],
              messageMediaType: [2, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              messageQueueTime: [15, e.TYPES.TIMER],
              messageReceiveT0: [6, e.TYPES.TIMER],
              messageReceiveT1: [7, e.TYPES.TIMER],
              messageReceiveT2: [49, e.TYPES.TIMER],
              messageType: [1, o("WAWebWamEnumMessageType").MESSAGE_TYPE],
              mutedGroupMessage: [8, e.TYPES.BOOLEAN],
              numOfWebUrlsInTextMessage: [3, e.TYPES.INTEGER],
              offlineCount: [30, e.TYPES.INTEGER],
              oppositeVisibleIdentification: [
                40,
                o("WAWebWamEnumOppositeVisibleIdentificationType")
                  .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE,
              ],
              paddingBytesSize: [22, e.TYPES.INTEGER],
              pairedMediaType: [
                42,
                o("WAWebWamEnumPairedMediaType").PAIRED_MEDIA_TYPE,
              ],
              participantCount: [17, e.TYPES.INTEGER],
              privateAiFeatureName: [
                53,
                o("WAWebWamEnumPrivateAiFeatureName").PRIVATE_AI_FEATURE_NAME,
              ],
              processingDeferred: [47, e.TYPES.BOOLEAN],
              receivedContactCardType: [58, e.TYPES.STRING],
              receivedContactMetadataTypes: [59, e.TYPES.STRING],
              receivedPhoneNumberContactSize: [50, e.TYPES.INTEGER],
              receivedPhoneNumberWithUsernameContactSize: [51, e.TYPES.INTEGER],
              receivedUsernameContactSize: [52, e.TYPES.INTEGER],
              receiverDefaultDisappearingDuration: [12, e.TYPES.INTEGER],
              revokeType: [20, o("WAWebWamEnumRevokeType").REVOKE_TYPE],
              senderDefaultDisappearingDuration: [11, e.TYPES.INTEGER],
              serverAddressingMode: [
                35,
                o("WAWebWamEnumAddressingMode").ADDRESSING_MODE,
              ],
              stanzaProcessCount: [48, e.TYPES.INTEGER],
              stickerIsAi: [29, e.TYPES.BOOLEAN],
              stickerIsFromStickerMaker: [31, e.TYPES.BOOLEAN],
              stickerIsPremium: [60, e.TYPES.BOOLEAN],
              stickerMakerSourceType: [
                32,
                o("WAWebWamEnumStickerMakerSourceType")
                  .STICKER_MAKER_SOURCE_TYPE,
              ],
              traceIdInt: [56, e.TYPES.INTEGER],
              typeOfGroup: [
                21,
                o("WAWebWamEnumTypeOfGroupEnum").TYPE_OF_GROUP_ENUM,
              ],
            },
            [1, 1, 5],
            "regular",
          ],
        },
        { MessageReceive: [] },
      );
    l.MessageReceiveWamEvent = s;
  },
  98,
);
