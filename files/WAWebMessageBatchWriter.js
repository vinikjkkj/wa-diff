__d(
  "WAWebMessageBatchWriter",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "cr:13546",
    "gkx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (e = n("cr:13546")) != null ? e : {},
      c = u.handleAddressingModeMismatch;
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_message_processing_cache_size",
      );
    }
    function m() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_offline_message_processor_timeout_seconds",
        ) * 1e3
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (o("WAWebMessageReceiveFlow").markMessageReceiveCheckpoint(
            t,
            "storage_commit_start",
          ),
            yield (s || (s = n("Promise"))).all([
              C(e, t),
              o("WAWebDBCreateLidPnMappings").flushLidPnMappingsToDb(),
            ]),
            o("WAWebMessageReceiveFlow").markMessageReceiveCheckpoint(
              t,
              "storage_commit_end",
            ));
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
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
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = new Map();
          e.forEach(function (e) {
            var t = e.msg;
            if (t != null && t.id.remote.isGroup()) {
              var n;
              ((t == null ? void 0 : t.groupAddressingMode) === "pn"
                ? (n = o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn)
                : (t == null ? void 0 : t.groupAddressingMode) === "lid" &&
                  (n = o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE
                    .lid),
                n != null && a.set(t.id.remote.toString(), n));
            }
          });
          var i = Array.from(a.keys(), o("WAWebWidFactory").createWid),
            l = yield o(
              "WAWebGetGroupAddressingMode",
            ).bulkGetGroupAddressingMode(i),
            u = [];
          for (var d of a.entries()) {
            var m = d[0],
              p = d[1];
            l.get(m) !== p && u.push(o("WAWebWidFactory").createWid(m));
          }
          (t() &&
            (yield o("WAWebGroupDatabaseJob").bulkMarkGroupParticipantStaleJob(
              u,
            )),
            yield (s || (s = n("Promise"))).all(
              u.map(function (e) {
                return c == null
                  ? void 0
                  : c(e, {
                      localAddressingMode: l.get(e.toString()),
                      serverAddressingMode: r("nullthrows")(
                        a.get(e.toString()),
                        "missing server addressing mode for group",
                      ),
                      mismatchOrigin: o("WAWebWamEnumMismatchOriginType")
                        .MISMATCH_ORIGIN_TYPE.INCOMING_GROUP_MESSAGE,
                    });
              }),
            ));
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
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
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          (yield o("WAWebStoreMsgs").storeMsgs(
            o(
              "WAWebKeepAndApplyBrazilPaymentStateUpdates",
            ).withoutRoutedBrazilPaymentStateUpdates(n),
          ),
            i == null || i(),
            o("WAWebMessageReceiveFlow").annotateMessageReceiveStorageCommit(
              t,
              {
                batchSize: n.length,
                transactionCount:
                  o("WAWebIdbTransactionCounter").getIdbTransactionCount() - a,
              },
            ),
            yield o(
              "WAWebKeepAndApplyBrazilPaymentStateUpdates",
            ).keepAndApplyBrazilPaymentStateUpdatesInBatch(n));
        })),
        b.apply(this, arguments)
      );
    }
    ((l.getMessageBatchMaxSize = d),
      (l.getMessageBatchTimeoutMs = m),
      (l.writeMessageBatch = p),
      (l.processMsgAdditionalInfo = f),
      (l.handleChangedAddressingMode = g),
      (l.getCheckpointStanzaIds = y));
  },
  98,
);
