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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(3),
        n = e.content,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = [c.header, o("WAWebUISpacing").uiPadding.top16]), (t[0] = r))
        : (r = t[0]);
      var a;
      return (
        t[1] !== n
          ? ((a = u.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              children: u.jsx(o("WAWebText.react").WAWebTextLarge, {
                testid: void 0,
                xstyle: r,
                weight: "medium",
                children: n,
              }),
            })),
            (t[1] = n),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.content,
        r;
      return (
        t[0] !== n
          ? ((r =
              n != null
                ? u.jsx(o("WAWebFlex.react").FlexRow, {
                    align: "center",
                    justify: "center",
                    children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
                      testid: void 0,
                      xstyle: [c.header, o("WAWebUISpacing").uiPadding.vert8],
                      children: n,
                    }),
                  })
                : null),
            (t[0] = n),
            (t[1] = r))
          : (r = t[1]),
        r
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.section;
      if (n != null) {
        var r = n.bullets,
          a = n.key,
          i = n.subtitle,
          l = n.testId,
          s = n.title,
          c;
        t[0] !== s ? ((c = s()), (t[0] = s), (t[1] = c)) : (c = t[1]);
        var d;
        t[2] !== c
          ? ((d = u.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
              color: "primary",
              paddingTop: 24,
              paddingBottom: 12,
              children: c,
            })),
            (t[2] = c),
            (t[3] = d))
          : (d = t[3]);
        var m;
        t[4] !== i
          ? ((m =
              i != null &&
              u.jsx(o("WAWebText.react").WAWebTextSmall, { children: i() })),
            (t[4] = i),
            (t[5] = m))
          : (m = t[5]);
        var p;
        t[6] !== r
          ? ((p =
              r != null &&
              u.jsx(o("WAWebNewsletterModalsUtils.react").BulletPointList, {
                bullets: r,
              })),
            (t[6] = r),
            (t[7] = p))
          : (p = t[7]);
        var _;
        return (
          t[8] !== a || t[9] !== d || t[10] !== m || t[11] !== p || t[12] !== l
            ? ((_ = u.jsxs(
                o("WAWebFlex.react").FlexColumn,
                { justify: "stretch", testid: void 0, children: [d, m, p] },
                a,
              )),
              (t[8] = a),
              (t[9] = d),
              (t[10] = m),
              (t[11] = p),
              (t[12] = l),
              (t[13] = _))
            : (_ = t[13]),
          _
        );
      }
    }
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
                            onClick: L,
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
                    onClick: E,
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
      var t = o("react-compiler-runtime").c(3),
        n = e.reportTimestamp,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u.jsx(r("WDSIconIcInfo.react"), {
            height: 16,
            width: 16,
            xstyle: c.iconGray,
          })),
          (t[0] = a))
        : (a = t[0]);
      var i;
      return (
        t[1] !== n
          ? ((i = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              paddingTop: 8,
              gap: 8,
              children: [
                a,
                u.jsx(o("WAWebText.react").WAWebTextSmall, {
                  testid: void 0,
                  children: s._(
                    /*BTDS*/ "Date reported: {report_creation_time}",
                    [
                      s._param(
                        "report_creation_time",
                        o("WAWebDSADateUtils").getDSADateDisplayString(n),
                      ),
                    ],
                  ),
                }),
              ],
            })),
            (t[1] = n),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.requestTimestamp;
      if (n == null) return null;
      var a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u.jsx(r("WDSIconIcInfo.react"), {
            height: 16,
            width: 16,
            xstyle: c.iconGray,
          })),
          (t[0] = a))
        : (a = t[0]);
      var i;
      return (
        t[1] !== n
          ? ((i = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "center",
              paddingTop: 8,
              gap: 8,
              children: [
                a,
                u.jsx(o("WAWebText.react").WAWebTextSmall, {
                  testid: void 0,
                  children: s._(
                    /*BTDS*/ "Review requested: {report_creation_time}",
                    [
                      s._param(
                        "report_creation_time",
                        o("WAWebDSADateUtils").getDSADateDisplayString(n),
                      ),
                    ],
                  ),
                }),
              ],
            })),
            (t[1] = n),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.handleDelete,
        r = e.title,
        a;
      return (
        t[0] !== n || t[1] !== r
          ? ((a = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              columnGap: 12,
              children: [
                u.jsx(o("WAWebButton.react").WAWebButtonSecondaryDestructive, {
                  testid: void 0,
                  stretch: !1,
                  onClick: n,
                  children: r,
                }),
                " ",
              ],
            })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.enforcementType,
        a = e.onClickSeeOptions,
        i;
      return (
        t[0] !== n || t[1] !== a
          ? ((i = u.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: o("WAWebUISpacing").uiMargin.all10,
              justify: "center",
              children: u.jsx(r("WAWebRemediationOptionSection.react"), {
                buttonType: "primary",
                stretch: !1,
                onClickSeeOptions: a,
                enforcementType: n,
              }),
            })),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.subtext,
        r = e.testid,
        a = e.text,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = "x9f619 xh8yej3 x1qjc9v5"), (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] !== a
        ? ((l = u.jsx(o("WAWebText.react").WAWebTextTitle, { children: a })),
          (t[1] = a),
          (t[2] = l))
        : (l = t[2]);
      var s;
      t[3] !== n
        ? ((s = u.jsx(o("WAWebText.react").WAWebTextSmall, { children: n })),
          (t[3] = n),
          (t[4] = s))
        : (s = t[4]);
      var c;
      t[5] !== l || t[6] !== s
        ? ((c = u.jsxs(o("WAWebFlex.react").FlexColumn, { children: [l, s] })),
          (t[5] = l),
          (t[6] = s),
          (t[7] = c))
        : (c = t[7]);
      var d;
      return (
        t[8] !== c || t[9] !== r
          ? ((d = u.jsx(o("WAWebFlex.react").FlexRow, {
              className: i,
              paddingStart: 8,
              paddingTop: 4,
              paddingBottom: 4,
              testid: void 0,
              marginBottom: 8,
              children: c,
            })),
            (t[8] = c),
            (t[9] = r),
            (t[10] = d))
          : (d = t[10]),
        d
      );
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.points,
        r;
      return (
        t[0] !== n ? ((r = n.map(R)), (t[0] = n), (t[1] = r)) : (r = t[1]),
        r
      );
    }
    function R(e, t) {
      return u.jsx(
        v,
        { text: e.text(), subtext: e.subtext(), testid: void 0 },
        t,
      );
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L() {
      (r("WAWebEnforcementActionLogging").logLearnMoreWhyClick(),
        o("WAWebModalManager").ModalManager.open(
          u.jsx(
            o("WAWebNewsletterDSAModals.react").NewsletterDSAGuidelinesModal,
            {},
          ),
        ));
    }
    function E() {
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
