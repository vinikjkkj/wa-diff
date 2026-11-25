__d(
  "WAWebDefaultCommandPalettePlugin",
  [
    "Promise",
    "WAWebBotProfileCollection",
    "WAWebChatCollection",
    "WAWebChatListMenuItem.react",
    "WAWebChatSearchModel",
    "WAWebChatlistUtils",
    "WAWebCommandPaletteController",
    "WAWebContact.MenuItem",
    "WAWebContactSearchGatingUtils",
    "WAWebContactSearchModel",
    "WAWebFlex.react",
    "WAWebFrontendChatGetters",
    "WAWebHeaderInfoPanelActions",
    "WAWebKeyboardShortcut.react",
    "WAWebLexicalWAWebMenu.react",
    "WAWebNonContactPushNameSearchModel",
    "WAWebNoop",
    "WAWebResolveBotProfile",
    "WAWebSearchCollection",
    "WAWebSettingSearchModel",
    "WAWebSettings.MenuItem",
    "WAWebStaticMenuItem.react",
    "WAWebWamEnumProfileEntryPoint",
    "WAWebWorkDirectory.react",
    "WDSIconIcPerson.react",
    "WDSIconIcSchedule.react",
    "WDSIconIcSettingsFilled.react",
    "WDSIconWdsIcAi.react",
    "WDSIconWdsIcChat.react",
    "WDSProfilePhoto.react",
    "WDSText.react",
    "react",
    "useWAWebListener",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useMemo,
      p = c.useState,
      _ = { tealColor: { color: "x1v5yvga", $$css: !0 } };
    function f(e) {
      var t = e.icon,
        n = e.title;
      return u.jsx(o("WAWebStaticMenuItem.react").MenuHeading, {
        children: u.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          children: [
            u.jsx(o("WAWebFlex.react").FlexItem, {
              paddingEnd: 8,
              children: t,
            }),
            n,
          ],
        }),
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      if (
        o("WAWebResolveBotProfile").shouldHideMuseBotFromCachedProfile(e.id)
      ) {
        o("WAWebHeaderInfoPanelActions").openInfoPanel({
          chat: e,
          profileEntryPoint: o("WAWebWamEnumProfileEntryPoint")
            .PROFILE_ENTRY_POINT.SEARCH,
          uim: null,
        });
        return;
      }
      o("WAWebChatlistUtils").openExistingChat(e.id).catch(r("WAWebNoop"));
    }
    function h() {
      for (
        var e = o("WAWebCommandPaletteController").useCommandPalette(),
          t = 3,
          n = 0,
          a = [],
          i = o("WAWebChatCollection").ChatCollection.getModelsArray(),
          l = 0;
        l < i.length;
        l++
      ) {
        var s = i[l];
        if (
          (!s.active &&
            o("WAWebFrontendChatGetters").getShouldAppearInList(s) &&
            (a.push(s), s.pin == null && n++),
          n === t)
        )
          break;
      }
      var c = a
        .sort(function (e, t) {
          var n, r;
          return ((n = t.t) != null ? n : 0) - ((r = e.t) != null ? r : 0);
        })
        .slice(0, t);
      return u.jsxs(o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu, {
        forceSelection: !0,
        children: [
          u.jsx(f, {
            icon: u.jsx(r("WDSIconIcSchedule.react"), {}),
            title: "Recent Chats",
          }),
          c.map(function (t) {
            return u.jsx(
              o("WAWebChatListMenuItem.react").ChatMenuItem,
              {
                chat: t,
                onSelect: function () {
                  (g(t), e.closeModal());
                },
                optionId: "recent-chat-" + t.id.toString(),
              },
              t.id.toString(),
            );
          }),
        ],
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.section,
        n = o("WAWebCommandPaletteController").useCommandPalette();
      switch (t.type) {
        case "setting":
          return u.jsxs(u.Fragment, {
            children: [
              u.jsx(f, {
                icon: u.jsx(r("WDSIconIcSettingsFilled.react"), {
                  iconXstyle: _.tealColor,
                  height: 16,
                  width: 16,
                }),
                title: "Settings",
              }),
              u.jsx(o("WAWebSettings.MenuItem").SettingsMenu, {
                onSelect: function (t) {
                  (o("WAWebSettings.MenuItem").openSettingDrawer(t.step),
                    n.closeModal());
                },
                settings: t.results.map(function (e) {
                  return e.data;
                }),
              }),
            ],
          });
        case "chat":
          return u.jsxs(u.Fragment, {
            children: [
              u.jsx(f, {
                icon: u.jsx(r("WDSIconWdsIcChat.react"), {
                  iconXstyle: _.tealColor,
                  height: 24,
                  width: 24,
                }),
                title: "Chats",
              }),
              t.results.map(function (e) {
                return u.jsx(
                  o("WAWebChatListMenuItem.react").ChatMenuItem,
                  {
                    chat: e.data,
                    onSelect: function () {
                      (g(e.data), n.closeModal());
                    },
                    optionId: "context-menu-chat-" + e.id,
                  },
                  t.type + "-" + e.id,
                );
              }),
            ],
          });
        case "contact":
          return u.jsxs(u.Fragment, {
            children: [
              u.jsx(f, {
                icon: u.jsx(r("WDSIconIcPerson.react"), {
                  iconXstyle: _.tealColor,
                  height: 24,
                  width: 24,
                }),
                title: "Contacts",
              }),
              t.results.map(function (e) {
                return u.jsx(
                  r("WAWebContact.MenuItem"),
                  {
                    contact: e.data,
                    onSelect: function () {
                      o(
                        "WAWebResolveBotProfile",
                      ).shouldHideMuseBotFromCachedProfile(e.data.id) ||
                        (o("WAWebChatlistUtils")
                          .openOrCreateLatestChat(e.data.id)
                          .catch(r("WAWebNoop")),
                        n.closeModal());
                    },
                  },
                  t.type + "-" + e.id,
                );
              }),
            ],
          });
        case "non-contact-pushname":
          return u.jsxs(u.Fragment, {
            children: [
              u.jsx(f, {
                title: o(
                  "WAWebNonContactPushNameSearchModel",
                ).getNonContactPushNameHeader(),
                icon: u.jsx(r("WDSProfilePhoto.react"), {
                  type: "person",
                  name: "",
                  size: "xxSmall",
                  color: "gray",
                  testid: "default-user",
                  isDecorative: !0,
                }),
              }),
              t.results.map(function (e) {
                return u.jsx(
                  r("WAWebContact.MenuItem"),
                  {
                    contact: e.data,
                    onSelect: function () {
                      o(
                        "WAWebResolveBotProfile",
                      ).shouldHideMuseBotFromCachedProfile(e.data.id) ||
                        (o("WAWebChatlistUtils")
                          .openOrCreateLatestChat(e.data.id)
                          .catch(r("WAWebNoop")),
                        n.closeModal());
                    },
                  },
                  t.type + "-" + e.id,
                );
              }),
            ],
          });
        case "work-directory":
          return u.jsx(
            o("WAWebWorkDirectory.react").WorkDirectoryCommandPaletteSection,
            {
              members: t.results.map(function (e) {
                return e.data;
              }),
              onSelect: n.closeModal,
            },
          );
        default:
          return;
      }
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      var e,
        t = o("WAWebCommandPaletteController").useCommandPalette(),
        n =
          ((e = t.pluginList) == null
            ? void 0
            : e.some(function (e) {
                return e.plugin.id === "HelpCommandPalettePlugin";
              })) === !0;
      return u.jsxs(u.Fragment, {
        children: [u.jsx(h, {}), n && u.jsx(b, {})],
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b() {
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(o("WAWebStaticMenuItem.react").MenuSeparator, {}),
          u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            gap: 16,
            padding: [8, 24, 16, 24],
            children: [
              u.jsx(r("WDSIconWdsIcAi.react"), {
                iconXstyle: _.tealColor,
                height: 32,
                width: 32,
              }),
              u.jsxs(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDeemphasized",
                children: [
                  "Type ",
                  u.jsx(o("WAWebKeyboardShortcut.react").KeyboardKey, {
                    value: "/?",
                  }),
                  " to see available plugins",
                ],
              }),
            ],
          }),
        ],
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t,
        n,
        r,
        a,
        i = e.find(function (e) {
          return e.type === "non-contact-pushname";
        });
      if (i == null || i.results.length === 0) return e;
      var l =
          (t =
            (n = e.find(function (e) {
              return e.type === "chat";
            })) == null
              ? void 0
              : n.results) != null
            ? t
            : [],
        s =
          (r =
            (a = e.find(function (e) {
              return e.type === "contact";
            })) == null
              ? void 0
              : a.results) != null
            ? r
            : [],
        u = new Set(
          o("WAWebNonContactPushNameSearchModel")
            .dedupeNonContactPushnames(
              i.results.map(function (e) {
                return e.data;
              }),
              l.map(function (e) {
                return e.data;
              }),
              s.map(function (e) {
                return e.data;
              }),
            )
            .map(function (e) {
              return e.id.toString();
            }),
        );
      return e.map(function (e) {
        return e === i
          ? babelHelpers.extends({}, e, {
              results: e.results.filter(function (e) {
                return u.has(e.data.id.toString());
              }),
            })
          : e;
      });
    }
    function S() {
      var t = o("WAWebCommandPaletteController").useCommandPalette(),
        a = p([]),
        i = a[0],
        l = a[1],
        s = p(function () {
          return o(
            "WAWebWorkDirectory.react",
          ).createWorkDirectoryMemberSearch();
        }),
        c = s[0],
        _ = m(
          function () {
            return new (o("WAWebSearchCollection").SearchCollection)(
              [
                new (o("WAWebSettingSearchModel").SettingSearch)({
                  maxPageLength: 3,
                }),
                new (o("WAWebChatSearchModel").ChatSearch)({
                  maxPageLength: 4,
                }),
              ].concat(
                c == null ? [] : [c],
                [
                  new (o("WAWebContactSearchModel").ContactSearch)({
                    maxPageLength: 4,
                  }),
                ],
                o(
                  "WAWebContactSearchGatingUtils",
                ).isNonContactPushNameSearchEnabled()
                  ? [
                      o(
                        "WAWebNonContactPushNameSearchModel",
                      ).getNonContactPushNameSearch(),
                    ]
                  : [],
              ),
            );
          },
          [c],
        ),
        f = r("useWAWebStableCallback")(function () {
          (e || (e = n("Promise")))
            .all(_.query(t.input))
            .then(function (e) {
              return l(e);
            })
            .catch(r("WAWebNoop"));
        });
      return (
        d(
          function () {
            (e || (e = n("Promise")))
              .all(_.query(t.input))
              .then(function (e) {
                return l(e);
              })
              .catch(r("WAWebNoop"));
          },
          [_, t.input],
        ),
        o("useWAWebListener").useListener(
          o("WAWebBotProfileCollection").BotProfileCollection,
          ["add", "change:product"],
          f,
        ),
        o("useWAWebListener").useListener(
          c == null ? void 0 : c.events,
          "load",
          f,
        ),
        t.input === ""
          ? u.jsx(C, {})
          : u.jsx(o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu, {
              forceSelection: !0,
              children: o("WAWebWorkDirectory.react")
                .dedupeWorkDirectoryMemberSection(v(i))
                .map(function (e) {
                  return (
                    e.results.length > 0 && u.jsx(y, { section: e }, e.type)
                  );
                }),
            })
      );
    }
    S.displayName = S.name + " [from " + i.id + "]";
    var R = {
      id: "DefaultCommand",
      placeholder: "Search anything",
      shortName: null,
      Component: S,
    };
    l.DefaultCommandPalettePlugin = R;
  },
  98,
);
