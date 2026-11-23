__d(
  "WAWebHistorySyncHandleStatusMessages",
  [
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
    "WAWebUserUtils",
    "WAWebWidFactory",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(t) {
      var n = t.chunkDownloadFinishTimestamp,
        a = t.chunkInfo,
        i = t.historySyncDataAppliedMetric,
        l = t.historySyncDownloadMetric,
        d = t.proto;
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[history sync] start processing status",
          ])),
      ),
        (l.mdBootstrapMessagesCount = d.statusV3Messages.length),
        o("WAWebHistorySyncNotificationUtils").commitHistoryDownloadedMetric({
          chunkDownloadFinishTimestamp: n,
          historySyncDownloadMetric: l,
          isSuccess: !0,
          startTs: a.historySyncStepStartedTs,
        }),
        d.statusV3Messages.sort(function (e, t) {
          var n = e.messageTimestamp,
            r = t.messageTimestamp;
          return (
            o("WATimeUtils").castToUnixTime(parseInt(String(n), 10)) -
            o("WATimeUtils").castToUnixTime(parseInt(String(r), 10))
          );
        }));
      var m = [];
      (await Promise.all(
        d.statusV3Messages.map(async function (e) {
          var t,
            n,
            a = null,
            i = [];
          if (e.key.fromMe === !0)
            ((a = o("WAWebUserUtils").getMeUserOrThrow()),
              (i = e.userReceipt.filter(function (e) {
                return e.readTimestamp != null && e.readTimestamp !== 0;
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
                Promise.resolve()
              );
            a = o("WAWebWidFactory").createWid(l);
          }
          var c = {
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
            chat: o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
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
              Promise.resolve()
            );
          var d = o("WAWebBackendJobs.flow").CiphertextType.Skmsg,
            p = await o("WAWebMsgProcessingApiUtils").parseMessage({
              info: c,
              ciphertextType: d,
              msgProtobuf: r("nullthrows")(
                e.message,
                "HistorySync:handleStatusMessages: missing message",
              ),
              hsmInfo: null,
            }),
            _ = p.renderableMsgs && p.renderableMsgs;
          if (!_ || _.length !== 1) return Promise.resolve();
          var f = _[0].id,
            g = _[0].author,
            h = o("WAWebParseWebMessageInfoApi").getWebMessageInfoSecret(e),
            y = babelHelpers.extends({}, _[0], {
              messageSecret: (t = _[0].messageSecret) != null ? t : h,
              author: g && o("WAWebLidStatusMigrationUtils").matWidConvert(g),
              id: new (r("WAWebMsgKey"))({
                fromMe: f.fromMe,
                remote: f.remote,
                id: f.id,
                participant:
                  f.participant == null
                    ? void 0
                    : o("WAWebLidStatusMigrationUtils").matWidConvert(
                        f.participant,
                      ),
              }),
            });
          if (
            (o(
              "WAWebParseWebMessageInfoApi",
            ).maybeCountWebMessageInfoSecretFallback(e, y, h),
            e.participant === "0@s.whatsapp.net")
          )
            return Promise.resolve();
          var C = e.ignore === !0;
          if (
            (C &&
              (y = babelHelpers.extends({}, y, {
                invis: !0,
                ack: o("WAAckLevel").ACK.READ,
              })),
            await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
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
              o("WAWebMessageReceiptBatcher").receiptBatcher.acceptOtherReceipt(
                {
                  ts: n,
                  ack: o("WAAckLevel").ACK.READ,
                  receiverId: r,
                  msgKeys: [y.id.toString()],
                },
              );
            }),
            o("WAWebMessagingGatingUtils").isReportingTagSyncingEnabled() &&
              ((n = e.reportingTokenInfo) == null ? void 0 : n.reportingTag) !=
                null)
          ) {
            var b;
            y = babelHelpers.extends({}, y, {
              reportingTokenInfo: {
                reportingTag: new Uint8Array(
                  (b = e.reportingTokenInfo) == null ? void 0 : b.reportingTag,
                ),
                version: o("WAWebReportingTokenConstants")
                  .REPORTING_TOKEN_VERSION.HISTORY_SYNC,
              },
            });
          }
          return (m.push(y), !0);
        }),
      ),
        await o("WAWebApiHistorySyncNotification").updateCurrentlyProcessed(
          a.msgKey,
          a.syncType,
          a.chunkOrder,
        ),
        o("WAWebHistorySyncNotificationUtils").commitHistoryDataAppliedMetric({
          historySyncDataAppliedMetric: i,
          startTs: a.historySyncStepStartedTs,
          isSuccess: !0,
        }),
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] storing Status complete, ",
              "",
            ])),
          o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(
            a,
            d.statusV3Messages.length,
          ),
        ),
        o("WAWebDBReportingTokenUtils").handleHistorySyncedReportingInfo(m));
    }
    l.handleStatusMessages = d;
  },
  98,
);
