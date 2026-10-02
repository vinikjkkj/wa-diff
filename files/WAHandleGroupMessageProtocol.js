__d(
  "WAHandleGroupMessageProtocol",
  [
    "invariant",
    "Promise",
    "WACryptoManagerUtils",
    "WACryptoPkcs7",
    "WAE2E.pb",
    "WAForceSecondRetryErrorTypes",
    "WAGlobals",
    "WAJids",
    "WALogger",
    "WAReceiptUtils",
    "WAResultOrError",
    "WASmaxParsingFailure",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e, u, c, d, m, p, _;
    function f(e) {
      return e.name === "GroupDualEncMedia"
        ? "ContentTypeMedia"
        : e.value.contentDualMixins.name;
    }
    function g(t) {
      switch (t) {
        case "ContentTypeText":
          return "text";
        case "ContentTypeLiveLocationSingle":
          return "live_location";
        case "ContentTypeMedia":
          return "media";
        case "ContentTypeMediaSingle":
          return "media";
        case "ContentTypePayGroup":
          return "pay";
        case "ContentTypeReaction":
          return "reaction";
        case "ContentTypeProductList":
          return "product_list";
        case "ContentTypePollCreation":
          return "poll_creation";
        case "ContentTypePollVote":
          return "poll_vote";
        case "ContentTypePollEdit":
          return "poll_edit";
        case "ContentTypePollAddOption":
          return "poll_add_option";
        case "ContentTypePollResultSnapshot":
          return "poll_result_snapshot";
        default:
          return (
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Unknown message content type: ",
                  "",
                ])),
              t,
            ),
            "text"
          );
      }
    }
    function h(e) {
      var t = e.from,
        n = e.groupEncTypes,
        r = e.participant,
        a = o("WAJids").validateDeviceJid(r);
      (a == null &&
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "parseGroupMessage: invalid participant",
              ])),
          )
          .sendLogs("parseGroupMessage-invalid-participant"),
        a != null || s(0, 90956));
      var i = o("WAJids").extractUserJid(a),
        l = {
          chat: t,
          author: i === o("WAGlobals").getMyUserJid() ? "@me" : i,
          from: a,
        };
      switch (n.name) {
        case "GroupSingleEnc": {
          var c = n.value,
            d = c.contentSingleMixins,
            m = c.groupMessageTypes;
          return babelHelpers.extends({}, l, {
            enc: y(m),
            contentType: g(d.name),
            type: "SingleEnc",
          });
        }
        case "GroupDualEnc": {
          var p =
              n.value
                .groupDualEncGroupDualEncMediaOrGroupDualEncNonMediaMediaMixinGroup,
            _ = f(p);
          return babelHelpers.extends({}, l, C(p), {
            type: "DualEnc",
            contentType: g(_),
          });
        }
        case "UnavailableGroup":
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            "unsupported-group-message-type",
          );
        default:
          throw (
            n.name,
            new (o("WASmaxParsingFailure").SmaxParsingFailure)(
              "unrecognized-group-message-type",
            )
          );
      }
    }
    function y(e) {
      switch (e.name) {
        case "GroupRetry":
          return {
            encVersion: e.value.encEncVersion.value.v,
            ciphertext: e.value.encEncTypeIndividualMixin.elementValue,
            encType: e.value.encEncTypeIndividualMixin.type,
            retryCount: e.value.encEncRetryMixin.count,
          };
        case "GroupRegular":
          return (
            e.name,
            b(e.value.encEncVersion.value, e.value.encEncSenderType.value)
          );
        default:
          return (
            e.name,
            {
              ciphertext:
                e.value.encEncTypeMessageSecretMessageMixin.elementValue,
              encVersion: e.value.encEncVersionBot.value.v,
              encType: e.value.encEncTypeMessageSecretMessageMixin.type,
            }
          );
      }
    }
    function C(e) {
      switch (e.name) {
        case "GroupDualEncNonMedia": {
          var t = e.value.enc,
            n = t[0],
            r = t[1];
          return {
            senderKeyDistributionEnc: b(
              n.encVersion.value,
              n.encSenderType.value,
            ),
            senderKeyMessageEnc: b(r.encVersion.value, r.encSenderType.value),
          };
        }
        default: {
          e.name;
          var o = e.value.enc,
            a = o[0],
            i = o[1];
          return {
            senderKeyDistributionEnc: b(
              a.encVersion.value,
              a.encSenderIndividualTypes.value,
            ),
            senderKeyMessageEnc: b(
              i.encVersion.value,
              i.encSenderIndividualTypes.value,
            ),
          };
        }
      }
    }
    function b(e, t) {
      return { encVersion: e.v, ciphertext: t.elementValue, encType: t.type };
    }
    function v(e, t) {
      switch (e.type) {
        case "DualEnc": {
          var n = e.author,
            r = e.chat,
            a = e.from,
            i = e.senderKeyDistributionEnc,
            l = e.senderKeyMessageEnc;
          return S(i, a, r, t)
            .then(function (e) {
              var n;
              if (!e.success) return e;
              if (i.encVersion !== "2")
                return (
                  o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "enc version ",
                        " is not supported.",
                      ])),
                    i.encVersion,
                  ),
                  o("WAResultOrError").makeError(
                    "unknown-sender-key-distribution-plaintext",
                  )
                );
              var s = e.value.plaintext,
                u = o("WACryptoPkcs7").unpadPkcs7(s),
                p = o("decodeProtobuf").decodeProtobuf(
                  o("WAE2E.pb").MessageSpec,
                  u,
                ),
                _ =
                  (n = p.senderKeyDistributionMessage) == null
                    ? void 0
                    : n.axolotlSenderKeyDistributionMessage;
              return _ == null
                ? (o("WALogger").ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "missing sender key in dual enc message",
                      ])),
                  ),
                  o("WAResultOrError").makeError("group-decrypt-error"))
                : o("WACryptoManagerUtils")
                    .saveSenderKeySession(r, a, new Uint8Array(_), t)
                    .then(function (e) {
                      return e.success
                        ? S(l, a, r, t)
                        : (o("WALogger").ERROR(
                            m ||
                              (m = babelHelpers.taggedTemplateLiteralLoose([
                                "Fail to save senderKeySession ",
                                "",
                              ])),
                            e.error,
                          ),
                          o("WAResultOrError").makeError(
                            "group-decrypt-error",
                          ));
                    });
            })
            .then(function (e) {
              return e.success
                ? {
                    from: a,
                    chat: r,
                    author: n,
                    encVersion: l.encVersion,
                    plaintext: e.value.plaintext,
                    type: "Decrypted",
                  }
                : {
                    from: a,
                    chat: r,
                    author: n,
                    retryCount: 0,
                    error: e.error,
                    encVersion: l.encVersion,
                    type: "Undecrypted",
                  };
            });
        }
        default: {
          e.type;
          var s = e.author,
            u = e.chat,
            p = e.enc,
            _ = e.from;
          return S(p, _, u, t).then(function (e) {
            if (!e.success) {
              var t;
              return {
                from: _,
                chat: u,
                author: s,
                retryCount: (t = p.retryCount) != null ? t : 0,
                error: e.error,
                encVersion: p.encVersion,
                type: "Undecrypted",
              };
            }
            return {
              from: _,
              chat: u,
              author: s,
              encVersion: p.encVersion,
              plaintext: e.value.plaintext,
              type: "Decrypted",
            };
          });
        }
      }
    }
    function S(e, t, r, a) {
      var i;
      return (
        e.encType === "msg" || e.encType === "pkmsg"
          ? (i = o("WACryptoManagerUtils").decryptMsg(
              e.encType,
              t,
              e.ciphertext,
              a,
            ))
          : e.encType === "skmsg"
            ? (e.encType,
              (i = o("WACryptoManagerUtils").decryptGroupMsg(
                r,
                t,
                e.ciphertext,
                a,
              )))
            : (e.encType, (i = (_ || (_ = n("Promise"))).resolve({}))),
        i.then(function (e) {
          return e.success !== !0
            ? (o("WALogger").ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "decryptGroupMessage error: ",
                    "",
                  ])),
                e.error,
              ),
              o("WAResultOrError").makeError("group-decrypt-error"))
            : e.value == null
              ? o("WAResultOrError").makeError("missing-content")
              : o("WAResultOrError").makeResult({
                  plaintext: e.value.plaintext,
                  remoteIdentity: e.value.remoteIdentity,
                });
        })
      );
    }
    var R = function (t, n) {
      var e = t.author,
        r = t.chat,
        a = t.deviceIdentity,
        i = t.error,
        l = t.from,
        s = t.retryCount,
        u = t.serverTs,
        c = t.stanzaId,
        d = e === "@me",
        m = s;
      return (
        o("WAForceSecondRetryErrorTypes").FORCE_SECOND_RETRY_ON.has(i) &&
          (m = Math.max(2, s)),
        o("WAReceiptUtils").makeRetryReceipt(
          {
            category: null,
            externalId: c,
            from: { groupJid: r, type: "group" },
            participant: l,
            recipient: d ? o("WAJids").extractUserJid(l) : null,
            retryCount: m,
            ts: u,
            deviceIdentity: a,
          },
          n,
        )
      );
    };
    ((l.parseGroupMessage = h), (l.makeGrouplMessageRetryReceipt = R));
  },
  98,
);
