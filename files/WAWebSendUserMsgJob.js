__d(
  "WAWebSendUserMsgJob",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBizCoexGatingUtils",
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
    function p(e, t, n, r, o) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i, l) {
            var p,
              _ = t.data,
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
            var R = S.isRegularUserPn()
                ? o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE()
                : (p = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid()) != null
                  ? p
                  : o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
              L = { wids: [S, R] };
            o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
              S != null &&
              S.isUser() &&
              (L.chatWidSetToIncludeHostedInFanoutOneToOneChatOnly = S);
            var E = yield o("WAWebDBDeviceListFanout").getFanOutList(L);
            if (o("WAWebBotBaseGating").isBotEnabled())
              if (
                o("WAWebMsgGetters").getIsBotFeedbackMessage(t.data) &&
                b != null
              ) {
                var k;
                (!S.isBot() && b.participant != null
                  ? (k = b.participant)
                  : t.data.bizBotType != null
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
            o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
              o("WAWebBizCoexUtils").fanoutListContainsHostedDevice(E) &&
              o("WAWebDBUpdateMessageTable").updateMessageTable(t.data.id, {
                senderOrRecipientAccountTypeHosted: !0,
              });
            var T = yield o("WAWebSendMsgToDeviceList").sendMsgToDeviceList(
              t,
              r,
              E,
              { fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT },
              a,
              i,
              l,
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
                t,
                r,
              ),
                (a.sendReporter = a.createSendReporter({
                  isResend: !0,
                  originalMessage: t.type === "message" ? t.data : void 0,
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
                    return o(
                      "WAWebSyncDeviceAdvDeviceListJob",
                    ).syncDeviceListJob([S, R], "message", D);
                  })
                  .then(function () {
                    return g(t, r, E, x, a, i, l);
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
                        t.data.id.toString(),
                        t.data.type,
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
          },
        )),
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
