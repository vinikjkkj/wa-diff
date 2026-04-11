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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(11),
        n = e.description,
        a = e.icon,
        i = e.testid,
        l,
        s;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = (u || (u = r("stylex"))).props([
            p.row,
            o("WAWebUISpacing").uiMargin.vert8,
          ])),
          (s = { className: "x78zum5 xl56j7k x1849jeq x1gnnpzl" }),
          (t[0] = l),
          (t[1] = s))
        : ((l = t[0]), (s = t[1]));
      var c;
      t[2] !== a
        ? ((c = d.jsx("div", babelHelpers.extends({}, s, { children: a }))),
          (t[2] = a),
          (t[3] = c))
        : (c = t[3]);
      var m;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = (u || (u = r("stylex"))).props(
            o("WAWebUISpacing").uiMargin.start24,
          )),
          (t[4] = m))
        : (m = t[4]);
      var _;
      t[5] !== n || t[6] !== i
        ? ((_ = d.jsx(
            "div",
            babelHelpers.extends({}, m, {
              children: d.jsx(o("WAWebText.react").WAWebTextMuted, {
                color: "secondaryLighter",
                testid: void 0,
                children: n,
              }),
            }),
          )),
          (t[5] = n),
          (t[6] = i),
          (t[7] = _))
        : (_ = t[7]);
      var f;
      return (
        t[8] !== c || t[9] !== _
          ? ((f = d.jsxs(
              "div",
              babelHelpers.extends({}, l, { children: [c, _] }),
            )),
            (t[8] = c),
            (t[9] = _),
            (t[10] = f))
          : (f = t[10]),
        f
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.isStatusContent,
        a = e.reviewType,
        i =
          a === o("WAWebCommonNewsletterEnums").ReviewType.REPORT ||
          a === o("WAWebCommonNewsletterEnums").ReviewType.RESPONSE_REPORT ||
          a === o("WAWebCommonNewsletterEnums").ReviewType.STATUS_REPORT,
        l;
      if (i) {
        var u;
        (t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = []), (t[0] = u))
          : (u = t[0]),
          (l = u));
      } else if (n === !0) {
        var c;
        (t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = [
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
            ]),
            (t[1] = c))
          : (c = t[1]),
          (l = c));
      } else {
        var m;
        (t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = [
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
            ]),
            (t[2] = m))
          : (m = t[2]),
          (l = m));
      }
      var _;
      e: switch (a) {
        case o("WAWebCommonNewsletterEnums").ReviewType.RESPONSE_REPORT: {
          var f;
          (t[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((f = s._(
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
              )),
              (t[3] = f))
            : (f = t[3]),
            (_ = f));
          break e;
        }
        case o("WAWebCommonNewsletterEnums").ReviewType.STATUS_REPORT:
        case o("WAWebCommonNewsletterEnums").ReviewType.REPORT: {
          var g;
          (t[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((g = s._(
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
              )),
              (t[4] = g))
            : (g = t[4]),
            (_ = g));
          break e;
        }
        case o("WAWebCommonNewsletterEnums").ReviewType.ENFORCEMENT: {
          var y;
          (t[5] !== n
            ? ((y =
                n === !0
                  ? s._(
                      /*BTDS*/ "You can ask us to take another look at your channel. Our Support team will check your statuses to see if your channel follows our {=m2}.",
                      [
                        s._implicitParam(
                          "=m2",
                          d.jsx(o("WAWebExternalLink.react").ExternalLink, {
                            href: o(
                              "WAWebFaqUrl",
                            ).getNewsletterGuidelinesFaqUrl(),
                            onClick: C,
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
                            href: o(
                              "WAWebFaqUrl",
                            ).getNewsletterGuidelinesFaqUrl(),
                            onClick: C,
                            children: s._(/*BTDS*/ "Channels Guidelines"),
                          }),
                        ),
                      ],
                    )),
              (t[5] = n),
              (t[6] = y))
            : (y = t[6]),
            (_ = y));
        }
      }
      var b;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = d.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: d.jsx(r("WAWebRequestReviewHeader.react"), {
              height: 88,
              width: 88,
            }),
          })),
          (t[7] = b))
        : (b = t[7]);
      var v;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = d.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: d.jsx(o("WAWebText.react").WAWebTextLarge, {
              color: "primary",
              padding: 16,
              weight: "medium",
              xstyle: p.header,
              children: s._(/*BTDS*/ "Request review"),
            }),
          })),
          (t[8] = v))
        : (v = t[8]);
      var S;
      t[9] !== _
        ? ((S = d.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            xstyle: o("WAWebUISpacing").uiMargin.bottom16,
            children: d.jsx(o("WAWebText.react").WAWebTextMuted, {
              color: "secondaryLighter",
              marginTop: 8,
              testid: void 0,
              xstyle: p.header,
              children: _,
            }),
          })),
          (t[9] = _),
          (t[10] = S))
        : (S = t[10]);
      var R;
      t[11] !== l ? ((R = l.map(h)), (t[11] = l), (t[12] = R)) : (R = t[12]);
      var L;
      return (
        t[13] !== S || t[14] !== R
          ? ((L = d.jsxs(d.Fragment, { children: [b, v, S, R] })),
            (t[13] = S),
            (t[14] = R),
            (t[15] = L))
          : (L = t[15]),
        L
      );
    }
    function h(e, t) {
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
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(t) {
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
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      r("WAWebEnforcementActionLogging").logChannelGuidelinesClick();
    }
    ((l.AppealHeaderSectionRow = f), (l.RequestReviewDescriptionScreen = y));
  },
  226,
);
