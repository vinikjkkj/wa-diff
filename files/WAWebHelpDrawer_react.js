__d(
  "WAWebHelpDrawer.react",
  [
    "fbt",
    "WAWebABPropsSaga",
    "WAWebConnModel",
    "WAWebContactFormWrapper.react",
    "WAWebDevOnlyBadge.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebEnvironment",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFeedbackModalUtils",
    "WAWebFlex.react",
    "WAWebHelpItemIcon.react",
    "WAWebLogSessionEvent",
    "WAWebMacBetaUpsellToastbar.react",
    "WAWebMenu.react",
    "WAWebMenuItems.react",
    "WAWebModalManager",
    "WAWebSettingsFBT",
    "WAWebSupportAiSessionWamEvent",
    "WAWebTosUrl",
    "WAWebVersionInfo.react",
    "WAWebWamEnumBugReportEntryPointName",
    "WAWebWamEnumContactUsExitState",
    "WAWebWamEnumSupportAiEventType",
    "WAWebWamEnumWebcNativeUpsellCtaSourceType",
    "cr:13601",
    "cr:17219",
    "gkx",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useWAWebExternalBetaOptIn",
    "useWAWebFocusOnMount",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef;
    function p(e) {
      var t = o("react-compiler-runtime").c(36),
        a = e.onClose,
        i = e.onNewsletterReports,
        l = e.ref,
        c = r("useWAWebFocusOnMount")(),
        p = r("useMergeRefs")(c, l),
        g = o("useWAWebExternalBetaOptIn").useMacBetaUpsellOnWeb(),
        h = m(-1),
        y = m(!1),
        C;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = function (t, n) {
            (o("WAWebLogSessionEvent").logSessionEvent(t, h.current, n),
              (y.current = !0));
          }),
          (t[0] = C))
        : (C = t[0]);
      var b = C,
        v,
        S;
      (t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = function () {
            return (
              (h.current = self.performance.now()),
              function () {
                y.current ||
                  b(
                    o("WAWebWamEnumContactUsExitState").CONTACT_US_EXIT_STATE
                      .CANCELLED,
                  );
              }
            );
          }),
          (S = []),
          (t[1] = v),
          (t[2] = S))
        : ((v = t[1]), (S = t[2])),
        d(v, S));
      var R;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = function () {
            y.current = !0;
            var e = o("WAWebConnModel").Conn.isSMB
              ? o("WAWebTosUrl").getBizTosUrl()
              : o("WAWebTosUrl").getTosUrl();
            o("WAWebExternalLink.react").openExternalLink(e);
          }),
          (t[3] = R))
        : (R = t[3]);
      var L = R,
        E;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = function () {
            (o("WAWebExternalLink.react").openExternalLink(
              o("WAWebFaqUrl").getFaqUrl(),
            ),
              b(o("WAWebWamEnumContactUsExitState").CONTACT_US_EXIT_STATE.FAQ));
          }),
          (t[4] = E))
        : (E = t[4]);
      var k = E,
        I;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = function () {
            b(
              o("WAWebWamEnumContactUsExitState").CONTACT_US_EXIT_STATE
                .PROBLEM_DESCRIPTION,
            );
          }),
          (t[5] = I))
        : (I = t[5]);
      var T = I,
        D;
      if (t[6] === Symbol.for("react.memo_cache_sentinel")) {
        var x = function (t) {
          b(
            o("WAWebWamEnumContactUsExitState").CONTACT_US_EXIT_STATE
              .EMAIL_SEND,
            t,
          );
        };
        ((D = function () {
          (o("WAWebABPropsSaga").getIsSagaV1Enabled() &&
            new (o("WAWebSupportAiSessionWamEvent").SupportAiSessionWamEvent)({
              supportAiEventType: o("WAWebWamEnumSupportAiEventType")
                .SUPPORT_AI_EVENT_TYPE.CONTACT_US_CLICKED,
            }).commit(),
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebContactFormWrapper.react"), {
                onCancel: T,
                onSend: x,
              }),
            ));
        }),
          (t[6] = D));
      } else D = t[6];
      var $ = D,
        P;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = function () {
            ((y.current = !0),
              o("WAWebFeedbackModalUtils").openFeedbackModal(
                o("WAWebWamEnumBugReportEntryPointName")
                  .BUG_REPORT_ENTRY_POINT_NAME.BUG_REPORT_ENTRY_POINT_HELP,
              ));
          }),
          (t[7] = P))
        : (P = t[7]);
      var N = P,
        M = f,
        w;
      if (!r("gkx")("26258")) {
        var A;
        (t[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
              optionId: "help-feedback-group",
              testid: void 0,
              onSelect: M,
              detailLeft: u.jsx(o("WAWebHelpItemIcon.react").HelpItemIcon, {
                iconType: o("WAWebHelpItemIcon.react").HelpItemIconType
                  .Feedback,
              }),
              primary: u.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {
                label: "Feedback Group",
              }),
              ariaLabel: "Feedback Group",
            })),
            (t[8] = A))
          : (A = t[8]),
          (w = A));
      }
      var F;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((F = n("cr:13601") ? u.jsx(n("cr:13601"), {}) : null), (t[9] = F))
        : (F = t[9]);
      var O = F,
        B;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = { surface: "unknown", viewName: "help-settings" }), (t[10] = B))
        : (B = t[10]);
      var W;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = s._(/*BTDS*/ "Help and feedback")), (t[11] = W))
        : (W = t[11]);
      var q;
      t[12] !== a
        ? ((q = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            testid: void 0,
            title: W,
            onBack: a,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            focusBackOrCancel: !0,
          })),
          (t[12] = a),
          (t[13] = q))
        : (q = t[13]);
      var U;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "help-faq",
            testid: void 0,
            onSelect: k,
            detailLeft: u.jsx(o("WAWebHelpItemIcon.react").HelpItemIcon, {
              iconType: o("WAWebHelpItemIcon.react").HelpItemIconType.Faq,
            }),
            primary: o("WAWebSettingsFBT").helpCenterTitle(),
            secondary: o("WAWebSettingsFBT").helpCenterSubtitle(),
            ariaLabel: o("WAWebSettingsFBT").helpCenterTitle().toString(),
          })),
          (t[14] = U))
        : (U = t[14]);
      var V;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((V = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "help-contact-us",
            testid: void 0,
            onSelect: $,
            detailLeft: u.jsx(o("WAWebHelpItemIcon.react").HelpItemIcon, {
              iconType: o("WAWebHelpItemIcon.react").HelpItemIconType.ContactUs,
            }),
            primary: o("WAWebSettingsFBT").contactUsTitle(),
            secondary: o("WAWebSettingsFBT").contactUsSubtitle(),
            ariaLabel: o("WAWebSettingsFBT").contactUsTitle().toString(),
          })),
          (t[15] = V))
        : (V = t[15]);
      var H, G;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "help-send-feedback",
            testid: void 0,
            onSelect: N,
            detailLeft: u.jsx(o("WAWebHelpItemIcon.react").HelpItemIcon, {
              iconType: o("WAWebHelpItemIcon.react").HelpItemIconType.Bug,
            }),
            primary: o("WAWebSettingsFBT").sendFeedbackTitle(),
            secondary: o("WAWebSettingsFBT").sendFeedbackSubtitle(),
            ariaLabel: o("WAWebSettingsFBT").sendFeedbackTitle().toString(),
          })),
          (G =
            n("cr:17219") != null
              ? u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                  optionId: "rate-app",
                  testid: void 0,
                  onSelect: _,
                  detailLeft: u.jsx(o("WAWebHelpItemIcon.react").HelpItemIcon, {
                    iconType: o("WAWebHelpItemIcon.react").HelpItemIconType
                      .Rate,
                  }),
                  primary: o("WAWebSettingsFBT").rateTheApp(),
                  ariaLabel: o("WAWebSettingsFBT").rateTheApp().toString(),
                })
              : null),
          (t[16] = H),
          (t[17] = G))
        : ((H = t[16]), (G = t[17]));
      var z;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((z = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "help-tos",
            testid: void 0,
            onSelect: L,
            detailLeft: u.jsx(o("WAWebHelpItemIcon.react").HelpItemIcon, {
              iconType: o("WAWebHelpItemIcon.react").HelpItemIconType.Tos,
            }),
            primary: o("WAWebSettingsFBT").termsTitle(),
            ariaLabel: o("WAWebSettingsFBT").termsTitle().toString(),
          })),
          (t[18] = z))
        : (z = t[18]);
      var j, K, Q;
      t[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = u.jsx(o("WAWebHelpItemIcon.react").HelpItemIcon, {
            iconType: o("WAWebHelpItemIcon.react").HelpItemIconType
              .NewsletterReports,
          })),
          (K = o("WAWebSettingsFBT").newsletterReportsTitle()),
          (Q = o("WAWebSettingsFBT").newsletterReportsTitle().toString()),
          (t[19] = j),
          (t[20] = K),
          (t[21] = Q))
        : ((j = t[19]), (K = t[20]), (Q = t[21]));
      var X;
      t[22] !== i
        ? ((X = u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
            optionId: "help-newsletter-reports",
            testid: void 0,
            onSelect: i,
            detailLeft: j,
            primary: K,
            ariaLabel: Q,
          })),
          (t[22] = i),
          (t[23] = X))
        : (X = t[23]);
      var Y;
      t[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y =
            w || O ? u.jsx(o("WAWebMenuItems.react").MenuSeparator, {}) : null),
          (t[24] = Y))
        : (Y = t[24]);
      var J;
      t[25] === Symbol.for("react.memo_cache_sentinel")
        ? ((J = u.jsx(o("WAWebMenuItems.react").MenuSeparator, {})),
          (t[25] = J))
        : (J = t[25]);
      var Z;
      t[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = u.jsxs(u.Fragment, {
            children: [
              J,
              u.jsx(o("WAWebFlex.react").FlexRow, {
                marginBottom: 32,
                justify: "center",
                shrink: 0,
                children: u.jsx(r("WAWebVersionInfo.react"), {}),
              }),
            ],
          })),
          (t[26] = Z))
        : (Z = t[26]);
      var ee;
      t[27] !== X
        ? ((ee = u.jsx(r("WAWebDrawerBody.react"), {
            backgroundColor: "default",
            children: u.jsx(o("WAWebFlex.react").FlexRow, {
              shrink: 0,
              children: u.jsxs(o("WAWebMenu.react").WAWebMenu, {
                size: "medium",
                border: "bottom-partial",
                allowTabNavigation: !0,
                children: [U, V, H, G, z, X, Y, w, O, Z],
              }),
            }),
          })),
          (t[27] = X),
          (t[28] = ee))
        : (ee = t[28]);
      var te;
      t[29] !== g
        ? ((te =
            g &&
            u.jsx(r("WAWebMacBetaUpsellToastbar.react"), {
              sourceType: o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
                .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.SETTINGS_HELP,
            })),
          (t[29] = g),
          (t[30] = te))
        : (te = t[30]);
      var ne;
      return (
        t[31] !== p || t[32] !== q || t[33] !== ee || t[34] !== te
          ? ((ne = u.jsxs(r("WAWebDrawer.react"), {
              ref: p,
              tsNavigationData: B,
              children: [q, ee, te],
            })),
            (t[31] = p),
            (t[32] = q),
            (t[33] = ee),
            (t[34] = te),
            (t[35] = ne))
          : (ne = t[35]),
        ne
      );
    }
    function _() {
      var e,
        t =
          n("cr:17219").getWindowsBridge == null ||
          (e = n("cr:17219").getWindowsBridge()) == null
            ? void 0
            : e.getRateTheApp();
      t == null || t.requestRateAndApp();
    }
    function f() {
      r("gkx")("26258") ||
        o("WAWebExternalLink.react").openExternalLink(
          r("WAWebEnvironment").isWindows
            ? "https://fb.workplace.com/groups/2056676158176704"
            : "https://fb.workplace.com/groups/643787895765975",
        );
    }
    l.default = p;
  },
  226,
);
