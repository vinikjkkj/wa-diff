__d(
  "WAWebSendUserMsgJob",
  [
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
    "WAWebUserUtils",
    "WAWebWorkerSafeBackendApi",
    "cr:10198",
    "cr:627",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    async function m(t) {
      var r = t.chatId,
        a = t.metricReporter,
        i = t.msgProtobuf,
        l = t.msgRecord,
        m = t.scheduledMsgMetadata,
        g = l.data,
        h = g.botRespOrInvocationRevokeBotWid,
        y = g.id,
        C = g.invokedBotWid,
        b = g.protocolMessageKey,
        v = g.subtype,
        S = g.to;
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
      var R = o("WAWebUserUtils").getMeDeviceLidOrThrow(),
        L = { wids: [S, R] };
      S != null &&
        S.isUser() &&
        (L.chatWidSetToIncludeHostedInFanoutOneToOneChatOnly = S);
      var E = await o("WAWebDBDeviceListFanout").getFanOutList(L);
      if (o("WAWebBotBaseGating").isBotEnabled())
        if (o("WAWebMsgGetters").getIsBotFeedbackMessage(l.data) && b != null) {
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
      var T =
          n("cr:627") != null
            ? await n("cr:627").captureAeaSendBaseline({
                recipient: S,
                fanoutDevices: E,
                message: i,
                msgRecord: l,
              })
            : null,
        D;
      try {
        ((T == null ? void 0 : T.isEnforced) !== !0 &&
          o("WAWebBizCoexUtils").fanoutListContainsHostedDevice(E) &&
          o("WAWebDBUpdateMessageTable").updateMessageTable(l.data.id, {
            senderOrRecipientAccountTypeHosted: !0,
          }),
          (D = await o("WAWebSendMsgToDeviceList").sendMsgToDeviceList({
            chatId: r,
            deviceWids: E,
            metricReporter: a,
            msgProtobuf: i,
            msgRecord: l,
            option: { fanoutType: o("WAWebMsgFanoutTypes").FanoutType.CHAT },
            scheduledMsgMetadata: m,
            aeaBaseline: T,
          })));
      } finally {
        n("cr:627") == null || n("cr:627").releaseAeaSendDecisionTurn(T);
      }
      p(S, D);
      var x = D,
        $ = x.phash;
      if ($ != null) {
        o("WALogger")
          .LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendUserMsg: phash mismatch, got server phash ",
                "",
              ])),
            $,
          )
          .tags("messaging");
        var P = o("WATimeUtils").unixTime();
        (o("WAWebPostMdDeviceSyncAckMetric").postMdDeviceSyncAckMetric({
          chatWid: S,
          msgProtobuf: i,
          msgRecord: l,
        }),
          (a.sendReporter = a.createSendReporter({
            isResend: !0,
            originalMessage: l.type === "message" ? l.data : void 0,
          })),
          Promise.resolve()
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
                $,
              );
            })
            .then(async function () {
              return f({
                ackTime: P,
                chatId: r,
                excludeList: _(E, T),
                metricReporter: a,
                msgProtobuf: i,
                msgRecord: l,
                scheduledMsgMetadata: m,
              });
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
      return D;
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
    function _(e, t) {
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
    async function f(e) {
      var t = e.ackTime,
        n = e.chatId,
        r = e.excludeList,
        a = e.metricReporter,
        i = e.msgProtobuf,
        l = e.msgRecord,
        s = e.scheduledMsgMetadata;
      await o("WAWebRequestMsgResend").runUserMsgResendRecorded({
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
    }
    ((l.encryptAndSendUserMsg = m), (l.maybeRefreshLid = p));
  },
  98,
);
