__d(
  "WAWebUnscheduleMsgAction",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebChatCollection",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebDBGetAssociatedMsgsByParentMsgKey",
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
    var e, s, u, c, d;
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var o = r === void 0 ? {} : r,
            a = o.shouldLogTap,
            i = a === void 0 ? !0 : a,
            l = yield g(t);
          (yield (d || (d = n("Promise"))).all(
            l.map(function (t) {
              return _(e, t, !1);
            }),
          ),
            yield _(e, t, i));
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i,
            l = yield o("WAWebScheduledMsgRevealKeyStore").getRevealKeyByMsgId(
              n,
            );
          if (l == null) {
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
          var d = o("WAWebChatCollection").ChatCollection.get(t);
          if (d == null)
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
          var m = d.id;
          (a &&
            o("WAWebScheduledMsgActionLogger").logScheduledMsgTapUnschedule(
              d,
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
          var p = r("WAWebMsgKey").fromString(l.msgId),
            _ =
              m.isGroup() &&
              ((i = d.groupMetadata) == null
                ? void 0
                : i.isLidAddressingMode) === !0,
            f = _
              ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
              : o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            g = m.isGroup() ? f : void 0,
            h = new (r("WAWebMsgKey"))({
              id: yield r("WAWebMsgKey").newId(),
              remote: m,
              fromMe: !0,
              participant: g,
            }),
            y = new (o("WAWebMsgModel").Msg)({
              id: h,
              from: f,
              to: m,
              author: g,
              t: o("WATimeUtils").unixTime(),
              type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
              kind: o("WAWebMsgType").MsgKind.ProtocolRevoke,
              subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
                .ScheduledMessageUnschedule,
              protocolMessageKey: p,
              local: !0,
              viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
              isNewMsg: !0,
            });
          yield o("WAWebScheduledMsgUnscheduleDirectSend").sendUnscheduleStanza(
            {
              msgRecord: {
                type: o("WAWebSendMsgTypes").SendMessageRecordType.Message,
                data: y,
              },
              metricReporter: o(
                "WAWebSendMsgMetricReporter",
              ).createMsgModelMetricReporter(
                y,
                o("WAWebMessageSendReporterFrontendDeps")
                  .MAIN_WEB_MESSAGE_SEND_REPORTER_FRONTEND_DEPS,
              ),
              chatWid: m,
              originalMsgKey: p,
              revealKeyId: l.revealKeyId,
            },
          );
          try {
            yield o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(l.msgId);
          } catch (e) {
            var C = r("getErrorSafe")(e);
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[scheduled_msg][unschedule][action] reveal-key del failed ",
                    ": ",
                    "",
                  ])),
                n,
                C,
              )
              .sendLogs("scheduled-msg-unschedule-delete-reveal-key-failed");
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!e.includes("_")) return [];
          var t = yield o(
            "WAWebDBGetAssociatedMsgsByParentMsgKey",
          ).bulkGetMessagesByParentMsgKey([r("WAWebMsgKey").fromString(e)]);
          return t.map(function (e) {
            return e.msgKey;
          });
        })),
        h.apply(this, arguments)
      );
    }
    l.unscheduleMsgAction = m;
  },
  98,
);
