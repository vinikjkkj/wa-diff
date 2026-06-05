__d(
  "WAWebScheduledMsgRevealNotificationHandler",
  [
    "WABase64",
    "WABase64UrlSafe",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebExtractEphemeralFieldsFromScheduledMsg",
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
      P,
      N;
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          var _ = O(e);
          if (_ == null) {
            yield A(l, m, p, r);
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
                  return (yield A(l, m, p, r), null);
                },
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          });
        })),
        w.apply(this, arguments)
      );
    }
    function A(e, t, n, r) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            try {
              var i = V(e);
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] looking up record by revealKeyId",
                  ])),
              );
              var l = yield o(
                "WAWebScheduledMsgRevealKeyStore",
              ).getRevealKeyByRevealKeyId(t);
              l != null ? yield B(l, i, n, a) : yield q(t, i, a);
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
          },
        )),
        F.apply(this, arguments)
      );
    }
    function O(t) {
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
    function B(e, t, n, r) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            if (e.senderJid == null) {
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
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
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[scheduled_msg][mex][reveal] failed to delete sender-originated reveal-key",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("mex-scheduled-msg-reveal-delete-sender-failed");
              }
              return;
            }
            if (!a) {
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] sender-only device with receiver record, skipping",
                  ])),
              );
              return;
            }
            (o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] found matching record status=",
                  "",
                ])),
              e.status,
            ),
              yield J(e, t, n));
          },
        )),
        W.apply(this, arguments)
      );
    }
    function q(e, t, n) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (!n) {
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] sender-only device, no record, skipping orphan",
                ])),
            );
            return;
          }
          (o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][reveal] no record for rkid, storing orphan",
              ])),
          ),
            yield te(e, t));
        })),
        U.apply(this, arguments)
      );
    }
    function V(e) {
      return new Uint8Array(
        o("WABase64").decodeB64(
          o("WABase64UrlSafe").urlSafeBase64ToStandard(e),
        ),
      );
    }
    function H(e, t) {
      return e != null && e > 0
        ? o("WATimeUtils").castToUnixTime(e)
        : t > 0
          ? t
          : o("WATimeUtils").unixTime();
    }
    function G(e) {
      if (e == null) return !1;
      try {
        return o("WAWebUserPrefsMeUser").isMeAccount(
          o("WAWebWidFactory").createWid(e),
        );
      } catch (e) {
        return !1;
      }
    }
    function z(e, t, n, r) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(
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
        j.apply(this, arguments)
      );
    }
    function K(e) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatId,
            n = e.encIv,
            r = e.encPayload,
            a = e.msgId;
          return t == null || t === ""
            ? (o("WALogger")
                .ERROR(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][mex][reveal] missing chatId in record",
                    ])),
                )
                .sendLogs("mex-scheduled-msg-reveal-missing-chat-id"),
              yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(a),
              null)
            : r == null || n == null
              ? (o("WALogger")
                  .ERROR(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "[scheduled_msg][mex][reveal] missing encPayload or encIv",
                      ])),
                  )
                  .sendLogs("mex-scheduled-msg-reveal-missing-enc-data"),
                yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(a),
                null)
              : { chatId: t, encPayload: r, encIv: n };
        })),
        Q.apply(this, arguments)
      );
    }
    function X(e, t, n) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            yield o("WAWebHandleSingleMsg").handleSingleMsgImpl({
              chatId: e,
              newMsg: t,
              handleSingleMsgOrigin: "scheduledMsgReveal",
            });
          } catch (e) {
            o("WALogger")
              .ERROR(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
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
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] reveal-key delete failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("mex-scheduled-msg-reveal-delete-failed");
          }
        })),
        Y.apply(this, arguments)
      );
    }
    function J(e, t, n) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a,
            i = e.msgId,
            l = e.scheduledTimestampS,
            s = e.senderJid,
            u = H(n, l);
          if (e.status === "REVEALED") {
            (o("WALogger").LOG(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] record already revealed, deleting stale key",
                ])),
            ),
              yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(i));
            return;
          }
          if (G(s)) {
            (o("WALogger").LOG(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] sender-originated record (own account JID), deleting to clear scheduled list",
                ])),
            ),
              yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(i));
            return;
          }
          o("WALogger").LOG(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][reveal] decrypting payload",
              ])),
          );
          var c = yield K(e);
          if (c != null) {
            var d = yield z(i, c.encPayload, c.encIv, t);
            if (d != null) {
              var m =
                (a = o("WAWebScheduledMsgExtractText").extractScheduledMsgText(
                  d,
                )) != null
                  ? a
                  : "";
              o("WALogger").LOG(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][reveal] decrypt ok, creating msg in chat",
                  ])),
              );
              var p;
              try {
                p = o("WAWebWidFactory").createWid(c.chatId);
              } catch (e) {
                (o("WALogger")
                  .ERROR(
                    T ||
                      (T = babelHelpers.taggedTemplateLiteralLoose([
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
              var _;
              if (p.isGroup()) {
                if (s == null) {
                  (o("WALogger")
                    .ERROR(
                      D ||
                        (D = babelHelpers.taggedTemplateLiteralLoose([
                          "[scheduled_msg][mex][reveal] missing senderJid for group reveal record, deleting",
                        ])),
                    )
                    .sendLogs("mex-scheduled-msg-reveal-missing-sender-jid"),
                    yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(
                      i,
                    ));
                  return;
                }
                var f;
                try {
                  f = o("WAWebWidFactory").createWid(s);
                } catch (e) {
                  (o("WALogger")
                    .ERROR(
                      x ||
                        (x = babelHelpers.taggedTemplateLiteralLoose([
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
                _ = {
                  type: "group",
                  chatWid: p,
                  senderWid: f,
                  msgId: i,
                  text: m,
                  scheduledTimestampS: u,
                  innerProto: d,
                };
              } else
                _ = {
                  type: "individual",
                  chatWid: p,
                  msgId: i,
                  text: m,
                  scheduledTimestampS: u,
                  innerProto: d,
                };
              var g = ee(_);
              (yield X(p, g, i),
                o("WALogger").LOG(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][mex][reveal] completed reveal for msg",
                    ])),
                ));
            }
          }
        })),
        Z.apply(this, arguments)
      );
    }
    function ee(e) {
      var t = e.chatWid,
        n = e.innerProto,
        a = e.msgId,
        i = e.scheduledTimestampS,
        l = e.text,
        s = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        u = e.type === "group" ? e.senderWid : null,
        c = new (r("WAWebMsgKey"))({
          fromMe: !1,
          remote: t,
          id: a,
          participant: u != null ? u : void 0,
        }),
        d = o(
          "WAWebExtractEphemeralFieldsFromScheduledMsg",
        ).extractEphemeralFieldsFromScheduledMsg(n, t);
      return babelHelpers.extends(
        {
          id: c,
          from: t,
          to: s,
          author: u != null ? u : void 0,
          type: o("WAWebMsgType").MSG_TYPE.CHAT,
          kind: o("WAWebMsgType").MsgKind.Chat,
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          body: l,
        },
        d,
        {
          t: i,
          ack: o("WAWebAck").ACK.SENT,
          isNewMsg: !0,
          recvFresh: !0,
          invis: !1,
        },
      );
    }
    function te(e, t) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (o("WALogger").LOG(
            P ||
              (P = babelHelpers.taggedTemplateLiteralLoose([
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
              N ||
                (N = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] orphan key stored",
                ])),
            ));
        })),
        ne.apply(this, arguments)
      );
    }
    l.mexHandleScheduledMsgReveal = M;
  },
  98,
);
