__d(
  "WAWebStatusReplyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMessageSendResultType",
    "WAWebWamEnumQuickReplySource",
    "WAWebWamEnumReplyEntryMethod",
    "WAWebWamEnumReplyExitMethod",
    "WAWebWamEnumStatusCategory",
    "WAWebWamEnumStatusContentType",
    "WAWebWamEnumStatusPosterContactType",
    "WAWebWamEnumStatusReplyMessageType",
    "WAWebWamEnumStatusReplyResult",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          StatusReply: [
            1180,
            {
              isMentioned: [7, e.TYPES.BOOLEAN],
              isPosterBiz: [4, e.TYPES.BOOLEAN],
              isPosterInAddressBook: [6, e.TYPES.BOOLEAN],
              isRecentQuickReplyUsed: [16, e.TYPES.BOOLEAN],
              isReplyBarBelowCanvas: [9, e.TYPES.BOOLEAN],
              isReplyBarOverMedia: [10, e.TYPES.BOOLEAN],
              isSubscribed: [19, e.TYPES.BOOLEAN],
              mediaHeight: [11, e.TYPES.INTEGER],
              mediaWidth: [12, e.TYPES.INTEGER],
              messageSendResult: [
                20,
                o("WAWebWamEnumMessageSendResultType").MESSAGE_SEND_RESULT_TYPE,
              ],
              postContainedPrompt: [15, e.TYPES.BOOLEAN],
              quickReplySource: [
                26,
                o("WAWebWamEnumQuickReplySource").QUICK_REPLY_SOURCE,
              ],
              replyEntryMethod: [
                13,
                o("WAWebWamEnumReplyEntryMethod").REPLY_ENTRY_METHOD,
              ],
              replyExitMethod: [
                14,
                o("WAWebWamEnumReplyExitMethod").REPLY_EXIT_METHOD,
              ],
              statusCategory: [
                17,
                o("WAWebWamEnumStatusCategory").STATUS_CATEGORY,
              ],
              statusContentType: [
                8,
                o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE,
              ],
              statusId: [23, e.TYPES.STRING],
              statusPosterContactType: [
                25,
                o("WAWebWamEnumStatusPosterContactType")
                  .STATUS_POSTER_CONTACT_TYPE,
              ],
              statusReplyMessageType: [
                3,
                o("WAWebWamEnumStatusReplyMessageType")
                  .STATUS_REPLY_MESSAGE_TYPE,
              ],
              statusReplyResult: [
                2,
                o("WAWebWamEnumStatusReplyResult").STATUS_REPLY_RESULT,
              ],
              statusSessionId: [1, e.TYPES.INTEGER],
              statusViewerSessionId: [24, e.TYPES.INTEGER],
              unifiedSessionId: [21, e.TYPES.STRING],
              updatesTabSessionId: [22, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { StatusReply: [] },
      );
    l.StatusReplyWamEvent = s;
  },
  98,
);
