__d(
  "WAWebHistorySyncHandleStatusMessages",
  [
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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t, n, a, i, l) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[history sync] start processing status",
          ])),
      ),
        (a.mdBootstrapMessagesCount = t.statusV3Messages.length),
        o("WAWebHistorySyncNotificationUtils").commitHistoryDownloadedMetric({
          chunkDownloadFinishTimestamp: l,
          historySyncDownloadMetric: a,
          isSuccess: !0,
          startTs: n.historySyncStepStartedTs,
        }),
        t.statusV3Messages.sort(function (e, t) {
          var n = e.messageTimestamp,
            r = t.messageTimestamp;
          return (
            o("WATimeUtils").castToUnixTime(parseInt(n, 10)) -
            o("WATimeUtils").castToUnixTime(parseInt(r, 10))
          );
        }));
      var c = [];
      (await Promise.all(
        t.statusV3Messages.map(async function (e) {
          var t,
            n = null,
            a = [];
          e.key.fromMe === !0
            ? ((n = o("WAWebUserPrefsMeUser").getMeUser()),
              (a = e.userReceipt.filter(function (e) {
                return e.readTimestamp != null && e.readTimestamp !== 0;
              })))
            : (n = o("WAWebWidFactory").createWid(
                r("WANullthrows")(
                  e.participant,
                  "HistorySync:handleStatusMessages: missing participant",
                ),
              ));
          var i = {
            type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS,
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
            chat: o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
            author: r("WANullthrows")(
              n,
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
              Promise.resolve()
            );
          var l = o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
            u = await o("WAWebMsgProcessingApiUtils").parseMessage({
              info: i,
              ciphertextType: l,
              msgProtobuf: r("WANullthrows")(
                e.message,
                "HistorySync:handleStatusMessages: missing message",
              ),
              hsmInfo: null,
            }),
            d = u.renderableMsgs && u.renderableMsgs;
          if (!d || d.length !== 1) return Promise.resolve();
          var m = d[0].id,
            p = d[0].author,
            _ = babelHelpers.extends({}, d[0], {
              author: p && o("WAWebLidStatusMigrationUtils").matWidConvert(p),
              id: new (r("WAWebMsgKey"))({
                fromMe: m.fromMe,
                remote: m.remote,
                id: m.id,
                participant:
                  m.participant == null
                    ? void 0
                    : o("WAWebLidStatusMigrationUtils").matWidConvert(
                        m.participant,
                      ),
              }),
            });
          if (e.participant === "0@s.whatsapp.net") return Promise.resolve();
          var f = e.ignore === !0;
          if (
            (f &&
              (_ = babelHelpers.extends({}, _, {
                invis: !0,
                ack: o("WAAckLevel").ACK.READ,
              })),
            await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
              chatId: _.id.remote,
              newMsg: _,
              handleSingleMsgOrigin: "historyStatusMessages",
            }),
            a.forEach(function (e) {
              var t,
                n = o("WALongInt").numberOrThrowIfTooLarge(
                  (t = e.readTimestamp) != null ? t : 0,
                ),
                r = o("WAWebWidFactory").createWid(e.userJid);
              o("WAWebMessageReceiptBatcher").receiptBatcher.acceptOtherReceipt(
                {
                  ts: n,
                  ack: o("WAAckLevel").ACK.READ,
                  receiverId: r,
                  msgKeys: [_.id.toString()],
                },
              );
            }),
            o("WAWebMessagingGatingUtils").isReportingTagSyncingEnabled() &&
              ((t = e.reportingTokenInfo) == null ? void 0 : t.reportingTag) !=
                null)
          ) {
            var g;
            _ = babelHelpers.extends({}, _, {
              reportingTokenInfo: {
                reportingTag: new Uint8Array(
                  (g = e.reportingTokenInfo) == null ? void 0 : g.reportingTag,
                ),
                version: o("WAWebReportingTokenConstants")
                  .REPORTING_TOKEN_VERSION.HISTORY_SYNC,
              },
            });
          }
          return (c.push(_), !0);
        }),
      ),
        await o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(
          n.msgKey,
          n.syncType,
          n.chunkOrder,
        ),
        o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric({
          historySyncDataAppliedMetric: i,
          startTs: n.historySyncStepStartedTs,
          isSuccess: !0,
        }),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] storing Status complete, ",
              "",
            ])),
          o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
            n,
            t.statusV3Messages.length,
          ),
        ),
        o("WAWebDBReportingTokenUtils").handleHistorySyncedReportingInfo(c));
    }
    l.handleStatusMessages = c;
  },
  98,
);
