__d(
  "WAWebSendBroadcastMsgAction",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebAck",
    "WAWebBatchUpdateBroadcastAck",
    "WAWebBroadcastEphemeralUtils",
    "WAWebBroadcastMsgCollectionUtils",
    "WAWebBroadcastODS",
    "WAWebBuildBroadcastMsgModels",
    "WAWebDBMessageBulkHelper",
    "WAWebEncryptAndSendBroadcastMsg",
    "WAWebEphemeralEncodeBroadcastSetting",
    "WAWebHandleMsgError",
    "WAWebMessageProcessUtils",
    "WAWebMessageSendReporter",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMsgCollection",
    "WAWebMsgModelUtils",
    "WAWebMsgUtilsBridge",
    "WAWebOutgoingMessage",
    "WAWebSendMsgResultAction",
    "WAWebSendMsgTypes",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumMessageSendResultType",
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
            a = e.ephemeralSharedSecret,
            i = e.ephSettingMap,
            l = e.msg,
            s = e.recipients,
            u = e.reporter,
            f = l.id.toString(),
            g = s.length;
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:send] start msgId=",
                " rcpts=",
                "",
              ])),
            f,
            g,
          );
          var h = {
              type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
              data: l,
            },
            y = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
              o("WAWebOutgoingMessage").OutgoingMessageOriginType.Chat,
              h,
            ),
            C = i;
          if (a != null) {
            var b = o("WAWebBroadcastEphemeralUtils").addSharedSecretToProto(
                y,
                a,
              ),
              v = b.injected,
              R = b.proto;
            ((y = R), v || (C = null));
          }
          o("WAWebBroadcastODS").bumpBroadcastSend();
          try {
            yield o(
              "WAWebEncryptAndSendBroadcastMsg",
            ).encryptAndSendBroadcastMsg(h, y, s, t, n, C);
            var L = yield o(
              "WAWebBatchUpdateBroadcastAck",
            ).batchUpdateAckForBroadcastMessages(l, o("WAWebAck").ACK.SENT);
            return (
              L != null &&
                o("WALogger")
                  .WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast:send] Batch ack update failed after send: error=",
                        "",
                      ])),
                    L,
                  )
                  .sendLogs("broadcast-batch-ack-sent-" + L),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:send] Successfully sent: msgId=",
                    ", ack=",
                    "",
                  ])),
                f,
                o("WAWebAck").ACK.SENT,
              ),
              o("WAWebBroadcastODS").bumpBroadcastSendSuccess(),
              u.postSuccess(),
              L == null && S(l),
              {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .OK,
                msgId: f,
              }
            );
          } catch (e) {
            var E = yield o(
              "WAWebBatchUpdateBroadcastAck",
            ).batchUpdateAckForBroadcastMessages(l, o("WAWebAck").ACK.FAILED);
            (E != null &&
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:send] batch ack failed post-send err=",
                      "",
                    ])),
                  E,
                )
                .sendLogs("broadcast-batch-ack-failed-" + E),
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:send] Send failed: recipientCount=",
                      ", ack=",
                      "",
                    ])),
                  g,
                  o("WAWebAck").ACK.FAILED,
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("broadcast-send-failure"),
              o("WAWebBroadcastODS").bumpBroadcastSendError(),
              u.postFailure({
                isTerminal: !1,
                result: o("WAWebWamEnumMessageSendResultType")
                  .MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
              }));
            var k =
              e instanceof o("WAWebHandleMsgError").MessageSentAckError
                ? e.ackErrorCode
                : null;
            return {
              messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                .ERROR_UNKNOWN,
              msgId: f,
              ackErrorCode: k,
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
            l = e.recipients.map(function (e, t) {
              return { lid: e, resolved: i[t] };
            }),
            s = null,
            u = null;
          try {
            var c = yield T(t, l, a);
            c != null && ((s = c.sharedSecret), (u = c.ephSettingMap));
          } catch (e) {
            (o("WAWebBroadcastODS").bumpBroadcastEphemeralSetupError(),
              o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:send] ephemeral setup failed, sending without DM",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("broadcast-ephemeral-setup-failed"));
          }
          var d = o(
              "WAWebBuildBroadcastMsgModels",
            ).buildBroadcastMsgModelsFromMsgData(t, i),
            m = o(
              "WAWebBuildBroadcastMsgModels",
            ).bulkBroadcastMessagesToBulkUpdateInput(d),
            p = m.chatsIdWithNewMsgs,
            _ = m.msgs;
          yield o("WAWebDBMessageBulkHelper").persistNewMessagesInBulk(_, p);
          var S = o("WAWebBroadcastMsgCollectionUtils").addMsgsToCollections(
              d.mainMessage,
              d.messageClones,
            ),
            R = new (o("WAWebMessageSendReporter").MessageSendReporter)(S, {
              frontendDeps: o("WAWebMessageSendReporterFrontendDeps")
                .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
            });
          R.setParticipantCount(e.recipients.length);
          var E = e.beforeSend;
          try {
            E != null &&
              (yield S.waitForPrep(),
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:send] Media prep complete: msgId=",
                    "",
                  ])),
                S.id,
              ),
              yield E(S),
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:send] Media upload complete: msgId=",
                    "",
                  ])),
                S.id,
              ),
              yield o(
                "WAWebBuildBroadcastMsgModels",
              ).propagateMediaFieldsToBroadcastClones(S),
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:send] media fields persisted to clones msgId=",
                    "",
                  ])),
                S.id,
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
              R.postFailure({
                isTerminal: !1,
                result: o("WAWebWamEnumMessageSendResultType")
                  .MESSAGE_SEND_RESULT_TYPE.ERROR_UPLOAD,
              }),
              yield S.updateAck(o("WAWebAck").ACK.FAILED),
              {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .ERROR_UPLOAD,
                msgId: S.id.toString(),
              }
            );
          }
          return L({
            authorId: a,
            businessMetadata: e.businessMetadata,
            ephemeralSharedSecret: s,
            ephSettingMap: u,
            msg: S,
            recipients: e.recipients,
            reporter: R,
          });
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = yield (b || (b = n("Promise"))).all(
            t.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = e.lid,
                      n = e.resolved;
                    return {
                      lid: t,
                      setting: yield o(
                        "WAWebBroadcastEphemeralUtils",
                      ).getBroadcastEphemeralSettingForRecipient(n),
                    };
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
          if (
            !a.some(function (e) {
              var t = e.setting;
              return t.duration > 0;
            }) ||
            !o("WAWebABProps").getABPropConfigValue(
              "wa_web_broadcast_disappearing_messages_fix",
            )
          )
            return null;
          var i = o(
              "WAWebEphemeralEncodeBroadcastSetting",
            ).generateEphemeralSharedSecret(),
            l = e.to,
            s = new Map(),
            u = [].concat(a, [
              { lid: r, setting: { duration: 0, timestamp: 0 } },
            ]);
          return (
            yield b.all(
              u.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = e.lid,
                        n = e.setting,
                        a = yield o(
                          "WAWebEphemeralEncodeBroadcastSetting",
                        ).encodeBroadcastEphemeralSetting({
                          broadcastJid: l,
                          duration: n.duration,
                          recipient: t,
                          sender: r,
                          sharedSecret: i,
                          timestamp: n.timestamp,
                        });
                      s.set(t.toString(), a);
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            { sharedSecret: i, ephSettingMap: s }
          );
        })),
        D.apply(this, arguments)
      );
    }
    l.sendBroadcastMsgAction = k;
  },
  98,
);
