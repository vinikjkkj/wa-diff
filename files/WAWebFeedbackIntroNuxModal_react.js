__d(
  "WAWebFeedbackIntroNuxModal.react",
  [
    "fbt",
    "WAWebABPropsSaga",
    "WAWebClickableLink.react",
    "WAWebConfirmPopup.react",
    "WAWebContactFormWrapper.react",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebIcLightbulbIcon.react",
    "WAWebMessageReportIcon.react",
    "WAWebModalManager",
    "WAWebNux",
    "WAWebNuxSync",
    "WAWebSupportAiSessionWamEvent",
    "WAWebText.react",
    "WAWebWamEnumSupportAiEventType",
    "WAWebWdsAnimPhoneNoteFeedbackIcon.react",
    "WDSIconIcImage.react",
    "react",
    "stylex",
    "useWAWebFocusOnMount",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        headerText: {
          fontSize: "x1603h9y",
          fontStyle: "x1j61x8r",
          fontWeight: "x1s688f",
          lineHeight: "xgif2c7",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        sectionIcon: { width: "xvy4d1p", $$css: !0 },
        sectionTitle: { width: "xxsgkw5", $$css: !0 },
        buttonContainer: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          backgroundColor: "x16w0wmm",
          $$css: !0,
        },
        icon: { color: "xhslqc4", $$css: !0 },
        marginTop8: { marginTop: "x1380le5", $$css: !0 },
        marginHoriz8: {
          marginInlineStart: "x150mmf0",
          marginInlineEnd: "xqf2s3x",
          marginLeft: null,
          marginRight: null,
          $$css: !0,
        },
        marginTop16: { marginTop: "x98l61r", $$css: !0 },
        marginBottom16: { marginBottom: "x1ua1l7f", $$css: !0 },
        marginVert8: {
          marginTop: "x1380le5",
          marginBottom: "xefnzgg",
          $$css: !0,
        },
        marginHoriz28: {
          marginInlineStart: "x1w9lr8p",
          marginInlineEnd: "xarfp6d",
          marginLeft: null,
          marginRight: null,
          $$css: !0,
        },
        marginBottom20: { marginBottom: "xdqhqc9", $$css: !0 },
      },
      m = function () {
        return s._(/*BTDS*/ "Send feedback to help improve WhatsApp");
      };
    function p(t) {
      var n = r("useWAWebFocusOnMount")(),
        a = function () {
          (o("WAWebModalManager").ModalManager.close(), t.onAcknowledge());
        },
        i = function () {
          o("WAWebModalManager").ModalManager.close();
        };
      o("useWAWebListener").useListener(
        o("WAWebModalManager").ModalManager,
        "close_modal",
        function () {
          r("WAWebNuxSync").acknowledgeNux(
            o("WAWebNux").NuxSyncKey.FEEDBACK_INTRO,
          );
        },
      );
      var l = { width: 24, height: 24, xstyle: d.icon },
        u = [
          {
            icon: c.jsx(
              o("WAWebMessageReportIcon.react").MessageReportIcon,
              babelHelpers.extends({}, l),
            ),
            description: s._(
              /*BTDS*/ "Report issues like app freezes, crashes, or broken features.",
            ),
          },
          {
            icon: c.jsx(
              o("WAWebIcLightbulbIcon.react").IcLightbulbIcon,
              babelHelpers.extends({}, l),
            ),
            description: s._(
              /*BTDS*/ "Give us suggestions to make WhatsApp better for everyone.",
            ),
          },
          {
            icon: c.jsx(r("WDSIconIcImage.react"), babelHelpers.extends({}, l)),
            description: s._(
              /*BTDS*/ "Include details and screenshots to help us understand your feedback.",
            ),
          },
        ];
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        ref: n,
        onOK: a,
        onCancel: i,
        okText: r("WAWebFbtCommon")("Continue"),
        onOverlayClick: i,
        buttonGroupStyle: d.buttonContainer,
        testid: void 0,
        tsNavigationData: {
          surface: "unknown",
          viewName: "feedback-intro-nux",
        },
        children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
          align: "center",
          children: [
            c.jsx(
              o("WAWebWdsAnimPhoneNoteFeedbackIcon.react")
                .WdsAnimPhoneNoteFeedbackIcon,
              { xstyle: d.marginTop8 },
            ),
            c.jsx(o("WAWebText.react").WAWebTextLargeRefreshed, {
              xstyle: [
                d.headerText,
                d.marginHoriz8,
                d.marginTop16,
                d.marginBottom16,
              ],
              children: m(),
            }),
            u.map(function (t, n) {
              var a = t.description,
                i = t.icon;
              return c.jsxs(
                o("WAWebFlex.react").FlexRow,
                {
                  align: "center",
                  gap: 24,
                  className: (e || (e = r("stylex")))([d.marginVert8]),
                  children: [
                    c.jsx(o("WAWebFlex.react").FlexItem, {
                      xstyle: d.sectionIcon,
                      children: i,
                    }),
                    c.jsx(o("WAWebFlex.react").FlexItem, {
                      xstyle: d.sectionTitle,
                      children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
                        color: "wdsContentDefault",
                        children: a,
                      }),
                    }),
                  ],
                },
                n,
              );
            }),
            c.jsx(o("WAWebText.react").WAWebTextSmall, {
              xstyle: [d.marginHoriz28, d.marginTop16, d.marginBottom20],
              children: s._(
                /*BTDS*/ "For issues like spam or scams, get help from the {help_center_link}, or {contact_us_link}.",
                [
                  s._param(
                    "help_center_link",
                    c.jsx(r("WAWebClickableLink.react"), {
                      onClick: _,
                      children: s._(/*BTDS*/ "Help Center"),
                    }),
                  ),
                  s._param(
                    "contact_us_link",
                    c.jsx(r("WAWebClickableLink.react"), {
                      onClick: function () {
                        (o("WAWebABPropsSaga").getIsSagaV1Enabled() &&
                          new (o(
                            "WAWebSupportAiSessionWamEvent",
                          ).SupportAiSessionWamEvent)({
                            supportAiEventType: o(
                              "WAWebWamEnumSupportAiEventType",
                            ).SUPPORT_AI_EVENT_TYPE.CONTACT_US_CLICKED,
                          }).commit(),
                          i(),
                          o("WAWebModalManager").ModalManager.open(
                            c.jsx(r("WAWebContactFormWrapper.react"), {}),
                          ));
                      },
                      children: s._(/*BTDS*/ "contact us"),
                    }),
                  ),
                ],
              ),
            }),
          ],
        }),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      o("WAWebExternalLink.react").openExternalLink(
        "https://faq.whatsapp.com/",
      );
    }
    l.default = p;
  },
  226,
);
