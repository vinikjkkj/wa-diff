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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(t, n, r) {
      var a = t.bizInfo,
        i = t.deviceIdentity,
        l = t.encs,
        c = t.hsmInfo,
        d = t.msgBotInfo,
        p = t.msgInfo,
        _ = t.msgMeta,
        f = t.paymentInfo,
        g = t.rcat,
        h = t.reportingTokenInfo,
        y = o("WAWebMsgProcessingApiUtils").getFrom(p);
      if ((m(l, p), p.author.device != null && p.author.device !== 0)) {
        var C = await o("WAWebAdvSignatureApi").validateADVwithEncs(
          p.author,
          i,
          l,
          !!p.offline,
        );
        if (!C)
          return (
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "decryptE2EPayload: msgId::",
                    ", validateADVIdentity failed",
                  ])),
                p.externalId,
              )
              .tags("messaging"),
            {
              result: o("WAWebHandleMsgTypes.flow").E2EProcessResult.RETRY,
              retryCount: l[0].retryCount,
              retryReason: o("WAWebSendRetryReceiptJob").RetryReason.AdvFailure,
            }
          );
      }
      var b = !1,
        v = !1,
        S = o("WAWebMsgProcessingDecryptionHandler").createDecryptionHandler(t);
      for (var R of l)
        try {
          if (!S.canDecryptNext(R)) continue;
          var L = o(
              "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
            ).msgProcessReporter.startMarker(
              o("WAWebOfflineResumeMsgProcessReporterWorkerCompatible")
                .msgProcessReporter.stage.Decryption,
            ),
            E = await o("WAWebMsgProcessingDecryptEnc").decryptEnc(
              R,
              y,
              p.author,
              t,
              r,
            );
          (L == null || L(),
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "decryptE2EPayload: msgId::",
                    " e2eType:",
                    " done",
                  ])),
                p.externalId,
                R.e2eType,
              )
              .tags("messaging"),
            o("WAWebPostE2eMessageRecvMetric").postSuccessE2eMessageRecvMetric({
              enc: R,
              from: y,
              msgMeta: _,
              msgInfo: p,
              msgBotInfo: d,
              error: null,
            }));
          var k = {
              retryCount: R.retryCount,
              e2eType: R.e2eType,
              encMediaType: R.encMediaType,
              hideFail: R.hideFail,
            },
            I = await n({
              decrypted: E,
              info: p,
              paymentInfo: f,
              e2eInfo: k,
              bizInfo: a,
              hsmInfo: c,
              msgMeta: _,
              rcat: g,
              msgBotInfo: d,
              reportingTokenInfo: h,
            });
          (I.hasInactiveMsg && (b = !0),
            I.isOrphanAddon === !0 && (v = !0),
            o("WALogger")
              .LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "processDecryptedProto: msgId::",
                    " e2eType:",
                    " done",
                  ])),
                p.externalId,
                R.e2eType,
              )
              .tags("messaging"));
        } catch (e) {
          S.handleError(R, e);
        }
      return (
        await o("WAWebSignalProtocolStore")
          .getSignalProtocolStore()
          .flushBufferToDiskIfNotMemOnlyMode(),
        S.getResult(b, v)
      );
    }
    function m(e, t) {
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
    l.decryptE2EPayload = d;
  },
  98,
);
