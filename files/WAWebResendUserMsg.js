__d(
  "WAWebResendUserMsg",
  [
    "WAArrayDifferenceBy",
    "WALogger",
    "WATimeUtils",
    "WAWebBizCoexUtils",
    "WAWebDBDeviceListFanout",
    "WAWebDBUpdateMessageTable",
    "WAWebMsgFanoutTypes",
    "WAWebMsgUtilsBridge",
    "WAWebSendMsgCommonApi",
    "WAWebSendMsgToDeviceList",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebUserUtils",
    "WAWebWamEnumMessageSendResultType",
    "cr:10198",
    "cr:627",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    async function h(t) {
      var n = t.ackTime,
        a = t.chatId,
        i = t.excludeList,
        l = t.metricReporter,
        f = t.msgProtobuf,
        g = t.msgRecord,
        h = t.scheduledMsgMetadata,
        b = g.data.to,
        v = g.data.id.id;
      o("WALogger")
        .LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "resendUserMsg: ",
              " to ",
              "",
            ])),
          v,
          b.toString(),
        )
        .tags("messaging");
      var S = o("WAWebSendMsgCommonApi").getResendTimeoutInSeconds();
      if (o("WATimeUtils").unixTime() - n > S) {
        var R;
        (o("WALogger")
          .LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "resendUserMsg: ",
                ": skip resending due to ",
                " min timeout",
              ])),
            v,
            S / 60,
          )
          .tags("messaging"),
          (R = l.sendReporter) == null ||
            R.postFailure({
              result: o("WAWebWamEnumMessageSendResultType")
                .MESSAGE_SEND_RESULT_TYPE.ERROR_EXPIRED,
              isTerminal: !1,
            }),
          (l.sendReporter = null));
        return;
      }
      try {
        var L = o("WAWebUserUtils").getMeDeviceLidOrThrow(),
          E = await o("WAWebDBDeviceListFanout").getFanOutList({
            chatWidSetToIncludeHostedInFanoutOneToOneChatOnly: b,
            wids: [b, L],
          }),
          k = await y(b, o("WAArrayDifferenceBy").differenceBy(E, i, String));
        if (k.length === 0) {
          var I;
          if (await C(b, L, i)) {
            var T;
            (o("WALogger")
              .LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea] resendUserMsg: ",
                    ": skip, only devices AEA excludes are missing",
                  ])),
                v,
              )
              .tags("messaging"),
              (T = l.sendReporter) == null || T.postSuccess(),
              (l.sendReporter = null));
            return;
          }
          (o("WALogger")
            .LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "resendUserMsg: ",
                  ": skip resending to the empty list",
                ])),
              v,
            )
            .tags("messaging"),
            (I = l.sendReporter) == null ||
              I.postFailure({
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
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "resendUserMsg: ",
                  ": resending to devices: ",
                  "",
                ])),
              v,
              k.join(","),
            )
            .tags("messaging"),
          g.data.isOverwrittenByRevoke === !0)
        ) {
          o("WALogger")
            .LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "resendUserMsg: ",
                  ": skip, msg overwritten by revoke",
                ])),
              v,
            )
            .tags("messaging");
          return;
        }
        o("WAWebBizCoexUtils").fanoutListContainsHostedDevice(k) &&
          o("WAWebDBUpdateMessageTable")
            .updateMessageTable(g.data.id, {
              senderOrRecipientAccountTypeHosted: !0,
            })
            .catch(function (e) {
              o("WALogger")
                .WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "resendUserMsg: ",
                      ": failed to persist the hosted marker",
                    ])),
                  v,
                )
                .catching(r("getErrorSafe")(e));
            });
        var D = await o("WAWebSendMsgToDeviceList").sendMsgToDeviceList({
            chatId: a,
            deviceWids: k,
            metricReporter: l,
            msgProtobuf: f,
            msgRecord: g,
            option: {
              fanoutType: o("WAWebMsgFanoutTypes").FanoutType.CHAT,
              isResendingMsg: !0,
            },
            scheduledMsgMetadata: h,
          }),
          x = D.phash;
        x != null &&
          (o("WALogger")
            .LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "resendUserMsg: ",
                  ": got phash during the resend",
                ])),
              v,
            )
            .tags("messaging"),
          o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob(
            [b, L],
            "message",
            x,
          ));
      } catch (e) {
        var $;
        throw (
          ($ = l.sendReporter) == null ||
            $.postFailure({
              result: o("WAWebWamEnumMessageSendResultType")
                .MESSAGE_SEND_RESULT_TYPE.ERROR_UNKNOWN,
              isTerminal: !1,
            }),
          (l.sendReporter = null),
          e
        );
      }
      await o("WAWebMsgUtilsBridge").logMessageSendForChatThreadLogging(g.data);
    }
    async function y(e, t) {
      if (
        n("cr:627") == null ||
        !o("WAWebBizCoexUtils").fanoutListContainsHostedDevice(t)
      )
        return t;
      try {
        return o("WAArrayDifferenceBy").differenceBy(
          t,
          await n("cr:627").getAeaExcludedSendDevices(e, t),
          String,
        );
      } catch (n) {
        return (
          o("WALogger")
            .WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[aea] resendUserMsg: failed to read the devices AEA excludes from ",
                  ", skipping hosted devices",
                ])),
              e.toLogString(),
            )
            .catching(r("getErrorSafe")(n))
            .sendLogs("aea-resend-excluded-devices-read-fail"),
          t.filter(function (t) {
            return !(t.isHosted() && t.isSameAccountAndAddressingMode(e));
          })
        );
      }
    }
    async function C(e, t, a) {
      if (n("cr:627") == null || !e.isUser()) return !1;
      try {
        var i = o("WAArrayDifferenceBy").differenceBy(
            await o("WAWebDBDeviceListFanout").getFanOutList({
              wids: [e, t],
              chatWidSetToIncludeHostedInFanoutOneToOneChatOnly: e,
            }),
            a,
            String,
          ),
          l = await n("cr:627").getAeaExcludedSendDevices(e, i);
        return i.length > 0 && l.length === i.length;
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[aea] resendUserMsg: failed to read the devices AEA excluded from ",
                  "",
                ])),
              e.toLogString(),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("aea-resend-missing-devices-read-fail"),
          !1
        );
      }
    }
    l.resendUserMsg = h;
  },
  98,
);
