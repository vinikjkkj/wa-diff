__d(
  "WAWebSendBroadcastMsgAction",
  [
    "Promise",
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
    "WAWebOutgoingMessage",
    "WAWebSendMsgResultAction",
    "WAWebSendMsgTypes",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h;
    function y() {
      return o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
    }
    function C(e, t, n, r) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i) {
            var l = t.id.toString(),
              p = n.length;
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:send] Starting broadcast message send: msgId=",
                  ", recipients=",
                  "",
                ])),
              l,
              p,
            );
            var _ = {
                type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
                data: t,
              },
              f = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
                o("WAWebOutgoingMessage").OutgoingMessageOriginType.Chat,
                _,
              );
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:send] Protobuf created: msgId=",
                  "",
                ])),
              l,
            ),
              o("WAWebBroadcastODS").bumpBroadcastSend());
            try {
              yield o(
                "WAWebEncryptAndSendBroadcastMsg",
              ).encryptAndSendBroadcastMsg(_, f, n, a, i);
              var g = yield o(
                "WAWebBatchUpdateBroadcastAck",
              ).batchUpdateAckForBroadcastMessages(t, o("WAWebAck").ACK.SENT);
              return (
                g != null &&
                  o("WALogger")
                    .WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[broadcast:send] Batch ack update failed after send: error=",
                          "",
                        ])),
                      g,
                    )
                    .sendLogs("broadcast-batch-ack-sent-" + g),
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:send] Successfully sent: msgId=",
                      ", ack=",
                      "",
                    ])),
                  l,
                  o("WAWebAck").ACK.SENT,
                ),
                o("WAWebBroadcastODS").bumpBroadcastSendSuccess(),
                {
                  messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                    .OK,
                  msgId: l,
                }
              );
            } catch (e) {
              var h = yield o(
                "WAWebBatchUpdateBroadcastAck",
              ).batchUpdateAckForBroadcastMessages(t, o("WAWebAck").ACK.FAILED);
              (h != null &&
                o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast:send] Batch ack update failed after send failure: error=",
                        "",
                      ])),
                    h,
                  )
                  .sendLogs("broadcast-batch-ack-failed-" + h),
                o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast:send] Send failed: recipientCount=",
                        ", ack=",
                        "",
                      ])),
                    p,
                    o("WAWebAck").ACK.FAILED,
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("broadcast-send-failure"),
                o("WAWebBroadcastODS").bumpBroadcastSendError());
              var y =
                e instanceof o("WAWebHandleMsgError").MessageSentAckError
                  ? e.ackErrorCode
                  : null;
              return {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .ERROR_UNKNOWN,
                msgId: l,
                ackErrorCode: y,
              };
            }
          },
        )),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.msgData,
            a = y(),
            i = yield (h || (h = n("Promise"))).all(
              e.recipients.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      try {
                        var t = yield o(
                            "WAWebMessageProcessUtils",
                          ).selectChatForOneOnOneMessage({ lid: e }),
                          n = t.chatId;
                        return o("WAWebWidFactory").asUserWidOrThrow(n);
                      } catch (t) {
                        return e;
                      }
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            l = o(
              "WAWebBuildBroadcastMsgModels",
            ).buildBroadcastMsgModelsFromMsgData(t, i),
            s = o(
              "WAWebBuildBroadcastMsgModels",
            ).bulkBroadcastMessagesToBulkUpdateInput(l),
            u = s.chatsIdWithNewMsgs,
            c = s.msgs;
          yield o("WAWebDBMessageBulkHelper").persistNewMessagesInBulk(c, u);
          var d = o("WAWebBroadcastMsgCollectionUtils").addMsgsToCollections(
              l.mainMessage,
              l.messageClones,
            ),
            m = e.beforeSend;
          try {
            m != null &&
              (yield d.waitForPrep(),
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:send] Media prep complete: msgId=",
                    "",
                  ])),
                d.id,
              ),
              yield m(d),
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:send] Media upload complete: msgId=",
                    "",
                  ])),
                d.id,
              ),
              yield o(
                "WAWebBuildBroadcastMsgModels",
              ).propagateMediaFieldsToBroadcastClones(d),
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:send] Media fields persisted for all clone messages: msgId=",
                    "",
                  ])),
                d.id,
              ));
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:send] Media prep/upload failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("broadcast-media-prep-upload-error"),
              o("WAWebBroadcastODS").bumpBroadcastSendError(),
              yield d.updateAck(o("WAWebAck").ACK.FAILED),
              {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .ERROR_UPLOAD,
                msgId: d.id.toString(),
              }
            );
          }
          return C(d, e.recipients, a, e.businessMetadata);
        })),
        S.apply(this, arguments)
      );
    }
    l.sendBroadcastMsgAction = v;
  },
  98,
);
