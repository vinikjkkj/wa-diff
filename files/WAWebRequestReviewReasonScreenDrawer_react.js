__d(
  "WAWebRequestReviewReasonScreenDrawer.react",
  [
    "fbt",
    "WALogger",
    "WAWebButton.react",
    "WAWebCommonNewsletterEnums",
    "WAWebCommonNewsletterIntegrityStrings",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEnforcementActionLogging",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebNewsletterIntegrityUtils",
    "WAWebNewsletterRequestReviewReasons",
    "WAWebRadio.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWamEnumInteractionSurface",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = ["ref"],
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useState,
      f = {
        container: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x6s0dn4",
          justifyContent: "x1nhvcw1",
          $$css: !0,
        },
        header: { textAlign: "x2b8uid", lineHeight: "x1evy7pa", $$css: !0 },
      };
    function g(e) {
      var t = e.isDisabled,
        n = e.onSubmit,
        r = e.submittingReview;
      return d.jsx(o("WAWebFlex.react").FlexRow, {
        xstyle: o("WAWebUISpacing").uiMargin.all20,
        align: "center",
        justify: "center",
        children: d.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
          testid: void 0,
          onClick: n,
          disabled: t,
          spinner: r,
          children: o(
            "WAWebCommonNewsletterIntegrityStrings",
          ).getRequestAppealButtonText(),
        }),
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      return d.jsx(o("WAWebFlex.react").FlexRow, {
        align: "center",
        justify: "center",
        children: d.jsx(o("WAWebText.react").WAWebTextLarge, {
          weight: "medium",
          xstyle: f.header,
          padding: 16,
          alignSelf: "center",
          color: "primary",
          children: s._(/*BTDS*/ "Why do you want a review?"),
        }),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(t) {
      var a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, u),
        l = i.isStatusContent,
        s = i.onBack,
        c = i.onSubmit,
        m = i.onSuccess,
        y = i.reviewType;
      p(function () {
        r("WAWebEnforcementActionLogging").setSurface(
          o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE
            .REQUEST_REVIEW_REASON_SCREEN,
        );
      }, []);
      var C = _(null),
        b = C[0],
        v = C[1],
        S = _(!1),
        R = S[0],
        L = S[1],
        E = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (b == null) {
              o(
                "WAWebNewsletterIntegrityUtils",
              ).showReviewSubmissionFailureToast();
              return;
            }
            L(!0);
            try {
              (yield c(b),
                o(
                  "WAWebNewsletterIntegrityUtils",
                ).showReviewSubmissionSuccessToast(),
                m());
            } catch (e) {
              o(
                "WAWebNewsletterIntegrityUtils",
              ).showReviewSubmissionFailureToast();
            } finally {
              L(!1);
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        k;
      switch (y) {
        case o("WAWebCommonNewsletterEnums").ReviewType.RESPONSE_REPORT:
          k = o(
            "WAWebNewsletterRequestReviewReasons",
          ).RESPONSE_REPORT_APPEAL_REASON_LIST;
          break;
        case o("WAWebCommonNewsletterEnums").ReviewType.REPORT:
          k = o(
            "WAWebNewsletterRequestReviewReasons",
          ).REPORT_APPEAL_REASON_LIST;
          break;
        case o("WAWebCommonNewsletterEnums").ReviewType.STATUS_REPORT:
          k = o(
            "WAWebNewsletterRequestReviewReasons",
          ).STATUS_REPORT_APPEAL_REASON_LIST;
          break;
        case o("WAWebCommonNewsletterEnums").ReviewType.ENFORCEMENT:
          k =
            l === !0
              ? o("WAWebNewsletterRequestReviewReasons")
                  .STATUS_ENFORCEMENT_APPEAL_REASONS_LIST
              : o("WAWebNewsletterRequestReviewReasons")
                  .ENFORCEMENT_APPEAL_REASONS_LIST;
          break;
      }
      if (!k) {
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[RequestReviewReasonScreen] reasonList unavailable",
            ])),
        );
        return;
      }
      return d.jsxs(r("WAWebDrawer.react"), {
        theme: "gallery",
        ref: a,
        testid: void 0,
        tsNavigationData: {
          surface: "unknown",
          viewName: "newsletter-review-reason",
        },
        children: [
          d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: r("WAWebFbtCommon")("Request review"),
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: function () {
              s == null || s();
            },
          }),
          d.jsx(r("WAWebDrawerBody.react"), {
            children: d.jsxs(r("WAWebDrawerSection.react"), {
              theme: "full-height",
              animation: !1,
              xstyle: [
                f.container,
                o("WAWebUISpacing").uiPadding.vert36,
                o("WAWebUISpacing").uiPadding.horiz48,
                o("WAWebUISpacing").uiMargin.bottom0,
              ],
              children: [
                d.jsx(h, {}),
                d.jsx(o("WAWebRadio.react").RadioGroup, {
                  name: "appeal-radio-group",
                  testid: void 0,
                  theme: o("WAWebRadio.react").RadioWithLabelThemeEnum.NORMAL,
                  checkedValue: b,
                  options: k.map(function (e) {
                    var t = e.getLabel,
                      n = e.value;
                    return {
                      value: n,
                      label: t(),
                      onChange: function () {
                        return v(n);
                      },
                    };
                  }),
                }),
                d.jsx(g, {
                  onSubmit: E,
                  isDisabled: b == null || R,
                  submittingReview: R,
                }),
              ],
            }),
          }),
        ],
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"),
      (l.InAppReviewFooterSection = g),
      (l.InAppReviewReasonHeaderSection = h),
      (l.RequestReviewReasonScreen = y));
  },
  226,
);
