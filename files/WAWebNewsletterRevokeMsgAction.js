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
    var e, s, u, c, d;
    function m(e, t, r) {
      return (d || (d = n("Promise"))).all(
        t.map(function (t) {
          return p(e, t, r);
        }),
      );
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = yield f(e, t, r);
          return (
            a.messageSendResult !==
              o("WAWebSendMsgResultAction").SendMsgResult.OK ||
              (d || (d = n("Promise"))).all(
                yield o(
                  "WAWebAssociatedMessagesRevokeUtils",
                ).getAssociatedChildMessageRevokePromises(t, function (t) {
                  return f(e, t, r);
                }),
              ),
            a
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          if (!o("WAWebMsgActionCapability").canRevokeNewsletterMsg(n))
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "sendNewsletterRevokeMsg: msg cannot be revoked",
                  ])),
              ),
              {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .ERROR_CANCELLED,
              }
            );
          var a = n.serverId;
          if (a == null)
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
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
          var i = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            l = h(n, r, i);
          try {
            var d = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
                t.id.toJid(),
              ),
              m = yield o(
                "WAWebNewsletterSendMessageJob",
              ).sendNewsletterMessageJob({
                newsletterJid: d,
                messageId: n.id.id,
                isContentMedia: n.mediaObject != null,
                type: "revoke",
                isWamoSub: n.isWamoSub,
              });
            return m.success
              ? yield y({ chat: t, msgToBeRevoked: n, revokeMsg: l, me: i })
              : m.ack.error === "404"
                ? b({ chat: t, msgToBeRevoked: n, clearMedia: r })
                : (o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[newsletter] Failed to send message, ",
                          " from server",
                        ])),
                      m.ack.error,
                    )
                    .tags("newsletter")
                    .sendLogs("newsletter-send-revoke-message-fail-server"),
                  l.updateAck(o("WAAckLevel").ACK.FAILED, !0),
                  {
                    messageSendResult: o("WAWebSendMsgResultAction")
                      .SendMsgResult.ERROR_NETWORK,
                  });
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletter] Failed to send message",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("newsletter-send-revoke-message-fail-client"),
              l.updateAck(o("WAAckLevel").ACK.FAILED, !0),
              {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .ERROR_UNKNOWN,
              }
            );
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n) {
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
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.clearMedia,
            r = e.msgToBeRevoked;
          return (
            yield o("WAWebChatSendMessages").sendDeleteMsgs(
              t,
              { type: "message", list: [r] },
              n,
            ),
            {
              messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.OK,
            }
          );
        })),
        v.apply(this, arguments)
      );
    }
    ((l.sendNewsletterRevokeMsgs = m), (l.sendNewsletterRevokeMsg = p));
  },
  98,
);
