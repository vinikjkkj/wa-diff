__d(
  "WAWebDefaultCommandPalettePlugin",
  [
    "Promise",
    "WAWebChatCollection",
    "WAWebChatListMenuItem.react",
    "WAWebChatMsgIcon.react",
    "WAWebChatSearchModel",
    "WAWebChatlistUtils",
    "WAWebCommandPaletteController",
    "WAWebContact.MenuItem",
    "WAWebContactSearchModel",
    "WAWebContactsIcon.react",
    "WAWebFlex.react",
    "WAWebFrontendChatGetters",
    "WAWebKeyboardShortcut.react",
    "WAWebLexicalWAWebMenu.react",
    "WAWebNoop",
    "WAWebPanelRecentIcon.react",
    "WAWebSearchCollection",
    "WAWebSettingSearchModel",
    "WAWebSettings.MenuItem",
    "WAWebSettingsIcon.react",
    "WAWebSparklesIcon.react",
    "WAWebStaticMenuItem.react",
    "WAWebText.react",
    "react",
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
    function g() {
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
            icon: u.jsx(o("WAWebPanelRecentIcon.react").PanelRecentIcon, {}),
            title: "Recent Chats",
          }),
          c.map(function (t) {
            return u.jsx(
              o("WAWebChatListMenuItem.react").ChatMenuItem,
              {
                chat: t,
                onSelect: function () {
                  (o("WAWebChatlistUtils")
                    .openExistingChat(t.id)
                    .catch(r("WAWebNoop")),
                    e.closeModal());
                },
                optionId: "recent-chat-" + t.id.toString(),
              },
              t.id.toString(),
            );
          }),
        ],
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.section,
        n = o("WAWebCommandPaletteController").useCommandPalette();
      switch (t.type) {
        case "setting":
          return u.jsxs(u.Fragment, {
            children: [
              u.jsx(f, {
                icon: u.jsx(o("WAWebSettingsIcon.react").SettingsIcon, {
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
                icon: u.jsx(o("WAWebChatMsgIcon.react").ChatMsgIcon, {
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
                      (o("WAWebChatlistUtils")
                        .openExistingChat(e.data.id)
                        .catch(r("WAWebNoop")),
                        n.closeModal());
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
                icon: u.jsx(o("WAWebContactsIcon.react").ContactsIcon, {
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
        default:
          return;
      }
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      var e = o("WAWebCommandPaletteController").useCommandPalette(),
        t;
      if (e.pluginList != null) {
        var n = e.pluginList.find(function (e) {
          return e.plugin.id === "HelpCommandPalettePlugin";
        });
        n != null &&
          (t = function () {
            return u.jsxs(u.Fragment, {
              children: [
                u.jsx(o("WAWebStaticMenuItem.react").MenuSeparator, {}),
                u.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  gap: 16,
                  padding: [8, 24, 16, 24],
                  children: [
                    u.jsx(o("WAWebSparklesIcon.react").SparklesIcon, {
                      iconXstyle: _.tealColor,
                      height: 32,
                      width: 32,
                    }),
                    u.jsxs(o("WAWebText.react").WAWebTextMuted, {
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
          });
      }
      return u.jsxs(u.Fragment, {
        children: [u.jsx(g, {}), t != null && u.jsx(t, {})],
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      var t = o("WAWebCommandPaletteController").useCommandPalette(),
        a = p([]),
        i = a[0],
        l = a[1],
        s = m(function () {
          return new (o("WAWebSearchCollection").SearchCollection)([
            new (o("WAWebSettingSearchModel").SettingSearch)({
              maxPageLength: 3,
            }),
            new (o("WAWebChatSearchModel").ChatSearch)({ maxPageLength: 4 }),
            new (o("WAWebContactSearchModel").ContactSearch)({
              maxPageLength: 4,
            }),
          ]);
        }, []);
      return (
        d(
          function () {
            (e || (e = n("Promise")))
              .all(s.query(t.input))
              .then(function (e) {
                return l(e);
              })
              .catch(r("WAWebNoop"));
          },
          [s, t.input],
        ),
        t.input === ""
          ? u.jsx(y, {})
          : u.jsx(o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu, {
              forceSelection: !0,
              children: i.map(function (e) {
                return e.results.length > 0 && u.jsx(h, { section: e }, e.type);
              }),
            })
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    var b = {
      id: "DefaultCommand",
      placeholder: "Search anything",
      shortName: null,
      Component: C,
    };
    l.DefaultCommandPalettePlugin = b;
  },
  98,
);
