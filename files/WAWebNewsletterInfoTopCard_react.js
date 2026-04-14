__d(
  "WAWebNewsletterInfoTopCard.react",
  [
    "fbt",
    "WAWebCheckmarkIcon.react",
    "WAWebCommonNewsletterEnums",
    "WAWebCommonNewsletterStrings",
    "WAWebCopyPasteSelectable.react",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebFollowNewsletter",
    "WAWebForwardRefreshedIcon.react",
    "WAWebL10N",
    "WAWebModalManager",
    "WAWebNewsletterInfoPhoto.react",
    "WAWebNewsletterInfoSubject.react",
    "WAWebNewsletterMembershipUtil",
    "WAWebPlusIcon.react",
    "WAWebSpinner.react",
    "WAWebStateUtils",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebUnfollowNewsletterConfirmationModal.react",
    "WAWebUnstyledButton.react",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWamEnumChannelLinkShareScreen",
    "WAWebWamEnumTsSurface",
    "WDSActionTile.react",
    "WDSActionTileGroup.react",
    "WDSIconIcAdd.react",
    "WDSIconIcCheck.react",
    "WDSIconIcFastForward.react",
    "WDSIconIcLink.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebABPropConfigValue",
    "useWAWebModelValues",
    "useWAWebNewsletterInviteLink",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useState,
      p = {
        actionIcon: { color: "xo1mcw5", $$css: !0 },
        infoAction: {
          flexGrow: "x1iyjqo2",
          color: "xo1mcw5",
          fontWeight: "xk50ysn",
          $$css: !0,
        },
        spinner: { stroke: "x7iy8sv", $$css: !0 },
        infoActionBtn: { fontSize: "x1nxh6w3", minWidth: "xktpd3l", $$css: !0 },
      };
    function _(e) {
      var t = e.adminFunnelLogger,
        n = o("useWAWebModelValues").useOptionalModelValues(
          e.chat.newsletterMetadata,
          [
            "size",
            "privacy",
            "terminated",
            "isSuspendedOrTerminated",
            "membershipType",
            "inviteCode",
          ],
        ),
        a =
          (n == null ? void 0 : n.privacy) ===
          o("WAWebCommonNewsletterEnums").NewsletterPrivacy.Private
            ? s._(/*BTDS*/ "Private channel")
            : s._(/*BTDS*/ "Channel");
      n != null && n.terminated && (a = s._(/*BTDS*/ "Deleted channel"));
      var i =
          (n == null ? void 0 : n.size) != null
            ? o("WAWebCommonNewsletterStrings").getNewsletterFollowersText(
                n.size,
                !0,
              )
            : null,
        l = "padding-small-refreshed";
      return u.jsxs(r("WAWebDrawerSection.react"), {
        theme: l,
        children: [
          u.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            children: [
              u.jsx(r("WAWebNewsletterInfoPhoto.react"), {
                chat: e.chat,
                xstyle: o("WAWebUISpacing").uiMargin.bottom7,
                readOnly:
                  (n == null ? void 0 : n.isSuspendedOrTerminated) === !0 ||
                  !o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(n),
                adminFunnelLogger: t,
                showOutline: !0,
              }),
              u.jsx(r("WAWebNewsletterInfoSubject.react"), {
                chat: e.chat,
                adminFunnelLogger: t,
              }),
              u.jsx("div", {
                "data-testid": void 0,
                className: "x1evy7pa x1kgmq87 x2b8uid",
                children: u.jsx(
                  o("WAWebCopyPasteSelectable.react").SelectableSpan,
                  {
                    dir: "auto",
                    selectable: !0,
                    children: u.jsxs(o("WAWebText.react").WAWebTextTitle, {
                      color: "secondary",
                      children: [
                        a,
                        n != null && n.isSuspendedOrTerminated
                          ? null
                          : u.jsxs(u.Fragment, {
                              children: [
                                r("WAWebL10N").isRTL() ? " -\xA0" : " \xB7\xA0",
                                i,
                              ],
                            }),
                      ],
                    }),
                  },
                ),
              }),
            ],
          }),
          n != null && n.isSuspendedOrTerminated
            ? null
            : u.jsx(f, { chat: e.chat }),
        ],
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.chat,
        a = m(!1),
        i = a[0],
        l = a[1],
        c = t.newsletterMetadata,
        _ = d(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (l(!0),
              yield o("WAWebFollowNewsletter").followNewsletter(
                o("WAWebStateUtils").unproxy(t),
                {
                  eventSurface: o("WAWebWamEnumChannelEventSurface")
                    .CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE,
                  discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                    .CHANNEL_PROFILE,
                },
              ),
              l(!1));
          }),
          [t],
        ),
        f = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "waweb_chatinfo_refresh",
        ),
        g = d(
          function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebUnfollowNewsletterConfirmationModal.react")
                  .UnfollowNewsletterConfirmationModal,
                {
                  chat: t,
                  loggingOptions: {
                    eventSurface: o("WAWebWamEnumChannelEventSurface")
                      .CHANNEL_EVENT_SURFACE.CHANNEL_PROFILE,
                    discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                      .CHANNEL_PROFILE,
                  },
                },
              ),
            );
          },
          [t],
        ),
        h = [];
      o("WAWebNewsletterMembershipUtil").iAmGuest(c)
        ? h.push({
            Icon: o("WAWebPlusIcon.react").PlusIcon,
            wdsIcon: r("WDSIconIcAdd.react"),
            onClick: _,
            testid: "newsletter-info-follow-action",
            title: s._(/*BTDS*/ "Follow"),
            isLoading: i,
          })
        : o("WAWebNewsletterMembershipUtil").iAmSubscriber(c) &&
          h.push({
            Icon: o("WAWebCheckmarkIcon.react").CheckmarkIcon,
            wdsIcon: r("WDSIconIcCheck.react"),
            onClick: g,
            testid: "newsletter-info-unfollow-action",
            title: s._(/*BTDS*/ "Following"),
            isLoading: !1,
          });
      var y = o("useWAWebNewsletterInviteLink").useNewsletterInviteLink({
          chat: t,
          linkShareLoggingNavigationParams: {
            linkShareScreen: o("WAWebWamEnumChannelLinkShareScreen")
              .CHANNEL_LINK_SHARE_SCREEN.CHANNEL_INFO,
          },
        }),
        C = y[0],
        b = y[1],
        v = y[2];
      C != null &&
        (h.push({
          Icon: o("WAWebForwardRefreshedIcon.react").ForwardRefreshedIcon,
          wdsIcon: r("WDSIconIcFastForward.react"),
          onClick: v,
          testid: "newsletter-info-invite-action",
          title: o(
            "WAWebCommonNewsletterStrings",
          ).getForwardNewsletterLinkText(),
          isLoading: !1,
          directional: !0,
        }),
        document.queryCommandSupported("copy") &&
          h.push({
            Icon: r("WDSIconIcLink.react"),
            wdsIcon: r("WDSIconIcLink.react"),
            onClick: b,
            testid: "newsletter-info-copy-link-action",
            title: o("WAWebCommonNewsletterStrings").getCopyLinkText(),
            isLoading: !1,
          }));
      var S = f
        ? h.map(function (e, t) {
            var n = e.isLoading,
              o = e.onClick,
              a = e.testid,
              i = e.title,
              l = e.wdsIcon;
            return u.jsx(
              r("WDSActionTile.react"),
              {
                Icon: l,
                onPress: function () {
                  return void o();
                },
                label: i,
                testid: void 0,
              },
              t,
            );
          })
        : null;
      return u.jsx(o("WAWebFlex.react").FlexRow, {
        justify: "center",
        align: "center",
        xstyle: [
          o("WAWebUISpacing").uiMargin.top25,
          o("WAWebUISpacing").uiMargin.bottom10,
        ],
        children: f
          ? u.jsx(r("WDSActionTileGroup.react"), { children: S })
          : h.map(function (e, t) {
              var n = e.Icon,
                a = e.directional,
                l = e.isLoading,
                s = e.onClick,
                c = e.testid,
                d = e.title;
              return u.jsx(
                r("WAWebUnstyledButton.react"),
                {
                  "aria-label": d,
                  testid: void 0,
                  onClick: s,
                  xstyle: p.infoActionBtn,
                  disabled: i,
                  children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                    align: "center",
                    xstyle: [
                      p.infoAction,
                      o("WAWebUISpacing").uiPadding.horiz15,
                    ],
                    children: [
                      l
                        ? u.jsx(o("WAWebSpinner.react").Spinner, {
                            color: p.spinner,
                            size: 32,
                            xstyle: o("WAWebUISpacing").uiMargin.bottom15,
                          })
                        : u.jsx(n, {
                            directional: a != null ? a : !1,
                            xstyle: [
                              p.actionIcon,
                              o("WAWebUISpacing").uiMargin.bottom15,
                            ],
                            width: 24,
                            height: 24,
                          }),
                      d,
                    ],
                  }),
                },
                t,
              );
            }),
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
