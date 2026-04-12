__d(
  "WAWebNewsletterNotificationSettingsBanner.react",
  [
    "fbt",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebConversationBanner.react",
    "WAWebDrawerManager",
    "WAWebFlex.react",
    "WAWebInfoFlowLoadable",
    "WAWebInfoFlowStep",
    "WAWebKeyboardTabUtils",
    "WAWebUimUie.react",
    "WAWebUnmuteNotificationsRefreshedIcon.react",
    "WDSText.react",
    "WDSTextualLink.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useCallback,
      d = {
        banner: { backgroundColor: "x1h3rtpe", $$css: !0 },
        icon: { color: "xhslqc4", marginInlineEnd: "xqf2s3x", $$css: !0 },
      };
    function m(e) {
      var t = e.chat,
        n = e.onClose,
        a = e.ref,
        i = c(
          function () {
            (n(),
              o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                  ? {
                      descriptorType: "info_flow",
                      chat: t,
                      initialStep:
                        o("WAWebInfoFlowStep").InfoFlowStep.Notifications,
                    }
                  : u.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
                      chat: t,
                      initialStep:
                        o("WAWebInfoFlowStep").InfoFlowStep.Notifications,
                    }),
                {
                  transition: "slide-left",
                  focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                },
              ));
          },
          [t, n],
        );
      return u.jsx(o("WAWebUimUie.react").UIE, {
        displayName: "NewsletterNotificationSettingsBanner",
        escapable: !0,
        children: u.jsx(r("WAWebConversationBanner.react"), {
          ref: a,
          xstyle: d.banner,
          onClose: n,
          children: u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            children: [
              u.jsx(
                o("WAWebUnmuteNotificationsRefreshedIcon.react")
                  .UnmuteNotificationsRefreshedIcon,
                { iconXstyle: d.icon },
              ),
              u.jsxs(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDefault",
                children: [
                  s._(/*BTDS*/ "New notification settings available."),
                  "\xA0",
                  u.jsx(r("WDSTextualLink.react"), {
                    onClick: i,
                    children: s._(/*BTDS*/ "View settings"),
                  }),
                ],
              }),
            ],
          }),
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
