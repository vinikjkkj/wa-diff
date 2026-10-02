__d(
  "WAHandleGroupMsg",
  [
    "Promise",
    "WABuildMpsPayload",
    "WACryptoManagerUtils",
    "WADecodeIncomingMsg",
    "WAFranking",
    "WAGetPlatformFromStanzaId",
    "WAJids",
    "WAMPSFlushable",
    "WAMessageLoggingPublisher",
    "WAMsgLogger",
    "WAReportingMeta",
    "WAResultOrError",
    "WATagsLogger",
    "asyncToGeneratorRuntime",
    "err",
    "getSafeQplErrorMessage",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
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
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N = o("WATagsLogger").TAGS(["GroupMsgHandling"]);
    function M(e, t, n, r, o, a, i, l, s, u) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l, s, C, b, v) {
            var S = e;
            if (S.version === "v2")
              throw (
                N.ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Decoded not v3 protobuff",
                    ])),
                ),
                r("err")("Decoded not v3 protobuff")
              );
            if (S.type === "error") {
              var R =
                "Decoding error " +
                S.error +
                ", groupMsgType: " +
                n.type +
                ", platform: " +
                o("WAGetPlatformFromStanzaId").getPlatformFromStanzaId(
                  t.stanzaId,
                );
              throw (
                N.WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      ", stanzaId: ",
                      "",
                    ])),
                  R,
                  t.stanzaId,
                ),
                N.ERROR(
                  d || (d = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                  R,
                ),
                r("err")("Decoding error " + S.error)
              );
            }
            if (S.type === "msgWithSKDM") {
              var L = S.skdm;
              if (L.type === "error")
                throw (
                  N.WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "msgWithSKDM skdm decoding error, stanzaId: ",
                        "",
                      ])),
                    t.stanzaId,
                  ),
                  N.ERROR(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "msgWithSKDM skdm decoding error",
                      ])),
                  ),
                  r("err")("msgWithSKDM skdm decoding error")
                );
              return (
                yield F(L, n.chat, n.from, b),
                M(S.msg, t, n, a, i, l, s, C, b, v)
              );
            }
            if (S.type === "empty")
              return (
                N.WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "Handling empty message from platform: ",
                      ", groupMsgType: ",
                      ", stanzaId: ",
                      "",
                    ])),
                  o("WAGetPlatformFromStanzaId").getPlatformFromStanzaId(
                    t.stanzaId,
                  ),
                  n.type,
                  t.stanzaId,
                ),
                N.ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "Handling empty message from platform: ",
                      ", groupMsgType: ",
                      "",
                    ])),
                  o("WAGetPlatformFromStanzaId").getPlatformFromStanzaId(
                    t.stanzaId,
                  ),
                  n.type,
                ),
                o("WAMsgLogger").logInvisibleMsg(v),
                o("WAMsgLogger").endWAMessageReceiveSuccess(v),
                o("WAMessageLoggingPublisher").messageLoggingPublisher.publish({
                  id: a,
                  type: "invisible-msg-done",
                }),
                i()
              );
            if (S.type === "skdm")
              return (
                yield F(S, n.chat, n.from, b),
                o("WAMsgLogger").logInvisibleMsg(v),
                o("WAMsgLogger").endWAMessageReceiveSuccess(v),
                o("WAMessageLoggingPublisher").messageLoggingPublisher.publish({
                  id: a,
                  type: "invisible-msg-done",
                }),
                i()
              );
            if (S.type === "instamadillo")
              throw (
                N.ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "Unsupported type instamadillo",
                    ])),
                ),
                r("err")("Unsupported type instamadillo")
              );
            var E = yield o(
              "WAFranking",
            ).handleAndValidateFrankingFromIncomingMsg(
              S,
              o("WAReportingMeta").getReportingMeta(t),
            );
            if (E.decision === o("WAFranking").FrankingDecision.DROP)
              return (
                N.ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "Received message with invalid or missing franking tag",
                    ])),
                ),
                o("WAMsgLogger").logFrankingDrop(v),
                o("WAMsgLogger").endWAMessageReceiveFailure(v, "franking-drop"),
                o("WAMessageLoggingPublisher").messageLoggingPublisher.publish({
                  id: a,
                  type: "franking-drop",
                }),
                i()
              );
            switch (S.type) {
              case "subprotocol":
              case "ephemeral":
              case "futureProof": {
                (v.addPoint("mps_flush_start"),
                  o("WAMPSFlushable").mpsFlushable.enqueue(
                    o("WABuildMpsPayload").buildMpsMessageFromIncomingMessage(
                      t,
                      n,
                      {
                        type: "message",
                        applicationPayload: S.applicationPayload,
                      },
                    ),
                    function (e) {
                      if (e != null) {
                        (v.addPoint("mps_flush_fail", {
                          string: {
                            mpsError: o(
                              "getSafeQplErrorMessage",
                            ).getSafeQPLErrorMessage(e),
                          },
                        }),
                          N.ERROR(
                            y ||
                              (y = babelHelpers.taggedTemplateLiteralLoose([
                                "Failed to save group msg: ",
                                "",
                              ])),
                            e,
                          ),
                          v.endFail("persistence-error"));
                        return;
                      }
                      (v.addPoint("mps_flush_end"), v.endSuccess());
                    },
                    "handle_group_decrypted_msg",
                  ));
                break;
              }
              default:
            }
            return l({ chat: n.chat, from: n.from, stanzaId: t.stanzaId });
          },
        )),
        w.apply(this, arguments)
      );
    }
    function A(t, r, a, i, l, u, c, d, m) {
      return (
        o("WAMsgLogger").logDecryptFailure(m, u),
        o("WAMessageLoggingPublisher").messageLoggingPublisher.publish({
          errorResult: u,
          id: a,
          type: "decrypt-fail",
        }),
        N.WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Decrypted msg with error ",
              ", stanzaId: ",
              "",
            ])),
          u.error,
          t.stanzaId,
        ),
        t.hideDecryptionFailure === !1 &&
          (m.addPoint("mps_flush_start"),
          o("WAMPSFlushable").mpsFlushable.enqueue(
            o("WABuildMpsPayload").buildMpsMessageFromIncomingMessage(t, r, {
              type: "ciphertext",
            }),
            function (e) {
              if (e != null) {
                var t;
                (m.addPoint("mps_flush_fail", {
                  string: {
                    mpsError:
                      (t = e == null ? void 0 : e.message) != null
                        ? t
                        : "unknown",
                  },
                }),
                  m.endFail("persistence-error"),
                  N.ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to save group ciphertext msg: ",
                        "",
                      ])),
                    e,
                  ));
                return;
              }
              (m.addPoint("mps_flush_end"), m.endFail("decryption-failure"));
            },
            "handle_group_ciphertext_msg",
          )),
        u.error === "errDuplicateMsg"
          ? (P || (P = n("Promise"))).resolve(
              i({ chat: r.chat, from: r.from, stanzaId: t.stanzaId }),
            )
          : (o("WAMsgLogger").logRetryIssued(m),
            o("WAMessageLoggingPublisher").messageLoggingPublisher.publish({
              id: a,
              type: "issue-retry",
            }),
            t.hideDecryptionFailure === !0 &&
              o("WAMsgLogger").endWAMessageReceiveFailure(
                m,
                "decryption-failure",
              ),
            l(
              {
                author: r.author,
                chat: r.chat,
                deviceIdentity: null,
                error: u.error,
                from: r.from,
                retryCount: c,
                serverTs: t.serverTs,
                stanzaId: t.stanzaId,
              },
              d,
            ))
      );
    }
    function F(e, t, n, r) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            if (o("WAJids").toGroupJid(e.msg.groupId) !== t)
              throw (
                N.ERROR(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "Group mismatch ",
                      " vs ",
                      "",
                    ])),
                  e.msg.groupId,
                  t,
                ),
                r("err")("group-mismatch")
              );
            var i = yield o("WACryptoManagerUtils").saveSenderKeySession(
              t,
              n,
              new Uint8Array(e.msg.senderKey),
              a,
            );
            if (!i.success)
              throw (
                N.ERROR(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "Fail to save senderKeySession ",
                      "",
                    ])),
                  i.error,
                ),
                r("err")("fail-to-save")
              );
          },
        )),
        O.apply(this, arguments)
      );
    }
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.senderKeyDistributionEnc,
            a;
          switch (n.encType) {
            case "skmsg":
              throw (
                N.ERROR(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "DualEnc cannot receive SKMSG first",
                    ])),
                ),
                r("err")("DualEnc cannot receive SKMSG first")
              );
            case "pkmsg":
            case "msg": {
              a = yield o("WACryptoManagerUtils").decryptMsg(
                n.encType,
                e.from,
                n.ciphertext,
                t,
              );
              break;
            }
            case "msmsg":
              throw (
                N.ERROR(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "Unsupported type ",
                      "",
                    ])),
                  n.encType,
                ),
                r("err")("Unsupported type " + n.encType)
              );
            default:
              throw (
                n.encType,
                N.ERROR(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "Unsupported type ",
                      "",
                    ])),
                  n.encType,
                ),
                r("err")("Unsupported type " + n.encType)
              );
          }
          if (a.success === !1) return o("WAResultOrError").makeError(a.error);
          if (a.value == null) return o("WAResultOrError").makeError("empty");
          var i = o("WADecodeIncomingMsg").decodeIncomingMsg(
            a.value.plaintext,
            "v3",
          );
          if (i.version !== "v3")
            return (
              N.ERROR(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "Decoded not v3 protobuff",
                  ])),
              ),
              o("WAResultOrError").makeError("not-v3")
            );
          if (i.type === "skdm") {
            if (o("WAJids").toGroupJid(i.msg.groupId) !== e.chat)
              return (
                N.ERROR(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "Group mismatch ",
                      " vs ",
                      "",
                    ])),
                  i.msg.groupId,
                  e.chat,
                ),
                o("WAResultOrError").makeError("group-mismatch")
              );
            N.LOG(
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "Saving sender key session for ",
                  "",
                ])),
              e.from,
            );
            var l = yield o("WACryptoManagerUtils").saveSenderKeySession(
              e.chat,
              e.from,
              new Uint8Array(i.msg.senderKey),
              t,
            );
            return l.success
              ? (N.LOG(
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
                      "Sender key session is saved",
                    ])),
                ),
                o("WAResultOrError").makeResult())
              : (N.ERROR(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "Fail to save senderKeySession ",
                      "",
                    ])),
                  l.error,
                ),
                o("WAResultOrError").makeError("fail-to-save"));
          } else
            return (
              N.ERROR(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "Unsupported type ",
                    "",
                  ])),
                i.type,
              ),
              o("WAResultOrError").makeError("fail-to-save")
            );
        })),
        W.apply(this, arguments)
      );
    }
    function q(e, t, n, r, o, a, i) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l, s) {
            var u = o("WAMessageLoggingPublisher").getWAIncomingMsgLoggingId(
              e.stanzaId,
            );
            (o("WAMsgLogger").logStartDecryption(s, e.hideDecryptionFailure),
              o("WAMessageLoggingPublisher").messageLoggingPublisher.publish({
                commonMessageBase: e,
                id: u,
                msg: t,
                type: "new-message",
              }),
              o("WAMessageLoggingPublisher").messageLoggingPublisher.publish({
                commonMessageBase: e,
                id: u,
                msg: t,
                type: "decrypt-start",
              }));
            var c,
              d = 0;
            if (t.type === "DualEnc") {
              var m = yield B(t, l);
              (o("WAMsgLogger").logSkdmDecryptionResult(s, m.success, m.error),
                o("WAMessageLoggingPublisher").messageLoggingPublisher.publish({
                  id: u,
                  result: m,
                  type: "decrypt-skdm-done",
                }),
                (c = t.senderKeyMessageEnc));
            } else {
              var p;
              ((c = t.enc), (d = (p = t.enc.retryCount) != null ? p : 0));
            }
            var _;
            switch (c.encType) {
              case "skmsg": {
                _ = yield o("WACryptoManagerUtils").decryptGroupMsg(
                  t.chat,
                  t.from,
                  c.ciphertext,
                  l,
                );
                break;
              }
              case "pkmsg":
              case "msg": {
                _ = yield o("WACryptoManagerUtils").decryptMsg(
                  c.encType,
                  t.from,
                  c.ciphertext,
                  l,
                );
                break;
              }
              case "msmsg":
                throw (
                  N.ERROR(
                    x ||
                      (x = babelHelpers.taggedTemplateLiteralLoose([
                        "Unsupported type ",
                        "",
                      ])),
                    c.encType,
                  ),
                  r("err")("Unsupported type " + c.encType)
                );
              default:
                throw (
                  c.encType,
                  N.ERROR(
                    $ ||
                      ($ = babelHelpers.taggedTemplateLiteralLoose([
                        "Unsupported type ",
                        "",
                      ])),
                    c.encType,
                  ),
                  r("err")("Unsupported type " + c.encType)
                );
            }
            if (_.success === !1) return A(e, t, u, a, i, _, d, l, s);
            if (_.value == null)
              return A(
                e,
                t,
                u,
                a,
                i,
                o("WAResultOrError").makeError("empty-content"),
                d,
                l,
                s,
              );
            var f = _.value,
              g = f.plaintext,
              h = f.remoteIdentity;
            return (
              o("WAMsgLogger").logDecryptEnd(s),
              o("WAMessageLoggingPublisher").messageLoggingPublisher.publish({
                id: u,
                type: "decrypt-end",
              }),
              M(
                o("WADecodeIncomingMsg").decodeIncomingMsg(g, "v3"),
                e,
                t,
                u,
                n,
                a,
                h,
                d,
                l,
                s,
              )
            );
          },
        )),
        U.apply(this, arguments)
      );
    }
    l.handleGroupMsg = q;
  },
  98,
);
