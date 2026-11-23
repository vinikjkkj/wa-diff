__d(
  "WAWebSendBroadcastMsgAction",
  [
    "WALogger",
    "WAWebAck",
    "WAWebBatchUpdateBroadcastAck",
    "WAWebBroadcastEphemeralUtils",
    "WAWebBroadcastFanoutKeys",
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
    "WAWebMsgUtilsBridge",
    "WAWebOutgoingMessage",
    "WAWebSendMsgResultAction",
    "WAWebSendMsgTypes",
    "WAWebUserUtils",
    "WAWebViewMode.flow",
    "WAWebWamEnumMessageSendResultType",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C;
    function b() {
      return o("WAWebUserUtils").getMeLidUserOrThrow();
    }
    async function v(t) {
      try {
        var n = o("WAWebBroadcastFanoutKeys").getBroadcastFanoutKeys(t);
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
        a = e.contextSource,
        i = e.ephemeralSharedSecret,
        l = e.ephSettingMap,
        s = e.msg,
        u = e.recipients,
        f = e.reporter,
        g = s.id.toString(),
        h = u.length;
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "[broadcast:send] start msgId=",
            " rcpts=",
            "",
          ])),
        g,
        h,
      );
      var y = {
          type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
          data: s,
        },
        C = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
          o("WAWebOutgoingMessage").OutgoingMessageOriginType.Chat,
          y,
        ),
        b = l;
      if (i != null) {
        var S = o("WAWebBroadcastEphemeralUtils").addSharedSecretToProto(C, i),
          R = S.injected,
          L = S.proto;
        ((C = L), R || (b = null));
      }
      o("WAWebBroadcastODS").bumpBroadcastSend();
      try {
        await o("WAWebEncryptAndSendBroadcastMsg").encryptAndSendBroadcastMsg({
          authorId: t,
          businessMetadata: n,
          contextSource: a,
          ephSettingMap: b,
          msgProtobuf: C,
          recipients: u,
          sendMsgRecord: y,
        });
        var E = await o(
          "WAWebBatchUpdateBroadcastAck",
        ).batchUpdateAckForBroadcastMessages(s, o("WAWebAck").ACK.SENT);
        return (
          E != null &&
            o("WALogger")
              .WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:send] Batch ack update failed after send: error=",
                    "",
                  ])),
                E,
              )
              .sendLogs("broadcast-batch-ack-sent-" + E),
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:send] Successfully sent: msgId=",
                ", ack=",
                "",
              ])),
            g,
            o("WAWebAck").ACK.SENT,
          ),
          o("WAWebBroadcastODS").bumpBroadcastSendSuccess(),
          f.postSuccess(),
          E == null && v(s),
          {
            messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.OK,
            msgId: g,
          }
        );
      } catch (e) {
        var k = await o(
          "WAWebBatchUpdateBroadcastAck",
        ).batchUpdateAckForBroadcastMessages(s, o("WAWebAck").ACK.FAILED);
        (k != null &&
          o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:send] batch ack failed post-send err=",
                  "",
                ])),
              k,
            )
            .sendLogs("broadcast-batch-ack-failed-" + k),
          o("WALogger")
            .ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:send] Send failed: recipientCount=",
                  ", ack=",
                  "",
                ])),
              h,
              o("WAWebAck").ACK.FAILED,
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("broadcast-send-failure"),
          o("WAWebBroadcastODS").bumpBroadcastSendError(),
          f.postFailure({
            isTerminal: !1,
            result: o("WAWebWamEnumMessageSendResultType")
              .MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
          }));
        var I =
          e instanceof o("WAWebHandleMsgError").MessageSentAckError
            ? e.ackErrorCode
            : null;
        return {
          messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
            .ERROR_UNKNOWN,
          msgId: g,
          ackErrorCode: I,
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
        i = e.recipients.map(function (e, t) {
          return { lid: e, resolved: a[t] };
        }),
        l = null,
        s = null;
      try {
        var u = await L(t, i, n);
        u != null && ((l = u.sharedSecret), (s = u.ephSettingMap));
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
      var c = o(
          "WAWebBuildBroadcastMsgModels",
        ).buildBroadcastMsgModelsFromMsgData(t, a),
        d =
          e.isParentHidden === !0
            ? babelHelpers.extends({}, c, {
                mainMessage: babelHelpers.extends({}, c.mainMessage, {
                  viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
                }),
              })
            : c,
        m = o(
          "WAWebBuildBroadcastMsgModels",
        ).bulkBroadcastMessagesToBulkUpdateInput(d),
        p = m.chatsIdWithNewMsgs,
        _ = m.msgs;
      await o("WAWebDBMessageBulkHelper").persistNewMessagesInBulk(_, p);
      var v = o("WAWebBroadcastMsgCollectionUtils").addMsgsToCollections(
          d.mainMessage,
          d.messageClones,
        ),
        R = new (o("WAWebMessageSendReporter").MessageSendReporter)(v, {
          frontendDeps: o("WAWebMessageSendReporterFrontendDeps")
            .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
        });
      R.setParticipantCount(e.recipients.length);
      var E = e.beforeSend;
      try {
        E != null &&
          (await v.waitForPrep(),
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:send] Media prep complete: msgId=",
                "",
              ])),
            v.id,
          ),
          await E(v),
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:send] Media upload complete: msgId=",
                "",
              ])),
            v.id,
          ),
          await o(
            "WAWebBuildBroadcastMsgModels",
          ).propagateMediaFieldsToBroadcastClones(v),
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:send] media fields persisted to clones msgId=",
                "",
              ])),
            v.id,
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
          await v.updateAck(o("WAWebAck").ACK.FAILED),
          {
            messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
              .ERROR_UPLOAD,
            msgId: v.id.toString(),
          }
        );
      }
      return S({
        authorId: n,
        businessMetadata: e.businessMetadata,
        contextSource: e.contextSource,
        ephemeralSharedSecret: l,
        ephSettingMap: s,
        msg: v,
        recipients: e.recipients,
        reporter: R,
      });
    }
    async function L(e, t, n) {
      var r = await Promise.all(
        t.map(async function (e) {
          var t = e.lid,
            n = e.resolved;
          return {
            lid: t,
            setting: await o(
              "WAWebBroadcastEphemeralUtils",
            ).getBroadcastEphemeralSettingForRecipient(n),
          };
        }),
      );
      if (
        !r.some(function (e) {
          var t = e.setting;
          return t.duration > 0;
        })
      )
        return null;
      var a = o(
          "WAWebEphemeralEncodeBroadcastSetting",
        ).generateEphemeralSharedSecret(),
        i = e.to,
        l = new Map(),
        s = [].concat(r, [{ lid: n, setting: { duration: 0, timestamp: 0 } }]);
      return (
        await Promise.all(
          s.map(async function (e) {
            var t = e.lid,
              r = e.setting,
              s = await o(
                "WAWebEphemeralEncodeBroadcastSetting",
              ).encodeBroadcastEphemeralSetting({
                broadcastJid: i,
                duration: r.duration,
                recipient: t,
                sender: n,
                sharedSecret: a,
                timestamp: r.timestamp,
              });
            l.set(t.toString(), s);
          }),
        ),
        { sharedSecret: a, ephSettingMap: l }
      );
    }
    l.sendBroadcastMsgAction = R;
  },
  98,
);
