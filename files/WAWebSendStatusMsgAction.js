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
    "WAWebLogStatusPosterActions",
    "WAWebMessageSendPerfReporter",
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
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n, r, a, i, l;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "sendStatusTextMsgAction: start to send text messege",
              ])),
          );
          var c = yield o("WAWebStatusMsgDataUtils").createTextStatusMsgData(t);
          c != null || s(0, 73062);
          var d = new (o("WAWebMsgModel").Msg)(c);
          d.wamMessageSendPerfReporter = new (o(
            "WAWebMessageSendPerfReporter",
          ).MessageSendPerfReporter)({
            chatWid: d.to,
            mediaType: o("WAWebWamMsgUtils").getWamMediaType(d),
            messageType: o("WAWebWamMsgUtils").getWamMessageType(d),
          });
          var m = o("WAWebSendMsgMetricReporter").createMsgModelMetricReporter(
            d,
          );
          return (
            (m.sendReporter =
              (n = m.sendReporter) != null ? n : m.createSendReporter()),
            (r = m.sendPerfReporter) == null || r.startRenderedStage(),
            yield o("WAWebStatusCollection").StatusCollection.addStatusMessages(
              d.author,
              [d],
            ),
            o("WAWebStatusCollection").StatusCollection.handleUpdate(c, !1),
            (a = m.sendPerfReporter) == null || a.postRenderedStage(),
            (i = m.sendPerfReporter) == null || i.startSavedStage(),
            yield o("WAWebDBProcessMessage").storeMessages([c], d.to),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "sendStatusTextMsgAction: store text messege",
                ])),
            ),
            (l = m.sendPerfReporter) == null || l.postSavedStage(),
            R(d, c, m)
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n, a, i, l, s, u, _;
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "sendStatusMediaMsgAction: start to send status messege",
              ])),
          );
          var f = babelHelpers.extends({}, e, {
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
                o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              ),
              cannotBeRanked: o(
                "WAWebStatusGatingUtils",
              ).canCheckStatusRankingPosterGating(),
            }),
            g = new (o("WAWebMsgModel").Msg)(f);
          g.wamMessageSendPerfReporter = new (o(
            "WAWebMessageSendPerfReporter",
          ).MessageSendPerfReporter)({
            chatWid: g.to,
            mediaType: o("WAWebWamMsgUtils").getWamMediaType(g),
            messageType: o("WAWebWamMsgUtils").getWamMessageType(g),
          });
          var h = o("WAWebSendMsgMetricReporter").createMsgModelMetricReporter(
            g,
          );
          ((h.sendReporter =
            (n = h.sendReporter) != null ? n : h.createSendReporter()),
            (a = h.sendPerfReporter) == null || a.startRenderedStage(),
            yield o("WAWebStatusCollection").StatusCollection.addStatusMessages(
              g.author,
              [g],
            ),
            o("WAWebStatusCollection").StatusCollection.handleUpdate(f, !1),
            (i = h.sendPerfReporter) == null || i.postRenderedStage(),
            (l = h.sendPerfReporter) == null || l.startSavedStage(),
            yield o("WAWebDBProcessMessage").storeMessages([f], g.to),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "sendStatusMediaMsgAction: store media messege",
                ])),
            ),
            (s = h.sendPerfReporter) == null || s.postSavedStage(),
            (u = h.sendPerfReporter) == null || u.startReadyToSendStage(),
            yield g.waitForPrep());
          try {
            yield t(g);
          } catch (e) {
            var y;
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
              (y = h.sendReporter) == null ||
                y.postFailure({
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
            (_ = h.sendPerfReporter) == null || _.postReadyToSendStage(),
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "sendStatusMediaMsgAction: media prep done for status messege",
                ])),
            ),
            R(g, f, h)
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n, r) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            (a === void 0 && (a = 0),
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "_sendStatusMessage: send status messege ",
                    "",
                  ])),
                e.id,
              ));
            var i = new (o(
                "WAWebLogStatusPosterActions",
              ).StatusPosterActionsLogger)(),
              l = y(e.type);
            i.logPostStatusRequest(l, a);
            var s = {
                type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
                data: e,
              },
              u = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
                o("WAWebOutgoingMessage").OutgoingMessageOriginType.Status,
                s,
              );
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "_sendStatusMessage: generate protobuf",
                ])),
            );
            try {
              var c;
              (yield o("WAWebEncryptAndSendStatusMsg").encryptAndSendStatusMsg(
                s,
                u,
                n,
              ),
                (c = n.sendReporter) == null || c.postSuccess(),
                e.updateAck(o("WAWebAck").ACK.SENT));
              var d = yield o("WAWebStatusLoggingUtils").statusIdForLogging(e);
              return (
                i.logPostStatusSuccess(l, d),
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
              var m = r("getErrorSafe")(t);
              (i.logPostStatusFailure(l, m == null ? void 0 : m.message, a),
                o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "_sendStatusMessage: failed with ",
                      "",
                    ])),
                  t,
                ));
              var p = yield r("WAWebUserPrefsStatus").getStatusPrivacySetting();
              return o("WAWebPostSendStatusFailure").postStatusSendFailure(
                m,
                n,
                p,
              );
            }
          },
        )),
        L.apply(this, arguments)
      );
    }
    ((l.sendStatusTextMsgAction = C), (l.sendStatusMediaMsgAction = v));
  },
  98,
);
