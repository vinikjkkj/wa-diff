__d(
  "WAWebMeTabFlow.react",
  [
    "fbt",
    "LexicalComposer",
    "WAWebAboutPrompts",
    "WAWebAboutWamLogger",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebBizGatingUtils",
    "WAWebBizRefreshedProfileDrawerLoadable",
    "WAWebClickable.react",
    "WAWebConfirmLogoutModal.react",
    "WAWebConnModel",
    "WAWebContactCollection",
    "WAWebDetailImage.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerManager",
    "WAWebDrawerSection.react",
    "WAWebEmojiText.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebHistorySyncSettingItem.react",
    "WAWebKeyboardShortcutsPopup.react",
    "WAWebLexicalWAWebMenu.react",
    "WAWebMacBetaUpsellToastbar.react",
    "WAWebMeTabSettingsSearchResults.react",
    "WAWebMeTabSpeechBubble.react",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebNotificationBanners.react",
    "WAWebProfilePicThumbCollection",
    "WAWebSettingSearchModel",
    "WAWebSettingsConst",
    "WAWebSettingsFlow.react",
    "WAWebSettingsLoggerUtils",
    "WAWebTextStatusCollection",
    "WAWebTextStatusEditModalLoadable",
    "WAWebTextStatusGatingUtils",
    "WAWebThemePopup.react",
    "WAWebUim",
    "WAWebUimUie.react",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumSettingsClickEntryPoint",
    "WAWebWamEnumSettingsItemType",
    "WAWebWamEnumSettingsPageType",
    "WAWebWamEnumWebcNativeUpsellCtaSourceType",
    "WAWebWamUtils",
    "WDSSearchBar.react",
    "cr:1923",
    "react",
    "useWAWebExternalBetaOptIn",
    "useWAWebFlow",
    "useWAWebFocusOnMount",
    "useWAWebModelValues",
    "useWAWebSearchModel",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useMemo,
      _ = c.useRef,
      f = c.useState,
      g = { surface: "settings-drawer" },
      h = {
        profileSection: {
          alignItems: "x6s0dn4",
          marginBottom: "x9r8f99",
          $$css: !0,
        },
        settingsSection: { paddingBottom: "xscbp6u", $$css: !0 },
        bottomSpace: {
          paddingTop: "x14a8spa",
          paddingBottom: "x1c76a8b",
          $$css: !0,
        },
        noInlinePadding: {
          paddingInlineStart: "x1c1uobl",
          paddingInlineEnd: "xyri2b",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      },
      y = "ME_TAB_HOME";
    function C(e) {
      var t = e.initialSearchText,
        a = e.onEnd,
        i = o("useWAWebFlow").useFlow(y, {
          transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
          onEnd: a,
        }),
        l = i[0],
        c = i[1],
        b = r("useWAWebFocusOnMount")(),
        v = f(null),
        S = v[0],
        R = v[1],
        L = f(t != null ? t : ""),
        E = L[0],
        k = L[1],
        I = _(null),
        T = o("useWAWebSearchModel").useSearchModel(function () {
          return new (o("WAWebSettingSearchModel").SettingSearch)();
        }),
        D = T.query,
        x = T.results,
        $ = T.searchInstance;
      (m(
        function () {
          t != null && t !== "" && D(t);
        },
        [t, D],
      ),
        m(function () {
          var e;
          (e = I.current) == null || e.focus();
        }, []));
      var P = p(
          function () {
            return $.data.filter(function (e) {
              return e.parentId == null;
            });
          },
          [$.data],
        ),
        N = p(
          function () {
            return E === ""
              ? []
              : x != null
                ? x.results.map(function (e) {
                    return e.data;
                  })
                : [];
          },
          [E, x],
        ),
        M = o("useWAWebExternalBetaOptIn").useMacBetaUpsellOnWeb(),
        w = o("useWAWebModelValues").useModelValues(o("WAWebConnModel").Conn, [
          "pushname",
        ]),
        A = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        F = o("WAWebUserPrefsMeUser").getMeUser(),
        O = o("WAWebContactCollection").ContactCollection.assertGet(A),
        B = f(function () {
          return o("WAWebAboutPrompts").getRandomAboutPromptKey();
        }),
        W = B[0],
        q = E !== "",
        U = d(
          function () {
            var e;
            (k(""), D(""), (e = I.current) == null || e.focus());
          },
          [D],
        ),
        V = d(function () {
          var e;
          (e = I.current) == null || e.focus();
        }, []),
        H = q
          ? u.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "MeTabSearchEscape",
              escapable: !0,
              requestDismiss: U,
              requestFocus: V,
              uimState: o("WAWebUim").UIMState.ACTIVE,
            })
          : null,
        G = s._(/*BTDS*/ "View photo"),
        z = function (t) {
          (D(t), k(t));
        },
        j = function () {
          o("WAWebSettingsLoggerUtils").logSettingsClick({
            settingsItem: o("WAWebWamEnumSettingsItemType").SETTINGS_ITEM_TYPE
              .PROFILE,
            settingsClickEntryPoint: o("WAWebWamEnumSettingsClickEntryPoint")
              .SETTINGS_CLICK_ENTRY_POINT.METAB_SCREEN,
            settingsPageType: o("WAWebWamEnumSettingsPageType")
              .SETTINGS_PAGE_TYPE.ME_TAB,
          });
          var e = o("WAWebBizGatingUtils").businessProfileRefreshEnabled();
          if (e)
            o("WAWebDrawerManager").DrawerManager.openDrawerMid(
              u.jsx(
                o("WAWebBizRefreshedProfileDrawerLoadable")
                  .WAWebBizRefreshedProfileDrawerLoadable,
                {
                  entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.SETTINGS,
                  onClose: function () {
                    return o(
                      "WAWebDrawerManager",
                    ).DrawerManager.closeDrawerMid();
                  },
                },
              ),
            );
          else {
            var t = o(
                "WAWebTextStatusCollection",
              ).TextStatusCollection.assertGet(F),
              r = o(
                "WAWebProfilePicThumbCollection",
              ).ProfilePicThumbCollection.assertGet(F),
              a = o("WAWebContactCollection").ContactCollection.assertGet(F);
            o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
              u.jsx(n("cr:1923"), {
                status: t,
                profilePicThumb: r,
                contact: a,
                conn: o("WAWebConnModel").Conn,
                entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.SETTINGS,
                onClose: function () {
                  o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                    o(
                      "WAWebAdaptiveLayoutGatingUtils",
                    ).shouldUseDrawerDescriptor()
                      ? { descriptorType: "profile" }
                      : u.jsx(C, {
                          onEnd: o("WAWebDrawerManager").closeDrawerLeft,
                        }),
                  );
                },
                isInitialStep: !1,
                aboutPromptKey: W,
              }),
            );
          }
        },
        K = function (t) {
          o("WAWebTextStatusGatingUtils").sendTextStatusEnabled()
            ? o("WAWebModalManager").ModalManager.open(
                u.jsx(
                  o("WAWebTextStatusEditModalLoadable")
                    .TextStatusEditModalLoadable,
                  {
                    entrypoint: o("WAWebAboutWamLogger").ABOUT_ENTRYPOINT_TYPE
                      .ME_TAB,
                    promptKey: t,
                  },
                ),
              )
            : j();
        },
        Q = function (t) {
          switch (t) {
            case o("WAWebSettingsConst").SettingsSteps.Theme:
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebThemePopup.react"), {}),
              );
              return;
            case o("WAWebSettingsConst").SettingsSteps.KeyboardShortcuts:
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebKeyboardShortcutsPopup.react"), {}),
              );
              return;
            case o("WAWebSettingsConst").SettingsSteps.Logout:
              (o("WAWebWamUtils").forceFlushAllWamAndQplBuffers(),
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(r("WAWebConfirmLogoutModal.react"), {
                    checkUnsent: !0,
                  }),
                ));
              return;
            case o("WAWebSettingsConst").SettingsSteps.Profile:
              j();
              return;
            default:
              break;
          }
          (R(t), c.push(t));
        },
        X = s._(/*BTDS*/ "Search"),
        Y = u.jsxs(o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu, {
          allowTabNavigation: !0,
          colorScheme: "lightest",
          children: [
            u.jsx(
              o("WAWebNotificationBanners.react").WAWebNotificationBanners,
              { onSettingClick: Q },
            ),
            u.jsx(r("WAWebDrawerSection.react"), {
              theme: "refresh-new",
              animation: !1,
              xstyle: h.noInlinePadding,
              children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "center",
                xstyle: h.profileSection,
                children: [
                  u.jsx(r("WAWebMeTabSpeechBubble.react"), {
                    contactId: A,
                    onClick: K,
                    promptKey: W,
                  }),
                  u.jsx("div", {
                    children: u.jsx(o("WAWebClickable.react").Clickable, {
                      onClick: j,
                      ariaLabel: G,
                      focusTheme: o("WAWebClickable.react").FocusTheme.Image,
                      "data-tab": 0,
                      children: u.jsx(o("WAWebDetailImage.react").DetailImage, {
                        id: O.id,
                        size: o("WAWebDetailImage.react").DetailImageSize
                          .Refresh,
                        loader: !0,
                        quality: o("WAWebDetailImage.react").DetailImageQuality
                          .High,
                      }),
                    }),
                  }),
                ],
              }),
            }),
            u.jsxs(r("WAWebDrawerSection.react"), {
              theme: "no-padding",
              animation: !1,
              xstyle: h.settingsSection,
              children: [
                u.jsx(r("WAWebHistorySyncSettingItem.react"), {}),
                u.jsx(r("WAWebMeTabSettingsSearchResults.react"), {
                  searchText: "",
                  topLevelSettings: P,
                  filteredResults: [],
                  onSettingClick: Q,
                }),
                M &&
                  u.jsx(o("WAWebFlex.react").FlexColumn, {
                    xstyle: h.bottomSpace,
                  }),
              ],
            }),
          ],
        }),
        J = u.jsx(o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu, {
          allowTabNavigation: !0,
          colorScheme: "lightest",
          children: u.jsx(r("WAWebMeTabSettingsSearchResults.react"), {
            searchText: E,
            topLevelSettings: P,
            filteredResults: N,
            onSettingClick: Q,
          }),
        }),
        Z = q ? J : Y,
        ee = u.jsxs(o("LexicalComposer").LexicalComposer, {
          initialConfig: { namespace: "MeTabSearch", onError: r("WAWebNoop") },
          children: [
            u.jsx("div", {
              className: "x1phvje8 xcldk2z x1tiyuxx x1nbhmlj",
              children: u.jsx(r("WDSSearchBar.react"), {
                ref: I,
                hintText: X,
                onValueChange: z,
                value: E,
                autoFocus: !0,
              }),
            }),
            Z,
          ],
        }),
        te = r("WAWebFbtCommon")("You"),
        ne;
      return (
        c.step != null && c.step !== y && S != null
          ? (ne = u.jsx(o("WAWebSettingsFlow.react").SettingsFlow, {
              initialStep: S,
              isInitialStep: !1,
              onEnd: function () {
                return c.pop();
              },
            }))
          : (ne = u.jsxs(r("WAWebDrawer.react"), {
              theme: "white-bg",
              testid: void 0,
              tsNavigationData: g,
              children: [
                u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                  type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
                  title: u.jsx(o("WAWebEmojiText.react").EmojiText, {
                    text: w.pushname,
                    ellipsify: !0,
                    titlify: !0,
                  }),
                  titleStr: te,
                  onBack: E === "" ? a : void 0,
                }),
                u.jsxs(r("WAWebDrawerBody.react"), { children: [H, ee] }),
                !q &&
                  M &&
                  u.jsx(r("WAWebMacBetaUpsellToastbar.react"), {
                    sourceType: o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
                      .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.SETTINGS,
                  }),
              ],
            })),
        u.jsx(l, { ref: b, flow: c, children: ne })
      );
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.MeTabFlow = C));
  },
  226,
);
