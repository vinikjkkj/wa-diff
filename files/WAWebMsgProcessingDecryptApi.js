__d(
  "WAWebMsgProcessingDecryptApi",
  [
    "WALogger",
    "WAWebAdvSignatureApi",
    "WAWebBackendJobs.flow",
    "WAWebGetMessageCache",
    "WAWebHandleMsgTypes",
    "WAWebMessageReceiveFlow",
    "WAWebMsgProcessingApiUtils",
    "WAWebMsgProcessingDecryptEnc",
    "WAWebMsgProcessingDecryptionHandler",
    "WAWebNoop",
    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
    "WAWebPostE2eMessageRecvMetric",
    "WAWebSendRetryReceiptJob",
    "WAWebSignalProtocolStore",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t, n, r) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = e.bizInfo,
              i = e.deviceIdentity,
              l = e.encs,
              d = e.hsmInfo,
              m = e.msgBotInfo,
              f = e.msgInfo,
              h = e.msgMeta,
              y = e.paymentInfo,
              C = e.rcat,
              b = e.reportingTokenInfo,
              v = o("WAWebMsgProcessingApiUtils").getFrom(f);
            if ((g(l, f), f.author.device != null && f.author.device !== 0)) {
              var S = yield o("WAWebAdvSignatureApi").validateADVwithEncs({
                author: f.author,
                deviceIdentity: i,
                encs: l,
                offline: !!f.offline,
              });
              if (!S)
                return (
                  o("WALogger")
                    .WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "decryptE2EPayload: msgId::",
                          ", validateADVIdentity failed",
                        ])),
                      f.externalId,
                    )
                    .tags("messaging"),
                  {
                    result: o("WAWebHandleMsgTypes").E2EProcessResult.RETRY,
                    retryCount: l[0].retryCount,
                    retryReason: o("WAWebSendRetryReceiptJob").RetryReason
                      .AdvFailure,
                  }
                );
            }
            var R = !1,
              L = !1,
              E = o(
                "WAWebMsgProcessingDecryptionHandler",
              ).createDecryptionHandler(e),
              k = o("WAWebMessageReceiveFlow").startMessageReceiveDecryptTimer(
                f.externalId,
                !!f.offline,
              ),
              I = function* (l) {
                var i = p(f, r);
                if (i == null) return 0;
                try {
                  if (!E.canDecryptNext(l)) return 1;
                  var s = o(
                      "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                    ).msgProcessReporter.startMarker(
                      o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                        .msgProcessReporter.stage.Decryption,
                    ),
                    _ = yield k.timeDecrypt(function () {
                      return o("WAWebMsgProcessingDecryptEnc").decryptEnc({
                        enc: l,
                        from: v,
                        parsedMsgPayload: e,
                        participant: f.author,
                        sessionScope: n,
                      });
                    });
                  (s == null || s(),
                    o("WALogger")
                      .LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "decryptE2EPayload: msgId::",
                            " e2eType:",
                            " done",
                          ])),
                        f.externalId,
                        l.e2eType,
                      )
                      .tags("messaging"),
                    o(
                      "WAWebPostE2eMessageRecvMetric",
                    ).postSuccessE2eMessageRecvMetric({
                      enc: l,
                      from: v,
                      msgMeta: h,
                      msgInfo: f,
                      msgBotInfo: m,
                      error: null,
                    }));
                  var g = {
                      retryCount: l.retryCount,
                      e2eType: l.e2eType,
                      encMediaType: l.encMediaType,
                      hideFail: l.hideFail,
                      isPq: l.sessionType === "pq",
                    },
                    S = yield k.timeProcess(function () {
                      return t({
                        decrypted: _,
                        info: f,
                        paymentInfo: y,
                        e2eInfo: g,
                        bizInfo: a,
                        hsmInfo: d,
                        msgMeta: h,
                        rcat: C,
                        msgBotInfo: m,
                        reportingTokenInfo: b,
                      });
                    });
                  (S.hasInactiveMsg && (R = !0),
                    S.isOrphanAddon === !0 && (L = !0),
                    o("WALogger")
                      .LOG(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "processDecryptedProto: msgId::",
                            " e2eType:",
                            " done",
                          ])),
                        f.externalId,
                        l.e2eType,
                      )
                      .tags("messaging"));
                } catch (e) {
                  E.handleError(l, e);
                } finally {
                  i();
                }
              },
              T;
            for (var D of l) if (((T = yield* I(D)), T === 0)) break;
            return (yield _(k, r), k.finish(), E.getResult(R, L));
          },
        )),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return (t == null ? void 0 : t.deferCheckpointUntilMessageStaged) === !0
        ? o("WAWebGetMessageCache")
            .getMessageCache()
            .holdCheckpointUntilMessageStaged(
              o("WAWebMsgProcessingApiUtils").messageInfoToKey(e),
            )
        : r("WAWebNoop");
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          ((t == null ? void 0 : t.awaitMessageWrites) === !0 &&
            o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .hasPendingPersistWrites() &&
            (yield o("WAWebGetMessageCache")
              .getMessageCache()
              .checkpointQueueWait()),
            yield e.timeSignalFlush(function () {
              return o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .flushBufferToDiskIfNotMemOnlyMode();
            }));
        })),
        f.apply(this, arguments)
      );
    }
    function g(t, n) {
      t.length === 2 &&
        t[0].e2eType === o("WAWebBackendJobs.flow").CiphertextType.Skmsg &&
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "decryptE2EPayload: msgId::",
                " skMsg is out of order",
              ])),
            n.externalId,
          )
          .tags("messaging")
          .sendLogs("handleMsg: invalid encs order", { sampling: 0.01 });
    }
    l.decryptE2EPayload = d;
  },
  98,
);
