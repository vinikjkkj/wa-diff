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
    "WAWebWODirectory.react",
    "WAWebWamEnumProfileEntryPoint",
    "WDSIconIcPerson.react",
    "WDSIconIcSchedule.react",
    "WDSIconIcSettingsFilled.react",
    "WDSIconWdsIcAi.react",
    "WDSIconWdsIcChat.react",
    "WDSProfilePhoto.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(5),
        n = e.icon,
        r = e.title,
        a;
      t[0] !== n
        ? ((a = u.jsx(o("WAWebFlex.react").FlexItem, {
            paddingEnd: 8,
            children: n,
          })),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i;
      return (
        t[2] !== a || t[3] !== r
          ? ((i = u.jsx(o("WAWebStaticMenuItem.react").MenuHeading, {
              children: u.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                children: [a, r],
              }),
            })),
            (t[2] = a),
            (t[3] = r),
            (t[4] = i))
          : (i = t[4]),
        i
      );
    }
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
      var e = o("react-compiler-runtime").c(6),
        t = o("WAWebCommandPaletteController").useCommandPalette(),
        n = 0,
        a;
      if (e[0] !== t || e[1] !== n) {
        for (
          var i = [],
            l = o("WAWebChatCollection").ChatCollection.getModelsArray(),
            s = 0;
          s < l.length;
          s++
        ) {
          var c = l[s];
          if (
            (!c.active &&
              o("WAWebFrontendChatGetters").getShouldAppearInList(c) &&
              (i.push(c), c.pin == null && n++),
            n === 3)
          )
            break;
        }
        var d = i.sort(y).slice(0, 3),
          m;
        e[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = u.jsx(f, {
              icon: u.jsx(r("WDSIconIcSchedule.react"), {}),
              title: "Recent Chats",
            })),
            (e[3] = m))
          : (m = e[3]);
        var p;
        (e[4] !== t
          ? ((p = function (n) {
              return u.jsx(
                o("WAWebChatListMenuItem.react").ChatMenuItem,
                {
                  chat: n,
                  onSelect: function () {
                    (g(n), t.closeModal());
                  },
                  optionId: "recent-chat-" + n.id.toString(),
                },
                n.id.toString(),
              );
            }),
            (e[4] = t),
            (e[5] = p))
          : (p = e[5]),
          (a = u.jsxs(o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu, {
            forceSelection: !0,
            children: [m, d.map(p)],
          })),
          (e[0] = t),
          (e[1] = n),
          (e[2] = a));
      } else a = e[2];
      return a;
    }
    function y(e, t) {
      var n, r;
      return ((n = t.t) != null ? n : 0) - ((r = e.t) != null ? r : 0);
    }
    function C(e) {
      var t = o("react-compiler-runtime").c(43),
        n = e.section,
        a = o("WAWebCommandPaletteController").useCommandPalette();
      switch (n.type) {
        case "setting": {
          var i;
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = u.jsx(f, {
                icon: u.jsx(r("WDSIconIcSettingsFilled.react"), {
                  iconXstyle: _.tealColor,
                  height: 16,
                  width: 16,
                }),
                title: "Settings",
              })),
              (t[0] = i))
            : (i = t[0]);
          var l;
          t[1] !== a
            ? ((l = function (t) {
                (o("WAWebSettings.MenuItem").openSettingDrawer(t.step),
                  a.closeModal());
              }),
              (t[1] = a),
              (t[2] = l))
            : (l = t[2]);
          var s;
          t[3] !== n.results
            ? ((s = n.results.map(v)), (t[3] = n.results), (t[4] = s))
            : (s = t[4]);
          var c;
          return (
            t[5] !== l || t[6] !== s
              ? ((c = u.jsxs(u.Fragment, {
                  children: [
                    i,
                    u.jsx(o("WAWebSettings.MenuItem").SettingsMenu, {
                      onSelect: l,
                      settings: s,
                    }),
                  ],
                })),
                (t[5] = l),
                (t[6] = s),
                (t[7] = c))
              : (c = t[7]),
            c
          );
        }
        case "chat": {
          var d;
          t[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = u.jsx(f, {
                icon: u.jsx(r("WDSIconWdsIcChat.react"), {
                  iconXstyle: _.tealColor,
                  height: 24,
                  width: 24,
                }),
                title: "Chats",
              })),
              (t[8] = d))
            : (d = t[8]);
          var m;
          if (t[9] !== a || t[10] !== n.results || t[11] !== n.type) {
            var p;
            (t[13] !== a || t[14] !== n.type
              ? ((p = function (t) {
                  return u.jsx(
                    o("WAWebChatListMenuItem.react").ChatMenuItem,
                    {
                      chat: t.data,
                      onSelect: function () {
                        (g(t.data), a.closeModal());
                      },
                      optionId: "context-menu-chat-" + t.id,
                    },
                    n.type + "-" + t.id,
                  );
                }),
                (t[13] = a),
                (t[14] = n.type),
                (t[15] = p))
              : (p = t[15]),
              (m = n.results.map(p)),
              (t[9] = a),
              (t[10] = n.results),
              (t[11] = n.type),
              (t[12] = m));
          } else m = t[12];
          var h;
          return (
            t[16] !== m
              ? ((h = u.jsxs(u.Fragment, { children: [d, m] })),
                (t[16] = m),
                (t[17] = h))
              : (h = t[17]),
            h
          );
        }
        case "contact": {
          var y;
          t[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((y = u.jsx(f, {
                icon: u.jsx(r("WDSIconIcPerson.react"), {
                  iconXstyle: _.tealColor,
                  height: 24,
                  width: 24,
                }),
                title: "Contacts",
              })),
              (t[18] = y))
            : (y = t[18]);
          var C;
          if (t[19] !== a || t[20] !== n.results || t[21] !== n.type) {
            var S;
            (t[23] !== a || t[24] !== n.type
              ? ((S = function (t) {
                  return u.jsx(
                    r("WAWebContact.MenuItem"),
                    {
                      contact: t.data,
                      onSelect: function () {
                        o(
                          "WAWebResolveBotProfile",
                        ).shouldHideMuseBotFromCachedProfile(t.data.id) ||
                          (o("WAWebChatlistUtils")
                            .openOrCreateLatestChat(t.data.id)
                            .catch(r("WAWebNoop")),
                          a.closeModal());
                      },
                    },
                    n.type + "-" + t.id,
                  );
                }),
                (t[23] = a),
                (t[24] = n.type),
                (t[25] = S))
              : (S = t[25]),
              (C = n.results.map(S)),
              (t[19] = a),
              (t[20] = n.results),
              (t[21] = n.type),
              (t[22] = C));
          } else C = t[22];
          var R;
          return (
            t[26] !== C
              ? ((R = u.jsxs(u.Fragment, { children: [y, C] })),
                (t[26] = C),
                (t[27] = R))
              : (R = t[27]),
            R
          );
        }
        case "non-contact-pushname": {
          var L;
          t[28] === Symbol.for("react.memo_cache_sentinel")
            ? ((L = u.jsx(f, {
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
              })),
              (t[28] = L))
            : (L = t[28]);
          var E;
          if (t[29] !== a || t[30] !== n.results || t[31] !== n.type) {
            var k;
            (t[33] !== a || t[34] !== n.type
              ? ((k = function (t) {
                  return u.jsx(
                    r("WAWebContact.MenuItem"),
                    {
                      contact: t.data,
                      onSelect: function () {
                        o(
                          "WAWebResolveBotProfile",
                        ).shouldHideMuseBotFromCachedProfile(t.data.id) ||
                          (o("WAWebChatlistUtils")
                            .openOrCreateLatestChat(t.data.id)
                            .catch(r("WAWebNoop")),
                          a.closeModal());
                      },
                    },
                    n.type + "-" + t.id,
                  );
                }),
                (t[33] = a),
                (t[34] = n.type),
                (t[35] = k))
              : (k = t[35]),
              (E = n.results.map(k)),
              (t[29] = a),
              (t[30] = n.results),
              (t[31] = n.type),
              (t[32] = E));
          } else E = t[32];
          var I;
          return (
            t[36] !== E
              ? ((I = u.jsxs(u.Fragment, { children: [L, E] })),
                (t[36] = E),
                (t[37] = I))
              : (I = t[37]),
            I
          );
        }
        case "wo-directory": {
          var T;
          t[38] !== n.results
            ? ((T = n.results.map(b)), (t[38] = n.results), (t[39] = T))
            : (T = t[39]);
          var D;
          return (
            t[40] !== a.closeModal || t[41] !== T
              ? ((D = u.jsx(
                  o("WAWebWODirectory.react").WODirectoryCommandPaletteSection,
                  { members: T, onSelect: a.closeModal },
                )),
                (t[40] = a.closeModal),
                (t[41] = T),
                (t[42] = D))
              : (D = t[42]),
            D
          );
        }
        default:
          return;
      }
    }
    function b(e) {
      return e.data;
    }
    function v(e) {
      return e.data;
    }
    function S() {
      var e = o("react-compiler-runtime").c(7),
        t = o("WAWebCommandPaletteController").useCommandPalette(),
        n;
      if (e[0] !== t.pluginList) {
        var r;
        ((n = (r = t.pluginList) == null ? void 0 : r.some(R)),
          (e[0] = t.pluginList),
          (e[1] = n));
      } else n = e[1];
      var a = n === !0,
        i;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = u.jsx(h, {})), (e[2] = i))
        : (i = e[2]);
      var l;
      e[3] !== a
        ? ((l = a && u.jsx(L, {})), (e[3] = a), (e[4] = l))
        : (l = e[4]);
      var s;
      return (
        e[5] !== l
          ? ((s = u.jsxs(u.Fragment, { children: [i, l] })),
            (e[5] = l),
            (e[6] = s))
          : (s = e[6]),
        s
      );
    }
    function R(e) {
      return e.plugin.id === "HelpCommandPalettePlugin";
    }
    function L() {
      var e = o("react-compiler-runtime").c(4),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = u.jsx(o("WAWebStaticMenuItem.react").MenuSeparator, {})),
          (e[0] = t))
        : (t = e[0]);
      var n, a;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = [8, 24, 16, 24]),
          (a = u.jsx(r("WDSIconWdsIcAi.react"), {
            iconXstyle: _.tealColor,
            height: 32,
            width: 32,
          })),
          (e[1] = n),
          (e[2] = a))
        : ((n = e[1]), (a = e[2]));
      var i;
      return (
        e[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = u.jsxs(u.Fragment, {
              children: [
                t,
                u.jsxs(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  gap: 16,
                  padding: n,
                  children: [
                    a,
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
            })),
            (e[3] = i))
          : (i = e[3]),
        i
      );
    }
    function E(e) {
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
    function k() {
      var t = o("react-compiler-runtime").c(16),
        a = o("WAWebCommandPaletteController").useCommandPalette(),
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = []), (t[0] = i))
        : (i = t[0]);
      var l = p(i),
        s = l[0],
        c = l[1],
        m = p(T),
        _ = m[0],
        f;
      t[1] !== _
        ? ((f = new (o("WAWebSearchCollection").SearchCollection)(
            [
              new (o("WAWebSettingSearchModel").SettingSearch)({
                maxPageLength: 3,
              }),
              new (o("WAWebChatSearchModel").ChatSearch)({ maxPageLength: 4 }),
              new (o("WAWebContactSearchModel").ContactSearch)({
                maxPageLength: 4,
              }),
            ].concat(
              o(
                "WAWebContactSearchGatingUtils",
              ).isNonContactPushNameSearchEnabled()
                ? [
                    o(
                      "WAWebNonContactPushNameSearchModel",
                    ).getNonContactPushNameSearch(),
                  ]
                : [],
              _ == null ? [] : [_],
            ),
          )),
          (t[1] = _),
          (t[2] = f))
        : (f = t[2]);
      var g = f,
        h;
      t[3] !== a.input || t[4] !== g
        ? ((h = function () {
            (e || (e = n("Promise")))
              .all(g.query(a.input))
              .then(function (e) {
                return c(e);
              })
              .catch(r("WAWebNoop"));
          }),
          (t[3] = a.input),
          (t[4] = g),
          (t[5] = h))
        : (h = t[5]);
      var y = r("useWAWebStableCallback")(h),
        C,
        b;
      (t[6] !== a.input || t[7] !== g
        ? ((C = function () {
            (e || (e = n("Promise")))
              .all(g.query(a.input))
              .then(function (e) {
                return c(e);
              })
              .catch(r("WAWebNoop"));
          }),
          (b = [g, a.input]),
          (t[6] = a.input),
          (t[7] = g),
          (t[8] = C),
          (t[9] = b))
        : ((C = t[8]), (b = t[9])),
        d(C, b));
      var v;
      if (
        (t[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = ["add", "change:product"]), (t[10] = v))
          : (v = t[10]),
        o("useWAWebListener").useListener(
          o("WAWebBotProfileCollection").BotProfileCollection,
          v,
          y,
        ),
        o("useWAWebListener").useListener(
          _ == null ? void 0 : _.events,
          "load",
          y,
        ),
        a.input === "")
      ) {
        var R;
        return (
          t[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((R = u.jsx(S, {})), (t[11] = R))
            : (R = t[11]),
          R
        );
      }
      var L;
      t[12] !== s
        ? ((L = o("WAWebWODirectory.react")
            .dedupeWODirectoryMemberSection(E(s))
            .map(I)),
          (t[12] = s),
          (t[13] = L))
        : (L = t[13]);
      var k;
      return (
        t[14] !== L
          ? ((k = u.jsx(o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu, {
              forceSelection: !0,
              children: L,
            })),
            (t[14] = L),
            (t[15] = k))
          : (k = t[15]),
        k
      );
    }
    function I(e) {
      return e.results.length > 0 && u.jsx(C, { section: e }, e.type);
    }
    function T() {
      return o("WAWebWODirectory.react").createWODirectoryMemberSearch();
    }
    var D = {
      id: "DefaultCommand",
      placeholder: "Search anything",
      shortName: null,
      Component: k,
    };
    l.DefaultCommandPalettePlugin = D;
  },
  98,
);
