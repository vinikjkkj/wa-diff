__d(
  "WAWebPrivacySettingsDrawer.react",
  [
    "fbt",
    "WALogger",
    "WANullthrows",
    "WAWebAccountSyncJob",
    "WAWebApiPrivacyDisallowedList",
    "WAWebBlocklistCollection",
    "WAWebBrigadingSettingsGatingUtils",
    "WAWebChevronIcon.react",
    "WAWebClickableLink.react",
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebContextualBannerConfig",
    "WAWebContextualBannerWrapperLoadable",
    "WAWebDefenseModeLockedInterstitial.react",
    "WAWebDefenseModeUtils",
    "WAWebDisableLinkPreviewsAction",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerItem.react",
    "WAWebDrawerSection.react",
    "WAWebEphemeralityDurations",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFbtIntlList",
    "WAWebKeyboardRotateFocus.react",
    "WAWebKeyboardTabUtils",
    "WAWebLoadingDrawer.react",
    "WAWebMiscGatingUtils",
    "WAWebPrivacyScreenModeToggle.react",
    "WAWebPrivacySettings",
    "WAWebPrivacySettingsClickWamEvent",
    "WAWebScreenLockTimerOptions",
    "WAWebSetPrivacyForOneCategoryAction",
    "WAWebSettingsFBT",
    "WAWebStatusPostingUtils",
    "WAWebTabOrder",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsScreenLock",
    "WAWebVoipGatingUtils",
    "WAWebVoipRelayAllCallsAction",
    "WAWebWamEnumPrivacyControlEntryPointType",
    "WAWebWamEnumPrivacyControlItemType",
    "WDSSwitch.react",
    "asyncToGeneratorRuntime",
    "err",
    "react",
    "useWAWebListener",
    "useWAWebModelValues",
    "useWAWebStatusPrivacySettingConfig",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useEffect,
      f = p.useState,
      g = {
        drawerTitle: {
          paddingTop: "x134lwj9",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x1i2zvha",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        chevronIcon: { color: "x16zc8z2", height: "x17rw0jw", $$css: !0 },
      };
    function h(e, t) {
      new (o("WAWebPrivacySettingsClickWamEvent").PrivacySettingsClickWamEvent)(
        { privacyControlItem: e, privacyControlEntryPoint: t },
      ).commit();
    }
    function y(e) {
      var t = e.url;
      return m.jsx(r("WAWebClickableLink.react"), {
        onClick: function (n) {
          (o("WAWebExternalLink.react").openExternalLink(t),
            n.stopPropagation());
        },
        children: r("WAWebFbtCommon")("Learn more"),
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(t) {
      var a,
        i,
        l,
        u,
        c = t.onClose,
        d = t.onOpenBlockedContacts,
        p = t.onOpenEphemeralityDrawer,
        C = t.onOpenPrivacyScreenCustomize,
        b = t.onOpenScreenLockDrawer,
        E = t.onOpenStatusPrivacySettingDrawer,
        I = t.onOpenVisibilityEditDrawer,
        T = t.ref,
        D = f(function () {
          return S(o("WAWebUserPrefsGeneral").getUserPrivacySettings());
        }),
        x = D[0],
        $ = D[1],
        P = f({ about: null, groupadd: null, last: null, profile: null }),
        N = P[0],
        M = P[1],
        w = o(
          "useWAWebStatusPrivacySettingConfig",
        ).useWAWebStatusPrivacySettingConfig(),
        A = w.statusPostingPrivacyConfig,
        F = r("WANullthrows")(
          o("WAWebContactCollection").ContactCollection.getMeContact(),
        ),
        O = o("useWAWebModelValues").useModelValues(F, [
          "disappearingModeDuration",
        ]),
        B = O.disappearingModeDuration;
      function W(e) {
        var t = S(e.privacySettings);
        if (t == null)
          throw r("err")(
            "Incomplete privacy settings: " +
              Object.keys(
                o("WAWebUserPrefsGeneral").getUserPrivacySettings(),
              ).join(", "),
          );
        ($(t),
          M(
            o("WAWebApiPrivacyDisallowedList").disallowedRowsToLists(
              e.privacyDisallowedRows,
            ),
          ));
      }
      (_(function () {
        var t = new AbortController();
        return (
          x == null &&
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                var n = yield o("WAWebAccountSyncJob").updatePrivacySettings();
                if (t.signal.aborted) return;
                W(n);
              } catch (t) {
                (t instanceof Error &&
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "privacy_settings_drawer: get privacy settings failed",
                        ])),
                    )
                    .catching(t)
                    .sendLogs(
                      "privacy_settings_drawer: get privacy settings failed",
                    ),
                  c(),
                  o("WAWebToastManager").ToastManager.open(
                    m.jsx(o("WAWebToast.react").Toast, {
                      msg: s._(
                        /*BTDS*/ "Failed to get privacy settings. Try again.",
                      ),
                    }),
                  ));
              }
            })(),
          function () {
            return t.abort();
          }
        );
      }, []),
        _(function () {
          var e = new AbortController();
          return (
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = yield o(
                "WAWebApiPrivacyDisallowedList",
              ).queryDisallowedLists();
              e.signal.aborted || M(t);
            })(),
            function () {
              return e.abort();
            }
          );
        }, []),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "account_sync_for_privacy_from_bridge",
          function (e) {
            W(e);
          },
        ));
      var q = f(function () {
          return o(
            "WAWebDefenseModeUtils",
          ).getWamEnumIfSettingLockedByDefenseMode("disableLinkPreviews");
        }),
        U = q[0],
        V = q[1],
        H = U != null,
        G = f(function () {
          return o(
            "WAWebDefenseModeUtils",
          ).getWamEnumIfSettingLockedByDefenseMode("messages");
        }),
        z = G[0],
        j = G[1],
        K = z != null;
      o("useWAWebListener").useListener(
        o("WAWebUserPrefsGeneral").privacySettingsEventEmitter,
        "all",
        function () {
          var e = o(
            "WAWebDefenseModeUtils",
          ).getWamEnumIfSettingLockedByDefenseMode("disableLinkPreviews");
          e !== U && V(e);
          var t = o(
            "WAWebDefenseModeUtils",
          ).getWamEnumIfSettingLockedByDefenseMode("messages");
          t !== z && j(t);
          var n = S(o("WAWebUserPrefsGeneral").getUserPrivacySettings());
          n != null &&
            n.disallowAllP2p !== (x == null ? void 0 : x.disallowAllP2p) &&
            $(n);
        },
      );
      var Q = s._(/*BTDS*/ "Privacy");
      if (!x)
        return m.jsx(r("WAWebLoadingDrawer.react"), { title: Q, error: !1 });
      var X = o("WAWebMiscGatingUtils").isDefaultDisappearingMessagesEnabled(),
        Y = x.about,
        J = x.disableLinkPreviews,
        Z = x.disallowAllP2p,
        ee = x.groupAdd,
        te = x.lastSeen,
        ne = x.messages,
        re = x.online,
        oe = x.profilePicture,
        ae = x.readReceipts,
        ie = [R(te, (a = N.last) == null ? void 0 : a.disallowedList.length)];
      te !== o("WAWebPrivacySettings").VISIBILITY.all &&
        re === o("WAWebPrivacySettings").ONLINE_VISIBILITY.all &&
        ie.push(R(re));
      var le = r("WAWebFbtIntlList")(
          ie,
          r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
          r("WAWebFbtIntlList").DELIMITERS.COMMA,
        ),
        se = m.jsx(v, {
          title: o("WAWebSettingsFBT").privacyLastSeenOnlineEnabledTitle(),
          onClick: function () {
            (I("lastSeen"),
              h(
                o("WAWebWamEnumPrivacyControlItemType")
                  .PRIVACY_CONTROL_ITEM_TYPE.LAST_SEEN_AND_ONLINE,
                o("WAWebWamEnumPrivacyControlEntryPointType")
                  .PRIVACY_CONTROL_ENTRY_POINT_TYPE.PRIVACY_SETTINGS,
              ));
          },
          testid: void 0,
          children: m.jsxs("span", { children: [" ", le] }),
        }),
        ue = o("WAWebBlocklistCollection").BlocklistCollection.dedupedList()
          .length,
        ce = s._(
          /*BTDS*/ "If turned off, you won't send or receive read receipts. Read receipts are always sent for group chats.",
        ),
        de = s._(
          /*BTDS*/ "To help protect your IP address from being inferred by third-party websites, previews for the links you share in chats will no longer be generated.",
        ),
        me = o("WAWebBrigadingSettingsGatingUtils").canEnableAntiBrigading()
          ? m.jsx(r("WAWebDrawerItem.react"), {
              title: o("WAWebSettingsFBT").antiBrigadingTitle(),
              tabIndex: -1,
              dataTab: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
              icon: m.jsx("div", {
                className: "x1849jeq x78zum5 xl56j7k",
                children: m.jsx(r("WDSSwitch.react"), {
                  value:
                    ne === o("WAWebPrivacySettings").ALL_CONTACTS.contacts || K,
                  disabled: K,
                  "aria-label":
                    o("WAWebSettingsFBT").antiBrigadingTitle().toString() +
                    ". " +
                    o("WAWebSettingsFBT").antiBrigadingDescription().toString(),
                }),
              }),
              theme: "privacy",
              isLastItem: !1,
              disableKeydownHandling: !1,
              disabled: K,
              onDisabledClick: function () {
                z != null &&
                  o(
                    "WAWebDefenseModeLockedInterstitial.react",
                  ).openDefenseModeLockedInterstitialGlobal(
                    z,
                    ne === o("WAWebPrivacySettings").ALL_CONTACTS.contacts
                      ? "on"
                      : "off",
                  );
              },
              onClick: function () {
                k(x, $, ne);
              },
              testid: void 0,
              children: m.jsxs("div", {
                className: "xcldk2z",
                children: [
                  o("WAWebSettingsFBT").antiBrigadingDescription(),
                  " ",
                  m.jsx(y, { url: o("WAWebFaqUrl").getAntiBrigadingFaqUrl() }),
                ],
              }),
            })
          : null,
        pe = o("WAWebVoipGatingUtils").isCallingEnabled()
          ? m.jsx(r("WAWebDrawerItem.react"), {
              title: o("WAWebSettingsFBT").protectIpInCallsTitle(),
              tabIndex: -1,
              icon: m.jsx("div", {
                className: "x1849jeq x78zum5 xl56j7k",
                children: m.jsx(r("WDSSwitch.react"), {
                  value: Z,
                  "aria-label":
                    o("WAWebSettingsFBT").protectIpInCallsTitle().toString() +
                    ". " +
                    o("WAWebSettingsFBT")
                      .protectIpInCallsDescription()
                      .toString(),
                }),
              }),
              theme: "privacy",
              isLastItem: !1,
              disableKeydownHandling: !0,
              onClick: function () {
                h(
                  o("WAWebWamEnumPrivacyControlItemType")
                    .PRIVACY_CONTROL_ITEM_TYPE.CALLS,
                  o("WAWebWamEnumPrivacyControlEntryPointType")
                    .PRIVACY_CONTROL_ENTRY_POINT_TYPE.PRIVACY_SETTINGS,
                );
                var e = !Z,
                  t = babelHelpers.extends({}, x, { disallowAllP2p: e });
                ($(t), o("WAWebVoipRelayAllCallsAction").setRelayAllCalls(e));
              },
              testid: void 0,
              children: m.jsxs("div", {
                className: "xcldk2z",
                children: [
                  o("WAWebSettingsFBT").protectIpInCallsDescription(),
                  " ",
                  m.jsx(y, {
                    url: o("WAWebFaqUrl").getProtectIpInCallsFaqUrl(),
                  }),
                ],
              }),
            })
          : null,
        _e = A
          ? m.jsx(v, {
              title: o("WAWebSettingsFBT").privacyStatusPostingTitle(),
              onClick: E,
              testid: void 0,
              children: m.jsx("span", {
                children: o("WAWebStatusPostingUtils").formatStatusSetting(A),
              }),
            })
          : null,
        fe = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            ($(babelHelpers.extends({}, x, { disableLinkPreviews: e })),
              o("WAWebDisableLinkPreviewsAction").setDisableLinkPreviews(e));
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })();
      return m.jsx(r("WAWebDrawer.react"), {
        ref: T,
        theme: "striped",
        testid: void 0,
        tsNavigationData: { surface: "unknown", viewName: "privacy-settings" },
        children: m.jsx(o("WAWebKeyboardRotateFocus.react").RotateFocus, {
          focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
          children: m.jsxs("div", {
            className: "x5yr21d x78zum5 xdt5ytf x6ikm8r x10wlt62",
            children: [
              m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                testid: void 0,
                title: Q,
                onBack: c,
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                focusBackOrCancel: !0,
              }),
              m.jsxs(r("WAWebDrawerBody.react"), {
                children: [
                  m.jsx(
                    o("WAWebContextualBannerWrapperLoadable")
                      .ContextualBannerWrapperLoadable,
                    {
                      bannerListOrderedByPriority: [
                        {
                          id: o("WAWebContextualBannerConfig")
                            .ContextualBannerId.AppLockUpsell,
                          onClick: b,
                        },
                      ],
                    },
                  ),
                  m.jsxs(r("WAWebDrawerSection.react"), {
                    title:
                      o("WAWebSettingsFBT").privacyPersonalInfoHeaderTitle(),
                    titleXStyle: g.drawerTitle,
                    theme: "padding-no-vertical",
                    animation: !1,
                    ellipsify: !1,
                    children: [
                      se,
                      m.jsx(v, {
                        title: o("WAWebSettingsFBT").privacyProfilePhotoTitle(),
                        onClick: function () {
                          (I("profilePicture"),
                            h(
                              o("WAWebWamEnumPrivacyControlItemType")
                                .PRIVACY_CONTROL_ITEM_TYPE.PROFILE_PHOTO,
                              o("WAWebWamEnumPrivacyControlEntryPointType")
                                .PRIVACY_CONTROL_ENTRY_POINT_TYPE
                                .PRIVACY_SETTINGS,
                            ));
                        },
                        testid: void 0,
                        children: m.jsx("span", {
                          children: R(
                            oe,
                            (i = N.profile) == null
                              ? void 0
                              : i.disallowedList.length,
                          ),
                        }),
                      }),
                      m.jsx(v, {
                        title: o("WAWebSettingsFBT").privacyAboutTitle(),
                        onClick: function () {
                          (I("about"),
                            h(
                              o("WAWebWamEnumPrivacyControlItemType")
                                .PRIVACY_CONTROL_ITEM_TYPE.ABOUT,
                              o("WAWebWamEnumPrivacyControlEntryPointType")
                                .PRIVACY_CONTROL_ENTRY_POINT_TYPE
                                .PRIVACY_SETTINGS,
                            ));
                        },
                        testid: void 0,
                        children: m.jsx("span", {
                          children: R(
                            Y,
                            (l = N.about) == null
                              ? void 0
                              : l.disallowedList.length,
                          ),
                        }),
                      }),
                      _e,
                      m.jsx(r("WAWebDrawerItem.react"), {
                        title: o("WAWebSettingsFBT").privacyReadReceiptsTitle(),
                        tabIndex: -1,
                        dataTab: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
                        icon: m.jsx("div", {
                          className: "x1849jeq x78zum5 xl56j7k",
                          children: m.jsx(r("WDSSwitch.react"), {
                            value:
                              ae === o("WAWebPrivacySettings").ALL_NONE.all,
                            "aria-label":
                              o("WAWebSettingsFBT")
                                .privacyReadReceiptsTitle()
                                .toString() +
                              ". " +
                              ce.toString(),
                          }),
                        }),
                        theme: "privacy",
                        isLastItem: !0,
                        disableKeydownHandling: !0,
                        onClick: function () {
                          (h(
                            o("WAWebWamEnumPrivacyControlItemType")
                              .PRIVACY_CONTROL_ITEM_TYPE.READ_RECEIPT,
                            o("WAWebWamEnumPrivacyControlEntryPointType")
                              .PRIVACY_CONTROL_ENTRY_POINT_TYPE
                              .PRIVACY_SETTINGS,
                          ),
                            L(x, $, ae));
                        },
                        testid: void 0,
                        children: m.jsx("div", {
                          className: "xcldk2z",
                          children: ce,
                        }),
                      }),
                    ],
                  }),
                  X &&
                    m.jsx(r("WAWebDrawerSection.react"), {
                      theme: "padding-no-vertical",
                      title: s._(/*BTDS*/ "Disappearing messages"),
                      titleXStyle: g.drawerTitle,
                      animation: !1,
                      children: m.jsx(v, {
                        title: o("WAWebSettingsFBT").privacyDDMTitle(),
                        onClick: function () {
                          (h(
                            o("WAWebWamEnumPrivacyControlItemType")
                              .PRIVACY_CONTROL_ITEM_TYPE.DDM_TIMER,
                            o("WAWebWamEnumPrivacyControlEntryPointType")
                              .PRIVACY_CONTROL_ENTRY_POINT_TYPE
                              .PRIVACY_SETTINGS,
                          ),
                            p());
                        },
                        isLastItem: !0,
                        testid: void 0,
                        children: m.jsx("span", {
                          "data-testid": void 0,
                          children: o(
                            "WAWebEphemeralityDurations",
                          ).durationToLabel(B),
                        }),
                      }),
                    }),
                  m.jsxs(r("WAWebDrawerSection.react"), {
                    theme: X ? "padding" : "padding-no-vertical",
                    animation: !1,
                    children: [
                      m.jsx(v, {
                        title: o("WAWebSettingsFBT").privacyGroupsTitle(),
                        onClick: function () {
                          (h(
                            o("WAWebWamEnumPrivacyControlItemType")
                              .PRIVACY_CONTROL_ITEM_TYPE.GROUPS,
                            o("WAWebWamEnumPrivacyControlEntryPointType")
                              .PRIVACY_CONTROL_ENTRY_POINT_TYPE
                              .PRIVACY_SETTINGS,
                          ),
                            I("groupAdd"));
                        },
                        testid: void 0,
                        children: m.jsx("span", {
                          children: R(
                            ee,
                            (u = N.groupadd) == null
                              ? void 0
                              : u.disallowedList.length,
                          ),
                        }),
                      }),
                      m.jsx(v, {
                        title: o("WAWebSettingsFBT").privacyBlockedTitle(),
                        onClick: function () {
                          (h(
                            o("WAWebWamEnumPrivacyControlItemType")
                              .PRIVACY_CONTROL_ITEM_TYPE.BLOCKED,
                            o("WAWebWamEnumPrivacyControlEntryPointType")
                              .PRIVACY_CONTROL_ENTRY_POINT_TYPE
                              .PRIVACY_SETTINGS,
                          ),
                            d());
                        },
                        testid: void 0,
                        children: m.jsx("span", {
                          children: ue === 0 ? s._(/*BTDS*/ "None") : ue,
                        }),
                      }),
                      m.jsx(v, {
                        title: o("WAWebSettingsFBT").privacyScreenlockTitle(),
                        isLastItem: !0,
                        onClick: function () {
                          (h(
                            o("WAWebWamEnumPrivacyControlItemType")
                              .PRIVACY_CONTROL_ITEM_TYPE.SCREEN_LOCK,
                            o("WAWebWamEnumPrivacyControlEntryPointType")
                              .PRIVACY_CONTROL_ENTRY_POINT_TYPE
                              .PRIVACY_SETTINGS,
                          ),
                            b());
                        },
                        testid: void 0,
                        children: o(
                          "WAWebScreenLockTimerOptions",
                        ).getScreenLockAutoTimerLabelForSummary(
                          o(
                            "WAWebUserPrefsScreenLock",
                          ).getScreenLockDurationInSeconds(),
                        ),
                      }),
                    ],
                  }),
                  m.jsxs(r("WAWebDrawerSection.react"), {
                    theme: "padding-no-vertical",
                    title: s._(/*BTDS*/ "Advanced"),
                    titleXStyle: g.drawerTitle,
                    animation: !1,
                    children: [
                      m.jsx(
                        o("WAWebPrivacyScreenModeToggle.react")
                          .WAWebPrivacyScreenModeToggle,
                        { onOpenCustomize: C },
                      ),
                      me,
                      pe,
                      m.jsx(r("WAWebDrawerItem.react"), {
                        title: o("WAWebSettingsFBT").privacyLinkPreviewsTitle(),
                        tabIndex: -1,
                        dataTab: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
                        icon: m.jsx("div", {
                          className: "x1849jeq x78zum5 xl56j7k",
                          children: m.jsx(r("WDSSwitch.react"), {
                            value: J || H,
                            disabled: H,
                            "aria-label":
                              o("WAWebSettingsFBT")
                                .privacyLinkPreviewsTitle()
                                .toString() +
                              ". " +
                              de.toString(),
                          }),
                        }),
                        theme: "privacy",
                        isLastItem: !0,
                        disableKeydownHandling: !0,
                        disabled: H,
                        onDisabledClick: function () {
                          U != null &&
                            o(
                              "WAWebDefenseModeLockedInterstitial.react",
                            ).openDefenseModeLockedInterstitialGlobal(
                              U,
                              J ? "on" : "off",
                            );
                        },
                        onClick: function () {
                          fe(!J);
                        },
                        testid: void 0,
                        children: m.jsxs("div", {
                          className: "xcldk2z",
                          children: [
                            de,
                            " ",
                            m.jsx(y, {
                              url: o(
                                "WAWebFaqUrl",
                              ).getDisableLinkPreviewsFaqUrl(),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    var b = function () {
      return m.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
        directional: !0,
        iconXstyle: g.chevronIcon,
      });
    };
    function v(e) {
      var t = e.children,
        n = e.disabled,
        a = e.icon,
        i = e.isLastItem,
        l = e.onClick,
        s = e.tabIndex,
        u = s === void 0 ? 0 : s,
        c = e.testid,
        d = e.title,
        p = a != null ? a : b();
      return m.jsx(r("WAWebDrawerItem.react"), {
        title: d,
        theme: "privacy",
        icon: p,
        onClick: l,
        disabled: n,
        isLastItem: i,
        tabIndex: u,
        dataTab: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
        testid: void 0,
        children: t,
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t = e.about,
        n = e.groupAdd,
        r = e.lastSeen,
        a = e.online,
        i = a === void 0 ? "all" : a,
        l = e.profilePicture,
        s = e.readReceipts,
        u = e.disableLinkPreviews,
        c = u === void 0 ? !1 : u,
        d = e.messages,
        m = d === void 0 ? o("WAWebPrivacySettings").ALL_CONTACTS.all : d,
        p = e.disallowAllP2p,
        _ = p === void 0 ? !1 : p;
      if (
        t != null &&
        n != null &&
        r != null &&
        l != null &&
        s != null &&
        m != null
      )
        return {
          about: t,
          groupAdd: n,
          lastSeen: r,
          online: i,
          profilePicture: l,
          readReceipts: s,
          disableLinkPreviews: c,
          messages: m,
          disallowAllP2p: _,
        };
    }
    function R(e, t) {
      switch (e) {
        case o("WAWebPrivacySettings").VISIBILITY.all:
          return s._(/*BTDS*/ "Everyone");
        case o("WAWebPrivacySettings").VISIBILITY.contacts:
          return s._(/*BTDS*/ "My contacts");
        case o("WAWebPrivacySettings").VISIBILITY.contact_blacklist:
          return t == null
            ? ""
            : s._(
                /*BTDS*/ '_j{"*":"{count} contacts excluded","_1":"1 contact excluded"}',
                [s._plural(t, "count")],
              );
        case o("WAWebPrivacySettings").VISIBILITY.none:
          return s._(/*BTDS*/ "Nobody");
        case o("WAWebPrivacySettings").ONLINE_VISIBILITY.match_last_seen:
          return s._(/*BTDS*/ "Same as last seen");
        default:
          return "";
      }
    }
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r =
            n === o("WAWebPrivacySettings").ALL_NONE.all
              ? o("WAWebPrivacySettings").ALL_NONE.none
              : o("WAWebPrivacySettings").ALL_NONE.all;
          t(babelHelpers.extends({}, e, { readReceipts: r }));
          try {
            r === o("WAWebPrivacySettings").ALL_NONE.none
              ? yield o(
                  "WAWebSetPrivacyForOneCategoryAction",
                ).setPrivacyForOneCategory({
                  name: "readreceipts",
                  value: "none",
                })
              : yield o(
                  "WAWebSetPrivacyForOneCategoryAction",
                ).setPrivacyForOneCategory({
                  name: "readreceipts",
                  value: "all",
                });
          } catch (e) {
            (e instanceof Error &&
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "privacy_settings_drawer: set readreceipts failed ",
                      "",
                    ])),
                  e.stack,
                )
                .sendLogs("privacy_settings_drawer: set readreceipts failed"),
              o("WAWebToastManager").ToastManager.open(
                m.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ "Failed to update read receipts. Try again.",
                  ),
                }),
              ));
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t, n) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r =
            n === o("WAWebPrivacySettings").ALL_CONTACTS.all
              ? o("WAWebPrivacySettings").ALL_CONTACTS.contacts
              : o("WAWebPrivacySettings").ALL_CONTACTS.all;
          t(babelHelpers.extends({}, e, { messages: r }));
          try {
            r === o("WAWebPrivacySettings").ALL_CONTACTS.all
              ? yield o(
                  "WAWebSetPrivacyForOneCategoryAction",
                ).setPrivacyForOneCategory({ name: "messages", value: "all" })
              : yield o(
                  "WAWebSetPrivacyForOneCategoryAction",
                ).setPrivacyForOneCategory({
                  name: "messages",
                  value: "contacts",
                });
          } catch (e) {
            (e instanceof Error &&
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "privacy_settings_drawer: msg blocking set failed ",
                      "",
                    ])),
                  e.stack,
                )
                .sendLogs("privacy_settings_drawer: msg blocking set failed"),
              o("WAWebToastManager").ToastManager.open(
                m.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ "Failed to update message blocking setting",
                  ),
                }),
              ));
          }
        })),
        I.apply(this, arguments)
      );
    }
    ((l.PrivacySettingsDrawer = C), (l.getChevronIcon = b));
  },
  226,
);
