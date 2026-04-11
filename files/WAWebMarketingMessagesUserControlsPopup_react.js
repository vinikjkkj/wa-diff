__d(
  "WAWebMarketingMessagesUserControlsPopup.react",
  [
    "fbt",
    "$InternalEnum",
    "WALogger",
    "WAPromiseDelays",
    "WAWebBizUpdatePreferenceJob",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebMMUserControlsLogger",
    "WAWebMarketingMessagesFeedbackStopConfirmationLoadable",
    "WAWebMarketingMessagesFeedbackSubmittedPopup.react",
    "WAWebMarketingMessagesUserFeedbackGatingUtils",
    "WAWebMmSignalSharingLoggingEvents",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebRadio.react",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumMmUserControlsAction",
    "WAWebWamEnumMmUserControlsEntryPoint",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useEffect,
      f = m.useState,
      g = {
        border: {
          borderBottomWidth: "xso031l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "x120ee7l",
          $$css: !0,
        },
        marginBottom16: { marginBottom: "x1ua1l7f", $$css: !0 },
        marginVert8: {
          marginTop: "x1380le5",
          marginBottom: "xefnzgg",
          $$css: !0,
        },
      },
      h = n("$InternalEnum")({
        Interested: "interested",
        NotInterested: "not-interested",
        Stop: "stop",
      }),
      y = [
        {
          value: h.Interested,
          getLabel: function () {
            return s._(/*BTDS*/ "Interested");
          },
        },
        {
          value: h.NotInterested,
          getLabel: function () {
            return s._(/*BTDS*/ "Not interested");
          },
        },
      ],
      C = function (t) {
        (o("WAWebModalManager").ModalManager.close(),
          o("WAWebMMUserControlsLogger").logMarketingMessageUserControlsJourney(
            {
              action: o("WAWebWamEnumMmUserControlsAction")
                .MM_USER_CONTROLS_ACTION.DISMISS,
              entryPoint: o("WAWebWamEnumMmUserControlsEntryPoint")
                .MM_USER_CONTROLS_ENTRY_POINT.BOTTOM_SHEET,
              message: t,
              isSuccess: !0,
            },
          ));
      },
      b = function (a, i) {
        o("WAWebToastManager").ToastManager.open(
          d.jsx(o("WAWebToast.react").Toast, {
            id: "marketing-message-feedback-submitted-toast",
            action: {
              actionText: r("WAWebFbtCommon")("Undo"),
              onAction: (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    try {
                      var t = yield o(
                        "WAWebBizUpdatePreferenceJob",
                      ).updateUserPreferenceFeedback(
                        o("WAWebWidToJid").widToUserJid(a.from),
                        "unset_preference",
                      );
                      if (t != null) throw t;
                      (o("WAWebToastManager").ToastManager.close(
                        "marketing-message-feedback-submitted-toast",
                      ),
                        o(
                          "WAWebMMUserControlsLogger",
                        ).logMarketingMessageUserControlsJourney({
                          action: o("WAWebWamEnumMmUserControlsAction")
                            .MM_USER_CONTROLS_ACTION.UNDO,
                          entryPoint: o("WAWebWamEnumMmUserControlsEntryPoint")
                            .MM_USER_CONTROLS_ENTRY_POINT.TOAST,
                          message: a,
                          isSuccess: !0,
                        }));
                    } catch (t) {
                      (o("WALogger").ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[WAWebMarketingMessagesUserControlsPopup] undo failed",
                          ])),
                      ),
                        v(),
                        o(
                          "WAWebMMUserControlsLogger",
                        ).logMarketingMessageUserControlsJourney({
                          action: o("WAWebWamEnumMmUserControlsAction")
                            .MM_USER_CONTROLS_ACTION.UNDO,
                          entryPoint: o("WAWebWamEnumMmUserControlsEntryPoint")
                            .MM_USER_CONTROLS_ENTRY_POINT.TOAST,
                          message: a,
                          isSuccess: !1,
                        }));
                    }
                  },
                );
                function r() {
                  return t.apply(this, arguments);
                }
                return r;
              })(),
            },
            msg: i,
          }),
        );
      },
      v = function () {
        o("WAWebToastManager").ToastManager.open(
          d.jsx(o("WAWebToast.react").Toast, {
            msg: s._(/*BTDS*/ "Feedback failed to submit"),
          }),
        );
      },
      S = function (t) {
        o("WAWebModalManager").ModalManager.open(
          d.jsx(r("WAWebMarketingMessagesFeedbackSubmittedPopup.react"), {
            msg: t,
          }),
          { transition: "modal-flow" },
        );
      };
    function R(e) {
      var t,
        a = e.msg,
        i = f(h.Interested),
        l = i[0],
        c = i[1],
        m = f(!1),
        R = m[0],
        L = m[1];
      _(
        function () {
          o("WAWebMMUserControlsLogger").logMarketingMessageUserControlsJourney(
            {
              action: o("WAWebWamEnumMmUserControlsAction")
                .MM_USER_CONTROLS_ACTION.FEEDBACK,
              entryPoint: e.logEntryPoint,
              message: a,
              isSuccess: !0,
            },
          );
        },
        [a, e.logEntryPoint],
      );
      var E = p(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          L(!0);
          try {
            if (l === h.Interested) {
              var e = yield o(
                  "WAWebBizUpdatePreferenceJob",
                ).updateUserPreferenceFeedback(
                  o("WAWebWidToJid").widToUserJid(a.from),
                  "set_preference",
                  "interested",
                ),
                t = e == null;
              (o("WAWebModalManager").ModalManager.close(),
                t ? b(a, s._(/*BTDS*/ "Feedback submitted")) : v(),
                o(
                  "WAWebMMUserControlsLogger",
                ).logMarketingMessageUserControlsJourney({
                  action: o("WAWebWamEnumMmUserControlsAction")
                    .MM_USER_CONTROLS_ACTION.INTERESTED,
                  entryPoint: o("WAWebWamEnumMmUserControlsEntryPoint")
                    .MM_USER_CONTROLS_ENTRY_POINT.BOTTOM_SHEET,
                  message: a,
                  isSuccess: t,
                }),
                o(
                  "WAWebMmSignalSharingLoggingEvents",
                ).logMmSignalSharingUserInterestedEvent({
                  chat: o("WAWebFrontendMsgGetters").getChat(a),
                  msg: a,
                }));
            } else if (l === h.NotInterested) {
              var n = yield o(
                  "WAWebBizUpdatePreferenceJob",
                ).updateUserPreferenceFeedback(
                  o("WAWebWidToJid").widToUserJid(a.from),
                  "set_preference",
                  "not_interested",
                ),
                r = n == null;
              (r
                ? o(
                    "WAWebMarketingMessagesUserFeedbackGatingUtils",
                  ).isMMMessageLevelFeedbackNotInterestedMenuEnabled()
                  ? (o("WAWebModalManager").ModalManager.close(),
                    yield o("WAPromiseDelays").delayMs(300),
                    S(a))
                  : (b(
                      a,
                      s._(
                        /*BTDS*/ "You will get fewer messages from this business",
                      ),
                    ),
                    o("WAWebModalManager").ModalManager.close())
                : (v(), o("WAWebModalManager").ModalManager.close()),
                o(
                  "WAWebMMUserControlsLogger",
                ).logMarketingMessageUserControlsJourney({
                  action: o("WAWebWamEnumMmUserControlsAction")
                    .MM_USER_CONTROLS_ACTION.NOT_INTERESTED,
                  entryPoint: o("WAWebWamEnumMmUserControlsEntryPoint")
                    .MM_USER_CONTROLS_ENTRY_POINT.BOTTOM_SHEET,
                  message: a,
                  isSuccess: r,
                }),
                o(
                  "WAWebMmSignalSharingLoggingEvents",
                ).logMmSignalSharingUserNotInterestedEvent({
                  chat: o("WAWebFrontendMsgGetters").getChat(a),
                  msg: a,
                }));
            } else
              l === h.Stop
                ? (o("WAWebModalManager").ModalManager.close(),
                  yield o("WAPromiseDelays").delayMs(300),
                  o("WAWebModalManager").ModalManager.open(
                    d.jsx(
                      o(
                        "WAWebMarketingMessagesFeedbackStopConfirmationLoadable",
                      ).WAWebMarketingMessagesFeedbackStopConfirmationLoadable,
                      {
                        chat: o("WAWebFrontendMsgGetters").getChat(a),
                        logEntryPoint: o("WAWebWamEnumMmUserControlsEntryPoint")
                          .MM_USER_CONTROLS_ENTRY_POINT.BOTTOM_SHEET,
                      },
                    ),
                    { transition: "modal-flow" },
                  ))
                : o("WAWebModalManager").ModalManager.close();
          } catch (e) {
            (o("WAWebModalManager").ModalManager.close(),
              v(),
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAWebMarketingMessagesUserControlsPopup] submit failed",
                  ])),
              ));
          } finally {
            L(!1);
          }
        }),
        [l, a],
      );
      if (
        !o(
          "WAWebMarketingMessagesUserFeedbackGatingUtils",
        ).isMMMessageLevelFeedbackEnabled()
      )
        return null;
      var k = d.jsx(o("WAWebName.react").Name, { contact: a.senderObj });
      return d.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "marketing-user-controls",
        },
        onOK: E,
        onCancel: function () {
          return C(a);
        },
        okDisabled: R,
        okSpinner: R,
        testid: void 0,
        okText: s._(/*BTDS*/ "Submit"),
        title: s._(/*BTDS*/ "Offers and announcements from {contactTitle}", [
          s._param("contactTitle", d.jsxs("div", { children: ['"', k, '"'] })),
        ]),
        children: [
          d.jsx(o("WAWebText.react").WAWebTextMuted, {
            xstyle: g.marginBottom16,
            children: s._(
              /*BTDS*/ "Sharing feedback about this message with WhatsApp will help improve your experience.\u00a0 {learn-more-link}",
              [
                s._param(
                  "learn-more-link",
                  d.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: o(
                      "WAWebFaqUrl",
                    ).marketingMessageFeedbackLearnMoreURL(),
                    onClick: function () {
                      o(
                        "WAWebMMUserControlsLogger",
                      ).logMarketingMessageUserControlsJourney({
                        action: o("WAWebWamEnumMmUserControlsAction")
                          .MM_USER_CONTROLS_ACTION.LEARN_MORE,
                        entryPoint: o("WAWebWamEnumMmUserControlsEntryPoint")
                          .MM_USER_CONTROLS_ENTRY_POINT.BOTTOM_SHEET,
                        message: a,
                        isSuccess: !0,
                      });
                    },
                    children: r("WAWebFbtCommon")("Learn more"),
                  }),
                ),
              ],
            ),
          }),
          y.map(function (e) {
            var t = e.getLabel,
              n = e.value;
            return d.jsx(
              o("WAWebFlex.react").FlexColumn,
              {
                align: "stretch",
                xstyle: g.border,
                children: d.jsx(o("WAWebRadio.react").RadioWithLabel, {
                  testid: void 0,
                  name: String(n) + "-radio",
                  value: String(n),
                  label: t(),
                  checked: l === n,
                  onChange: function () {
                    return c(n);
                  },
                }),
              },
              n,
            );
          }),
          !(
            (t = o("WAWebFrontendMsgGetters").getChat(a)) != null &&
            (t = t.contact) != null &&
            t.isContactOptedOut
          ) &&
            !o(
              "WAWebMarketingMessagesUserFeedbackGatingUtils",
            ).isMMMessageLevelFeedbackNotInterestedMenuEnabled() &&
            o(
              "WAWebMarketingMessagesUserFeedbackGatingUtils",
            ).isMMOptOutEnabled() &&
            d.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              xstyle: g.border,
              children: d.jsx(o("WAWebRadio.react").RadioWithLabel, {
                testid: void 0,
                name: h.Stop + "-radio",
                value: h.Stop,
                label: s._(
                  /*BTDS*/ "Stop offers and announcements from {business-name}",
                  [s._param("business-name", k)],
                ),
                checked: l === h.Stop,
                onChange: function () {
                  return c(h.Stop);
                },
                xstyle: g.marginVert8,
              }),
            }),
        ],
      });
    }
    ((R.displayName = R.name + " [from " + i.id + "]"), (l.default = R));
  },
  226,
);
