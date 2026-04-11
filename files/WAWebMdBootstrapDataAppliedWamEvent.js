__d(
  "WAWebMdBootstrapDataAppliedWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumApplicationState",
    "WAWebWamEnumCollection",
    "WAWebWamEnumMdBootstrapHistoryPayloadType",
    "WAWebWamEnumMdBootstrapPayloadType",
    "WAWebWamEnumMdBootstrapSource",
    "WAWebWamEnumMdBootstrapStepResult",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MdBootstrapDataApplied: [
            2298,
            {
              appContext: [22, e.TYPES.STRING],
              appContextBitfield: [23, e.TYPES.INTEGER],
              applicationState: [
                21,
                o("WAWebWamEnumApplicationState").APPLICATION_STATE,
              ],
              chunkChatsApplied: [15, e.TYPES.INTEGER],
              chunkMsgsApplied: [16, e.TYPES.INTEGER],
              collection: [5, o("WAWebWamEnumCollection").COLLECTION],
              historySyncChunkOrder: [14, e.TYPES.INTEGER],
              historySyncRetryRequestId: [24, e.TYPES.STRING],
              historySyncStageProgress: [11, e.TYPES.INTEGER],
              mdBootstrapChatsCount: [17, e.TYPES.INTEGER],
              mdBootstrapContactsCount: [8, e.TYPES.INTEGER],
              mdBootstrapHistoryPayloadType: [
                10,
                o("WAWebWamEnumMdBootstrapHistoryPayloadType")
                  .MD_BOOTSTRAP_HISTORY_PAYLOAD_TYPE,
              ],
              mdBootstrapInlineContactsCount: [25, e.TYPES.INTEGER],
              mdBootstrapMessagesCount: [18, e.TYPES.INTEGER],
              mdBootstrapPayloadType: [
                3,
                o("WAWebWamEnumMdBootstrapPayloadType")
                  .MD_BOOTSTRAP_PAYLOAD_TYPE,
              ],
              mdBootstrapSource: [
                2,
                o("WAWebWamEnumMdBootstrapSource").MD_BOOTSTRAP_SOURCE,
              ],
              mdBootstrapStepDuration: [6, e.TYPES.INTEGER],
              mdBootstrapStepResult: [
                12,
                o("WAWebWamEnumMdBootstrapStepResult").MD_BOOTSTRAP_STEP_RESULT,
              ],
              mdDroppedMsgType: [19, e.TYPES.STRING],
              mdRegAttemptId: [9, e.TYPES.STRING],
              mdSessionId: [1, e.TYPES.STRING],
              mdSyncFailureReason: [20, e.TYPES.STRING],
              mdTimestamp: [4, e.TYPES.INTEGER],
              sentViaMms: [13, e.TYPES.BOOLEAN],
              usedSnapshot: [7, e.TYPES.BOOLEAN],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MdBootstrapDataApplied: [] },
      );
    l.MdBootstrapDataAppliedWamEvent = s;
  },
  98,
);
