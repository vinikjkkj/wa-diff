__d(
  "WAWebConditionalRevealPreProcessor",
  [
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebHandleSingleMsg",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebScheduledMessagesGatingUtils",
    "WAWebScheduledMsgCrypto",
    "WAWebScheduledMsgOrphanRevealKeyStore",
    "WAWebScheduledMsgRevealKeyStore",
    "WAWebScheduledMsgStore",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
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
      T = {
        decryptedProto: null,
        decryptedProtoBytes: null,
        isRevealPending: !1,
        revealKeyId: null,
        viewMode: null,
      };
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatId,
            n = e.encIv,
            a = e.encPayload,
            i = e.msgId,
            l = e.revealKeyId,
            s = e.stanzaScheduledMsgMeta;
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg] inline reveal key present in stanza meta, persisting encrypted payload",
              ])),
          );
          try {
            var u = yield o("WAWebScheduledMsgStore").storeScheduledMessage({
              msgId: i,
              chatId: t,
              revealKeyId: l,
              revealKey: s.revealKey,
              scheduledTimestampS: o("WATimeUtils").castToUnixTime(
                s.scheduledTimestampS,
              ),
              encPayload: new Uint8Array(a),
              encIv: new Uint8Array(n),
            });
            u
              ? (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg] stored phone-scheduled message in scheduled list",
                    ])),
                ),
                yield $(t, i))
              : o("WALogger").WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg] phone-scheduled message dropped: per-chat limit reached",
                    ])),
                );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg] Failed to store phone-scheduled message in list",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("scheduled-msg-store-fail"),
              null
            );
          }
          return {
            decryptedProto: null,
            decryptedProtoBytes: null,
            isRevealPending: !0,
            revealKeyId: l,
            viewMode: o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE,
          };
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = o("WAWebWidFactory").createWid(e),
              a = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
              i = new (r("WAWebMsgKey"))({
                fromMe: !0,
                remote: n,
                id: "SYSSCHED" + t,
              }),
              l = {
                id: i,
                type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION,
                subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
                  .ScheduledMessageCreated,
                kind: o("WAWebMsgType").MsgKind.Notification,
                from: a,
                to: n,
                t: o("WATimeUtils").unixTime(),
                isNewMsg: !0,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              };
            (yield o("WAWebHandleSingleMsg").handleSingleMsgImpl({
              chatId: n,
              newMsg: l,
              handleSingleMsgOrigin: "scheduledMsgInline",
            }),
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] inserted ScheduledMessageCreated system bubble",
                  ])),
              ));
          } catch (e) {
            o("WALogger")
              .ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] Failed to insert ScheduledMessageCreated system bubble",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("scheduled-msg-sysbubble-fail");
          }
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t, n) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = null;
          try {
            ((a = yield o(
              "WAWebScheduledMsgOrphanRevealKeyStore",
            ).getOrphanRevealKeyByRevealKeyId(n)),
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] orphan key lookup completed",
                  ])),
              ));
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg] Failed to query orphan keys (DB may not be ready), will still store reveal-pending record",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              null
            );
          }
          if (a == null) return null;
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg] Found orphan RevealKey, decrypting immediately",
              ])),
          );
          try {
            var i = yield o("WAWebScheduledMsgCrypto").decryptWithRevealKey(
                e,
                t,
                a.revealKey,
              ),
              l = new Uint8Array(i),
              s = o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufsE2E.pb").MessageSpec,
                l,
              );
            return (
              yield o(
                "WAWebScheduledMsgOrphanRevealKeyStore",
              ).deleteOrphanRevealKey(a.revealKeyId),
              o("WALogger").LOG(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] orphan key decryption succeeded",
                  ])),
              ),
              { proto: s, protoBytes: l }
            );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg] Failed to decrypt with orphan RevealKey, will store as reveal-pending",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              null
            );
          }
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatId,
            n = e.encIv,
            a = e.encPayload,
            i = e.msgId,
            l = e.revealKeyId,
            s = e.senderJid,
            u = e.stanzaScheduledMsgMeta;
          try {
            return (
              yield o("WAWebScheduledMsgRevealKeyStore").storeRevealKey({
                msgId: i,
                chatId: t,
                revealKeyId: l,
                revealKey: new Uint8Array(0),
                encPayload: new Uint8Array(a),
                encIv: new Uint8Array(n),
                scheduledTimestampS:
                  u != null
                    ? o("WATimeUtils").castToUnixTime(u.scheduledTimestampS)
                    : o("WATimeUtils").castToUnixTime(0),
                status: "PENDING",
                createdAt: o("WATimeUtils").unixTime(),
                senderJid: s != null ? s : null,
              }),
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] stored reveal-pending record",
                  ])),
              ),
              !0
            );
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg] Failed to store reveal key (DB may not be ready)",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              !1
            );
          }
        })),
        A.apply(this, arguments)
      );
    }
    function F(e, t, n, r, o) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            if (!B()) return T;
            o("WALogger").LOG(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg] preProcess: receiver gating enabled, validating conditionalRevealMessage",
                ])),
            );
            var i = o("WAWebScheduledMsgCrypto").parseConditionalRevealMessage(
              e,
            );
            if (i == null) return T;
            var l = i.encIv,
              s = i.encPayload,
              u = i.revealKeyId;
            o("WALogger").LOG(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg] ConditionalRevealMessage detected",
                ])),
            );
            var c = a != null && a.revealKeyId === u ? a : null;
            if (c != null) {
              var d = yield D({
                stanzaScheduledMsgMeta: c,
                encIv: l,
                encPayload: s,
                revealKeyId: u,
                msgId: t,
                chatId: n,
              });
              if (d != null) return d;
            }
            var m = yield N(s, l, u);
            if (m != null)
              return {
                decryptedProto: m.proto,
                decryptedProtoBytes: m.protoBytes,
                isRevealPending: !1,
                revealKeyId: u,
                viewMode: null,
              };
            o("WALogger").LOG(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg] storing as reveal-pending",
                ])),
            );
            var p = yield w({
              chatId: n,
              encIv: l,
              encPayload: s,
              msgId: t,
              revealKeyId: u,
              senderJid: r,
              stanzaScheduledMsgMeta: c,
            });
            return p
              ? {
                  decryptedProto: null,
                  decryptedProtoBytes: null,
                  isRevealPending: !0,
                  revealKeyId: u,
                  viewMode:
                    o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE,
                }
              : T;
          },
        )),
        O.apply(this, arguments)
      );
    }
    function B() {
      try {
        return o(
          "WAWebScheduledMessagesGatingUtils",
        ).isScheduledMessagesReceiverEnabled()
          ? !0
          : (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg] preProcess skipped: receiver gating disabled",
                ])),
            ),
            !1);
      } catch (e) {
        return (
          e instanceof Error &&
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] preProcess: gating check threw",
                  ])),
              )
              .catching(e),
          !1
        );
      }
    }
    function W(e, t, n, r, o) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            try {
              var l = o("WAJids").validateChatJid(n);
              if (l != null) {
                var s = yield F(e, t, l, a, i),
                  u = s.isRevealPending === !0;
                return {
                  proto: s.decryptedProto,
                  protoBytes: s.decryptedProtoBytes,
                  isRevealPending: u,
                  scheduledMsgViewMode: u ? s.viewMode : null,
                };
              }
              o("WALogger").ERROR(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] ConditionalReveal pre-processing skipped: invalid chat JID",
                  ])),
              );
            } catch (e) {
              o("WALogger")
                .ERROR(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg] ConditionalReveal pre-processing failed, continuing with original proto",
                    ])),
                )
                .catching(r("getErrorSafe")(e));
            }
            return {
              proto: null,
              protoBytes: null,
              isRevealPending: !1,
              scheduledMsgViewMode: null,
            };
          },
        )),
        q.apply(this, arguments)
      );
    }
    function U(e, t) {
      if (t == null) return e;
      var n = e.map(function (e) {
        return babelHelpers.extends({}, e, { viewMode: t });
      });
      return (
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[scheduled_msg] applied viewMode=",
              " to ",
              " msgs",
            ])),
          t,
          String(n.length),
        ),
        n
      );
    }
    ((l.preProcessConditionalRevealMessage = F),
      (l.maybePreProcessConditionalRevealForReceive = W),
      (l.applyScheduledMsgViewMode = U));
  },
  98,
);
