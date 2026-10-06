__d(
  "WAWebMsgProcessingDecryptApi",
  [
    "WALogger",
    "WAWebAdvSignatureApi",
    "WAWebBackendJobs.flow",
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
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = e.bizInfo,
            a = e.deviceIdentity,
            i = e.encs,
            l = e.hsmInfo,
            d = e.msgBotInfo,
            m = e.msgInfo,
            _ = e.msgMeta,
            f = e.paymentInfo,
            g = e.rcat,
            h = e.reportingTokenInfo,
            y = o("WAWebMsgProcessingApiUtils").getFrom(m);
          if ((p(i, m), m.author.device != null && m.author.device !== 0)) {
            var C = yield o("WAWebAdvSignatureApi").validateADVwithEncs({
              author: m.author,
              deviceIdentity: a,
              encs: i,
              offline: !!m.offline,
            });
            if (!C)
              return (
                o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "decryptE2EPayload: msgId::",
                        ", validateADVIdentity failed",
                      ])),
                    m.externalId,
                  )
                  .tags("messaging"),
                {
                  result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY,
                  retryCount: i[0].retryCount,
                  retryReason: o("WAWebSendRetryReceiptJob").RetryReason
                    .AdvFailure,
                }
              );
          }
          var b = !1,
            v = !1,
            S = o(
              "WAWebMsgProcessingDecryptionHandler",
            ).createDecryptionHandler(e),
            R = o("WAWebMessageReceiveFlow").startMessageReceiveDecryptTimer(
              m.externalId,
              !!m.offline,
            ),
            L = function* (i) {
              try {
                if (!S.canDecryptNext(i)) return 1;
                var a = o(
                    "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                  ).msgProcessReporter.startMarker(
                    o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                      .msgProcessReporter.stage.Decryption,
                  ),
                  s = yield R.timeDecrypt(function () {
                    return o("WAWebMsgProcessingDecryptEnc").decryptEnc({
                      enc: i,
                      from: y,
                      parsedMsgPayload: e,
                      participant: m.author,
                      sessionScope: n,
                    });
                  });
                (a == null || a(),
                  o("WALogger")
                    .LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "decryptE2EPayload: msgId::",
                          " e2eType:",
                          " done",
                        ])),
                      m.externalId,
                      i.e2eType,
                    )
                    .tags("messaging"),
                  o(
                    "WAWebPostE2eMessageRecvMetric",
                  ).postSuccessE2eMessageRecvMetric({
                    enc: i,
                    from: y,
                    msgMeta: _,
                    msgInfo: m,
                    msgBotInfo: d,
                    error: null,
                  }));
                var p = {
                    retryCount: i.retryCount,
                    e2eType: i.e2eType,
                    encMediaType: i.encMediaType,
                    hideFail: i.hideFail,
                    isPq: i.sessionType === "pq",
                  },
                  C = yield R.timeProcess(function () {
                    return t({
                      decrypted: s,
                      info: m,
                      paymentInfo: f,
                      e2eInfo: p,
                      bizInfo: r,
                      hsmInfo: l,
                      msgMeta: _,
                      rcat: g,
                      msgBotInfo: d,
                      reportingTokenInfo: h,
                    });
                  });
                (C.hasInactiveMsg && (b = !0),
                  C.isOrphanAddon === !0 && (v = !0),
                  o("WALogger")
                    .LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "processDecryptedProto: msgId::",
                          " e2eType:",
                          " done",
                        ])),
                      m.externalId,
                      i.e2eType,
                    )
                    .tags("messaging"));
              } catch (e) {
                S.handleError(i, e);
              }
            };
          for (var E of i) yield* L(E);
          return (
            yield R.timeSignalFlush(function () {
              return o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .flushBufferToDiskIfNotMemOnlyMode();
            }),
            R.finish(),
            S.getResult(b, v)
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(t, n) {
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
