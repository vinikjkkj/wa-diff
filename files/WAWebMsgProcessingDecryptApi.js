__d(
  "WAWebMsgProcessingDecryptApi",
  [
    "WALogger",
    "WAWebAdvSignatureApi",
    "WAWebBackendJobs.flow",
    "WAWebDecryptsOutsideInboundMsgRows",
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
              y = e.msgMeta,
              C = e.paymentInfo,
              b = e.rcat,
              v = e.reportingTokenInfo,
              S = o("WAWebMsgProcessingApiUtils").getFrom(f);
            if ((h(l, f), f.author.device != null && f.author.device !== 0)) {
              var R = yield o("WAWebAdvSignatureApi").validateADVwithEncs({
                author: f.author,
                deviceIdentity: i,
                encs: l,
                offline: !!f.offline,
              });
              if (!R)
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
            var L = !1,
              E = !1,
              k = o(
                "WAWebMsgProcessingDecryptionHandler",
              ).createDecryptionHandler(
                e,
                r == null ? void 0 : r.writePlaceholder,
              ),
              I = o("WAWebMessageReceiveFlow").startMessageReceiveDecryptTimer(
                f.externalId,
                !!f.offline,
              ),
              T = function* () {
                var i = x[0],
                  l = x[1],
                  s = p(f, r);
                if (s == null) return 0;
                try {
                  if (!k.canDecryptNext(l)) return 1;
                  var _ = o(
                      "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                    ).msgProcessReporter.startMarker(
                      o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                        .msgProcessReporter.stage.Decryption,
                    ),
                    h = yield I.timeDecrypt(function () {
                      return o("WAWebMsgProcessingDecryptEnc").decryptEnc({
                        enc: l,
                        from: S,
                        parsedMsgPayload: e,
                        participant: f.author,
                        sessionScope: n,
                      });
                    });
                  (_ == null || _(),
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
                      from: S,
                      msgMeta: y,
                      msgInfo: f,
                      msgBotInfo: m,
                      error: null,
                    }));
                  var R = g(l),
                    T = yield I.timeProcess(function () {
                      return t(
                        {
                          decrypted: h,
                          info: f,
                          paymentInfo: C,
                          e2eInfo: R,
                          bizInfo: a,
                          hsmInfo: d,
                          msgMeta: y,
                          rcat: b,
                          msgBotInfo: m,
                          reportingTokenInfo: v,
                        },
                        i,
                      );
                    });
                  (T.hasInactiveMsg && (L = !0),
                    T.isOrphanAddon === !0 && (E = !0),
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
                  k.handleError(l, e);
                } finally {
                  s();
                }
              },
              D;
            for (var x of l.entries()) if (((D = yield* T()), D === 0)) break;
            return (yield _(I, r), I.finish(), k.getResult(L, E));
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
          (t == null ? void 0 : t.deferSignalFlush) !== !0 &&
            (o(
              "WAWebDecryptsOutsideInboundMsgRows",
            ).noteDecryptOutsideInboundMsgRows(),
            (t == null ? void 0 : t.awaitMessageWrites) === !0 &&
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
    function g(e) {
      return {
        retryCount: e.retryCount,
        e2eType: e.e2eType,
        encMediaType: e.encMediaType,
        hideFail: e.hideFail,
        isPq: e.sessionType === "pq",
      };
    }
    function h(t, n) {
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
    ((l.decryptE2EPayload = d), (l.toE2EInfo = g));
  },
  98,
);
