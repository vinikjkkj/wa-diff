__d(
  "WAWebArchivedDrawer.react",
  [
    "fbt",
    "WALogger",
    "WAWebApiChat",
    "WAWebChat.react",
    "WAWebChatCollection",
    "WAWebChatCommunityUtils",
    "WAWebChatComparator",
    "WAWebCmd",
    "WAWebCommunityGatingUtils",
    "WAWebComposeBoxActions",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebEmptyState.react",
    "WAWebEnvironment",
    "WAWebFlatList.react",
    "WAWebFlatListController",
    "WAWebFocusTracer",
    "WAWebFrontendChatGetters",
    "WAWebKeyboardHotKeys.react",
    "WAWebNewsletterCollection",
    "WAWebNewsletterGatingUtils",
    "WAWebSettingsGetters",
    "WAWebSingleSelection",
    "WAWebText.react",
    "WAWebUISpacing",
    "react",
    "stylex",
    "useLazyRef",
    "useWAWebListener",
    "useWAWebSettingsValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = ["ref"],
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useCallback,
      f = p.useEffect,
      g = p.useRef,
      h = p.useState,
      y = { surface: "archived-chats-drawer" },
      C = o("WAWebChat.react").ChatFactory();
    function b(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, u),
        i = a.onClose,
        l = _(function () {
          var e = o("WAWebChatCollection").ChatCollection.filter(function (e) {
            return (
              e.archive &&
              o("WAWebFrontendChatGetters").getShouldAppearInList(e)
            );
          });
          if (o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled()) {
            var t = new Set(
                e.map(function (e) {
                  return e.id.toString();
                }),
              ),
              n = r("WAWebNewsletterCollection").filter(function (e) {
                return e.archive && !t.has(e.id.toString());
              });
            return [].concat(e, n).sort(r("WAWebChatComparator"));
          }
          return e;
        }, []),
        d = o("useWAWebSettingsValues").useSettingsValues([
          o("WAWebSettingsGetters").getShowArchiveV2,
          o("WAWebSettingsGetters").getArchive,
        ]),
        p = d[0],
        b = d[1],
        v = r("useLazyRef")(function () {
          return new (r("WAWebFlatListController"))();
        }),
        S = r("useLazyRef")(function () {
          return new (r("WAWebSingleSelection"))([], function (e) {
            return e.id.toString();
          });
        }),
        R = g(null),
        L = h(l),
        E = L[0],
        k = L[1],
        I = function (t) {
          var e = S.current.getVal();
          t === e && S.current.unset();
        },
        T = function () {
          return p;
        };
      (o("useWAWebListener").useListener(
        o("WAWebChatCollection").ChatCollection,
        [T() ? "sort" : null, "change:archive", "add", "remove"].filter(
          Boolean,
        ),
        function () {
          k(l());
        },
      ),
        o("useWAWebListener").useListener(
          o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled()
            ? r("WAWebNewsletterCollection")
            : null,
          ["change:archive", "add", "remove"],
          function () {
            k(l());
          },
        ));
      var D = function (t) {
        S.current.setVal(t, !1);
      };
      (o("useWAWebListener").useListener(o("WAWebCmd").Cmd, "close_chat", I),
        o("useWAWebListener").useListener(
          o("WAWebCmd").Cmd,
          "update_chatlist_selection",
          D,
        ));
      var x = function () {
          var e =
            o("WAWebChatCollection").ChatCollection.some(function (e) {
              return e.archive;
            }) ||
            (o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled() &&
              r("WAWebNewsletterCollection").some(function (e) {
                return e.archive;
              }));
          return e;
        },
        $ = _(function () {
          var e = o("WAWebChatCollection")
            .ChatCollection.toArray()
            .find(function (e) {
              return e.active && e.archive;
            });
          return e != null
            ? e
            : o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled()
              ? r("WAWebNewsletterCollection")
                  .toArray()
                  .find(function (e) {
                    return e.active && e.archive;
                  })
              : null;
        }, []);
      f(function () {
        if (T()) {
          var t = l(),
            n = new Map();
          (t.forEach(function (e) {
            ((e.archiveAtMentionViewedInDrawer = !0),
              n.set(e.id.toString(), !0));
          }),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "WAWebArchivedDrawer: will mark chats for archive",
                ])),
            ),
            o("WAWebApiChat").updateChatArchiveDrawer(n));
        }
        R.current && r("WAWebFocusTracer").focus(R.current);
        var a = $();
        a && D(a);
      }, []);
      var P = function () {
          i();
        },
        N = function (t, n) {
          (o("WAWebCmd")
            .Cmd.openChatFromUnread({ chat: n })
            .then(function (e) {
              e && o("WAWebComposeBoxActions").ComposeBoxActions.focus(n);
            }),
            b.enabled || P());
        },
        M = function (t) {
          (t.preventDefault(), t.stopPropagation(), S.current.setNext(!0));
        },
        w = function (t) {
          (t.preventDefault(), t.stopPropagation(), S.current.setPrev(!0));
        },
        A = function (t) {
          var e = o("WAWebCommunityGatingUtils").shouldShowNewSubgroupIdentity(
            t.groupMetadata,
          )
            ? o("WAWebChatCommunityUtils").SUBGROUP_V2_CHAT_CELL_HEIGHT
            : o("WAWebFlatList.react").DEFAULT_ITEM_HEIGHT;
          return e + 4;
        },
        F = function () {
          return E.map(function (e) {
            return { itemKey: e.id.toString(), chat: e, height: A(e) };
          });
        };
      S.current.init(E, !0);
      var O, B;
      if (x()) {
        var W = o("WAWebNewsletterGatingUtils").isChannelsInChatListEnabled(),
          q = m.jsx("span", {
            className: "x117nqv4",
            children: s._(/*BTDS*/ "Settings > Chats"),
          }),
          U = W
            ? s._(
                /*BTDS*/ "These chats and channels stay archived when new messages are received. To change this experience, go to {settingsPath} on your phone.",
                [s._param("settingsPath", q)],
              )
            : s._(
                /*BTDS*/ "These chats stay archived when new messages are received. To change this experience, go to {settingsPath} on your phone.",
                [s._param("settingsPath", q)],
              ),
          V = W
            ? s._(
                /*BTDS*/ "These chats and channels are unarchived when new messages are received. To change this experience, go to {settingsPath} on your phone.",
                [s._param("settingsPath", q)],
              )
            : s._(
                /*BTDS*/ "These chats are unarchived when new messages are received. To change this experience, go to {settingsPath} on your phone.",
                [s._param("settingsPath", q)],
              );
        O = m.jsx("div", {
          className: "x1xnncb0",
          children: m.jsx(
            "div",
            babelHelpers.extends(
              {},
              (c || (c = r("stylex"))).props(
                o("WAWebUISpacing").uiPadding.horiz20,
                o("WAWebUISpacing").uiPadding.bottom10,
              ),
              {
                children: m.jsx("div", {
                  className: "x1yc453h",
                  children: m.jsx(o("WAWebText.react").WAWebTextMuted, {
                    as: "p",
                    children: p ? U : V,
                  }),
                }),
              },
            ),
          ),
        });
      }
      if (E.length > 0) {
        var H = { down: M, up: w };
        B = m.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
          ref: R,
          handlers: H,
          children: [
            O,
            m.jsx("div", {
              className: "x889kno x1xnnf8n x1a8lsjc x106a9eq",
              children: m.jsx("div", { className: "xjm9jq1 xkh2ocl x1uew315" }),
            }),
            m.jsx(o("WAWebFlatList.react").FlatList, {
              className_DONOTUSE: "x6ikm8r x10wlt62",
              data: F(),
              testid: void 0,
              flatListController: v.current,
              direction: "vertical",
              renderItem: function (t) {
                return m.jsx(C, {
                  chat: t.chat,
                  mode: o("WAWebChat.react").Mode.LAST,
                  active: S.current,
                  onClick: N,
                  hideArchivedIcon: b.enabled,
                  hideMuteIcon: T(),
                  hideMuteOption: T(),
                  ephemeralIcon: "chat-list",
                  showCommunityInfo: !0,
                });
              },
            }),
          ],
        });
      } else B = m.jsx(o("WAWebEmptyState.react").Archived, {});
      var G = b.enabled
          ? s._(/*BTDS*/ "Archived")
          : s._(/*BTDS*/ "Archived chats"),
        z = o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL;
      return (
        r("WAWebEnvironment").isWindows === !0 &&
          (z = o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB),
        m.jsxs(r("WAWebDrawer.react"), {
          ref: n,
          theme: "archived",
          tsNavigationData: y,
          children: [
            m.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title: G,
              onBack: P,
              type: z,
              menu: null,
            }),
            m.jsx(r("WAWebDrawerBody.react"), {
              flatListControllers: [v.current],
              children: B,
            }),
          ],
        })
      );
    }
    ((b.displayName = b.name + " [from " + i.id + "]"), (l.default = b));
  },
  226,
);
