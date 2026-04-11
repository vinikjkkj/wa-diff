__d(
  "WAWebBotJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumAdditionalCategoryType",
    "WAWebWamEnumBotDiscoveryPathType",
    "WAWebWamEnumBotEntryPointType",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumDiscoveryOriginType",
    "WAWebWamEnumInlineTosStatus",
    "WAWebWamEnumInputType",
    "WAWebWamEnumTsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          BotJourney: [
            4630,
            {
              actionType: [
                1,
                o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES,
              ],
              additionalCategory: [
                11,
                o("WAWebWamEnumAdditionalCategoryType")
                  .ADDITIONAL_CATEGORY_TYPE,
              ],
              aiCreationAvatarCropChanges: [38, e.TYPES.STRING],
              aiCreationInputType: [29, o("WAWebWamEnumInputType").INPUT_TYPE],
              aiCreationPersonalityCategoryInsert: [26, e.TYPES.STRING],
              aiCreationPersonalityCategorySelect: [27, e.TYPES.STRING],
              aiDiscoveryTab: [4, e.TYPES.STRING],
              aiSessionId: [18, e.TYPES.STRING],
              aiVoiceOnSelectionDefault: [24, e.TYPES.BOOLEAN],
              aiVoiceSelectionEnum: [25, e.TYPES.STRING],
              appSessionId: [2, e.TYPES.STRING],
              botDiscoveryPath: [
                8,
                o("WAWebWamEnumBotDiscoveryPathType").BOT_DISCOVERY_PATH_TYPE,
              ],
              botEntryPoint: [
                7,
                o("WAWebWamEnumBotEntryPointType").BOT_ENTRY_POINT_TYPE,
              ],
              botPersonaId: [5, e.TYPES.STRING],
              callRandomId: [13, e.TYPES.STRING],
              categoryType: [40, e.TYPES.STRING],
              conversationStarterCategory: [22, e.TYPES.STRING],
              conversationStarterIndex: [23, e.TYPES.INTEGER],
              conversationStarterLabel: [46, e.TYPES.STRING],
              conversationStarterPromptMode: [28, e.TYPES.STRING],
              deviceLanguage: [16, e.TYPES.STRING],
              discoveryOrigin: [
                19,
                o("WAWebWamEnumDiscoveryOriginType").DISCOVERY_ORIGIN_TYPE,
              ],
              eventTsMs: [47, e.TYPES.INTEGER],
              hasContinueChatting: [41, e.TYPES.BOOLEAN],
              hasYourAiCategory: [42, e.TYPES.BOOLEAN],
              inlineTosNoticeId: [20, e.TYPES.STRING],
              inlineTosStatus: [
                21,
                o("WAWebWamEnumInlineTosStatus").INLINE_TOS_STATUS,
              ],
              interestCategoriesSelected: [39, e.TYPES.INTEGER],
              isCache: [45, e.TYPES.BOOLEAN],
              isMetaAiAssistant: [12, e.TYPES.BOOLEAN],
              isMetaAiCharacterBotChat: [9, e.TYPES.BOOLEAN],
              isUserCreatedAgent: [10, e.TYPES.BOOLEAN],
              metricCount: [17, e.TYPES.INTEGER],
              rawBotEntryPoint: [48, e.TYPES.STRING],
              scrollDepth: [44, e.TYPES.INTEGER],
              scrollFetchLatency: [43, e.TYPES.INTEGER],
              uiSurface: [6, o("WAWebWamEnumTsSurface").TS_SURFACE],
              xmaReelIndex: [14, e.TYPES.INTEGER],
              xmaReelMaxIndex: [15, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        {
          BotJourney: [
            [[], ["appSessionId", "actionType", "botEntryPoint"], []],
          ],
        },
      );
    l.BotJourneyWamEvent = s;
  },
  98,
);
