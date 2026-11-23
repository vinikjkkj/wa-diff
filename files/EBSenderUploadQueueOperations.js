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
    "TaskSchedulerPriority",
    "WAResultOrError",
    "WAStanzaUtils",
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
      p = r("justknobx")._("3748"),
      _ = null;
    async function f() {
      var t = o("EBSenderUploadQueue").ebSenderUploadQueue(),
        n = [],
        a = await t.read({
          filter: function (t) {
            return o("EncryptedBackupsUtils").timestampOlderThan30Days(
              t.timestampMs,
            )
              ? (n.push(t.queueId), !1)
              : !0;
          },
          limit: r("justknobx")._("2101"),
          order: "desc",
        });
      if (a.length === 0)
        return o("WAResultOrError").makeResult({ shouldRunMore: !1 });
      (await t.delete(n),
        o("EBMinosLogger").minosLogger.LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "upload queue uploading ",
              " messages",
            ])),
          a.length,
        ));
      var i = a.map(function (e) {
          var t = o("EBMinosQplFlow").startMinosMessageUploadQpl({
            threadId: e.threadId,
          });
          return (
            t.addAnnotations({
              int: {
                batch_size: a.length,
                mek_encryption_version_config: o("EBMinosClientConfig")
                  .MINOS_CLIENT_CONFIG.preferredMekEncryptionVersion,
                message_encryption_version_config: o("EBMinosClientConfig")
                  .MINOS_CLIENT_CONFIG.preferredMessageEncryptionVersion,
              },
            }),
            { qplFlow: t, uploadEntity: e }
          );
        }),
        l = await o(
          "EBUploadSentMessageForRecipients",
        ).uploadSentMessageBatchForRecipients({ batchItems: i });
      return (
        await Promise.all(
          l.map(function (e) {
            var t = e.entity,
              n = e.qplFlow,
              r = e.result;
            return r.success
              ? g({ ackType: "success", entity: t, qplFlow: n })
              : g({
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
    }
    async function g(e) {
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
      if ((await t.ack([i]), e.ackType === "fail"))
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
            p = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(
              n.payload,
            );
          o("EncryptedBackupsMediaRestoreProbeV2").sampleProbeMediaRestoreV2({
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
    }
    async function h(e) {
      var t = e === void 0 ? { retryCount: 0 } : e,
        n = t.retryCount;
      if (_ == null) {
        _ = o("EBMinosScheduler")
          .l11Scheduler()
          .run(
            function () {
              return f();
            },
            {
              name: "eb_minos_upload",
              priority: o("TaskSchedulerPriority").NORMAL_PRIORITY,
            },
          );
        try {
          var a = await _.promise;
          ((_ = null), a.value.shouldRunMore && h());
        } catch (e) {
          ((_ = null),
            n < p &&
              (o("EBMinosLogger").minosLogger.ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " cannot process EB upload, retrying",
                  ])),
                e,
              ),
              globalThis.setTimeout(function () {
                h({ retryCount: n + 1 });
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
    }
    function y() {
      h();
      var e = o("EBSenderUploadQueue").ebSenderUploadQueue();
      e.subscribe(function (e) {
        e.type === "flush" && h();
      });
    }
    l.listenForEbUploadQueueFlush = y;
  },
  98,
);
