__d(
  "WAWebResendUserMsg",
  [
    "WAArrayDifferenceBy",
    "WALogger",
    "WATimeUtils",
    "WAWebDBDeviceListFanout",
    "WAWebMsgFanoutTypes",
    "WAWebMsgUtilsBridge",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgToDeviceList",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumMessageSendResultType",
    "asyncToGeneratorRuntime",
    "cr:10198",
    "cr:627",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.ackTime,
            r = t.chatId,
            a = t.excludeList,
            i = t.metricReporter,
            l = t.msgProtobuf,
            _ = t.msgRecord,
            f = t.scheduledMsgMetadata,
            h = _.data.to,
            y = _.data.id.id;
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "resendUserMsg: ",
                  " to ",
                  "",
                ])),
              y,
              h.toString(),
            )
            .tags("messaging");
          var C = o("WAWebSendMsgCommonApi").getResendTimeoutInSeconds();
          if (o("WATimeUtils").unixTime() - n > C) {
            var b;
            (o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "resendUserMsg: ",
                    ": skip resending due to ",
                    " min timeout",
                  ])),
                y,
                C / 60,
              )
              .tags("messaging"),
              (b = i.sendReporter) == null ||
                b.postFailure({
                  result: o("WAWebWamEnumMessageSendResultType")
                    .MESSAGE_SEND_RESULT_TYPE.ERROR_EXPIRED,
                  isTerminal: !1,
                }),
              (i.sendReporter = null));
            return;
          }
          try {
            var v = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
              S = yield o("WAWebDBDeviceListFanout").getFanOutList({
                wids: [h, v],
              }),
              R = o("WAArrayDifferenceBy").differenceBy(S, a, String);
            if (R.length === 0) {
              var L;
              if (yield g(h, v, a)) {
                var E;
                (o("WALogger")
                  .LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "resendUserMsg: ",
                        ": skip, only devices AEA excludes are missing",
                      ])),
                    y,
                  )
                  .tags("messaging"),
                  (E = i.sendReporter) == null || E.postSuccess(),
                  (i.sendReporter = null));
                return;
              }
              (o("WALogger")
                .LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "resendUserMsg: ",
                      ": skip resending to the empty list",
                    ])),
                  y,
                )
                .tags("messaging"),
                (L = i.sendReporter) == null ||
                  L.postFailure({
                    result: o("WAWebWamEnumMessageSendResultType")
                      .MESSAGE_SEND_RESULT_TYPE.ERROR_BACKFILL_USYNC_FAILED,
                    isTerminal: !1,
                  }),
                (i.sendReporter = null));
              return;
            }
            if (
              (o("WALogger")
                .LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "resendUserMsg: ",
                      ": resending to devices: ",
                      "",
                    ])),
                  y,
                  R.join(","),
                )
                .tags("messaging"),
              _.data.isOverwrittenByRevoke === !0)
            ) {
              o("WALogger")
                .LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "resendUserMsg: ",
                      ": skip, msg overwritten by revoke",
                    ])),
                  y,
                )
                .tags("messaging");
              return;
            }
            var k = yield o("WAWebSendMsgToDeviceList").sendMsgToDeviceList({
                chatId: r,
                deviceWids: R,
                metricReporter: i,
                msgProtobuf: l,
                msgRecord: _,
                option: {
                  fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT,
                  isResendingMsg: !0,
                },
                scheduledMsgMetadata: f,
              }),
              I = k.phash;
            I != null &&
              (o("WALogger")
                .LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "resendUserMsg: ",
                      ": got phash during the resend",
                    ])),
                  y,
                )
                .tags("messaging"),
              o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob(
                [h, v],
                "message",
                I,
              ));
          } catch (e) {
            var T;
            throw (
              (T = i.sendReporter) == null ||
                T.postFailure({
                  result: o("WAWebWamEnumMessageSendResultType")
                    .MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
                  isTerminal: !1,
                }),
              (i.sendReporter = null),
              e
            );
          }
          yield o("WAWebMsgUtilsBridge").logMessageSendForChatThreadLogging(
            _.data,
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          if (n("cr:627") == null || !e.isUser()) return !1;
          var a = o("WAArrayDifferenceBy").differenceBy(
              yield o("WAWebDBDeviceListFanout").getFanOutList({
                wids: [e, t],
                chatWidSetToIncludeHostedInFanoutOneToOneChatOnly: e,
              }),
              r,
              String,
            ),
            i = yield n("cr:627").getAeaExcludedSendDevices(e, a);
          return a.length > 0 && i.length === a.length;
        })),
        h.apply(this, arguments)
      );
    }
    l.resendUserMsg = _;
  },
  98,
);
