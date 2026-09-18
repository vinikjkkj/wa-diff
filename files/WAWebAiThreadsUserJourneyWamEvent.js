__d(
  "WAWebAiThreadsUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumCreationFailureReason",
    "WAWebWamEnumCreationStatus",
    "WAWebWamEnumMetaAiActionEntryPoint",
    "WAWebWamEnumThreadActionTypes",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          AiThreadsUserJourney: [
            7224,
            {
              aiSessionId: [1, e.TYPES.STRING],
              appSessionId: [2, e.TYPES.STRING],
              conversationThreadCreationTs: [3, e.TYPES.STRING],
              conversationThreadId: [4, e.TYPES.STRING],
              creationFailureReason: [
                12,
                o("WAWebWamEnumCreationFailureReason").CREATION_FAILURE_REASON,
              ],
              creationStatus: [
                13,
                o("WAWebWamEnumCreationStatus").CREATION_STATUS,
              ],
              dedupKey: [11, e.TYPES.INTEGER],
              eventTsMs: [5, e.TYPES.INTEGER],
              isCanonicalThread: [10, e.TYPES.BOOLEAN],
              isIncognitoMode: [6, e.TYPES.BOOLEAN],
              metaAiActionEntryPoint: [
                9,
                o("WAWebWamEnumMetaAiActionEntryPoint")
                  .META_AI_ACTION_ENTRY_POINT,
              ],
              rawBotEntryPoint: [7, e.TYPES.STRING],
              threadActionType: [
                8,
                o("WAWebWamEnumThreadActionTypes").THREAD_ACTION_TYPES,
              ],
              threadInboxPosition: [14, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { AiThreadsUserJourney: [] },
      );
    l.AiThreadsUserJourneyWamEvent = s;
  },
  98,
);
