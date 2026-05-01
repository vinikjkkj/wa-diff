__d(
  "WAWebResendUserMsg",
  [
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
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e, t, n, r, o, a, i) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i, l, p, _) {
            var f = t.data.to,
              g = t.data.id.id;
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
            if (o("WATimeUtils").unixTime() - i > h) {
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
                (y = l.sendReporter) == null ||
                  y.postFailure({
                    result: o("WAWebWamEnumMessageSendResultType")
                      .MESSAGE_SEND_RESULT_TYPE.ERROR_EXPIRED,
                    isTerminal: !1,
                  }),
                (l.sendReporter = null));
              return;
            }
            try {
              var C,
                b = f.isRegularUserPn()
                  ? o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE()
                  : (C = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid()) !=
                      null
                    ? C
                    : o(
                        "WAWebUserPrefsMeUser",
                      ).getMeDevicePnOrThrow_DO_NOT_USE(),
                v = yield o("WAWebDBDeviceListFanout").getFanOutList({
                  wids: [f, b],
                }),
                S = r("lodash").differenceBy(v, a, String);
              if (S.length === 0) {
                var R;
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
                  (R = l.sendReporter) == null ||
                    R.postFailure({
                      result: o("WAWebWamEnumMessageSendResultType")
                        .MESSAGE_SEND_RESULT_TYPE.ERROR_BACKFILL_USYNC_FAILED,
                      isTerminal: !1,
                    }),
                  (l.sendReporter = null));
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
                    S.join(","),
                  )
                  .tags("messaging"),
                t.data.isOverwrittenByRevoke === !0)
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
              var L = yield o("WAWebSendMsgToDeviceList").sendMsgToDeviceList(
                  t,
                  n,
                  S,
                  {
                    fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT,
                    isResendingMsg: !0,
                  },
                  l,
                  p,
                  _,
                ),
                E = L.phash;
              E != null &&
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
                  [f, b],
                  "message",
                  E,
                ));
            } catch (e) {
              var k;
              throw (
                (k = l.sendReporter) == null ||
                  k.postFailure({
                    result: o("WAWebWamEnumMessageSendResultType")
                      .MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
                    isTerminal: !1,
                  }),
                (l.sendReporter = null),
                e
              );
            }
            yield o("WAWebMsgUtilsBridge").logMessageSendForChatThreadLogging(
              t.data,
            );
          },
        )),
        _.apply(this, arguments)
      );
    }
    l.resendUserMsg = p;
  },
  98,
);
