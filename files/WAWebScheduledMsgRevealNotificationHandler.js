__d(
  "WAWebScheduledMsgRevealNotificationHandler",
  [
    "WABase64",
    "WABase64UrlSafe",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebHandleSingleMsg",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebScheduledMessagesGatingUtils",
    "WAWebScheduledMsgDecryptInnerProto",
    "WAWebScheduledMsgExtractText",
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
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = o(
              "WAWebScheduledMessagesGatingUtils",
            ).isScheduledMessagesReceiverEnabled(),
            i = o(
              "WAWebScheduledMessagesGatingUtils",
            ).isScheduledMessagesSenderEnabled();
          if (!a && !i) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] skipped: both receiver and sender gating disabled",
                ])),
            );
            return;
          }
          var l = n.xwa2_notify_scheduled_message_reveal;
          if (l == null) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] missing reveal data",
                  ])),
              )
              .sendLogs("mex-scheduled-msg-reveal-missing-data");
            return;
          }
          var p = l.rk,
            _ = l.rkid;
          if (_ == null || p == null) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] missing rkid or rk",
                  ])),
              )
              .sendLogs("mex-scheduled-msg-reveal-missing-fields");
            return;
          }
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][reveal] received rkid",
              ])),
          );
          try {
            var f = B(p);
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] looking up record by revealKeyId",
                ])),
            );
            var g = yield o(
              "WAWebScheduledMsgRevealKeyStore",
            ).getRevealKeyByRevealKeyId(_);
            g != null ? yield w(g, f, a) : yield F(_, f, a);
          } catch (e) {
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] handler failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("mex-scheduled-msg-reveal-handler-failed");
          }
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t, n) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (e.senderJid == null) {
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] sender-originated record, deleting to clear from scheduled list, msgId=",
                  "",
                ])),
              e.msgId,
            );
            try {
              yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(
                e.msgId,
              );
            } catch (e) {
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][mex][reveal] failed to delete sender-originated reveal-key",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("mex-scheduled-msg-reveal-delete-sender-failed");
            }
            return;
          }
          if (!n) {
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
            yield j(e, t));
        })),
        A.apply(this, arguments)
      );
    }
    function F(e, t, n) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
            yield X(e, t));
        })),
        O.apply(this, arguments)
      );
    }
    function B(e) {
      return new Uint8Array(
        o("WABase64").decodeB64(
          o("WABase64UrlSafe").urlSafeBase64ToStandard(e),
        ),
      );
    }
    function W(e) {
      if (e == null) return !1;
      try {
        return o("WAWebUserPrefsMeUser").isMeAccount(
          o("WAWebWidFactory").createWid(e),
        );
      } catch (e) {
        return !1;
      }
    }
    function q(e, t, n, r) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield o(
              "WAWebScheduledMsgDecryptInnerProto",
            ).decryptAndDecodeRevealPayload(t, n, r);
            return (
              a == null &&
                (yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(e)),
              a
            );
          },
        )),
        U.apply(this, arguments)
      );
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        H.apply(this, arguments)
      );
    }
    function G(e, t, n) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        z.apply(this, arguments)
      );
    }
    function j(e, t) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = e.msgId,
            i = e.senderJid;
          if (e.status === "REVEALED") {
            (o("WALogger").LOG(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] record already revealed, deleting stale key",
                ])),
            ),
              yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(a));
            return;
          }
          if (W(i)) {
            (o("WALogger").LOG(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] sender-originated record (own account JID), deleting to clear scheduled list",
                ])),
            ),
              yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(a));
            return;
          }
          o("WALogger").LOG(
            E ||
              (E = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][reveal] decrypting payload",
              ])),
          );
          var l = yield V(e);
          if (l != null) {
            var s = yield q(a, l.encPayload, l.encIv, t);
            if (s != null) {
              var u =
                (n = o("WAWebScheduledMsgExtractText").extractScheduledMsgText(
                  s,
                )) != null
                  ? n
                  : "";
              o("WALogger").LOG(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] decrypt ok, creating msg in chat",
                  ])),
              );
              var c;
              try {
                c = o("WAWebWidFactory").createWid(l.chatId);
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
                    a,
                  ));
                return;
              }
              var d;
              if (c.isGroup()) {
                if (i == null) {
                  (o("WALogger")
                    .ERROR(
                      T ||
                        (T = babelHelpers.taggedTemplateLiteralLoose([
                          "[scheduled_msg][mex][reveal] missing senderJid for group reveal record, deleting",
                        ])),
                    )
                    .sendLogs("mex-scheduled-msg-reveal-missing-sender-jid"),
                    yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(
                      a,
                    ));
                  return;
                }
                var m;
                try {
                  m = o("WAWebWidFactory").createWid(i);
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
                      a,
                    ));
                  return;
                }
                d = {
                  type: "group",
                  chatWid: c,
                  senderWid: m,
                  msgId: a,
                  text: u,
                };
              } else d = { type: "individual", chatWid: c, msgId: a, text: u };
              var p = Q(d);
              (yield G(c, p, a),
                o("WALogger").LOG(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][mex][reveal] completed reveal for msg",
                    ])),
                ));
            }
          }
        })),
        K.apply(this, arguments)
      );
    }
    function Q(e) {
      var t = e.chatWid,
        n = e.msgId,
        a = e.text,
        i = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        l = e.type === "group" ? e.senderWid : null,
        s = new (r("WAWebMsgKey"))({
          fromMe: !1,
          remote: t,
          id: n,
          participant: l != null ? l : void 0,
        });
      return {
        id: s,
        from: t,
        to: i,
        author: l != null ? l : void 0,
        type: o("WAWebMsgType").MSG_TYPE.CHAT,
        kind: o("WAWebMsgType").MsgKind.Chat,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        body: a,
        t: o("WATimeUtils").unixTime(),
        ack: o("WAWebAck").ACK.SENT,
        isNewMsg: !0,
        recvFresh: !0,
        invis: !1,
      };
    }
    function X(e, t) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WALogger").LOG(
            $ ||
              ($ = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][reveal] no msg for rkid, storing orphan",
              ])),
          );
          var n = "orphan_" + e;
          (yield o("WAWebScheduledMsgRevealKeyStore").storeRevealKey({
            chatId: null,
            encIv: new Uint8Array(0),
            encPayload: new Uint8Array(0),
            isOrphan: 1,
            msgId: n,
            revealKey: t,
            revealKeyId: e,
            scheduledTimestampS: o("WATimeUtils").castToUnixTime(0),
            status: "PENDING",
            createdAt: o("WATimeUtils").unixTime(),
            senderJid: null,
          }),
            o("WALogger").LOG(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] orphan key stored",
                ])),
            ));
        })),
        Y.apply(this, arguments)
      );
    }
    l.mexHandleScheduledMsgReveal = N;
  },
  98,
);
