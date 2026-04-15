__d(
  "WAWebHistorySyncHandleStatusMessages",
  [
    "Promise",
    "WAAckLevel",
    "WAJids",
    "WALogger",
    "WALongInt",
    "WANullthrows",
    "WATimeUtils",
    "WAWebApiHistorySyncNotification",
    "WAWebBackendJobs.flow",
    "WAWebDBReportingTokenUtils",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebHistorySyncLogUtils",
    "WAWebHistorySyncNotificationUtils",
    "WAWebLidStatusMigrationUtils",
    "WAWebMessageReceiptBatcher",
    "WAWebMessagingGatingUtils",
    "WAWebMsgKey",
    "WAWebMsgProcessingApiUtils",
    "WAWebReportingTokenConstants",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t, n, r, o) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, d) {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] start processing status",
                ])),
            ),
              (i.mdBootstrapMessagesCount = t.statusV3Messages.length),
              o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDownloadedMetric(
                i,
                a.historySyncStepStartedTs,
                !0,
                d,
              ),
              t.statusV3Messages.sort(function (e, t) {
                var n = e.messageTimestamp,
                  r = t.messageTimestamp;
                return (
                  o("WATimeUtils").castToUnixTime(parseInt(n, 10)) -
                  o("WATimeUtils").castToUnixTime(parseInt(r, 10))
                );
              }));
            var m = [];
            (yield (c || (c = n("Promise"))).all(
              t.statusV3Messages.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t,
                        a = null,
                        i = [];
                      e.key.fromMe === !0
                        ? ((a = o(
                            "WAWebUserPrefsMeUser",
                          ).getMePnUserOrThrow_DO_NOT_USE()),
                          (i = e.userReceipt.filter(function (e) {
                            return (
                              e.readTimestamp != null && e.readTimestamp !== 0
                            );
                          })))
                        : (a = o("WAWebWidFactory").createWid(
                            r("WANullthrows")(
                              e.participant,
                              "HistorySync:handleStatusMessages: missing participant",
                            ),
                          ));
                      var l = {
                        type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                          .OTHER_STATUS,
                        externalId: r("WANullthrows")(
                          e.key.id,
                          "HistorySync:handleStatusMessages: missing key.id",
                        ),
                        ts: o("WATimeUtils").castToUnixTime(
                          parseInt(e.messageTimestamp, 10),
                        ),
                        edit: -1,
                        isHsm: !1,
                        count: null,
                        chat: o("WAWebWidFactory").createWid(
                          o("WAJids").STATUS_JID,
                        ),
                        author: r("WANullthrows")(
                          a,
                          "HistorySync:handleStatusMessages: missing author",
                        ),
                        pushname: null,
                        isDirect: !1,
                      };
                      if (e.message == null)
                        return (
                          o("WALogger")
                            .ERROR(
                              s ||
                                (s = babelHelpers.taggedTemplateLiteralLoose([
                                  "[history sync] missing message",
                                ])),
                            )
                            .sendLogs("history-sync-missing-status-msg"),
                          (c || (c = n("Promise"))).resolve()
                        );
                      var u = o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
                        d = yield o("WAWebMsgProcessingApiUtils").parseMessage({
                          info: l,
                          ciphertextType: u,
                          msgProtobuf: r("WANullthrows")(
                            e.message,
                            "HistorySync:handleStatusMessages: missing message",
                          ),
                          hsmInfo: null,
                        }),
                        p = d.renderableMsgs && d.renderableMsgs;
                      if (!p || p.length !== 1)
                        return (c || (c = n("Promise"))).resolve();
                      var _ = p[0].id,
                        f = p[0].author,
                        g = babelHelpers.extends({}, p[0], {
                          author:
                            f &&
                            o("WAWebLidStatusMigrationUtils").matWidConvert(f),
                          id: new (r("WAWebMsgKey"))({
                            fromMe: _.fromMe,
                            remote: _.remote,
                            id: _.id,
                            participant:
                              _.participant == null
                                ? void 0
                                : o(
                                    "WAWebLidStatusMigrationUtils",
                                  ).matWidConvert(_.participant),
                          }),
                        });
                      if (e.participant === "0@s.whatsapp.net")
                        return (c || (c = n("Promise"))).resolve();
                      var h = e.ignore === !0;
                      if (
                        (h &&
                          (g = babelHelpers.extends({}, g, {
                            invis: !0,
                            ack: o("WAAckLevel").ACK.READ,
                          })),
                        yield o(
                          "WAWebHandleSingleMsgWorkerCompatible",
                        ).handleSingleMsg({
                          chatId: g.id.remote,
                          newMsg: g,
                          handleSingleMsgOrigin: "historyStatusMessages",
                        }),
                        i.forEach(function (e) {
                          var t,
                            n = o("WALongInt").numberOrThrowIfTooLarge(
                              (t = e.readTimestamp) != null ? t : 0,
                            ),
                            r = o("WAWebWidFactory").createWid(e.userJid);
                          o(
                            "WAWebMessageReceiptBatcher",
                          ).receiptBatcher.acceptOtherReceipt({
                            ts: n,
                            ack: o("WAAckLevel").ACK.READ,
                            receiverId: r,
                            msgKeys: [g.id.toString()],
                          });
                        }),
                        o(
                          "WAWebMessagingGatingUtils",
                        ).isReportingTagSyncingEnabled() &&
                          ((t = e.reportingTokenInfo) == null
                            ? void 0
                            : t.reportingTag) != null)
                      ) {
                        var y;
                        g = babelHelpers.extends({}, g, {
                          reportingTokenInfo: {
                            reportingTag: new Uint8Array(
                              (y = e.reportingTokenInfo) == null
                                ? void 0
                                : y.reportingTag,
                            ),
                            version: o("WAWebReportingTokenConstants")
                              .REPORTING_TOKEN_VERSION.HISTORY_SYNC,
                          },
                        });
                      }
                      return (m.push(g), !0);
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
              yield o(
                "WAWebApiHistorySyncNotification",
              ).updateCurrentlyProcessed(a.msgKey, a.syncType, a.chunkOrder),
              o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDataAppliedMetric({
                historySyncDataAppliedMetric: l,
                startTs: a.historySyncStepStartedTs,
                isSuccess: !0,
              }),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] storing Status complete, ",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                  a,
                  t.statusV3Messages.length,
                ),
              ),
              o("WAWebDBReportingTokenUtils").handleHistorySyncedReportingInfo(
                m,
              ));
          },
        )),
        m.apply(this, arguments)
      );
    }
    l.handleStatusMessages = d;
  },
  98,
);
