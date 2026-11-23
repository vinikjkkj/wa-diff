__d(
  "WAWebUnscheduleMsgAction",
  [
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
    "WAWebUserUtils",
    "WAWebViewMode.flow",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(e, t, n) {
      var r = n === void 0 ? {} : n,
        o = r.shouldLogTap,
        a = o === void 0 ? !0 : o,
        i = await p(t);
      (await Promise.all(
        i.map(function (t) {
          return m(e, t, !1);
        }),
      ),
        await m(e, t, a));
    }
    async function m(t, n, a) {
      var i,
        l = await o("WAWebScheduledMsgRevealKeyStore").getRevealKeyByMsgId(n);
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
        o("WAWebScheduledMsgActionLogger").logScheduledMsgTapUnschedule(d, 1),
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
          ((i = d.groupMetadata) == null ? void 0 : i.isLidAddressingMode) ===
            !0,
        f = _
          ? o("WAWebUserUtils").getMeLidUserOrThrow()
          : o("WAWebUserUtils").getMeUserOrThrow(),
        g = m.isGroup() ? f : void 0,
        h = new (r("WAWebMsgKey"))({
          id: await r("WAWebMsgKey").newId(),
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
      await o("WAWebScheduledMsgUnscheduleDirectSend").sendUnscheduleStanza({
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
      });
      try {
        await o("WAWebScheduledMsgRevealKeyStore").deleteRevealKey(l.msgId);
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
    }
    async function p(e) {
      if (!e.includes("_")) return [];
      var t = await o(
        "WAWebDBGetAssociatedMsgsByParentMsgKey",
      ).bulkGetMessagesByParentMsgKey([r("WAWebMsgKey").fromString(e)]);
      return t.map(function (e) {
        return e.msgKey;
      });
    }
    l.unscheduleMsgAction = d;
  },
  98,
);
