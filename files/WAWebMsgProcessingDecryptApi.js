__d(
  "WAWebMsgProcessingDecryptApi",
  [
    "WALogger",
    "WAWebAdvSignatureApi",
    "WAWebBackendJobs.flow",
    "WAWebGetMessageCache",
    "WAWebHandleMsgTypes.flow",
    "WAWebMessageReceiveFlow",
    "WAWebMsgProcessingApiUtils",
    "WAWebMsgProcessingDecryptEnc",
    "WAWebMsgProcessingDecryptionHandler",
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
              _ = e.msgInfo,
              g = e.msgMeta,
              h = e.paymentInfo,
              y = e.rcat,
              C = e.reportingTokenInfo,
              b = o("WAWebMsgProcessingApiUtils").getFrom(_);
            if ((f(l, _), _.author.device != null && _.author.device !== 0)) {
              var v = yield o("WAWebAdvSignatureApi").validateADVwithEncs({
                author: _.author,
                deviceIdentity: i,
                encs: l,
                offline: !!_.offline,
              });
              if (!v)
                return (
                  o("WALogger")
                    .WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "decryptE2EPayload: msgId::",
                          ", validateADVIdentity failed",
                        ])),
                      _.externalId,
                    )
                    .tags("messaging"),
                  {
                    result: o("WAWebHandleMsgTypes.flow").E2EProcessResult
                      .RETRY,
                    retryCount: l[0].retryCount,
                    retryReason: o("WAWebSendRetryReceiptJob").RetryReason
                      .AdvFailure,
                  }
                );
            }
            var S = !1,
              R = !1,
              L = o(
                "WAWebMsgProcessingDecryptionHandler",
              ).createDecryptionHandler(e),
              E = o("WAWebMessageReceiveFlow").startMessageReceiveDecryptTimer(
                _.externalId,
                !!_.offline,
              ),
              k = function* (i) {
                try {
                  if (!L.canDecryptNext(i)) return 1;
                  var r = o(
                      "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                    ).msgProcessReporter.startMarker(
                      o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                        .msgProcessReporter.stage.Decryption,
                    ),
                    l = yield E.timeDecrypt(function () {
                      return o("WAWebMsgProcessingDecryptEnc").decryptEnc({
                        enc: i,
                        from: b,
                        parsedMsgPayload: e,
                        participant: _.author,
                        sessionScope: n,
                      });
                    });
                  (r == null || r(),
                    o("WALogger")
                      .LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "decryptE2EPayload: msgId::",
                            " e2eType:",
                            " done",
                          ])),
                        _.externalId,
                        i.e2eType,
                      )
                      .tags("messaging"),
                    o(
                      "WAWebPostE2eMessageRecvMetric",
                    ).postSuccessE2eMessageRecvMetric({
                      enc: i,
                      from: b,
                      msgMeta: g,
                      msgInfo: _,
                      msgBotInfo: m,
                      error: null,
                    }));
                  var s = {
                      retryCount: i.retryCount,
                      e2eType: i.e2eType,
                      encMediaType: i.encMediaType,
                      hideFail: i.hideFail,
                      isPq: i.sessionType === "pq",
                    },
                    p = yield E.timeProcess(function () {
                      return t({
                        decrypted: l,
                        info: _,
                        paymentInfo: h,
                        e2eInfo: s,
                        bizInfo: a,
                        hsmInfo: d,
                        msgMeta: g,
                        rcat: y,
                        msgBotInfo: m,
                        reportingTokenInfo: C,
                      });
                    });
                  (p.hasInactiveMsg && (S = !0),
                    p.isOrphanAddon === !0 && (R = !0),
                    o("WALogger")
                      .LOG(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "processDecryptedProto: msgId::",
                            " e2eType:",
                            " done",
                          ])),
                        _.externalId,
                        i.e2eType,
                      )
                      .tags("messaging"));
                } catch (e) {
                  L.handleError(i, e);
                }
              };
            for (var I of l) yield* k(I);
            return (yield p(E, r), E.finish(), L.getResult(S, R));
          },
        )),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        _.apply(this, arguments)
      );
    }
    function f(t, n) {
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
