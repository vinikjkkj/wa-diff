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
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R, L, E, k;
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
                    "[scheduled_msg][mex][reveal] missing reveal data",
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
            var f = D(i);
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
                yield $(g, f))
              : (o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][mex][reveal] no record for rkid, storing orphan",
                    ])),
                ),
                yield w(l, f));
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
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return new Uint8Array(
        o("WABase64").decodeB64(
          o("WABase64UrlSafe").urlSafeBase64ToStandard(e),
        ),
      );
    }
    function x(e) {
      if (e == null) return !1;
      try {
        return o("WAWebUserPrefsMeUser").isMeAccount(
          o("WAWebWidFactory").createWid(e),
        );
      } catch (e) {
        return !1;
      }
    }
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = e.chatId,
            i = e.encIv,
            l = e.encPayload,
            s = e.msgId,
            u = e.senderJid;
          if (e.status === "REVEALED") {
            (o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] record already revealed, deleting stale key",
                ])),
            ),
              yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(s));
            return;
          }
          if (x(u)) {
            (o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] sender-originated record (own account JID), deleting to clear scheduled list",
                ])),
            ),
              yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(s));
            return;
          }
          if (
            (o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] decrypting payload",
                ])),
            ),
            a == null || a === "")
          ) {
            (o("WALogger")
              .ERROR(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] missing chatId in record",
                  ])),
              )
              .sendLogs("mex-scheduled-msg-reveal-missing-chat-id"),
              yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(s));
            return;
          }
          if (l == null || i == null) {
            (o("WALogger")
              .ERROR(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] missing encPayload or encIv",
                  ])),
              )
              .sendLogs("mex-scheduled-msg-reveal-missing-enc-data"),
              yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(s));
            return;
          }
          var c = yield o(
            "WAWebScheduledMsgDecryptInnerProto",
          ).decryptAndDecodeRevealPayload(l, i, t);
          if (c == null) {
            yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(s);
            return;
          }
          var d =
            (n = o("WAWebScheduledMsgExtractText").extractScheduledMsgText(
              c,
            )) != null
              ? n
              : "";
          o("WALogger").LOG(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][reveal] decrypt ok, creating msg in chat",
              ])),
          );
          var m;
          try {
            m = o("WAWebWidFactory").createWid(a);
          } catch (e) {
            (o("WALogger")
              .ERROR(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] invalid chatId for reveal record, deleting",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("mex-scheduled-msg-reveal-invalid-chat-id"),
              yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(s));
            return;
          }
          var p;
          if (m.isGroup()) {
            if (u == null) {
              (o("WALogger")
                .ERROR(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][mex][reveal] missing senderJid for group reveal record, deleting",
                    ])),
                )
                .sendLogs("mex-scheduled-msg-reveal-missing-sender-jid"),
                yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(s));
              return;
            }
            var _;
            try {
              _ = o("WAWebWidFactory").createWid(u);
            } catch (e) {
              (o("WALogger")
                .ERROR(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][mex][reveal] invalid senderJid for group reveal record, deleting",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("mex-scheduled-msg-reveal-invalid-sender-jid"),
                yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(s));
              return;
            }
            p = { type: "group", chatWid: m, senderWid: _, text: d };
          } else p = { type: "individual", chatWid: m, text: d };
          var E = yield N(p);
          (yield o("WAWebScheduledMsgRevealKeyStore").updateRevealKeyStatus(
            s,
            "REVEALED",
          ),
            yield o("WAWebHandleSingleMsg").handleSingleMsgImpl({
              chatId: m,
              newMsg: E,
              handleSingleMsgOrigin: "scheduledMsgReveal",
            }),
            yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(s),
            o("WALogger").LOG(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] completed reveal for msg",
                ])),
            ));
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatWid,
            n = e.text,
            a = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            i = e.type === "group" ? e.senderWid : null,
            l = yield r("WAWebMsgKey").newId(),
            s = new (r("WAWebMsgKey"))({
              fromMe: !1,
              remote: t,
              id: l,
              participant: i != null ? i : void 0,
            });
          return {
            id: s,
            from: t,
            to: a,
            author: i != null ? i : void 0,
            type: o("WAWebMsgType").MSG_TYPE.CHAT,
            kind: o("WAWebMsgType").MsgKind.Chat,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            body: n,
            t: o("WATimeUtils").unixTime(),
            ack: o("WAWebAck").ACK.SENT,
            isNewMsg: !0,
            recvFresh: !0,
            invis: !1,
          };
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WALogger").LOG(
            E ||
              (E = babelHelpers.taggedTemplateLiteralLoose([
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
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] orphan key stored",
                ])),
            ));
        })),
        A.apply(this, arguments)
      );
    }
    l.mexHandleScheduledMsgReveal = I;
  },
  98,
);
