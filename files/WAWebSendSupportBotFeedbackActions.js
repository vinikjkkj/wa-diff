__d(
  "WAWebSendSupportBotFeedbackActions",
  [
    "fbt",
    "WALogger",
    "WAStanzaUtils",
    "WAWebModalManager",
    "WAWebNetworkStatus",
    "WAWebSupportAiSessionWamEvent",
    "WAWebSupportMessageFeedbackSubmitMutation",
    "WAWebSupportOfflinePopUp.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumSupportAiEventType",
    "WDSDialogBridge",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react"));
    async function d(t, n) {
      if (!r("WAWebNetworkStatus").online) {
        (new (o("WAWebSupportAiSessionWamEvent").SupportAiSessionWamEvent)({
          supportAiEventType: o("WAWebWamEnumSupportAiEventType")
            .SUPPORT_AI_EVENT_TYPE.NO_INTERNET_DIALOG_SHOWN,
        }).commit(),
          o("WAWebModalManager").ModalManager.close(),
          o("WDSDialogBridge").openWDSDialog(
            c.jsx(r("WAWebSupportOfflinePopUp.react"), {}),
          ));
        return;
      }
      (new (o("WAWebSupportAiSessionWamEvent").SupportAiSessionWamEvent)({
        supportAiEventType: o("WAWebWamEnumSupportAiEventType")
          .SUPPORT_AI_EVENT_TYPE.SUBMIT_MESSAGE_FEEDBACK,
      }).commit(),
        o("WAWebModalManager").ModalManager.close());
      var a = !1;
      try {
        var i = await o(
          "WAWebSupportMessageFeedbackSubmitMutation",
        ).submitSupportMessageFeedbackGraphQL({
          message_id: o("WAStanzaUtils").toStanzaId(t.id),
          feedback_types: n.map(
            o("WAWebSupportMessageFeedbackSubmitMutation")
              .feedbackKindForGraphQL,
          ),
        });
        a = i.success === !0;
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "SAGA feedback submission failed: ",
                "",
              ])),
            t,
          )
          .sendLogs("saga-feedback-fail");
      }
      (new (o("WAWebSupportAiSessionWamEvent").SupportAiSessionWamEvent)({
        supportAiEventType: a
          ? o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE
              .SUBMIT_MESSAGE_FEEDBACK_SUCCEEDED
          : o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE
              .SUBMIT_MESSAGE_FEEDBACK_FAILED,
      }).commit(),
        o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebToast.react").Toast, {
            msg: a ? s._(/*BTDS*/ "") : s._(/*BTDS*/ ""),
          }),
          o("WAWebToastManager").ToastPosition.CENTER,
        ));
    }
    l.handleSupportBotFeedbackSubmit = d;
  },
  226,
);
