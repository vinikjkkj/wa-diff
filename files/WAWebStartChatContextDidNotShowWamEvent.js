__d(
  "WAWebStartChatContextDidNotShowWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumStartChatContextEntryPoint"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          StartChatContextDidNotShow: [
            7020,
            {
              dedupKey: [5, e.TYPES.INTEGER],
              isNonEmptyChat: [1, e.TYPES.BOOLEAN],
              otherUserIsContact: [2, e.TYPES.BOOLEAN],
              serverDecisionNotNeeded: [3, e.TYPES.BOOLEAN],
              startChatContextEntryPoint: [
                4,
                o("WAWebWamEnumStartChatContextEntryPoint")
                  .START_CHAT_CONTEXT_ENTRY_POINT,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { StartChatContextDidNotShow: [] },
      );
    l.StartChatContextDidNotShowWamEvent = s;
  },
  98,
);
