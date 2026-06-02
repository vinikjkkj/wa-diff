__d(
  "WAWebScheduledMsgPostNotificationHandler",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebBackendApi",
    "WAWebHandleSingleMsg",
    "WAWebLidMigrationDbUtils",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebScheduledMessagesGatingUtils",
    "WAWebScheduledMsgRevealKeyStore",
    "WAWebScheduledMsgStore",
    "WAWebSchemaMessage",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C;
    async function b(t, n) {
      if (
        o(
          "WAWebScheduledMessagesGatingUtils",
        ).isScheduledMessagesSenderEnabled()
      ) {
        var a = n.xwa2_notify_scheduled_message_post;
        if (a == null) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][post] missing post data in notification",
                ])),
            )
            .sendLogs("mex-scheduled-msg-post-missing-data");
          return;
        }
        var i = a.rkid,
          l = a.status;
        if (i == null) {
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][post] missing rkid in notification",
                ])),
            )
            .sendLogs("mex-scheduled-msg-post-missing-rkid");
          return;
        }
        if (
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][post] received rkid, status=",
                "",
              ])),
            l,
          ),
          l == null)
        ) {
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][post] missing status in notification",
                ])),
            )
            .sendLogs("mex-scheduled-msg-post-missing-status");
          return;
        }
        try {
          var p = await o(
            "WAWebScheduledMsgRevealKeyStore",
          ).getRevealKeyByRevealKeyId(i);
          if (p == null) {
            o("WALogger").WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][post] no record found for rkid",
                ])),
            );
            return;
          }
          switch (l) {
            case "SUCCESS": {
              var _ = await o("WAWebScheduledMsgStore").decryptScheduledMsgBody(
                p,
              );
              await v(p, _);
              break;
            }
            default:
              await S(p.msgId, l);
          }
        } catch (e) {
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][post] handler failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("mex-scheduled-msg-post-handler-failed");
        }
      }
    }
    async function v(e, t) {
      var n = e.chatId,
        a = e.msgId;
      if (
        (o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[scheduled_msg][mex][post] SUCCESS for msgId",
            ])),
        ),
        t == null)
      ) {
        o("WALogger").WARN(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "[scheduled_msg][mex][post] no body; keep reveal-key",
            ])),
        );
        return;
      }
      var i = o("WAWebWidFactory").createWid(n),
        l = i.isGroup(),
        s = l ? i : await R(i),
        u = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        c;
      try {
        var d = r("WAWebMsgKey").fromString(a);
        c = s.equals(d.remote)
          ? d
          : new (r("WAWebMsgKey"))({
              fromMe: d.fromMe,
              remote: s,
              id: d.id,
              participant: d.participant,
            });
      } catch (e) {
        c = new (r("WAWebMsgKey"))({
          fromMe: !0,
          remote: s,
          id: a,
          participant: l ? u : void 0,
        });
      }
      var m = o("WATimeUtils").unixTime();
      await o("WAWebSchemaMessage").getMessageTable().remove(c.toString());
      try {
        await o("WAWebBackendApi").frontendSendAndReceive(
          "removeScheduledMsgModelForReveal",
          { msgKey: c },
        );
      } catch (e) {
        o("WALogger")
          .ERROR(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][post] drop in-memory model failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("mex-scheduled-msg-post-drop-model-failed");
      }
      var C = {
        id: c,
        from: u,
        to: s,
        author: l ? u : void 0,
        type: o("WAWebMsgType").MSG_TYPE.CHAT,
        kind: o("WAWebMsgType").MsgKind.Chat,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        body: t,
        t: m,
        ack: o("WAWebAck").ACK.RECEIVED,
        isNewMsg: !0,
        recvFresh: !0,
        invis: !1,
        isScheduledMsg: !1,
        scheduledTimestampS: null,
      };
      try {
        await o("WAWebHandleSingleMsg").handleSingleMsgImpl({
          chatId: s,
          newMsg: C,
          handleSingleMsgOrigin: "scheduledMsgReveal",
        });
      } catch (e) {
        o("WALogger")
          .ERROR(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][post] handleSingleMsgImpl failed; keep reveal-key",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("mex-scheduled-msg-post-insert-failed");
        return;
      }
      try {
        await o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(a);
      } catch (e) {
        o("WALogger")
          .ERROR(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][post] delete reveal-key failed after insert",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("mex-scheduled-msg-post-delete-failed");
      }
      o("WALogger").LOG(
        y ||
          (y = babelHelpers.taggedTemplateLiteralLoose([
            "[scheduled_msg][mex][post] posted message to chat",
          ])),
      );
    }
    async function S(e, t) {
      (o("WALogger")
        .ERROR(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "[scheduled_msg][mex][post] FAILURE for msgId status=",
              "",
            ])),
          t,
        )
        .sendLogs("mex-scheduled-msg-post-failure"),
        await o("WAWebScheduledMsgRevealKeyStore").updateRevealKeyStatus(
          e,
          "FAILED",
        ));
    }
    async function R(e) {
      var t;
      if (!e.isUser()) return e;
      var n = o("WAWebLidMigrationUtils").toLid(e);
      return n == null
        ? e
        : (t = await o("WAWebLidMigrationDbUtils").getChatWidFromUserLid(n)) !=
            null
          ? t
          : e;
    }
    l.mexHandleScheduledMsgPost = b;
  },
  98,
);
