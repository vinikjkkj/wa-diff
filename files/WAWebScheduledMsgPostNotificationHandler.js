__d(
  "WAWebScheduledMsgPostNotificationHandler",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAttachScheduledAssociationChildren",
    "WAWebBackendApi",
    "WAWebDBDeleteAssociatedMsgsByMsgKey",
    "WAWebExtractAssociationFieldsFromScheduledMsg",
    "WAWebExtractEphemeralFieldsFromScheduledMsg",
    "WAWebExtractLinkPreviewFieldsFromScheduledMsg",
    "WAWebExtractMediaFieldsFromScheduledMsg",
    "WAWebExtractMentionFieldsFromScheduledMsg",
    "WAWebExtractPairedMediaTypeFromScheduledMsg",
    "WAWebExtractQuoteFieldsFromScheduledMsg",
    "WAWebHandleMsgTypes",
    "WAWebHandleSingleMsg",
    "WAWebLimitSharingAcp2HideReceivedMsgs",
    "WAWebMessageQueue",
    "WAWebMessageQueueTimeout",
    "WAWebMsgType",
    "WAWebOfflineHandler",
    "WAWebScheduledMessagesGatingUtils",
    "WAWebScheduledMsgDecryptInnerProto",
    "WAWebScheduledMsgExtractText",
    "WAWebScheduledMsgOutgoingMsgKey",
    "WAWebScheduledMsgRevealChatUtils",
    "WAWebScheduledMsgRevealKeyStore",
    "WAWebSchemaMessage",
    "WAWebUserUtils",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R;
    async function L(t, n) {
      if (
        o(
          "WAWebScheduledMessagesGatingUtils",
        ).isScheduledMessagesReceiverEnabled()
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
        var p =
          !!t.offline &&
          !o(
            "WAWebOfflineHandler",
          ).OfflineMessageHandler.isResumeFromRestartComplete();
        await o("WAWebMessageQueue")
          .onMessageQueue({
            chatWid: o("WAWebUserUtils").getMeLidUserOrThrow(),
            isOffline: p,
            msgCategory: null,
            action: async function () {
              try {
                var e = await o(
                  "WAWebScheduledMsgRevealKeyStore",
                ).getRevealKeyByRevealKeyId(i);
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
                switch (l) {
                  case "SUCCESS": {
                    var t =
                      e.revealKey.byteLength === 0
                        ? null
                        : await o(
                            "WAWebScheduledMsgDecryptInnerProto",
                          ).decryptAndDecodeRevealPayload(
                            e.encPayload,
                            e.encIv,
                            e.revealKey,
                          );
                    await E(e, t);
                    break;
                  }
                  default:
                    await I(e.msgId, l);
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
          })
          .catch(function (e) {
            return o("WAWebMessageQueueTimeout").handleMessageQueueTimeout(
              e,
              "scheduled_msg_post",
            );
          });
      }
    }
    async function E(e, t) {
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
        c = await o(
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
      var d = o("WAWebUserUtils").getMeLidUserOrThrow(),
        m = o(
          "WAWebScheduledMsgOutgoingMsgKey",
        ).buildScheduledMsgOutgoingMsgKey(a, c, d),
        R =
          e.scheduledTimestampS > 0
            ? e.scheduledTimestampS
            : o("WATimeUtils").unixTime();
      (await o("WAWebSchemaMessage").getMessageTable().remove(m.toString()),
        await o(
          "WAWebDBDeleteAssociatedMsgsByMsgKey",
        ).bulkDeleteMessagesByMsgKeys([m.toString()]));
      try {
        await o("WAWebBackendApi").frontendSendAndReceive(
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
      var L = o(
          "WAWebExtractAssociationFieldsFromScheduledMsg",
        ).extractAssociationFieldsFromScheduledMsg(t, {
          id: m,
          from: d,
          to: c,
          author: u ? d : void 0,
          type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        }),
        E = babelHelpers.extends(
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
          o(
            "WAWebExtractPairedMediaTypeFromScheduledMsg",
          ).extractPairedMediaTypeFromScheduledMsg(t),
        ),
        I = babelHelpers.extends(
          {
            id: m,
            from: d,
            to: c,
            author: u ? d : void 0,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          },
          E,
          {
            t: R,
            ack: o("WAWebAck").ACK.RECEIVED,
            isNewMsg: !0,
            recvFresh: !0,
            invis: !1,
            isScheduledMsg: !1,
            scheduledTimestampS: o("WATimeUtils").castToUnixTime(R),
            messageSecret: k(t, e.outerMessageSecret),
          },
        ),
        T = function () {
          return i != null
            ? L == null
              ? babelHelpers.extends({}, I, i)
              : i.kind === o("WAWebMsgType").MsgKind.Image
                ? babelHelpers.extends({}, I, i, L, {
                    kind: o("WAWebMsgType").MsgKind.AssociatedImage,
                  })
                : babelHelpers.extends({}, I, i, L, {
                    kind: o("WAWebMsgType").MsgKind.AssociatedVideo,
                  })
            : L != null
              ? babelHelpers.extends({}, I, L, {
                  type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                  kind: o("WAWebMsgType").MsgKind.AssociatedUnknown,
                })
              : babelHelpers.extends({}, I, {
                  type: o("WAWebMsgType").MSG_TYPE.CHAT,
                  kind: o("WAWebMsgType").MsgKind.Chat,
                  body: l != null ? l : "",
                });
        },
        D = T(),
        x = await o(
          "WAWebLimitSharingAcp2HideReceivedMsgs",
        ).hideMsgsReceivedInAcp2RestrictedChat({
          messageType: u
            ? o("WAWebHandleMsgTypes").MESSAGE_TYPE.GROUP
            : o("WAWebHandleMsgTypes").MESSAGE_TYPE.CHAT,
          msgs: [D],
          proto: t,
        });
      if (x.length === 0) {
        o("WALogger").LOG(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "[scheduled_msg][mex][post] hidden in ACP2-restricted chat, deleting key",
            ])),
        );
        try {
          await o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(a);
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
        await o("WAWebHandleSingleMsg").handleSingleMsgImpl({
          chatId: c,
          newMsg: D,
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
      await o(
        "WAWebAttachScheduledAssociationChildren",
      ).attachScheduledAssociationChildren(
        m,
        L == null ? void 0 : L.parentMsgKey,
      );
      try {
        await o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(a);
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
    }
    function k(e, t) {
      var n,
        r = (n = e.messageContextInfo) == null ? void 0 : n.messageSecret;
      return r != null ? new Uint8Array(r) : t != null ? t : void 0;
    }
    async function I(e, t) {
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
        await o("WAWebScheduledMsgRevealKeyStore").updateRevealKeyStatus(
          e,
          "FAILED",
        ));
    }
    l.mexHandleScheduledMsgPost = L;
  },
  98,
);
