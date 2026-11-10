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
    "WAWebHandleMsgTypes",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebHistorySyncLogUtils",
    "WAWebHistorySyncNotificationUtils",
    "WAWebLidStatusMigrationUtils",
    "WAWebMessageReceiptBatcher",
    "WAWebMessagingGatingUtils",
    "WAWebMsgKey",
    "WAWebMsgProcessingApiUtils",
    "WAWebParseWebMessageInfoApi",
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
                o("WATimeUtils").castToUnixTime(parseInt(String(n), 10)) -
                o("WATimeUtils").castToUnixTime(parseInt(String(r), 10))
              );
            }));
          var _ = [];
          (yield (d || (d = n("Promise"))).all(
            p.statusV3Messages.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t,
                      a,
                      i = null,
                      l = [];
                    if (e.key.fromMe === !0)
                      ((i = o("WAWebUserPrefsMeUser").getMeUserOrThrow()),
                        (l = e.userReceipt.filter(function (e) {
                          return (
                            e.readTimestamp != null && e.readTimestamp !== 0
                          );
                        })));
                    else {
                      var c = e.participant;
                      if (c == null)
                        return (
                          o("WALogger").LOG(
                            s ||
                              (s = babelHelpers.taggedTemplateLiteralLoose([
                                "[history sync] skipping status without participant",
                              ])),
                          ),
                          (d || (d = n("Promise"))).resolve()
                        );
                      i = o("WAWebWidFactory").createWid(c);
                    }
                    var m = {
                      type: o("WAWebHandleMsgTypes").MESSAGE_TYPE.OTHER_STATUS,
                      externalId: r("nullthrows")(
                        e.key.id,
                        "HistorySync:handleStatusMessages: missing key.id",
                      ),
                      ts: o("WATimeUtils").castToUnixTime(
                        parseInt(String(e.messageTimestamp), 10),
                      ),
                      edit: -1,
                      isHsm: !1,
                      count: null,
                      chat: o("WAWebWidFactory").createWid(
                        o("WAJids").STATUS_JID,
                      ),
                      author: i,
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
                    var p = o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
                      f = yield o("WAWebMsgProcessingApiUtils").parseMessage({
                        info: m,
                        ciphertextType: p,
                        msgProtobuf: r("nullthrows")(
                          e.message,
                          "HistorySync:handleStatusMessages: missing message",
                        ),
                        hsmInfo: null,
                      }),
                      g = f.renderableMsgs && f.renderableMsgs;
                    if (!g || g.length !== 1)
                      return (d || (d = n("Promise"))).resolve();
                    var h = g[0].id,
                      y = g[0].author,
                      C = o(
                        "WAWebParseWebMessageInfoApi",
                      ).getWebMessageInfoSecret(e),
                      b = babelHelpers.extends({}, g[0], {
                        messageSecret: (t = g[0].messageSecret) != null ? t : C,
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
                              : o("WAWebLidStatusMigrationUtils").matWidConvert(
                                  h.participant,
                                ),
                        }),
                      });
                    if (
                      (o(
                        "WAWebParseWebMessageInfoApi",
                      ).maybeCountWebMessageInfoSecretFallback(b, C),
                      e.participant === "0@s.whatsapp.net")
                    )
                      return (d || (d = n("Promise"))).resolve();
                    var v = e.ignore === !0;
                    if (
                      (v &&
                        (b = babelHelpers.extends({}, b, {
                          invis: !0,
                          ack: o("WAAckLevel").ACK.READ,
                        })),
                      yield o(
                        "WAWebHandleSingleMsgWorkerCompatible",
                      ).handleSingleMsg({
                        chatId: b.id.remote,
                        newMsg: b,
                        handleSingleMsgOrigin: "historyStatusMessages",
                      }),
                      l.forEach(function (e) {
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
                          msgKeys: [b.id.toString()],
                        });
                      }),
                      o(
                        "WAWebMessagingGatingUtils",
                      ).isReportingTagSyncingEnabled() &&
                        ((a = e.reportingTokenInfo) == null
                          ? void 0
                          : a.reportingTag) != null)
                    ) {
                      var S;
                      b = babelHelpers.extends({}, b, {
                        reportingTokenInfo: {
                          reportingTag: new Uint8Array(
                            (S = e.reportingTokenInfo) == null
                              ? void 0
                              : S.reportingTag,
                          ),
                          version: o("WAWebReportingTokenConstants")
                            .REPORTING_TOKEN_VERSION.HISTORY_SYNC,
                        },
                      });
                    }
                    return (_.push(b), !0);
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
