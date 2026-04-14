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
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.chat,
        l = a.onAppealClick,
        u = a.onBack,
        p = a.onClick,
        f = a.onClose,
        g = o(
          "useWAWebNewsletterEnforcementAlerts",
        ).useNewsletterEnforcementAlerts(i),
        h = g[0],
        y = g[1],
        C = g[2],
        b = o("useWAWebNewsletterIsSuspended").useNewsletterIsSuspended(i);
      d(function () {
        r("WAWebEnforcementActionLogging").setSurface(
          o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE
            .ENFORCEMENT_ALERT_LIST,
        );
      }, []);
      var v = function () {
          (r("WAWebEnforcementActionLogging").logChannelGuidelinesClick(),
            o("WAWebExternalLink.react").openExternalLink(
              o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
            ));
        },
        S;
      switch (h) {
        case o("useWAWebNewsletterEnforcementAlerts").FetchAlertStatus.FETCHING:
          S = c.jsx(o("WAWebFlex.react").FlexColumn, {
            margin: 32,
            xstyle: m.spinner,
            children: c.jsx(o("WAWebSpinner.react").Spinner, {
              color: "default",
              size: 40,
              stroke: 4,
            }),
          });
          break;
        case o("useWAWebNewsletterEnforcementAlerts").FetchAlertStatus
          .SUCCESS: {
          var R = r("compactMap")(C, function (e) {
              return _(e, p, b);
            }),
            L = R.length > 0;
          S =
            !L &&
            o(
              "WAWebNewsletterEnforcementAlertCollection",
            ).NewsletterEnforcementAlertCollection.getAppeals().length === 0
              ? c.jsx(r("WAWebNoNewsletterAlertsDrawer.react"), {})
              : c.jsxs(c.Fragment, {
                  children: [
                    L &&
                      c.jsxs(c.Fragment, {
                        children: [
                          c.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
                            color: "secondaryLighter",
                            paddingStart: 24,
                            paddingTop: 24,
                            testid: void 0,
                            children: s._(/*BTDS*/ "Alerts"),
                          }),
                          R,
                        ],
                      }),
                    c.jsxs(c.Fragment, {
                      children: [
                        o(
                          "WAWebNewsletterEnforcementAlertCollection",
                        ).NewsletterEnforcementAlertCollection.getAppeals()
                          .length !== 0 &&
                          c.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
                            color: "secondaryLighter",
                            paddingStart: 24,
                            paddingTop: L ? 40 : 12,
                            testid: void 0,
                            children: s._(/*BTDS*/ "Reviews"),
                          }),
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
                                  l(e);
                                },
                                subtitle: o(
                                  "WAWebNewsletterIntegrityUtils",
                                ).getOutcomeListSubtitle(
                                  (n = e.appealCreationTime) != null ? n : 0,
                                ),
                                testId:
                                  "newsletter-alerts-appeal-status-row-" + t,
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
                            children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
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
                                  onClick: v,
                                  testid: void 0,
                                  children: s._(
                                    /*BTDS*/ "See Channels Guidelines",
                                  ),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                  ],
                });
          break;
        }
        case o("useWAWebNewsletterEnforcementAlerts").FetchAlertStatus.ERROR:
          S = c.jsx(o("WAWebEmptyState.react").EmptyErrorStateWithButton, {
            center: !0,
            onClick: y,
            testid: void 0,
            text: s._(/*BTDS*/ "Something went wrong. Try again."),
          });
          break;
        case o("useWAWebNewsletterEnforcementAlerts").FetchAlertStatus.OFFLINE:
          S = c.jsx(o("WAWebEmptyState.react").EmptyErrorStateWithButton, {
            center: !0,
            onClick: y,
            testid: void 0,
            text: o(
              "WAWebCommonNewsletterStrings",
            ).getNoInternetConnectionText(),
            xstyle: [
              o("WAWebUISpacing").uiMargin.top48,
              o("WAWebUISpacing").uiPadding.top48,
            ],
          });
          break;
      }
      return c.jsxs(r("WAWebDrawer.react"), {
        ref: n,
        testid: void 0,
        theme: "gallery",
        tsNavigationData: {
          surface: "unknown",
          viewName: "newsletter-enforcement-alert",
        },
        children: [
          c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            onBack: u,
            onCancel: f,
            title: o(
              "WAWebCommonNewsletterIntegrityStrings",
            ).getNewsletterAlertsDrawerTitle(),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          }),
          c.jsx(r("WAWebDrawerBody.react"), {
            children: c.jsx(r("WAWebDrawerSection.react"), {
              animation: !1,
              theme: "full-height",
              children: S,
            }),
          }),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
