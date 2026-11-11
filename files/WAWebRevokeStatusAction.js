__d(
  "WAWebRevokeStatusAction",
  [
    "invariant",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebBackendRuntime",
    "WAWebDBMessageDelete",
    "WAWebDBProcessMessage",
    "WAWebDBUpdateMessageTable",
    "WAWebEncryptAndSendStatusMsg",
    "WAWebFrontendMsgGetters",
    "WAWebLidStatusMigrationUtils",
    "WAWebLogStatusRevoke",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMessageStoreService",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebOutgoingMessage",
    "WAWebPostSendStatusFailure",
    "WAWebSendMsgMetricReporter",
    "WAWebSendMsgResultAction",
    "WAWebSendMsgTypes",
    "WAWebStatusPosterActionsLogger",
    "WAWebUserPrefsStatus",
    "WAWebUserUtils",
    "WAWebViewMode.flow",
    "WAWebWamMsgUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = new Map();
    function p(e, t) {
      var n = t.id.toString(),
        r = m.get(n);
      if (r != null) return r;
      var o = _(e, t).finally(function () {
        m.delete(n);
      });
      return (m.set(n, o), o);
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a, i, l;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "sendStatusRevokeMsgAction: send revoke status message ",
                "",
              ])),
            n.id,
          );
          var s = new (o(
            "WAWebStatusPosterActionsLogger",
          ).StatusPosterActionsLogger)();
          if (
            (s.logDeleteStatusRequest(),
            o("WAWebFrontendMsgGetters").getIsUnsentMedia(n) &&
              o("WAWebMsgGetters").getAck(n) === o("WAWebAck").ACK.CLOCK)
          )
            return (
              s.logDeleteStatusFailure("media_upload_pending"),
              o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN
            );
          var m;
          try {
            m = yield g(n);
          } catch (e) {
            var p;
            return (
              s.logDeleteStatusFailure(
                (p = r("getErrorSafe")(e)) == null ? void 0 : p.message,
              ),
              o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN
            );
          }
          var _ = m,
            f = _.metricsReporter,
            h = _.rec,
            C = _.sendMsgRecordType;
          try {
            yield o("WAWebEncryptAndSendStatusMsg").encryptAndSendStatusMsg({
              metricsReporter: f,
              msgProtobuf: o(
                "WAWebOutgoingMessage",
              ).createOutgoingMessageProtobuf(
                o("WAWebOutgoingMessage").OutgoingMessageOriginType.Status,
                C,
              ),
              sendMsgRecord: C,
            });
          } catch (e) {
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "sendStatusRevokeMsgAction: failed",
                ])),
            ),
              yield y(h, e));
            var b = r("getErrorSafe")(e);
            s.logDeleteStatusFailure(b == null ? void 0 : b.message);
            var v = yield o("WAWebUserPrefsStatus").getStatusPrivacySetting();
            return (
              o("WAWebPostSendStatusFailure").postStatusSendFailure(b, f, v),
              o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN
            );
          }
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "sendStatusRevokeMsgAction: done",
              ])),
          ),
            yield o("WAWebDBUpdateMessageTable")
              .updateMessageTable(h.id, { ack: o("WAWebAck").ACK.SENT })
              .catch(r("WAWebNoop")),
            (a = f.sendReporter) == null || a.postSuccess(),
            o("WAWebLogStatusRevoke").logStatusRevoke(n));
          try {
            yield (
              o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebMessageStoreService").MessageStoreService,
                  ).removeStatusMessage
                : o("WAWebDBMessageDelete").removeStatusMessage
            )([n]);
          } catch (e) {
            var S;
            return (
              o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "sendStatusRevokeMsgAction: revoke sent, local delete failed",
                  ])),
              ),
              s.logDeleteStatusFailure(
                (S = r("getErrorSafe")(e)) == null ? void 0 : S.message,
              ),
              o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UNKNOWN
            );
          }
          return (
            (i = f.sendPerfReporter) == null || i.startRenderedStage(),
            t.revokeMsgs([n.id.toString()]),
            (l = f.sendPerfReporter) == null || l.postRenderedStage(),
            s.logDeleteStatusSuccess(),
            o("WAWebSendMsgResultAction").SendMsgResult.OK
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r,
            a = yield C(e);
          a != null || s(0, 74709);
          var i = new (o("WAWebMsgModel").Msg)(a);
          i.wamMessageSendPerfReporter = new (o(
            "WAWebMessageSendPerfReporter",
          ).MessageSendPerfReporter)({
            chatWid: e.to,
            mediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
            messageType: o("WAWebWamMsgUtils").getWamMessageType(e),
          });
          var l = o("WAWebSendMsgMetricReporter").createMsgModelMetricReporter(
            i,
            o("WAWebMessageSendReporterFrontendDeps")
              .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
          );
          return (
            (l.sendReporter =
              (t = l.sendReporter) != null ? t : l.createSendReporter()),
            (n = l.sendPerfReporter) == null || n.startSavedStage(),
            yield (
              o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebMessageStoreService").MessageStoreService,
                  ).storeMessages
                : o("WAWebDBProcessMessage").storeMessages
            )([a], i.to),
            (r = l.sendPerfReporter) == null || r.postSavedStage(),
            {
              metricsReporter: l,
              rec: i,
              sendMsgRecordType: {
                type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
                data: i,
              },
            }
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      var n =
        t instanceof o("WAWebEncryptAndSendStatusMsg").StatusServerRejectedError
          ? { isSendFailure: !0, ack: o("WAWebAck").ACK.FAILED }
          : { isSendFailure: !0 };
      return (
        e.set(n),
        o("WAWebDBUpdateMessageTable")
          .updateMessageTable(e.id, n)
          .catch(r("WAWebNoop"))
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
            n = o("WAWebLidStatusMigrationUtils").matWidConvert(
              o("WAWebUserUtils").getMeUserOrThrow(),
            ),
            a = o("WAWebLidStatusMigrationUtils").matWidConvert(n),
            i = new (r("WAWebMsgKey"))({
              from: n,
              to: t,
              id: yield r("WAWebMsgKey").newId(),
              participant: a,
              selfDir: "out",
            }),
            l = o("WATimeUtils").unixTime(),
            s = {
              id: i,
              author: n,
              type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
              kind: o("WAWebMsgType").MsgKind.ProtocolRevoke,
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              subtype: "sender_revoke",
              t: l,
              from: n,
              to: t,
              local: !0,
              revokeDuration: l - e.t,
              revokeTimestamp: l,
              protocolMessageKey: e.id,
              ack: o("WAWebAck").ACK.CLOCK,
            };
          return s;
        })),
        b.apply(this, arguments)
      );
    }
    ((l.sendStatusRevokeMsgAction = p), (l.createRevokeStatusMsgData = C));
  },
  98,
);
