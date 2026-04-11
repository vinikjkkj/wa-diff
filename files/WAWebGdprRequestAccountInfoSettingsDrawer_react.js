__d(
  "WAWebGdprRequestAccountInfoSettingsDrawer.react",
  [
    "fbt",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebGdprConstants",
    "WAWebGdprRequestAccountInfoSettingsDrawerBodyContent",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebSpinner.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWdsPictoDocIcon.react",
    "react",
    "react-compiler-runtime",
    "useWAWebGdprStatus",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.Suspense,
      m = c.useCallback,
      p = {
        drawerSection: { paddingTop: "x9orja2", $$css: !0 },
        title: {
          paddingInlineStart: "x162tt16",
          marginTop: "x1dpc15r",
          marginBottom: "xcugx37",
          $$css: !0,
        },
      };
    function _(e) {
      var t = o("react-compiler-runtime").c(27),
        n = e.onClose,
        a = e.ref,
        i = o("useWAWebGdprStatus").useGdprStatus(
          o("WAWebGdprConstants").ReportType.Account,
          !0,
        ),
        l = i[0],
        c = i[1],
        d = i[2],
        m;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()),
          (t[0] = m))
        : (m = t[0]);
      var p = o("useWAWebGdprStatus").useGdprStatus(
          o("WAWebGdprConstants").ReportType.Newsletters,
          m,
        ),
        _ = p[0],
        f = p[1],
        g = p[2],
        y;
      t[1] !== d || t[2] !== g
        ? ((y = function () {
            (d(),
              o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled() &&
                g());
          }),
          (t[1] = d),
          (t[2] = g),
          (t[3] = y))
        : (y = t[3]);
      var C = y,
        b;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = { surface: "unknown", viewName: "gdpr-request-info" }),
          (t[4] = b))
        : (b = t[4]);
      var v;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = s._(/*BTDS*/ "Request account info")), (t[5] = v))
        : (v = t[5]);
      var S;
      t[6] !== n
        ? ((S = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: v,
            onBack: n,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            focusBackOrCancel: !0,
          })),
          (t[6] = n),
          (t[7] = S))
        : (S = t[7]);
      var R;
      t[8] !== f
        ? ((R = o("useWAWebGdprStatus").doOtherPendingRequestsExist([f])),
          (t[8] = f),
          (t[9] = R))
        : (R = t[9]);
      var L;
      t[10] !== c || t[11] !== l || t[12] !== C || t[13] !== R
        ? ((L = u.jsx(h, {
            isLoading: l,
            report: o("WAWebGdprConstants").ReportType.Account,
            status: c,
            refetch: C,
            otherPendingRequestsExist: R,
          })),
          (t[10] = c),
          (t[11] = l),
          (t[12] = C),
          (t[13] = R),
          (t[14] = L))
        : (L = t[14]);
      var E;
      t[15] !== c || t[16] !== _ || t[17] !== f || t[18] !== C
        ? ((E = o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()
            ? u.jsx(h, {
                isLoading: _,
                report: o("WAWebGdprConstants").ReportType.Newsletters,
                status: f,
                refetch: C,
                otherPendingRequestsExist: o(
                  "useWAWebGdprStatus",
                ).doOtherPendingRequestsExist([c]),
              })
            : null),
          (t[15] = c),
          (t[16] = _),
          (t[17] = f),
          (t[18] = C),
          (t[19] = E))
        : (E = t[19]);
      var k;
      t[20] !== L || t[21] !== E
        ? ((k = u.jsxs(r("WAWebDrawerBody.react"), { children: [L, E] })),
          (t[20] = L),
          (t[21] = E),
          (t[22] = k))
        : (k = t[22]);
      var I;
      return (
        t[23] !== a || t[24] !== S || t[25] !== k
          ? ((I = u.jsxs(r("WAWebDrawer.react"), {
              ref: a,
              testid: void 0,
              tsNavigationData: b,
              children: [S, k],
            })),
            (t[23] = a),
            (t[24] = S),
            (t[25] = k),
            (t[26] = I))
          : (I = t[26]),
        I
      );
    }
    function f(e) {
      switch (e) {
        case o("WAWebGdprConstants").ReportType.Account:
          return "account-information";
        case o("WAWebGdprConstants").ReportType.Newsletters:
          return "newsletter-activity";
      }
    }
    function g(e) {
      switch (e) {
        case o("WAWebGdprConstants").ReportType.Account: {
          var t = s._(/*BTDS*/ "Account information");
          return [
            t,
            u.jsxs(u.Fragment, {
              children: [
                s._(
                  /*BTDS*/ "Create a report of your WhatsApp account information and settings, which you can access or port to another app. This report does not include your messages.",
                ),
                " ",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getRequestAccountInfoFAQUrl(),
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ],
            }),
          ];
        }
        case o("WAWebGdprConstants").ReportType.Newsletters: {
          var n = s._(/*BTDS*/ "Channels activity");
          return [
            n,
            u.jsxs(u.Fragment, {
              children: [
                s._(
                  /*BTDS*/ "Create a report of updates and information from channels you interact with or manage, which you can access or port to another app.",
                ),
                " ",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o("WAWebFaqUrl").getNewsletterActivityInforUrl(),
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ],
            }),
          ];
        }
      }
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(34),
        n = e.isLoading,
        a = e.otherPendingRequestsExist,
        i = e.refetch,
        l = e.report,
        s = e.status,
        c;
      t[0] !== l ? ((c = g(l)), (t[0] = l), (t[1] = c)) : (c = t[1]);
      var m = c,
        _ = m[0],
        h = m[1];
      if (o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()) {
        var y;
        t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = [p.drawerSection, o("WAWebUISpacing").uiPadding.bottom18]),
            (t[2] = y))
          : (y = t[2]);
        var C;
        t[3] !== l ? ((C = f(l)), (t[3] = l), (t[4] = C)) : (C = t[4]);
        var b;
        t[5] !== _
          ? ((b = u.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: p.title,
              children: u.jsx(o("WAWebText.react").WAWebTextMuted, {
                children: _,
              }),
            })),
            (t[5] = _),
            (t[6] = b))
          : (b = t[6]);
        var v;
        t[7] !== h ||
        t[8] !== n ||
        t[9] !== a ||
        t[10] !== i ||
        t[11] !== l ||
        t[12] !== s
          ? ((v = n
              ? u.jsx(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  justify: "center",
                  children: u.jsx(r("WAWebFlexItem.react"), {
                    children: u.jsx(o("WAWebSpinner.react").Spinner, {
                      size: 50,
                      stroke: 4,
                    }),
                  }),
                })
              : u.jsx(
                  r("WAWebGdprRequestAccountInfoSettingsDrawerBodyContent"),
                  {
                    status: s,
                    refetch: i,
                    report: l,
                    otherPendingRequestsExist: a,
                    newsletterBodyText: u.jsx(u.Fragment, { children: h }),
                  },
                )),
            (t[7] = h),
            (t[8] = n),
            (t[9] = a),
            (t[10] = i),
            (t[11] = l),
            (t[12] = s),
            (t[13] = v))
          : (v = t[13]);
        var S;
        return (
          t[14] !== C || t[15] !== b || t[16] !== v
            ? ((S = u.jsxs(r("WAWebDrawerSection.react"), {
                animation: !1,
                xstyle: y,
                testid: void 0,
                children: [b, v],
              })),
              (t[14] = C),
              (t[15] = b),
              (t[16] = v),
              (t[17] = S))
            : (S = t[17]),
          S
        );
      }
      var R;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = [p.drawerSection, o("WAWebUISpacing").uiPadding.bottom30]),
          (t[18] = R))
        : (R = t[18]);
      var L;
      t[19] !== l ? ((L = f(l)), (t[19] = l), (t[20] = L)) : (L = t[20]);
      var E;
      t[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: u.jsx(r("WAWebFlexItem.react"), {
              children: u.jsx(
                o("WAWebWdsPictoDocIcon.react").WdsPictoDocIcon,
                {},
              ),
            }),
          })),
          (t[21] = E))
        : (E = t[21]);
      var k;
      t[22] !== h
        ? ((k = u.jsx(o("WAWebText.react").WAWebTextMuted, {
            padding: 32,
            children: h,
          })),
          (t[22] = h),
          (t[23] = k))
        : (k = t[23]);
      var I;
      t[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: u.jsx(r("WAWebFlexItem.react"), {
              children: u.jsx(o("WAWebSpinner.react").Spinner, {
                size: 50,
                stroke: 4,
              }),
            }),
          })),
          (t[24] = I))
        : (I = t[24]);
      var T;
      t[25] !== a || t[26] !== i || t[27] !== l || t[28] !== s
        ? ((T = u.jsx(d, {
            fallback: I,
            children: u.jsx(
              r("WAWebGdprRequestAccountInfoSettingsDrawerBodyContent"),
              {
                status: s,
                refetch: i,
                report: l,
                otherPendingRequestsExist: a,
              },
            ),
          })),
          (t[25] = a),
          (t[26] = i),
          (t[27] = l),
          (t[28] = s),
          (t[29] = T))
        : (T = t[29]);
      var D;
      return (
        t[30] !== L || t[31] !== k || t[32] !== T
          ? ((D = u.jsxs(r("WAWebDrawerSection.react"), {
              animation: !1,
              xstyle: R,
              testid: void 0,
              children: [E, k, T],
            })),
            (t[30] = L),
            (t[31] = k),
            (t[32] = T),
            (t[33] = D))
          : (D = t[33]),
        D
      );
    }
    l.default = _;
  },
  226,
);
