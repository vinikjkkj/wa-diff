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
    var e, s, u, c, d, m, p, _;
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.chatId,
            a = t.metricReporter,
            i = t.msgProtobuf,
            l = t.msgRecord,
            f = t.scheduledMsgMetadata,
            g = l.data,
            C = g.botRespOrInvocationRevokeBotWid,
            b = g.id,
            v = g.invokedBotWid,
            S = g.protocolMessageKey,
            R = g.subtype,
            L = g.to;
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendUserMsg: sending ",
                  "",
                ])),
              b,
            )
            .tags("messaging");
          var E = L.isRegularUserPn()
            ? o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE()
            : o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow();
          L.isRegularUserPn() &&
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "encryptAndSendUserMsg: to=",
                  ", subtype=",
                  ", chatId:",
                  "",
                ])),
              L.toLogString(),
              R,
              r,
            ),
            o("WALogger")
              .LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendUserMsg: pn recipient found",
                  ])),
              )
              .sendLogs("send-user-msg-pn-recipient-fanout"));
          var k = { wids: [L, E] };
          L != null &&
            L.isUser() &&
            (k.chatWidSetToIncludeHostedInFanoutOneToOneChatOnly = L);
          var I = yield o("WAWebDBDeviceListFanout").getFanOutList(k);
          if (o("WAWebBotBaseGating").isBotEnabled())
            if (
              o("WAWebMsgGetters").getIsBotFeedbackMessage(l.data) &&
              S != null
            ) {
              var T;
              (!L.isBot() && S.participant != null
                ? (T = S.participant)
                : l.data.bizBotType != null
                  ? (T = L)
                  : (T = S.remote),
                (I = [
                  o(
                    "WAWebSimpleSignalPNToFBIDMigration",
                  ).maybeReplaceDeprecatedBotPnWithFbid(T),
                ]));
            } else if (v && v != null && v.isBot()) {
              var D = v;
              I = [].concat(I, [D]);
            } else
              C &&
                C != null &&
                C.isBot() &&
                (R === "sender_revoke" || R === "admin_revoke") &&
                (I = [].concat(I, [C]));
          o("WAWebBizCoexUtils").fanoutListContainsHostedDevice(I) &&
            o("WAWebDBUpdateMessageTable").updateMessageTable(l.data.id, {
              senderOrRecipientAccountTypeHosted: !0,
            });
          var x = yield o("WAWebSendMsgToDeviceList").sendMsgToDeviceList(
            l,
            i,
            I,
            { fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT },
            a,
            r,
            f,
          );
          h(L, x);
          var $ = x.phash;
          if ($ != null) {
            o("WALogger")
              .LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendUserMsg: phash mismatch, got server phash ",
                    "",
                  ])),
                $,
              )
              .tags("messaging");
            var P = o("WATimeUtils").unixTime();
            (o("WAWebPostMdDeviceSyncAckMetric").postMdDeviceSyncAckMetric(
              L,
              l,
              i,
            ),
              (a.sendReporter = a.createSendReporter({
                isResend: !0,
                originalMessage: l.type === "message" ? l.data : void 0,
              })),
              (_ || (_ = n("Promise")))
                .resolve()
                .then(function () {
                  if (!L.isLid())
                    return o("WAWebFetchResendMissingKeyJob")
                      .fetchResendMissingKeys([L, E])
                      .catch(function () {
                        o("WALogger")
                          .WARN(
                            d ||
                              (d = babelHelpers.taggedTemplateLiteralLoose([
                                "fetchResendMissingKeys: failed",
                              ])),
                          )
                          .sendLogs("fetchResendMissingKeys-sync-error");
                      });
                })
                .then(function () {
                  return o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob(
                    [L, E],
                    "message",
                    $,
                  );
                })
                .then(function () {
                  return y(l, i, I, P, a, r, f);
                })
                .catch(function (e) {
                  (o("WALogger")
                    .WARN(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
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
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
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
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
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
    function y(e, t, n, r, o, a, i) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(
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
        C.apply(this, arguments)
      );
    }
    ((l.encryptAndSendUserMsg = f), (l.maybeRefreshLid = h));
  },
  98,
);
