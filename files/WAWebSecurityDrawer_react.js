__d(
  "WAWebSecurityDrawer.react",
  [
    "fbt",
    "WAWebDefenseModeLockedInterstitial.react",
    "WAWebDefenseModeUtils",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerItem.react",
    "WAWebDrawerSection.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebGroupInfoSeparator.react",
    "WAWebKeyboardRotateFocus.react",
    "WAWebKeyboardTabUtils",
    "WAWebMiscGatingUtils",
    "WAWebPrinaUtils",
    "WAWebPrivacyNarrativeE2ESummary.react",
    "WAWebSecurityLockIcon.react",
    "WAWebSecurityShieldIcon.react",
    "WAWebTabOrder",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsNotifications",
    "WDSIconIcLock.react",
    "WDSSwitch.react",
    "react",
    "useWAWebListener",
    "useWAWebToggle",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useState,
      p = {
        icon: {
          position: "x1n2onr6",
          boxSizing: "x9f619",
          width: "xj35x94",
          height: "x19swzb4",
          paddingTop: "x16ovd2e",
          marginInlineEnd: "x11t971q",
          marginBottom: "xat24cr",
          marginInlineStart: "xvc5jky",
          marginTop: "x98l61r",
          color: "x1mysghr",
          backgroundColor: "xe8plzu",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
        iconLock: {
          position: "x10l6tqk",
          insetInlineStart: "x1o0tod",
          insetInlineEnd: "xtijo5x",
          left: null,
          right: null,
          top: "x13vifvy",
          bottom: "xy1j3rs",
          color: "x2rqmh4",
          $$css: !0,
        },
      };
    function _() {
      return u.jsxs(u.Fragment, {
        children: [
          u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: p.icon,
            align: "center",
            justify: "center",
            children: [
              u.jsx(r("WAWebFlexItem.react"), {
                children: u.jsx(
                  o("WAWebSecurityShieldIcon.react").SecurityShieldIcon,
                  {},
                ),
              }),
              u.jsx(o("WAWebFlex.react").FlexColumn, {
                xstyle: p.iconLock,
                align: "center",
                justify: "center",
                children: u.jsx(r("WAWebFlexItem.react"), {
                  children: u.jsx(
                    o("WAWebSecurityLockIcon.react").SecurityLockIcon,
                    {},
                  ),
                }),
              }),
            ],
          }),
          u.jsxs("div", {
            className:
              "x1h678fw xcldk2z xv6tirj x1phvje8 x1nmyh1g x1jchvi3 x1o2sk6j",
            children: [
              s._(
                /*BTDS*/ "Messages and calls in end-to-end encrypted chats stay between you and the people you choose. Not even WhatsApp can read or listen to them.",
              ),
              " ",
              u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                href: o("WAWebPrinaUtils").securityUrl(),
                children: s._(/*BTDS*/ "Learn more"),
              }),
            ],
          }),
        ],
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.onClose,
        n = e.ref,
        a = r("useWAWebToggle")(
          o("WAWebUserPrefsNotifications").getGlobalSecurityNotifications,
          o("WAWebUserPrefsNotifications").setGlobalSecurityNotifications,
        ),
        i = a[0],
        l = a[1],
        c = s._(
          /*BTDS*/ "Get notified when your security code changes for a contact's phone. If you have multiple devices, this setting must be enabled on each device where you want to get notifications.",
        ),
        p = o("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled(),
        f = m(function () {
          return o(
            "WAWebDefenseModeUtils",
          ).getWamEnumIfSettingLockedByDefenseMode("securityNotifications");
        }),
        h = f[0],
        y = f[1],
        C = h != null;
      o("useWAWebListener").useListener(
        o("WAWebUserPrefsGeneral").privacySettingsEventEmitter,
        "all",
        function () {
          var e = o(
            "WAWebDefenseModeUtils",
          ).getWamEnumIfSettingLockedByDefenseMode("securityNotifications");
          e !== h && y(e);
        },
      );
      var b = d(
        function () {
          h != null
            ? o(
                "WAWebDefenseModeLockedInterstitial.react",
              ).openDefenseModeLockedInterstitialGlobal(h, i ? "on" : "off")
            : l();
        },
        [h, i, l],
      );
      return u.jsx(r("WAWebDrawer.react"), {
        ref: n,
        testid: void 0,
        tsNavigationData: { surface: "unknown", viewName: "security-settings" },
        children: u.jsxs(o("WAWebKeyboardRotateFocus.react").RotateFocus, {
          focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
          children: [
            u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              testid: void 0,
              title: s._(/*BTDS*/ "Security"),
              onBack: t,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              focusBackOrCancel: !0,
            }),
            u.jsx(r("WAWebDrawerBody.react"), {
              children: u.jsxs(r("WAWebDrawerSection.react"), {
                animation: !1,
                children: [
                  p
                    ? u.jsx(
                        o("WAWebPrivacyNarrativeE2ESummary.react")
                          .E2eSummarySecurityDrawer,
                        {},
                      )
                    : u.jsx(_, {}),
                  u.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }),
                  u.jsxs("div", {
                    className: "x78zum5 x6s0dn4 x1s70e7g x1phvje8 xcldk2z",
                    children: [
                      u.jsx("div", {
                        className: "x1xrf6ya x1nzty39 xscbp6u x12w63v0",
                        children: u.jsx(r("WDSIconIcLock.react"), {}),
                      }),
                      u.jsx(r("WAWebDrawerItem.react"), {
                        title: s._(
                          /*BTDS*/ "Show security notifications on this computer",
                        ),
                        tabIndex: -1,
                        dataTab: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
                        icon: u.jsx("div", {
                          className: "x1849jeq x78zum5 xl56j7k",
                          children: u.jsx(r("WDSSwitch.react"), {
                            value: i || h !== void 0,
                            "aria-label": s._(
                              /*BTDS*/ "Show security notifications on this computer",
                            ),
                          }),
                        }),
                        theme: "privacy",
                        isLastItem: !0,
                        disableKeydownHandling: !0,
                        disabled: C,
                        onDisabledClick: b,
                        onClick: b,
                        testid: void 0,
                        children: u.jsxs("div", {
                          className: "xcldk2z",
                          children: [
                            c,
                            " ",
                            u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                              href: o("WAWebFaqUrl").getCodeChangeFaqUrl(),
                              onClick: g,
                              children: s._(/*BTDS*/ "Learn more"),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      e == null || e.stopPropagation();
    }
    l.default = f;
  },
  226,
);
