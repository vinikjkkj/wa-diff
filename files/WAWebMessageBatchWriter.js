__d(
  "WAWebMessageBatchWriter",
  [
    "WAWebABProps",
    "WAWebDBCreateLidPnMappings",
    "WAWebDBReportingTokenUtils",
    "WAWebGetGroupAddressingMode",
    "WAWebGroupDatabaseJob",
    "WAWebHandleMessageTypes",
    "WAWebHandleMsgCommon",
    "WAWebIdbTransactionCounter",
    "WAWebKeepAndApplyBrazilPaymentStateUpdates",
    "WAWebMessageReceiveFlow",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebStoreMsgs",
    "WAWebWamEnumMismatchOriginType",
    "WAWebWidFactory",
    "cr:13546",
    "gkx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = n("cr:13546")) != null ? e : {},
      u = s.handleAddressingModeMismatch;
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_message_processing_cache_size",
      );
    }
    function d() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_offline_message_processor_timeout_seconds",
        ) * 1e3
      );
    }
    async function m(e, t) {
      (o("WAWebMessageReceiveFlow").markMessageReceiveCheckpoint(
        t,
        "storage_commit_start",
      ),
        await Promise.all([
          g(e, t),
          o("WAWebDBCreateLidPnMappings").flushLidPnMappingsToDb(),
        ]),
        o("WAWebMessageReceiveFlow").markMessageReceiveCheckpoint(
          t,
          "storage_commit_end",
        ));
    }
    function p(e) {
      var t = e
        .filter(function (e) {
          return (
            e.type ===
            o("WAWebHandleMessageTypes").MsgAdditionalInfoType.ReportingInfo
          );
        })
        .map(function (e) {
          return e.data;
        });
      o("WAWebDBReportingTokenUtils").handleAddReportingInfos(t);
    }
    async function _(e, t) {
      var n = new Map();
      e.forEach(function (e) {
        var t = e.msg;
        if (t != null && t.id.remote.isGroup()) {
          var r;
          ((t == null ? void 0 : t.groupAddressingMode) === "pn"
            ? (r = o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn)
            : (t == null ? void 0 : t.groupAddressingMode) === "lid" &&
              (r = o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.lid),
            r != null && n.set(t.id.remote.toString(), r));
        }
      });
      var a = Array.from(n.keys(), o("WAWebWidFactory").createWid),
        i = await o("WAWebGetGroupAddressingMode").bulkGetGroupAddressingMode(
          a,
        ),
        l = [];
      for (var s of n.entries()) {
        var c = s[0],
          d = s[1];
        i.get(c) !== d && l.push(o("WAWebWidFactory").createWid(c));
      }
      (t() &&
        (await o("WAWebGroupDatabaseJob").bulkMarkGroupParticipantStaleJob(l)),
        await Promise.all(
          l.map(function (e) {
            return u == null
              ? void 0
              : u(e, {
                  localAddressingMode: i.get(e.toString()),
                  serverAddressingMode: r("nullthrows")(
                    n.get(e.toString()),
                    "missing server addressing mode for group",
                  ),
                  mismatchOrigin: o("WAWebWamEnumMismatchOriginType")
                    .MISMATCH_ORIGIN_TYPE.INCOMING_GROUP_MESSAGE,
                });
          }),
        ));
    }
    function f(e) {
      var t = new Set(),
        n = new Set();
      return (
        e.forEach(function (e) {
          var r,
            o,
            a = e.duplicateMsgReceiptInfo,
            i = e.msg,
            l = e.receiptInfo,
            s =
              (r = l == null ? void 0 : l.externalId) != null
                ? r
                : a == null
                  ? void 0
                  : a.externalId;
          s != null && (n.add(s), t.add(s));
          var u = i == null || (o = i.id) == null ? void 0 : o.id;
          u != null && t.add(u);
        }),
        { all: Array.from(t), aggregatedReceipts: Array.from(n) }
      );
    }
    async function g(e, t) {
      var n = [];
      e.forEach(function (e) {
        var t = e.msg;
        t != null && n.push(t);
      });
      var a = o("WAWebIdbTransactionCounter").getIdbTransactionCount(),
        i = r("gkx")("20665")
          ? o(
              "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
            ).msgProcessReporter.startMarker(
              o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                .msgProcessReporter.stage.DBStoring,
            )
          : null;
      (await o("WAWebStoreMsgs").storeMsgs(
        o(
          "WAWebKeepAndApplyBrazilPaymentStateUpdates",
        ).withoutRoutedBrazilPaymentStateUpdates(n),
      ),
        i == null || i(),
        o("WAWebMessageReceiveFlow").annotateMessageReceiveStorageCommit(t, {
          batchSize: n.length,
          transactionCount:
            o("WAWebIdbTransactionCounter").getIdbTransactionCount() - a,
        }),
        await o(
          "WAWebKeepAndApplyBrazilPaymentStateUpdates",
        ).keepAndApplyBrazilPaymentStateUpdatesInBatch(n));
    }
    ((l.getMessageBatchMaxSize = c),
      (l.getMessageBatchTimeoutMs = d),
      (l.writeMessageBatch = m),
      (l.processMsgAdditionalInfo = p),
      (l.handleChangedAddressingMode = _),
      (l.getCheckpointStanzaIds = f));
  },
  98,
);
