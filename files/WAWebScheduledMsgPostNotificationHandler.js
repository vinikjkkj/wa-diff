__d(
  "WAWebScheduledMsgPostNotificationHandler",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebBackendApi",
    "WAWebExtractEphemeralFieldsFromScheduledMsg",
    "WAWebExtractLinkPreviewFieldsFromScheduledMsg",
    "WAWebExtractMediaFieldsFromScheduledMsg",
    "WAWebExtractMentionFieldsFromScheduledMsg",
    "WAWebExtractQuoteFieldsFromScheduledMsg",
    "WAWebHandleSingleMsg",
    "WAWebLidMigrationDbUtils",
    "WAWebLidMigrationUtils",
    "WAWebMessageQueue",
    "WAWebMsgType",
    "WAWebOfflineHandler",
    "WAWebScheduledMessagesGatingUtils",
    "WAWebScheduledMsgDecryptInnerProto",
    "WAWebScheduledMsgExtractText",
    "WAWebScheduledMsgOutgoingMsgKey",
    "WAWebScheduledMsgRevealKeyStore",
    "WAWebSchemaMessage",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
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
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
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
                          var t =
                            e.revealKey.byteLength === 0
                              ? null
                              : yield o(
                                  "WAWebScheduledMsgDecryptInnerProto",
                                ).decryptAndDecodeRevealPayload(
                                  e.encPayload,
                                  e.encIv,
                                  e.revealKey,
                                );
                          yield R(e, t);
                          break;
                        }
                        default:
                          yield E(e.msgId, p);
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
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                  "[scheduled_msg][mex][post] no inner proto; keep reveal-key",
                ])),
            );
            return;
          }
          var i = o(
              "WAWebExtractMediaFieldsFromScheduledMsg",
            ).extractMediaFieldsFromScheduledMsg(t),
            l = o("WAWebScheduledMsgExtractText").extractScheduledMsgText(t);
          if (i == null && l == null) {
            o("WALogger").WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][post] no renderable content; keep reveal-key",
                ])),
            );
            return;
          }
          var s = o("WAWebWidFactory").createWid(n),
            u = s.isGroup(),
            c = u ? s : yield I(s),
            d = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            m = o(
              "WAWebScheduledMsgOutgoingMsgKey",
            ).buildScheduledMsgOutgoingMsgKey(a, c, d),
            b =
              e.scheduledTimestampS > 0
                ? e.scheduledTimestampS
                : o("WATimeUtils").unixTime();
          yield o("WAWebSchemaMessage").getMessageTable().remove(m.toString());
          try {
            yield o("WAWebBackendApi").frontendSendAndReceive(
              "removeScheduledMsgModelForReveal",
              { msgKey: m },
            );
          } catch (e) {
            o("WALogger")
              .ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][post] drop in-memory model failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("mex-scheduled-msg-post-drop-model-failed");
          }
          var v = babelHelpers.extends(
              {},
              o(
                "WAWebExtractEphemeralFieldsFromScheduledMsg",
              ).extractEphemeralFieldsFromScheduledMsg(t, d),
              o(
                "WAWebExtractMentionFieldsFromScheduledMsg",
              ).extractMentionFieldsFromScheduledMsg(t),
              o(
                "WAWebExtractLinkPreviewFieldsFromScheduledMsg",
              ).extractLinkPreviewFieldsFromScheduledMsg(t),
              o(
                "WAWebExtractQuoteFieldsFromScheduledMsg",
              ).extractQuoteFieldsFromScheduledMsg(t, m),
            ),
            S = babelHelpers.extends(
              {
                id: m,
                from: d,
                to: c,
                author: u ? d : void 0,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              },
              v,
              {
                t: b,
                ack: o("WAWebAck").ACK.RECEIVED,
                isNewMsg: !0,
                recvFresh: !0,
                invis: !1,
                isScheduledMsg: !1,
                scheduledTimestampS: o("WATimeUtils").castToUnixTime(b),
              },
            ),
            R =
              i != null
                ? babelHelpers.extends({}, S, i)
                : babelHelpers.extends({}, S, {
                    type: o("WAWebMsgType").MSG_TYPE.CHAT,
                    kind: o("WAWebMsgType").MsgKind.Chat,
                    body: l != null ? l : "",
                  });
          try {
            yield o("WAWebHandleSingleMsg").handleSingleMsgImpl({
              chatId: c,
              newMsg: R,
              handleSingleMsgOrigin: "scheduledMsgReveal",
            });
          } catch (e) {
            o("WALogger")
              .ERROR(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
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
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][post] deleteRevealKey - post-insert",
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
