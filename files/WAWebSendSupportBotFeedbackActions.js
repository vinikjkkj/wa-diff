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
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react"));
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (!r("WAWebNetworkStatus").online) {
            (new (o("WAWebSupportAiSessionWamEvent").SupportAiSessionWamEvent)({
              supportAiEventType: o("WAWebWamEnumSupportAiEventType")
                .SUPPORT_AI_EVENT_TYPE.NO_INTERNET_DIALOG_SHOWN,
            }).commit(),
              o("WAWebModalManager").ModalManager.close(),
              o("WAWebModalManager").ModalManager.open(
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
            var i = yield o(
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
                msg: a
                  ? s._(/*BTDS*/ "Feedback submitted")
                  : s._(/*BTDS*/ "Couldn't submit feedback."),
              }),
              o("WAWebToastManager").ToastPosition.CENTER,
            ));
        })),
        m.apply(this, arguments)
      );
    }
    l.handleSupportBotFeedbackSubmit = d;
  },
  226,
);
