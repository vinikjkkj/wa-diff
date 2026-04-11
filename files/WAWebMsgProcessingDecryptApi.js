__d(
  "WAWebMsgProcessingDecryptApi",
  [
    "WALogger",
    "WAWebAdvSignatureApi",
    "WAWebBackendJobs.flow",
    "WAWebHandleMsgTypes.flow",
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
            var C = yield o("WAWebAdvSignatureApi").validateADVwithEncs(
              m.author,
              a,
              i,
              !!m.offline,
            );
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
            v = o(
              "WAWebMsgProcessingDecryptionHandler",
            ).createDecryptionHandler(e);
          for (var S of i)
            try {
              if (!v.canDecryptNext(S)) continue;
              var R = o(
                  "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
                ).msgProcessReporter.startMarker(
                  o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                    .msgProcessReporter.stage.Decryption,
                ),
                L = yield o("WAWebMsgProcessingDecryptEnc").decryptEnc(
                  S,
                  y,
                  m.author,
                  e,
                  n,
                );
              (R == null || R(),
                o("WALogger")
                  .LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "decryptE2EPayload: msgId::",
                        " e2eType:",
                        " done",
                      ])),
                    m.externalId,
                    S.e2eType,
                  )
                  .tags("messaging"),
                o(
                  "WAWebPostE2eMessageRecvMetric",
                ).postSuccessE2eMessageRecvMetric({
                  enc: S,
                  from: y,
                  msgMeta: _,
                  msgInfo: m,
                  msgBotInfo: d,
                  error: null,
                }));
              var E = {
                  retryCount: S.retryCount,
                  e2eType: S.e2eType,
                  encMediaType: S.encMediaType,
                  hideFail: S.hideFail,
                },
                k = yield t({
                  decrypted: L,
                  info: m,
                  paymentInfo: f,
                  e2eInfo: E,
                  bizInfo: r,
                  hsmInfo: l,
                  msgMeta: _,
                  rcat: g,
                  msgBotInfo: d,
                  reportingTokenInfo: h,
                });
              (k.hasInactiveMsg && (b = !0),
                o("WALogger")
                  .LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "processDecryptedProto: msgId::",
                        " e2eType:",
                        " done",
                      ])),
                    m.externalId,
                    S.e2eType,
                  )
                  .tags("messaging"));
            } catch (e) {
              v.handleError(S, e);
            }
          return (
            yield o("WAWebSignalProtocolStore")
              .getSignalProtocolStore()
              .flushBufferToDiskIfNotMemOnlyMode(),
            v.getResult(b)
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
