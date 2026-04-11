__d(
  "WAWebMdChatAssignmentWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumChatAssignmentActionType",
    "WAWebWamEnumChatAssignmentChatType",
    "WAWebWamEnumChatAssignmentEntryPointType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MdChatAssignment: [
            3752,
            {
              assignerAgentId: [1, e.TYPES.STRING],
              assignerBrowserId: [2, e.TYPES.STRING],
              assignerMdId: [3, e.TYPES.INTEGER],
              chatAssignmentAction: [
                4,
                o("WAWebWamEnumChatAssignmentActionType")
                  .CHAT_ASSIGNMENT_ACTION_TYPE,
              ],
              chatAssignmentAgentId: [5, e.TYPES.STRING],
              chatAssignmentBrowserId: [6, e.TYPES.STRING],
              chatAssignmentChatType: [
                7,
                o("WAWebWamEnumChatAssignmentChatType")
                  .CHAT_ASSIGNMENT_CHAT_TYPE,
              ],
              chatAssignmentEntryPoint: [
                8,
                o("WAWebWamEnumChatAssignmentEntryPointType")
                  .CHAT_ASSIGNMENT_ENTRY_POINT_TYPE,
              ],
              chatAssignmentMdId: [9, e.TYPES.INTEGER],
              chatsCnt: [10, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MdChatAssignment: [] },
      );
    l.MdChatAssignmentWamEvent = s;
  },
  98,
);
