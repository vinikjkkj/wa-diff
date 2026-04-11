__d(
  "WAWebSeeReviewDetailScreenDrawer.react",
  [
    "fbt",
    "WAWebAppealOutcomeHeader.react",
    "WAWebClock",
    "WAWebCommonNewsletterEnums",
    "WAWebCommonNewsletterIntegrityStrings",
    "WAWebDSADateUtils",
    "WAWebDisplayType",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEnforcementActionLogging",
    "WAWebEnforcementStatusThumbnail.react",
    "WAWebFlex.react",
    "WAWebGalleryMsg.react",
    "WAWebMessagePosition",
    "WAWebMessageWrapper.react",
    "WAWebMsgCollection",
    "WAWebNewsletterIntegrityDrawerUiComponents.react",
    "WAWebNewsletterIntegrityUtils",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWamEnumInteractionSurface",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u.useEffect,
      m = {
        container: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x6s0dn4",
          justifyContent: "x1nhvcw1",
          $$css: !0,
        },
        header: { textAlign: "x2b8uid", lineHeight: "x1evy7pa", $$css: !0 },
      };
    function p(e) {
      var t,
        n,
        r = o("react-compiler-runtime").c(20),
        a = e.currentEnforcementAppeal,
        i =
          ((t = a.violatingContentData) == null ? void 0 : t.contentType) ===
            o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS ||
          ((n = a.enforcementExtraData) == null ||
          (n = n.enforcementTargetData) == null
            ? void 0
            : n.contentType) ===
            o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS,
        l;
      r[0] !== a.appealState || r[1] !== a.enforcementType || r[2] !== i
        ? ((l = o(
            "WAWebNewsletterIntegrityUtils",
          ).getTitleBasedOnEnforcementTypeAndOutcome(
            a.appealState,
            a.enforcementType,
            i,
          )),
          (r[0] = a.appealState),
          (r[1] = a.enforcementType),
          (r[2] = i),
          (r[3] = l))
        : (l = r[3]);
      var u;
      r[4] !== l
        ? ((u = c.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: c.jsx(o("WAWebText.react").WAWebTextLarge, {
              weight: "medium",
              xstyle: m.header,
              testid: void 0,
              padding: 12,
              alignSelf: "center",
              color: "primary",
              children: l,
            }),
          })),
          (r[4] = l),
          (r[5] = u))
        : (u = r[5]);
      var d;
      r[6] !== a.appealState ||
      r[7] !== a.countryCode ||
      r[8] !== a.enforcementType ||
      r[9] !== a.enforcementViolationCategory ||
      r[10] !== i
        ? ((d = o(
            "WAWebNewsletterIntegrityUtils",
          ).getHeaderBodyTextBasedOnEnforcementTypeAndOutcome({
            appealOutcome: a.appealState,
            enforcementType: a.enforcementType,
            countries: a.countryCode,
            enforcementViolationCategory: a.enforcementViolationCategory,
            isStatusContent: i,
          })),
          (r[6] = a.appealState),
          (r[7] = a.countryCode),
          (r[8] = a.enforcementType),
          (r[9] = a.enforcementViolationCategory),
          (r[10] = i),
          (r[11] = d))
        : (d = r[11]);
      var p;
      r[12] !== d
        ? ((p = c.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
              testid: void 0,
              padding: 12,
              color: "secondary",
              xstyle: m.header,
              children: d,
            }),
          })),
          (r[12] = d),
          (r[13] = p))
        : (p = r[13]);
      var _;
      r[14] !== a.appealCreationTime
        ? ((_ = c.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
              color: "secondaryLighter",
              padding: 8,
              testid: void 0,
              xstyle: m.header,
              children: s._(
                /*BTDS*/ "Date requested : {appeal_creation_time}",
                [
                  s._param(
                    "appeal_creation_time",
                    o("WAWebDSADateUtils").getDSADateDisplayString(
                      a.appealCreationTime,
                    ),
                  ),
                ],
              ),
            }),
          })),
          (r[14] = a.appealCreationTime),
          (r[15] = _))
        : (_ = r[15]);
      var f;
      return (
        r[16] !== u || r[17] !== p || r[18] !== _
          ? ((f = c.jsxs(c.Fragment, { children: [u, p, _] })),
            (r[16] = u),
            (r[17] = p),
            (r[18] = _),
            (r[19] = f))
          : (f = r[19]),
        f
      );
    }
    function _(t) {
      var n,
        a,
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        s = l.chat,
        u = l.currentEnforcementAppeal,
        _ = l.onBack;
      d(function () {
        r("WAWebEnforcementActionLogging").setSurface(
          o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE
            .SEE_REVIEW_DETAILS_SCREEN,
        );
      }, []);
      var f =
          u.msgData != null
            ? o("WAWebMsgCollection").MsgCollection.gadd(u.msgData)
            : null,
        g = o(
          "WAWebNewsletterIntegrityDrawerUiComponents.react",
        ).DSAWhatYouNeedToKnowInfoSection(
          o(
            "WAWebNewsletterIntegrityDrawerUiComponents.react",
          ).getDecisionModalCategoryForEnforcementSource(u.enforcementSource),
        ),
        h =
          u.appealState !== "CONTENT_UNAVAILABLE" &&
          (u.enforcementType ===
            o("WAWebCommonNewsletterEnums").EnforcementType.VIOLATING_MSG ||
            u.enforcementType ===
              o("WAWebCommonNewsletterEnums").EnforcementType.SUSPEND_INFORM ||
            u.enforcementType ===
              o("WAWebCommonNewsletterEnums").EnforcementType
                .GEOSUSPEND_INFORM) &&
          u.msgData != null,
        y =
          ((n = u.violatingContentData) == null ? void 0 : n.contentType) ===
            o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS ||
          ((a = u.enforcementExtraData) == null ||
          (a = a.enforcementTargetData) == null
            ? void 0
            : a.contentType) ===
            o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS;
      return c.jsxs(r("WAWebDrawer.react"), {
        theme: "gallery",
        ref: i,
        testid: void 0,
        tsNavigationData: {
          surface: "unknown",
          viewName: "newsletter-review-detail",
        },
        children: [
          c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: o(
              "WAWebCommonNewsletterIntegrityStrings",
            ).getNewsletterAppealOutcomeDrawerTitle(),
            onBack: _,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          }),
          c.jsx(r("WAWebDrawerBody.react"), {
            children: c.jsxs(r("WAWebDrawerSection.react"), {
              animation: !1,
              theme: "full-height",
              children: [
                c.jsxs(o("WAWebFlex.react").FlexRow, {
                  xstyle: [
                    m.container,
                    o("WAWebUISpacing").uiPadding.vert36,
                    o("WAWebUISpacing").uiPadding.horiz48,
                    o("WAWebUISpacing").uiMargin.bottom0,
                  ],
                  children: [
                    c.jsx(r("WAWebAppealOutcomeHeader.react"), {
                      appealOutcome: u.appealState,
                    }),
                    c.jsx(p, { currentEnforcementAppeal: u }),
                    u.appealState === "REJECT" &&
                      c.jsx(
                        o("WAWebNewsletterIntegrityDrawerUiComponents.react")
                          .InfoSection,
                        { section: g },
                        g.key,
                      ),
                  ],
                }),
                h &&
                  f != null &&
                  c.jsxs(
                    r("WAWebGalleryMsg.react"),
                    {
                      children: [
                        c.jsxs(o("WAWebFlex.react").FlexRow, {
                          xstyle: [
                            o("WAWebUISpacing").uiMargin.bottom10,
                            o("WAWebUISpacing").uiPadding.horiz24,
                            o("WAWebUISpacing").uiMargin.top8,
                          ],
                          justify: "all",
                          align: "center",
                          children: [
                            o(
                              "WAWebNewsletterIntegrityDrawerUiComponents.react",
                            ).getMessageTitleForViolatingMessage(s),
                            c.jsx(o("WAWebFlex.react").FlexRow, {
                              align: "center",
                              grow: 1,
                              shrink: 0,
                              justify: "end",
                              children: c.jsx(
                                o("WAWebText.react").WAWebTextSmall,
                                {
                                  children: o("WAWebClock").Clock.relativeStr(
                                    f.t,
                                  ),
                                },
                              ),
                            }),
                          ],
                        }),
                        y
                          ? c.jsx(r("WAWebEnforcementStatusThumbnail.react"), {
                              msg: f,
                            })
                          : c.jsx(r("WAWebMessageWrapper.react"), {
                              msg: f,
                              displayType:
                                o("WAWebDisplayType").DISPLAY_TYPE
                                  .CHANNEL_ALERTS_MSGS,
                              position: o("WAWebMessagePosition").MsgPosition
                                .MID,
                              errorBoundaryName:
                                "see-review-detail-screen-drawer",
                            }),
                      ],
                    },
                    f.id.toString(),
                  ),
              ],
            }),
          }),
        ],
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
