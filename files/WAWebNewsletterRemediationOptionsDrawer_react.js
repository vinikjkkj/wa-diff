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
    "react-compiler-runtime",
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
        g = o("react-compiler-runtime").c(52),
        h,
        y;
      g[0] !== t
        ? ((y = t.ref),
          (h = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (g[0] = t),
          (g[1] = h),
          (g[2] = y))
        : ((h = g[1]), (y = g[2]));
      var C = h,
        b = C.chat,
        v = C.currentEnforcementAppeal,
        S = C.onBack,
        R = C.onClickDSBFlow,
        L = C.onClickEmailReporter,
        E = C.onClickRequestReview,
        k = C.onClickSeeReviewDetails,
        I = C.onDeleteNewsletter,
        T;
      (g[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = []), (g[3] = T))
        : (T = g[3]),
        d(_, T));
      var D;
      g[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = ["membershipType"]), (g[4] = D))
        : (D = g[4]);
      var x = o("useWAWebModelValues").useOptionalModelValues(
          b.newsletterMetadata,
          D,
        ),
        $ =
          ((n = v.enforcementExtraData) == null
            ? void 0
            : n.ipViolationReportData) != null
            ? (a = v.enforcementExtraData) == null
              ? void 0
              : a.ipViolationReportData.appealFormUrl
            : (i = v.enforcementExtraData) == null ||
                (i = i.appealExtraData) == null
              ? void 0
              : i.appealFormUrl,
        P;
      g[5] !== v.msgData
        ? ((P =
            v.msgData != null
              ? o("WAWebMsgCollection").MsgCollection.gadd(v.msgData)
              : null),
          (g[5] = v.msgData),
          (g[6] = P))
        : (P = g[6]);
      var N = P,
        M;
      if (
        (v.enforcementType ===
          o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND_INFORM ||
          v.enforcementType ===
            o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND_INFORM ||
          v.enforcementType ===
            o("WAWebCommonNewsletterEnums").EnforcementType.VIOLATING_MSG) &&
        N != null
      ) {
        var w,
          A,
          F =
            ((w = v.violatingContentData) == null ? void 0 : w.contentType) ===
              o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS ||
            ((A = v.enforcementExtraData) == null ||
            (A = A.enforcementTargetData) == null
              ? void 0
              : A.contentType) ===
              o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS,
          O;
        (g[7] !== F || g[8] !== S || g[9] !== N
          ? ((O = c.jsx(
              r("WAWebNewsletterRemediationOptionDeleteUpdate.react"),
              { isStatusContent: F, msgModel: N, onBack: S },
            )),
            (g[7] = F),
            (g[8] = S),
            (g[9] = N),
            (g[10] = O))
          : (O = g[10]),
          (M = O));
      }
      var B;
      g[11] !== v.enforcementType || g[12] !== x || g[13] !== I
        ? ((B = c.jsx(r("WAWebRemediationOptionDeleteNewsletter.react"), {
            enforcementType: v.enforcementType,
            newsletterMetadata: x,
            onDeleteNewsletter: I,
          })),
          (g[11] = v.enforcementType),
          (g[12] = x),
          (g[13] = I),
          (g[14] = B))
        : (B = g[14]);
      var W = B,
        q;
      g[15] !== v.enforcementId || g[16] !== v.enforcementSource || g[17] !== R
        ? ((q =
            v.enforcementId != null
              ? c.jsx(r("WAWebNewsletterRemediationOptionContactDSB.react"), {
                  enforcementSource: v.enforcementSource,
                  onClickDSBFlow: R,
                })
              : null),
          (g[15] = v.enforcementId),
          (g[16] = v.enforcementSource),
          (g[17] = R),
          (g[18] = q))
        : (q = g[18]);
      var U = q,
        V =
          ((l = v.enforcementExtraData) == null
            ? void 0
            : l.enforcementOriginWorkflow) != null &&
          ((u = v.enforcementExtraData) == null
            ? void 0
            : u.enforcementOriginLegalBasis) != null,
        H;
      g[19] !== v.enforcementSource || g[20] !== V || g[21] !== L
        ? ((H =
            v.enforcementSource === "IP_SRT" && !V
              ? c.jsx(
                  r("WAWebNewsletterRemediationOptionContactReporter.react"),
                  { onClickEmailReporter: L },
                )
              : null),
          (g[19] = v.enforcementSource),
          (g[20] = V),
          (g[21] = L),
          (g[22] = H))
        : (H = g[22]);
      var G = H,
        z;
      if (
        g[23] !==
          ((p = v.enforcementExtraData) == null
            ? void 0
            : p.enforcementOriginWorkflow) ||
        g[24] !== $
      ) {
        var j, K, Q;
        ((z =
          $ != null
            ? c.jsx(r("WAWebNewsletterAlertsRowComponent.react"), {
                icon: c.jsx(
                  o("WAWebMessageReportIcon.react").MessageReportIcon,
                  { height: 24, width: 24, iconXstyle: m.secondaryColor },
                ),
                onClick: function () {
                  (r("WAWebEnforcementActionLogging").logSubmitAppealClick(),
                    o("WAWebExternalLink.react").openExternalLink($));
                },
                showBottomBorder: !1,
                showDetailRight: !1,
                subtitle:
                  ((j = v.enforcementExtraData) == null
                    ? void 0
                    : j.enforcementOriginWorkflow) != null
                    ? s._(
                        /*BTDS*/ "Ask WhatsApp to take another look if you think there has been a mistake.",
                      )
                    : s._(
                        /*BTDS*/ "Fill in this form if you disagree with this decision.",
                      ),
                testId:
                  "newsletter-remediation-options-drawer-outside-app-appeal",
                title:
                  ((K = v.enforcementExtraData) == null
                    ? void 0
                    : K.enforcementOriginWorkflow) != null
                    ? o(
                        "WAWebCommonNewsletterIntegrityStrings",
                      ).getRequestAppealRemediationOptionsRowText()
                    : s._(/*BTDS*/ "Submit an appeal"),
              })
            : null),
          (g[23] =
            (Q = v.enforcementExtraData) == null
              ? void 0
              : Q.enforcementOriginWorkflow),
          (g[24] = $),
          (g[25] = z));
      } else z = g[25];
      var X = z,
        Y;
      g[26] !== b.id ||
      g[27] !== v.appealState ||
      g[28] !== E ||
      g[29] !== k ||
      g[30] !== X
        ? ((Y =
            X == null
              ? c.jsx(r("WAWebRequestReviewSection.react"), {
                  appealState: v.appealState,
                  chatId: o("WAJids").toNewsletterJid(b.id.toJid()),
                  onClickRequestReview: E,
                  onClickSeeReviewDetails: k,
                })
              : null),
          (g[26] = b.id),
          (g[27] = v.appealState),
          (g[28] = E),
          (g[29] = k),
          (g[30] = X),
          (g[31] = Y))
        : (Y = g[31]);
      var J = Y,
        Z;
      g[32] !== v.enforcementSource
        ? ((Z =
            v.enforcementSource === "IP_SRT"
              ? c.jsx(r("WAWebNewsletterAlertsRowComponent.react"), {
                  icon: c.jsx(o("WAWebHelpIcon.react").HelpIcon, {
                    height: 24,
                    width: 24,
                    iconXstyle: m.secondaryColor,
                  }),
                  onClick: f,
                  showBottomBorder: !1,
                  showDetailRight: !1,
                  subtitle: s._(
                    /*BTDS*/ "Learn more about WhatsApp\u2019s intellectual property policies.",
                  ),
                  testId: "newsletter-remediation-options-drawer-help-center",
                  title: s._(/*BTDS*/ "Go to Help Center"),
                })
              : null),
          (g[32] = v.enforcementSource),
          (g[33] = Z))
        : (Z = g[33]);
      var ee = Z,
        te;
      g[34] !== v.enforcementSource
        ? ((te =
            v.enforcementSource !== "IP_SRT"
              ? c.jsx(
                  r("WAWebNewsletterRemediationOptionChannelGuidelines.react"),
                  {},
                )
              : null),
          (g[34] = v.enforcementSource),
          (g[35] = te))
        : (te = g[35]);
      var ne = te,
        re;
      g[36] === Symbol.for("react.memo_cache_sentinel")
        ? ((re = { surface: "unknown", viewName: "newsletter-remediation" }),
          (g[36] = re))
        : (re = g[36]);
      var oe;
      g[37] === Symbol.for("react.memo_cache_sentinel")
        ? ((oe = o(
            "WAWebCommonNewsletterIntegrityStrings",
          ).getNewsletterRemediationOptionsDrawerTitle()),
          (g[37] = oe))
        : (oe = g[37]);
      var ae;
      g[38] !== S
        ? ((ae = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            onBack: S,
            title: oe,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          })),
          (g[38] = S),
          (g[39] = ae))
        : (ae = g[39]);
      var ie = J || X,
        le;
      g[40] !== ne ||
      g[41] !== W ||
      g[42] !== M ||
      g[43] !== U ||
      g[44] !== G ||
      g[45] !== ee ||
      g[46] !== ie
        ? ((le = c.jsx(r("WAWebDrawerBody.react"), {
            children: c.jsxs(r("WAWebDrawerSection.react"), {
              animation: !1,
              theme: "full-height",
              children: [W, M, ie, U, G, ne, ee],
            }),
          })),
          (g[40] = ne),
          (g[41] = W),
          (g[42] = M),
          (g[43] = U),
          (g[44] = G),
          (g[45] = ee),
          (g[46] = ie),
          (g[47] = le))
        : (le = g[47]);
      var se;
      return (
        g[48] !== y || g[49] !== ae || g[50] !== le
          ? ((se = c.jsxs(r("WAWebDrawer.react"), {
              ref: y,
              testid: void 0,
              theme: "gallery",
              tsNavigationData: re,
              children: [ae, le],
            })),
            (g[48] = y),
            (g[49] = ae),
            (g[50] = le),
            (g[51] = se))
          : (se = g[51]),
        se
      );
    }
    function _() {
      r("WAWebEnforcementActionLogging").setSurface(
        o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE
          .REMEDIATION_OPTION_SCREEN,
      );
    }
    function f() {
      (r("WAWebEnforcementActionLogging").logGoToHelpCentreClick(),
        o("WAWebExternalLink.react").openExternalLink(
          "https://www.whatsapp.com/legal/ip-policy",
        ));
    }
    l.default = p;
  },
  226,
);
