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
      P;
    async function N(t, n) {
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
        var f = A(p);
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[scheduled_msg][mex][reveal] looking up record by revealKeyId",
            ])),
        );
        var g = await o(
          "WAWebScheduledMsgRevealKeyStore",
        ).getRevealKeyByRevealKeyId(_);
        g != null ? await M(g, f, a) : await w(_, f, a);
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
    async function M(e, t, n) {
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
          await o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(e.msgId);
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
        await q(e, t));
    }
    async function w(e, t, n) {
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
        await V(e, t));
    }
    function A(e) {
      return new Uint8Array(
        o("WABase64").decodeB64(
          o("WABase64UrlSafe").urlSafeBase64ToStandard(e),
        ),
      );
    }
    function F(e) {
      if (e == null) return !1;
      try {
        return o("WAWebUserPrefsMeUser").isMeAccount(
          o("WAWebWidFactory").createWid(e),
        );
      } catch (e) {
        return !1;
      }
    }
    async function O(e, t, n, r) {
      var a = await o(
        "WAWebScheduledMsgDecryptInnerProto",
      ).decryptAndDecodeRevealPayload(t, n, r);
      return (
        a == null &&
          (await o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(e)),
        a
      );
    }
    async function B(e) {
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
          await o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(a),
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
            await o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(a),
            null)
          : { chatId: t, encPayload: r, encIv: n };
    }
    async function W(e, t, n) {
      try {
        await o("WAWebHandleSingleMsg").handleSingleMsgImpl({
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
        await o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(n);
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
    }
    async function q(e, t) {
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
          await o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(a));
        return;
      }
      if (F(i)) {
        (o("WALogger").LOG(
          L ||
            (L = babelHelpers.taggedTemplateLiteralLoose([
              "[scheduled_msg][mex][reveal] sender-originated record (own account JID), deleting to clear scheduled list",
            ])),
        ),
          await o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(a));
        return;
      }
      o("WALogger").LOG(
        E ||
          (E = babelHelpers.taggedTemplateLiteralLoose([
            "[scheduled_msg][mex][reveal] decrypting payload",
          ])),
      );
      var l = await B(e);
      if (l != null) {
        var s = await O(a, l.encPayload, l.encIv, t);
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
              await o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(a));
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
                await o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(a));
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
                await o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(a));
              return;
            }
            d = { type: "group", chatWid: c, senderWid: m, msgId: a, text: u };
          } else d = { type: "individual", chatWid: c, msgId: a, text: u };
          var p = U(d);
          (await W(c, p, a),
            o("WALogger").LOG(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][reveal] completed reveal for msg",
                ])),
            ));
        }
      }
    }
    function U(e) {
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
    async function V(e, t) {
      (o("WALogger").LOG(
        $ ||
          ($ = babelHelpers.taggedTemplateLiteralLoose([
            "[scheduled_msg][mex][reveal] no msg for rkid, storing orphan",
          ])),
      ),
        await o("WAWebScheduledMsgOrphanRevealKeyStore").storeOrphanRevealKey({
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
    }
    l.mexHandleScheduledMsgReveal = N;
  },
  98,
);
