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
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebPostMdDeviceSyncAckMetric",
    "WAWebResendUserMsg",
    "WAWebSendMsgToDeviceList",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebUserPrefsMeUser",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "cr:10198",
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
            h = _.botRespOrInvocationRevokeBotWid,
            y = _.id,
            C = _.invokedBotWid,
            b = _.protocolMessageKey,
            v = _.subtype,
            S = _.to;
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendUserMsg: sending ",
                  "",
                ])),
              y,
            )
            .tags("messaging");
          var R = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
            L = { wids: [S, R] };
          S != null &&
            S.isUser() &&
            (L.chatWidSetToIncludeHostedInFanoutOneToOneChatOnly = S);
          var E = yield o("WAWebDBDeviceListFanout").getFanOutList(L);
          if (o("WAWebBotBaseGating").isBotEnabled())
            if (
              o("WAWebMsgGetters").getIsBotFeedbackMessage(l.data) &&
              b != null
            ) {
              var k;
              (!S.isBot() && b.participant != null
                ? (k = b.participant)
                : l.data.bizBotType != null
                  ? (k = S)
                  : (k = b.remote),
                (E = [
                  o(
                    "WAWebSimpleSignalPNToFBIDMigration",
                  ).maybeReplaceDeprecatedBotPnWithFbid(k),
                ]));
            } else if (C && C != null && C.isBot()) {
              var I = C;
              E = [].concat(E, [I]);
            } else
              h &&
                h != null &&
                h.isBot() &&
                (v === "sender_revoke" || v === "admin_revoke") &&
                (E = [].concat(E, [h]));
          o("WAWebBizCoexUtils").fanoutListContainsHostedDevice(E) &&
            o("WAWebDBUpdateMessageTable").updateMessageTable(l.data.id, {
              senderOrRecipientAccountTypeHosted: !0,
            });
          var T = yield o("WAWebSendMsgToDeviceList").sendMsgToDeviceList(
            l,
            i,
            E,
            { fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT },
            a,
            r,
            p,
          );
          f(S, T);
          var D = T.phash;
          if (D != null) {
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendUserMsg: phash mismatch, got server phash ",
                    "",
                  ])),
                D,
              )
              .tags("messaging");
            var x = o("WATimeUtils").unixTime();
            (o("WAWebPostMdDeviceSyncAckMetric").postMdDeviceSyncAckMetric(
              S,
              l,
              i,
            ),
              (a.sendReporter = a.createSendReporter({
                isResend: !0,
                originalMessage: l.type === "message" ? l.data : void 0,
              })),
              (m || (m = n("Promise")))
                .resolve()
                .then(function () {
                  if (!S.isLid())
                    return o("WAWebFetchResendMissingKeyJob")
                      .fetchResendMissingKeys([S, R])
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
                    [S, R],
                    "message",
                    D,
                  );
                })
                .then(function () {
                  return g(l, i, E, x, a, r, p);
                })
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
          return T;
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
    function g(e, t, n, r, o, a, i) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i, l) {
            var s = yield o("WAWebPersistedJobManagerWorkerCompatible")
              .getJobManager()
              .accessors.maybeCreateJob(
                o("WAWebPersistedJobDefinitions").jobSerializers.resendUserMsg(
                  e,
                  n,
                  r,
                ),
              );
            (yield o("WAWebResendUserMsg").resendUserMsg(e, t, n, r, a, i, l),
              yield o("WAWebPersistedJobManagerWorkerCompatible")
                .getJobManager()
                .accessors.deletePersistedJob(s.id));
          },
        )),
        h.apply(this, arguments)
      );
    }
    ((l.encryptAndSendUserMsg = p), (l.maybeRefreshLid = f));
  },
  98,
);
