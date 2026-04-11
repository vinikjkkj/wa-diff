__d(
  "WAWebSendSupportBotFeedbackActions",
  [
    "fbt",
    "WALogger",
    "WASmaxSupportMessageFeedbackSendFeedbackRPC",
    "WAStanzaUtils",
    "WAWebABProps",
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
          new (o("WAWebSupportAiSessionWamEvent").SupportAiSessionWamEvent)({
            supportAiEventType: o("WAWebWamEnumSupportAiEventType")
              .SUPPORT_AI_EVENT_TYPE.SUBMIT_MESSAGE_FEEDBACK,
          }).commit();
          var a = o("WAWebABProps").getABPropConfigValue(
            "saga_message_feedback_using_canonical_ent",
          )
            ? o("WAWebSupportMessageFeedbackSubmitMutation")
                .submitSupportMessageFeedbackGraphQL({
                  message_id: o("WAStanzaUtils").toStanzaId(t.id),
                  feedback_types: n.map(
                    o("WAWebSupportMessageFeedbackSubmitMutation")
                      .feedbackKindForGraphQL,
                  ),
                })
                .then(function (e) {
                  return e.success === !0;
                })
            : o("WASmaxSupportMessageFeedbackSendFeedbackRPC")
                .sendSendFeedbackRPC({
                  messageId: o("WAStanzaUtils").toStanzaId(t.id),
                  feedbackArgs: n.map(function (e) {
                    return { feedbackKind: e };
                  }),
                })
                .then(function (e) {
                  return e.name === "SendFeedbackResponseSuccess";
                });
          (a
            .then(function (e) {
              new (o("WAWebSupportAiSessionWamEvent").SupportAiSessionWamEvent)(
                {
                  supportAiEventType: e
                    ? o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE
                        .SUBMIT_MESSAGE_FEEDBACK_SUCCEEDED
                    : o("WAWebWamEnumSupportAiEventType").SUPPORT_AI_EVENT_TYPE
                        .SUBMIT_MESSAGE_FEEDBACK_FAILED,
                },
              ).commit();
            })
            .catch(function (t) {
              (o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "SAGA feedback submission failed: ",
                      "",
                    ])),
                  t,
                )
                .sendLogs("saga-feedback-fail"),
                new (o(
                  "WAWebSupportAiSessionWamEvent",
                ).SupportAiSessionWamEvent)({
                  supportAiEventType: o("WAWebWamEnumSupportAiEventType")
                    .SUPPORT_AI_EVENT_TYPE.SUBMIT_MESSAGE_FEEDBACK_FAILED,
                }).commit());
            }),
            o("WAWebModalManager").ModalManager.close(),
            o("WAWebToastManager").ToastManager.open(
              c.jsx(o("WAWebToast.react").Toast, {
                msg: s._(/*BTDS*/ "Feedback submitted"),
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
