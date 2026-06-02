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
    "WAWebScheduledMsgRevealKeyStore",
    "WAWebScheduledMsgStore",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
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
    async function D(t) {
      var n = t.chatId,
        a = t.encIv,
        i = t.encPayload,
        l = t.msgId,
        d = t.revealKeyId,
        m = t.stanzaScheduledMsgMeta;
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[scheduled_msg] inline reveal key present in stanza meta, persisting encrypted payload",
          ])),
      );
      try {
        var p = await o("WAWebScheduledMsgStore").storeScheduledMessage({
          msgId: l,
          chatId: n,
          revealKeyId: d,
          revealKey: m.revealKey,
          scheduledTimestampS: o("WATimeUtils").castToUnixTime(
            m.scheduledTimestampS,
          ),
          encPayload: new Uint8Array(i),
          encIv: new Uint8Array(a),
        });
        p
          ? (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg] stored phone-scheduled message in scheduled list",
                ])),
            ),
            await x(n))
          : o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg] phone-scheduled message dropped: per-chat limit reached",
                ])),
            );
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
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
        revealKeyId: d,
        viewMode: o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE,
      };
    }
    async function x(e) {
      try {
        var t = o("WAWebWidFactory").createWid(e),
          n = o("WAWebContactSystemMsg").genNotificationMsg(t, {
            type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION,
            kind: o("WAWebMsgType").MsgKind.Notification,
            subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
              .ScheduledMessageCreated,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          });
        (await o("WAWebHandleSingleMsg").handleSingleMsgImpl({
          chatId: t,
          newMsg: n,
          handleSingleMsgOrigin: "scheduledMsgInline",
        }),
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg] inserted ScheduledMessageCreated system bubble",
              ])),
          ));
      } catch (e) {
        o("WALogger")
          .ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg] Failed to insert ScheduledMessageCreated system bubble",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("scheduled-msg-sysbubble-fail");
      }
    }
    async function $(e, t, n) {
      var a = null;
      try {
        ((a = await o(
          "WAWebScheduledMsgOrphanRevealKeyStore",
        ).getOrphanRevealKeyByRevealKeyId(n)),
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg] orphan key lookup completed",
              ])),
          ));
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg] Failed to query orphan keys (DB may not be ready), will still store reveal-pending record",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          null
        );
      }
      if (a == null) return null;
      o("WALogger").LOG(
        f ||
          (f = babelHelpers.taggedTemplateLiteralLoose([
            "[scheduled_msg] Found orphan RevealKey, decrypting immediately",
          ])),
      );
      try {
        var i = await o("WAWebScheduledMsgCrypto").decryptWithRevealKey(
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
          await o(
            "WAWebScheduledMsgOrphanRevealKeyStore",
          ).deleteOrphanRevealKey(a.revealKeyId),
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg] orphan key decryption succeeded",
              ])),
          ),
          { proto: s, protoBytes: l }
        );
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg] Failed to decrypt with orphan RevealKey, will store as reveal-pending",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          null
        );
      }
    }
    async function P(e) {
      var t = e.chatId,
        n = e.encIv,
        a = e.encPayload,
        i = e.msgId,
        l = e.revealKeyId,
        s = e.senderJid,
        u = e.stanzaScheduledMsgMeta;
      try {
        return (
          await o("WAWebScheduledMsgRevealKeyStore").storeRevealKey({
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
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg] stored reveal-pending record",
              ])),
          ),
          !0
        );
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg] Failed to store reveal key (DB may not be ready)",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          !1
        );
      }
    }
    async function N(e, t, n, r, a) {
      if (!M()) return T;
      o("WALogger").LOG(
        b ||
          (b = babelHelpers.taggedTemplateLiteralLoose([
            "[scheduled_msg] preProcess: receiver gating enabled, validating conditionalRevealMessage",
          ])),
      );
      var i = o("WAWebScheduledMsgCrypto").parseConditionalRevealMessage(e);
      if (i == null) return T;
      var l = i.encIv,
        s = i.encPayload,
        u = i.revealKeyId;
      o("WALogger").LOG(
        v ||
          (v = babelHelpers.taggedTemplateLiteralLoose([
            "[scheduled_msg] ConditionalRevealMessage detected",
          ])),
      );
      var c = a != null && a.revealKeyId === u ? a : null;
      if (c != null) {
        var d = await D({
          stanzaScheduledMsgMeta: c,
          encIv: l,
          encPayload: s,
          revealKeyId: u,
          msgId: t,
          chatId: n,
        });
        if (d != null) return d;
      }
      var m = await $(s, l, u);
      if (m != null)
        return {
          decryptedProto: m.proto,
          decryptedProtoBytes: m.protoBytes,
          isRevealPending: !1,
          revealKeyId: u,
          viewMode: null,
        };
      o("WALogger").LOG(
        S ||
          (S = babelHelpers.taggedTemplateLiteralLoose([
            "[scheduled_msg] storing as reveal-pending",
          ])),
      );
      var p = await P({
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
            viewMode: o("WAWebViewMode.flow").ViewModeType.SCHEDULED_MESSAGE,
          }
        : T;
    }
    function M() {
      try {
        return o(
          "WAWebScheduledMessagesGatingUtils",
        ).isScheduledMessagesReceiverEnabled()
          ? !0
          : (o("WALogger").LOG(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg] preProcess skipped: receiver gating disabled",
                ])),
            ),
            !1);
      } catch (e) {
        return (
          e instanceof Error &&
            o("WALogger")
              .ERROR(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg] preProcess: gating check threw",
                  ])),
              )
              .catching(e),
          !1
        );
      }
    }
    async function w(e, t, n, a, i) {
      try {
        var l = o("WAJids").validateChatJid(n);
        if (l != null) {
          var s = await N(e, t, l, a, i),
            u = s.isRevealPending === !0;
          return {
            proto: s.decryptedProto,
            protoBytes: s.decryptedProtoBytes,
            isRevealPending: u,
            scheduledMsgViewMode: u ? s.viewMode : null,
          };
        }
        o("WALogger").ERROR(
          E ||
            (E = babelHelpers.taggedTemplateLiteralLoose([
              "[scheduled_msg] ConditionalReveal pre-processing skipped: invalid chat JID",
            ])),
        );
      } catch (e) {
        o("WALogger")
          .ERROR(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
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
    }
    function A(e, t) {
      if (t == null) return e;
      var n = e.map(function (e) {
        return babelHelpers.extends({}, e, { viewMode: t });
      });
      return (
        o("WALogger").LOG(
          I ||
            (I = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.preProcessConditionalRevealMessage = N),
      (l.maybePreProcessConditionalRevealForReceive = w),
      (l.applyScheduledMsgViewMode = A));
  },
  98,
);
