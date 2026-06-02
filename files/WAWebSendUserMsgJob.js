__d(
  "WAWebSendUserMsgJob",
  [
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
    "cr:10198",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    async function m(t) {
      var n,
        r = t.chatId,
        a = t.metricReporter,
        i = t.msgProtobuf,
        l = t.msgRecord,
        m = t.scheduledMsgMetadata,
        f = l.data,
        g = f.botRespOrInvocationRevokeBotWid,
        h = f.id,
        y = f.invokedBotWid,
        C = f.protocolMessageKey,
        b = f.subtype,
        v = f.to;
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
          : (n = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid()) != null
            ? n
            : o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
        R = { wids: [v, S] };
      o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
        v != null &&
        v.isUser() &&
        (R.chatWidSetToIncludeHostedInFanoutOneToOneChatOnly = v);
      var L = await o("WAWebDBDeviceListFanout").getFanOutList(R);
      if (o("WAWebBotBaseGating").isBotEnabled())
        if (o("WAWebMsgGetters").getIsBotFeedbackMessage(l.data) && C != null) {
          var E;
          (!v.isBot() && C.participant != null
            ? (E = C.participant)
            : l.data.bizBotType != null
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
          g &&
            g != null &&
            g.isBot() &&
            (b === "sender_revoke" || b === "admin_revoke") &&
            (L = [].concat(L, [g]));
      o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
        o("WAWebBizCoexUtils").fanoutListContainsHostedDevice(L) &&
        o("WAWebDBUpdateMessageTable").updateMessageTable(l.data.id, {
          senderOrRecipientAccountTypeHosted: !0,
        });
      var I = await o("WAWebSendMsgToDeviceList").sendMsgToDeviceList(
        l,
        i,
        L,
        { fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT },
        a,
        r,
        m,
      );
      p(v, I);
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
        (o("WAWebPostMdDeviceSyncAckMetric").postMdDeviceSyncAckMetric(v, l, i),
          (a.sendReporter = a.createSendReporter({
            isResend: !0,
            originalMessage: l.type === "message" ? l.data : void 0,
          })),
          Promise.resolve()
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
              return o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob(
                [v, S],
                "message",
                T,
              );
            })
            .then(function () {
              return _(l, i, L, D, a, r, m);
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
      return I;
    }
    function p(e, t) {
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
    async function _(e, t, n, r, a, i, l) {
      var s = await o("WAWebPersistedJobManagerWorkerCompatible")
        .getJobManager()
        .accessors.maybeCreateJob(
          o("WAWebPersistedJobDefinitions").jobSerializers.resendUserMsg(
            e,
            n,
            r,
          ),
        );
      (await o("WAWebResendUserMsg").resendUserMsg(e, t, n, r, a, i, l),
        await o("WAWebPersistedJobManagerWorkerCompatible")
          .getJobManager()
          .accessors.deletePersistedJob(s.id));
    }
    ((l.encryptAndSendUserMsg = m), (l.maybeRefreshLid = p));
  },
  98,
);
