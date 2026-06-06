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
    async function M(t, n) {
      var r = o(
          "WAWebScheduledMessagesGatingUtils",
        ).isScheduledMessagesReceiverEnabled(),
        a = o(
          "WAWebScheduledMessagesGatingUtils",
        ).isScheduledMessagesSenderEnabled();
      if (!r && !a) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[scheduled_msg][mex][reveal] skipped: both receiver and sender gating disabled",
            ])),
        );
        return;
      }
      var i = n.xwa2_notify_scheduled_message_reveal;
      if (i == null) {
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
      var l = i.rk,
        d = i.rkid,
        m = i.st;
      if (d == null || l == null) {
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
      var p = A(t);
      if (p == null) {
        await w(l, d, m, r);
        return;
      }
      var _ =
        !!t.offline &&
        !o(
          "WAWebOfflineHandler",
        ).OfflineMessageHandler.isResumeFromRestartComplete();
      await o("WAWebMessageQueue").onMessageQueue({
        chatWid: p,
        isOffline: _,
        msgCategory: null,
        action: async function () {
          return (await w(l, d, m, r), null);
        },
      });
    }
    async function w(e, t, n, a) {
      try {
        var i = B(e);
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[scheduled_msg][mex][reveal] looking up record by revealKeyId",
            ])),
        );
        var l = await o(
          "WAWebScheduledMsgRevealKeyStore",
        ).getRevealKeyByRevealKeyId(t);
        l != null ? await F(l, i, n, a) : await O(t, i, a);
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
    }
    function A(e) {
      try {
        return o("WAWebWidFactory").createWid(e.from.toString());
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] could not resolve chat wid from notification",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("mex-scheduled-msg-reveal-resolve-chat-failed"),
          null
        );
      }
    }
    async function F(e, t, n, a) {
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
          await o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(e.msgId);
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
        await G(e, t, n));
    }
    async function O(e, t, n) {
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
        await j(e, t));
    }
    function B(e) {
      return new Uint8Array(
        o("WABase64").decodeB64(
          o("WABase64UrlSafe").urlSafeBase64ToStandard(e),
        ),
      );
    }
    function W(e, t) {
      return e != null && e > 0
        ? o("WATimeUtils").castToUnixTime(e)
        : t > 0
          ? t
          : o("WATimeUtils").unixTime();
    }
    function q(e) {
      if (e == null) return !1;
      try {
        return o("WAWebUserPrefsMeUser").isMeAccount(
          o("WAWebWidFactory").createWid(e),
        );
      } catch (e) {
        return !1;
      }
    }
    async function U(e, t, n, r) {
      var a = await o(
        "WAWebScheduledMsgDecryptInnerProto",
      ).decryptAndDecodeRevealPayload(t, n, r);
      return (
        a == null &&
          (await o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(e)),
        a
      );
    }
    async function V(e) {
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
          await o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(a),
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
            await o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(a),
            null)
          : { chatId: t, encPayload: r, encIv: n };
    }
    async function H(e, t, n) {
      try {
        await o("WAWebHandleSingleMsg").handleSingleMsgImpl({
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
        await o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(n);
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
    }
    async function G(e, t, n) {
      var a,
        i = e.msgId,
        l = e.scheduledTimestampS,
        s = e.senderJid,
        u = W(n, l);
      if (e.status === "REVEALED") {
        (o("WALogger").LOG(
          L ||
            (L = babelHelpers.taggedTemplateLiteralLoose([
              "[scheduled_msg][mex][reveal] record already revealed, deleting stale key",
            ])),
        ),
          await o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(i));
        return;
      }
      if (q(s)) {
        (o("WALogger").LOG(
          E ||
            (E = babelHelpers.taggedTemplateLiteralLoose([
              "[scheduled_msg][mex][reveal] sender-originated record (own account JID), deleting to clear scheduled list",
            ])),
        ),
          await o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(i));
        return;
      }
      o("WALogger").LOG(
        k ||
          (k = babelHelpers.taggedTemplateLiteralLoose([
            "[scheduled_msg][mex][reveal] decrypting payload",
          ])),
      );
      var c = await V(e);
      if (c != null) {
        var d = await U(i, c.encPayload, c.encIv, t);
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
              await o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(i));
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
                await o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(i));
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
                await o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(i));
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
          var g = z(_);
          (await H(p, g, i),
            o("WALogger").LOG(
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] completed reveal for msg",
                ])),
            ));
        }
      }
    }
    function z(e) {
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
    async function j(e, t) {
      (o("WALogger").LOG(
        P ||
          (P = babelHelpers.taggedTemplateLiteralLoose([
            "[scheduled_msg][mex][reveal] no msg for rkid, storing orphan",
          ])),
      ),
        await o("WAWebScheduledMsgOrphanRevealKeyStore").storeOrphanRevealKey({
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
    }
    l.mexHandleScheduledMsgReveal = M;
  },
  98,
);
