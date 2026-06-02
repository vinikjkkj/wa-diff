__d(
  "WAWebSendBroadcastMsgAction",
  [
    "WALogger",
    "WAWebAck",
    "WAWebBatchUpdateBroadcastAck",
    "WAWebBroadcastMsgCollectionUtils",
    "WAWebBroadcastODS",
    "WAWebBuildBroadcastMsgModels",
    "WAWebDBMessageBulkHelper",
    "WAWebEncryptAndSendBroadcastMsg",
    "WAWebHandleMsgError",
    "WAWebMessageProcessUtils",
    "WAWebMsgCollection",
    "WAWebMsgModelUtils",
    "WAWebMsgUtilsBridge",
    "WAWebOutgoingMessage",
    "WAWebSendMsgResultAction",
    "WAWebSendMsgTypes",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C;
    function b() {
      return o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
    }
    async function v(t) {
      try {
        var n = o("WAWebMsgModelUtils").getBroadcastFanoutKeys(t);
        if (n == null) {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:ctl] no fanout keys; skipping CTL emission",
              ])),
          );
          return;
        }
        var a = [];
        for (var i of n) {
          var l = o("WAWebMsgCollection").MsgCollection.get(i);
          if (l == null) {
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:ctl] missing clone for fanoutKey=",
                  "",
                ])),
              i.toString(),
            );
            continue;
          }
          a.push(
            o("WAWebMsgUtilsBridge").logMessageSendForChatThreadLogging(l),
          );
        }
        await Promise.all(a);
      } catch (e) {
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:ctl] emission failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
    }
    async function S(e) {
      var t = e.authorId,
        n = e.businessMetadata,
        a = e.msg,
        i = e.recipients,
        l = a.id.toString(),
        s = i.length;
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "[broadcast:send] Starting broadcast message send: msgId=",
            ", recipients=",
            "",
          ])),
        l,
        s,
      );
      var u = {
          type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
          data: a,
        },
        g = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
          o("WAWebOutgoingMessage").OutgoingMessageOriginType.Chat,
          u,
        );
      (o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "[broadcast:send] Protobuf created: msgId=",
            "",
          ])),
        l,
      ),
        o("WAWebBroadcastODS").bumpBroadcastSend());
      try {
        await o("WAWebEncryptAndSendBroadcastMsg").encryptAndSendBroadcastMsg(
          u,
          g,
          i,
          t,
          n,
        );
        var h = await o(
          "WAWebBatchUpdateBroadcastAck",
        ).batchUpdateAckForBroadcastMessages(a, o("WAWebAck").ACK.SENT);
        return (
          h != null &&
            o("WALogger")
              .WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:send] Batch ack update failed after send: error=",
                    "",
                  ])),
                h,
              )
              .sendLogs("broadcast-batch-ack-sent-" + h),
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:send] Successfully sent: msgId=",
                ", ack=",
                "",
              ])),
            l,
            o("WAWebAck").ACK.SENT,
          ),
          o("WAWebBroadcastODS").bumpBroadcastSendSuccess(),
          h == null && v(a),
          {
            messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.OK,
            msgId: l,
          }
        );
      } catch (e) {
        var y = await o(
          "WAWebBatchUpdateBroadcastAck",
        ).batchUpdateAckForBroadcastMessages(a, o("WAWebAck").ACK.FAILED);
        (y != null &&
          o("WALogger")
            .ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:send] Batch ack update failed after send failure: error=",
                  "",
                ])),
              y,
            )
            .sendLogs("broadcast-batch-ack-failed-" + y),
          o("WALogger")
            .ERROR(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:send] Send failed: recipientCount=",
                  ", ack=",
                  "",
                ])),
              s,
              o("WAWebAck").ACK.FAILED,
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("broadcast-send-failure"),
          o("WAWebBroadcastODS").bumpBroadcastSendError());
        var C =
          e instanceof o("WAWebHandleMsgError").MessageSentAckError
            ? e.ackErrorCode
            : null;
        return {
          messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
            .ERROR_UNKNOWN,
          msgId: l,
          ackErrorCode: C,
        };
      }
    }
    async function R(e) {
      var t = e.msgData,
        n = b(),
        a = await Promise.all(
          e.recipients.map(async function (e) {
            try {
              var t = await o(
                  "WAWebMessageProcessUtils",
                ).selectChatForOneOnOneMessage({ lid: e }),
                n = t.chatId;
              return o("WAWebWidFactory").asUserWidOrThrow(n);
            } catch (t) {
              return e;
            }
          }),
        ),
        i = o(
          "WAWebBuildBroadcastMsgModels",
        ).buildBroadcastMsgModelsFromMsgData(t, a),
        l = o(
          "WAWebBuildBroadcastMsgModels",
        ).bulkBroadcastMessagesToBulkUpdateInput(i),
        s = l.chatsIdWithNewMsgs,
        u = l.msgs;
      await o("WAWebDBMessageBulkHelper").persistNewMessagesInBulk(u, s);
      var c = o("WAWebBroadcastMsgCollectionUtils").addMsgsToCollections(
          i.mainMessage,
          i.messageClones,
        ),
        d = e.beforeSend;
      try {
        d != null &&
          (await c.waitForPrep(),
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:send] Media prep complete: msgId=",
                "",
              ])),
            c.id,
          ),
          await d(c),
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:send] Media upload complete: msgId=",
                "",
              ])),
            c.id,
          ),
          await o(
            "WAWebBuildBroadcastMsgModels",
          ).propagateMediaFieldsToBroadcastClones(c),
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:send] Media fields persisted for all clone messages: msgId=",
                "",
              ])),
            c.id,
          ));
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:send] Media prep/upload failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("broadcast-media-prep-upload-error"),
          o("WAWebBroadcastODS").bumpBroadcastSendError(),
          await c.updateAck(o("WAWebAck").ACK.FAILED),
          {
            messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
              .ERROR_UPLOAD,
            msgId: c.id.toString(),
          }
        );
      }
      return S({
        authorId: n,
        businessMetadata: e.businessMetadata,
        msg: c,
        recipients: e.recipients,
      });
    }
    l.sendBroadcastMsgAction = R;
  },
  98,
);
