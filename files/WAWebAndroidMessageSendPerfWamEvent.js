__d(
  "WAWebAndroidMessageSendPerfWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumAgentEngagementEnumType",
    "WAWebWamEnumBotType",
    "WAWebWamEnumClientGroupSizeBucket",
    "WAWebWamEnumClientMessageSendStage",
    "WAWebWamEnumEditType",
    "WAWebWamEnumInvisibleMessageCategoryType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageSendResultType",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumSizeBucket",
    "WAWebWamEnumTypeOfGroupEnum",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          AndroidMessageSendPerf: [
            1994,
            {
              agentEngagementType: [
                47,
                o("WAWebWamEnumAgentEngagementEnumType")
                  .AGENT_ENGAGEMENT_ENUM_TYPE,
              ],
              appRestart: [16, e.TYPES.BOOLEAN],
              botType: [48, o("WAWebWamEnumBotType").BOT_TYPE],
              bucketedSenderKeyDistributionCountPercentage: [
                32,
                e.TYPES.INTEGER,
              ],
              bucketedSenderKeyDistributionHashTime: [35, e.TYPES.INTEGER],
              deviceCount: [36, e.TYPES.INTEGER],
              deviceSizeBucket: [26, o("WAWebWamEnumSizeBucket").SIZE_BUCKET],
              durationAbs: [11, e.TYPES.TIMER],
              durationRelative: [12, e.TYPES.TIMER],
              durationT: [1, e.TYPES.TIMER],
              editType: [42, o("WAWebWamEnumEditType").EDIT_TYPE],
              fetchPrekeys: [15, e.TYPES.BOOLEAN],
              fetchPrekeysPercentage: [21, e.TYPES.INTEGER],
              groupSizeBucket: [
                17,
                o("WAWebWamEnumClientGroupSizeBucket").CLIENT_GROUP_SIZE_BUCKET,
              ],
              invisibleMessageCategory: [
                45,
                o("WAWebWamEnumInvisibleMessageCategoryType")
                  .INVISIBLE_MESSAGE_CATEGORY_TYPE,
              ],
              isDirectedMessage: [33, e.TYPES.BOOLEAN],
              isE2eBackfill: [27, e.TYPES.BOOLEAN],
              isLid: [41, e.TYPES.BOOLEAN],
              isMessageFanout: [9, e.TYPES.BOOLEAN],
              isMessageForward: [8, e.TYPES.BOOLEAN],
              isPq: [49, e.TYPES.BOOLEAN],
              isRevokeMessage: [24, e.TYPES.BOOLEAN],
              isViewOnce: [29, e.TYPES.BOOLEAN],
              jobsInQueue: [18, e.TYPES.INTEGER],
              mediaType: [3, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              messageIsFirstUserMessage: [30, e.TYPES.BOOLEAN],
              messageIsInvisible: [31, e.TYPES.BOOLEAN],
              messageSendResult: [
                50,
                o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE,
              ],
              messageType: [4, o("WAWebWamEnumMessageType").MESSAGE_TYPE],
              networkWasDisconnected: [14, e.TYPES.BOOLEAN],
              participantCount: [37, e.TYPES.INTEGER],
              phoneCores: [34, e.TYPES.INTEGER],
              prekeysEligibleForPrallelProcessing: [28, e.TYPES.BOOLEAN],
              receiverDeviceCount: [39, e.TYPES.INTEGER],
              runningTasks: [44, e.TYPES.STRING],
              sendCount: [13, e.TYPES.INTEGER],
              sendRetryCount: [10, e.TYPES.INTEGER],
              sendStage: [
                2,
                o("WAWebWamEnumClientMessageSendStage")
                  .CLIENT_MESSAGE_SEND_STAGE,
              ],
              senderDeviceCount: [40, e.TYPES.INTEGER],
              senderKeyDistributionCountPercentage: [23, e.TYPES.INTEGER],
              sessionsMissingWhenComposing: [25, e.TYPES.BOOLEAN],
              targetDeviceGroupSizeBucket: [
                20,
                o("WAWebWamEnumClientGroupSizeBucket").CLIENT_GROUP_SIZE_BUCKET,
              ],
              threadsInExecution: [19, e.TYPES.INTEGER],
              typeOfGroup: [
                38,
                o("WAWebWamEnumTypeOfGroupEnum").TYPE_OF_GROUP_ENUM,
              ],
              userToDeviceSizeBucket: [46, e.TYPES.STRING],
            },
            [1, 1, 2e3],
            "regular",
          ],
        },
        { AndroidMessageSendPerf: [] },
      );
    l.AndroidMessageSendPerfWamEvent = s;
  },
  98,
);
