__d(
  "WAWebNewsletterRemediationOptionsDrawer.react",
  [
    "fbt",
    "WAJids",
    "WAWebCommonNewsletterEnums",
    "WAWebCommonNewsletterIntegrityStrings",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEnforcementActionLogging",
    "WAWebExternalLink.react",
    "WAWebHelpIcon.react",
    "WAWebMessageReportIcon.react",
    "WAWebMsgCollection",
    "WAWebNewsletterAlertsRowComponent.react",
    "WAWebNewsletterRemediationOptionChannelGuidelines.react",
    "WAWebNewsletterRemediationOptionContactDSB.react",
    "WAWebNewsletterRemediationOptionContactReporter.react",
    "WAWebNewsletterRemediationOptionDeleteUpdate.react",
    "WAWebRemediationOptionDeleteNewsletter.react",
    "WAWebRequestReviewSection.react",
    "WAWebWamEnumInteractionSurface",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u.useEffect,
      m = { secondaryColor: { color: "xhslqc4", $$css: !0 } };
    function p(t) {
      var n,
        a,
        i,
        l,
        u,
        p,
        f,
        g = t.ref,
        h = babelHelpers.objectWithoutPropertiesLoose(t, e),
        y = h.chat,
        C = h.currentEnforcementAppeal,
        b = h.onBack,
        v = h.onClickDSBFlow,
        S = h.onClickEmailReporter,
        R = h.onClickRequestReview,
        L = h.onClickSeeReviewDetails,
        E = h.onDeleteNewsletter;
      d(function () {
        r("WAWebEnforcementActionLogging").setSurface(
          o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE
            .REMEDIATION_OPTION_SCREEN,
        );
      }, []);
      var k = o("useWAWebModelValues").useOptionalModelValues(
          y.newsletterMetadata,
          ["membershipType"],
        ),
        I =
          ((n = C.enforcementExtraData) == null
            ? void 0
            : n.ipViolationReportData) != null
            ? (a = C.enforcementExtraData) == null
              ? void 0
              : a.ipViolationReportData.appealFormUrl
            : (i = C.enforcementExtraData) == null ||
                (i = i.appealExtraData) == null
              ? void 0
              : i.appealFormUrl,
        T =
          C.msgData != null
            ? o("WAWebMsgCollection").MsgCollection.gadd(C.msgData)
            : null,
        D;
      if (
        (C.enforcementType ===
          o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND_INFORM ||
          C.enforcementType ===
            o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND_INFORM ||
          C.enforcementType ===
            o("WAWebCommonNewsletterEnums").EnforcementType.VIOLATING_MSG) &&
        T != null
      ) {
        var x,
          $,
          P =
            ((x = C.violatingContentData) == null ? void 0 : x.contentType) ===
              o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS ||
            (($ = C.enforcementExtraData) == null ||
            ($ = $.enforcementTargetData) == null
              ? void 0
              : $.contentType) ===
              o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS;
        D = c.jsx(r("WAWebNewsletterRemediationOptionDeleteUpdate.react"), {
          isStatusContent: P,
          msgModel: T,
          onBack: b,
        });
      }
      var N = c.jsx(r("WAWebRemediationOptionDeleteNewsletter.react"), {
          enforcementType: C.enforcementType,
          newsletterMetadata: k,
          onDeleteNewsletter: E,
        }),
        M =
          C.enforcementId != null
            ? c.jsx(r("WAWebNewsletterRemediationOptionContactDSB.react"), {
                enforcementSource: C.enforcementSource,
                onClickDSBFlow: v,
              })
            : null,
        w =
          ((l = C.enforcementExtraData) == null
            ? void 0
            : l.enforcementOriginWorkflow) != null &&
          ((u = C.enforcementExtraData) == null
            ? void 0
            : u.enforcementOriginLegalBasis) != null,
        A =
          C.enforcementSource === "IP_SRT" && !w
            ? c.jsx(
                r("WAWebNewsletterRemediationOptionContactReporter.react"),
                { onClickEmailReporter: S },
              )
            : null,
        F =
          I != null
            ? c.jsx(r("WAWebNewsletterAlertsRowComponent.react"), {
                icon: c.jsx(
                  o("WAWebMessageReportIcon.react").MessageReportIcon,
                  { height: 24, width: 24, iconXstyle: m.secondaryColor },
                ),
                onClick: function () {
                  (r("WAWebEnforcementActionLogging").logSubmitAppealClick(),
                    o("WAWebExternalLink.react").openExternalLink(I));
                },
                showBottomBorder: !1,
                showDetailRight: !1,
                subtitle:
                  ((p = C.enforcementExtraData) == null
                    ? void 0
                    : p.enforcementOriginWorkflow) != null
                    ? s._(
                        /*BTDS*/ "Ask WhatsApp to take another look if you think there has been a mistake.",
                      )
                    : s._(
                        /*BTDS*/ "Fill in this form if you disagree with this decision.",
                      ),
                testId:
                  "newsletter-remediation-options-drawer-outside-app-appeal",
                title:
                  ((f = C.enforcementExtraData) == null
                    ? void 0
                    : f.enforcementOriginWorkflow) != null
                    ? o(
                        "WAWebCommonNewsletterIntegrityStrings",
                      ).getRequestAppealRemediationOptionsRowText()
                    : s._(/*BTDS*/ "Submit an appeal"),
              })
            : null,
        O =
          F == null
            ? c.jsx(r("WAWebRequestReviewSection.react"), {
                appealState: C.appealState,
                chatId: o("WAJids").toNewsletterJid(y.id.toJid()),
                onClickRequestReview: R,
                onClickSeeReviewDetails: L,
              })
            : null,
        B =
          C.enforcementSource === "IP_SRT"
            ? c.jsx(r("WAWebNewsletterAlertsRowComponent.react"), {
                icon: c.jsx(o("WAWebHelpIcon.react").HelpIcon, {
                  height: 24,
                  width: 24,
                  iconXstyle: m.secondaryColor,
                }),
                onClick: _,
                showBottomBorder: !1,
                showDetailRight: !1,
                subtitle: s._(
                  /*BTDS*/ "Learn more about WhatsApp\u2019s intellectual property policies.",
                ),
                testId: "newsletter-remediation-options-drawer-help-center",
                title: s._(/*BTDS*/ "Go to Help Center"),
              })
            : null,
        W =
          C.enforcementSource !== "IP_SRT"
            ? c.jsx(
                r("WAWebNewsletterRemediationOptionChannelGuidelines.react"),
                {},
              )
            : null;
      return c.jsxs(r("WAWebDrawer.react"), {
        ref: g,
        testid: void 0,
        theme: "gallery",
        tsNavigationData: {
          surface: "unknown",
          viewName: "newsletter-remediation",
        },
        children: [
          c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            onBack: b,
            title: o(
              "WAWebCommonNewsletterIntegrityStrings",
            ).getNewsletterRemediationOptionsDrawerTitle(),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          }),
          c.jsx(r("WAWebDrawerBody.react"), {
            children: c.jsxs(r("WAWebDrawerSection.react"), {
              animation: !1,
              theme: "full-height",
              children: [N, D, O || F, M, A, W, B],
            }),
          }),
        ],
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      (r("WAWebEnforcementActionLogging").logGoToHelpCentreClick(),
        o("WAWebExternalLink.react").openExternalLink(
          "https://www.whatsapp.com/legal/ip-policy",
        ));
    }
    l.default = p;
  },
  226,
);
