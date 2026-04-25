__d(
  "WAWebRevokeStatusAction",
  [
    "invariant",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebDBMessageDelete",
    "WAWebDBProcessMessage",
    "WAWebEncryptAndSendStatusMsg",
    "WAWebLidStatusMigrationUtils",
    "WAWebLogStatusPosterActions",
    "WAWebLogStatusRevoke",
    "WAWebMessageSendPerfReporter",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebOutgoingMessage",
    "WAWebPostSendStatusFailure",
    "WAWebSendMsgMetricReporter",
    "WAWebSendMsgTypes",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsStatus",
    "WAWebViewMode.flow",
    "WAWebWamMsgUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e, u, c, d, m, p;
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a, i, l, _, f;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "sendStatusRevokeMsgAction: send revoke status messege ",
                "",
              ])),
            n.id,
          );
          var h = new (o(
            "WAWebLogStatusPosterActions",
          ).StatusPosterActionsLogger)();
          h.logDeleteStatusRequest();
          var y = yield g(n);
          y != null || s(0, 74709);
          var C = new (o("WAWebMsgModel").Msg)(y);
          C.wamMessageSendPerfReporter = new (o(
            "WAWebMessageSendPerfReporter",
          ).MessageSendPerfReporter)({
            chatWid: n.to,
            mediaType: o("WAWebWamMsgUtils").getWamMediaType(n),
            messageType: o("WAWebWamMsgUtils").getWamMessageType(n),
          });
          var b = o("WAWebSendMsgMetricReporter").createMsgModelMetricReporter(
            C,
            o("WAWebMessageSendReporterFrontendDeps")
              .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
          );
          ((b.sendReporter =
            (a = b.sendReporter) != null ? a : b.createSendReporter()),
            (i = b.sendPerfReporter) == null || i.startSavedStage(),
            yield o("WAWebDBProcessMessage").storeMessages([y], C.to),
            (l = b.sendPerfReporter) == null || l.postSavedStage(),
            (_ = b.sendPerfReporter) == null || _.startRenderedStage(),
            t.revokeMsgs([n.id.toString()]),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "sendStatusRevokeMsgAction: sending revoke msg ",
                  "",
                ])),
              n.id,
            ),
            (f = b.sendPerfReporter) == null || f.postRenderedStage());
          var v = {
              type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
              data: C,
            },
            S = o("WAWebOutgoingMessage").createOutgoingMessageProtobuf(
              o("WAWebOutgoingMessage").OutgoingMessageOriginType.Status,
              v,
            );
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "sendStatusRevokeMsgAction: generate protobuf ",
                "",
              ])),
            n.id,
          );
          try {
            var R;
            (yield o("WAWebEncryptAndSendStatusMsg").encryptAndSendStatusMsg(
              v,
              S,
              b,
            ),
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "sendStatusRevokeMsgAction: done",
                  ])),
              ),
              (R = b.sendReporter) == null || R.postSuccess(),
              h.logDeleteStatusSuccess(),
              o("WAWebLogStatusRevoke").logStatusRevoke(n),
              yield o("WAWebDBMessageDelete").removeStatusMessage([n]),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "sendStatusRevokeMsgAction: remove status from storage",
                  ])),
              ));
          } catch (e) {
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "sendStatusRevokeMsgAction: failed",
                ])),
            );
            var L = r("getErrorSafe")(e);
            h.logDeleteStatusFailure(L == null ? void 0 : L.message);
            var E = yield r("WAWebUserPrefsStatus").getStatusPrivacySetting();
            o("WAWebPostSendStatusFailure").postStatusSendFailure(L, b, E);
          }
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
          var t = o("WAWebWidFactory").createWid(o("WAJids").STATUS_JID),
            n = o("WAWebLidStatusMigrationUtils").matWidConvert(
              o("WAWebUserPrefsMeUser").getMeUser(),
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
        h.apply(this, arguments)
      );
    }
    ((l.sendStatusRevokeMsgAction = _), (l.createRevokeStatusMsgData = g));
  },
  98,
);
