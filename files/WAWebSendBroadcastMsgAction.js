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
            a = e.ephemeralSharedSecret,
            i = e.ephSettingMap,
            l = e.msg,
            s = e.recipients,
            u = l.id.toString(),
            f = s.length;
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:send] Starting broadcast message send: msgId=",
                ",\n    recipients=",
                "",
              ])),
            u,
            f,
          );
          var g = {
              type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
              data: l,
            },
            h = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
              o("WAWebOutgoingMessage").OutgoingMessageOriginType.Chat,
              g,
            ),
            y = i;
          if (a != null) {
            var C = o("WAWebBroadcastEphemeralUtils").addSharedSecretToProto(
                h,
                a,
              ),
              b = C.injected,
              v = C.proto;
            ((h = v), b || (y = null));
          }
          o("WAWebBroadcastODS").bumpBroadcastSend();
          try {
            yield o(
              "WAWebEncryptAndSendBroadcastMsg",
            ).encryptAndSendBroadcastMsg(g, h, s, t, n, y);
            var R = yield o(
              "WAWebBatchUpdateBroadcastAck",
            ).batchUpdateAckForBroadcastMessages(l, o("WAWebAck").ACK.SENT);
            return (
              R != null &&
                o("WALogger")
                  .WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast:send] Batch ack update failed after send: error=",
                        "",
                      ])),
                    R,
                  )
                  .sendLogs("broadcast-batch-ack-sent-" + R),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:send] Successfully sent: msgId=",
                    ", ack=",
                    "",
                  ])),
                u,
                o("WAWebAck").ACK.SENT,
              ),
              o("WAWebBroadcastODS").bumpBroadcastSendSuccess(),
              R == null && S(l),
              {
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .OK,
                msgId: u,
              }
            );
          } catch (e) {
            var L = yield o(
              "WAWebBatchUpdateBroadcastAck",
            ).batchUpdateAckForBroadcastMessages(l, o("WAWebAck").ACK.FAILED);
            (L != null &&
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:send] Batch ack update failed after send failure: error=",
                      "",
                    ])),
                  L,
                )
                .sendLogs("broadcast-batch-ack-failed-" + L),
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:send] Send failed: recipientCount=",
                      ", ack=",
                      "",
                    ])),
                  f,
                  o("WAWebAck").ACK.FAILED,
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("broadcast-send-failure"),
              o("WAWebBroadcastODS").bumpBroadcastSendError());
            var E =
              e instanceof o("WAWebHandleMsgError").MessageSentAckError
                ? e.ackErrorCode
                : null;
            return {
              messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                .ERROR_UNKNOWN,
              msgId: u,
              ackErrorCode: E,
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
            R = e.beforeSend;
          try {
            R != null &&
              (yield S.waitForPrep(),
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:send] Media prep complete: msgId=",
                    "",
                  ])),
                S.id,
              ),
              yield R(S),
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
                    "[broadcast:send] Media fields persisted for all clone messages: msgId=",
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
