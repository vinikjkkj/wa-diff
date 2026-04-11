__d(
  "WAWebUiActionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumAddressingMode",
    "WAWebWamEnumAgentEngagementEnumType",
    "WAWebWamEnumBotType",
    "WAWebWamEnumSizeBucket",
    "WAWebWamEnumUiActionChatType",
    "WAWebWamEnumUiActionType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          UiAction: [
            472,
            {
              agentEngagementType: [
                9,
                o("WAWebWamEnumAgentEngagementEnumType")
                  .AGENT_ENGAGEMENT_ENUM_TYPE,
              ],
              appContext: [21, e.TYPES.STRING],
              appContextBitfield: [22, e.TYPES.INTEGER],
              appSessionId: [26, e.TYPES.STRING],
              botType: [11, o("WAWebWamEnumBotType").BOT_TYPE],
              dbBgThreadReadsDurationT: [17, e.TYPES.TIMER],
              dbBgThreadWritesDurationT: [18, e.TYPES.TIMER],
              dbMainThreadCount: [13, e.TYPES.INTEGER],
              dbMainThreadReadsDurationT: [19, e.TYPES.TIMER],
              dbMainThreadWritesDurationT: [20, e.TYPES.TIMER],
              dbReadsCount: [14, e.TYPES.INTEGER],
              dbWritesCount: [15, e.TYPES.INTEGER],
              deviceCount: [5, e.TYPES.INTEGER],
              isLid: [8, e.TYPES.BOOLEAN],
              isLowPowerMode: [23, e.TYPES.BOOLEAN],
              localAddressingMode: [
                10,
                o("WAWebWamEnumAddressingMode").ADDRESSING_MODE,
              ],
              participantCount: [6, e.TYPES.INTEGER],
              peripheralConnected: [16, e.TYPES.STRING],
              sizeBucket: [4, o("WAWebWamEnumSizeBucket").SIZE_BUCKET],
              traceIdInt: [28, e.TYPES.INTEGER],
              uiActionChatType: [
                7,
                o("WAWebWamEnumUiActionChatType").UI_ACTION_CHAT_TYPE,
              ],
              uiActionPreloaded: [2, e.TYPES.BOOLEAN],
              uiActionPresentationSource: [25, e.TYPES.STRING],
              uiActionT: [3, e.TYPES.TIMER],
              uiActionTtrcSurfaceName: [12, e.TYPES.STRING],
              uiActionType: [1, o("WAWebWamEnumUiActionType").UI_ACTION_TYPE],
              unifiedSessionId: [27, e.TYPES.STRING],
            },
            [1, 100, 5e3],
            "regular",
          ],
        },
        { UiAction: [] },
      );
    l.UiActionWamEvent = s;
  },
  98,
);
