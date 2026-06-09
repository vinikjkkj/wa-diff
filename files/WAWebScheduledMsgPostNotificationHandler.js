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
    "WAWebMessageQueue",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebOfflineHandler",
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
    var e, s, u, c, d, m, p, _, f, g, h, y, C;
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          if (
            o(
              "WAWebScheduledMessagesGatingUtils",
            ).isScheduledMessagesSenderEnabled()
          ) {
            var i = a.xwa2_notify_scheduled_message_post;
            if (i == null) {
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
            var l = i.rkid,
              p = i.status;
            if (l == null) {
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
                p,
              ),
              p == null)
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
            var _ =
              !!t.offline &&
              !o(
                "WAWebOfflineHandler",
              ).OfflineMessageHandler.isResumeFromRestartComplete();
            yield o("WAWebMessageQueue").onMessageQueue({
              chatWid: o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
              isOffline: _,
              msgCategory: null,
              action: (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    try {
                      var e = yield o(
                        "WAWebScheduledMsgRevealKeyStore",
                      ).getRevealKeyByRevealKeyId(l);
                      if (e == null)
                        return (
                          o("WALogger").WARN(
                            d ||
                              (d = babelHelpers.taggedTemplateLiteralLoose([
                                "[scheduled_msg][mex][post] no record found for rkid",
                              ])),
                          ),
                          null
                        );
                      switch (p) {
                        case "SUCCESS": {
                          var t = yield o(
                            "WAWebScheduledMsgStore",
                          ).decryptScheduledMsgBody(e);
                          yield S(e, t);
                          break;
                        }
                        default:
                          yield L(e.msgId, p);
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
                    return null;
                  },
                );
                function t() {
                  return e.apply(this, arguments);
                }
                return t;
              })(),
            });
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            s = l ? i : yield k(i),
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
          var m =
            e.scheduledTimestampS > 0
              ? e.scheduledTimestampS
              : o("WATimeUtils").unixTime();
          yield o("WAWebSchemaMessage").getMessageTable().remove(c.toString());
          try {
            yield o("WAWebBackendApi").frontendSendAndReceive(
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
            yield o("WAWebHandleSingleMsg").handleSingleMsgImpl({
              chatId: s,
              newMsg: C,
              handleSingleMsgOrigin: "scheduledMsgReveal",
            });
          } catch (e) {
            o("WALogger")
              .ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][post] handleSingleMsgImpl -, keep key",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("mex-scheduled-msg-post-insert-failed");
            return;
          }
          try {
            yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(a);
          } catch (e) {
            o("WALogger")
              .ERROR(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][post] deleteRevealKey - post-insert",
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
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            yield o("WAWebScheduledMsgRevealKeyStore").updateRevealKeyStatus(
              e,
              "FAILED",
            ));
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        I.apply(this, arguments)
      );
    }
    l.mexHandleScheduledMsgPost = b;
  },
  98,
);
