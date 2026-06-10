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
    var e, s, u, c, d, m, p, _;
    function f(e, t, n, r, o, a, i) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a, i, l, f) {
            var g = t.data,
              h = g.subtype,
              y = g.to,
              C = t.data.id.id;
            o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "resendUserMsg: ",
                    " to ",
                    "",
                  ])),
                C,
                y.toString(),
              )
              .tags("messaging");
            var b = o("WAWebSendMsgCommonApi").getResendTimeoutInSeconds();
            if (o("WATimeUtils").unixTime() - a > b) {
              var v;
              (o("WALogger")
                .LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "resendUserMsg: ",
                      ": skip resending due to ",
                      " min timeout",
                    ])),
                  C,
                  b / 60,
                )
                .tags("messaging"),
                (v = i.sendReporter) == null ||
                  v.postFailure({
                    result: o("WAWebWamEnumMessageSendResultType")
                      .MESSAGE_SEND_RESULT_TYPE.ERROR_EXPIRED,
                    isTerminal: !1,
                  }),
                (i.sendReporter = null));
              return;
            }
            try {
              var S = y.isRegularUserPn()
                ? o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE()
                : o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow();
              y.isRegularUserPn() &&
                (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "resendUserMsg: to=",
                      ", subtype=",
                      ", chatId:",
                      "",
                    ])),
                  y.toLogString(),
                  h,
                  l,
                ),
                o("WALogger")
                  .LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "resendUserMsg: pn recipient found",
                      ])),
                  )
                  .sendLogs("resend-user-msg-pn-recipient-fanout"));
              var R = yield o("WAWebDBDeviceListFanout").getFanOutList({
                  wids: [y, S],
                }),
                L = o("WAArrayDifferenceBy").differenceBy(R, r, String);
              if (L.length === 0) {
                var E;
                (o("WALogger")
                  .LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "resendUserMsg: ",
                        ": skip resending to the empty list",
                      ])),
                    C,
                  )
                  .tags("messaging"),
                  (E = i.sendReporter) == null ||
                    E.postFailure({
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
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "resendUserMsg: ",
                        ": resending to devices: ",
                        "",
                      ])),
                    C,
                    L.join(","),
                  )
                  .tags("messaging"),
                t.data.isOverwrittenByRevoke === !0)
              ) {
                o("WALogger")
                  .LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "resendUserMsg: ",
                        ": skip, msg overwritten by revoke",
                      ])),
                    C,
                  )
                  .tags("messaging");
                return;
              }
              var k = yield o("WAWebSendMsgToDeviceList").sendMsgToDeviceList(
                  t,
                  n,
                  L,
                  {
                    fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT,
                    isResendingMsg: !0,
                  },
                  i,
                  l,
                  f,
                ),
                I = k.phash;
              I != null &&
                (o("WALogger")
                  .LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "resendUserMsg: ",
                        ": got phash during the resend",
                      ])),
                    C,
                  )
                  .tags("messaging"),
                o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob(
                  [y, S],
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
              t.data,
            );
          },
        )),
        g.apply(this, arguments)
      );
    }
    l.resendUserMsg = f;
  },
  98,
);
