__d(
  "WAHandleAvailableIndividualMsg",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      S,
      R = o("WATagsLogger").TAGS(["AvailableIndividualMsgHandling"]);
    function L(e, t, n) {
      o("WAMessageLoggingPublisher").messageLoggingPublisher.publish({
        commonMessageBase: e,
        id: n,
        msg: t,
        type: "decrypt-start",
      });
    }
    function E(e, t, n, r, o, a, i) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l, s) {
            if (
              (o("WAMsgLogger").logDecryptEnd(s),
              o("WAMessageLoggingPublisher").messageLoggingPublisher.publish({
                id: n,
                type: "decrypt-end",
              }),
              t.encVersion !== "3")
            )
              throw (
                R.ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "Received not v3 protobuff",
                    ])),
                ),
                r("err")("Received not v3 protobuff")
              );
            var u = e.internalTestConfig === "armadillo_express",
              S = o("WADecodeIncomingMsg").decodeIncomingMsg(
                l.plaintext,
                "v3",
                null,
                u,
              );
            if (S.version === "v2")
              throw (
                R.ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "Decoded not v3 protobuff",
                    ])),
                ),
                r("err")("Decoded not v3 protobuff")
              );
            if (S.type === "error")
              throw (
                R.WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "Decoding error ",
                      ", stanzaId: ",
                      "",
                    ])),
                  S.error,
                  e.stanzaId,
                ),
                R.ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "Decoding error ",
                      "",
                    ])),
                  S.error,
                ),
                r("err")("Decoding error " + S.error)
              );
            if (S.type === "empty")
              return (
                R.WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "Handling empty message from platform: ",
                      ", msgType: Individual, stanzaId: ",
                      "",
                    ])),
                  o("WAGetPlatformFromStanzaId").getPlatformFromStanzaId(
                    e.stanzaId,
                  ),
                  e.stanzaId,
                ),
                R.ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "Handling empty message from platform: ",
                      ", msgType: Individual",
                    ])),
                  o("WAGetPlatformFromStanzaId").getPlatformFromStanzaId(
                    e.stanzaId,
                  ),
                ),
                o("WAMsgLogger").endWAMessageReceiveSuccess(s),
                a()
              );
            if (S.type === "msgWithSKDM" || S.type === "skdm")
              throw (
                R.WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "Unsupported type ",
                      ", stanzaId: ",
                      "",
                    ])),
                  S.type,
                  e.stanzaId,
                ),
                R.ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "Unsupported type ",
                      "",
                    ])),
                  S.type,
                ),
                r("err")("Unsupported type " + S.type)
              );
            var L = yield o(
              "WAFranking",
            ).handleAndValidateFrankingFromIncomingMsg(
              S,
              o("WAReportingMeta").getReportingMeta(e),
            );
            if (L.decision === o("WAFranking").FrankingDecision.DROP)
              return (
                R.WARN(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "Received message with invalid or missing franking tag, stanzaId: ",
                      "",
                    ])),
                  e.stanzaId,
                ),
                R.ERROR(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "Received message with invalid or missing franking tag",
                    ])),
                ),
                o("WAMsgLogger").logFrankingDrop(s),
                o("WAMessageLoggingPublisher").messageLoggingPublisher.publish({
                  id: n,
                  type: "franking-drop",
                }),
                o("WAMsgLogger").endWAMessageReceiveFailure(s, "franking-drop"),
                a()
              );
            if (
              t.groupInviteTarget != null &&
              o("WAGlobals").getConfig().skipProcessingGroupInvite() === !0
            )
              return (
                R.LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "Skipping processing group invite - stanzaId: ",
                      "",
                    ])),
                  e.stanzaId,
                ),
                a()
              );
            if (S.type !== "instamadillo")
              switch (S.type) {
                case "subprotocol":
                case "ephemeral":
                case "futureProof": {
                  var E = o(
                    "WABuildMpsPayload",
                  ).buildMpsMessageFromIncomingMessage(e, t, {
                    type: "message",
                    applicationPayload: S.applicationPayload,
                  });
                  if (o("WAGlobals").getConfig().isWaiMpsWriteSuppressed()) {
                    o("WAMsgLogger").endWAMessageReceiveSuccess(s);
                    break;
                  }
                  (s.addPoint("mps_flush_start"),
                    o("WAMPSFlushable").mpsFlushable.enqueue(
                      E,
                      function (e) {
                        if (e != null) {
                          (s.addPoint("mps_flush_fail", {
                            string: {
                              errorDescription: o(
                                "getSafeQplErrorMessage",
                              ).getSafeQPLErrorMessage(e),
                            },
                          }),
                            R.ERROR(
                              v ||
                                (v = babelHelpers.taggedTemplateLiteralLoose([
                                  "Failed to save msg: ",
                                  "",
                                ])),
                              e,
                            ),
                            s.endFail("persistence-error"));
                          return;
                        }
                        (s.addPoint("mps_flush_end"), s.endSuccess());
                      },
                      "handle_decrypted_msg",
                    ));
                  break;
                }
                default:
              }
            return i({ chat: t.chat, from: t.from, stanzaId: e.stanzaId });
          },
        )),
        k.apply(this, arguments)
      );
    }
    function I(e, t, r, a, i, l, c, d) {
      return (
        o("WAMsgLogger").logDecryptFailure(d, l),
        o("WAMessageLoggingPublisher").messageLoggingPublisher.publish({
          errorResult: l,
          id: r,
          type: "decrypt-fail",
        }),
        R.WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "Decrypted msg with error ",
              ", stanzaId: ",
              "",
            ])),
          l.error,
          e.stanzaId,
        ),
        d.addPoint("mps_flush_start"),
        o("WAMPSFlushable").mpsFlushable.enqueue(
          o("WABuildMpsPayload").buildMpsMessageFromIncomingMessage(e, t, {
            type: "ciphertext",
          }),
          function (e) {
            if (e != null) {
              (d.addPoint("mps_flush_fail", {
                string: {
                  errorDescription: o(
                    "getSafeQplErrorMessage",
                  ).getSafeQPLErrorMessage(e),
                },
              }),
                d.endFail("persistence-error"),
                R.ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to save 1:1 ciphertext msg: ",
                      "",
                    ])),
                  e,
                ));
              return;
            }
            (d.addPoint("mps_flush_end"), d.endFail("decryption-failure"));
          },
          "handle_cyphertext_msg",
        ),
        l.error === "errDuplicateMsg"
          ? (S || (S = n("Promise"))).resolve(
              a({ chat: t.chat, from: t.from, stanzaId: e.stanzaId }),
            )
          : (o("WAMsgLogger").logRetryIssued(d),
            o("WAMessageLoggingPublisher").messageLoggingPublisher.publish({
              id: r,
              type: "issue-retry",
            }),
            i(
              {
                author: t.author,
                chat: t.chat,
                deviceIdentity: null,
                error: l.error,
                from: t.from,
                retryCount: t.retryCount,
                serverTs: e.serverTs,
                stanzaId: e.stanzaId,
              },
              c,
            ))
      );
    }
    var T = new (o("WALRUMap").LRUMap)({ max: 500 });
    function D(e) {
      return T.has(e) ? !0 : (T.set(e, !0), !1);
    }
    function x(e, t, n, r, o, a, i) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i, l, s, u) {
            var c = function (t) {
                var e = t.chat,
                  n = t.from,
                  r = t.stanzaId,
                  o = "delivery-" + e + "-" + n + "-" + r;
                return (
                  u.addAnnotations({
                    bool: { duplicatedReceipt: D(o) },
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
                    bool: { duplicatedReceipt: D(d) },
                    string: { duplicatedReceiptType: "retry" },
                  }),
                  l(
                    babelHelpers.extends(
                      {
                        stanzaId: s,
                        retryCount: i,
                        author: t,
                        from: a,
                        chat: o,
                      },
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
              L(t, n, m));
            var p =
              r("gkx")("16990") && n.retryCount < 3
                ? o("WAResultOrError").makeError(
                    "errInvalidMacWithDecryptedPlaintext",
                  )
                : yield o("WACryptoManagerUtils").decryptMsg(
                    n.encType,
                    n.from,
                    n.ciphertext,
                    s,
                  );
            return p.success === !1
              ? I(t, n, m, c, d, p, s, u)
              : p.value == null
                ? I(
                    t,
                    n,
                    m,
                    c,
                    d,
                    o("WAResultOrError").makeError("empty-content"),
                    s,
                    u,
                  )
                : E(t, n, m, a, c, p.value, u);
          },
        )),
        $.apply(this, arguments)
      );
    }
    l.handleIndividualMsg = x;
  },
  98,
);
