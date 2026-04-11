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
    "WAWebSpamConstants",
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
        i = e.spamFlow;
      if (
        o("WAWebMmSignalSharingGatingUtils").isMmSignalSharingCollectionEnabled(
          n == null || (t = n.id) == null ? void 0 : t.toString(),
        )
      ) {
        o(
          "WAWebMmSignalSharingLoggingEvents",
        ).logMmSignalSharingReportVerificationEvent({ chat: n, spamFlow: i });
        var l = o("WAWebBlocklistUtils").getBlockEventMetricFromBlockEntryPoint(
          o("WAWebBlocklistUtils").getBlockEntryPointFromSpamFlow(i),
        );
        o(
          "WAWebMmSignalSharingLoggingEvents",
        ).logMmSignalSharingUserReportEvent({
          chat: n,
          blockEntryPointMetric: l,
        });
      }
      return S({ chat: n, spamFlow: i, msg: r, msgType: a });
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
        E(o("WAWebStateUtils").unproxy(e), t)
      );
    }
    function C(e) {
      var t = e.chat,
        n = e.spamFlow;
      return R(o("WAWebStateUtils").unproxy(t), n);
    }
    function b(e, t) {
      return L(o("WAWebStateUtils").unproxy(e), t);
    }
    function v() {
      return {
        couldntSendReportMsg: s._(/*BTDS*/ "Couldn't send report"),
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
        p = v(),
        f = p.couldntSendReportMsg,
        g = p.reportSentMsgV2,
        h = p.sendingReportMsg,
        y = p.tryAgainMsg,
        C = l != null ? o("WAWebStateUtils").unproxy(l) : l,
        b = (a = C == null ? void 0 : C.promises) != null ? a : null;
      if (b != null && b.sendSpamReport) return b.sendSpamReport;
      var R;
      if (
        d === o("WAWebMsgType").MSG_TYPE.STATUS &&
        s != null &&
        !o("WAWebMsgGetters").getIsGroupStatus(s)
      )
        R = o("WAWebReportSpamJob")
          .reportStatus(i, s)
          .then(function (e) {
            var t;
            if ((e == null ? void 0 : e.errorCode) != null)
              throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                e.errorCode,
                e.errorText,
              );
            if (
              (e == null || (t = e.reportIdMixin) == null
                ? void 0
                : t.reportId) != null
            )
              return e.reportIdMixin.reportId;
          });
      else {
        if (!b) return new (m || (m = n("Promise")))(r("WAWebNoop"));
        s != null
          ? (R = b.sendSpamReport =
              o("WAWebReportSpamJob")
                .reportSpam(o("WAWebFrontendMsgGetters").getChat(s), i, s)
                .then(function (e) {
                  var t;
                  if ((e == null ? void 0 : e.errorCode) != null)
                    throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      e.errorCode,
                      e.errorText,
                    );
                  if (
                    (e == null || (t = e.reportIdMixin) == null
                      ? void 0
                      : t.reportId) != null
                  )
                    return e.reportIdMixin.reportId;
                }))
          : C != null &&
            (R = b.sendSpamReport =
              o("WAWebReportSpamJob")
                .reportSpam(C, i)
                .then(function (e) {
                  var t;
                  if ((e == null ? void 0 : e.errorCode) != null)
                    throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      e.errorCode,
                      e.errorText,
                    );
                  if (
                    (e == null || (t = e.reportIdMixin) == null
                      ? void 0
                      : t.reportId) != null
                  )
                    return e.reportIdMixin.reportId;
                }));
      }
      if (!R) return new (m || (m = n("Promise")))(r("WAWebNoop"));
      var L = new (o("WAWebActionToast.react").ActionType)(h),
        E = R.then(function (e) {
          return e != null &&
            s != null &&
            o("WAWebReportGatingUtils").isPostReportingAusOSAModalEnabled(C, s)
            ? null
            : new (o("WAWebActionToast.react").ActionType)(g);
        })
          .catch(
            o("WAFilteredCatch").filteredCatch(
              o("WAWebBackendErrors").ServerStatusCodeError,
              function (e) {
                return !r("gkx")("26258") && e.statusCode === 548
                  ? new (o("WAWebActionToast.react").ActionType)(e.message)
                  : new (o("WAWebActionToast.react").ActionType)(f);
              },
            ),
          )
          .catch(function (t) {
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "reportSpam dropped",
                  ])),
              ),
              new (o("WAWebActionToast.react").ActionType)(f, {
                actionText: y,
                actionHandler: function () {
                  return S({
                    chat: C,
                    spamFlow: i,
                    msg: s,
                    toastId: c,
                    msgType: d,
                  });
                },
              })
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          _.jsx(o("WAWebActionToast.react").ActionToast, {
            id: c,
            initialAction: L,
            pendingAction: E,
          }),
        ),
        R.finally(function () {
          b != null && b.sendSpamReport && (b.sendSpamReport = null);
        })
      );
    }
    function R(e, t) {
      var r = e.contact,
        a = e.promises;
      if (a.reportSpamBlockClear) return a.reportSpamBlockClear;
      if (o("WAWebChatGetters").getIsGroup(e))
        return (m || (m = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      var i = o("WAWebBlocklistUtils").getBlockEntryPointFromSpamFlow(t),
        l = S({ chat: e, spamFlow: t });
      return (
        (a.reportSpamBlockClear = l
          .then(function () {
            return o("WAWebBlockContactAction").blockContact({
              contact: r,
              blockEntryPoint: i,
            });
          })
          .finally(function () {
            a.reportSpamBlockClear = null;
          })),
        a.reportSpamBlockClear
      );
    }
    function L(e, t) {
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
    function E(e, t) {
      var n = e.senderObj,
        r = o("WAWebFrontendMsgGetters").getChat(e),
        a = r.promises;
      if (a.reportMessageBlock) return a.reportMessageBlock;
      var i = o("WAWebBlocklistUtils").getBlockEntryPointFromSpamFlow(t),
        l = S({ chat: r, spamFlow: t, msg: e });
      return (
        (a.reportMessageBlock = l
          .then(function (t) {
            o("WAWebModalManager").ModalManager.close();
            var r = o(
              "WAWebPrivateMessageComplianceUtils",
            ).getPrivateMessageReportComplianceConfig({ reportId: t, msg: e });
            return (
              r != null &&
                f
                  .load()
                  .then(function (e) {
                    return e.WAWebComplianceReportTrigger(r);
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
                .blockContact({ contact: n, blockEntryPoint: i })
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
