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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(t, n, r, a) {
      var i = t.bizInfo,
        l = t.deviceIdentity,
        c = t.encs,
        d = t.hsmInfo,
        g = t.msgBotInfo,
        h = t.msgInfo,
        y = t.msgMeta,
        C = t.paymentInfo,
        b = t.rcat,
        v = t.reportingTokenInfo,
        S = o("WAWebMsgProcessingApiUtils").getFrom(h);
      if ((f(c, h), h.author.device != null && h.author.device !== 0)) {
        var R = await o("WAWebAdvSignatureApi").validateADVwithEncs({
          author: h.author,
          deviceIdentity: l,
          encs: c,
          offline: !!h.offline,
        });
        if (!R)
          return (
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "decryptE2EPayload: msgId::",
                    ", validateADVIdentity failed",
                  ])),
                h.externalId,
              )
              .tags("messaging"),
            {
              result: o("WAWebHandleMsgTypes").E2EProcessResult.RETRY,
              retryCount: c[0].retryCount,
              retryReason: o("WAWebSendRetryReceiptJob").RetryReason.AdvFailure,
            }
          );
      }
      var L = !1,
        E = !1,
        k = o("WAWebMsgProcessingDecryptionHandler").createDecryptionHandler(
          t,
          a == null ? void 0 : a.writePlaceholder,
        ),
        I = o("WAWebMessageReceiveFlow").startMessageReceiveDecryptTimer(
          h.externalId,
          !!h.offline,
        ),
        T = async function () {
          var e = x[0],
            l = x[1],
            c = m(h, a);
          if (c == null) return 0;
          try {
            if (!k.canDecryptNext(l)) return 1;
            var p = o(
                "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
              ).msgProcessReporter.startMarker(
                o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                  .msgProcessReporter.stage.Decryption,
              ),
              f = await I.timeDecrypt(function () {
                return o("WAWebMsgProcessingDecryptEnc").decryptEnc({
                  enc: l,
                  from: S,
                  parsedMsgPayload: t,
                  participant: h.author,
                  sessionScope: r,
                });
              });
            (p == null || p(),
              o("WALogger")
                .LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "decryptE2EPayload: msgId::",
                      " e2eType:",
                      " done",
                    ])),
                  h.externalId,
                  l.e2eType,
                )
                .tags("messaging"),
              o(
                "WAWebPostE2eMessageRecvMetric",
              ).postSuccessE2eMessageRecvMetric({
                enc: l,
                from: S,
                msgMeta: y,
                msgInfo: h,
                msgBotInfo: g,
                error: null,
              }));
            var R = _(l),
              T = await I.timeProcess(function () {
                return n(
                  {
                    decrypted: f,
                    info: h,
                    paymentInfo: C,
                    e2eInfo: R,
                    bizInfo: i,
                    hsmInfo: d,
                    msgMeta: y,
                    rcat: b,
                    msgBotInfo: g,
                    reportingTokenInfo: v,
                  },
                  e,
                );
              });
            (T.hasInactiveMsg && (L = !0),
              T.isOrphanAddon === !0 && (E = !0),
              o("WALogger")
                .LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "processDecryptedProto: msgId::",
                      " e2eType:",
                      " done",
                    ])),
                  h.externalId,
                  l.e2eType,
                )
                .tags("messaging"));
          } catch (e) {
            k.handleError(l, e);
          } finally {
            c();
          }
        },
        D;
      for (var x of c.entries()) if (((D = await T()), D === 0)) break;
      return (await p(I, a), I.finish(), k.getResult(L, E));
    }
    function m(e, t) {
      return (t == null ? void 0 : t.deferCheckpointUntilMessageStaged) === !0
        ? o("WAWebGetMessageCache")
            .getMessageCache()
            .holdCheckpointUntilMessageStaged(
              o("WAWebMsgProcessingApiUtils").messageInfoToKey(e),
            )
        : r("WAWebNoop");
    }
    async function p(e, t) {
      (t == null ? void 0 : t.deferSignalFlush) !== !0 &&
        (o(
          "WAWebDecryptsOutsideInboundMsgRows",
        ).noteDecryptOutsideInboundMsgRows(),
        (t == null ? void 0 : t.awaitMessageWrites) === !0 &&
          o("WAWebSignalProtocolStore")
            .getSignalProtocolStore()
            .hasPendingPersistWrites() &&
          (await o("WAWebGetMessageCache")
            .getMessageCache()
            .checkpointQueueWait()),
        await e.timeSignalFlush(function () {
          return o("WAWebSignalProtocolStore")
            .getSignalProtocolStore()
            .flushBufferToDiskIfNotMemOnlyMode();
        }));
    }
    function _(e) {
      return {
        retryCount: e.retryCount,
        e2eType: e.e2eType,
        encMediaType: e.encMediaType,
        hideFail: e.hideFail,
        isPq: e.sessionType === "pq",
      };
    }
    function f(e, t) {
      e.length === 2 &&
        e[0].e2eType === o("WAWebBackendJobs.flow").CiphertextType.Skmsg &&
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "decryptE2EPayload: msgId::",
                " skMsg is out of order",
              ])),
            t.externalId,
          )
          .tags("messaging")
          .sendLogs("handleMsg: invalid encs order", { sampling: 0.01 });
    }
    ((l.decryptE2EPayload = d), (l.toE2EInfo = _));
  },
  98,
);
