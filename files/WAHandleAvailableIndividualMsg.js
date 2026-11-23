__d(
  "WAHandleAvailableIndividualMsg",
  [
    "WABuildMpsPayload",
    "WACryptoManagerUtils",
    "WADecodeIncomingMsg",
    "WAFranking",
    "WAGetPlatformFromStanzaId",
    "WAGlobals",
    "WALRUMap",
    "WAMPSFlushable",
    "WAMessageLoggingPublisher",
    "WAMsgLogger",
    "WAReportingMeta",
    "WAResultOrError",
    "WATagsLogger",
    "err",
    "getSafeQplErrorMessage",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["author", "chat", "from", "retryCount", "stanzaId"],
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S = o("WATagsLogger").TAGS(["AvailableIndividualMsgHandling"]);
    function R(e, t, n) {
      o("WAMessageLoggingPublisher").messageLoggingPublisher.publish({
        commonMessageBase: e,
        id: n,
        msg: t,
        type: "decrypt-start",
      });
    }
    async function L(e, t, n, a, i, l, b) {
      if (
        (o("WAMsgLogger").logDecryptEnd(b),
        o("WAMessageLoggingPublisher").messageLoggingPublisher.publish({
          id: n,
          type: "decrypt-end",
        }),
        t.encVersion !== "3")
      )
        throw (
          S.ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Received not v3 protobuff",
              ])),
          ),
          r("err")("Received not v3 protobuff")
        );
      var v = e.internalTestConfig === "armadillo_express",
        R = o("WADecodeIncomingMsg").decodeIncomingMsg(
          l.plaintext,
          "v3",
          null,
          v,
        );
      if (R.version === "v2")
        throw (
          S.ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Decoded not v3 protobuff",
              ])),
          ),
          r("err")("Decoded not v3 protobuff")
        );
      if (R.type === "error")
        throw (
          S.WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "Decoding error ",
                ", stanzaId: ",
                "",
              ])),
            R.error,
            e.stanzaId,
          ),
          S.ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "Decoding error ",
                "",
              ])),
            R.error,
          ),
          r("err")("Decoding error " + R.error)
        );
      if (R.type === "empty")
        return (
          S.WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "Handling empty message from platform: ",
                ", msgType: Individual, stanzaId: ",
                "",
              ])),
            o("WAGetPlatformFromStanzaId").getPlatformFromStanzaId(e.stanzaId),
            e.stanzaId,
          ),
          S.ERROR(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "Handling empty message from platform: ",
                ", msgType: Individual",
              ])),
            o("WAGetPlatformFromStanzaId").getPlatformFromStanzaId(e.stanzaId),
          ),
          o("WAMsgLogger").endWAMessageReceiveSuccess(b),
          a()
        );
      if (R.type === "msgWithSKDM" || R.type === "skdm")
        throw (
          S.WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "Unsupported type ",
                ", stanzaId: ",
                "",
              ])),
            R.type,
            e.stanzaId,
          ),
          S.ERROR(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "Unsupported type ",
                "",
              ])),
            R.type,
          ),
          r("err")("Unsupported type " + R.type)
        );
      var L = await o("WAFranking").handleAndValidateFrankingFromIncomingMsg(
        R,
        o("WAReportingMeta").getReportingMeta(e),
      );
      if (L.decision === o("WAFranking").FrankingDecision.DROP)
        return (
          S.WARN(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "Received message with invalid or missing franking tag, stanzaId: ",
                "",
              ])),
            e.stanzaId,
          ),
          S.ERROR(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "Received message with invalid or missing franking tag",
              ])),
          ),
          o("WAMsgLogger").logFrankingDrop(b),
          o("WAMessageLoggingPublisher").messageLoggingPublisher.publish({
            id: n,
            type: "franking-drop",
          }),
          o("WAMsgLogger").endWAMessageReceiveFailure(b, "franking-drop"),
          a()
        );
      if (
        t.groupInviteTarget != null &&
        o("WAGlobals").getConfig().skipProcessingGroupInvite() === !0
      )
        return (
          S.LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "Skipping processing group invite - stanzaId: ",
                "",
              ])),
            e.stanzaId,
          ),
          a()
        );
      if (R.type !== "instamadillo")
        switch (R.type) {
          case "subprotocol":
          case "ephemeral":
          case "futureProof": {
            var E = o("WABuildMpsPayload").buildMpsMessageFromIncomingMessage(
              e,
              t,
              { type: "message", applicationPayload: R.applicationPayload },
            );
            if (o("WAGlobals").getConfig().isWaiMpsWriteSuppressed()) {
              o("WAMsgLogger").endWAMessageReceiveSuccess(b);
              break;
            }
            (b.addPoint("mps_flush_start"),
              o("WAMPSFlushable").mpsFlushable.enqueue(
                E,
                function (e) {
                  if (e != null) {
                    (b.addPoint("mps_flush_fail", {
                      string: {
                        errorDescription: o(
                          "getSafeQplErrorMessage",
                        ).getSafeQPLErrorMessage(e),
                      },
                    }),
                      S.ERROR(
                        C ||
                          (C = babelHelpers.taggedTemplateLiteralLoose([
                            "Failed to save msg: ",
                            "",
                          ])),
                        e,
                      ),
                      b.endFail("persistence-error"));
                    return;
                  }
                  (b.addPoint("mps_flush_end"), b.endSuccess());
                },
                "handle_decrypted_msg",
              ));
            break;
          }
          default:
        }
      return i({ chat: t.chat, from: t.from, stanzaId: e.stanzaId });
    }
    function E(e, t, n, r, a, i, l, s) {
      return (
        o("WAMsgLogger").logDecryptFailure(s, i),
        o("WAMessageLoggingPublisher").messageLoggingPublisher.publish({
          errorResult: i,
          id: n,
          type: "decrypt-fail",
        }),
        S.WARN(
          b ||
            (b = babelHelpers.taggedTemplateLiteralLoose([
              "Decrypted msg with error ",
              ", stanzaId: ",
              "",
            ])),
          i.error,
          e.stanzaId,
        ),
        s.addPoint("mps_flush_start"),
        o("WAMPSFlushable").mpsFlushable.enqueue(
          o("WABuildMpsPayload").buildMpsMessageFromIncomingMessage(e, t, {
            type: "ciphertext",
          }),
          function (e) {
            if (e != null) {
              (s.addPoint("mps_flush_fail", {
                string: {
                  errorDescription: o(
                    "getSafeQplErrorMessage",
                  ).getSafeQPLErrorMessage(e),
                },
              }),
                s.endFail("persistence-error"),
                S.ERROR(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to save 1:1 ciphertext msg: ",
                      "",
                    ])),
                  e,
                ));
              return;
            }
            (s.addPoint("mps_flush_end"), s.endFail("decryption-failure"));
          },
          "handle_cyphertext_msg",
        ),
        i.error === "errDuplicateMsg"
          ? Promise.resolve(
              r({ chat: t.chat, from: t.from, stanzaId: e.stanzaId }),
            )
          : (o("WAMsgLogger").logRetryIssued(s),
            o("WAMessageLoggingPublisher").messageLoggingPublisher.publish({
              id: n,
              type: "issue-retry",
            }),
            a(
              {
                author: t.author,
                chat: t.chat,
                deviceIdentity: null,
                error: i.error,
                from: t.from,
                retryCount: t.retryCount,
                serverTs: e.serverTs,
                stanzaId: e.stanzaId,
              },
              l,
            ))
      );
    }
    var k = new (o("WALRUMap").LRUMap)({ max: 500 });
    function I(e) {
      return k.has(e) ? !0 : (k.set(e, !0), !1);
    }
    async function T(t, n, a, i, l, s, u) {
      var c = function (t) {
          var e = t.chat,
            n = t.from,
            r = t.stanzaId,
            o = "delivery-" + e + "-" + n + "-" + r;
          return (
            u.addAnnotations({
              bool: { duplicatedReceipt: I(o) },
              string: { duplicatedReceiptType: "delivery" },
            }),
            i({ chat: e, from: n, stanzaId: r })
          );
        },
        d = function (n, r) {
          var t = n.author,
            o = n.chat,
            a = n.from,
            i = n.retryCount,
            s = n.stanzaId,
            c = babelHelpers.objectWithoutPropertiesLoose(n, e),
            d = "retry-" + o + "-" + a + "-" + s + "-" + t + "-" + i;
          return (
            u.addAnnotations({
              bool: { duplicatedReceipt: I(d) },
              string: { duplicatedReceiptType: "retry" },
            }),
            l(
              babelHelpers.extends(
                { stanzaId: s, retryCount: i, author: t, from: a, chat: o },
                c,
              ),
              r,
            )
          );
        },
        m = o("WAMessageLoggingPublisher").getWAIncomingMsgLoggingId(
          t.stanzaId,
        );
      (o("WAMsgLogger").logStartDecryption(u, t.hideDecryptionFailure),
        o("WAMessageLoggingPublisher").messageLoggingPublisher.publish({
          commonMessageBase: t,
          id: m,
          msg: n,
          type: "new-message",
        }),
        R(t, n, m));
      var p =
        r("gkx")("16990") && n.retryCount < 3
          ? o("WAResultOrError").makeError(
              "errInvalidMacWithDecryptedPlaintext",
            )
          : await o("WACryptoManagerUtils").decryptMsg(
              n.encType,
              n.from,
              n.ciphertext,
              s,
            );
      return p.success === !1
        ? E(t, n, m, c, d, p, s, u)
        : p.value == null
          ? E(
              t,
              n,
              m,
              c,
              d,
              o("WAResultOrError").makeError("empty-content"),
              s,
              u,
            )
          : L(t, n, m, a, c, p.value, u);
    }
    l.handleIndividualMsg = T;
  },
  98,
);
