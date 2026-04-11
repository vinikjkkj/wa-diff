__d(
  "WAWebHistorySyncWorkerCompatibleNotificationUtils",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebChatConstants",
    "WAWebProtobufsHistorySync.pb",
    "WAWebSchemaChat",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          r === void 0 && (r = !1);
          var a = c(n),
            i = { id: t, endOfHistoryTransferType: a };
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] update chat ",
                " end of history transfer type to ",
                "",
              ])),
            t.toLogString(),
            a,
          ),
            r && (i.t = 0),
            yield o("WAWebSchemaChat")
              .getChatTable()
              .merge(t.toString(), { endOfHistoryTransferType: a }),
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "chatCollectionAdd",
              { things: [i], options: { merge: !0, add: !1 } },
            ));
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return e ===
        o("WAWebProtobufsHistorySync.pb").Conversation$EndOfHistoryTransferType
          .COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY
        ? o("WAWebChatConstants").ConversationEndOfHistoryTransferModelPropType
            .COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY
        : e ===
            o("WAWebProtobufsHistorySync.pb")
              .Conversation$EndOfHistoryTransferType
              .COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY
          ? o("WAWebChatConstants")
              .ConversationEndOfHistoryTransferModelPropType
              .COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY
          : e ===
              o("WAWebProtobufsHistorySync.pb")
                .Conversation$EndOfHistoryTransferType
                .COMPLETE_ON_DEMAND_SYNC_BUT_MORE_MSG_REMAIN_ON_PRIMARY
            ? o("WAWebChatConstants")
                .ConversationEndOfHistoryTransferModelPropType
                .COMPLETE_ON_DEMAND_SYNC_BUT_MORE_MSG_REMAIN_ON_PRIMARY
            : e ===
                o("WAWebProtobufsHistorySync.pb")
                  .Conversation$EndOfHistoryTransferType
                  .COMPLETE_ON_DEMAND_SYNC_WITH_MORE_MSG_ON_PRIMARY_BUT_NO_ACCESS
              ? o("WAWebChatConstants")
                  .ConversationEndOfHistoryTransferModelPropType
                  .COMPLETE_ON_DEMAND_SYNC_WITH_MORE_MSG_ON_PRIMARY_BUT_NO_ACCESS
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    l.updateEndOfHistorySync = s;
  },
  98,
);
