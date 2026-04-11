__d(
  "WAWebSchemaChatThreadLoggingPendingEvents",
  [
    "WAWebChatThreadLoggingBoolFlagFields",
    "WAWebChatThreadLoggingCountFields",
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebStorageMutationBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "chat-thread-logging-pending-events";
    function s() {
      var t = o("WAWebModelStorageUtils").getStorage(),
        n = o("WAWebStorageMutationBuilder").columnBuilder(t.config),
        r = n.addColumn,
        a = n.addCompositePrimaryKey,
        i = n.addIndex;
      t.add(e)
        .version(
          o("WAWebModelStorageVersions").addChatThreadLoggingTable(),
          [
            a(["chatId", "startTs"]),
            i("chatId"),
            i("startTs"),
            r("msgsSent"),
            r("msgsReceived"),
            r("msgsRead"),
            r("viewOnceMsgsSent"),
            r("viewOnceMsgsReceived"),
            r("viewOnceMessagesOpened"),
            r("callOffersSent"),
            r("callOffersReceived"),
            r("totalCallDuration"),
            r("commerceMsgsSent"),
            r("commerceMsgsReceived"),
            r("pdpInquiriesSent"),
            r("reactionsSent"),
            r("reactionsReceived"),
            r("forwardMessagesSent"),
            r("forwardMessagesReceived"),
            r("editedMsgsSent"),
            r("botMessagesSent"),
            r("botMessagesReceived"),
            r("botMessagesEdited"),
            r("eventCreationMessagesSent"),
            r("eventCreationMessagesReceived"),
            r("eventResponseMessagesSent"),
            r("eventResponseMessagesReceived"),
            r("eventGroupStatusReplyOthersToOwn"),
            r("eventGroupStatusReplyOthersToOthers"),
            r("eventGroupStatusReplyOwnToOthers"),
            r("eventGroupStatusReplyOwnToOwn"),
            r("eventGroupStatusLikeOthersToOwn"),
            r("eventGroupStatusLikeOthersToOthers"),
          ].concat(
            []
              .concat(
                o("WAWebChatThreadLoggingCountFields").COUNT_FIELD_NAMES,
                o("WAWebChatThreadLoggingBoolFlagFields").FLAG_FIELD_NAMES,
              )
              .map(function (e) {
                return r(e);
              }),
          ),
        )
        .view(function (e) {
          return e;
        });
    }
    function u() {
      return o("WAWebModelStorageUtils").getStorage().table(e);
    }
    ((l.addTable = s), (l.getChatThreadLoggingPendingEventsTable = u));
  },
  98,
);
