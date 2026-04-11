__d(
  "WAWebDoNotDisturbSettings.react",
  [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBackgroundSyncReporter",
    "WAWebCmd",
    "WAWebDevOnlyBadge.react",
    "WAWebDrawerButton.react",
    "WAWebDrawerSection.react",
    "WAWebEnvironment",
    "WAWebGuidePopup.react",
    "WAWebModalManager",
    "WAWebMuteCollection",
    "WAWebMuteGetters",
    "WAWebNotificationConstants",
    "WAWebPushNotificationsGatingUtils",
    "WAWebSettingsCheckList.react",
    "WAWebSettingsFBT",
    "WAWebStateUtils",
    "WAWebSubscribePushManagerAction",
    "WAWebText.react",
    "WAWebUserPrefsNotifications",
    "WAWebVoipGatingUtils",
    "WAWebWamEnumOffboardSources",
    "WAWebWamEnumOnboardSources",
    "WDSIconIcCall.react",
    "WDSIconIcChevronRight.react",
    "WDSIconIcGroup.react",
    "WDSIconWdsIcChat.react",
    "WDSIconWdsIcStatus.react",
    "WDSText.react",
    "cr:3176",
    "cr:545",
    "cr:6005",
    "cr:7206",
    "cr:7288",
    "cr:7293",
    "cr:8361",
    "gkx",
    "react",
    "useWAWebMuteValues",
    "useWAWebSettingSync",
    "useWAWebToggle",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p = m || (m = o("react")),
      _ = m.useImperativeHandle,
      f = (e = n("cr:7293")) != null ? e : {},
      g = f.getNotificationToneGroupSetting,
      h = f.getNotificationToneSetting,
      y = f.setNotificationToneGroupSetting,
      C = f.setNotificationToneSetting,
      b = (u = n("cr:7293")) != null ? u : {},
      v = b.isNotificationBannerEnabled,
      S = (c = n("cr:7288")) != null ? c : {},
      R = S.isCustomNotificationTonesEnabled,
      L = {
        drawerTitle: {
          paddingTop: "x134lwj9",
          paddingBottom: "x1i2zvha",
          paddingInlineStart: "x1c1uobl",
          paddingInlineEnd: "xyri2b",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        messagesItem: {
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          $$css: !0,
        },
        settingsItemIcon: {
          width: "xvy4d1p",
          paddingInlineEnd: "xcldk2z",
          $$css: !0,
        },
        chevronIconPaddingRight: {
          insetInlineEnd: "x67dgr1",
          left: null,
          right: null,
          $$css: !0,
        },
        footerText: {
          paddingTop: "x1h678fw",
          paddingBottom: "xv6tirj",
          $$css: !0,
        },
      };
    function E(e) {
      var t,
        a,
        i = e.isNotificationsEnabledInSystem,
        l = i === void 0 ? !0 : i,
        u = e.onOpenCalls,
        c = e.onOpenDirectMessages,
        m = e.onOpenGroupMessages,
        f = e.onOpenStatusUpdates,
        b = e.onShowNotificationBannerClick,
        S = e.onTaskbarNotificationSettingsClick,
        E = e.reactionsMute,
        k = e.ref,
        I = o("useWAWebMuteValues").useMuteValues(E.id, [
          o("WAWebMuteGetters").getIsMuted,
          o("WAWebMuteGetters").getExpiration,
          o("WAWebMuteGetters").getIsCallMuted,
          o("WAWebMuteGetters").getCallExpiration,
        ]),
        T = I[0],
        D = I[1],
        x = I[2],
        $ = I[3],
        P = !((t = v == null ? void 0 : v()) == null || t),
        N = r("useWAWebToggle")(
          function () {
            return o(
              "WAWebMuteCollection",
            ).MuteCollection.getGlobalOfflineNotifications();
          },
          function (e) {
            var t;
            if (
              (o(
                "WAWebMuteCollection",
              ).MuteCollection.setGlobalOfflineNotifications(e),
              e &&
                ((t = window.Notification) == null ? void 0 : t.permission) !==
                  o("WAWebNotificationConstants").PERMISSION_ALLOWED)
            ) {
              var n;
              if (
                ((n = window.Notification) == null ? void 0 : n.permission) ===
                o("WAWebNotificationConstants").PERMISSION_DEFAULT
              ) {
                var r;
                o("WAWebModalManager").ModalManager.open(
                  p.jsx((r = o("WAWebGuidePopup.react")).GuidePopup, {
                    messaging: r.Messaging.BACKGROUND_SYNC,
                    onConfirm: r.guideConfirm,
                    onCancel: r.notificationGuideLearnMore,
                    type: r.GuidePopupType.GUIDE_ALLOW,
                    featureSurface: r.FeatureSurface.NOTIFICATION,
                  }),
                );
              }
              window.Notification.requestPermission(function (t) {
                (o("WAWebCmd").Cmd.onNotificationPermissionChange(),
                  t === o("WAWebNotificationConstants").PERMISSION_ALLOWED
                    ? o(
                        "WAWebSubscribePushManagerAction",
                      ).handleOfflineNotifications(e)
                    : o("WALogger").WARN(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[push-notif] subscribe failed, perm denied: ",
                            "",
                          ])),
                        t,
                      ),
                  o(
                    "WAWebBackgroundSyncReporter",
                  ).logBackgroundSyncAdoptionEvent({
                    offboardSource: null,
                    onboardSource: o("WAWebWamEnumOnboardSources")
                      .ONBOARD_SOURCES.IN_APP_SETTING,
                  }));
              });
            } else
              (e
                ? o(
                    "WAWebBackgroundSyncReporter",
                  ).logBackgroundSyncAdoptionEvent({
                    offboardSource: null,
                    onboardSource: o("WAWebWamEnumOnboardSources")
                      .ONBOARD_SOURCES.IN_APP_SETTING,
                  })
                : (o(
                    "WAWebUserPrefsNotifications",
                  ).setOfflineNotificationsBBStatus({ isDismissed: !0 }),
                  o(
                    "WAWebUserPrefsNotifications",
                  ).setOfflineNotificationsEnabledOnce(),
                  o(
                    "WAWebBackgroundSyncReporter",
                  ).logBackgroundSyncAdoptionEvent({
                    offboardSource: o("WAWebWamEnumOffboardSources")
                      .OFFBOARD_SOURCES.IN_APP_SETTING,
                    onboardSource: null,
                  })),
                o("WAWebSubscribePushManagerAction").handleOfflineNotifications(
                  e,
                ));
          },
        ),
        M = N[0],
        w = N[1];
      _(k, function () {
        return { toggleOfflineNotifications: w };
      });
      var A = r("useWAWebToggle")(
          function () {
            return o(
              "WAWebMuteCollection",
            ).MuteCollection.getOutgoingMessageSound();
          },
          function (e) {
            return o(
              "WAWebMuteCollection",
            ).MuteCollection.setOutgoingMessageSound(e);
          },
        ),
        F = A[0],
        O = A[1],
        B = r("useWAWebToggle")(
          function () {
            return o("WAWebMuteCollection").MuteCollection.getGlobalSounds();
          },
          function (e) {
            return o("WAWebMuteCollection").MuteCollection.setGlobalSounds(e);
          },
        ),
        W = B[0],
        q = B[1],
        U = o("useWAWebSettingSync").useSettingSync(
          "isTextPreviewForNotificationEnabled",
          function (e) {
            return o("WAWebMuteCollection").MuteCollection.setGlobalPreviews(e);
          },
        ),
        V = r("useWAWebToggle")(function () {
          return o("WAWebMuteCollection").MuteCollection.getGlobalPreviews();
        }, U),
        H = V[0],
        G = V[1],
        z = o("useWAWebSettingSync").useSettingSync(
          "isCallsNotificationEnabled",
          function (e) {
            return o(
              "WAWebMuteCollection",
            ).MuteCollection.setGlobalCallNotifications(e);
          },
        ),
        j = r("useWAWebToggle")(function () {
          return o(
            "WAWebMuteCollection",
          ).MuteCollection.getGlobalCallNotifications();
        }, z),
        K = j[0],
        Q = j[1],
        X = r("useWAWebToggle")(
          function () {
            return o(
              "WAWebMuteCollection",
            ).MuteCollection.getGlobalCallRingtone();
          },
          function (e) {
            return o(
              "WAWebMuteCollection",
            ).MuteCollection.setGlobalCallRingtone(e);
          },
        ),
        Y = X[0],
        J = X[1],
        Z = r("useWAWebToggle")(
          function () {
            return o("WAWebMuteCollection").MuteCollection.getCollapseMuted();
          },
          function (e) {
            return o("WAWebMuteCollection").MuteCollection.setCollapseMuted(e);
          },
        ),
        ee = Z[0],
        te = Z[1],
        ne = o("useWAWebSettingSync").useSettingSync(
          "isMessagesNotificationEnabled",
          function (e) {
            var t;
            if (
              (o("WAWebMuteCollection").MuteCollection.setGlobalNotifications(
                e,
              ),
              e
                ? (H || G(),
                  T &&
                    o("WAWebCmd").Cmd.muteAllReactions(
                      o("WAWebStateUtils").unproxy(E),
                      !1,
                      !0,
                    ))
                : o("WAWebUserPrefsNotifications").setWebNotificationsBBStatus({
                    isDismissed: !0,
                    lastDismissTime: o("WATimeUtils").unixTime(),
                  }),
              e &&
                !r("WAWebEnvironment").isWindows &&
                ((t = window.Notification) == null ? void 0 : t.permission) !==
                  o("WAWebNotificationConstants").PERMISSION_ALLOWED)
            ) {
              var n,
                a = o("WAWebABProps").getABPropConfigValue(
                  "web_notifications_banner_new_logic_enabled",
                );
              if (
                o(
                  "WAWebPushNotificationsGatingUtils",
                ).canShowNotificationsBanner(
                  (n = window.Notification) == null ? void 0 : n.permission,
                  a,
                )
              ) {
                var i;
                o("WAWebModalManager").ModalManager.open(
                  p.jsx((i = o("WAWebGuidePopup.react")).GuidePopup, {
                    messaging: i.Messaging.NOTIFICATIONS,
                    onConfirm: i.guideConfirm,
                    onCancel: i.notificationGuideLearnMore,
                    type: i.GuidePopupType.GUIDE_ALLOW,
                    enableNewBannerLogic: a,
                    featureSurface: i.FeatureSurface.NOTIFICATION,
                  }),
                );
              }
              window.Notification.requestPermission(function (e) {
                o("WAWebCmd").Cmd.onNotificationPermissionChange();
              });
            }
          },
        ),
        re = r("useWAWebToggle")(function () {
          return o(
            "WAWebMuteCollection",
          ).MuteCollection.getGlobalNotifications();
        }, ne),
        oe = re[0],
        ae = re[1],
        ie = o("useWAWebSettingSync").useSettingSync(
          "defaultNotificationToneId",
          function (e) {
            C == null || C(e);
          },
        ),
        le = o("useWAWebSettingSync").useSettingSync(
          "groupDefaultNotificationToneId",
          function (e) {
            y == null || y(e);
          },
        ),
        se = function () {
          o("WAWebCmd").Cmd.muteAllReactions(
            o("WAWebStateUtils").unproxy(E),
            !T,
          );
        },
        ue = p.jsxs(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
          testid: void 0,
          id: "desktop-notifications",
          disabled: !l || P,
          checked: !P && oe,
          checkboxRightAligned: !0,
          onChange: ae,
          ariaLabel:
            o("WAWebSettingsFBT").messageNotificationsTitle().toString() +
            ". " +
            o("WAWebSettingsFBT").messageNotificationsSubtitle().toString(),
          children: [
            o("WAWebSettingsFBT").messageNotificationsTitle(),
            p.jsx(o("WAWebText.react").WAWebTextMuted, {
              children: o("WAWebSettingsFBT").messageNotificationsSubtitle(),
            }),
          ],
        }),
        ce = o("WAWebABProps").getABPropConfigValue(
          "wa_web_enable_granular_notifications",
        ),
        de = p.jsxs(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
          testid: void 0,
          id: "msg-previews",
          checked: ((!P && oe) || ce) && H,
          onChange: G,
          disabled: (!oe || P || !l) && !ce,
          ariaLabel: o("WAWebSettingsFBT").showPreviewsTitle(),
          checkboxRightAligned: !0,
          children: [
            o("WAWebSettingsFBT").showPreviewsTitle(),
            ce
              ? p.jsx(o("WAWebText.react").WAWebTextMuted, {
                  children: o("WAWebSettingsFBT").showPreviewsSubtitle(),
                })
              : null,
          ],
        }),
        me;
      if (
        o(
          "WAWebPushNotificationsGatingUtils",
        ).canEnableOfflineNotifications() &&
        window.Notification
      ) {
        var pe = s._(/*BTDS*/ "Background sync");
        me = p.jsxs(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
          testid: void 0,
          id: "offline-notifications",
          checked: M,
          checkboxRightAligned: !0,
          onChange: w,
          ariaLabel:
            pe.toString() +
            ". " +
            o("WAWebSettingsFBT").offlineSyncSubtitle().toString(),
          children: [
            pe,
            p.jsx(o("WAWebText.react").WAWebTextMuted, {
              children: o("WAWebSettingsFBT").offlineSyncSubtitle(),
            }),
          ],
        });
      }
      var _e;
      if (!r("gkx")("26258")) {
        var fe = s._(/*BTDS*/ "Group muted chats");
        _e = p.jsx(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
          testid: void 0,
          id: "collapse-muted",
          checked: ee,
          checkboxRightAligned: !0,
          onChange: te,
          ariaLabel: fe,
          children: fe,
        });
      }
      var ge = s._(/*BTDS*/ "Outgoing sounds"),
        he = s._(/*BTDS*/ "Play sound for outgoing messages"),
        ye = p.jsxs(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
          testid: void 0,
          id: "outgoing-message-sound",
          checked: F,
          checkboxRightAligned: !0,
          onChange: O,
          ariaLabel:
            ge.toString() +
            ". " +
            o("WAWebSettingsFBT").outgoingAudioToneSubtitle().toString(),
          children: [
            ce ? he : ge,
            ce
              ? null
              : p.jsx(o("WAWebText.react").WAWebTextMuted, {
                  children: o("WAWebSettingsFBT").outgoingAudioToneSubtitle(),
                }),
          ],
        }),
        Ce = p.jsx(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
          testid: void 0,
          id: "reactions-mute-desktop-notifications",
          checked: !P && oe && !T,
          checkboxRightAligned: !0,
          disabled: !oe || P || !l,
          onChange: se,
          ariaLabel: o("WAWebSettingsFBT").showReactionsTitle(),
          children: o("WAWebSettingsFBT").showReactionsTitle(),
        }),
        be = p.jsxs(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
          testid: void 0,
          id: "show-calls-notification",
          checked: !P && oe && K,
          checkboxRightAligned: !0,
          onChange: Q,
          ariaLabel:
            o("WAWebSettingsFBT").showCallsTitle().toString() +
            ". " +
            o("WAWebSettingsFBT").showCallsSubtitle().toString(),
          children: [
            o("WAWebSettingsFBT").showCallsTitle(),
            p.jsx(o("WAWebText.react").WAWebTextMuted, {
              children: o("WAWebSettingsFBT").showCallsSubtitle(),
            }),
          ],
        }),
        ve = p.jsxs(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
          testid: void 0,
          id: "play-call-ringtone",
          checked: !P && oe && Y,
          checkboxRightAligned: !0,
          onChange: J,
          ariaLabel:
            o("WAWebSettingsFBT").playCallRingtoneTitle().toString() +
            ". " +
            o("WAWebSettingsFBT").playCallRingtoneSubtitle().toString(),
          children: [
            o("WAWebSettingsFBT").playCallRingtoneTitle(),
            p.jsx(o("WAWebText.react").WAWebTextMuted, {
              children: o("WAWebSettingsFBT").playCallRingtoneSubtitle(),
            }),
          ],
        }),
        Se = p.jsxs(o("WAWebSettingsCheckList.react").SettingsCheckListItem, {
          testid: void 0,
          id: "sounds",
          checked: W,
          checkboxRightAligned: !0,
          onChange: q,
          ariaLabel:
            o("WAWebSettingsFBT").soundsTitle().toString() +
            ". " +
            o("WAWebSettingsFBT").soundsSubtitle().toString(),
          children: [
            o("WAWebSettingsFBT").soundsTitle(),
            p.jsx(o("WAWebText.react").WAWebTextMuted, {
              children: o("WAWebSettingsFBT").soundsSubtitle(),
            }),
          ],
        }),
        Re = n("cr:6005") ? p.jsx(n("cr:6005"), {}) : null,
        Le = s._(/*BTDS*/ "On"),
        Ee = s._(/*BTDS*/ "Off"),
        ke = function () {
          var e = o(
            "WAWebMuteCollection",
          ).MuteCollection.getGlobalNotificationsEnabled();
          return e ? Le : Ee;
        },
        Ie = function () {
          var e = o(
            "WAWebMuteCollection",
          ).MuteCollection.getGlobalGroupNotificationsEnabled();
          return e ? Le : Ee;
        },
        Te = function () {
          var e = o(
            "WAWebMuteCollection",
          ).MuteCollection.getGlobalStatusNotificationsEnabled();
          return e ? Le : Ee;
        },
        De = function () {
          var e = o(
            "WAWebMuteCollection",
          ).MuteCollection.getGlobalCallNotifications();
          return e ? Le : Ee;
        },
        xe = s._(/*BTDS*/ "Messages"),
        $e = s._(/*BTDS*/ "Calls"),
        Pe = s._(/*BTDS*/ "Notification tones"),
        Ne = p.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {
          label: s._(/*BTDS*/ "Internal only"),
        }),
        Me =
          n("cr:8361") && b
            ? p.jsx(n("cr:8361"), {
                onClick: b,
                isNotificationsEnabledInSystem: l,
              })
            : null,
        we = n("cr:3176") && S ? p.jsx(n("cr:3176"), { onClick: S }) : null,
        Ae = n("cr:545")
          ? p.jsx(n("cr:545"), { isNotificationEnabled: !P && oe })
          : null,
        Fe = (a = R == null ? void 0 : R()) != null ? a : !1,
        Oe =
          n("cr:7206") && Fe
            ? p.jsx(n("cr:7206"), {
                initialTone: h == null ? void 0 : h(),
                onToneSelect: ie,
                title: s._(/*BTDS*/ "Messages"),
              })
            : null,
        Be =
          n("cr:7206") && Fe
            ? p.jsx(n("cr:7206"), {
                initialTone: g == null ? void 0 : g(),
                onToneSelect: le,
                title: s._(/*BTDS*/ "Group messages"),
              })
            : null,
        We = p.jsxs(r("WAWebDrawerSection.react"), {
          theme: "padding-small-horizontal-no-vertical",
          titleXStyle: L.drawerTitle,
          animation: !1,
          children: [Me, we],
        }),
        qe = o("WAWebVoipGatingUtils").isCallingEnabled()
          ? p.jsxs(r("WAWebDrawerSection.react"), {
              theme: "padding-no-vertical",
              title: $e,
              titleXStyle: L.drawerTitle,
              animation: !1,
              children: [
                be,
                p.jsx("div", {
                  className: "xso031l x1q0q8m5 x120ee7l",
                  children: ve,
                }),
              ],
            })
          : null,
        Ue = r("gkx")("26258")
          ? null
          : p.jsxs(r("WAWebDrawerSection.react"), {
              theme: "padding-no-vertical",
              title: Ne,
              titleXStyle: L.drawerTitle,
              animation: !1,
              children: [Re, _e],
            });
      if (ce) {
        var Ve = s._(/*BTDS*/ "Messages"),
          He = s._(/*BTDS*/ "Groups"),
          Ge = s._(/*BTDS*/ "Status"),
          ze = s._(
            /*BTDS*/ "To get notifications, make sure they\u2019re turned on in your browser and device settings.",
          );
        return p.jsxs("div", {
          children: [
            We,
            p.jsxs(r("WAWebDrawerSection.react"), {
              theme: "padding-small-horizontal-no-vertical",
              titleXStyle: L.drawerTitle,
              animation: !1,
              children: [
                p.jsxs(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                  testid: void 0,
                  divider: !1,
                  useRoundedStyle: !0,
                  xstyle: L.messagesItem,
                  icon: p.jsx(r("WDSIconWdsIcChat.react"), {}),
                  iconXstyle: L.settingsItemIcon,
                  detail: p.jsx(r("WDSIconIcChevronRight.react"), {
                    directional: !0,
                  }),
                  detailXstyle: L.chevronIconPaddingRight,
                  onClick: function () {
                    c == null || c();
                  },
                  children: [
                    Ve,
                    p.jsx(o("WAWebText.react").WAWebTextMuted, {
                      children: ke(),
                    }),
                  ],
                }),
                p.jsxs(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                  testid: void 0,
                  divider: !1,
                  useRoundedStyle: !0,
                  xstyle: L.messagesItem,
                  icon: p.jsx(r("WDSIconIcGroup.react"), {}),
                  iconXstyle: L.settingsItemIcon,
                  detail: p.jsx(r("WDSIconIcChevronRight.react"), {
                    directional: !0,
                  }),
                  detailXstyle: L.chevronIconPaddingRight,
                  onClick: function () {
                    m == null || m();
                  },
                  children: [
                    He,
                    p.jsx(o("WAWebText.react").WAWebTextMuted, {
                      children: Ie(),
                    }),
                  ],
                }),
                p.jsxs(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                  testid: void 0,
                  divider: !1,
                  useRoundedStyle: !0,
                  xstyle: L.messagesItem,
                  icon: p.jsx(r("WDSIconWdsIcStatus.react"), {}),
                  iconXstyle: L.settingsItemIcon,
                  detail: p.jsx(r("WDSIconIcChevronRight.react"), {
                    directional: !0,
                  }),
                  detailXstyle: L.chevronIconPaddingRight,
                  onClick: function () {
                    f == null || f();
                  },
                  children: [
                    Ge,
                    p.jsx(o("WAWebText.react").WAWebTextMuted, {
                      children: Te(),
                    }),
                  ],
                }),
                o("WAWebVoipGatingUtils").isCallingEnabled()
                  ? p.jsxs(o("WAWebDrawerButton.react").DrawerButtonSimple, {
                      testid: void 0,
                      divider: !1,
                      useRoundedStyle: !0,
                      xstyle: L.messagesItem,
                      icon: p.jsx(r("WDSIconIcCall.react"), {}),
                      iconXstyle: L.settingsItemIcon,
                      detail: p.jsx(r("WDSIconIcChevronRight.react"), {
                        directional: !0,
                      }),
                      detailXstyle: L.chevronIconPaddingRight,
                      onClick: function () {
                        u == null || u();
                      },
                      children: [
                        $e,
                        p.jsx(o("WAWebText.react").WAWebTextMuted, {
                          children: De(),
                        }),
                      ],
                    })
                  : null,
              ],
            }),
            p.jsxs(r("WAWebDrawerSection.react"), {
              theme: "padding-no-vertical",
              animation: !1,
              children: [
                p.jsx("div", { className: "x178xt8z x13fuv20 xx42vgk" }),
                de,
                ye,
              ],
            }),
            p.jsxs(r("WAWebDrawerSection.react"), {
              theme: "padding-no-vertical",
              animation: !1,
              children: [
                p.jsx("div", { className: "x178xt8z x13fuv20 xx42vgk" }),
                p.jsx("div", {
                  className: "xso031l x1q0q8m5 x120ee7l",
                  children: me,
                }),
              ],
            }),
            Ue,
            r("WAWebEnvironment").isWindows
              ? null
              : p.jsxs(r("WAWebDrawerSection.react"), {
                  theme: "padding-no-vertical",
                  animation: !1,
                  children: [
                    Ue != null
                      ? p.jsx("div", { className: "x178xt8z x13fuv20 xx42vgk" })
                      : null,
                    p.jsx(r("WDSText.react"), {
                      type: "Body3",
                      colorName: "contentDeemphasized",
                      xstyle: L.footerText,
                      children: ze,
                    }),
                  ],
                }),
          ],
        });
      }
      return p.jsxs("div", {
        children: [
          We,
          p.jsxs(r("WAWebDrawerSection.react"), {
            theme: "padding-no-vertical",
            title: xe,
            titleXStyle: L.drawerTitle,
            animation: !1,
            children: [
              ue,
              de,
              Ce,
              me,
              p.jsx("div", {
                className: "xso031l x1q0q8m5 x120ee7l",
                children: Ae,
              }),
            ],
          }),
          qe,
          p.jsxs(r("WAWebDrawerSection.react"), {
            theme: "padding-no-vertical",
            animation: !1,
            title: Pe,
            titleXStyle: L.drawerTitle,
            children: [
              Se,
              ye,
              Oe &&
                p.jsx("div", { className: "x134lwj9 x1i2zvha", children: Oe }),
              Be &&
                p.jsx("div", { className: "x134lwj9 x1i2zvha", children: Be }),
            ],
          }),
          Ue,
        ],
      });
    }
    ((E.displayName = E.name + " [from " + i.id + "]"), (l.default = E));
  },
  226,
);
