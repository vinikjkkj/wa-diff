__d(
  "WAWebNewsletterInfoDrawer.react",
  [
    "fbt",
    "WAWebBusinessWebsiteIcon.react",
    "WAWebChatInfoDrawerRow.react",
    "WAWebChatInfoDrawerSection.react",
    "WAWebChevronIcon.react",
    "WAWebCmd",
    "WAWebCommonNewsletterStrings",
    "WAWebDialpadIcon.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebEnforcementActionLogging",
    "WAWebModalManager",
    "WAWebMuteRow.react",
    "WAWebNewsletterDescriptionSection.react",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterInfoTopCard.react",
    "WAWebNewsletterInsightsSection.react",
    "WAWebNewsletterIntegritySection.react",
    "WAWebNewsletterMembershipUtil",
    "WAWebNewsletterPendingInvites.react",
    "WAWebNewsletterPhoneNumberPrivacyNux.react",
    "WAWebNewsletterPrivacyRow.react",
    "WAWebNewsletterPublicChannelPrivacyNux.react",
    "WAWebNewsletterSubscriberList.react",
    "WAWebSettingsFBT",
    "WAWebSettingsOutlineIcon.react",
    "WAWebSimilarNewslettersUnits.react",
    "WAWebStateUtils",
    "WAWebUISpacing",
    "WAWebUiActionWamEvent",
    "WAWebUnmuteNotificationsRefreshedIcon.react",
    "WAWebWamEnumInteractionEntryPoint",
    "WAWebWamEnumInteractionSurface",
    "WAWebWamEnumThreadType",
    "WAWebWamEnumUiActionType",
    "WAWebWamPrivateStatsUtils",
    "WAWebWarningOutlineIcon.react",
    "cr:2695",
    "gkx",
    "react",
    "useLazyRef",
    "useWAWebEventTargetValue",
    "useWAWebListener",
    "useWAWebUIM",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useRef,
      f = { icon: { color: "xhslqc4", $$css: !0 } };
    function g(t) {
      var a,
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        u = l.adminFunnelLogger,
        d = l.chat,
        g = l.focusDescriptionOnMount,
        h = l.newsletterMetadata,
        y = l.onAdminCenter,
        C = l.onClose,
        b = l.onContactInfo,
        v = l.onDeleteNewsletter,
        S = l.onNotificationSettings,
        R = l.onSettings,
        L = l.onShareLink,
        E = l.onTransferNewsletterOwnership,
        k = l.onTransferOwnershipSelection,
        I = l.onVerification,
        T = r("useWAWebUIM")(),
        D = _(null),
        x = r("useWAWebEventTargetValue")(h, ["change:suspended"], function () {
          return (h == null ? void 0 : h.suspended) === !0;
        }),
        $ = r("useWAWebEventTargetValue")(
          h,
          ["change:canBeMuted"],
          function () {
            return !!(h != null && h.canBeMuted) && !x;
          },
        );
      o("useWAWebListener").useListener(
        o("WAWebCmd").Cmd,
        "edit_newsletter_description",
        function () {
          D.current && D.current.scrollTo({ top: 0, behavior: "smooth" });
        },
      );
      var P = r("useLazyRef")(function () {
          return new (o("WAWebUiActionWamEvent").UiActionWamEvent)({
            uiActionType: o("WAWebWamEnumUiActionType").UI_ACTION_TYPE
              .CHANNEL_INFO_OPEN,
            uiActionPreloaded: !0,
          });
        }),
        N = function () {
          C ? C() : T == null || T.requestDismiss();
        },
        M = x
          ? null
          : c.jsx(r("WAWebNewsletterDescriptionSection.react"), {
              chat: d,
              adminFunnelLogger: u,
              focusOnMount: g,
            }),
        w = r("useWAWebEventTargetValue")(
          h,
          ["change:membershipType"],
          function () {
            return o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
              l.newsletterMetadata,
            );
          },
        ),
        A =
          h != null &&
          !x &&
          o(
            "WAWebNewsletterExtendedGatingUtils",
          ).isNewsletterProducerInsightsEnabled(h)
            ? c.jsx(r("WAWebNewsletterInsightsSection.react"), {
                chat: d,
                newsletterMetadata: h,
                xstyle: o("WAWebUISpacing").uiMargin.top10,
                onSeeAllClick: l.onViewInsights,
              })
            : null,
        F = o(
          "WAWebNewsletterExtendedGatingUtils",
        ).isNewsletterAdminNotificationsEnabled(d.newsletterMetadata)
          ? c.jsx(
              o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
              {
                testid: void 0,
                title: o("WAWebSettingsFBT").notificationsTitle(),
                icon: c.jsx(
                  o("WAWebUnmuteNotificationsRefreshedIcon.react")
                    .UnmuteNotificationsRefreshedIcon,
                  { iconXstyle: f.icon },
                ),
                onClick: S,
                side: c.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                  directional: !0,
                  height: 21,
                  iconXstyle: f.icon,
                }),
              },
            )
          : null,
        O =
          !F && $
            ? c.jsx(
                o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
                {
                  xstyle: [
                    o("WAWebUISpacing").uiMargin.top10,
                    o("WAWebUISpacing").uiPadding.horiz0,
                  ],
                  children: c.jsx(r("WAWebMuteRow.react"), {
                    chat: d,
                    mute: d.mute,
                  }),
                },
              )
            : null,
        B = m(function () {
          o("WAWebModalManager").ModalManager.open(
            c.jsx(r("WAWebNewsletterPhoneNumberPrivacyNux.react"), {}),
          );
        }, []),
        W = m(
          function () {
            o("WAWebModalManager").ModalManager.open(
              c.jsx(r("WAWebNewsletterPublicChannelPrivacyNux.react"), {
                chat: d,
                userRole: h == null ? void 0 : h.membershipType,
              }),
            );
          },
          [d, h == null ? void 0 : h.membershipType],
        ),
        q =
          w &&
          o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterReactionSettingsEnabled() &&
          !x
            ? c.jsx(
                o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
                {
                  testid: void 0,
                  title: c.jsx(
                    o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed,
                    { title: s._(/*BTDS*/ "Channel settings") },
                  ),
                  icon: c.jsx(
                    o("WAWebSettingsOutlineIcon.react").SettingsOutlineIcon,
                    { iconXstyle: f.icon, height: 20 },
                  ),
                  onClick: R,
                },
              )
            : null,
        U = m(
          function () {
            (r("WAWebEnforcementActionLogging").startEnforcementSession(
              o("WAWebWamEnumInteractionEntryPoint").INTERACTION_ENTRY_POINT
                .INFO_DRAWER_ALERT_OPTION,
              d.id.toString(),
              o("WAWebWamEnumInteractionSurface").INTERACTION_SURFACE
                .NEWSLETTER_INFO_DRAWER,
            ),
              r("WAWebEnforcementActionLogging").logChannelAlertsClick(),
              y());
          },
          [d.id, y],
        ),
        V =
          !((a = d.newsletterMetadata) != null && a.terminated) && w
            ? c.jsx(
                o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
                {
                  testid: void 0,
                  icon: c.jsx(
                    o("WAWebWarningOutlineIcon.react").WarningOutlineIcon,
                    { iconXstyle: f.icon, height: 16 },
                  ),
                  onClick: U,
                  title: c.jsx(
                    o("WAWebChatInfoDrawerRow.react").DrawerRowTitleRefreshed,
                    { title: s._(/*BTDS*/ "Channel alerts") },
                  ),
                },
              )
            : null,
        H = x
          ? null
          : c.jsx(r("WAWebNewsletterPrivacyRow.react"), {
              onClick: w ? W : null,
              title: s._(/*BTDS*/ "Public channel"),
              text: w
                ? s._(
                    /*BTDS*/ "What you share is visible to anyone, but your phone number isn't. Click to learn more.",
                  )
                : s._(
                    /*BTDS*/ "Anyone can find this channel and see what's been shared.",
                  ),
              icon: c.jsx(
                o("WAWebBusinessWebsiteIcon.react").BusinessWebsiteIcon,
                { iconXstyle: f.icon, height: 20 },
              ),
            }),
        G =
          !x && !w
            ? c.jsx(r("WAWebNewsletterPrivacyRow.react"), {
                onClick: B,
                title: s._(/*BTDS*/ "Profile privacy"),
                text: o(
                  "WAWebCommonNewsletterStrings",
                ).getNewsletterProfilePrivacyText(),
                icon: c.jsx(o("WAWebDialpadIcon.react").DialpadIcon, {
                  iconXstyle: f.icon,
                  height: 20,
                }),
              })
            : null,
        z = c.jsxs(
          o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerSection,
          {
            xstyle: [
              o("WAWebUISpacing").uiMargin.top10,
              o("WAWebUISpacing").uiPadding.horiz0,
            ],
            children: [F, H, q, V, G],
          },
        ),
        j = c.jsx(r("WAWebNewsletterIntegritySection.react"), {
          xstyle: o("WAWebUISpacing").uiMargin.top10,
          chat: l.chat,
          onDeleteNewsletter: v,
          onTransferNewsletterOwnership: E,
        }),
        K =
          w && !x
            ? c.jsx(
                o("WAWebNewsletterSubscriberList.react")
                  .NewsletterSubscriberList,
                {
                  newsletter: d,
                  adminFunnelLogger: u,
                  onShareLink: L,
                  onVerification: I,
                  onContactInfo: b,
                  onTransferOwnershipSelection: k,
                },
              )
            : null,
        Q =
          o("WAWebNewsletterGatingUtils").isNewsletterCreationEnabled() &&
          o("WAWebNewsletterMembershipUtil").iAmOwner(h) &&
          !x
            ? c.jsx(r("WAWebNewsletterPendingInvites.react"), {
                newsletter: d,
                onVerification: I,
              })
            : null,
        X =
          !x &&
          !o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(h) &&
          o(
            "WAWebNewsletterGatingUtils",
          ).isSimilarNewsletterInInfoDrawersEnabled()
            ? c.jsx(r("WAWebDrawerSection.react"), {
                children: c.jsx(
                  o("WAWebSimilarNewslettersUnits.react")
                    .SimilarNewslettersInfoDrawerUnit,
                  { chat: d },
                ),
              })
            : null;
      p(function () {
        var e = P.current;
        (e && (e.markUiActionT(), e.commit(), (P.current = void 0)),
          o(
            "WAWebWamPrivateStatsUtils",
          ).logUiActionShadowPrivateStatsTestEvents());
      }, []);
      var Y;
      return (
        !r("gkx")("26258") &&
          n("cr:2695") &&
          (Y = c.jsx(n("cr:2695"), { chat: d })),
        c.jsxs(
          r("WAWebDrawer.react"),
          {
            ref: i,
            theme: "striped",
            testid: void 0,
            tsNavigationData: {
              surface: "channel-profile",
              extras: {
                threadType: o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL,
                channelWid: d.id,
              },
            },
            children: [
              c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                title: s._(/*BTDS*/ "Channel info"),
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                rtlFixIfOnDarwin: !0,
                onCancel: N,
                testid: void 0,
              }),
              c.jsx(r("WAWebDrawerBody.react"), {
                ref: D,
                children: c.jsxs("section", {
                  className: "x2lah0s x1c4vz4f xdl72j9 x1w3bhph",
                  "data-testid": void 0,
                  children: [
                    c.jsx(r("WAWebNewsletterInfoTopCard.react"), {
                      chat: o("WAWebStateUtils").unproxy(d),
                      adminFunnelLogger: u,
                    }),
                    M,
                    A,
                    O,
                    X,
                    z,
                    Q,
                    K,
                    j,
                    Y,
                  ],
                }),
              }),
            ],
          },
          "newsletter-info-modal",
        )
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  226,
);
