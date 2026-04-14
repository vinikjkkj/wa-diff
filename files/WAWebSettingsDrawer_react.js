__d(
  "WAWebSettingsDrawer.react",
  [
    "fbt",
    "LexicalComposer",
    "WAWebChatStatus",
    "WAWebChatTextStatusWrapper",
    "WAWebConnModel",
    "WAWebDetailImage.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebEmojiText.react",
    "WAWebEmptyState.react",
    "WAWebFlex.react",
    "WAWebGroupInfoSeparator.react",
    "WAWebHistorySyncSettingItem.react",
    "WAWebLexicalWAWebMenu.react",
    "WAWebMacBetaUpsellToastbar.react",
    "WAWebMemoizeWithClearUtils",
    "WAWebMenuItems.react",
    "WAWebNoop",
    "WAWebNotificationBanners.react",
    "WAWebSettingSearchModel",
    "WAWebSettings.MenuItem",
    "WAWebSettingsClickWamEvent",
    "WAWebSettingsLoggerUtils",
    "WAWebSettingsSearchTapWamEvent",
    "WAWebTextStatusGatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumSettingsClickEntryPoint",
    "WAWebWamEnumSettingsItemType",
    "WAWebWamEnumSettingsPageType",
    "WAWebWamEnumWebcNativeUpsellCtaSourceType",
    "WDSSearchBar.react",
    "react",
    "useWAWebExternalBetaOptIn",
    "useWAWebModelValues",
    "useWAWebNavigatableList",
    "useWAWebSearchModel",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useMemo,
      _ = d.useRef,
      f = d.useState,
      g = { surface: "settings-drawer" };
    function h(e, t) {
      new (o("WAWebSettingsClickWamEvent").SettingsClickWamEvent)({
        settingsItem: e,
        settingsClickEntryPoint: t,
      }).commit();
    }
    function y(e, t) {
      new (o("WAWebSettingsSearchTapWamEvent").SettingsSearchTapWamEvent)({
        tapItemName: e,
        topLevelParentSetting: t,
      }).commit();
    }
    function C() {
      o("WAWebSettingsLoggerUtils").logSettingsSearchInitiate({
        settingsPageType: o("WAWebWamEnumSettingsPageType").SETTINGS_PAGE_TYPE
          .SETTINGS,
      });
    }
    function b(e) {
      var t = e.listSelection,
        n = e.onClick,
        a = e.onProfile,
        i = e.profileId,
        l = o("useWAWebExternalBetaOptIn").useMacBetaUpsellOnWeb(),
        s = o("useWAWebModelValues").useModelValues(o("WAWebConnModel").Conn, [
          "pushname",
        ]),
        u = o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()
          ? c.jsx(o("WAWebChatTextStatusWrapper").TextStatus, { contactId: i })
          : c.jsx(o("WAWebChatStatus").StatusWrapper, { id: i }),
        d = o("WAWebUserPrefsMeUser").getMeUser(),
        p = c.jsx(o("WAWebDetailImage.react").DetailImage, {
          id: d,
          size: 64,
          quality: o("WAWebDetailImage.react").DetailImageQuality.High,
        }),
        _ = c.jsx(o("WAWebEmojiText.react").EmojiText, {
          text: s.pushname,
          ellipsify: !0,
          titlify: !0,
        }),
        f = m(
          function () {
            var e = t.list.find(function (e) {
              return e.id === "notifications";
            });
            e && n(e);
          },
          [n, t.list],
        );
      return c.jsxs(o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu, {
        allowTabNavigation: !0,
        colorScheme: "lightest",
        children: [
          c.jsx(
            o("WAWebNotificationBanners.react").NotificationAwarenessBanner,
            { onNavigateToNotifications: f },
          ),
          c.jsx("span", {
            className: "x1nbhmlj",
            children: c.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
              optionId: "profile",
              onSelect: a,
              detailLeft: p,
              primary: _,
              secondary: u,
              isRefresh: !0,
            }),
          }),
          c.jsx(r("WAWebGroupInfoSeparator.react"), { animation: !1 }),
          c.jsx(r("WAWebHistorySyncSettingItem.react"), {}),
          t.list
            .filter(function (e) {
              return e.parentId == null;
            })
            .map(function (e, t) {
              return e.id === "divider"
                ? c.jsx(
                    r("WAWebGroupInfoSeparator.react"),
                    { animation: !1 },
                    t,
                  )
                : c.jsx(
                    o("WAWebSettings.MenuItem").SettingsMenuItem,
                    {
                      setting: e,
                      onSelect: function () {
                        return n(e);
                      },
                      showIcon: !0,
                      border: "bottom-partial",
                      isRefresh: !0,
                    },
                    e.id,
                  );
            }),
          c.jsx("div", { className: "x9orja2 xyri2b xbaz6xv x1c1uobl" }),
          l &&
            c.jsx(r("WAWebMacBetaUpsellToastbar.react"), {
              sourceType: o("WAWebWamEnumWebcNativeUpsellCtaSourceType")
                .WEBC_NATIVE_UPSELL_CTA_SOURCE_TYPE.SETTINGS,
            }),
        ],
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = f(""),
        l = i[0],
        u = i[1],
        d = o("useWAWebSearchModel").useSearchModel(function () {
          return new (o("WAWebSettingSearchModel").SettingSearch)();
        }),
        m = d.query,
        v = d.results,
        R = d.searchInstance,
        L = _(),
        E = p(
          function () {
            return l === ""
              ? R.data.filter(function (e) {
                  return e.parentId == null;
                })
              : v != null
                ? v.results.map(function (e) {
                    return e.data;
                  })
                : [];
          },
          [l, v, R.data],
        ),
        k = o("useWAWebNavigatableList").useNavigatableList(E),
        I = k.activeItem,
        T = k.listSelection,
        D = p(function () {
          return o("WAWebMemoizeWithClearUtils").memoizeWithClear(C);
        }, []),
        x = D[0],
        $ = D[1],
        P = function () {
          var e;
          ((e = L.current) == null ? void 0 : e.scrollTop) != null &&
            (L.current.scrollTop = 0);
        },
        N = function (t) {
          (x(), m(t), u(t));
        },
        M = function (t) {
          if (t != null) {
            var e = l.length > 0;
            if (
              (t.wamName != null &&
                t.parentId == null &&
                h(
                  t.wamName,
                  e
                    ? o("WAWebWamEnumSettingsClickEntryPoint")
                        .SETTINGS_CLICK_ENTRY_POINT.SETTINGS_SEARCH
                    : o("WAWebWamEnumSettingsClickEntryPoint")
                        .SETTINGS_CLICK_ENTRY_POINT.SETTINGS_SCREEN,
                ),
              e)
            ) {
              var n = t.id,
                r;
              if (t.parent != null) {
                var i;
                r =
                  (i = t.parent.wamName) != null
                    ? i
                    : o("WAWebWamEnumSettingsItemType").SETTINGS_ITEM_TYPE
                        .UNKNOWN;
              }
              y(n, r);
            }
            a.onSettingClick != null && a.onSettingClick(t.step);
          }
        },
        w = function () {
          M(I);
        },
        A = s._(/*BTDS*/ "Search settings"),
        F = c.jsx(o("WAWebFlex.react").FlexColumn, {
          align: "stretch",
          children:
            l === ""
              ? c.jsx(b, {
                  profileId: a.profileId,
                  onProfile: a.onProfile,
                  listSelection: T,
                  onClick: M,
                })
              : c.jsx(S, { results: E, onSelect: M }),
        });
      return c.jsxs(r("WAWebDrawer.react"), {
        ref: n,
        theme: "settings",
        testid: void 0,
        tsNavigationData: g,
        children: [
          c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "Settings"),
            onBack: a.onClose,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB,
          }),
          c.jsx(r("WAWebDrawerBody.react"), {
            ref: L,
            isRefresh: !0,
            backgroundColor: "default",
            children: c.jsxs(o("LexicalComposer").LexicalComposer, {
              initialConfig: {
                namespace: "SettingsSearch",
                onError: r("WAWebNoop"),
              },
              children: [
                c.jsx("div", {
                  className: "x1phvje8 xcldk2z x1gxa6cn xa0aww2",
                  children: c.jsx(r("WDSSearchBar.react"), {
                    hintText: A,
                    onValueChange: N,
                    onEnter: w,
                    onBlur: $,
                    onFocus: P,
                    value: l,
                  }),
                }),
                F,
              ],
            }),
          }),
        ],
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t = e.onSelect,
        n = e.results;
      return n.length
        ? c.jsx(o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu, {
            allowTabNavigation: !0,
            colorScheme: "lightest",
            children: c.jsx(o("WAWebSettings.MenuItem").SettingsMenu, {
              settings: n,
              onSelect: t,
            }),
          })
        : c.jsx(o("WAWebEmptyState.react").SearchWithoutKeyword, {});
    }
    ((S.displayName = S.name + " [from " + i.id + "]"), (l.default = v));
  },
  226,
);
