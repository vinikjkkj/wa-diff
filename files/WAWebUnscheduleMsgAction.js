__d(
  "WAWebUnscheduleMsgAction",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebChatCollection",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebMessageSendReporterFrontendDeps",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebScheduledMsgActionLogger",
    "WAWebScheduledMsgRevealKeyStore",
    "WAWebScheduledMsgUnscheduleDirectSend",
    "WAWebSendMsgMetricReporter",
    "WAWebSendMsgTypes",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i,
            l = a === void 0 ? {} : a,
            d = l.shouldLogTap,
            m = d === void 0 ? !0 : d,
            p = yield o("WAWebScheduledMsgRevealKeyStore").getRevealKeyByMsgId(
              n,
            );
          if (p == null) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][unschedule][action] no reveal-key for ",
                  "",
                ])),
              n,
            );
            return;
          }
          var _ = o("WAWebChatCollection").ChatCollection.get(t);
          if (_ == null)
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[scheduled_msg][unschedule][action] chat ",
                      " not in collection",
                    ])),
                  t,
                )
                .sendLogs("scheduled-msg-unschedule-no-chat"),
              r("err")("[scheduled_msg] cannot resolve chat for unschedule")
            );
          var f = _.id;
          (m &&
            o("WAWebScheduledMsgActionLogger").logScheduledMsgTapUnschedule(
              _,
              1,
            ),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[scheduled_msg][unschedule][action] unscheduling ",
                  "",
                ])),
              n,
            ));
          var g = r("WAWebMsgKey").fromString(p.msgId),
            h =
              f.isGroup() &&
              ((i = _.groupMetadata) == null
                ? void 0
                : i.isLidAddressingMode) === !0,
            y = h
              ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
              : o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            C = f.isGroup() ? y : void 0,
            b = new (r("WAWebMsgKey"))({
              id: yield r("WAWebMsgKey").newId(),
              remote: f,
              fromMe: !0,
              participant: C,
            }),
            v = new (o("WAWebMsgModel").Msg)({
              id: b,
              from: y,
              to: f,
              author: C,
              t: o("WATimeUtils").unixTime(),
              type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
              kind: o("WAWebMsgType").MsgKind.ProtocolRevoke,
              subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
                .ScheduledMessageUnschedule,
              protocolMessageKey: g,
              local: !0,
              viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
              isNewMsg: !0,
            });
          yield o("WAWebScheduledMsgUnscheduleDirectSend").sendUnscheduleStanza(
            {
              msgRecord: {
                type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
                data: v,
              },
              metricReporter: o(
                "WAWebSendMsgMetricReporter",
              ).createMsgModelMetricReporter(
                v,
                o("WAWebMessageSendReporterFrontendDeps")
                  .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
              ),
              chatWid: f,
              originalMsgKey: g,
              revealKeyId: p.revealKeyId,
            },
          );
          try {
            yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(p.msgId);
          } catch (e) {
            var S = r("getErrorSafe")(e);
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][unschedule][action] reveal-key del failed ",
                    ": ",
                    "",
                  ])),
                n,
                S,
              )
              .sendLogs("scheduled-msg-unschedule-delete-reveal-key-failed");
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.unscheduleMsgAction = d;
  },
  98,
);
