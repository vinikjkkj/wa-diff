__d(
  "WAWebSendStatusMsgAction",
  [
    "invariant",
    "WALogger",
    "WAWebAck",
    "WAWebAutoCrosspostAction",
    "WAWebDBProcessMessage",
    "WAWebEncryptAndSendStatusMsg",
    "WAWebLidStatusMigrationUtils",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebOutgoingMessage",
    "WAWebPostSendStatusFailure",
    "WAWebSendMsgMetricReporter",
    "WAWebSendMsgResultAction",
    "WAWebSendMsgTypes",
    "WAWebStatusCollection",
    "WAWebStatusLoggingUtils",
    "WAWebStatusMsgDataUtils",
    "WAWebStatusPosterActionsLogger",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStatus",
    "WAWebWamEnumMessageSendResultType",
    "WAWebWamEnumStatusContentType",
    "WAWebWamMsgUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u, c, d, m, p, _, f, g, h;
    function y(e) {
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
    async function C(t, n) {
      var r, a, i, l, c;
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "sendStatusTextMsgAction: start to send text message",
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
              "sendStatusTextMsgAction: store text message",
            ])),
        ),
        (c = p.sendPerfReporter) == null || c.postSavedStage(),
        v({
          funnelContext: n,
          metricsReporter: p,
          msg: m,
          msgData: d,
          retryCount: 0,
        })
      );
    }
    async function b(e) {
      var t,
        n,
        a,
        i,
        l,
        s,
        u,
        _ = e.beforeSend,
        f = e.funnelContext,
        g = e.mediaMsgData;
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "sendStatusMediaMsgAction: start to send status message",
          ])),
      );
      var h = babelHelpers.extends({}, g, {
          id: new (r("WAWebMsgKey"))({
            fromMe: g.id.fromMe,
            remote: g.id.remote,
            id: g.id.id,
            participant: g.id.participant
              ? o("WAWebLidStatusMigrationUtils").matWidConvert(
                  g.id.participant,
                )
              : void 0,
          }),
          from: o("WAWebLidStatusMigrationUtils").matWidConvert(g.from),
          author: o("WAWebLidStatusMigrationUtils").matWidConvert(
            o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
          ),
          canBeReshared: !1,
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
        (t = C.sendReporter) != null ? t : C.createSendReporter()),
        (n = C.sendPerfReporter) == null || n.startRenderedStage(),
        o("WAWebStatusCollection").StatusCollection.handleUpdate(h, !1),
        await o("WAWebStatusCollection").StatusCollection.addStatusMessages(
          y.author,
          [y],
        ),
        (a = C.sendPerfReporter) == null || a.postRenderedStage(),
        (i = C.sendPerfReporter) == null || i.startSavedStage(),
        await o("WAWebDBProcessMessage").storeMessages([h], y.to),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "sendStatusMediaMsgAction: store media message",
            ])),
        ),
        (l = C.sendPerfReporter) == null || l.postSavedStage(),
        (s = C.sendPerfReporter) == null || s.startReadyToSendStage(),
        await y.waitForPrep());
      try {
        await _(y);
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
        (u = C.sendPerfReporter) == null || u.postReadyToSendStage(),
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "sendStatusMediaMsgAction: media prep done for status message",
            ])),
        ),
        v({
          funnelContext: f,
          metricsReporter: C,
          msg: y,
          msgData: h,
          retryCount: 0,
        })
      );
    }
    async function v(e) {
      var t = e.funnelContext,
        n = e.metricsReporter,
        a = e.msg,
        i = e.msgData,
        l = e.retryCount,
        s = l === void 0 ? 0 : l;
      o("WALogger").LOG(
        _ ||
          (_ = babelHelpers.taggedTemplateLiteralLoose([
            "_sendStatusMessage: send status message ",
            "",
          ])),
        a.id,
      );
      var u = new (o(
          "WAWebStatusPosterActionsLogger",
        ).StatusPosterActionsLogger)(t == null ? void 0 : t.sessionId),
        c = y(a.type);
      u.logPostStatusRequest(c, s, t == null ? void 0 : t.entryPoint);
      var d = {
          type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
          data: a,
        },
        m = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
          o("WAWebOutgoingMessage").OutgoingMessageOriginType.Status,
          d,
        );
      o("WALogger").LOG(
        f ||
          (f = babelHelpers.taggedTemplateLiteralLoose([
            "_sendStatusMessage: generate protobuf",
          ])),
      );
      try {
        var p;
        (await o("WAWebEncryptAndSendStatusMsg").encryptAndSendStatusMsg({
          metricsReporter: n,
          msgProtobuf: m,
          sendMsgRecord: d,
        }),
          (p = n.sendReporter) == null || p.postSuccess(),
          a.updateAck(o("WAWebAck").ACK.SENT));
        var C = await o("WAWebStatusLoggingUtils").statusIdForLogging(a);
        return (
          u.logPostStatusSuccess(c, C, t == null ? void 0 : t.entryPoint),
          o("WAWebAutoCrosspostAction").triggerAutoCrosspostIfEnabled(a),
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "_sendStatusMessage: done",
              ])),
          ),
          {
            messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult.OK,
            msg: a,
          }
        );
      } catch (e) {
        a.updateAck(o("WAWebAck").ACK.FAILED);
        var b = r("getErrorSafe")(e);
        (u.logPostStatusFailure({
          contentType: c,
          entryPoint: t == null ? void 0 : t.entryPoint,
          failureReason: b == null ? void 0 : b.message,
          retryCount: s,
        }),
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "_sendStatusMessage: failed with ",
                "",
              ])),
            e,
          ));
        var v = await o("WAWebUserPrefsStatus").getStatusPrivacySetting();
        return o("WAWebPostSendStatusFailure").postStatusSendFailure(b, n, v);
      }
    }
    ((l.getContentTypeForLogging = y),
      (l.sendStatusTextMsgAction = C),
      (l.sendStatusMediaMsgAction = b));
  },
  98,
);
