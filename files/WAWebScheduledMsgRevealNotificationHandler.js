__d(
  "WAWebScheduledMsgRevealNotificationHandler",
  [
    "WABase64",
    "WABase64UrlSafe",
    "WACryptoPkcs7",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebHandleSingleMsg",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebScheduledMessagesGatingUtils",
    "WAWebScheduledMsgCrypto",
    "WAWebScheduledMsgRevealKeyStore",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R;
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (
            !o(
              "WAWebScheduledMessagesGatingUtils",
            ).isScheduledMessagesReceiverEnabled()
          ) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] skipped: receiver gating disabled",
                ])),
            );
            return;
          }
          var a = n.xwa2_notify_scheduled_message_reveal;
          if (a == null) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] missing reveal data in notification",
                  ])),
              )
              .sendLogs("mex-scheduled-msg-reveal-missing-data");
            return;
          }
          var i = a.rk,
            l = a.rkid;
          if (l == null || i == null) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] missing rkid or rk in notification",
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
            var f = k(i);
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] looking up record by revealKeyId",
                ])),
            );
            var g = yield o(
              "WAWebScheduledMsgRevealKeyStore",
            ).getRevealKeyByRevealKeyId(l);
            g != null
              ? (o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][mex][reveal] found matching record status=",
                      "",
                    ])),
                  g.status,
                ),
                yield T(g, f))
              : (o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][mex][reveal] no matching record found for rkid, storing as orphan",
                    ])),
                ),
                yield $(l, f));
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
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return new Uint8Array(
        o("WABase64").decodeB64(
          o("WABase64UrlSafe").urlSafeBase64ToStandard(e),
        ),
      );
    }
    function I(e) {
      return e instanceof ArrayBuffer
        ? e
        : e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength);
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.chatId,
            a = e.encIv,
            i = e.encPayload,
            l = e.msgId;
          if (
            (o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] decrypting payload from RevealKeyStore",
                ])),
            ),
            n == null || n === "")
          ) {
            (o("WALogger")
              .ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] missing chatId in RevealKeyStore record",
                  ])),
              )
              .sendLogs("mex-scheduled-msg-reveal-missing-chat-id"),
              yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(l));
            return;
          }
          if (i == null || a == null) {
            (o("WALogger")
              .ERROR(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] missing encPayload or encIv in RevealKeyStore record",
                  ])),
              )
              .sendLogs("mex-scheduled-msg-reveal-missing-enc-data"),
              yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(l));
            return;
          }
          var s = I(i),
            u = I(a),
            c;
          try {
            c = yield o("WAWebScheduledMsgCrypto").decryptWithRevealKey(
              s,
              u,
              t,
            );
          } catch (e) {
            (o("WALogger")
              .ERROR(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] decryption failed, deleting reveal-pending record",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("mex-scheduled-msg-reveal-decrypt-failed"),
              yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(l));
            return;
          }
          var d;
          try {
            var m = o("WACryptoPkcs7").unpadPkcs7(new Uint8Array(c));
            d = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsE2E.pb").MessageSpec,
              m,
            );
          } catch (e) {
            (o("WALogger")
              .ERROR(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] post-decryption processing failed, deleting reveal-pending record",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("mex-scheduled-msg-reveal-post-decrypt-failed"),
              yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(l));
            return;
          }
          var p = x(d);
          o("WALogger").LOG(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][reveal] decryption succeeded, creating new message in chat",
              ])),
          );
          var _ = o("WAWebWidFactory").createWid(n),
            S = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            R = yield r("WAWebMsgKey").newId(),
            L = new (r("WAWebMsgKey"))({ fromMe: !1, remote: _, id: R }),
            E = {
              id: L,
              from: _,
              to: S,
              type: o("WAWebMsgType").MSG_TYPE.CHAT,
              kind: o("WAWebMsgType").MsgKind.Chat,
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              body: p,
              t: o("WATimeUtils").unixTime(),
              ack: o("WAWebAck").ACK.SENT,
              isNewMsg: !0,
              recvFresh: !0,
              invis: !1,
            };
          (yield o("WAWebHandleSingleMsg").handleSingleMsgImpl({
            chatId: _,
            newMsg: E,
            handleSingleMsgOrigin: "scheduledMsgReveal",
          }),
            yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(l),
            o("WALogger").LOG(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] completed reveal for msg",
                ])),
            ));
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return e.conversation != null
        ? e.conversation
        : e.extendedTextMessage != null && e.extendedTextMessage.text != null
          ? e.extendedTextMessage.text
          : "";
    }
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WALogger").LOG(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][reveal] no matching message found for rkid storing as orphan",
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
          }),
            o("WALogger").LOG(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] orphan key stored",
                ])),
            ));
        })),
        P.apply(this, arguments)
      );
    }
    l.mexHandleScheduledMsgReveal = L;
  },
  98,
);
