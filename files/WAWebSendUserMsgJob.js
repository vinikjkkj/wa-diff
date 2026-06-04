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
          var r,
            a = t.chatId,
            i = t.metricReporter,
            l = t.msgProtobuf,
            p = t.msgRecord,
            _ = t.scheduledMsgMetadata,
            h = p.data,
            y = h.botRespOrInvocationRevokeBotWid,
            C = h.id,
            b = h.invokedBotWid,
            v = h.protocolMessageKey,
            S = h.subtype,
            R = h.to;
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
          var L = R.isRegularUserPn()
              ? o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE()
              : (r = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid()) != null
                ? r
                : o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
            E = { wids: [R, L] };
          R != null &&
            R.isUser() &&
            (E.chatWidSetToIncludeHostedInFanoutOneToOneChatOnly = R);
          var k = yield o("WAWebDBDeviceListFanout").getFanOutList(E);
          if (o("WAWebBotBaseGating").isBotEnabled())
            if (
              o("WAWebMsgGetters").getIsBotFeedbackMessage(p.data) &&
              v != null
            ) {
              var I;
              (!R.isBot() && v.participant != null
                ? (I = v.participant)
                : p.data.bizBotType != null
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
          o("WAWebBizCoexUtils").fanoutListContainsHostedDevice(k) &&
            o("WAWebDBUpdateMessageTable").updateMessageTable(p.data.id, {
              senderOrRecipientAccountTypeHosted: !0,
            });
          var D = yield o("WAWebSendMsgToDeviceList").sendMsgToDeviceList(
            p,
            l,
            k,
            { fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT },
            i,
            a,
            _,
          );
          f(R, D);
          var x = D.phash;
          if (x != null) {
            o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendUserMsg: phash mismatch, got server phash ",
                    "",
                  ])),
                x,
              )
              .tags("messaging");
            var $ = o("WATimeUtils").unixTime();
            (o("WAWebPostMdDeviceSyncAckMetric").postMdDeviceSyncAckMetric(
              R,
              p,
              l,
            ),
              (i.sendReporter = i.createSendReporter({
                isResend: !0,
                originalMessage: p.type === "message" ? p.data : void 0,
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
                    x,
                  );
                })
                .then(function () {
                  return g(p, l, k, $, i, a, _);
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
                      p.data.id.toString(),
                      p.data.type,
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
          return D;
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
