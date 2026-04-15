__d(
  "WAWebNewsletterEnforcementAlertDrawer.react",
  [
    "fbt",
    "WAWebCommonNewsletterEnums",
    "WAWebCommonNewsletterIntegrityStrings",
    "WAWebCommonNewsletterStrings",
    "WAWebDSADateUtils",
    "WAWebDivider.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEmptyState.react",
    "WAWebEnforcementActionLogging",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebNewsletterAlertsRowComponent.react",
    "WAWebNewsletterEnforcementAlertCollection",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterIntegrityIconUtils",
    "WAWebNewsletterIntegrityUtils",
    "WAWebNoNewsletterAlertsDrawer.react",
    "WAWebSpinner.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWamEnumInteractionSurface",
    "WAWebWarningIcon.react",
    "WDSText.react",
    "WDSTextualLink.react",
    "compactMap",
    "react",
    "react-compiler-runtime",
    "useWAWebNewsletterEnforcementAlerts",
    "useWAWebNewsletterIsSuspended",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u.useEffect,
      m = {
        spinner: { alignItems: "x6s0dn4", $$css: !0 },
        criticalColor: { color: "x30a034", $$css: !0 },
      },
      p = c.jsx(o("WAWebWarningIcon.react").WarningIcon, {
        iconXstyle: m.criticalColor,
        height: 24,
        width: 24,
      });
    function _(e, t, n) {
      var a, i, l;
      if (
        (e.enforcementType ===
          o("WAWebCommonNewsletterEnums").EnforcementType
            .PROFILE_PICTURE_DELETION &&
          ((a = e.appeal) == null ? void 0 : a.appealState) === "SUCCESS") ||
        !e.isValidAlertToRender()
      )
        return null;
      switch (e.enforcementType) {
        case o("WAWebCommonNewsletterEnums").EnforcementType
          .PROFILE_PICTURE_DELETION:
          return c.jsx(
            r("WAWebNewsletterAlertsRowComponent.react"),
            {
              icon: p,
              onClick: function () {
                return t(
                  e,
                  o("WAWebCommonNewsletterEnums").AlertScreen
                    .PROFILE_PICTURE_DELETION_SCREEN,
                );
              },
              subtitle: o("WAWebDSADateUtils").getSectionSubtitle(
                e.enforcementCreationTime.toString(),
              ),
              testId: "newsletter-alerts-profile-picture-deletion-row",
              title: o(
                "WAWebCommonNewsletterIntegrityStrings",
              ).getDeleteProfilePictureTextForList(),
            },
            e.enforcementId,
          );
        case o("WAWebCommonNewsletterEnums").EnforcementType.GEOSUSPEND: {
          var u = e.countryCodes;
          return u == null
            ? null
            : c.jsx(
                r("WAWebNewsletterAlertsRowComponent.react"),
                {
                  icon: p,
                  onClick: function () {
                    return t(
                      e,
                      o("WAWebCommonNewsletterEnums").AlertScreen
                        .GEOSUSPENDED_COUNTRY_DETAILED_SCREEN,
                    );
                  },
                  subtitle: o("WAWebDSADateUtils").getSectionSubtitle(
                    e.enforcementCreationTime.toString(),
                  ),
                  testId: "newsletter-alerts-geosuspension-row",
                  title: o(
                    "WAWebCommonNewsletterIntegrityStrings",
                  ).getGeosuspensionStringForChannelAlertsDrawer(u),
                },
                e.enforcementId,
              );
        }
        case o("WAWebCommonNewsletterEnums").EnforcementType
          .GEOSUSPEND_INFORM: {
          var d = e.countryCodes;
          return d == null || e.targetMsgMapForEvidence == null
            ? null
            : c.jsx(
                r("WAWebNewsletterAlertsRowComponent.react"),
                {
                  icon: p,
                  onClick: function () {
                    return t(
                      e,
                      o("WAWebCommonNewsletterEnums").AlertScreen
                        .GEOSUSPEND_INFORM_SCREEN,
                    );
                  },
                  subtitle: o("WAWebDSADateUtils").getSectionSubtitle(
                    e.enforcementCreationTime.toString(),
                  ),
                  testId: "newsletter-alerts-geosuspension-inform-row",
                  title: o(
                    "WAWebCommonNewsletterIntegrityStrings",
                  ).getGeosuspensionStringForChannelAlertsDrawer(d),
                },
                e.enforcementId,
              );
        }
        case o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND:
          return c.jsx(
            r("WAWebNewsletterAlertsRowComponent.react"),
            {
              icon: p,
              onClick: function () {
                return t(
                  e,
                  o("WAWebCommonNewsletterEnums").AlertScreen
                    .SUSPENDED_DETAILED_SCREEN,
                );
              },
              subtitle: o("WAWebDSADateUtils").getSectionSubtitle(
                e.enforcementCreationTime.toString(),
              ),
              testId: "newsletter-alerts-suspension-alert-row",
              title: s._(/*BTDS*/ "Your channel is closed"),
            },
            e.enforcementId,
          );
        case o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND_INFORM:
          return ((i =
            (l = e.targetMsgMapForEvidence) == null ? void 0 : l.size) != null
            ? i
            : 0) > 0
            ? c.jsx(
                r("WAWebNewsletterAlertsRowComponent.react"),
                {
                  icon: p,
                  onClick: function () {
                    return t(
                      e,
                      o("WAWebCommonNewsletterEnums").AlertScreen
                        .SUSPEND_INFORM_SCREEN,
                    );
                  },
                  subtitle: o("WAWebDSADateUtils").getSectionSubtitle(
                    e.enforcementCreationTime.toString(),
                  ),
                  testId: "newsletter-alerts-suspension-alert-row-2",
                  title: s._(/*BTDS*/ "Your channel is closed"),
                },
                e.enforcementId,
              )
            : null;
        case o("WAWebCommonNewsletterEnums").EnforcementType.VIOLATING_MSG:
          return !n && e.targetMsgMapForEvidence != null
            ? c.jsx(
                r("WAWebNewsletterAlertsRowComponent.react"),
                {
                  icon: p,
                  onClick: function () {
                    return t(
                      e,
                      o("WAWebCommonNewsletterEnums").AlertScreen
                        .VIOLATING_MESSAGES_SCREEN,
                    );
                  },
                  subtitle: o("WAWebDSADateUtils").getSectionSubtitle(
                    e.enforcementCreationTime.toString(),
                  ),
                  testId: "newsletter-alerts-hidden-channel-row",
                  title: s._(
                    /*BTDS*/ "Your channel is closed to new followers",
                  ),
                },
                e.enforcementId,
              )
            : null;
      }
    }
    function f(t) {
      var n = o("react-compiler-runtime").c(33),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        u = l.chat,
        p = l.onAppealClick,
        f = l.onBack,
        y = l.onClick,
        C = l.onClose,
        b = o(
          "useWAWebNewsletterEnforcementAlerts",
        ).useNewsletterEnforcementAlerts(u),
        v = b[0],
        S = b[1],
        R = b[2],
        L = o("useWAWebNewsletterIsSuspended").useNewsletterIsSuspended(u),
        E;
      (n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = []), (n[3] = E))
        : (E = n[3]),
        d(h, E));
      var k = g,
        I;
      e: switch (v) {
        case o("useWAWebNewsletterEnforcementAlerts").FetchAlertStatus
          .FETCHING: {
          var T;
          (n[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((T = c.jsx(o("WAWebFlex.react").FlexColumn, {
                margin: 32,
                xstyle: m.spinner,
                children: c.jsx(o("WAWebSpinner.react").Spinner, {
                  color: "default",
                  size: 40,
                  stroke: 4,
                }),
              })),
              (n[4] = T))
            : (T = n[4]),
            (I = T));
          break e;
        }
        case o("useWAWebNewsletterEnforcementAlerts").FetchAlertStatus
          .SUCCESS: {
          var D;
          n[5] !== L || n[6] !== y
            ? ((D = function (t) {
                return _(t, y, L);
              }),
              (n[5] = L),
              (n[6] = y),
              (n[7] = D))
            : (D = n[7]);
          var x;
          n[8] !== R || n[9] !== D
            ? ((x = r("compactMap")(R, D)), (n[8] = R), (n[9] = D), (n[10] = x))
            : (x = n[10]);
          var $ = x,
            P = $.length > 0,
            N;
          (n[11] !== $ || n[12] !== P || n[13] !== p
            ? ((N =
                !P &&
                o(
                  "WAWebNewsletterEnforcementAlertCollection",
                ).NewsletterEnforcementAlertCollection.getAppeals().length === 0
                  ? c.jsx(r("WAWebNoNewsletterAlertsDrawer.react"), {})
                  : c.jsxs(c.Fragment, {
                      children: [
                        P &&
                          c.jsxs(c.Fragment, {
                            children: [
                              c.jsx(
                                o("WAWebText.react").WAWebTextSectionTitle,
                                {
                                  color: "secondaryLighter",
                                  paddingStart: 24,
                                  paddingTop: 24,
                                  testid: void 0,
                                  children: s._(/*BTDS*/ "Alerts"),
                                },
                              ),
                              $,
                            ],
                          }),
                        c.jsxs(c.Fragment, {
                          children: [
                            o(
                              "WAWebNewsletterEnforcementAlertCollection",
                            ).NewsletterEnforcementAlertCollection.getAppeals()
                              .length !== 0 &&
                              c.jsx(
                                o("WAWebText.react").WAWebTextSectionTitle,
                                {
                                  color: "secondaryLighter",
                                  paddingStart: 24,
                                  paddingTop: P ? 40 : 12,
                                  testid: void 0,
                                  children: s._(/*BTDS*/ "Reviews"),
                                },
                              ),
                            o("WAWebNewsletterEnforcementAlertCollection")
                              .NewsletterEnforcementAlertCollection.getAppeals()
                              .map(function (e, t) {
                                var n, a, i;
                                return c.jsx(
                                  r("WAWebNewsletterAlertsRowComponent.react"),
                                  {
                                    icon: o(
                                      "WAWebNewsletterIntegrityIconUtils",
                                    ).getBadgeIconForOutcomeListBasedOnAppealState(
                                      e.appealState,
                                    ),
                                    onClick: function () {
                                      p(e);
                                    },
                                    subtitle: o(
                                      "WAWebNewsletterIntegrityUtils",
                                    ).getOutcomeListSubtitle(
                                      (n = e.appealCreationTime) != null
                                        ? n
                                        : 0,
                                    ),
                                    testId:
                                      "newsletter-alerts-appeal-status-row-" +
                                      t,
                                    title: o(
                                      "WAWebNewsletterIntegrityUtils",
                                    ).getOutcomeListTitle(
                                      e.appealState,
                                      e.enforcementType,
                                      ((a = e.violatingContentData) == null
                                        ? void 0
                                        : a.contentType) ===
                                        o("WAWebCommonNewsletterEnums")
                                          .ViolatingContentType.STATUS ||
                                        ((i = e.enforcementExtraData) == null ||
                                        (i = i.enforcementTargetData) == null
                                          ? void 0
                                          : i.contentType) ===
                                          o("WAWebCommonNewsletterEnums")
                                            .ViolatingContentType.STATUS,
                                    ),
                                  },
                                  t,
                                );
                              }),
                          ],
                        }),
                        o(
                          "WAWebNewsletterGatingUtils",
                        ).isNewsletterEnforcementPolicyEducationEnabled() &&
                          c.jsxs(c.Fragment, {
                            children: [
                              c.jsx(r("WAWebDivider.react"), {
                                direction: "horizontal",
                              }),
                              c.jsx(o("WAWebFlex.react").FlexRow, {
                                justify: "center",
                                paddingTop: 24,
                                testid: void 0,
                                children: c.jsxs(
                                  o("WAWebFlex.react").FlexColumn,
                                  {
                                    align: "center",
                                    children: [
                                      c.jsx(r("WDSText.react"), {
                                        type: "Body2",
                                        colorName: "contentDeemphasized",
                                        children: s._(
                                          /*BTDS*/ "Learn more about the rules for Channels.",
                                        ),
                                      }),
                                      c.jsx(r("WDSTextualLink.react"), {
                                        onClick: k,
                                        testid: void 0,
                                        children: s._(
                                          /*BTDS*/ "See Channels Guidelines",
                                        ),
                                      }),
                                    ],
                                  },
                                ),
                              }),
                            ],
                          }),
                      ],
                    })),
              (n[11] = $),
              (n[12] = P),
              (n[13] = p),
              (n[14] = N))
            : (N = n[14]),
            (I = N));
          break e;
        }
        case o("useWAWebNewsletterEnforcementAlerts").FetchAlertStatus.ERROR: {
          var M;
          n[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((M = s._(/*BTDS*/ "Something went wrong. Try again.")),
              (n[15] = M))
            : (M = n[15]);
          var w;
          (n[16] !== S
            ? ((w = c.jsx(
                o("WAWebEmptyState.react").EmptyErrorStateWithButton,
                { center: !0, onClick: S, testid: void 0, text: M },
              )),
              (n[16] = S),
              (n[17] = w))
            : (w = n[17]),
            (I = w));
          break e;
        }
        case o("useWAWebNewsletterEnforcementAlerts").FetchAlertStatus
          .OFFLINE: {
          var A, F;
          n[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((A = o(
                "WAWebCommonNewsletterStrings",
              ).getNoInternetConnectionText()),
              (F = [
                o("WAWebUISpacing").uiMargin.top48,
                o("WAWebUISpacing").uiPadding.top48,
              ]),
              (n[18] = A),
              (n[19] = F))
            : ((A = n[18]), (F = n[19]));
          var O;
          (n[20] !== S
            ? ((O = c.jsx(
                o("WAWebEmptyState.react").EmptyErrorStateWithButton,
                { center: !0, onClick: S, testid: void 0, text: A, xstyle: F },
              )),
              (n[20] = S),
              (n[21] = O))
            : (O = n[21]),
            (I = O));
        }
      }
      var B;
      n[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = {
            surface: "unknown",
            viewName: "newsletter-enforcement-alert",
          }),
          (n[22] = B))
        : (B = n[22]);
      var W;
      n[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = o(
            "WAWebCommonNewsletterIntegrityStrings",
          ).getNewsletterAlertsDrawerTitle()),
          (n[23] = W))
        : (W = n[23]);
      var q;
      n[24] !== f || n[25] !== C
        ? ((q = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            onBack: f,
            onCancel: C,
            title: W,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          })),
          (n[24] = f),
          (n[25] = C),
          (n[26] = q))
        : (q = n[26]);
      var U;
      n[27] !== I
        ? ((U = c.jsx(r("WAWebDrawerBody.react"), {
            children: c.jsx(r("WAWebDrawerSection.react"), {
              animation: !1,
              theme: "full-height",
              children: I,
            }),
          })),
          (n[27] = I),
          (n[28] = U))
        : (U = n[28]);
      var V;
      return (
        n[29] !== i || n[30] !== q || n[31] !== U
          ? ((V = c.jsxs(r("WAWebDrawer.react"), {
              ref: i,
              testid: void 0,
              theme: "gallery",
              tsNavigationData: B,
              children: [q, U],
            })),
            (n[29] = i),
            (n[30] = q),
            (n[31] = U),
            (n[32] = V))
          : (V = n[32]),
        V
      );
    }
    function g() {
      (r("WAWebEnforcementActionLogging").logChannelGuidelinesClick(),
        o("WAWebExternalLink.react").openExternalLink(
          o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
        ));
    }
    function h() {
      r("WAWebEnforcementActionLogging").setSurface(
        o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE
          .ENFORCEMENT_ALERT_LIST,
      );
    }
    l.default = f;
  },
  226,
);
