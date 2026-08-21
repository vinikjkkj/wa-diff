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
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.chunkDownloadFinishTimestamp,
            i = t.chunkInfo,
            l = t.historySyncDataAppliedMetric,
            m = t.historySyncDownloadMetric,
            p = t.proto;
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[history sync] start processing status",
              ])),
          ),
            (m.mdBootstrapMessagesCount = p.statusV3Messages.length),
            o(
              "WAWebHistorySyncNotificationUtils",
            ).commitHistoryDownloadedMetric({
              chunkDownloadFinishTimestamp: a,
              historySyncDownloadMetric: m,
              isSuccess: !0,
              startTs: i.historySyncStepStartedTs,
            }),
            p.statusV3Messages.sort(function (e, t) {
              var n = e.messageTimestamp,
                r = t.messageTimestamp;
              return (
                o("WATimeUtils").castToUnixTime(parseInt(n, 10)) -
                o("WATimeUtils").castToUnixTime(parseInt(r, 10))
              );
            }));
          var _ = [];
          (yield (d || (d = n("Promise"))).all(
            p.statusV3Messages.map(
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
                      if (l == null)
                        return (
                          o("WALogger").LOG(
                            s ||
                              (s = babelHelpers.taggedTemplateLiteralLoose([
                                "[history sync] skipping status without participant",
                              ])),
                          ),
                          (d || (d = n("Promise"))).resolve()
                        );
                      a = o("WAWebWidFactory").createWid(l);
                    }
                    var c = {
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
                            u ||
                              (u = babelHelpers.taggedTemplateLiteralLoose([
                                "[history sync] missing message",
                              ])),
                          )
                          .sendLogs("history-sync-missing-status-msg"),
                        (d || (d = n("Promise"))).resolve()
                      );
                    var m = o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
                      p = yield o("WAWebMsgProcessingApiUtils").parseMessage({
                        info: c,
                        ciphertextType: m,
                        msgProtobuf: r("nullthrows")(
                          e.message,
                          "HistorySync:handleStatusMessages: missing message",
                        ),
                        hsmInfo: null,
                      }),
                      f = p.renderableMsgs && p.renderableMsgs;
                    if (!f || f.length !== 1)
                      return (d || (d = n("Promise"))).resolve();
                    var g = f[0].id,
                      h = f[0].author,
                      y = babelHelpers.extends({}, f[0], {
                        author:
                          h &&
                          o("WAWebLidStatusMigrationUtils").matWidConvert(h),
                        id: new (r("WAWebMsgKey"))({
                          fromMe: g.fromMe,
                          remote: g.remote,
                          id: g.id,
                          participant:
                            g.participant == null
                              ? void 0
                              : o("WAWebLidStatusMigrationUtils").matWidConvert(
                                  g.participant,
                                ),
                        }),
                      });
                    if (e.participant === "0@s.whatsapp.net")
                      return (d || (d = n("Promise"))).resolve();
                    var C = e.ignore === !0;
                    if (
                      (C &&
                        (y = babelHelpers.extends({}, y, {
                          invis: !0,
                          ack: o("WAAckLevel").ACK.READ,
                        })),
                      yield o(
                        "WAWebHandleSingleMsgWorkerCompatible",
                      ).handleSingleMsg({
                        chatId: y.id.remote,
                        newMsg: y,
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
                          msgKeys: [y.id.toString()],
                        });
                      }),
                      o(
                        "WAWebMessagingGatingUtils",
                      ).isReportingTagSyncingEnabled() &&
                        ((t = e.reportingTokenInfo) == null
                          ? void 0
                          : t.reportingTag) != null)
                    ) {
                      var b;
                      y = babelHelpers.extends({}, y, {
                        reportingTokenInfo: {
                          reportingTag: new Uint8Array(
                            (b = e.reportingTokenInfo) == null
                              ? void 0
                              : b.reportingTag,
                          ),
                          version: o("WAWebReportingTokenConstants")
                            .REPORTING_TOKEN_VERSION.HISTORY_SYNC,
                        },
                      });
                    }
                    return (_.push(y), !0);
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          ),
            yield o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(
              i.msgKey,
              i.syncType,
              i.chunkOrder,
            ),
            o(
              "WAWebHistorySyncNotificationUtils",
            ).commitHistoryDataAppliedMetric({
              historySyncDataAppliedMetric: l,
              startTs: i.historySyncStepStartedTs,
              isSuccess: !0,
            }),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] storing Status complete, ",
                  "",
                ])),
              o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
                i,
                p.statusV3Messages.length,
              ),
            ),
            o("WAWebDBReportingTokenUtils").handleHistorySyncedReportingInfo(
              _,
            ));
        })),
        p.apply(this, arguments)
      );
    }
    l.handleStatusMessages = m;
  },
  98,
);
