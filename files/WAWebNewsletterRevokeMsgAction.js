__d(
  "WAWebNewsletterRevokeMsgAction",
  [
    "WAAckLevel",
    "WALogger",
    "WATimeUtils",
    "WAWebAssociatedMessagesRevokeUtils",
    "WAWebChatSendMessages",
    "WAWebDBStoreRevokeMsgs",
    "WAWebMsgActionCapability",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebNewsletterSendMessageJob",
    "WAWebNewsletterValidationUtils",
    "WAWebSendMsgResultAction",
    "WAWebUpdateNewsletterMsgUIAction",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e, t, n) {
      return Promise.all(
        t.map(function (t) {
          return p(e, t, n);
        }),
      );
    }
    async function p(t, n, r) {
      o("WAWebAssociatedMessagesRevokeUtils")
        .getAssociatedChildMessageRevokePromises(n, function (e) {
          return _(t, e, r);
        })
        .then(function (e) {
          return Promise.all(e);
        })
        .catch(function (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter] Failed to revoke associated child messages",
                ])),
            )
            .tags("newsletter")
            .sendLogs("newsletter-revoke-child-messages-fail");
        });
      var a = await _(t, n, r);
      return a;
    }
    async function _(e, t, n) {
      if (!o("WAWebMsgActionCapability").canRevokeNewsletterMsg(t))
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "sendNewsletterRevokeMsg: msg cannot be revoked",
              ])),
          ),
          {
            messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
              .ERROR_CANCELLED,
          }
        );
      var r = t.serverId;
      if (r == null)
        return (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[sendNewsletterRevokeMsg] missing serverId",
                ])),
            )
            .tags("newsletter")
            .sendLogs("newsletter-revoke-missing-id"),
          {
            messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
              .ERROR_CANCELLED,
          }
        );
      var a = o("WAWebUserPrefsMeUser").getMeUser(),
        i = f(t, n, a);
      try {
        var l = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
            e.id.toJid(),
          ),
          m = await o("WAWebNewsletterSendMessageJob").sendNewsletterMessageJob(
            {
              newsletterJid: l,
              messageId: t.id.id,
              isContentMedia: t.mediaObject != null,
              type: "revoke",
              isWamoSub: t.isWamoSub,
            },
          );
        return m.success
          ? await g({ chat: e, msgToBeRevoked: t, revokeMsg: i, me: a })
          : m.ack.error === "404"
            ? h({ chat: e, msgToBeRevoked: t, clearMedia: n })
            : (o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter] Failed to send message, ",
                      " from server",
                    ])),
                  m.ack.error,
                )
                .tags("newsletter")
                .sendLogs("newsletter-send-revoke-message-fail-server"),
              i.updateAck(o("WAAckLevel").ACK.FAILED, !0),
              {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .ERROR_NETWORK,
              });
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter] Failed to send message",
                ])),
            )
            .tags("newsletter")
            .sendLogs("newsletter-send-revoke-message-fail-client"),
          i.updateAck(o("WAAckLevel").ACK.FAILED, !0),
          {
            messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
              .ERROR_UNKNOWN,
          }
        );
      }
    }
    function f(e, t, n) {
      var a = new (r("WAWebMsgKey"))({
          id: r("WAWebMsgKey").newId_DEPRECATED(),
          remote: e.id.remote,
          fromMe: !0,
        }),
        i = "admin_revoke",
        l = o("WATimeUtils").unixTime(),
        s = {
          id: a,
          from: n,
          to: e.id.remote,
          t: l,
          type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
          subtype: i,
          protocolMessageKey: e.id,
          clearMedia: t,
          local: !0,
          revokeDuration: l - e.t,
          revokeTimestamp: l,
          serverId: e.serverId,
          viewMode: o("WAWebViewMode.flow").ViewModeType.NEWSLETTER_TOMBSTONE,
        };
      return new (o("WAWebMsgModel").Msg)(s);
    }
    async function g(e) {
      var t = e.chat,
        n = e.me,
        r = e.msgToBeRevoked,
        a = e.revokeMsg;
      return (
        await o("WAWebDBStoreRevokeMsgs").processRevokeMsgs([
          {
            revokeMsgKey: r.id,
            newMsgKey: a.id,
            timestamp: r.t,
            revokeTimestamp: a.t,
            subtype: a.subtype,
            sender: n,
            viewMode: a.viewMode,
          },
        ]),
        o("WAWebUpdateNewsletterMsgUIAction").updateNewsletterMessageUI(
          a,
          t.id,
        ),
        { messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.OK }
      );
    }
    async function h(e) {
      var t = e.chat,
        n = e.clearMedia,
        r = e.msgToBeRevoked;
      return (
        await o("WAWebChatSendMessages").sendDeleteMsgs({
          chat_: t,
          clearMedia: n,
          record: { type: "message", list: [r] },
        }),
        { messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.OK }
      );
    }
    ((l.sendNewsletterRevokeMsgs = m), (l.sendNewsletterRevokeMsg = p));
  },
  98,
);
