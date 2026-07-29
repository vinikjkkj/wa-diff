__d(
  "WAWebDefaultCommandPalettePlugin",
  [
    "Promise",
    "WAWebChatCollection",
    "WAWebChatListMenuItem.react",
    "WAWebChatSearchModel",
    "WAWebChatlistUtils",
    "WAWebCommandPaletteController",
    "WAWebContact.MenuItem",
    "WAWebContactSearchGatingUtils",
    "WAWebContactSearchModel",
    "WAWebDefaultUserIcon.react",
    "WAWebFlex.react",
    "WAWebFrontendChatGetters",
    "WAWebKeyboardShortcut.react",
    "WAWebLexicalWAWebMenu.react",
    "WAWebNonContactPushNameSearchModel",
    "WAWebNoop",
    "WAWebPanelRecentIcon.react",
    "WAWebSearchCollection",
    "WAWebSettingSearchModel",
    "WAWebSettings.MenuItem",
    "WAWebSettingsIcon.react",
    "WAWebSparklesIcon.react",
    "WAWebStaticMenuItem.react",
    "WDSIconIcPerson.react",
    "WDSIconWdsIcChat.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
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
    function g() {
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
        var d = i.sort(h).slice(0, 3),
          m;
        e[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = u.jsx(f, {
              icon: u.jsx(o("WAWebPanelRecentIcon.react").PanelRecentIcon, {}),
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
                    (o("WAWebChatlistUtils")
                      .openExistingChat(n.id)
                      .catch(r("WAWebNoop")),
                      t.closeModal());
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
    function h(e, t) {
      var n, r;
      return ((n = t.t) != null ? n : 0) - ((r = e.t) != null ? r : 0);
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(38),
        n = e.section,
        a = o("WAWebCommandPaletteController").useCommandPalette();
      switch (n.type) {
        case "setting": {
          var i;
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = u.jsx(f, {
                icon: u.jsx(o("WAWebSettingsIcon.react").SettingsIcon, {
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
            ? ((s = n.results.map(C)), (t[3] = n.results), (t[4] = s))
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
                        (o("WAWebChatlistUtils")
                          .openExistingChat(t.data.id)
                          .catch(r("WAWebNoop")),
                          a.closeModal());
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
          var g;
          return (
            t[16] !== m
              ? ((g = u.jsxs(u.Fragment, { children: [d, m] })),
                (t[16] = m),
                (t[17] = g))
              : (g = t[17]),
            g
          );
        }
        case "contact": {
          var h;
          t[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = u.jsx(f, {
                icon: u.jsx(r("WDSIconIcPerson.react"), {
                  iconXstyle: _.tealColor,
                  height: 24,
                  width: 24,
                }),
                title: "Contacts",
              })),
              (t[18] = h))
            : (h = t[18]);
          var y;
          if (t[19] !== a || t[20] !== n.results || t[21] !== n.type) {
            var b;
            (t[23] !== a || t[24] !== n.type
              ? ((b = function (t) {
                  return u.jsx(
                    r("WAWebContact.MenuItem"),
                    {
                      contact: t.data,
                      onSelect: function () {
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
                (t[25] = b))
              : (b = t[25]),
              (y = n.results.map(b)),
              (t[19] = a),
              (t[20] = n.results),
              (t[21] = n.type),
              (t[22] = y));
          } else y = t[22];
          var v;
          return (
            t[26] !== y
              ? ((v = u.jsxs(u.Fragment, { children: [h, y] })),
                (t[26] = y),
                (t[27] = v))
              : (v = t[27]),
            v
          );
        }
        case "non-contact-pushname": {
          var S;
          t[28] === Symbol.for("react.memo_cache_sentinel")
            ? ((S = u.jsx(f, {
                title: o(
                  "WAWebNonContactPushNameSearchModel",
                ).getNonContactPushNameHeader(),
                icon: u.jsx(o("WAWebDefaultUserIcon.react").DefaultUserIcon, {
                  width: 24,
                  height: 24,
                }),
              })),
              (t[28] = S))
            : (S = t[28]);
          var R;
          if (t[29] !== a || t[30] !== n.results || t[31] !== n.type) {
            var L;
            (t[33] !== a || t[34] !== n.type
              ? ((L = function (t) {
                  return u.jsx(
                    r("WAWebContact.MenuItem"),
                    {
                      contact: t.data,
                      onSelect: function () {
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
                (t[35] = L))
              : (L = t[35]),
              (R = n.results.map(L)),
              (t[29] = a),
              (t[30] = n.results),
              (t[31] = n.type),
              (t[32] = R));
          } else R = t[32];
          var E;
          return (
            t[36] !== R
              ? ((E = u.jsxs(u.Fragment, { children: [S, R] })),
                (t[36] = R),
                (t[37] = E))
              : (E = t[37]),
            E
          );
        }
        default:
          return;
      }
    }
    function C(e) {
      return e.data;
    }
    function b() {
      var e = o("react-compiler-runtime").c(7),
        t = o("WAWebCommandPaletteController").useCommandPalette(),
        n;
      if (e[0] !== t.pluginList) {
        var r;
        ((n = (r = t.pluginList) == null ? void 0 : r.some(v)),
          (e[0] = t.pluginList),
          (e[1] = n));
      } else n = e[1];
      var a = n === !0,
        i;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = u.jsx(g, {})), (e[2] = i))
        : (i = e[2]);
      var l;
      e[3] !== a
        ? ((l = a && u.jsx(S, {})), (e[3] = a), (e[4] = l))
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
    function v(e) {
      return e.plugin.id === "HelpCommandPalettePlugin";
    }
    function S() {
      var e = o("react-compiler-runtime").c(4),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = u.jsx(o("WAWebStaticMenuItem.react").MenuSeparator, {})),
          (e[0] = t))
        : (t = e[0]);
      var n, a;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = [8, 24, 16, 24]),
          (a = u.jsx(o("WAWebSparklesIcon.react").SparklesIcon, {
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
    function R(e) {
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
    function L() {
      var t = o("react-compiler-runtime").c(10),
        a = o("WAWebCommandPaletteController").useCommandPalette(),
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = []), (t[0] = i))
        : (i = t[0]);
      var l = p(i),
        s = l[0],
        c = l[1],
        m;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = new (o("WAWebSearchCollection").SearchCollection)(
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
            ),
          )),
          (t[1] = m))
        : (m = t[1]);
      var _ = m,
        f,
        g;
      if (
        (t[2] !== a.input
          ? ((f = function () {
              (e || (e = n("Promise")))
                .all(_.query(a.input))
                .then(function (e) {
                  return c(e);
                })
                .catch(r("WAWebNoop"));
            }),
            (g = [_, a.input]),
            (t[2] = a.input),
            (t[3] = f),
            (t[4] = g))
          : ((f = t[3]), (g = t[4])),
        d(f, g),
        a.input === "")
      ) {
        var h;
        return (
          t[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = u.jsx(b, {})), (t[5] = h))
            : (h = t[5]),
          h
        );
      }
      var y;
      t[6] !== s ? ((y = R(s).map(E)), (t[6] = s), (t[7] = y)) : (y = t[7]);
      var C;
      return (
        t[8] !== y
          ? ((C = u.jsx(o("WAWebLexicalWAWebMenu.react").LexicalWAWebMenu, {
              forceSelection: !0,
              children: y,
            })),
            (t[8] = y),
            (t[9] = C))
          : (C = t[9]),
        C
      );
    }
    function E(e) {
      return e.results.length > 0 && u.jsx(y, { section: e }, e.type);
    }
    var k = {
      id: "DefaultCommand",
      placeholder: "Search anything",
      shortName: null,
      Component: L,
    };
    l.DefaultCommandPalettePlugin = k;
  },
  98,
);
