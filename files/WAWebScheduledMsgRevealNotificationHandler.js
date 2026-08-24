__d(
  "WAWebScheduledMsgRevealNotificationHandler",
  [
    "WABase64",
    "WABase64UrlSafe",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebExtractEphemeralFieldsFromScheduledMsg",
    "WAWebExtractLinkPreviewFieldsFromScheduledMsg",
    "WAWebExtractMediaFieldsFromScheduledMsg",
    "WAWebExtractMentionFieldsFromScheduledMsg",
    "WAWebExtractQuoteFieldsFromScheduledMsg",
    "WAWebHandleMsgValidate",
    "WAWebHandleSingleMsg",
    "WAWebMessageQueue",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebOfflineHandler",
    "WAWebScheduledMessagesGatingUtils",
    "WAWebScheduledMsgDecryptInnerProto",
    "WAWebScheduledMsgExtractText",
    "WAWebScheduledMsgOrphanRevealKeyStore",
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
          var r = o(
              "WAWebScheduledMessagesGatingUtils",
            ).isScheduledMessagesReceiverEnabled(),
            a = o(
              "WAWebScheduledMessagesGatingUtils",
            ).isScheduledMessagesSenderEnabled();
          if (!r && !a) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] skipped: both receiver and sender gating disabled",
                ])),
            );
            return;
          }
          var i = t.xwa2_notify_scheduled_message_reveal;
          if (i == null) {
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
          var l = i.rk,
            m = i.rkid,
            p = i.st;
          if (m == null || l == null) {
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
          var _ = F(e);
          if (_ == null) {
            yield w({
              mexScheduledTimestampS: p,
              receiverEnabled: r,
              rk: l,
              rkid: m,
            });
            return;
          }
          var f =
            !!e.offline &&
            !o(
              "WAWebOfflineHandler",
            ).OfflineMessageHandler.isResumeFromRestartComplete();
          yield o("WAWebMessageQueue").onMessageQueue({
            chatWid: _,
            isOffline: f,
            msgCategory: null,
            action: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  return (
                    yield w({
                      mexScheduledTimestampS: p,
                      receiverEnabled: r,
                      rk: l,
                      rkid: m,
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
            n = e.receiverEnabled,
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
            s != null ? yield O(s, l, t, n) : yield W(i, l, n);
          } catch (e) {
            o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
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
    function F(t) {
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
    function O(e, t, n, r) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (e.senderJid == null) {
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] sender-originated record, skipping (Post handler owns cleanup), msgId=",
                    "",
                  ])),
                e.msgId,
              );
              return;
            }
            if (!r) {
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] sender-only device with receiver record, skipping",
                  ])),
              );
              return;
            }
            (o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] found matching record status=",
                  "",
                ])),
              e.status,
            ),
              yield Y(e, t, n));
          },
        )),
        B.apply(this, arguments)
      );
    }
    function W(e, t, n) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (!n) {
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] sender-only device, no record, skipping orphan",
                ])),
            );
            return;
          }
          (o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][reveal] no record for rkid, storing orphan",
              ])),
          ),
            yield ne(e, t));
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
    function G(e, t, n, r) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield o(
              "WAWebScheduledMsgDecryptInnerProto",
            ).decryptAndDecodeRevealPayloadWithBytes(t, n, r);
            return a == null
              ? (yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(e),
                null)
              : { innerProto: a.proto, protoBytes: a.protoBytes };
          },
        )),
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
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][mex][reveal] missing chatId in record",
                    ])),
                )
                .sendLogs("mex-scheduled-msg-reveal-missing-chat-id"),
              yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(a),
              null)
            : r == null || n == null
              ? (o("WALogger")
                  .ERROR(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
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
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] message insert failed; keeping reveal-key for retry",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("mex-scheduled-msg-reveal-insert-failed");
            return;
          }
          try {
            yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(n);
          } catch (e) {
            o("WALogger")
              .ERROR(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
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
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] record already revealed, deleting stale key",
                ])),
            ),
              yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(i));
            return;
          }
          if (H(s)) {
            (o("WALogger").LOG(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] sender-originated record (own account JID), deleting to clear scheduled list",
                ])),
            ),
              yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(i));
            return;
          }
          o("WALogger").LOG(
            E ||
              (E = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][reveal] decrypting payload",
              ])),
          );
          var c = yield j(e);
          if (c != null) {
            var d = yield G(i, c.encPayload, c.encIv, t);
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
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] decrypt ok, creating msg in chat",
                  ])),
              );
              var f;
              try {
                f = o("WAWebWidFactory").createWid(c.chatId);
              } catch (e) {
                (o("WALogger")
                  .ERROR(
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
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
              var g;
              if (f.isGroup()) {
                if (s == null) {
                  (o("WALogger")
                    .ERROR(
                      T ||
                        (T = babelHelpers.taggedTemplateLiteralLoose([
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
                      D ||
                        (D = babelHelpers.taggedTemplateLiteralLoose([
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
              var y = te(g);
              (yield Q(f, y, i),
                yield Z(y, e, p, m),
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
    function Z(e, t, n, r) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a,
              i,
              l,
              s,
              u = t.reportingTag;
            if (u != null) {
              var c =
                  (a = r.messageContextInfo) == null ? void 0 : a.messageSecret,
                d = babelHelpers.extends({}, e, {
                  plainProtobufBytes: n,
                  messageSecret: c != null ? new Uint8Array(c) : void 0,
                  reportingTokenInfo: {
                    reportingTag: u,
                    reportingToken: (i = t.reportingToken) != null ? i : void 0,
                    version: (l = t.reportingTokenVersion) != null ? l : void 0,
                    stanzaTs: (s = t.reportingStanzaTs) != null ? s : void 0,
                  },
                });
              yield o(
                "WAWebHandleMsgValidate",
              ).validateAndProcessReportingTokenInfo({
                forceDualEncryptedValidation: !0,
                renderableMsgs: [d],
              });
            }
          },
        )),
        ee.apply(this, arguments)
      );
    }
    function te(e) {
      var t = e.chatWid,
        n = e.innerProto,
        a = e.msgId,
        i = e.scheduledTimestampS,
        l = e.text,
        s = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        u = e.type === "group" ? e.senderWid : null,
        c = a.includes("_") ? r("WAWebMsgKey").fromString(a).id : a,
        d = new (r("WAWebMsgKey"))({
          fromMe: !1,
          remote: t,
          id: c,
          participant: u != null ? u : void 0,
        }),
        m = o(
          "WAWebExtractEphemeralFieldsFromScheduledMsg",
        ).extractEphemeralFieldsFromScheduledMsg(n, t),
        p = o(
          "WAWebExtractMentionFieldsFromScheduledMsg",
        ).extractMentionFieldsFromScheduledMsg(n),
        _ = o(
          "WAWebExtractQuoteFieldsFromScheduledMsg",
        ).extractQuoteFieldsFromScheduledMsg(n, d),
        f = babelHelpers.extends(
          {
            id: d,
            from: t,
            to: s,
            author: u != null ? u : void 0,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          },
          m,
          p,
          _,
          {
            t: i,
            scheduledTimestampS: i,
            ack: o("WAWebAck").ACK.SENT,
            isNewMsg: !0,
            recvFresh: !0,
            invis: !1,
          },
        ),
        g = o(
          "WAWebExtractMediaFieldsFromScheduledMsg",
        ).extractMediaFieldsFromScheduledMsg(n);
      if (g != null) return babelHelpers.extends({}, f, g);
      var h = o(
        "WAWebExtractLinkPreviewFieldsFromScheduledMsg",
      ).extractLinkPreviewFieldsFromScheduledMsg(n);
      return babelHelpers.extends(
        {},
        f,
        {
          type: o("WAWebMsgType").MSG_TYPE.CHAT,
          kind: o("WAWebMsgType").MsgKind.Chat,
          body: l,
        },
        h,
      );
    }
    function ne(e, t) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        re.apply(this, arguments)
      );
    }
    l.mexHandleScheduledMsgReveal = N;
  },
  98,
);
