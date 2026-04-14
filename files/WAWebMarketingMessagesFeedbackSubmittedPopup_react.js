__d(
  "WAWebMarketingMessagesFeedbackSubmittedPopup.react",
  [
    "fbt",
    "WALogger",
    "WAPromiseDelays",
    "WAWebBizUpdatePreferenceJob",
    "WAWebBlockBusinessPopup.react",
    "WAWebBlockContants",
    "WAWebClickableLink.react",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebHandIcon.react",
    "WAWebMMUserControlsLogger",
    "WAWebMarketingMessagesFeedbackStopConfirmationLoadable",
    "WAWebMarketingMessagesUserFeedbackGatingUtils",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumMmUserControlsAction",
    "WAWebWamEnumMmUserControlsEntryPoint",
    "WAWebWidToJid",
    "WDSIconIcBlock.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        marginBottom16: { marginBottom: "x1ua1l7f", $$css: !0 },
        marginEnd8: { marginInlineEnd: "xqf2s3x", $$css: !0 },
        paddingEnd2: { paddingInlineEnd: "x1j8ymqv", $$css: !0 },
      },
      m = function () {
        o("WAWebModalManager").ModalManager.close();
      };
    function p(t) {
      var a = t.msg;
      if (
        !o(
          "WAWebMarketingMessagesUserFeedbackGatingUtils",
        ).isMMMessageLevelFeedbackNotInterestedMenuEnabled()
      )
        return null;
      var i = c.jsx(r("WAWebClickableLink.react"), {
        onClick: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var t = yield o(
              "WAWebBizUpdatePreferenceJob",
            ).updateUserPreferenceFeedback(
              o("WAWebWidToJid").widToUserJid(a.from),
              "unset_preference",
            );
            if (t != null) throw t;
            (o("WAWebToastManager").ToastManager.open(
              c.jsx(o("WAWebToast.react").Toast, {
                msg: s._(/*BTDS*/ "Feedback undone"),
              }),
            ),
              o("WAWebModalManager").ModalManager.close(),
              o(
                "WAWebMMUserControlsLogger",
              ).logMarketingMessageUserControlsJourney({
                action: o("WAWebWamEnumMmUserControlsAction")
                  .MM_USER_CONTROLS_ACTION.UNDO,
                entryPoint: o("WAWebWamEnumMmUserControlsEntryPoint")
                  .MM_USER_CONTROLS_ENTRY_POINT.BOTTOM_SHEET,
                message: a,
                isSuccess: !0,
              }));
          } catch (t) {
            (o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAWebMarketingMessagesFeedbackSubmittedPopup] undo failed",
                ])),
            ),
              o("WAWebToastManager").ToastManager.open(
                c.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Failed to undo feedback"),
                }),
              ),
              o(
                "WAWebMMUserControlsLogger",
              ).logMarketingMessageUserControlsJourney({
                action: o("WAWebWamEnumMmUserControlsAction")
                  .MM_USER_CONTROLS_ACTION.UNDO,
                entryPoint: o("WAWebWamEnumMmUserControlsEntryPoint")
                  .MM_USER_CONTROLS_ENTRY_POINT.BOTTOM_SHEET,
                message: a,
                isSuccess: !1,
              }));
          }
        }),
        children: r("WAWebFbtCommon")("Undo"),
      });
      return c.jsxs(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: {
          surface: "unknown",
          viewName: "marketing-feedback-submitted",
        },
        onOK: m,
        okText: s._(/*BTDS*/ "Close"),
        title: s._(/*BTDS*/ "Feedback submitted"),
        children: [
          c.jsx(o("WAWebText.react").WAWebTextMuted, {
            xstyle: d.marginBottom16,
            children: s._(
              /*BTDS*/ "You will get fewer messages from {business-name}.\u00a0 {undo-link}",
              [
                s._param(
                  "business-name",
                  c.jsx(o("WAWebName.react").Name, { contact: a.senderObj }),
                ),
                s._param("undo-link", i),
              ],
            ),
          }),
          !o("WAWebFrontendMsgGetters").getChat(a).contact.isContactOptedOut &&
            o(
              "WAWebMarketingMessagesUserFeedbackGatingUtils",
            ).isMMOptOutEnabled() &&
            c.jsxs(c.Fragment, {
              children: [
                c.jsx(r("WAWebClickableLink.react"), {
                  onClick: n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* () {
                      (o("WAWebModalManager").ModalManager.close(),
                        yield o("WAPromiseDelays").delayMs(300),
                        o("WAWebModalManager").ModalManager.open(
                          c.jsx(
                            o(
                              "WAWebMarketingMessagesFeedbackStopConfirmationLoadable",
                            )
                              .WAWebMarketingMessagesFeedbackStopConfirmationLoadable,
                            {
                              chat: o("WAWebFrontendMsgGetters").getChat(a),
                              logEntryPoint: o(
                                "WAWebWamEnumMmUserControlsEntryPoint",
                              ).MM_USER_CONTROLS_ENTRY_POINT.BOTTOM_SHEET,
                            },
                          ),
                          { transition: "modal-flow" },
                        ));
                    },
                  ),
                  children: c.jsxs(o("WAWebFlex.react").FlexRow, {
                    align: "center",
                    children: [
                      c.jsx(o("WAWebHandIcon.react").HandIcon, {
                        width: 24,
                        height: 24,
                        xstyle: [d.marginEnd8, d.paddingEnd2],
                      }),
                      c.jsx("div", {
                        children: s._(
                          /*BTDS*/ "Stop offers and announcements from {business-name}",
                          [
                            s._param(
                              "business-name",
                              c.jsx(o("WAWebName.react").Name, {
                                contact: a.senderObj,
                              }),
                            ),
                          ],
                        ),
                      }),
                    ],
                  }),
                }),
                c.jsx(_, {}),
              ],
            }),
          c.jsx(r("WAWebClickableLink.react"), {
            onClick: n("asyncToGeneratorRuntime").asyncToGenerator(
              function* () {
                (o("WAWebModalManager").ModalManager.close(),
                  yield o("WAPromiseDelays").delayMs(300),
                  o("WAWebModalManager").ModalManager.open(
                    c.jsx(r("WAWebBlockBusinessPopup.react"), {
                      chat: o("WAWebFrontendMsgGetters").getChat(a),
                      blockEntryPoint:
                        o("WAWebBlockContants").BlockEntryPoint.Profile,
                      withReport: !1,
                      onMount: function () {
                        o(
                          "WAWebMMUserControlsLogger",
                        ).logMarketingMessageUserControlsJourney({
                          action: o("WAWebWamEnumMmUserControlsAction")
                            .MM_USER_CONTROLS_ACTION.BLOCK,
                          entryPoint: o("WAWebWamEnumMmUserControlsEntryPoint")
                            .MM_USER_CONTROLS_ENTRY_POINT.BOTTOM_SHEET,
                          message: a,
                          isSuccess: !0,
                        });
                      },
                    }),
                    { transition: "modal-flow" },
                  ));
              },
            ),
            className: "x30a034",
            children: c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              children: [
                c.jsx(r("WDSIconIcBlock.react"), {
                  width: 24,
                  height: 24,
                  xstyle: d.marginEnd8,
                }),
                c.jsx("div", {
                  children: s._(/*BTDS*/ "Block {business-name}", [
                    s._param(
                      "business-name",
                      c.jsx(o("WAWebName.react").Name, {
                        contact: a.senderObj,
                      }),
                    ),
                  ]),
                }),
              ],
            }),
          }),
        ],
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return c.jsx("div", { className: "xjm9jq1 xfw0ycb x98l61r x1ua1l7f" });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
