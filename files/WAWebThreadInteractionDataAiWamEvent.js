__d(
  "WAWebThreadInteractionDataAiWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumAiChatOriginsType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ThreadInteractionDataAi: [
            6410,
            {
              aiChatOrigins: [
                1,
                o("WAWebWamEnumAiChatOriginsType").AI_CHAT_ORIGINS_TYPE,
              ],
              aiDiscoveryTab: [29, e.TYPES.STRING],
              bottomSheetAnimatedSent: [2, e.TYPES.INTEGER],
              bottomSheetEditedAnimatedSent: [3, e.TYPES.INTEGER],
              bottomSheetEditedSent: [4, e.TYPES.INTEGER],
              bottomSheetImagesGenerated: [5, e.TYPES.INTEGER],
              bottomSheetMemuInitiated: [6, e.TYPES.INTEGER],
              bottomSheetMemuMessagesSent: [7, e.TYPES.INTEGER],
              bottomSheetMessagesSent: [8, e.TYPES.INTEGER],
              bottomSheetPromptsInitiated: [9, e.TYPES.INTEGER],
              bottomSheetRegeneratedSent: [10, e.TYPES.INTEGER],
              commandSheetShow: [11, e.TYPES.INTEGER],
              imagineCommandClick: [14, e.TYPES.INTEGER],
              imagineMeMessagesSent: [15, e.TYPES.INTEGER],
              imagineMePromptsInitiatedCount: [16, e.TYPES.INTEGER],
              metaAiMentionClick: [19, e.TYPES.INTEGER],
              metaAiMentionShow: [20, e.TYPES.INTEGER],
              suggestionPromptsClick: [21, e.TYPES.INTEGER],
              suggestionPromptsShow: [22, e.TYPES.INTEGER],
              threadCreationDate: [28, e.TYPES.STRING],
              threadDs: [17, e.TYPES.STRING],
              threadId: [26, e.TYPES.STRING],
              threadIdByLid: [27, e.TYPES.STRING],
              totalMessageFromAgentCnt: [24, e.TYPES.INTEGER],
              totalMessageToAgentCnt: [25, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ThreadInteractionDataAi: [] },
      );
    l.ThreadInteractionDataAiWamEvent = s;
  },
  98,
);
