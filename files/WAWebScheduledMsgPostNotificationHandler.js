__d(
  "WAWebScheduledMsgPostNotificationHandler",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b;
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
                  yield R(p.msgId, _);
                  break;
                }
                default:
                  yield E(p.msgId, l);
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
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                  "[scheduled_msg][mex][post] missing body for record; keeping reveal-key for retry",
                ])),
            );
            return;
          }
          var n;
          try {
            n = r("WAWebMsgKey").fromString(e);
          } catch (t) {
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][post] companion / inline-DSM record (raw wire ID); deleting reveal-key without insert (visible bubble comes from standard fan-out)",
                ])),
            );
            try {
              yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(e);
            } catch (e) {
              o("WALogger")
                .ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][mex][post] failed to delete reveal-key on companion path",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("mex-scheduled-msg-post-delete-companion-failed");
            }
            return;
          }
          var a = n.remote,
            i = a.isGroup(),
            l = i ? a : yield I(a),
            s = l.equals(a)
              ? n
              : new (r("WAWebMsgKey"))({
                  fromMe: n.fromMe,
                  remote: l,
                  id: n.id,
                  participant: n.participant,
                }),
            u = s.toString(),
            c = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            d = o("WATimeUtils").unixTime();
          yield o("WAWebSchemaMessage").getMessageTable().remove(u);
          var m = {
            id: s,
            from: c,
            to: l,
            author: i ? c : void 0,
            type: o("WAWebMsgType").MSG_TYPE.CHAT,
            kind: o("WAWebMsgType").MsgKind.Chat,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            body: t,
            t: d,
            ack: o("WAWebAck").ACK.RECEIVED,
            isNewMsg: !0,
            recvFresh: !0,
            invis: !1,
          };
          try {
            yield o("WAWebHandleSingleMsg").handleSingleMsgImpl({
              chatId: l,
              newMsg: m,
              handleSingleMsgOrigin: "scheduledMsgReveal",
            });
          } catch (e) {
            o("WALogger")
              .ERROR(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
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
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][post] failed to delete reveal-key after successful insert",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("mex-scheduled-msg-post-delete-failed");
          }
          o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][post] posted message to chat",
              ])),
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (o("WALogger")
            .ERROR(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
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
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          if (!e.isUser()) return e;
          var n = o("WAWebLidMigrationUtils").toLid(e);
          return n == null
            ? e
            : (t = yield o("WAWebLidMigrationDbUtils").getChatWidFromUserLid(
                  n,
                )) != null
              ? t
              : e;
        })),
        T.apply(this, arguments)
      );
    }
    l.mexHandleScheduledMsgPost = v;
  },
  98,
);
