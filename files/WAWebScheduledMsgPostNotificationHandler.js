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
    "WAWebHandleMsgTypes.flow",
    "WAWebHandleSingleMsg",
    "WAWebLimitSharingAcp2HideReceivedMsgs",
    "WAWebMessageQueue",
    "WAWebMsgType",
    "WAWebOfflineHandler",
    "WAWebScheduledMessagesGatingUtils",
    "WAWebScheduledMsgDecryptInnerProto",
    "WAWebScheduledMsgExtractText",
    "WAWebScheduledMsgOutgoingMsgKey",
    "WAWebScheduledMsgRevealChatUtils",
    "WAWebScheduledMsgRevealKeyStore",
    "WAWebSchemaMessage",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R;
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
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
                          yield k(e, t);
                          break;
                        }
                        default:
                          yield T(e.msgId, p);
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
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            c;
          try {
            c = yield o(
              "WAWebScheduledMsgRevealChatUtils",
            ).resolveScheduledRevealChat(s);
          } catch (e) {
            o("WALogger")
              .ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][post] ensure chat failed; keep reveal-key",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("mex-scheduled-msg-post-ensure-chat-failed");
            return;
          }
          var d = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            m = o(
              "WAWebScheduledMsgOutgoingMsgKey",
            ).buildScheduledMsgOutgoingMsgKey(a, c, d),
            R =
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
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][post] drop in-memory model failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("mex-scheduled-msg-post-drop-model-failed");
          }
          var L = babelHelpers.extends(
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
            E = babelHelpers.extends(
              {
                id: m,
                from: d,
                to: c,
                author: u ? d : void 0,
                viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              },
              L,
              {
                t: R,
                ack: o("WAWebAck").ACK.RECEIVED,
                isNewMsg: !0,
                recvFresh: !0,
                invis: !1,
                isScheduledMsg: !1,
                scheduledTimestampS: o("WATimeUtils").castToUnixTime(R),
              },
            ),
            k =
              i != null
                ? babelHelpers.extends({}, E, i)
                : babelHelpers.extends({}, E, {
                    type: o("WAWebMsgType").MSG_TYPE.CHAT,
                    kind: o("WAWebMsgType").MsgKind.Chat,
                    body: l != null ? l : "",
                  }),
            I = yield o(
              "WAWebLimitSharingAcp2HideReceivedMsgs",
            ).hideMsgsReceivedInAcp2RestrictedChat({
              messageType: u
                ? o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP
                : o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT,
              msgs: [k],
              proto: t,
            });
          if (I.length === 0) {
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][mex][post] hidden in ACP2-restricted chat, deleting key",
                ])),
            );
            try {
              yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(a);
            } catch (e) {
              o("WALogger")
                .ERROR(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][mex][post] deleteRevealKey - hidden",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("mex-scheduled-msg-post-delete-after-hide-failed");
            }
            return;
          }
          try {
            yield o("WAWebHandleSingleMsg").handleSingleMsgImpl({
              chatId: c,
              newMsg: k,
              handleSingleMsgOrigin: "scheduledMsgReveal",
            });
          } catch (e) {
            o("WALogger")
              .ERROR(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
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
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][mex][post] deleteRevealKey - post-insert",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("mex-scheduled-msg-post-delete-failed");
          }
          o("WALogger").LOG(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][mex][post] posted message to chat",
              ])),
          );
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (o("WALogger")
            .ERROR(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
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
        D.apply(this, arguments)
      );
    }
    l.mexHandleScheduledMsgPost = L;
  },
  98,
);
