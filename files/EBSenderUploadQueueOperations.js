__d(
  "EBSenderUploadQueueOperations",
  [
    "EBMinosClientConfig",
    "EBMinosFalcoLoggerUtils",
    "EBMinosLogger",
    "EBMinosQplFlow",
    "EBMinosScheduler",
    "EBSenderUploadQueue",
    "EBUploadSentMessageForRecipients",
    "EncryptedBackupsMediaRestoreProbeV2",
    "EncryptedBackupsUtils",
    "MAWEBLSInWorkerSwitch",
    "MAWJids",
    "MAWProtobufDeserializers",
    "Promise",
    "TaskSchedulerPriority",
    "WAResultOrError",
    "WAStanzaUtils",
    "asyncToGeneratorRuntime",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = r("justknobx")._("3748"),
      f = null;
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = o("EBSenderUploadQueue").ebSenderUploadQueue(),
            a = [],
            i = yield t.read({
              filter: function (t) {
                return o("EncryptedBackupsUtils").timestampOlderThan30Days(
                  t.timestampMs,
                )
                  ? (a.push(t.queueId), !1)
                  : !0;
              },
              limit: r("justknobx")._("2101"),
              order: "desc",
            });
          if (i.length === 0)
            return o("WAResultOrError").makeResult({ shouldRunMore: !1 });
          (yield t.delete(a),
            o("EBMinosLogger").minosLogger.LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "upload queue uploading ",
                  " messages",
                ])),
              i.length,
            ));
          var l = i.map(function (e) {
              var t = o("EBMinosQplFlow").startMinosMessageUploadQpl({
                threadId: e.threadId,
              });
              return (
                t.addAnnotations({
                  int: {
                    batch_size: i.length,
                    mek_encryption_version_config: o("EBMinosClientConfig")
                      .MINOS_CLIENT_CONFIG.preferredMekEncryptionVersion,
                    message_encryption_version_config: o("EBMinosClientConfig")
                      .MINOS_CLIENT_CONFIG.preferredMessageEncryptionVersion,
                  },
                }),
                { qplFlow: t, uploadEntity: e }
              );
            }),
            s = yield o(
              "EBUploadSentMessageForRecipients",
            ).uploadSentMessageBatchForRecipients({ batchItems: l });
          return (
            yield (p || (p = n("Promise"))).all(
              s.map(function (e) {
                var t = e.entity,
                  n = e.qplFlow,
                  r = e.result;
                return r.success
                  ? y({ ackType: "success", entity: t, qplFlow: n })
                  : y({
                      ackType: "fail",
                      entity: t,
                      errorName: r.error.errorName,
                      failReason: r.error.failReason,
                      qplFlow: n,
                    });
              }),
            ),
            o("WAResultOrError").makeResult({ shouldRunMore: !0 })
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("EBSenderUploadQueue").ebSenderUploadQueue();
          o("EBMinosLogger").minosLogger.LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Upload completed, acking message in upload persisted queue",
              ])),
          );
          var n = e.entity,
            a = e.qplFlow,
            i = n.queueId;
          if (i == null) {
            (o("EBMinosLogger").minosLogger.ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "upload queue error: queueId is null",
                ])),
            ),
              a.endFailWithError("queueId-null", "queueId is null"));
            return;
          }
          if ((yield t.ack([i]), e.ackType === "fail"))
            (o("EBMinosLogger").minosLogger.ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "upload queue error: ",
                  ", fail reason: ",
                  "",
                ])),
              e.errorName,
              e.failReason,
            ),
              o("EBMinosFalcoLoggerUtils").logEBMinosFalcoTaskFailure({
                failureReason: e.errorName,
                messageId: n.messageId,
                threadId: n.threadId,
              }),
              a.endFailWithError(e.errorName, e.failReason));
          else {
            var l = r("MAWEBLSInWorkerSwitch").get() === !0;
            if (l && n.directive.actionType === 1) {
              var d = o("MAWJids").threadIdToChatJid(n.threadId),
                m = o("WAStanzaUtils").toStanzaId(n.messageId),
                p = o(
                  "MAWProtobufDeserializers",
                ).DeserializedBackupMessage.create(n.payload);
              o(
                "EncryptedBackupsMediaRestoreProbeV2",
              ).sampleProbeMediaRestoreV2({
                backupMessage: p,
                chatJid: d,
                sortOrderMs: n.timestampMs,
                stanzaId: m,
                triggerSource: "upload-minos",
              });
            }
            (o("EBMinosFalcoLoggerUtils").logEBMinosFalcoTaskSuccess({
              messageId: n.messageId,
              threadId: n.threadId,
            }),
              a.endSuccess());
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e === void 0 ? { retryCount: 0 } : e,
            n = t.retryCount;
          if (f == null) {
            f = o("EBMinosScheduler")
              .l11Scheduler()
              .run(
                function () {
                  return g();
                },
                {
                  name: "eb_minos_upload",
                  priority: o("TaskSchedulerPriority").NORMAL_PRIORITY,
                },
              );
            try {
              var a = yield f.promise;
              ((f = null), a.value.shouldRunMore && b());
            } catch (e) {
              ((f = null),
                n < _ &&
                  (o("EBMinosLogger").minosLogger.ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " cannot process EB upload, retrying",
                      ])),
                    e,
                  ),
                  globalThis.setTimeout(function () {
                    b({ retryCount: n + 1 });
                  }, r("justknobx")._("2366"))),
                o("EBMinosLogger").minosLogger.ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " exceeded max retries, cannot process EB upload",
                    ])),
                  e,
                ));
              return;
            }
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      b();
      var e = o("EBSenderUploadQueue").ebSenderUploadQueue();
      e.subscribe(function (e) {
        e.type === "flush" && b();
      });
    }
    l.listenForEbUploadQueueFlush = S;
  },
  98,
);
