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
            R(m, d, p, 0, n)
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
            R(C, y, b, 0, f)
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n, r, o) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            (a === void 0 && (a = 0),
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "_sendStatusMessage: send status message ",
                    "",
                  ])),
                e.id,
              ));
            var l = new (o(
                "WAWebStatusPosterActionsLogger",
              ).StatusPosterActionsLogger)(i == null ? void 0 : i.sessionId),
              s = y(e.type);
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
              (yield o("WAWebEncryptAndSendStatusMsg").encryptAndSendStatusMsg({
                metricsReporter: n,
                msgProtobuf: c,
                sendMsgRecord: u,
              }),
                (d = n.sendReporter) == null || d.postSuccess(),
                e.updateAck(o("WAWebAck").ACK.SENT));
              var m = yield o("WAWebStatusLoggingUtils").statusIdForLogging(e);
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
                  messageSendResult: o("WAWebSendMsgResultAction").SendMsgResult
                    .OK,
                  msg: e,
                }
              );
            } catch (t) {
              e.updateAck(o("WAWebAck").ACK.FAILED);
              var p = r("getErrorSafe")(t);
              (l.logPostStatusFailure({
                contentType: s,
                entryPoint: i == null ? void 0 : i.entryPoint,
                failureReason: p == null ? void 0 : p.message,
                retryCount: a,
              }),
                o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "_sendStatusMessage: failed with ",
                      "",
                    ])),
                  t,
                ));
              var C = yield r("WAWebUserPrefsStatus").getStatusPrivacySetting();
              return o("WAWebPostSendStatusFailure").postStatusSendFailure(
                p,
                n,
                C,
              );
            }
          },
        )),
        L.apply(this, arguments)
      );
    }
    ((l.getContentTypeForLogging = y),
      (l.sendStatusTextMsgAction = C),
      (l.sendStatusMediaMsgAction = v));
  },
  98,
);
