__d(
  "WAWebNewsletterChatMenuDropdown.react",
  [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebInfoFlowLoadable",
    "WAWebInfoFlowStep",
    "WAWebModalManager",
    "WAWebNewsletterMembershipUtil",
    "WAWebReportNewsletterPopup.react",
    "WAWebSpamConstants",
    "WAWebStateUtils",
    "WAWebUnfollowNewsletterConfirmationModal.react",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWamEnumTsSurface",
    "WDSIconIcCheckBox.react",
    "WDSIconIcClose.react",
    "WDSIconIcInfo.react",
    "WDSIconIcLogout.react",
    "WDSIconIcSettings.react",
    "WDSIconIcThumbDown.react",
    "WDSMenu.react",
    "WDSMenuItem.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useCallback;
    function d(e) {
      var t,
        n,
        a,
        i = e.chat,
        l = e.onSelectMessages,
        d = i.newsletterMetadata,
        m = c(
          function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebReportNewsletterPopup.react"), {
                chat: i,
                spamFlow: o("WAWebSpamConstants").SpamFlow.OverflowMenuReport,
              }),
            );
          },
          [i],
        ),
        p = c(
          function () {
            o("WAWebCmd").Cmd.chatInfoDrawer(i);
          },
          [i],
        ),
        _ = c(
          function () {
            o("WAWebCmd").Cmd.closeChat(i);
          },
          [i],
        ),
        f = c(
          function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebUnfollowNewsletterConfirmationModal.react")
                  .UnfollowNewsletterConfirmationModal,
                {
                  chat: o("WAWebStateUtils").unproxy(i),
                  loggingOptions: {
                    eventSurface: o("WAWebWamEnumChannelEventSurface")
                      .CHANNEL_EVENT_SURFACE.CHANNEL_THREAD,
                    discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                      .CHANNEL_THREAD,
                  },
                },
              ),
            );
          },
          [i],
        ),
        g = c(
          function () {
            o("WAWebDrawerManager").DrawerManager.openDrawerRight(
              o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                ? {
                    descriptorType: "info_flow",
                    chat: i,
                    initialStep:
                      o("WAWebInfoFlowStep").InfoFlowStep.NewsletterSettings,
                  }
                : u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
                    chat: i,
                    initialStep:
                      o("WAWebInfoFlowStep").InfoFlowStep.NewsletterSettings,
                  }),
            );
          },
          [i],
        ),
        h = s._(/*BTDS*/ "Channel settings"),
        y = null;
      o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(
        i == null ? void 0 : i.newsletterMetadata,
      ) &&
        !((t = i.newsletterMetadata) != null && t.isSuspendedOrTerminated) &&
        (y = u.jsx(
          r("WDSMenuItem.react"),
          {
            onPress: g,
            testid: void 0,
            Icon: r("WDSIconIcSettings.react"),
            title: h,
          },
          "newsletter-overflow-menu-newsletter-settings",
        ));
      var C = s._(/*BTDS*/ "Select updates"),
        b = null;
      ((n = i.newsletterMetadata) != null && n.isSuspendedOrTerminated) ||
        (b = u.jsx(
          r("WDSMenuItem.react"),
          {
            testid: void 0,
            onPress: l,
            Icon: r("WDSIconIcCheckBox.react"),
            title: C,
          },
          "newsletter-overflow-menu-select-messages",
        ));
      var v = s._(/*BTDS*/ "Report"),
        S = null;
      ((a = i.newsletterMetadata) != null && a.isSuspendedOrTerminated) ||
        (S = u.jsx(
          r("WDSMenuItem.react"),
          {
            onPress: m,
            testid: void 0,
            Icon: r("WDSIconIcThumbDown.react"),
            title: v,
            destructive: !0,
          },
          "newsletter-overflow-menu-report",
        ));
      var R = s._(/*BTDS*/ "Channel info"),
        L = s._(/*BTDS*/ "Close channel"),
        E = [
          u.jsx(
            r("WDSMenuItem.react"),
            {
              onPress: p,
              testid: void 0,
              Icon: r("WDSIconIcInfo.react"),
              title: R,
            },
            "newsletter-overflow-menu-newsletter-info",
          ),
          y,
          b,
          u.jsx(
            r("WDSMenuItem.react"),
            {
              onPress: _,
              testid: void 0,
              Icon: r("WDSIconIcClose.react"),
              title: L,
            },
            "newsletter-overflow-menu-close-channel",
          ),
          u.jsx(
            r("WDSMenuItem.react"),
            { type: "separator" },
            "newsletter-overflow-menu-separator",
          ),
          S,
        ],
        k = s._(/*BTDS*/ "Unfollow");
      return (
        o("WAWebNewsletterMembershipUtil").iAmSubscriber(d) &&
          E.push(
            u.jsx(
              r("WDSMenuItem.react"),
              {
                onPress: f,
                testid: void 0,
                Icon: r("WDSIconIcLogout.react"),
                title: k,
                destructive: !0,
              },
              "newsletter-overflow-menu-unfollow",
            ),
          ),
        u.jsx(r("WDSMenu.react"), { testid: void 0, children: E })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
