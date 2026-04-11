__d(
  "WAWebChatConstants",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum")({
        COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY: 0,
        COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY: 1,
        INCOMPLETE: 2,
        NOT_INCLUDED_IN_HIST_SYNC: 3,
        COMPLETE_ON_DEMAND_SYNC_BUT_MORE_MSG_REMAIN_ON_PRIMARY: 4,
        COMPLETE_ON_DEMAND_SYNC_WITH_MORE_MSG_ON_PRIMARY_BUT_NO_ACCESS: 5,
      }),
      l = 300 * 1e3;
    ((i.ConversationEndOfHistoryTransferModelPropType = e), (i.FTS_TTL = l));
  },
  66,
);
