__d(
  "WAWebNewsletterChannelAlertsBanner.react",
  [
    "fbt",
    "WAWebConversationBanner.react",
    "WAWebDrawerManager",
    "WAWebEnforcementActionLogging",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebKeyboardTabUtils",
    "WAWebNewsletterEnforcementAlertFlowLoadable",
    "WAWebNewsletterMembershipUtil",
    "WAWebNux",
    "WAWebText.react",
    "WAWebUimUie.react",
    "WAWebWamEnumInteractionEntryPoint",
    "WAWebWamEnumInteractionSurface",
    "WAWebWarningIcon.react",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
    "useWAWebNewsletterGeosuspendedCountries",
    "useWAWebNewsletterHasProfilePictureDeletionAlerts",
    "useWAWebNewsletterIsSuspended",
    "useWAWebNewsletterMessageDeliveryUpdates",
    "useWAWebNux",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = {
        banner: { backgroundColor: "x1280gxy", $$css: !0 },
        criticalColor: { color: "x30a034", $$css: !0 },
        paddingEnd20: { paddingInlineEnd: "xcldk2z", $$css: !0 },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(15),
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
        u = l.newsletter,
        m = l.onClose,
        p = r("useWAWebUIM")(),
        _;
      n[3] !== u.id || n[4] !== m
        ? ((_ = function () {
            (r("WAWebEnforcementActionLogging").isSessionStarted() ||
              r("WAWebEnforcementActionLogging").startEnforcementSession(
                o("WAWebWamEnumInteractionEntryPoint").INTERACTION_ENTRY_POINT
                  .ALERT_BANNER,
                u.id.toString(),
                o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE
                  .NEWSLETTER_CONVERSATION_SCREEN,
              ),
              r("WAWebEnforcementActionLogging").logAlertBannerDismissClick(),
              m());
          }),
          (n[3] = u.id),
          (n[4] = m),
          (n[5] = _))
        : (_ = n[5]);
      var f = _,
        g;
      n[6] !== u || n[7] !== p
        ? ((g = function () {
            (r("WAWebEnforcementActionLogging").startEnforcementSession(
              o("WAWebWamEnumInteractionEntryPoint").INTERACTION_ENTRY_POINT
                .ALERT_BANNER,
              u.id.toString(),
              o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE
                .NEWSLETTER_CONVERSATION_SCREEN,
            ),
              r("WAWebEnforcementActionLogging").logChannelAlertsClick(),
              o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                c.jsx(
                  o("WAWebNewsletterEnforcementAlertFlowLoadable")
                    .WAWebNewsletterEnforcementAlertFlowLoadable,
                  {
                    chat: u,
                    onBack: o("WAWebDrawerManager").closeDrawerRight,
                    onClose: o("WAWebDrawerManager").closeDrawerRight,
                  },
                ),
                {
                  transition: "slide-left",
                  uim: p,
                  focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                },
              ));
          }),
          (n[6] = u),
          (n[7] = p),
          (n[8] = g))
        : (g = n[8]);
      var h = g,
        y;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = c.jsx(r("WAWebFlexItem.react"), {
            xstyle: d.paddingEnd20,
            children: c.jsx(o("WAWebWarningIcon.react").WarningIcon, {
              iconXstyle: d.criticalColor,
              height: 20,
              width: 20,
            }),
          })),
          (n[9] = y))
        : (y = n[9]);
      var C;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            children: [
              y,
              c.jsx(r("WAWebFlexItem.react"), {
                children: c.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
                  color: "primary",
                  children: s._(/*BTDS*/ "Channel alerts"),
                }),
              }),
            ],
          })),
          (n[10] = C))
        : (C = n[10]);
      var b;
      return (
        n[11] !== f || n[12] !== h || n[13] !== i
          ? ((b = c.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "NewsletterChannelAlertsBanner",
              escapable: !0,
              children: c.jsx(r("WAWebConversationBanner.react"), {
                onClick: h,
                onClose: f,
                ref: i,
                xstyle: d.banner,
                children: C,
              }),
            })),
            (n[11] = f),
            (n[12] = h),
            (n[13] = i),
            (n[14] = b))
          : (b = n[14]),
        b
      );
    }
    function p(e) {
      var t,
        n,
        a = o("react-compiler-runtime").c(14),
        i;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = ["id", "newsletterMetadata"]), (a[0] = i))
        : (i = a[0]);
      var l = o("useWAWebModelValues").useModelValues(e, i),
        s;
      a[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = ["membershipType"]), (a[1] = s))
        : (s = a[1]);
      var u = o("useWAWebModelValues").useOptionalModelValues(
          l.newsletterMetadata,
          s,
        ),
        c = l.id,
        d =
          (t = o(
            "useWAWebNewsletterMessageDeliveryUpdates",
          ).useNewsletterMessageDeliveryUpdates(l)) != null
            ? t
            : [],
        m =
          (n = o(
            "useWAWebNewsletterGeosuspendedCountries",
          ).useNewsletterGeosuspendedCountries(l)) != null
            ? n
            : [],
        p = o("useWAWebNewsletterIsSuspended").useNewsletterIsSuspended(l),
        _;
      a[2] !== c
        ? ((_ = o("WAWebNux").getNewsletterAlertsBannerNuxKey(c.toString())),
          (a[2] = c),
          (a[3] = _))
        : (_ = a[3]);
      var f = _,
        g = r("useWAWebNux")(f),
        h = g[0],
        y = g[1],
        C = d.length > 0,
        b = m.length > 0,
        v = o(
          "useWAWebNewsletterHasProfilePictureDeletionAlerts",
        ).useWAWebNewsletterHasProfilePictureDeletionAlerts(e),
        S;
      a[4] !== b ||
      a[5] !== C ||
      a[6] !== v ||
      a[7] !== p ||
      a[8] !== u ||
      a[9] !== h
        ? ((S =
            h &&
            o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(u) &&
            (C || b || p || v)),
          (a[4] = b),
          (a[5] = C),
          (a[6] = v),
          (a[7] = p),
          (a[8] = u),
          (a[9] = h),
          (a[10] = S))
        : (S = a[10]);
      var R = S,
        L;
      return (
        a[11] !== R || a[12] !== y
          ? ((L = [R, y]), (a[11] = R), (a[12] = y), (a[13] = L))
          : (L = a[13]),
        L
      );
    }
    ((l.NewsletterChannelAlertsBanner = m),
      (l.useNewsletterChannelAlertsBanner = p));
  },
  226,
);
