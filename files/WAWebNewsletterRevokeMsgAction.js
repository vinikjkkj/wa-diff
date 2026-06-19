__d(
  "WAWebNewsletterRevokeMsgAction",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e, t, r) {
      return (m || (m = n("Promise"))).all(
        t.map(function (t) {
          return _(e, t, r);
        }),
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          o("WAWebAssociatedMessagesRevokeUtils")
            .getAssociatedChildMessageRevokePromises(r, function (e) {
              return g(t, e, a);
            })
            .then(function (e) {
              return (m || (m = n("Promise"))).all(e);
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
          var i = yield g(t, r, a);
          return i;
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
          var a = o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            i = y(t, n, a);
          try {
            var l = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
                e.id.toJid(),
              ),
              m = yield o(
                "WAWebNewsletterSendMessageJob",
              ).sendNewsletterMessageJob({
                newsletterJid: l,
                messageId: t.id.id,
                isContentMedia: t.mediaObject != null,
                type: "revoke",
                isWamoSub: t.isWamoSub,
              });
            return m.success
              ? yield C({ chat: e, msgToBeRevoked: t, revokeMsg: i, me: a })
              : m.ack.error === "404"
                ? v({ chat: e, msgToBeRevoked: t, clearMedia: n })
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
                    messageSendResult: o("WAWebSendMsgResultAction")
                      .SendMsgResult.ERROR_NETWORK,
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
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n) {
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
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.me,
            r = e.msgToBeRevoked,
            a = e.revokeMsg;
          return (
            yield o("WAWebDBStoreRevokeMsgs").processRevokeMsgs([
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
            {
              messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.OK,
            }
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.clearMedia,
            r = e.msgToBeRevoked;
          return (
            yield o("WAWebChatSendMessages").sendDeleteMsgs({
              chat_: t,
              clearMedia: n,
              record: { type: "message", list: [r] },
            }),
            {
              messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.OK,
            }
          );
        })),
        S.apply(this, arguments)
      );
    }
    ((l.sendNewsletterRevokeMsgs = p), (l.sendNewsletterRevokeMsg = _));
  },
  98,
);
