__d(
  "WAWebConditionalRevealPreProcessor",
  [
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebContactSystemMsg",
    "WAWebHandleSingleMsg",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebScheduledMessagesGatingUtils",
    "WAWebScheduledMsgCrypto",
    "WAWebScheduledMsgOrphanRevealKeyStore",
    "WAWebScheduledMsgOutgoingMsgKey",
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
      var t = e.bareMsgId,
        n = e.chatId,
        r = e.senderJid,
        a = o("WAWebWidFactory").createWid(n);
      return r != null
        ? o("WAWebScheduledMsgOutgoingMsgKey")
            .buildScheduledMsgIncomingMsgKey(t, a, r)
            .toString()
        : o("WAWebScheduledMsgOutgoingMsgKey")
            .buildScheduledMsgOutgoingMsgKey(
              t,
              a,
              o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            )
            .toString();
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          var u = D({ bareMsgId: i, chatId: t, senderJid: null });
          try {
            var _ = yield o("WAWebScheduledMsgStore").storeScheduledMessage({
              msgId: u,
              chatId: t,
              revealKeyId: l,
              revealKey: s.revealKey,
              scheduledTimestampS: o("WATimeUtils").castToUnixTime(
                s.scheduledTimestampS,
              ),
              encPayload: new Uint8Array(a),
              encIv: new Uint8Array(n),
            });
            _
              ? (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg] stored phone-scheduled message in scheduled list",
                    ])),
                ),
                yield P(t))
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
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = o("WAWebWidFactory").createWid(e),
              n = o("WAWebContactSystemMsg").genNotificationMsg(t, {
                type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION,
                kind: o("WAWebMsgType").MsgKind.Notification,
                subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
                  .ScheduledMessageCreated,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              });
            (yield o("WAWebHandleSingleMsg").handleSingleMsgImpl({
              chatId: t,
              newMsg: n,
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
        N.apply(this, arguments)
      );
    }
    function M(e, t, n) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatId,
            n = e.encIv,
            a = e.encPayload,
            i = e.msgId,
            l = e.outerMessageSecret,
            s = e.reportingTokenInfo,
            u = e.revealKeyId,
            c = e.senderJid,
            d = e.stanzaScheduledMsgMeta,
            m = D({ bareMsgId: i, chatId: t, senderJid: c });
          try {
            return (
              yield o("WAWebScheduledMsgRevealKeyStore").storeRevealKey({
                msgId: m,
                chatId: t,
                revealKeyId: u,
                revealKey: new Uint8Array(0),
                encPayload: new Uint8Array(a),
                encIv: new Uint8Array(n),
                scheduledTimestampS:
                  d != null
                    ? o("WATimeUtils").castToUnixTime(d.scheduledTimestampS)
                    : o("WATimeUtils").castToUnixTime(0),
                status: "PENDING",
                createdAt: o("WATimeUtils").unixTime(),
                senderJid: c != null ? c : null,
                reportingTag: s == null ? void 0 : s.reportingTag,
                reportingToken: s == null ? void 0 : s.reportingToken,
                reportingTokenVersion: s == null ? void 0 : s.version,
                reportingStanzaId:
                  (s == null ? void 0 : s.reportingTag) != null ? i : null,
                reportingStanzaTs:
                  (s == null ? void 0 : s.stanzaTs) != null
                    ? o("WATimeUtils").castToUnixTime(s.stanzaTs)
                    : null,
                outerMessageSecret: l != null ? new Uint8Array(l) : null,
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
        F.apply(this, arguments)
      );
    }
    function O(e, t, n, r, o, a, i) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i, l) {
            if (!q()) return T;
            o("WALogger").LOG(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg] preProcess: receiver gating enabled, validating conditionalRevealMessage",
                ])),
            );
            var s = o("WAWebScheduledMsgCrypto").parseConditionalRevealMessage(
              e,
            );
            if (s == null) return T;
            var u = s.encIv,
              c = s.encPayload,
              d = s.revealKeyId;
            o("WALogger").LOG(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg] ConditionalRevealMessage detected",
                ])),
            );
            var m = a != null && a.revealKeyId === d ? a : null;
            if (m != null) {
              var p = yield x({
                stanzaScheduledMsgMeta: m,
                encIv: u,
                encPayload: c,
                revealKeyId: d,
                msgId: t,
                chatId: n,
              });
              if (p != null) return p;
            }
            var _ = yield M(c, u, d);
            if (_ != null)
              return {
                decryptedProto: W(_.proto, l),
                decryptedProtoBytes: _.protoBytes,
                isRevealPending: !1,
                revealKeyId: d,
                viewMode: null,
              };
            o("WALogger").LOG(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg] storing as reveal-pending",
                ])),
            );
            var f = yield A({
              chatId: n,
              encIv: u,
              encPayload: c,
              msgId: t,
              outerMessageSecret: l,
              reportingTokenInfo: i,
              revealKeyId: d,
              senderJid: r,
              stanzaScheduledMsgMeta: m,
            });
            return f
              ? {
                  decryptedProto: null,
                  decryptedProtoBytes: null,
                  isRevealPending: !0,
                  revealKeyId: d,
                  viewMode:
                    o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE,
                }
              : T;
          },
        )),
        B.apply(this, arguments)
      );
    }
    function W(e, t) {
      var n;
      return t == null ||
        ((n = e.messageContextInfo) == null ? void 0 : n.messageSecret) != null
        ? e
        : babelHelpers.extends({}, e, {
            messageContextInfo: babelHelpers.extends(
              { threadId: [] },
              e.messageContextInfo,
              { messageSecret: t },
            ),
          });
    }
    function q() {
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
    function U(e) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.conditionalRevealMessage,
            n = e.msgId,
            a = e.outerMessageContextInfo,
            i = e.rawChatJid,
            l = e.reportingTokenInfo,
            s = e.senderJid,
            u = e.stanzaScheduledMsgMeta;
          try {
            var c = o("WAJids").validateChatJid(i);
            if (c != null) {
              var d = yield O(
                  t,
                  n,
                  c,
                  s,
                  u,
                  l,
                  a == null ? void 0 : a.messageSecret,
                ),
                m = d.isRevealPending === !0;
              return {
                proto: d.decryptedProto,
                protoBytes: d.decryptedProtoBytes,
                isRevealPending: m,
                scheduledMsgViewMode: m ? d.viewMode : null,
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
        })),
        V.apply(this, arguments)
      );
    }
    function H(e, t) {
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
    ((l.preProcessConditionalRevealMessage = O),
      (l.maybePreProcessConditionalRevealForReceive = U),
      (l.applyScheduledMsgViewMode = H));
  },
  98,
);
