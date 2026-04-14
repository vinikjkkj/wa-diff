__d(
  "WAWebNewsletterIntegrityDrawerUiComponents.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebCommonNewsletterEnums",
    "WAWebCopyPasteSelectable.react",
    "WAWebDSADateUtils",
    "WAWebDetailImage.react",
    "WAWebE2ELocationV2Icon.react",
    "WAWebEmojiText.react",
    "WAWebEnforcementActionLogging",
    "WAWebFlex.react",
    "WAWebMaterialInfoIcon.react",
    "WAWebModalManager",
    "WAWebNewsletterDSAModals.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterModalsUtils.react",
    "WAWebNullFunc",
    "WAWebRemediationOptionSection.react",
    "WAWebSettingsSecureIcon.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WDSIconIcInfo.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        header: { textAlign: "x2b8uid", lineHeight: "x1evy7pa", $$css: !0 },
        secondaryColor: { color: "xhslqc4", $$css: !0 },
        learnMore: { cursor: "x1ypdohk", fontWeight: "x117nqv4", $$css: !0 },
        newsletterInfoRow: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          fontSize: "x1f6kntn",
          color: "xhslqc4",
          $$css: !0,
        },
        profilePic: { minWidth: "xnei2rj", $$css: !0 },
        iconGray: { color: "x1tvajsz", $$css: !0 },
      };
    function d(e) {
      var t = e.content;
      return u.jsx(o("WAWebFlex.react").FlexRow, {
        align: "center",
        justify: "center",
        children: u.jsx(o("WAWebText.react").WAWebTextLarge, {
          testid: void 0,
          xstyle: [c.header, o("WAWebUISpacing").uiPadding.top16],
          weight: "medium",
          children: t,
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.content;
      return t != null
        ? u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
              testid: void 0,
              xstyle: [c.header, o("WAWebUISpacing").uiPadding.vert8],
              children: t,
            }),
          })
        : null;
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.section;
      if (t != null) {
        var n = t.bullets,
          r = t.key,
          a = t.subtitle,
          i = t.testId,
          l = t.title;
        return u.jsxs(
          o("WAWebFlex.react").FlexColumn,
          {
            justify: "stretch",
            testid: void 0,
            children: [
              u.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
                color: "primary",
                paddingTop: 24,
                paddingBottom: 12,
                children: l(),
              }),
              a != null &&
                u.jsx(o("WAWebText.react").WAWebTextSmall, { children: a() }),
              n != null &&
                u.jsx(o("WAWebNewsletterModalsUtils.react").BulletPointList, {
                  bullets: n,
                }),
            ],
          },
          r,
        );
      }
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e, t) {
      var n = [].concat(
        t === !0
          ? []
          : [
              {
                Icon: o("WAWebMaterialInfoIcon.react").MaterialInfoIcon,
                iconSize: 22,
                iconXstyle: c.secondaryColor,
                text: o("WAWebNullFunc").returnNull,
                subtext: function () {
                  return s._(
                    /*BTDS*/ "WhatsApp requires all channels to follow our Channels Guidelines. {=m1}",
                    [
                      s._implicitParam(
                        "=m1",
                        u.jsx(
                          o("WAWebCopyPasteSelectable.react").SelectableLink,
                          {
                            xstyle: c.learnMore,
                            selectable: !0,
                            onClick: R,
                            children: s._(/*BTDS*/ "Learn more"),
                          },
                        ),
                      ),
                    ],
                  );
                },
              },
            ],
        [
          {
            Icon: o("WAWebSettingsSecureIcon.react").SettingsSecureIcon,
            iconXstyle: c.secondaryColor,
            text: o("WAWebNullFunc").returnNull,
            testid: "how-we-made-decision-bullet",
            subtext: function () {
              return s._(/*BTDS*/ "How we made this decision. {=m1}", [
                s._implicitParam(
                  "=m1",
                  u.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
                    xstyle: c.learnMore,
                    selectable: !0,
                    onClick: function () {
                      (r(
                        "WAWebEnforcementActionLogging",
                      ).logLearnMoreHowClick(),
                        o("WAWebModalManager").ModalManager.open(
                          u.jsx(
                            o("WAWebNewsletterDSAModals.react")
                              .NewsletterDSADecisionModal,
                            { DSADecisionModalCategory: e },
                          ),
                        ));
                    },
                    children: s._(/*BTDS*/ "Learn more"),
                  }),
                ),
              ]);
            },
          },
        ],
      );
      return (
        o("WAWebNewsletterGatingUtils").isDSAEUOnlyNoticeEnabled() &&
          n.push({
            Icon: o("WAWebE2ELocationV2Icon.react").E2ELocationV2Icon,
            iconXstyle: c.secondaryColor,
            testid: "dsa-eu-only-notice-bullet",
            text: o("WAWebNullFunc").returnNull,
            subtext: function () {
              return s._(/*BTDS*/ "Information for people in the EU. {=m1}", [
                s._implicitParam(
                  "=m1",
                  u.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
                    xstyle: c.learnMore,
                    selectable: !0,
                    onClick: L,
                    children: s._(/*BTDS*/ "Learn more"),
                  }),
                ),
              ]);
            },
          }),
        {
          key: "what-you-need-to-know",
          testId: "what-you-need-to-know",
          title: function () {
            return s._(/*BTDS*/ "What you need to know");
          },
          bullets: n,
        }
      );
    }
    function f(e) {
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        xstyle: c.newsletterInfoRow,
        grow: 0,
        align: "center",
        children: [
          u.jsx(o("WAWebDetailImage.react").DetailImage, {
            id: e.id,
            size: 24,
            xstyle: c.profilePic,
          }),
          u.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: e.formattedTitle,
            xstyle: o("WAWebUISpacing").uiMargin.horiz9,
            ellipsify: !0,
          }),
        ],
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      switch (e) {
        case "COPS":
        case "RM":
          return o("WAWebCommonNewsletterEnums")
            .NewsletterDSADecisionModalCategory.RM_COPS;
        case "RM_PRODUCT_RESTRICTION":
          return o("WAWebCommonNewsletterEnums")
            .NewsletterDSADecisionModalCategory.RM_PRODUCT_RESTRICTION;
        case "IP_SRT":
          return o("WAWebCommonNewsletterEnums")
            .NewsletterDSADecisionModalCategory.IP_SRT_VIOLATION;
        default:
          return o("WAWebCommonNewsletterEnums")
            .NewsletterDSADecisionModalCategory.GENERIC_VIOLATION;
      }
    }
    function h(e) {
      var t = e.reportTimestamp;
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        justify: "center",
        paddingTop: 8,
        gap: 8,
        children: [
          u.jsx(r("WDSIconIcInfo.react"), {
            height: 16,
            width: 16,
            xstyle: c.iconGray,
          }),
          u.jsx(o("WAWebText.react").WAWebTextSmall, {
            testid: void 0,
            children: s._(/*BTDS*/ "Date reported: {report_creation_time}", [
              s._param(
                "report_creation_time",
                o("WAWebDSADateUtils").getDSADateDisplayString(t),
              ),
            ]),
          }),
        ],
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.requestTimestamp;
      return t == null
        ? null
        : u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            paddingTop: 8,
            gap: 8,
            children: [
              u.jsx(r("WDSIconIcInfo.react"), {
                height: 16,
                width: 16,
                xstyle: c.iconGray,
              }),
              u.jsx(o("WAWebText.react").WAWebTextSmall, {
                testid: void 0,
                children: s._(
                  /*BTDS*/ "Review requested: {report_creation_time}",
                  [
                    s._param(
                      "report_creation_time",
                      o("WAWebDSADateUtils").getDSADateDisplayString(t),
                    ),
                  ],
                ),
              }),
            ],
          });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.handleDelete,
        n = e.title;
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        columnGap: 12,
        children: [
          u.jsx(o("WAWebButton.react").WAWebButtonSecondaryDestructive, {
            testid: void 0,
            stretch: !1,
            onClick: t,
            children: n,
          }),
          " ",
        ],
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = e.enforcementType,
        n = e.onClickSeeOptions;
      return u.jsx(o("WAWebFlex.react").FlexRow, {
        xstyle: o("WAWebUISpacing").uiMargin.all10,
        justify: "center",
        children: u.jsx(r("WAWebRemediationOptionSection.react"), {
          buttonType: "primary",
          stretch: !1,
          onClickSeeOptions: n,
          enforcementType: t,
        }),
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.subtext,
        n = e.testid,
        r = e.text;
      return u.jsx(o("WAWebFlex.react").FlexRow, {
        className: "x9f619 xh8yej3 x1qjc9v5",
        paddingStart: 8,
        paddingTop: 4,
        paddingBottom: 4,
        testid: void 0,
        marginBottom: 8,
        children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
          children: [
            u.jsx(o("WAWebText.react").WAWebTextTitle, { children: r }),
            u.jsx(o("WAWebText.react").WAWebTextSmall, { children: t }),
          ],
        }),
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t = e.points;
      return t.map(function (e, t) {
        return u.jsx(
          v,
          { text: e.text(), subtext: e.subtext(), testid: void 0 },
          t,
        );
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R() {
      (r("WAWebEnforcementActionLogging").logLearnMoreWhyClick(),
        o("WAWebModalManager").ModalManager.open(
          u.jsx(
            o("WAWebNewsletterDSAModals.react").NewsletterDSAGuidelinesModal,
            {},
          ),
        ));
    }
    function L() {
      (r("WAWebEnforcementActionLogging").logLearnMoreEuClick(),
        o("WAWebModalManager").ModalManager.open(
          u.jsx(
            o("WAWebNewsletterDSAModals.react").NewsletterDSAEUNoticeModal,
            {},
          ),
        ));
    }
    ((l.HeaderTitle = d),
      (l.SubHeaderTitle = m),
      (l.InfoSection = p),
      (l.DSAWhatYouNeedToKnowInfoSection = _),
      (l.getMessageTitleForViolatingMessage = f),
      (l.getDecisionModalCategoryForEnforcementSource = g),
      (l.DateReported = h),
      (l.DateReviewRequested = y),
      (l.DeleteButton = C),
      (l.EnforcementDetailsFooter = b),
      (l.DSBList = S));
  },
  226,
);
