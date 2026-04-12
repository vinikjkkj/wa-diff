__d(
  "WAWebNewsletterConversationPanelHeader.react",
  [
    "fbt",
    "Promise",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebChatGetters",
    "WAWebCommonNewsletterEnums",
    "WAWebCommonNewsletterStrings",
    "WAWebDrawerManager",
    "WAWebDrawerManagerContext",
    "WAWebFollowNewsletter",
    "WAWebInfoFlowLoadable",
    "WAWebInfoFlowStep",
    "WAWebKeyboardTabUtils",
    "WAWebModalManager",
    "WAWebNewsletterAddToStatusButtonLoadable",
    "WAWebNewsletterDirectorySearchAction",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMembershipUtil",
    "WAWebNewsletterModelUtils",
    "WAWebNewsletterSubscribeButton.react",
    "WAWebNewsletterUpdateUserSettingsAction",
    "WAWebStateUtils",
    "WAWebTabOrder",
    "WAWebUnfollowNewsletterConfirmationModal.react",
    "WAWebWamEnumChannelEventSurface",
    "WAWebWamEnumChannelLinkShareEntryPoint",
    "WAWebWamEnumTsSurface",
    "WAWebWidFactory",
    "WDSButton.react",
    "WDSIconIcLink.react",
    "WDSIconIcNotifications.react",
    "WDSIconIcNotificationsOff.react",
    "WDSMenuBarItem.react",
    "WDSSpinner.react",
    "WDSTooltip.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebChatValues",
    "useWAWebModelValues",
    "useWAWebOnUnmount",
    "useWAWebPrevious",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["height"],
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useState;
    function f(e) {
      var t = e.chat,
        a = o("useWAWebChatValues").useChatValues(t.id, [
          o("WAWebChatGetters").getIsNewsletter,
          o("WAWebChatGetters").getMuteExpiration,
        ]),
        i = a[0],
        l = a[1],
        c = o("useWAWebModelValues").useOptionalModelValues(
          t.newsletterMetadata,
          [
            "membershipType",
            "suspended",
            "terminated",
            "isSuspendedOrTerminated",
            "canBeMuted",
          ],
        );
      r("useWAWebOnUnmount")(function () {
        c == null || c.resetRecentlyFollowedFrom();
      });
      var m = _(!1),
        f = m[0],
        g = m[1],
        h = _(!1),
        C = h[0],
        b = h[1],
        v = r("useWAWebPrevious")(l);
      v !== l && C && b(!1);
      var S = p(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (g(!0),
              yield (u || (u = n("Promise"))).allSettled([
                o("WAWebFollowNewsletter").followNewsletter(
                  o("WAWebStateUtils").unproxy(t),
                  {
                    eventSurface: o("WAWebWamEnumChannelEventSurface")
                      .CHANNEL_EVENT_SURFACE.CHANNEL_THREAD,
                    discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                      .CHANNEL_THREAD,
                  },
                ),
                o(
                  "WAWebNewsletterGatingUtils",
                ).isSimilarNewsletterInThreadEnabled() &&
                  o(
                    "WAWebNewsletterDirectorySearchAction",
                  ).getSimilarNewslettersAction(
                    o("WAWebStateUtils").unproxy(t),
                  ),
              ]),
              g(!1));
          }),
          [t],
        ),
        R = p(
          function () {
            o("WAWebModalManager").ModalManager.open(
              d.jsx(
                o("WAWebUnfollowNewsletterConfirmationModal.react")
                  .UnfollowNewsletterConfirmationModal,
                {
                  chat: o("WAWebStateUtils").unproxy(t),
                  loggingOptions: {
                    eventSurface: o("WAWebWamEnumChannelEventSurface")
                      .CHANNEL_EVENT_SURFACE.CHANNEL_THREAD,
                  },
                },
              ),
            );
          },
          [t],
        ),
        L = o("WAWebDrawerManagerContext").useDrawerManagerContext("mid"),
        E = p(
          function () {
            var e,
              n = (e = L.existsDrawer()) != null ? e : !1;
            n ||
              o("WAWebDrawerManager").DrawerManager.openDrawerRight(
                o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
                  ? {
                      descriptorType: "info_flow",
                      chat: t,
                      initialStep:
                        o("WAWebInfoFlowStep").InfoFlowStep.NewsletterLink,
                      newsletterLinkShareScreenEntryPoint: o(
                        "WAWebWamEnumChannelLinkShareEntryPoint",
                      ).CHANNEL_LINK_SHARE_ENTRY_POINT.CHANNEL_THREAD,
                    }
                  : d.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
                      chat: t,
                      initialStep:
                        o("WAWebInfoFlowStep").InfoFlowStep.NewsletterLink,
                      newsletterLinkShareScreenEntryPoint: o(
                        "WAWebWamEnumChannelLinkShareEntryPoint",
                      ).CHANNEL_LINK_SHARE_ENTRY_POINT.CHANNEL_THREAD,
                    }),
                {
                  transition: "slide-left",
                  focusType: o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                  noFocus: !0,
                },
              );
          },
          [t, L],
        ),
        k = p(
          function () {
            (b(!0),
              o("WAWebNewsletterUpdateUserSettingsAction")
                .updateNewsletterUserSettingsAction(
                  t.id,
                  o("WAWebNewsletterModelUtils").isMuted(l)
                    ? o("WAWebNewsletterModelUtils").UNMUTED_STATE
                    : o("WAWebNewsletterModelUtils").MUTED_STATE,
                  [
                    o("WAWebNewsletterUpdateUserSettingsAction")
                      .NewsletterUserSetting.AdminActivity,
                  ],
                  {
                    eventSurface: o("WAWebWamEnumChannelEventSurface")
                      .CHANNEL_EVENT_SURFACE.CHANNEL_THREAD,
                  },
                )
                .catch(function () {
                  return b(!1);
                }));
          },
          [t.id, l],
        );
      if (!i || c == null) return null;
      if (c.isSuspendedOrTerminated)
        return c.membershipType ===
          o("WAWebCommonNewsletterEnums").NewsletterMembershipType.Subscriber
          ? d.jsx(r("WDSButton.react"), {
              label: s._(/*BTDS*/ "Unfollow"),
              onPress: R,
              testid: void 0,
            })
          : null;
      var I = null;
      c.canBeMuted &&
        !o(
          "WAWebNewsletterExtendedGatingUtils",
        ).isNewsletterAdminNotificationsEnabled(t.newsletterMetadata) &&
        (I = d.jsx(y, {
          isMuted: o("WAWebNewsletterModelUtils").isMuted(l),
          isTogglingMute: C,
          onClick: k,
        }));
      var T = o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(c)
          ? d.jsx(r("WDSMenuBarItem.react"), {
              tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
              testid: void 0,
              icon: r("WDSIconIcLink.react"),
              onClick: E,
              title: o("WAWebCommonNewsletterStrings").getShareText(),
            })
          : null,
        D = o("WAWebNewsletterMembershipUtil").iAmGuest(c)
          ? d.jsx(r("WAWebNewsletterSubscribeButton.react"), {
              onClick: S,
              isLoading: f,
            })
          : null,
        x =
          o("WAWebNewsletterMembershipUtil").iAmAdminOrOwner(c) &&
          o("WAWebNewsletterGatingUtils").isNewsletterStatusCreationEnabled()
            ? d.jsx(
                o("WAWebNewsletterAddToStatusButtonLoadable")
                  .WAWebNewsletterAddToStatusButtonLoadable,
                {
                  newsletterWid: o("WAWebWidFactory").asNewsletterWidOrThrow(
                    t.id,
                  ),
                },
              )
            : null;
      return d.jsxs(d.Fragment, { children: [x, T, I, D] });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    var g = { deemphasized: { color: "xhslqc4", $$css: !0 } };
    function h(t) {
      var n = t.height,
        o = n === void 0 ? 20 : n,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return d.jsx(r("WDSSpinner.react"), { size: o, xstyle: g.deemphasized });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.isMuted,
        n = e.isTogglingMute,
        a = e.onClick,
        i = !n,
        l;
      n
        ? (l = h)
        : t
          ? (l = r("WDSIconIcNotificationsOff.react"))
          : (l = r("WDSIconIcNotifications.react"));
      var u = t ? s._(/*BTDS*/ "Unmute") : s._(/*BTDS*/ "Mute"),
        c = t ? "unmute-button" : "mute-button",
        m = d.jsx(r("WDSButton.react"), {
          variant: "borderless",
          size: "medium",
          type: "default",
          directional: !0,
          Icon: l,
          "aria-label": u,
          onPress: n ? void 0 : a,
          testid: void 0,
          tabOrder: o("WAWebTabOrder").TAB_ORDER.CHAT_HEADER_BUTTON,
        });
      return i
        ? d.jsx(r("WDSTooltip.react"), { label: u, children: m })
        : d.jsx("div", { title: u, children: m });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
