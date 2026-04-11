__d(
  "WAWebMarketingMessagesFeedbackStopConfirmation.react",
  [
    "fbt",
    "WALogger",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebGetMessageCache",
    "WAWebHandleSingleMsgFactory",
    "WAWebMMUserControlsLogger",
    "WAWebMarketingMessagesFeedbackSystemMsg",
    "WAWebMarketingMessagesUserFeedbackGatingUtils",
    "WAWebMmSignalSharingLoggingEvents",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebOptOutBizAction",
    "WAWebOptOutUserJob",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumMmUserControlsAction",
    "WAWebWamEnumMmUserControlsEntryPoint",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useCallback,
      f = p.useEffect,
      g = p.useState,
      h = { marginBottom8: { marginBottom: "xefnzgg", $$css: !0 } },
      y = function () {
        (o("WAWebMMUserControlsLogger").logMarketingMessageUserControlsJourney({
          action: o("WAWebWamEnumMmUserControlsAction").MM_USER_CONTROLS_ACTION
            .DISMISS,
          entryPoint: o("WAWebWamEnumMmUserControlsEntryPoint")
            .MM_USER_CONTROLS_ENTRY_POINT.BOTTOM_SHEET,
          isSuccess: !0,
        }),
          o("WAWebModalManager").ModalManager.close());
      };
    function C(t) {
      f(
        function () {
          o("WAWebMMUserControlsLogger").logMarketingMessageUserControlsJourney(
            {
              action: o("WAWebWamEnumMmUserControlsAction")
                .MM_USER_CONTROLS_ACTION.STOP,
              entryPoint: t.logEntryPoint,
              isSuccess: !0,
            },
          );
        },
        [t.logEntryPoint],
      );
      var a = t.chat,
        i = g(!1),
        l = i[0],
        d = i[1],
        p = _(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            d(!0);
            try {
              (yield o("WAWebOptOutBizAction").optOutContact(
                a.contact,
                "marketing_messages",
                o(
                  "WAWebOptOutUserJob",
                ).convertMarketingEntryPointToOptOutEntryPoint(t.logEntryPoint),
              ),
                o(
                  "WAWebMmSignalSharingLoggingEvents",
                ).logMmSignalSharingUserStopOffersVerificationEvent({
                  chat: a,
                }),
                o(
                  "WAWebMMUserControlsLogger",
                ).logMarketingMessageUserControlsJourney({
                  action: o("WAWebWamEnumMmUserControlsAction")
                    .MM_USER_CONTROLS_ACTION.STOP_CONFIRMATION,
                  entryPoint: t.logEntryPoint,
                  isSuccess: !0,
                }),
                o("WAWebModalManager").ModalManager.close());
              var n = o(
                "WAWebMarketingMessagesFeedbackSystemMsg",
              ).getMarketingMessagesStoppedSystemMsg(a.id);
              (o("WAWebGetMessageCache")
                .getMessageCache()
                .addMessages([{ msg: n }], !1)
                .catch(function () {
                  o("WALogger").ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAWebMarketingMessagesFeedbackStopConfirmation] Failed to add system message to the cache",
                      ])),
                  );
                }),
                o("WAWebHandleSingleMsgFactory")
                  .handleSingleMsg({
                    chatId: n.from,
                    newMsg: n,
                    handleSingleMsgOrigin:
                      "marketingMessagesFeedbackStopConfirmation",
                  })
                  .catch(function () {
                    o("WALogger").ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[WAWebMarketingMessagesFeedbackStopConfirmation] Failed to handle system message",
                        ])),
                    );
                  }));
            } catch (e) {
              (o(
                "WAWebMMUserControlsLogger",
              ).logMarketingMessageUserControlsJourney({
                action: o("WAWebWamEnumMmUserControlsAction")
                  .MM_USER_CONTROLS_ACTION.STOP_CONFIRMATION,
                entryPoint: t.logEntryPoint,
                isSuccess: !1,
              }),
                o("WAWebToastManager").ToastManager.open(
                  m.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(
                      /*BTDS*/ "Failed to stop offers and announcements",
                    ),
                  }),
                ),
                o("WALogger").ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAWebMarketingMessagesFeedbackStopConfirmation] Failed to stop marketing messages",
                    ])),
                ));
            } finally {
              d(!1);
            }
          }),
          [a.contact, a.id, t.logEntryPoint],
        );
      if (
        !o("WAWebMarketingMessagesUserFeedbackGatingUtils").isMMOptOutEnabled()
      )
        return null;
      var C = m.jsx(o("WAWebName.react").Name, { contact: a.contact });
      return m.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "marketing-stop-confirmation",
        },
        onOK: p,
        okSpinner: l,
        okDisabled: l,
        onCancel: y,
        okText: s._(/*BTDS*/ "Stop"),
        title: s._(
          /*BTDS*/ "Stop offers and announcements from {contactTitle}?",
          [
            s._param(
              "contactTitle",
              m.jsxs("span", {
                style: { whiteSpace: "nowrap" },
                children: ['"', C, '"'],
              }),
            ),
          ],
        ),
        children: m.jsx(o("WAWebText.react").WAWebTextMuted, {
          xstyle: h.marginBottom8,
          children: s._(
            /*BTDS*/ "We'll tell this business you want to stop messages like this on WhatsApp.\u00a0 {learn-more-link}",
            [
              s._param(
                "learn-more-link",
                m.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o(
                    "WAWebFaqUrl",
                  ).marketingMessageUserControlsStopLearnMoreURL(),
                  onClick: function () {
                    o(
                      "WAWebMMUserControlsLogger",
                    ).logMarketingMessageUserControlsJourney({
                      action: o("WAWebWamEnumMmUserControlsAction")
                        .MM_USER_CONTROLS_ACTION.LEARN_MORE,
                      entryPoint: t.logEntryPoint,
                      isSuccess: !0,
                    });
                  },
                  children: r("WAWebFbtCommon")("Learn more"),
                }),
              ),
            ],
          ),
        }),
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  226,
);
