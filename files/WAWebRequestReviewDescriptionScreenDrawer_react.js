__d(
  "WAWebRequestReviewDescriptionScreenDrawer.react",
  [
    "fbt",
    "WAWebBusinessHoursIcon.react",
    "WAWebButton.react",
    "WAWebCommonNewsletterEnums",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEnforcementActionLogging",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebRequestReviewHeader.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWamEnumInteractionSurface",
    "WDSIconIcInfo.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = c.useEffect,
      p = {
        container: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x6s0dn4",
          justifyContent: "x1nhvcw1",
          $$css: !0,
        },
        header: { textAlign: "x2b8uid", lineHeight: "x1evy7pa", $$css: !0 },
        row: { display: "x78zum5", width: "xh8yej3", $$css: !0 },
        secondaryColor: { color: "xhslqc4", $$css: !0 },
      };
    function _(e) {
      var t = e.onNext;
      return d.jsx(o("WAWebFlex.react").FlexRow, {
        align: "center",
        justify: "center",
        xstyle: o("WAWebUISpacing").uiMargin.all8,
        children: d.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
          onClick: t,
          testid: void 0,
          children: r("WAWebFbtCommon")("Next"),
        }),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.description,
        n = e.icon,
        a = e.testid;
      return d.jsxs(
        "div",
        babelHelpers.extends(
          {},
          (u || (u = r("stylex"))).props([
            p.row,
            o("WAWebUISpacing").uiMargin.vert8,
          ]),
          {
            children: [
              d.jsx("div", {
                className: "x78zum5 xl56j7k x1849jeq x1gnnpzl",
                children: n,
              }),
              d.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  u.props(o("WAWebUISpacing").uiMargin.start24),
                  {
                    children: d.jsx(o("WAWebText.react").WAWebTextMuted, {
                      color: "secondaryLighter",
                      testid: void 0,
                      children: t,
                    }),
                  },
                ),
              ),
            ],
          },
        ),
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.isStatusContent,
        n = e.reviewType,
        a =
          n === o("WAWebCommonNewsletterEnums").ReviewType.REPORT ||
          n === o("WAWebCommonNewsletterEnums").ReviewType.RESPONSE_REPORT ||
          n === o("WAWebCommonNewsletterEnums").ReviewType.STATUS_REPORT,
        i;
      a
        ? (i = [])
        : t === !0
          ? (i = [
              {
                description: s._(
                  /*BTDS*/ "If your channel and statuses follow our Channel Guidelines, your channel will be reopened.",
                ),
                Icon: r("WDSIconIcInfo.react"),
                iconSize: 24,
              },
              {
                description: s._(
                  /*BTDS*/ "We may not be able to restore a status for reviews requested after 24 hours.",
                ),
                Icon: o("WAWebBusinessHoursIcon.react").BusinessHoursIcon,
                iconSize: 24,
              },
            ])
          : (i = [
              {
                description: s._(
                  /*BTDS*/ "If your channel and updates follow our Channel Guidelines, your channel will be reopened.",
                ),
                Icon: r("WDSIconIcInfo.react"),
                iconSize: 24,
              },
              {
                description: s._(
                  /*BTDS*/ "We may not be able to restore updates for reviews requested after 30 days.",
                ),
                Icon: o("WAWebBusinessHoursIcon.react").BusinessHoursIcon,
                iconSize: 24,
              },
            ]);
      var l;
      switch (n) {
        case o("WAWebCommonNewsletterEnums").ReviewType.RESPONSE_REPORT: {
          l = s._(
            /*BTDS*/ "You can ask us to take another look at your report. Our Support team will review your report to see if it follows our {=m2}.",
            [
              s._implicitParam(
                "=m2",
                d.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                  children: s._(/*BTDS*/ "Channels Guidelines"),
                }),
              ),
            ],
          );
          break;
        }
        case o("WAWebCommonNewsletterEnums").ReviewType.STATUS_REPORT:
        case o("WAWebCommonNewsletterEnums").ReviewType.REPORT: {
          l = s._(
            /*BTDS*/ "You can ask us to take another look at your report. Our Support team will check to see if this channel follows our {=m2}.",
            [
              s._implicitParam(
                "=m2",
                d.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                  children: s._(/*BTDS*/ "Channels Guidelines"),
                }),
              ),
            ],
          );
          break;
        }
        case o("WAWebCommonNewsletterEnums").ReviewType.ENFORCEMENT: {
          l =
            t === !0
              ? s._(
                  /*BTDS*/ "You can ask us to take another look at your channel. Our Support team will check your statuses to see if your channel follows our {=m2}.",
                  [
                    s._implicitParam(
                      "=m2",
                      d.jsx(o("WAWebExternalLink.react").ExternalLink, {
                        href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                        onClick: y,
                        children: s._(/*BTDS*/ "Channels Guidelines"),
                      }),
                    ),
                  ],
                )
              : s._(
                  /*BTDS*/ "You can ask us to take another look at your channel. Our Support team will check your updates to see if your channel follows our {=m2}.",
                  [
                    s._implicitParam(
                      "=m2",
                      d.jsx(o("WAWebExternalLink.react").ExternalLink, {
                        href: o("WAWebFaqUrl").getNewsletterGuidelinesFaqUrl(),
                        onClick: y,
                        children: s._(/*BTDS*/ "Channels Guidelines"),
                      }),
                    ),
                  ],
                );
          break;
        }
      }
      return d.jsxs(d.Fragment, {
        children: [
          d.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: d.jsx(r("WAWebRequestReviewHeader.react"), {
              height: 88,
              width: 88,
            }),
          }),
          d.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: d.jsx(o("WAWebText.react").WAWebTextLarge, {
              color: "primary",
              padding: 16,
              weight: "medium",
              xstyle: p.header,
              children: s._(/*BTDS*/ "Request review"),
            }),
          }),
          d.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            xstyle: o("WAWebUISpacing").uiMargin.bottom16,
            children: d.jsx(o("WAWebText.react").WAWebTextMuted, {
              color: "secondaryLighter",
              marginTop: 8,
              testid: void 0,
              xstyle: p.header,
              children: l,
            }),
          }),
          i.map(function (e, t) {
            var n = e.Icon,
              r = e.description,
              a = e.iconSize;
            return d.jsx(
              f,
              {
                description: r,
                icon: d.jsx(n, {
                  height: a,
                  width: a,
                  xstyle: o("WAWebUISpacing").uiMargin.vert8,
                  iconXstyle: p.secondaryColor,
                }),
                testid: void 0,
              },
              t,
            );
          }),
        ],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.isStatusContent,
        l = a.onBack,
        s = a.onNext,
        u = a.reviewType;
      return (
        m(function () {
          r("WAWebEnforcementActionLogging").setSurface(
            o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE
              .REQUEST_REVIEW_DESCRIPTION_SCREEN,
          );
        }, []),
        d.jsxs(r("WAWebDrawer.react"), {
          ref: n,
          testid: void 0,
          theme: "gallery",
          tsNavigationData: {
            surface: "unknown",
            viewName: "newsletter-review-description",
          },
          children: [
            d.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              onBack: l,
              title: r("WAWebFbtCommon")("Request review"),
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            }),
            d.jsx(r("WAWebDrawerBody.react"), {
              children: d.jsxs(r("WAWebDrawerSection.react"), {
                animation: !1,
                theme: "full-height",
                xstyle: [
                  p.container,
                  o("WAWebUISpacing").uiPadding.vert36,
                  o("WAWebUISpacing").uiPadding.horiz48,
                  o("WAWebUISpacing").uiMargin.bottom0,
                ],
                children: [
                  d.jsx(g, { reviewType: u, isStatusContent: i }),
                  d.jsx(_, { onNext: s }),
                ],
              }),
            }),
          ],
        })
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      r("WAWebEnforcementActionLogging").logChannelGuidelinesClick();
    }
    ((l.AppealHeaderSectionRow = f), (l.RequestReviewDescriptionScreen = h));
  },
  226,
);
