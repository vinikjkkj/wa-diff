__d(
  "WAWebSendSpamChatAction",
  [
    "fbt",
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebBlockContactAction",
    "WAWebBlocklistUtils",
    "WAWebChatGetters",
    "WAWebExitGroupAction",
    "WAWebFrontendMsgGetters",
    "WAWebMiscErrors",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingLoggingEvents",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebPrivateMessageComplianceUtils",
    "WAWebReportGatingUtils",
    "WAWebReportSpamJob",
    "WAWebSendClearChatAction",
    "WAWebSmb1pdConversionSignalAction",
    "WAWebSpamConstants",
    "WAWebSpamReportAttempt",
    "WAWebStateUtils",
    "WAWebToastManager",
    "gkx",
    "react",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _ = p || (p = o("react")),
      f = r("requireDeferred")("WAWebComplianceReportTrigger").__setRef(
        "WAWebSendSpamChatAction",
      );
    function g(e) {
      var t,
        n = e.chat,
        r = e.msg,
        a = e.msgType,
        i = e.skipCtwa1pdNbfSignal,
        l = e.spamFlow;
      if (
        o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingCollectionEnabled(
          n == null || (t = n.id) == null ? void 0 : t.toString(),
        )
      ) {
        o(
          "WAWebMmSignalSharingLoggingEvents",
        ).logMmSignalSharingReportVerificationEvent({ chat: n, spamFlow: l });
        var s = o("WAWebBlocklistUtils").getBlockEventMetricFromBlockEntryPoint(
          o("WAWebBlocklistUtils").getBlockEntryPointFromSpamFlow(l),
        );
        o(
          "WAWebMmSignalSharingLoggingEvents",
        ).logMmSignalSharingUserReportEvent({
          chat: n,
          blockEntryPointMetric: s,
        });
      }
      return S({
        chat: n,
        spamFlow: l,
        msg: r,
        msgType: a,
        skipCtwa1pdNbfSignal: i,
      });
    }
    function h(e, t) {
      t === void 0 && (t = o("WAWebSpamConstants").SpamFlow.MessageMenu);
      var n = o("WAWebStateUtils").unproxy(e);
      return S({
        chat: o("WAWebFrontendMsgGetters").getChat(n),
        spamFlow: t,
        msg: n,
      });
    }
    function y(e, t) {
      return (
        t === void 0 && (t = o("WAWebSpamConstants").SpamFlow.MessageMenu),
        I(o("WAWebStateUtils").unproxy(e), t)
      );
    }
    function C(e) {
      var t = e.chat,
        n = e.spamFlow;
      return E(o("WAWebStateUtils").unproxy(t), n);
    }
    function b(e, t) {
      return k(o("WAWebStateUtils").unproxy(e), t);
    }
    function v() {
      return {
        couldNotSendReportMsg: s._(/*BTDS*/ "Couldn't send report"),
        sendingReportMsg: s._(/*BTDS*/ "Sending report"),
        reportSentMsg: s._(/*BTDS*/ "Report sent"),
        reportSentMsgV2: s._(/*BTDS*/ "Thank you for reporting."),
        reportNotSentMsg: s._(/*BTDS*/ "Report not sent"),
        tryAgainMsg: s._(/*BTDS*/ "Try again."),
      };
    }
    function S(t) {
      var a,
        i = t.spamFlow,
        l = t.chat,
        s = t.msg,
        u = t.toastId,
        c = u === void 0 ? o("WAWebActionToast.react").genId() : u,
        d = t.msgType,
        p = t.attemptCount,
        f = p === void 0 ? 1 : p,
        g = v(),
        h = g.couldNotSendReportMsg,
        y = g.reportSentMsgV2,
        C = g.sendingReportMsg,
        b = g.tryAgainMsg,
        L = l != null ? o("WAWebStateUtils").unproxy(l) : l,
        E = (a = L == null ? void 0 : L.promises) != null ? a : null;
      if (E != null && E.sendSpamReport) return E.sendSpamReport;
      var k = R({ spamFlow: i, msg: s, msgType: d, chat: L });
      if (k == null) return new (m || (m = n("Promise")))(r("WAWebNoop"));
      var I = o("WAWebSpamReportAttempt").sendWithSpamReportLogging(i, f, k),
        T =
          L != null
            ? L
            : s != null
              ? o("WAWebFrontendMsgGetters").getChat(s)
              : null;
      t.skipCtwa1pdNbfSignal !== !0 &&
        T != null &&
        I.then(function () {
          return o(
            "WAWebSmb1pdConversionSignalAction",
          ).log1pdReportConversionSignal(T);
        }).catch(r("WAWebNoop"));
      var D = new (o("WAWebActionToast.react").ActionType)(C),
        x = I.then(function (e) {
          return e != null &&
            s != null &&
            o("WAWebReportGatingUtils").isPostReportingAusOSAModalEnabled(L, s)
            ? null
            : new (o("WAWebActionToast.react").ActionType)(y);
        })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                return !r("gkx")("26258") && e.statusCode === 548
                  ? new (o("WAWebActionToast.react").ActionType)(e.message)
                  : new (o("WAWebActionToast.react").ActionType)(h);
              },
            ),
          )
          .catch(function (n) {
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "reportSpam dropped",
                  ])),
              ),
              new (o("WAWebActionToast.react").ActionType)(h, {
                actionText: b,
                actionHandler: function () {
                  return S({
                    chat: L,
                    spamFlow: i,
                    msg: s,
                    toastId: c,
                    msgType: d,
                    skipCtwa1pdNbfSignal: t.skipCtwa1pdNbfSignal,
                    attemptCount: f + 1,
                  });
                },
              })
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          _.jsx(o("WAWebActionToast.react").ActionToast, {
            id: c,
            initialAction: D,
            pendingAction: x,
          }),
        ),
        I.finally(function () {
          E != null && E.sendSpamReport && (E.sendSpamReport = null);
        })
      );
    }
    function R(e) {
      var t = e.chat,
        n = e.msg,
        r = e.msgType,
        a = e.spamFlow;
      if (
        r === o("WAWebMsgType").MSG_TYPE.STATUS &&
        n != null &&
        !o("WAWebMsgGetters").getIsGroupStatus(n)
      )
        return function (e) {
          return o("WAWebReportSpamJob").reportStatus(a, n, e).then(L);
        };
      var i = t == null ? void 0 : t.promises;
      if (t == null || i == null) return null;
      var l = n != null ? o("WAWebFrontendMsgGetters").getChat(n) : t;
      return function (e) {
        var t = o("WAWebReportSpamJob")
          .reportSpam(l, a, n != null ? n : void 0, e)
          .then(L);
        return ((i.sendSpamReport = t), t);
      };
    }
    function L(e) {
      var t;
      if ((e == null ? void 0 : e.errorCode) != null)
        throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
          e.errorCode,
          e.errorText,
        );
      if (
        (e == null || (t = e.reportIdMixin) == null ? void 0 : t.reportId) !=
        null
      )
        return e.reportIdMixin.reportId;
    }
    function E(e, t) {
      var r = e.contact,
        a = e.promises;
      if (a.reportSpamBlockClear) return a.reportSpamBlockClear;
      if (o("WAWebChatGetters").getIsGroup(e))
        return (m || (m = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      var i = o("WAWebBlocklistUtils").getBlockEntryPointFromSpamFlow(t),
        l = S({ chat: e, spamFlow: t, skipCtwa1pdNbfSignal: !0 });
      return (
        (a.reportSpamBlockClear = l
          .then(function () {
            return o("WAWebBlockContactAction").blockContact({
              contact: r,
              blockEntryPoint: i,
              skipCtwa1pdNbfSignal: !0,
            });
          })
          .then(function () {
            return o(
              "WAWebSmb1pdConversionSignalAction",
            ).log1pdBlockAndReportConversionSignal(e);
          })
          .finally(function () {
            a.reportSpamBlockClear = null;
          })),
        a.reportSpamBlockClear
      );
    }
    function k(e, t) {
      var a = e.isReadOnly,
        i = e.promises;
      if (i.reportSpamExitClear) return i.reportSpamExitClear;
      if (!o("WAWebChatGetters").getIsGroup(e))
        return (m || (m = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      var l,
        s = S({ chat: e, spamFlow: t });
      if (a) l = s;
      else {
        var u = o("WAWebExitGroupAction").sendExitGroup(e);
        l = (m || (m = n("Promise"))).all([s, u]);
      }
      return (
        (i.reportSpamExitClear = l
          .then(function () {
            return o("WAWebSendClearChatAction").sendClear(e, !1);
          })
          .catch(r("WAWebNoop"))
          .finally(function () {
            i.reportSpamExitClear = null;
          })),
        i.reportSpamExitClear
      );
    }
    function I(e, t) {
      var n = e.senderObj,
        r = o("WAWebFrontendMsgGetters").getChat(e),
        a = r.promises;
      if (a.reportMessageBlock) return a.reportMessageBlock;
      var i = o("WAWebBlocklistUtils").getBlockEntryPointFromSpamFlow(t),
        l = S({ chat: r, spamFlow: t, msg: e, skipCtwa1pdNbfSignal: !0 });
      return (
        (a.reportMessageBlock = l
          .then(function (t) {
            o("WAWebModalManager").ModalManager.close();
            var a = o(
              "WAWebPrivateMessageComplianceUtils",
            ).getPrivateMessageReportComplianceConfig({ reportId: t, msg: e });
            return (
              a != null &&
                f
                  .load()
                  .then(function (e) {
                    return e.WAWebComplianceReportTrigger(a);
                  })
                  .catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[reportMessageBlock] compliance modal err: ",
                            "",
                          ])),
                        e,
                      )
                      .sendLogs("report-message-compliance-error");
                  }),
              o("WAWebBlockContactAction")
                .blockContact({
                  contact: n,
                  blockEntryPoint: i,
                  skipCtwa1pdNbfSignal: !0,
                })
                .then(function () {
                  return o(
                    "WAWebSmb1pdConversionSignalAction",
                  ).log1pdBlockAndReportConversionSignal(r);
                })
                .catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "Error in blocking while reporting a message: ",
                          "",
                        ])),
                      e,
                    )
                    .sendLogs("report-block-message-error");
                })
            );
          })
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "Error while reporting and blocking a message : ",
                    "",
                  ])),
                e,
              )
              .sendLogs("report-block-message-error");
          })
          .finally(function () {
            a.reportMessageBlock = null;
          })),
        a.reportMessageBlock
      );
    }
    ((l.sendReport = g),
      (l.sendMessageReport = h),
      (l.sendMessageReportBlock = y),
      (l.sendReportBlock = C),
      (l.sendSpamExitClear = b));
  },
  226,
);
