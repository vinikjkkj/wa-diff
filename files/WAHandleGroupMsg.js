__d(
  "WAHandleGroupMsg",
  [
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
      P = o("WATagsLogger").TAGS(["GroupMsgHandling"]);
    async function N(t, n, a, i, l, h, y, C, b, v) {
      var S = t;
      if (S.version === "v2")
        throw (
          P.ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
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
          a.type +
          ", platform: " +
          o("WAGetPlatformFromStanzaId").getPlatformFromStanzaId(n.stanzaId);
        throw (
          P.WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "",
                ", stanzaId: ",
                "",
              ])),
            R,
            n.stanzaId,
          ),
          P.ERROR(
            u || (u = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
            R,
          ),
          r("err")("Decoding error " + S.error)
        );
      }
      if (S.type === "msgWithSKDM") {
        var L = S.skdm;
        if (L.type === "error")
          throw (
            P.WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "msgWithSKDM skdm decoding error, stanzaId: ",
                  "",
                ])),
              n.stanzaId,
            ),
            P.ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "msgWithSKDM skdm decoding error",
                ])),
            ),
            r("err")("msgWithSKDM skdm decoding error")
          );
        return (
          await w(L, a.chat, a.from, b),
          N(S.msg, n, a, i, l, h, y, C, b, v)
        );
      }
      if (S.type === "empty")
        return (
          P.WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "Handling empty message from platform: ",
                ", groupMsgType: ",
                ", stanzaId: ",
                "",
              ])),
            o("WAGetPlatformFromStanzaId").getPlatformFromStanzaId(n.stanzaId),
            a.type,
            n.stanzaId,
          ),
          P.ERROR(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "Handling empty message from platform: ",
                ", groupMsgType: ",
                "",
              ])),
            o("WAGetPlatformFromStanzaId").getPlatformFromStanzaId(n.stanzaId),
            a.type,
          ),
          o("WAMsgLogger").logInvisibleMsg(v),
          o("WAMsgLogger").endWAMessageReceiveSuccess(v),
          o("WAMessageLoggingPublisher").messageLoggingPublisher.publish({
            id: i,
            type: "invisible-msg-done",
          }),
          l()
        );
      if (S.type === "skdm")
        return (
          await w(S, a.chat, a.from, b),
          o("WAMsgLogger").logInvisibleMsg(v),
          o("WAMsgLogger").endWAMessageReceiveSuccess(v),
          o("WAMessageLoggingPublisher").messageLoggingPublisher.publish({
            id: i,
            type: "invisible-msg-done",
          }),
          l()
        );
      if (S.type === "instamadillo")
        throw (
          P.ERROR(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "Unsupported type instamadillo",
              ])),
          ),
          r("err")("Unsupported type instamadillo")
        );
      var E = await o("WAFranking").handleAndValidateFrankingFromIncomingMsg(
        S,
        o("WAReportingMeta").getReportingMeta(n),
      );
      if (E.decision === o("WAFranking").FrankingDecision.DROP)
        return (
          P.ERROR(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "Received message with invalid or missing franking tag",
              ])),
          ),
          o("WAMsgLogger").logFrankingDrop(v),
          o("WAMsgLogger").endWAMessageReceiveFailure(v, "franking-drop"),
          o("WAMessageLoggingPublisher").messageLoggingPublisher.publish({
            id: i,
            type: "franking-drop",
          }),
          l()
        );
      switch (S.type) {
        case "subprotocol":
        case "ephemeral":
        case "futureProof": {
          (v.addPoint("mps_flush_start"),
            o("WAMPSFlushable").mpsFlushable.enqueue(
              o("WABuildMpsPayload").buildMpsMessageFromIncomingMessage(n, a, {
                type: "message",
                applicationPayload: S.applicationPayload,
              }),
              function (e) {
                if (e != null) {
                  (v.addPoint("mps_flush_fail", {
                    string: {
                      mpsError: o(
                        "getSafeQplErrorMessage",
                      ).getSafeQPLErrorMessage(e),
                    },
                  }),
                    P.ERROR(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
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
      return h({ chat: a.chat, from: a.from, stanzaId: n.stanzaId });
    }
    function M(e, t, n, r, a, i, l, s, u) {
      return (
        o("WAMsgLogger").logDecryptFailure(u, i),
        o("WAMessageLoggingPublisher").messageLoggingPublisher.publish({
          errorResult: i,
          id: n,
          type: "decrypt-fail",
        }),
        P.WARN(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "Decrypted msg with error ",
              ", stanzaId: ",
              "",
            ])),
          i.error,
          e.stanzaId,
        ),
        e.hideDecryptionFailure === !1 &&
          (u.addPoint("mps_flush_start"),
          o("WAMPSFlushable").mpsFlushable.enqueue(
            o("WABuildMpsPayload").buildMpsMessageFromIncomingMessage(e, t, {
              type: "ciphertext",
            }),
            function (e) {
              if (e != null) {
                var t;
                (u.addPoint("mps_flush_fail", {
                  string: {
                    mpsError:
                      (t = e == null ? void 0 : e.message) != null
                        ? t
                        : "unknown",
                  },
                }),
                  u.endFail("persistence-error"),
                  P.ERROR(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to save group ciphertext msg: ",
                        "",
                      ])),
                    e,
                  ));
                return;
              }
              (u.addPoint("mps_flush_end"), u.endFail("decryption-failure"));
            },
            "handle_group_ciphertext_msg",
          )),
        i.error === "errDuplicateMsg"
          ? Promise.resolve(
              r({ chat: t.chat, from: t.from, stanzaId: e.stanzaId }),
            )
          : (o("WAMsgLogger").logRetryIssued(u),
            o("WAMessageLoggingPublisher").messageLoggingPublisher.publish({
              id: n,
              type: "issue-retry",
            }),
            e.hideDecryptionFailure === !0 &&
              o("WAMsgLogger").endWAMessageReceiveFailure(
                u,
                "decryption-failure",
              ),
            a(
              {
                author: t.author,
                chat: t.chat,
                deviceIdentity: null,
                error: i.error,
                from: t.from,
                retryCount: l,
                serverTs: e.serverTs,
                stanzaId: e.stanzaId,
              },
              s,
            ))
      );
    }
    async function w(e, t, n, a) {
      if (o("WAJids").toGroupJid(e.msg.groupId) !== t)
        throw (
          P.ERROR(
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
      var i = await o("WACryptoManagerUtils").saveSenderKeySession(
        t,
        n,
        new Uint8Array(e.msg.senderKey),
        a,
      );
      if (!i.success)
        throw (
          P.ERROR(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "Fail to save senderKeySession ",
                "",
              ])),
            i.error,
          ),
          r("err")("fail-to-save")
        );
    }
    async function A(e, t) {
      var n = e.senderKeyDistributionEnc,
        a;
      switch (n.encType) {
        case "skmsg":
          throw (
            P.ERROR(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "DualEnc cannot receive SKMSG first",
                ])),
            ),
            r("err")("DualEnc cannot receive SKMSG first")
          );
        case "pkmsg":
        case "msg": {
          a = await o("WACryptoManagerUtils").decryptMsg(
            n.encType,
            e.from,
            n.ciphertext,
            t,
          );
          break;
        }
        case "msmsg":
          throw (
            P.ERROR(
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
            P.ERROR(
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
          P.ERROR(
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
            P.ERROR(
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
        P.LOG(
          k ||
            (k = babelHelpers.taggedTemplateLiteralLoose([
              "Saving sender key session for ",
              "",
            ])),
          e.from,
        );
        var l = await o("WACryptoManagerUtils").saveSenderKeySession(
          e.chat,
          e.from,
          new Uint8Array(i.msg.senderKey),
          t,
        );
        return l.success
          ? (P.LOG(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "Sender key session is saved",
                ])),
            ),
            o("WAResultOrError").makeResult())
          : (P.ERROR(
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
          P.ERROR(
            D ||
              (D = babelHelpers.taggedTemplateLiteralLoose([
                "Unsupported type ",
                "",
              ])),
            i.type,
          ),
          o("WAResultOrError").makeError("fail-to-save")
        );
    }
    async function F(e, t, n, a, i, l, s) {
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
        var m = await A(t, l);
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
          _ = await o("WACryptoManagerUtils").decryptGroupMsg(
            t.chat,
            t.from,
            c.ciphertext,
            l,
          );
          break;
        }
        case "pkmsg":
        case "msg": {
          _ = await o("WACryptoManagerUtils").decryptMsg(
            c.encType,
            t.from,
            c.ciphertext,
            l,
          );
          break;
        }
        case "msmsg":
          throw (
            P.ERROR(
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
            P.ERROR(
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
      if (_.success === !1) return M(e, t, u, a, i, _, d, l, s);
      if (_.value == null)
        return M(
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
        N(
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
    }
    l.handleGroupMsg = F;
  },
  98,
);
