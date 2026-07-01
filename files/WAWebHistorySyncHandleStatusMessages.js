__d(
  "WAWebHistorySyncHandleStatusMessages",
  [
    "Promise",
    "WAAckLevel",
    "WAJids",
    "WALogger",
    "WALongInt",
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
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e, t, n, r, o) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, p) {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] start processing status",
                ])),
            ),
              (i.mdBootstrapMessagesCount = t.statusV3Messages.length),
              o(
                "WAWebHistorySyncNotificationUtils",
              ).commitHistoryDownloadedMetric({
                chunkDownloadFinishTimestamp: p,
                historySyncDownloadMetric: i,
                isSuccess: !0,
                startTs: a.historySyncStepStartedTs,
              }),
              t.statusV3Messages.sort(function (e, t) {
                var n = e.messageTimestamp,
                  r = t.messageTimestamp;
                return (
                  o("WATimeUtils").castToUnixTime(parseInt(n, 10)) -
                  o("WATimeUtils").castToUnixTime(parseInt(r, 10))
                );
              }));
            var _ = [];
            (yield (m || (m = n("Promise"))).all(
              t.statusV3Messages.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t,
                        a = null,
                        i = [];
                      if (e.key.fromMe === !0)
                        ((a = o("WAWebUserPrefsMeUser").getMeUserOrThrow()),
                          (i = e.userReceipt.filter(function (e) {
                            return (
                              e.readTimestamp != null && e.readTimestamp !== 0
                            );
                          })));
                      else {
                        var l = e.participant;
                        if (l == null) {
                          if (
                            r("WAWebWid").isXWid("newsletter", e.key.remoteJid)
                          )
                            return (
                              o("WALogger").LOG(
                                s ||
                                  (s = babelHelpers.taggedTemplateLiteralLoose([
                                    "[history sync] skipping newsletter status without participant",
                                  ])),
                              ),
                              (m || (m = n("Promise"))).resolve()
                            );
                          throw (
                            o("WALogger")
                              .ERROR(
                                u ||
                                  (u = babelHelpers.taggedTemplateLiteralLoose([
                                    "[history sync] missing participant in status message, remoteJid: ",
                                    "",
                                  ])),
                                e.key.remoteJid,
                              )
                              .sendLogs(
                                "hist-sync-missing-participant-in-status",
                              ),
                            r("err")(
                              "HistorySync:handleStatusMessages: missing participant",
                            )
                          );
                        }
                        a = o("WAWebWidFactory").createWid(l);
                      }
                      var d = {
                        type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                          .OTHER_STATUS,
                        externalId: r("nullthrows")(
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
                        author: a,
                        pushname: null,
                        isDirect: !1,
                      };
                      if (e.message == null)
                        return (
                          o("WALogger")
                            .ERROR(
                              c ||
                                (c = babelHelpers.taggedTemplateLiteralLoose([
                                  "[history sync] missing message",
                                ])),
                            )
                            .sendLogs("history-sync-missing-status-msg"),
                          (m || (m = n("Promise"))).resolve()
                        );
                      var p = o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
                        f = yield o("WAWebMsgProcessingApiUtils").parseMessage({
                          info: d,
                          ciphertextType: p,
                          msgProtobuf: r("nullthrows")(
                            e.message,
                            "HistorySync:handleStatusMessages: missing message",
                          ),
                          hsmInfo: null,
                        }),
                        g = f.renderableMsgs && f.renderableMsgs;
                      if (!g || g.length !== 1)
                        return (m || (m = n("Promise"))).resolve();
                      var h = g[0].id,
                        y = g[0].author,
                        C = babelHelpers.extends({}, g[0], {
                          author:
                            y &&
                            o("WAWebLidStatusMigrationUtils").matWidConvert(y),
                          id: new (r("WAWebMsgKey"))({
                            fromMe: h.fromMe,
                            remote: h.remote,
                            id: h.id,
                            participant:
                              h.participant == null
                                ? void 0
                                : o(
                                    "WAWebLidStatusMigrationUtils",
                                  ).matWidConvert(h.participant),
                          }),
                        });
                      if (e.participant === "0@s.whatsapp.net")
                        return (m || (m = n("Promise"))).resolve();
                      var b = e.ignore === !0;
                      if (
                        (b &&
                          (C = babelHelpers.extends({}, C, {
                            invis: !0,
                            ack: o("WAAckLevel").ACK.READ,
                          })),
                        yield o(
                          "WAWebHandleSingleMsgWorkerCompatible",
                        ).handleSingleMsg({
                          chatId: C.id.remote,
                          newMsg: C,
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
                            msgKeys: [C.id.toString()],
                          });
                        }),
                        o(
                          "WAWebMessagingGatingUtils",
                        ).isReportingTagSyncingEnabled() &&
                          ((t = e.reportingTokenInfo) == null
                            ? void 0
                            : t.reportingTag) != null)
                      ) {
                        var v;
                        C = babelHelpers.extends({}, C, {
                          reportingTokenInfo: {
                            reportingTag: new Uint8Array(
                              (v = e.reportingTokenInfo) == null
                                ? void 0
                                : v.reportingTag,
                            ),
                            version: o("WAWebReportingTokenConstants")
                              .REPORTING_TOKEN_VERSION.HISTORY_SYNC,
                          },
                        });
                      }
                      return (_.push(C), !0);
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
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] storing Status complete, ",
                    "",
                  ])),
                o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                  a,
                  t.statusV3Messages.length,
                ),
              ),
              o("WAWebDBReportingTokenUtils").handleHistorySyncedReportingInfo(
                _,
              ));
          },
        )),
        _.apply(this, arguments)
      );
    }
    l.handleStatusMessages = p;
  },
  98,
);
