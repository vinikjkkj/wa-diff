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
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.newsletter,
        l = a.onClose,
        u = r("useWAWebUIM")(),
        m = function () {
          (r("WAWebEnforcementActionLogging").isSessionStarted() ||
            r("WAWebEnforcementActionLogging").startEnforcementSession(
              o("WAWebWamEnumInteractionEntryPoint").INTERACTION_ENTRY_POINT
                .ALERT_BANNER,
              i.id.toString(),
              o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE
                .NEWSLETTER_CONVERSATION_SCREEN,
            ),
            r("WAWebEnforcementActionLogging").logAlertBannerDismissClick(),
            l());
        },
        p = function () {
          (r("WAWebEnforcementActionLogging").startEnforcementSession(
            o("WAWebWamEnumInteractionEntryPoint").INTERACTION_ENTRY_POINT
              .ALERT_BANNER,
            i.id.toString(),
            o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE
              .NEWSLETTER_CONVERSATION_SCREEN,
          ),
            r("WAWebEnforcementActionLogging").logChannelAlertsClick(),
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              c.jsx(
                o("WAWebNewsletterEnforcementAlertFlowLoadable")
                  .WAWebNewsletterEnforcementAlertFlowLoadable,
                {
                  chat: i,
                  onBack: o("WAWebDrawerManager").closeDrawerRight,
                  onClose: o("WAWebDrawerManager").closeDrawerRight,
                },
              ),
              {
                transition: "slide-left",
                uim: u,
                focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
              },
            ));
        };
      return c.jsx(o("WAWebUimUie.react").UIE, {
        displayName: "NewsletterChannelAlertsBanner",
        escapable: !0,
        children: c.jsx(r("WAWebConversationBanner.react"), {
          onClick: p,
          onClose: m,
          ref: n,
          xstyle: d.banner,
          children: c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            children: [
              c.jsx(r("WAWebFlexItem.react"), {
                xstyle: d.paddingEnd20,
                children: c.jsx(o("WAWebWarningIcon.react").WarningIcon, {
                  iconXstyle: d.criticalColor,
                  height: 20,
                  width: 20,
                }),
              }),
              c.jsx(r("WAWebFlexItem.react"), {
                children: c.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
                  color: "primary",
                  children: s._(/*BTDS*/ "Channel alerts"),
                }),
              }),
            ],
          }),
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t,
        n,
        a = o("useWAWebModelValues").useModelValues(e, [
          "id",
          "newsletterMetadata",
        ]),
        i = o("useWAWebModelValues").useOptionalModelValues(
          a.newsletterMetadata,
          ["membershipType"],
        ),
        l = a.id,
        s =
          (t = o(
            "useWAWebNewsletterMessageDeliveryUpdates",
          ).useNewsletterMessageDeliveryUpdates(a)) != null
            ? t
            : [],
        u =
          (n = o(
            "useWAWebNewsletterGeosuspendedCountries",
          ).useNewsletterGeosuspendedCountries(a)) != null
            ? n
            : [],
        c = o("useWAWebNewsletterIsSuspended").useNewsletterIsSuspended(a),
        d = o("WAWebNux").getNewsletterAlertsBannerNuxKey(l.toString()),
        m = r("useWAWebNux")(d),
        p = m[0],
        _ = m[1],
        f = s.length > 0,
        g = u.length > 0,
        h = o(
          "useWAWebNewsletterHasProfilePictureDeletionAlerts",
        ).useWAWebNewsletterHasProfilePictureDeletionAlerts(e),
        y =
          p &&
          o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(i) &&
          (f || g || c || h);
      return [y, _];
    }
    ((l.NewsletterChannelAlertsBanner = m),
      (l.useNewsletterChannelAlertsBanner = p));
  },
  226,
);
