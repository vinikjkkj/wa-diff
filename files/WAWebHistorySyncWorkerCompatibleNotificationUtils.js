__d(
  "WAWebHistorySyncWorkerCompatibleNotificationUtils",
  [
    "Promise",
    "WALogger",
    "WAWebBackendApi",
    "WAWebChatConstants",
    "WAWebProtobufsHistorySync.pb",
    "WAWebSchemaChat",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          r === void 0 && (r = !1);
          var a = f(n),
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
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length !== 0) {
            var t = o("WAWebSchemaChat").getChatTable(),
              r = [],
              a = yield (c || (c = n("Promise"))).allSettled(
                e.map(function (e) {
                  var n = e.chat,
                    o = e.endOfHistoryTransferTypeFromProto,
                    a = e.setChatTimeToZero,
                    i = f(o),
                    l = { id: n, endOfHistoryTransferType: i };
                  return (
                    a === !0 && (l.t = 0),
                    r.length < 3 && r.push(n.toLogString()),
                    t
                      .merge(n.toString(), { endOfHistoryTransferType: i })
                      .then(function () {
                        return l;
                      })
                  );
                }),
              );
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] updated ",
                  " chats end of history transfer type => ",
                  "",
                ])),
              e.length,
              r,
            );
            var i = [];
            (a.forEach(function (e) {
              e.status === "fulfilled"
                ? i.push(e.value)
                : o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[history sync] bulkUpdateEndOfHistorySync: chat merge failed: ",
                        "",
                      ])),
                    e.reason,
                  );
            }),
              i.length !== 0 &&
                (yield o("WAWebBackendApi").frontendSendAndReceive(
                  "chatCollectionAdd",
                  { things: i, options: { merge: !0, add: !1 } },
                )));
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
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
    ((l.updateEndOfHistorySync = d), (l.bulkUpdateEndOfHistorySync = p));
  },
  98,
);
