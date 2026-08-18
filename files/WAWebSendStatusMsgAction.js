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
    "WAWebStatusGatingUtils",
    "WAWebStatusLoggingUtils",
    "WAWebStatusMsgDataUtils",
    "WAWebStatusPosterActionsLogger",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStatus",
    "WAWebWamEnumMessageSendResultType",
    "WAWebWamEnumStatusContentType",
    "WAWebWamMsgUtils",
    "asyncToGeneratorRuntime",
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
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r, a, i, l, c;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "sendStatusTextMsgAction: start to send text message",
              ])),
          );
          var d = yield o("WAWebStatusMsgDataUtils").createTextStatusMsgData(t);
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
            yield o("WAWebStatusCollection").StatusCollection.addStatusMessages(
              m.author,
              [m],
            ),
            (i = p.sendPerfReporter) == null || i.postRenderedStage(),
            (l = p.sendPerfReporter) == null || l.startSavedStage(),
            yield o("WAWebDBProcessMessage").storeMessages([d], m.to),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "sendStatusTextMsgAction: store text message",
                ])),
            ),
            (c = p.sendPerfReporter) == null || c.postSavedStage(),
            R({
              funnelContext: n,
              metricsReporter: p,
              msg: m,
              msgData: d,
              retryCount: 0,
            })
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          var h = o("WAWebStatusGatingUtils").isStatusResharePosterSideEnabled()
              ? yield r("WAWebUserPrefsStatus").getStatusReshareAllowed()
              : void 0,
            y = babelHelpers.extends({}, g, {
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
              canBeReshared: h,
            }),
            C = new (o("WAWebMsgModel").Msg)(y);
          C.wamMessageSendPerfReporter = new (o(
            "WAWebMessageSendPerfReporter",
          ).MessageSendPerfReporter)({
            chatWid: C.to,
            mediaType: o("WAWebWamMsgUtils").getWamMediaType(C),
            messageType: o("WAWebWamMsgUtils").getWamMessageType(C),
          });
          var b = o("WAWebSendMsgMetricReporter").createMsgModelMetricReporter(
            C,
            o("WAWebMessageSendReporterFrontendDeps")
              .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
          );
          ((b.sendReporter =
            (t = b.sendReporter) != null ? t : b.createSendReporter()),
            (n = b.sendPerfReporter) == null || n.startRenderedStage(),
            o("WAWebStatusCollection").StatusCollection.handleUpdate(y, !1),
            yield o("WAWebStatusCollection").StatusCollection.addStatusMessages(
              C.author,
              [C],
            ),
            (a = b.sendPerfReporter) == null || a.postRenderedStage(),
            (i = b.sendPerfReporter) == null || i.startSavedStage(),
            yield o("WAWebDBProcessMessage").storeMessages([y], C.to),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "sendStatusMediaMsgAction: store media message",
                ])),
            ),
            (l = b.sendPerfReporter) == null || l.postSavedStage(),
            (s = b.sendPerfReporter) == null || s.startReadyToSendStage(),
            yield C.waitForPrep());
          try {
            yield _(C);
          } catch (e) {
            var v;
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
              (v = b.sendReporter) == null ||
                v.postFailure({
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
            (u = b.sendPerfReporter) == null || u.postReadyToSendStage(),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "sendStatusMediaMsgAction: media prep done for status message",
                ])),
            ),
            R({
              funnelContext: f,
              metricsReporter: b,
              msg: C,
              msgData: y,
              retryCount: 0,
            })
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            (yield o("WAWebEncryptAndSendStatusMsg").encryptAndSendStatusMsg({
              metricsReporter: n,
              msgProtobuf: m,
              sendMsgRecord: d,
            }),
              (p = n.sendReporter) == null || p.postSuccess(),
              a.updateAck(o("WAWebAck").ACK.SENT));
            var C = yield o("WAWebStatusLoggingUtils").statusIdForLogging(a);
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
                messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                  .OK,
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
            var v = yield r("WAWebUserPrefsStatus").getStatusPrivacySetting();
            return o("WAWebPostSendStatusFailure").postStatusSendFailure(
              b,
              n,
              v,
            );
          }
        })),
        L.apply(this, arguments)
      );
    }
    ((l.getContentTypeForLogging = y),
      (l.sendStatusTextMsgAction = C),
      (l.sendStatusMediaMsgAction = v));
  },
  98,
);
