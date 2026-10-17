__d(
  "WAWebScheduledMsgRevealNotificationHandler",
  [
    "WABase64",
    "WABase64UrlSafe",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAttachScheduledAssociationChildren",
    "WAWebExtractAssociationFieldsFromScheduledMsg",
    "WAWebExtractEphemeralFieldsFromScheduledMsg",
    "WAWebExtractLinkPreviewFieldsFromScheduledMsg",
    "WAWebExtractMediaFieldsFromScheduledMsg",
    "WAWebExtractMentionFieldsFromScheduledMsg",
    "WAWebExtractPairedMediaTypeFromScheduledMsg",
    "WAWebExtractQuoteFieldsFromScheduledMsg",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleMsgValidate",
    "WAWebHandleSingleMsg",
    "WAWebLidMigrationUtils",
    "WAWebLimitSharingAcp2HideReceivedMsgs",
    "WAWebMessageQueue",
    "WAWebMessageQueueTimeout",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebOfflineHandler",
    "WAWebScheduledMessagesGatingUtils",
    "WAWebScheduledMsgDecryptInnerProto",
    "WAWebScheduledMsgExtractText",
    "WAWebScheduledMsgOrphanRevealKeyStore",
    "WAWebScheduledMsgRevealChatUtils",
    "WAWebScheduledMsgRevealKeyStore",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
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
      T,
      D,
      x,
      $,
      P;
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            !o(
              "WAWebScheduledMessagesGatingUtils",
            ).isScheduledMessagesReceiverEnabled()
          ) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] skipped: receiver gating disabled",
                ])),
            );
            return;
          }
          var r = t.xwa2_notify_scheduled_message_reveal;
          if (r == null) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] missing reveal data",
                  ])),
              )
              .sendLogs("mex-scheduled-msg-reveal-missing-data");
            return;
          }
          var a = r.chat_jid,
            i = r.rk,
            l = r.rkid,
            m = r.st;
          if (l == null || i == null) {
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] missing rkid or rk",
                  ])),
              )
              .sendLogs("mex-scheduled-msg-reveal-missing-fields");
            return;
          }
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][reveal] received rkid",
              ])),
          );
          var p = B(e);
          if (p == null) {
            yield w({
              mexScheduledTimestampS: m,
              notificationChatJid: a,
              rk: i,
              rkid: l,
            });
            return;
          }
          var _ =
            !!e.offline &&
            !o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.isResumeFromRestartComplete();
          yield o("WAWebMessageQueue")
            .onMessageQueue({
              chatWid: p,
              isOffline: _,
              msgCategory: null,
              action: (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    return (
                      yield w({
                        mexScheduledTimestampS: m,
                        notificationChatJid: a,
                        rk: i,
                        rkid: l,
                      }),
                      null
                    );
                  },
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            })
            .catch(function (e) {
              return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
                e,
                "scheduled_msg_reveal",
              );
            });
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
          var t = e.mexScheduledTimestampS,
            n = e.notificationChatJid,
            a = e.rk,
            i = e.rkid;
          try {
            var l = U(a);
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] looking up record by revealKeyId",
                ])),
            );
            var s = yield o(
              "WAWebScheduledMsgRevealKeyStore",
            ).getRevealKeyByRevealKeyId(i);
            if (s != null && !F(n, s.chatId)) {
              o("WALogger")
                .WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][mex][reveal] reveal issued for another chat, ignoring",
                    ])),
                )
                .sendLogs("mex-scheduled-msg-reveal-chat-mismatch");
              return;
            }
            s != null
              ? yield W({ mexScheduledTimestampS: t, record: s, revealKey: l })
              : yield re(i, l);
          } catch (e) {
            o("WALogger")
              .ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] handler failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("mex-scheduled-msg-reveal-handler-failed");
          }
        })),
        A.apply(this, arguments)
      );
    }
    function F(e, t) {
      var n = O(t);
      if (n == null) return !0;
      var r = O(e);
      if (r == null) return !1;
      if (!n.isUser() || !r.isUser()) return r.equals(n);
      var a = o("WAWebLidMigrationUtils").toUserLid(n);
      return a != null && a.equals(o("WAWebLidMigrationUtils").toUserLid(r));
    }
    function O(e) {
      if (e == null || e === "") return null;
      try {
        return o("WAWebWidFactory").createWid(e);
      } catch (e) {
        return null;
      }
    }
    function B(t) {
      try {
        return o("WAWebWidFactory").createWid(t.from.toString());
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] could not resolve chat wid from notification",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("mex-scheduled-msg-reveal-resolve-chat-failed"),
          null
        );
      }
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.mexScheduledTimestampS,
            n = e.record,
            r = e.revealKey;
          if (n.senderJid == null) {
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] sender-originated record, skipping (Post handler owns cleanup), msgId=",
                  "",
                ])),
              n.msgId,
            );
            return;
          }
          (o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][reveal] found matching record status=",
                "",
              ])),
            n.status,
          ),
            yield Y(n, r, t));
        })),
        q.apply(this, arguments)
      );
    }
    function U(e) {
      return new Uint8Array(
        o("WABase64").decodeB64(
          o("WABase64UrlSafe").urlSafeBase64ToStandard(e),
        ),
      );
    }
    function V(e, t) {
      return e != null && e > 0
        ? o("WATimeUtils").castToUnixTime(e)
        : t > 0
          ? t
          : o("WATimeUtils").unixTime();
    }
    function H(e) {
      if (e == null) return !1;
      try {
        return o("WAWebUserPrefsMeUser").isMeAccount(
          o("WAWebWidFactory").createWid(e),
        );
      } catch (e) {
        return !1;
      }
    }
    function G(e) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.encIv,
            n = e.encPayload,
            r = e.msgId,
            a = e.revealKey,
            i = yield o(
              "WAWebScheduledMsgDecryptInnerProto",
            ).decryptAndDecodeRevealPayloadWithBytes(n, t, a);
          return i == null
            ? (yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(r),
              null)
            : { innerProto: i.proto, protoBytes: i.protoBytes };
        })),
        z.apply(this, arguments)
      );
    }
    function j(e) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatId,
            n = e.encIv,
            r = e.encPayload,
            a = e.msgId;
          return t == null || t === ""
            ? (o("WALogger")
                .ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][mex][reveal] missing chatId in record",
                    ])),
                )
                .sendLogs("mex-scheduled-msg-reveal-missing-chat-id"),
              yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(a),
              null)
            : r == null || n == null
              ? (o("WALogger")
                  .ERROR(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "[scheduled_msg][mex][reveal] missing encPayload or encIv",
                      ])),
                  )
                  .sendLogs("mex-scheduled-msg-reveal-missing-enc-data"),
                yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(a),
                null)
              : { chatId: t, encPayload: r, encIv: n };
        })),
        K.apply(this, arguments)
      );
    }
    function Q(e, t, n) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            yield o("WAWebHandleSingleMsg").handleSingleMsgImpl({
              chatId: e,
              newMsg: t,
              handleSingleMsgOrigin: "scheduledMsgReveal",
            });
          } catch (e) {
            o("WALogger")
              .ERROR(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] message insert failed; keeping reveal-key for retry",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("mex-scheduled-msg-reveal-insert-failed");
            return;
          }
          yield o(
            "WAWebAttachScheduledAssociationChildren",
          ).attachScheduledAssociationChildren(t.id, t.parentMsgKey);
          try {
            yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(n);
          } catch (e) {
            o("WALogger")
              .ERROR(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] reveal-key delete failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("mex-scheduled-msg-reveal-delete-failed");
          }
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e, t, n) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a,
            i = e.msgId,
            l = e.scheduledTimestampS,
            s = e.senderJid,
            u = V(n, l);
          if (e.status === "REVEALED") {
            (o("WALogger").LOG(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] record already revealed, deleting stale key",
                ])),
            ),
              yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(i));
            return;
          }
          if (H(s)) {
            (o("WALogger").LOG(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] sender-originated record (own account JID), deleting to clear scheduled list",
                ])),
            ),
              yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(i));
            return;
          }
          o("WALogger").LOG(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][reveal] decrypting payload",
              ])),
          );
          var c = yield j(e);
          if (c != null) {
            var d = yield G({
              encIv: c.encIv,
              encPayload: c.encPayload,
              msgId: i,
              revealKey: t,
            });
            if (d != null) {
              var m = d.innerProto,
                p = d.protoBytes,
                _ =
                  (a = o(
                    "WAWebScheduledMsgExtractText",
                  ).extractScheduledMsgText(m)) != null
                    ? a
                    : "";
              o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] decrypt ok, creating msg in chat",
                  ])),
              );
              var f;
              try {
                f = o("WAWebWidFactory").createWid(c.chatId);
              } catch (e) {
                (o("WALogger")
                  .ERROR(
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
                        "[scheduled_msg][mex][reveal] invalid chatId for reveal record, deleting",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("mex-scheduled-msg-reveal-invalid-chat-id"),
                  yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(
                    i,
                  ));
                return;
              }
              try {
                f = yield o(
                  "WAWebScheduledMsgRevealChatUtils",
                ).resolveScheduledRevealChat(f);
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "[scheduled_msg][mex][reveal] ensure chat failed; keeping reveal-key for retry",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("mex-scheduled-msg-reveal-ensure-chat-failed");
                return;
              }
              var g;
              if (f.isGroup()) {
                if (s == null) {
                  (o("WALogger")
                    .ERROR(
                      I ||
                        (I = babelHelpers.taggedTemplateLiteralLoose([
                          "[scheduled_msg][mex][reveal] missing senderJid for group reveal record, deleting",
                        ])),
                    )
                    .sendLogs("mex-scheduled-msg-reveal-missing-sender-jid"),
                    yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(
                      i,
                    ));
                  return;
                }
                var h;
                try {
                  h = o("WAWebWidFactory").asUserWidOrThrow(
                    o("WAWebWidFactory").createWid(s),
                  );
                } catch (e) {
                  (o("WALogger")
                    .ERROR(
                      T ||
                        (T = babelHelpers.taggedTemplateLiteralLoose([
                          "[scheduled_msg][mex][reveal] invalid senderJid for group reveal record, deleting",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("mex-scheduled-msg-reveal-invalid-sender-jid"),
                    yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(
                      i,
                    ));
                  return;
                }
                g = {
                  type: "group",
                  chatWid: f,
                  senderWid: h,
                  msgId: i,
                  text: _,
                  scheduledTimestampS: u,
                  innerProto: m,
                };
              } else
                g = {
                  type: "individual",
                  chatWid: f,
                  msgId: i,
                  text: _,
                  scheduledTimestampS: u,
                  innerProto: m,
                };
              var y = babelHelpers.extends({}, ne(g), {
                  messageSecret: Z(m, e.outerMessageSecret),
                }),
                C = yield o(
                  "WAWebLimitSharingAcp2HideReceivedMsgs",
                ).hideMsgsReceivedInAcp2RestrictedChat({
                  messageType: f.isGroup()
                    ? o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP
                    : o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT,
                  msgs: [y],
                  proto: m,
                });
              if (C.length === 0) {
                (o("WALogger").LOG(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][mex][reveal] hidden in ACP2-restricted chat, deleting key",
                    ])),
                ),
                  yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(
                    i,
                  ));
                return;
              }
              (yield Q(f, y, i),
                yield ee(y, e, p),
                o("WALogger").LOG(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][mex][reveal] completed reveal for msg",
                    ])),
                ));
            }
          }
        })),
        J.apply(this, arguments)
      );
    }
    function Z(e, t) {
      var n,
        r = (n = e.messageContextInfo) == null ? void 0 : n.messageSecret;
      return r != null ? new Uint8Array(r) : t != null ? t : void 0;
    }
    function ee(e, t, n) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r,
              a,
              i,
              l = t.reportingTag;
            if (l != null) {
              var s = babelHelpers.extends({}, e, {
                plainProtobufBytes: n,
                reportingTokenInfo: {
                  reportingTag: l,
                  reportingToken: (r = t.reportingToken) != null ? r : void 0,
                  version: (a = t.reportingTokenVersion) != null ? a : void 0,
                  stanzaTs: (i = t.reportingStanzaTs) != null ? i : void 0,
                },
              });
              yield o(
                "WAWebHandleMsgValidate",
              ).validateAndProcessReportingTokenInfo({
                forceDualEncryptedValidation: !0,
                renderableMsgs: [s],
              });
            }
          },
        )),
        te.apply(this, arguments)
      );
    }
    function ne(e) {
      var t,
        n = e.chatWid,
        a = e.innerProto,
        i = e.msgId,
        l = e.scheduledTimestampS,
        s = e.text,
        u = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        c = e.type === "group" ? e.senderWid : null,
        d = i.includes("_") ? r("WAWebMsgKey").fromString(i).id : i,
        m = new (r("WAWebMsgKey"))({
          fromMe: !1,
          remote: n,
          id: d,
          participant: c != null ? c : void 0,
        }),
        p = o(
          "WAWebExtractEphemeralFieldsFromScheduledMsg",
        ).extractEphemeralFieldsFromScheduledMsg(a, n),
        _ = o(
          "WAWebExtractMentionFieldsFromScheduledMsg",
        ).extractMentionFieldsFromScheduledMsg(a),
        f = o(
          "WAWebExtractQuoteFieldsFromScheduledMsg",
        ).extractQuoteFieldsFromScheduledMsg(a, m),
        g = o(
          "WAWebExtractPairedMediaTypeFromScheduledMsg",
        ).extractPairedMediaTypeFromScheduledMsg(a),
        h = o(
          "WAWebExtractAssociationFieldsFromScheduledMsg",
        ).extractAssociationFieldsFromScheduledMsg(a, {
          id: m,
          from: n,
          to: u,
          author: c != null ? c : void 0,
          type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        }),
        y = babelHelpers.extends(
          {
            id: m,
            from: n,
            to: u,
            author: c != null ? c : void 0,
            viewMode:
              (t = h == null ? void 0 : h.viewMode) != null
                ? t
                : o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          },
          p,
          _,
          f,
          g,
          {
            t: l,
            scheduledTimestampS: l,
            ack: o("WAWebAck").ACK.SENT,
            isNewMsg: !0,
            recvFresh: !0,
            invis: !1,
          },
        ),
        C = o(
          "WAWebExtractMediaFieldsFromScheduledMsg",
        ).extractMediaFieldsFromScheduledMsg(a);
      if (C != null)
        return h != null
          ? C.kind === o("WAWebMsgType").MsgKind.Image
            ? babelHelpers.extends({}, y, C, h, {
                kind: o("WAWebMsgType").MsgKind.AssociatedImage,
              })
            : babelHelpers.extends({}, y, C, h, {
                kind: o("WAWebMsgType").MsgKind.AssociatedVideo,
              })
          : babelHelpers.extends({}, y, C);
      if (h != null)
        return babelHelpers.extends({}, y, h, {
          type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
          kind: o("WAWebMsgType").MsgKind.AssociatedUnknown,
        });
      var b = o(
        "WAWebExtractLinkPreviewFieldsFromScheduledMsg",
      ).extractLinkPreviewFieldsFromScheduledMsg(a);
      return babelHelpers.extends(
        {},
        y,
        {
          type: o("WAWebMsgType").MSG_TYPE.CHAT,
          kind: o("WAWebMsgType").MsgKind.Chat,
          body: s,
        },
        b,
      );
    }
    function re(e, t) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (o("WALogger").LOG(
            $ ||
              ($ = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][reveal] no msg for rkid, storing orphan",
              ])),
          ),
            yield o(
              "WAWebScheduledMsgOrphanRevealKeyStore",
            ).storeOrphanRevealKey({
              revealKeyId: e,
              revealKey: t,
              createdAt: o("WATimeUtils").unixTime(),
            }),
            o("WALogger").LOG(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] orphan key stored",
                ])),
            ));
        })),
        oe.apply(this, arguments)
      );
    }
    l.mexHandleScheduledMsgReveal = N;
  },
  98,
);
