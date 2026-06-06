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
    "cr:10198",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    async function p(t, n, r, a, i, l, p) {
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
      if (o("WATimeUtils").unixTime() - a > g) {
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
          (h = i.sendReporter) == null ||
            h.postFailure({
              result: o("WAWebWamEnumMessageSendResultType")
                .MESSAGE_SEND_RESULT_TYPE.ERROR_EXPIRED,
              isTerminal: !1,
            }),
          (i.sendReporter = null));
        return;
      }
      try {
        var y,
          C = _.isRegularUserPn()
            ? o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE()
            : (y = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid()) != null
              ? y
              : o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
          b = await o("WAWebDBDeviceListFanout").getFanOutList({
            wids: [_, C],
          }),
          v = o("WAArrayDifferenceBy").differenceBy(b, r, String);
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
        var R = await o("WAWebSendMsgToDeviceList").sendMsgToDeviceList(
            t,
            n,
            v,
            {
              fanoutType: o("WAWebMsgFanoutTypes").FANOUT_TYPE.CHAT,
              isResendingMsg: !0,
            },
            i,
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
      await o("WAWebMsgUtilsBridge").logMessageSendForChatThreadLogging(t.data);
    }
    l.resendUserMsg = p;
  },
  98,
);
