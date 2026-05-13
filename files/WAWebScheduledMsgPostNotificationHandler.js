__d(
  "WAWebScheduledMsgPostNotificationHandler",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebHandleSingleMsg",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebScheduledMessagesGatingUtils",
    "WAWebScheduledMsgRevealKeyStore",
    "WAWebScheduledMsgStore",
    "WAWebSchemaMessage",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S;
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
              var p = yield o(
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
                  var _ = yield o(
                    "WAWebScheduledMsgStore",
                  ).decryptScheduledMsgBody(p);
                  yield E(p.msgId, p.chatId, _);
                  break;
                }
                default:
                  yield I(p.msgId, l);
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
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][post] SUCCESS for msgId",
                ])),
            ),
            t == null || t === "")
          ) {
            o("WALogger").WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][post] missing chatId on record; deleting reveal-key",
                ])),
            );
            try {
              yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(e);
            } catch (e) {
              o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][mex][post] failed to delete reveal-key with missing chatId",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("mex-scheduled-msg-post-delete-missing-chat");
            }
            return;
          }
          if (n == null) {
            o("WALogger").WARN(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][post] missing body for record; keeping reveal-key for retry",
                ])),
            );
            return;
          }
          var a = o("WAWebWidFactory").createWid(t),
            i = a.isGroup(),
            l = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            s;
          try {
            s = r("WAWebMsgKey").fromString(e);
          } catch (t) {
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][post] companion / inline-DSM record (raw wire ID); deleting reveal-key without insert (visible bubble comes from standard fan-out)",
                ])),
            );
            try {
              yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(e);
            } catch (e) {
              o("WALogger")
                .ERROR(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][mex][post] failed to delete reveal-key on companion path",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("mex-scheduled-msg-post-delete-companion-failed");
            }
            return;
          }
          var u = s.toString(),
            c = o("WATimeUtils").unixTime();
          yield o("WAWebSchemaMessage").getMessageTable().remove(u);
          var d = {
            id: s,
            from: l,
            to: a,
            author: i ? l : void 0,
            type: o("WAWebMsgType").MSG_TYPE.CHAT,
            kind: o("WAWebMsgType").MsgKind.Chat,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            body: n,
            t: c,
            ack: o("WAWebAck").ACK.RECEIVED,
            isNewMsg: !0,
            recvFresh: !0,
            invis: !1,
          };
          try {
            yield o("WAWebHandleSingleMsg").handleSingleMsgImpl({
              chatId: a,
              newMsg: d,
              handleSingleMsgOrigin: "scheduledMsgReveal",
            });
          } catch (e) {
            o("WALogger")
              .ERROR(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][post] handleSingleMsgImpl failed; keeping reveal-key for retry",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("mex-scheduled-msg-post-insert-failed");
            return;
          }
          try {
            yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(e);
          } catch (e) {
            o("WALogger")
              .ERROR(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][post] failed to delete reveal-key after successful insert",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("mex-scheduled-msg-post-delete-failed");
          }
          o("WALogger").LOG(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][post] posted message to chat",
              ])),
          );
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (o("WALogger")
            .ERROR(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][post] FAILURE for msgId status=",
                  "",
                ])),
              t,
            )
            .sendLogs("mex-scheduled-msg-post-failure"),
            yield o("WAWebScheduledMsgRevealKeyStore").updateRevealKeyStatus(
              e,
              "FAILED",
            ));
        })),
        T.apply(this, arguments)
      );
    }
    l.mexHandleScheduledMsgPost = R;
  },
  98,
);
