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
    function p(e, t, n, r) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i) {
            var l,
              p = t.data,
              _ = p.botRespOrInvocationRevokeBotWid,
              h = p.id,
              y = p.invokedBotWid,
              C = p.protocolMessageKey,
              b = p.subtype,
              v = p.to;
            o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendUserMsg: sending ",
                    "",
                  ])),
                h,
              )
              .tags("messaging");
            var S = v.isRegularUserPn()
                ? o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE()
                : (l = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid()) != null
                  ? l
                  : o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
              R = { wids: [v, S] };
            o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
              v != null &&
              v.isUser() &&
              (R.chatWidSetToIncludeHostedInFanoutOneToOneChatOnly = v);
            var L = yield o("WAWebDBDeviceListFanout").getFanOutList(R);
            if (o("WAWebBotBaseGating").isBotEnabled())
              if (
                o("WAWebMsgGetters").getIsBotFeedbackMessage(t.data) &&
                C != null
              ) {
                var E;
                (!v.isBot() && C.participant != null
                  ? (E = C.participant)
                  : t.data.bizBotType != null
                    ? (E = v)
                    : (E = C.remote),
                  (L = [
                    o(
                      "WAWebSimpleSignalPNToFBIDMigration",
                    ).maybeReplaceDeprecatedBotPnWithFbid(E),
                  ]));
              } else if (y && y != null && y.isBot()) {
                var k = y;
                L = [].concat(L, [k]);
              } else
                _ &&
                  _ != null &&
                  _.isBot() &&
                  (b === "sender_revoke" || b === "admin_revoke") &&
                  (L = [].concat(L, [_]));
            o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
              o("WAWebBizCoexUtils").fanoutListContainsHostedDevice(L) &&
              o("WAWebDBUpdateMessageTable").updateMessageTable(t.data.id, {
                senderOrRecipientAccountTypeHosted: !0,
              });
            var I = yield o("WAWebSendMsgToDeviceList").sendMsgToDeviceList(
              t,
              r,
              L,
              { fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT },
              a,
              i,
            );
            f(v, I);
            var T = I.phash;
            if (T != null) {
              o("WALogger")
                .LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "encryptAndSendUserMsg: phash mismatch, got server phash ",
                      "",
                    ])),
                  T,
                )
                .tags("messaging");
              var D = o("WATimeUtils").unixTime();
              (o("WAWebPostMdDeviceSyncAckMetric").postMdDeviceSyncAckMetric(
                v,
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
                    if (!v.isLid())
                      return o("WAWebFetchResendMissingKeyJob")
                        .fetchResendMissingKeys([v, S])
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
                    ).syncDeviceListJob([v, S], "message", T);
                  })
                  .then(function () {
                    return g(t, r, L, D, a, i);
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
            return I;
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
    function g(e, t, n, r, o, a) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            var l = yield o("WAWebPersistedJobManagerWorkerCompatible")
              .getJobManager()
              .accessors.maybeCreateJob(
                o("WAWebPersistedJobDefinitions").jobSerializers.resendUserMsg(
                  e,
                  n,
                  r,
                ),
              );
            (yield o("WAWebResendUserMsg").resendUserMsg(e, t, n, r, a, i),
              yield o("WAWebPersistedJobManagerWorkerCompatible")
                .getJobManager()
                .accessors.deletePersistedJob(l.id));
          },
        )),
        h.apply(this, arguments)
      );
    }
    ((l.encryptAndSendUserMsg = p), (l.maybeRefreshLid = f));
  },
  98,
);
