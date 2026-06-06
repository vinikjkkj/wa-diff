__d(
  "WAWebHistorySyncWorkerCompatibleNotificationUtils",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebChatConstants",
    "WAWebProtobufsHistorySync.pb",
    "WAWebSchemaChat",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t, n, r) {
      r === void 0 && (r = !1);
      var a = m(n),
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
        await o("WAWebSchemaChat")
          .getChatTable()
          .merge(t.toString(), { endOfHistoryTransferType: a }),
        await o("WAWebBackendApi").frontendSendAndReceive("chatCollectionAdd", {
          things: [i],
          options: { merge: !0, add: !1 },
        }));
    }
    async function d(e) {
      if (e.length !== 0) {
        var t = o("WAWebSchemaChat").getChatTable(),
          n = [],
          r = await Promise.allSettled(
            e.map(function (e) {
              var r = e.chat,
                o = e.endOfHistoryTransferTypeFromProto,
                a = e.setChatTimeToZero,
                i = m(o),
                l = { id: r, endOfHistoryTransferType: i };
              return (
                a === !0 && (l.t = 0),
                n.length < 3 && n.push(r.toLogString()),
                t
                  .merge(r.toString(), { endOfHistoryTransferType: i })
                  .then(function () {
                    return l;
                  })
              );
            }),
          );
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] ",
              " chats transferType => ",
              "",
            ])),
          e.length,
          n,
        );
        var a = [];
        (r.forEach(function (e) {
          e.status === "fulfilled"
            ? a.push(e.value)
            : o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] bulkUpdateEndOfHistorySync merge fail: ",
                    "",
                  ])),
                e.reason,
              );
        }),
          a.length !== 0 &&
            (await o("WAWebBackendApi").frontendSendAndReceive(
              "chatCollectionAdd",
              { things: a, options: { merge: !0, add: !1 } },
            )));
      }
    }
    function m(e) {
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
    ((l.updateEndOfHistorySync = c), (l.bulkUpdateEndOfHistorySync = d));
  },
  98,
);
