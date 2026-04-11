__d(
  "WAWebMdChatAssignmentSecondaryActionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumErrorType",
    "WAWebWamEnumMdChatAssignmentAssignmentType",
    "WAWebWamEnumMdChatAssignmentChatType",
    "WAWebWamEnumMdChatAssignmentSecondaryActionType",
    "WAWebWamEnumMdChatAssignmentSourceType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MdChatAssignmentSecondaryAction: [
            3716,
            {
              mdChatAssignmentSecondaryActionAgentId: [1, e.TYPES.STRING],
              mdChatAssignmentSecondaryActionAssignmentType: [
                8,
                o("WAWebWamEnumMdChatAssignmentAssignmentType")
                  .MD_CHAT_ASSIGNMENT_ASSIGNMENT_TYPE,
              ],
              mdChatAssignmentSecondaryActionBrowserId: [2, e.TYPES.STRING],
              mdChatAssignmentSecondaryActionChatType: [
                3,
                o("WAWebWamEnumMdChatAssignmentChatType")
                  .MD_CHAT_ASSIGNMENT_CHAT_TYPE,
              ],
              mdChatAssignmentSecondaryActionError: [
                4,
                o("WAWebWamEnumErrorType").ERROR_TYPE,
              ],
              mdChatAssignmentSecondaryActionMdId: [5, e.TYPES.INTEGER],
              mdChatAssignmentSecondaryActionSource: [
                6,
                o("WAWebWamEnumMdChatAssignmentSourceType")
                  .MD_CHAT_ASSIGNMENT_SOURCE_TYPE,
              ],
              mdChatAssignmentSecondaryActionType: [
                7,
                o("WAWebWamEnumMdChatAssignmentSecondaryActionType")
                  .MD_CHAT_ASSIGNMENT_SECONDARY_ACTION_TYPE,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MdChatAssignmentSecondaryAction: [] },
      );
    l.MdChatAssignmentSecondaryActionWamEvent = s;
  },
  98,
);
