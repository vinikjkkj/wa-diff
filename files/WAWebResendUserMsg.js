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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.ackTime,
            r = t.chatId,
            a = t.excludeList,
            i = t.metricReporter,
            l = t.msgProtobuf,
            p = t.msgRecord,
            _ = t.scheduledMsgMetadata,
            f = p.data.to,
            g = p.data.id.id;
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "resendUserMsg: ",
                  " to ",
                  "",
                ])),
              g,
              f.toString(),
            )
            .tags("messaging");
          var h = o("WAWebSendMsgCommonApi").getResendTimeoutInSeconds();
          if (o("WATimeUtils").unixTime() - n > h) {
            var y;
            (o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "resendUserMsg: ",
                    ": skip resending due to ",
                    " min timeout",
                  ])),
                g,
                h / 60,
              )
              .tags("messaging"),
              (y = i.sendReporter) == null ||
                y.postFailure({
                  result: o("WAWebWamEnumMessageSendResultType")
                    .MESSAGE_SEND_RESULT_TYPE.ERROR_EXPIRED,
                  isTerminal: !1,
                }),
              (i.sendReporter = null));
            return;
          }
          try {
            var C = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
              b = yield o("WAWebDBDeviceListFanout").getFanOutList({
                wids: [f, C],
              }),
              v = o("WAArrayDifferenceBy").differenceBy(b, a, String);
            if (v.length === 0) {
              var S;
              (o("WALogger")
                .LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "resendUserMsg: ",
                      ": skip resending to the empty list",
                    ])),
                  g,
                )
                .tags("messaging"),
                (S = i.sendReporter) == null ||
                  S.postFailure({
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
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "resendUserMsg: ",
                      ": resending to devices: ",
                      "",
                    ])),
                  g,
                  v.join(","),
                )
                .tags("messaging"),
              p.data.isOverwrittenByRevoke === !0)
            ) {
              o("WALogger")
                .LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "resendUserMsg: ",
                      ": skip, msg overwritten by revoke",
                    ])),
                  g,
                )
                .tags("messaging");
              return;
            }
            var R = yield o("WAWebSendMsgToDeviceList").sendMsgToDeviceList({
                chatId: r,
                deviceWids: v,
                metricReporter: i,
                msgProtobuf: l,
                msgRecord: p,
                option: {
                  fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT,
                  isResendingMsg: !0,
                },
                scheduledMsgMetadata: _,
              }),
              L = R.phash;
            L != null &&
              (o("WALogger")
                .LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "resendUserMsg: ",
                      ": got phash during the resend",
                    ])),
                  g,
                )
                .tags("messaging"),
              o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob(
                [f, C],
                "message",
                L,
              ));
          } catch (e) {
            var E;
            throw (
              (E = i.sendReporter) == null ||
                E.postFailure({
                  result: o("WAWebWamEnumMessageSendResultType")
                    .MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
                  isTerminal: !1,
                }),
              (i.sendReporter = null),
              e
            );
          }
          yield o("WAWebMsgUtilsBridge").logMessageSendForChatThreadLogging(
            p.data,
          );
        })),
        _.apply(this, arguments)
      );
    }
    l.resendUserMsg = p;
  },
  98,
);
