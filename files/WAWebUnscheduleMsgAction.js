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
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a,
            i = yield o("WAWebScheduledMsgRevealKeyStore").getRevealKeyByMsgId(
              n,
            );
          if (i == null) {
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
          var l = o("WAWebChatCollection").ChatCollection.get(t);
          if (l == null)
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
          var d = l.id;
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][unschedule][action] unscheduling ",
                "",
              ])),
            n,
          );
          var m = r("WAWebMsgKey").fromString(i.msgId),
            p =
              d.isGroup() &&
              ((a = l.groupMetadata) == null
                ? void 0
                : a.isLidAddressingMode) === !0,
            _ = p
              ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
              : o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            f = d.isGroup() ? _ : void 0,
            g = new (r("WAWebMsgKey"))({
              id: yield r("WAWebMsgKey").newId(),
              remote: d,
              fromMe: !0,
              participant: f,
            }),
            h = new (o("WAWebMsgModel").Msg)({
              id: g,
              from: _,
              to: d,
              author: f,
              t: o("WATimeUtils").unixTime(),
              type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
              kind: o("WAWebMsgType").MsgKind.ProtocolRevoke,
              subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
                .ScheduledMessageUnschedule,
              protocolMessageKey: m,
              local: !0,
              viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
              isNewMsg: !0,
            });
          yield o("WAWebScheduledMsgUnscheduleDirectSend").sendUnscheduleStanza(
            {
              msgRecord: {
                type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
                data: h,
              },
              metricReporter: o(
                "WAWebSendMsgMetricReporter",
              ).createMsgModelMetricReporter(
                h,
                o("WAWebMessageSendReporterFrontendDeps")
                  .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
              ),
              chatWid: d,
              originalMsgKey: m,
              revealKeyId: i.revealKeyId,
            },
          );
          try {
            yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(i.msgId);
          } catch (e) {
            var y = r("getErrorSafe")(e);
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][unschedule][action] reveal-key del failed ",
                    ": ",
                    "",
                  ])),
                n,
                y,
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
