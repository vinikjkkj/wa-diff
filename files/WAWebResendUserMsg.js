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
    function p(e, t, n, r, o, a) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i, l, p) {
            var _ = t.data.to,
              f = t.data.id.id;
            o("WALogger")
              .LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "resendUserMsg: ",
                    " to ",
                    "",
                  ])),
                f,
                _.toString(),
              )
              .tags("messaging");
            var g = o("WAWebSendMsgCommonApi").getResendTimeoutInSeconds();
            if (o("WATimeUtils").unixTime() - i > g) {
              var h;
              (o("WALogger")
                .LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "resendUserMsg: ",
                      ": skip resending due to ",
                      " min timeout",
                    ])),
                  f,
                  g / 60,
                )
                .tags("messaging"),
                (h = l.sendReporter) == null ||
                  h.postFailure({
                    result: o("WAWebWamEnumMessageSendResultType")
                      .MESSAGE_SEND_RESULT_TYPE.ERROR_EXPIRED,
                    isTerminal: !1,
                  }),
                (l.sendReporter = null));
              return;
            }
            try {
              var y,
                C =
                  _.isLid() &&
                  (y = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid()) != null
                    ? y
                    : o(
                        "WAWebUserPrefsMeUser",
                      ).getMeDevicePnOrThrow_DO_NOT_USE(),
                b = yield o("WAWebDBDeviceListFanout").getFanOutList({
                  wids: [_, C],
                }),
                v = r("lodash").differenceBy(b, a, String);
              if (v.length === 0) {
                var S;
                (o("WALogger")
                  .LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "resendUserMsg: ",
                        ": skip resending to the empty list",
                      ])),
                    f,
                  )
                  .tags("messaging"),
                  (S = l.sendReporter) == null ||
                    S.postFailure({
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
                    f,
                    v.join(","),
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
                    f,
                  )
                  .tags("messaging");
                return;
              }
              var R = yield o("WAWebSendMsgToDeviceList").sendMsgToDeviceList(
                  t,
                  n,
                  v,
                  {
                    fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT,
                    isResendingMsg: !0,
                  },
                  l,
                  p,
                ),
                L = R.phash;
              L != null &&
                (o("WALogger")
                  .LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "resendUserMsg: ",
                        ": got phash during the resend",
                      ])),
                    f,
                  )
                  .tags("messaging"),
                o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob(
                  [_, C],
                  "message",
                  L,
                ));
            } catch (e) {
              var E;
              throw (
                (E = l.sendReporter) == null ||
                  E.postFailure({
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
