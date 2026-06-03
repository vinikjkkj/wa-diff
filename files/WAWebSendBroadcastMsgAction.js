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
    "WAWebMsgCollection",
    "WAWebMsgModelUtils",
    "WAWebMsgUtilsBridge",
    "WAWebOutgoingMessage",
    "WAWebSendMsgResultAction",
    "WAWebSendMsgTypes",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b;
    function v() {
      return o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var a = o("WAWebMsgModelUtils").getBroadcastFanoutKeys(t);
            if (a == null) {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:ctl] no fanout keys; skipping CTL emission",
                  ])),
              );
              return;
            }
            var i = [];
            for (var l of a) {
              var c = o("WAWebMsgCollection").MsgCollection.get(l);
              if (c == null) {
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:ctl] missing clone for fanoutKey=",
                      "",
                    ])),
                  l.toString(),
                );
                continue;
              }
              i.push(
                o("WAWebMsgUtilsBridge").logMessageSendForChatThreadLogging(c),
              );
            }
            yield (b || (b = n("Promise"))).all(i);
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
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            yield o(
              "WAWebEncryptAndSendBroadcastMsg",
            ).encryptAndSendBroadcastMsg(u, g, i, t, n);
            var h = yield o(
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
              h == null && S(a),
              {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .OK,
                msgId: l,
              }
            );
          } catch (e) {
            var y = yield o(
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
          var t = e.msgData,
            a = v(),
            i = yield (b || (b = n("Promise"))).all(
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
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:send] Media prep complete: msgId=",
                    "",
                  ])),
                d.id,
              ),
              yield m(d),
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:send] Media upload complete: msgId=",
                    "",
                  ])),
                d.id,
              ),
              yield o(
                "WAWebBuildBroadcastMsgModels",
              ).propagateMediaFieldsToBroadcastClones(d),
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:send] Media fields persisted for all clone messages: msgId=",
                    "",
                  ])),
                d.id,
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
              yield d.updateAck(o("WAWebAck").ACK.FAILED),
              {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .ERROR_UPLOAD,
                msgId: d.id.toString(),
              }
            );
          }
          return L({
            authorId: a,
            businessMetadata: e.businessMetadata,
            msg: d,
            recipients: e.recipients,
          });
        })),
        I.apply(this, arguments)
      );
    }
    l.sendBroadcastMsgAction = k;
  },
  98,
);
