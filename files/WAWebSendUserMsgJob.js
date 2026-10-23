__d(
  "WAWebSendUserMsgJob",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBizCoexUtils",
    "WAWebBotBaseGating",
    "WAWebDBDeviceListFanout",
    "WAWebDBUpdateMessageTable",
    "WAWebFetchResendMissingKeyJob",
    "WAWebLidMigrationUtils",
    "WAWebMsgFanoutTypes",
    "WAWebMsgGetters",
    "WAWebPostMdDeviceSyncAckMetric",
    "WAWebRequestMsgResend",
    "WAWebResendUserMsg",
    "WAWebSendMsgToDeviceList",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebUserPrefsMeUser",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "cr:10198",
    "cr:627",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.chatId,
            a = t.metricReporter,
            i = t.msgProtobuf,
            l = t.msgRecord,
            p = t.scheduledMsgMetadata,
            _ = l.data,
            y = _.botRespOrInvocationRevokeBotWid,
            C = _.id,
            b = _.invokedBotWid,
            v = _.protocolMessageKey,
            S = _.subtype,
            R = _.to;
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendUserMsg: sending ",
                  "",
                ])),
              C,
            )
            .tags("messaging");
          var L = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
            E = { wids: [R, L] };
          R != null &&
            R.isUser() &&
            (E.chatWidSetToIncludeHostedInFanoutOneToOneChatOnly = R);
          var k = yield o("WAWebDBDeviceListFanout").getFanOutList(E);
          if (o("WAWebBotBaseGating").isBotEnabled())
            if (
              o("WAWebMsgGetters").getIsBotFeedbackMessage(l.data) &&
              v != null
            ) {
              var I;
              (!R.isBot() && v.participant != null
                ? (I = v.participant)
                : l.data.bizBotType != null
                  ? (I = R)
                  : (I = v.remote),
                (k = [
                  o(
                    "WAWebSimpleSignalPNToFBIDMigration",
                  ).maybeReplaceDeprecatedBotPnWithFbid(I),
                ]));
            } else if (b && b != null && b.isBot()) {
              var T = b;
              k = [].concat(k, [T]);
            } else
              y &&
                y != null &&
                y.isBot() &&
                (S === "sender_revoke" || S === "admin_revoke") &&
                (k = [].concat(k, [y]));
          var D =
              n("cr:627") != null
                ? yield n("cr:627").captureAeaSendBaseline({
                    recipient: R,
                    fanoutDevices: k,
                    message: i,
                    msgRecord: l,
                  })
                : null,
            x;
          try {
            ((D == null ? void 0 : D.isEnforced) !== !0 &&
              o("WAWebBizCoexUtils").fanoutListContainsHostedDevice(k) &&
              o("WAWebDBUpdateMessageTable").updateMessageTable(l.data.id, {
                senderOrRecipientAccountTypeHosted: !0,
              }),
              (x = yield o("WAWebSendMsgToDeviceList").sendMsgToDeviceList({
                chatId: r,
                deviceWids: k,
                metricReporter: a,
                msgProtobuf: i,
                msgRecord: l,
                option: {
                  fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT,
                },
                scheduledMsgMetadata: p,
                aeaBaseline: D,
              })));
          } finally {
            n("cr:627") == null || n("cr:627").releaseAeaSendDecisionTurn(D);
          }
          f(R, x);
          var $ = x,
            P = $.phash;
          if (P != null) {
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendUserMsg: phash mismatch, got server phash ",
                    "",
                  ])),
                P,
              )
              .tags("messaging");
            var N = o("WATimeUtils").unixTime();
            (o("WAWebPostMdDeviceSyncAckMetric").postMdDeviceSyncAckMetric({
              chatWid: R,
              msgProtobuf: i,
              msgRecord: l,
            }),
              (a.sendReporter = a.createSendReporter({
                isResend: !0,
                originalMessage: l.type === "message" ? l.data : void 0,
              })),
              (m || (m = n("Promise")))
                .resolve()
                .then(function () {
                  if (!R.isLid())
                    return o("WAWebFetchResendMissingKeyJob")
                      .fetchResendMissingKeys([R, L])
                      .catch(function () {
                        o("WALogger")
                          .WARN(
                            u ||
                              (u = babelHelpers.taggedTemplateLiteralLoose([
                                "fetchResendMissingKeys: failed",
                              ])),
                          )
                          .sendLogs("fetchResendMissingKeys-sync-error");
                      });
                })
                .then(function () {
                  return o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob(
                    [R, L],
                    "message",
                    P,
                  );
                })
                .then(
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    return h({
                      ackTime: N,
                      chatId: r,
                      excludeList: g(k, D),
                      metricReporter: a,
                      msgProtobuf: i,
                      msgRecord: l,
                      scheduledMsgMetadata: p,
                    });
                  }),
                )
                .catch(function (e) {
                  (o("WALogger")
                    .WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "resendUserMsg: failed to resend message: ",
                          ", type: ",
                          "",
                        ])),
                      l.data.id.toString(),
                      l.data.type,
                    )
                    .tags("messaging"),
                    o("WALogger")
                      .ERROR(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "resendUserMsg: failed to resend message: ",
                            "",
                          ])),
                        e,
                      )
                      .tags("messaging")
                      .sendLogs("message-resend-failed", { sampling: 0.01 }));
                }));
          }
          return x;
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      var n = t.refreshLid;
      if (n) {
        var r = o("WAWebLidMigrationUtils").toPn(e);
        r &&
          o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
            "syncContactListJob",
            { contactIds: [r], shouldSyncDevice: !1, mode: "query" },
          );
      }
    }
    function g(e, t) {
      var r, o;
      return (t == null ? void 0 : t.isEnforced) !== !0 || n("cr:627") == null
        ? e
        : (r =
              (o = n("cr:627").getAeaDecidedSend(t)) == null
                ? void 0
                : o.devices) != null
          ? r
          : e;
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.ackTime,
            n = e.chatId,
            r = e.excludeList,
            a = e.metricReporter,
            i = e.msgProtobuf,
            l = e.msgRecord,
            s = e.scheduledMsgMetadata;
          yield o("WAWebRequestMsgResend").runUserMsgResendRecorded({
            ackTime: t,
            excludeList: r,
            msgRecord: l,
            resend: function () {
              return o("WAWebResendUserMsg").resendUserMsg({
                ackTime: t,
                chatId: n,
                excludeList: r,
                metricReporter: a,
                msgProtobuf: i,
                msgRecord: l,
                scheduledMsgMetadata: s,
              });
            },
          });
        })),
        y.apply(this, arguments)
      );
    }
    ((l.encryptAndSendUserMsg = p), (l.maybeRefreshLid = f));
  },
  98,
);
