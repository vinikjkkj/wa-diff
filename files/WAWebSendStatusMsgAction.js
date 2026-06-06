__d(
  "WAWebSendStatusMsgAction",
  [
    "invariant",
    "WAJids",
    "WALogger",
    "WANullthrows",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAddonConstants",
    "WAWebAddonProcessMsgs",
    "WAWebAutoCrosspostAction",
    "WAWebDBDeviceListFanout",
    "WAWebDBGetReactions",
    "WAWebDBProcessMessage",
    "WAWebEncryptAndSendStatusMsg",
    "WAWebLidStatusMigrationUtils",
    "WAWebLogStatusPosterActions",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgKeyUtils",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebOutgoingMessage",
    "WAWebPostSendStatusFailure",
    "WAWebReactionsUtils",
    "WAWebReferentialMsgKey",
    "WAWebSendMsgMetricReporter",
    "WAWebSendMsgResultAction",
    "WAWebSendMsgTypes",
    "WAWebSessionScope",
    "WAWebStatusCollection",
    "WAWebStatusGatingUtils",
    "WAWebStatusLoggingUtils",
    "WAWebStatusMsgDataUtils",
    "WAWebStatusSessionGatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStatus",
    "WAWebViewMode.flow",
    "WAWebWamEnumMessageSendResultType",
    "WAWebWamEnumStatusContentType",
    "WAWebWamMsgUtils",
    "WAWebWidFactory",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u, c, d, m, p, _, f, g, h, y;
    function C(e) {
      switch (e) {
        case "chat":
          return o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE.TEXT;
        case "image":
          return o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE.PHOTO;
        case "video":
          return o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE.VIDEO;
        case "gif":
        case "sticker":
          return o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE.GIF;
        case "ptt":
        case "audio":
          return o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE.VOICE;
        default:
          return o("WAWebWamEnumStatusContentType").STATUS_CONTENT_TYPE.PHOTO;
      }
    }
    async function b(t, n) {
      var r, a, i, l, c;
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "sendStatusTextMsgAction: start to send text messege",
          ])),
      );
      var d = await o("WAWebStatusMsgDataUtils").createTextStatusMsgData(t);
      d != null || s(0, 73062);
      var m = new (o("WAWebMsgModel").Msg)(d);
      m.wamMessageSendPerfReporter = new (o(
        "WAWebMessageSendPerfReporter",
      ).MessageSendPerfReporter)({
        chatWid: m.to,
        mediaType: o("WAWebWamMsgUtils").getWamMediaType(m),
        messageType: o("WAWebWamMsgUtils").getWamMessageType(m),
      });
      var p = o("WAWebSendMsgMetricReporter").createMsgModelMetricReporter(
        m,
        o("WAWebMessageSendReporterFrontendDeps")
          .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
      );
      return (
        (p.sendReporter =
          (r = p.sendReporter) != null ? r : p.createSendReporter()),
        (a = p.sendPerfReporter) == null || a.startRenderedStage(),
        o("WAWebStatusCollection").StatusCollection.handleUpdate(d, !1),
        await o("WAWebStatusCollection").StatusCollection.addStatusMessages(
          m.author,
          [m],
        ),
        (i = p.sendPerfReporter) == null || i.postRenderedStage(),
        (l = p.sendPerfReporter) == null || l.startSavedStage(),
        await o("WAWebDBProcessMessage").storeMessages([d], m.to),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "sendStatusTextMsgAction: store text messege",
            ])),
        ),
        (c = p.sendPerfReporter) == null || c.postSavedStage(),
        S(m, d, p, 0, n)
      );
    }
    async function v(e, t, n) {
      var a, i, l, s, u, _, f;
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "sendStatusMediaMsgAction: start to send status messege",
          ])),
      );
      var g = o("WAWebStatusGatingUtils").isStatusResharePosterSideEnabled()
          ? await r("WAWebUserPrefsStatus").getStatusReshareAllowed()
          : void 0,
        h = babelHelpers.extends({}, e, {
          id: new (r("WAWebMsgKey"))({
            fromMe: e.id.fromMe,
            remote: e.id.remote,
            id: e.id.id,
            participant: e.id.participant
              ? o("WAWebLidStatusMigrationUtils").matWidConvert(
                  e.id.participant,
                )
              : void 0,
          }),
          from: o("WAWebLidStatusMigrationUtils").matWidConvert(e.from),
          author: o("WAWebLidStatusMigrationUtils").matWidConvert(
            o("WAWebUserPrefsMeUser").getMeUser(),
          ),
          canBeReshared: g,
        }),
        y = new (o("WAWebMsgModel").Msg)(h);
      y.wamMessageSendPerfReporter = new (o(
        "WAWebMessageSendPerfReporter",
      ).MessageSendPerfReporter)({
        chatWid: y.to,
        mediaType: o("WAWebWamMsgUtils").getWamMediaType(y),
        messageType: o("WAWebWamMsgUtils").getWamMessageType(y),
      });
      var C = o("WAWebSendMsgMetricReporter").createMsgModelMetricReporter(
        y,
        o("WAWebMessageSendReporterFrontendDeps")
          .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
      );
      ((C.sendReporter =
        (a = C.sendReporter) != null ? a : C.createSendReporter()),
        (i = C.sendPerfReporter) == null || i.startRenderedStage(),
        o("WAWebStatusCollection").StatusCollection.handleUpdate(h, !1),
        await o("WAWebStatusCollection").StatusCollection.addStatusMessages(
          y.author,
          [y],
        ),
        (l = C.sendPerfReporter) == null || l.postRenderedStage(),
        (s = C.sendPerfReporter) == null || s.startSavedStage(),
        await o("WAWebDBProcessMessage").storeMessages([h], y.to),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "sendStatusMediaMsgAction: store media messege",
            ])),
        ),
        (u = C.sendPerfReporter) == null || u.postSavedStage(),
        (_ = C.sendPerfReporter) == null || _.startReadyToSendStage(),
        await y.waitForPrep());
      try {
        await t(y);
      } catch (e) {
        var b;
        return (
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[status] failed to send status message with ",
                  "",
                ])),
              e,
            )
            .sendLogs("status-send-media-error"),
          (b = C.sendReporter) == null ||
            b.postFailure({
              result: o("WAWebWamEnumMessageSendResultType")
                .MESSAGE_SEND_RESULT_TYPE.ERROR_UPLOAD,
              isTerminal: !0,
            }),
          {
            messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
              .ERROR_UPLOAD,
          }
        );
      }
      return (
        (f = C.sendPerfReporter) == null || f.postReadyToSendStage(),
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "sendStatusMediaMsgAction: media prep done for status messege",
            ])),
        ),
        S(y, h, C, 0, n)
      );
    }
    async function S(e, t, n, a, i) {
      (a === void 0 && (a = 0),
        o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "_sendStatusMessage: send status messege ",
              "",
            ])),
          e.id,
        ));
      var l = new (o("WAWebLogStatusPosterActions").StatusPosterActionsLogger)(
          i == null ? void 0 : i.sessionId,
        ),
        s = C(e.type);
      l.logPostStatusRequest(s, a, i == null ? void 0 : i.entryPoint);
      var u = {
          type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
          data: e,
        },
        c = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
          o("WAWebOutgoingMessage").OutgoingMessageOriginType.Status,
          u,
        );
      o("WALogger").LOG(
        f ||
          (f = babelHelpers.taggedTemplateLiteralLoose([
            "_sendStatusMessage: generate protobuf",
          ])),
      );
      try {
        var d;
        (await o("WAWebEncryptAndSendStatusMsg").encryptAndSendStatusMsg(
          u,
          c,
          n,
        ),
          (d = n.sendReporter) == null || d.postSuccess(),
          e.updateAck(o("WAWebAck").ACK.SENT));
        var m = await o("WAWebStatusLoggingUtils").statusIdForLogging(e);
        return (
          l.logPostStatusSuccess(s, m, i == null ? void 0 : i.entryPoint),
          o("WAWebAutoCrosspostAction").triggerAutoCrosspostIfEnabled(e),
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "_sendStatusMessage: done",
              ])),
          ),
          {
            messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.OK,
            msg: e,
          }
        );
      } catch (t) {
        e.updateAck(o("WAWebAck").ACK.FAILED);
        var p = r("getErrorSafe")(t);
        (l.logPostStatusFailure(
          s,
          p == null ? void 0 : p.message,
          a,
          i == null ? void 0 : i.entryPoint,
        ),
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "_sendStatusMessage: failed with ",
                "",
              ])),
            t,
          ));
        var y = await r("WAWebUserPrefsStatus").getStatusPrivacySetting();
        return o("WAWebPostSendStatusFailure").postStatusSendFailure(p, n, y);
      }
    }
    async function R(e, t) {
      try {
        var n = r("WANullthrows")(o("WAWebMsgGetters").getSender(e)),
          a = o("WAWebLidStatusMigrationUtils").matWidConvert(
            o("WAWebUserPrefsMeUser").getMeUser(),
          ),
          i = o("WAWebWidFactory").asUserWidOrThrow(
            o("WAWebLidStatusMigrationUtils").matWidConvert(n),
          ),
          l = new (r("WAWebMsgKey"))({
            fromMe: !0,
            remote: o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
            id: await r("WAWebMsgKey").newId(),
            participant: i,
          }),
          s = await L({ msgKey: l, reaction: t, parent: e }),
          u = await o(
            "WAWebAddonProcessMsgs",
          ).processOutgoingMsgOptimisticUpdate(
            o("WAWebAddonConstants").AddonProcessMode.Send,
            s,
          ),
          c = {
            type: o("WAWebSendMsgTypes").SendMessageRecordType.Addon,
            data: u.encryptedMsgData,
          },
          d = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
            o("WAWebOutgoingMessage").OutgoingMessageOriginType.Status,
            c,
          ),
          m = await o("WAWebDBDeviceListFanout").getFanOutList({
            wids: [i, a],
            shouldMergeAltDevices: !0,
          });
        (await o("WAWebEncryptAndSendStatusMsg").encryptAndSendStatusDirectMsg({
          deviceList: m,
          metricsReporter: o(
            "WAWebSendMsgMetricReporter",
          ).createMsgModelMetricReporter(new (o("WAWebMsgModel").Msg)(s)),
          msgProtobuf: d,
          sendMsgRecord: c,
          sessionScope: o(
            "WAWebStatusSessionGatingUtils",
          ).shouldUseStatusSessionForOutgoingMessage()
            ? o("WAWebSessionScope").SessionScope.STATUS
            : o("WAWebSessionScope").SessionScope.DEFAULT,
        }),
          o("WAWebReactionsUtils").updateRecentReaction(
            t,
            s.reactionTimestamp,
          ));
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "sendStatusReaction: failed with ",
                  "",
                ])),
              e,
            )
            .sendLogs("status-reaction-send-error"),
          r("err")("Status reaction send error")
        );
      }
    }
    async function L(e) {
      var t = e.msgKey,
        n = e.parent,
        r = e.reaction,
        a = o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
          t,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
        ),
        i = o("WATimeUtils").unixTime(),
        l = i * 1e3,
        s = await o(
          "WAWebDBGetReactions",
        ).existsReactionAddressingModeInsensitive({
          parentMsgKey: n.id.toString(),
          senderUserJid: a.from.toString(),
        });
      return (
        s && (l = Math.max(s.timestamp + 1, l)),
        babelHelpers.extends({ id: t }, a, {
          reactionParentKey: o("WAWebReferentialMsgKey").getReferentialMsgKey(
            n,
          ),
          type: o("WAWebMsgType").MSG_TYPE.REACTION,
          kind: o("WAWebMsgType").MsgKind.ReactionDecrypted,
          t: i,
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          ack: o("WAWebAck").ACK.CLOCK,
          reactionText: r,
          reactionTimestamp: l,
          read: !0,
        })
      );
    }
    ((l.sendStatusTextMsgAction = b),
      (l.sendStatusMediaMsgAction = v),
      (l.sendStatusReaction = R),
      (l.buildStatusReactionMsgData = L));
  },
  98,
);
