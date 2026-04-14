__d(
  "WAWebChatsSettingsDrawer.react",
  [
    "fbt",
    "WAWebAnimatedEmojiGatingUtils",
    "WAWebCappingUsageModalLoadable.react",
    "WAWebChatPreferenceCollection",
    "WAWebChatThemeGatingUtils",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebIndividualNewChatMessageCappingLimitGatingUtils",
    "WAWebMenu.react",
    "WAWebMenuItems.react",
    "WAWebModalManager",
    "WAWebSettingsFBT",
    "WAWebSettingsHierarchy",
    "WAWebThemeContext",
    "WDSIconIcChevronRight.react",
    "react",
    "useWAWebModelValues",
    "useWAWebSettingSync",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useContext,
      d = {
        sectionTitle: {
          paddingTop: "x1cnzs8",
          paddingBottom: "xx6bls6",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      };
    function m(e) {
      var t = e.systemThemeMode,
        n = e.theme;
      return t
        ? o("WAWebSettingsFBT").themeSystemLabel()
        : n === "dark"
          ? s._(/*BTDS*/ "Dark mode")
          : s._(/*BTDS*/ "Light mode");
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.onClickChatTheme,
        n = e.onClickMediaAutoDownload,
        a = e.onClickMediaUploadQuality,
        i = e.onClickTheme,
        l = e.onClickWallpaper,
        p = e.onClose,
        _ = e.ref,
        f = c(o("WAWebThemeContext").ThemeContext),
        g = o("useWAWebModelValues").useModelValues(
          r("WAWebChatPreferenceCollection").getDefault(),
          [
            "spellcheck",
            "transformTextEmoji",
            "enterIsSend",
            "autoplayAnimatedImages",
          ],
        ),
        h = o("useWAWebSettingSync").useSettingSync(
          "replaceTextWithEmoji",
          function (e) {
            g.set("transformTextEmoji", e);
          },
        ),
        y = o("useWAWebSettingSync").useSettingSync(
          "isSpellCheckEnabled",
          function (e) {
            g.set("spellcheck", e);
          },
        ),
        C = function (t) {
          y(t);
        },
        b = function (t) {
          h(t);
        },
        v = o("useWAWebSettingSync").useSettingSync(
          "isEnterToSendEnabled",
          function (e) {
            g.set("enterIsSend", e);
          },
        ),
        S = function (t) {
          v(t);
        },
        R = function (t) {
          g.set("autoplayAnimatedImages", t);
        },
        L = s._(/*BTDS*/ "Spell check"),
        E = s._(/*BTDS*/ "Check spelling while typing"),
        k = s._(/*BTDS*/ "Replace text with emoji"),
        I = s._(/*BTDS*/ "Emoji will replace specific text as you type"),
        T = s._(/*BTDS*/ "Enter is send"),
        D = s._(/*BTDS*/ "Enter key will send your message"),
        x = s._(/*BTDS*/ "Autoplay animated images"),
        $ = s._(/*BTDS*/ "Make emojis and GIFs move automatically"),
        P = function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(
              o("WAWebCappingUsageModalLoadable.react")
                .CappingUsageModalLoadable,
              {},
            ),
          );
        },
        N = s._(/*BTDS*/ "Wallpaper");
      return u.jsxs(r("WAWebDrawer.react"), {
        ref: _,
        theme: "striped",
        testid: void 0,
        tsNavigationData: { surface: "unknown", viewName: "chats-settings" },
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            testid: void 0,
            title: o("WAWebSettingsFBT").chatsTitle(),
            onBack: p,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            focusBackOrCancel: !0,
          }),
          u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsxs(o("WAWebMenu.react").WAWebMenu, {
              size: "medium",
              border: "bottom-partial",
              allowTabNavigation: !0,
              children: [
                u.jsxs(r("WAWebDrawerSection.react"), {
                  theme: "no-padding",
                  title: s._(/*BTDS*/ "Display"),
                  titleXStyle: d.sectionTitle,
                  animation: !1,
                  children: [
                    u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                      optionId: "theme",
                      testid: void 0,
                      onSelect: i,
                      primary: o(
                        "WAWebSettingsHierarchy",
                      ).ThemeSettingsItem.title(),
                      secondary: m(f),
                      detailRight: u.jsx(r("WDSIconIcChevronRight.react"), {
                        colorName: "contentDeemphasized",
                        directional: !0,
                      }),
                      ariaLabel: o("WAWebSettingsHierarchy")
                        .ThemeSettingsItem.title()
                        .toString(),
                    }),
                    u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                      optionId: "wallpaper",
                      testid: void 0,
                      onSelect: l,
                      primary: N,
                      detailRight: u.jsx(r("WDSIconIcChevronRight.react"), {
                        colorName: "contentDeemphasized",
                        directional: !0,
                      }),
                      ariaLabel: N.toString(),
                    }),
                    o("WAWebChatThemeGatingUtils").isChatThemesEnabled() &&
                      u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                        optionId: "chat-theme",
                        testid: void 0,
                        onSelect: t,
                        primary: o("WAWebSettingsFBT").chatThemeTitle(),
                        detailRight: u.jsx(r("WDSIconIcChevronRight.react"), {
                          colorName: "contentDeemphasized",
                          directional: !0,
                        }),
                        ariaLabel: o("WAWebSettingsFBT")
                          .chatThemeTitle()
                          .toString(),
                      }),
                  ],
                }),
                u.jsxs(r("WAWebDrawerSection.react"), {
                  theme: "no-padding",
                  title: s._(/*BTDS*/ "Chat settings"),
                  titleXStyle: d.sectionTitle,
                  animation: !1,
                  children: [
                    u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                      optionId: "media-upload-quality",
                      testid: void 0,
                      onSelect: a,
                      primary: o(
                        "WAWebSettingsHierarchy",
                      ).MediaUploadQualitySettingsItem.title(),
                      detailRight: u.jsx(r("WDSIconIcChevronRight.react"), {
                        colorName: "contentDeemphasized",
                        directional: !0,
                      }),
                      ariaLabel: o("WAWebSettingsHierarchy")
                        .MediaUploadQualitySettingsItem.title()
                        .toString(),
                    }),
                    u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                      optionId: "media-auto-download",
                      testid: void 0,
                      onSelect: n,
                      primary: o(
                        "WAWebSettingsHierarchy",
                      ).MediaAutoDownloadSettingsItem.title(),
                      detailRight: u.jsx(r("WDSIconIcChevronRight.react"), {
                        colorName: "contentDeemphasized",
                        directional: !0,
                      }),
                      ariaLabel: o("WAWebSettingsHierarchy")
                        .MediaAutoDownloadSettingsItem.title()
                        .toString(),
                    }),
                    o(
                      "WAWebIndividualNewChatMessageCappingLimitGatingUtils",
                    ).isIndividualNewChatMessageCappingEnabled() &&
                      u.jsx(o("WAWebMenuItems.react").ActionMenuItem, {
                        optionId: "new-chats-started",
                        testid: void 0,
                        onSelect: P,
                        primary: s._(/*BTDS*/ "New chats started"),
                        detailRight: u.jsx(r("WDSIconIcChevronRight.react"), {
                          colorName: "contentDeemphasized",
                          directional: !0,
                        }),
                        ariaLabel: s._(/*BTDS*/ "New chats started"),
                      }),
                    u.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
                      optionId: "spellcheck",
                      testid: void 0,
                      on: g.spellcheck,
                      onSelect: C,
                      primary: L,
                      secondary: E,
                      ariaLabel: s._(/*BTDS*/ "{title}. {description}", [
                        s._param("title", L),
                        s._param("description", E),
                      ]),
                    }),
                    u.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
                      optionId: "emoji",
                      testid: void 0,
                      on: g.transformTextEmoji,
                      onSelect: b,
                      primary: k,
                      secondary: I,
                      ariaLabel: s._(/*BTDS*/ "{title}. {description}", [
                        s._param("title", k),
                        s._param("description", I),
                      ]),
                    }),
                    u.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
                      optionId: "enter",
                      testid: void 0,
                      on: g.enterIsSend,
                      onSelect: S,
                      primary: T,
                      secondary: D,
                      ariaLabel: s._(/*BTDS*/ "{title}. {description}", [
                        s._param("title", T),
                        s._param("description", D),
                      ]),
                    }),
                    o(
                      "WAWebAnimatedEmojiGatingUtils",
                    ).isAnimatedEmojiEnabled() &&
                      u.jsx(o("WAWebMenuItems.react").SwitchMenuItem, {
                        optionId: "animated-images",
                        testid: void 0,
                        on: g.autoplayAnimatedImages,
                        onSelect: R,
                        primary: x,
                        secondary: $,
                        ariaLabel: s._(/*BTDS*/ "{title}. {description}", [
                          s._param("title", x),
                          s._param("description", $),
                        ]),
                      }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
