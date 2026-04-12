__d(
  "WAWebLockedChatsDrawer.react",
  [
    "fbt",
    "WAWebChatCellV2.react",
    "WAWebChatCollection",
    "WAWebChatContextMenuItemBlock.react",
    "WAWebChatContextMenuItemDelete.react",
    "WAWebChatContextMenuItemMarkUnread.react",
    "WAWebChatContextMenuItemMute.react",
    "WAWebChatContextMenuItemUnlock.react",
    "WAWebChatListMenuItem.react",
    "WAWebChatLockWAMUtils",
    "WAWebChatSearchModel",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebCopyToClipboard",
    "WAWebDevOnlyBadge.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebDropdownItem.react",
    "WAWebDropdownItemSeparator.react",
    "WAWebEmptyState.react",
    "WAWebFlatList.react",
    "WAWebFlatListContainer.react",
    "WAWebFlatListController",
    "WAWebFocusTracer",
    "WAWebKeyboardHotKeys.react",
    "WAWebMiscGatingUtils",
    "WAWebPrivacyNarrativeE2EMessage.react",
    "WAWebSearchInput",
    "WAWebStateUtils",
    "WAWebTabOrder",
    "WAWebWamEnumChatLockActionType",
    "WAWebWamEnumLandingSurface",
    "gkx",
    "react",
    "useWAWebChatLockRestriction",
    "useWAWebListener",
    "useWAWebOpenChat",
    "useWAWebSearchModel",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useMemo,
      p = c.useRef,
      _ = c.useState,
      f = { surface: "settings-drawer" };
    function g(e) {
      var t = o("WAWebStateUtils").unproxy(e),
        n = [
          u.jsx(
            r("WAWebChatContextMenuItemUnlock.react"),
            { chat: t },
            "unlock",
          ),
          u.jsx(
            r("WAWebChatContextMenuItemDelete.react"),
            { chat: t },
            "delete",
          ),
          u.jsx(r("WAWebChatContextMenuItemMute.react"), { chat: t }, "mute"),
          u.jsx(r("WAWebChatContextMenuItemBlock.react"), { chat: t }, "block"),
          u.jsx(
            r("WAWebChatContextMenuItemMarkUnread.react"),
            { chat: t },
            "mark_unread",
          ),
        ];
      return (
        r("gkx")("26258") ||
          (n.push(
            u.jsx(r("WAWebDropdownItemSeparator.react"), {}, "separator"),
          ),
          n.push(
            u.jsx(
              o("WAWebDropdownItem.react").DropdownItem,
              {
                testid: void 0,
                action: function () {
                  o("WAWebCopyToClipboard").copyTextToClipboard(h(t));
                },
                children: u.jsx(o("WAWebDevOnlyBadge.react").DevOnlyBadge, {
                  label: "Copy Chat ID",
                }),
              },
              "copy_id",
            ),
          )),
        n
      );
    }
    var h = function (t) {
        return t.id.toString();
      },
      y = function (t, n) {
        return t != null && n instanceof HTMLElement;
      };
    function C(e) {
      var t,
        n = e.entryPoint,
        a = e.focusOnMount,
        i = a === void 0 ? !0 : a,
        l = e.onClose,
        c = e.ref,
        C = e.unlockEntryPoint,
        b = o("useWAWebSearchModel").useSearchModel(function () {
          return new (o("WAWebChatSearchModel").LockedChatSearch)();
        }),
        v = b.query,
        S = b.results,
        R = o("useWAWebOpenChat").useOpenChat(),
        L = R.openedChat,
        E = _(!1),
        k = E[0],
        I = E[1],
        T = S == null ? void 0 : S.query.searchText,
        D = T != null && T !== "";
      o("useWAWebListener").useListener(
        o("WAWebChatCollection").ChatCollection,
        "change add remove",
        function () {
          v(T != null ? T : "", S == null ? void 0 : S.query.options);
        },
      );
      var x = o("useWAWebChatLockRestriction").useChatLockRestriction({
        id: "locked-chats-drawer",
        condition: "always",
        entryPoint: n,
        unlockEntryPoint: C,
        landingSurface: o("WAWebWamEnumLandingSurface").LANDING_SURFACE.FOLDER,
      });
      d(
        function () {
          x &&
            o("WAWebChatLockWAMUtils").chatLockActionWAMEvent({
              actionEntryPoint: n,
              chatLockActionType: o("WAWebWamEnumChatLockActionType")
                .CHAT_LOCK_ACTION_TYPE.FOLDER_OPEN,
            });
        },
        [x, n],
      );
      var $ =
          (t =
            S == null
              ? void 0
              : S.results.map(function (e) {
                  return babelHelpers.extends(
                    {},
                    o("WAWebChatListMenuItem.react").getFlatListConfigFromChat(
                      e.data,
                      { showCommunityInfo: !0 },
                    ),
                  );
                })) != null
            ? t
            : [],
        P = s._(/*BTDS*/ "Search locked chats"),
        N = o("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled()
          ? u.jsx(
              o("WAWebPrivacyNarrativeE2EMessage.react").E2eMessageChatList,
              { tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_FOOTER },
            )
          : null,
        M = p(null),
        w = p(null),
        A = p(new Map()),
        F = function (t, n) {
          t ? A.current.set(n, t) : A.current.delete(n);
        },
        O = _({ index: 0, id: "" }),
        B = O[0],
        W = O[1],
        q = function (t) {
          if ($.length !== 0) {
            var e = B.index + (t === "up" ? -1 : 1);
            e >= $.length ? (e = 0) : e < 0 && (e = $.length - 1);
            var n = $[e];
            if (n) {
              var r = h(n.chat);
              (W({ id: r, index: e }), V == null || V(r));
            }
          }
        },
        U = {
          up: function () {
            return q("up");
          },
          down: function () {
            return q("down");
          },
          enter: function (t) {
            var e = t.target;
            if (!(B.index < 0)) {
              var n = A.current.get(B.id);
              if (n === e) {
                var r = $[B.index].chat;
                r &&
                  o("WAWebCmd")
                    .Cmd.openChatBottom({ chat: r })
                    .then(function () {
                      window.setTimeout(function () {
                        o("WAWebComposeBoxActions").ComposeBoxActions.focus(r);
                      }, 200);
                    });
              }
            }
          },
        },
        V = function (t) {
          if (t != null) {
            var e = A.current.get(t);
            e && r("WAWebFocusTracer").focus(e);
          }
        },
        H = function (t) {
          var e = M.current,
            n = t.relatedTarget;
          !y(e, n) ||
            (e != null && e.contains(n)) ||
            k ||
            W({ index: -1, id: "" });
        },
        G = function (t) {
          var e = t.target,
            n = M.current;
          if (!(!y(n, e) || e !== n)) {
            var r = 0;
            if (L != null) {
              var o = $.findIndex(function (e) {
                return h(e.chat) === h(L);
              });
              o !== -1 && (r = o);
            }
            var a = $[r];
            if (a) {
              var i = h(a.chat);
              (W({ id: i, index: r }), V(i));
            }
          }
        },
        z = m(function () {
          return new (r("WAWebFlatListController"))();
        }, []);
      return u.jsxs(r("WAWebDrawer.react"), {
        ref: c,
        theme: "archived",
        testid: void 0,
        tsNavigationData: f,
        children: [
          u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "Locked chats"),
            onBack: l,
            type:
              l == null
                ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB
                : o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          }),
          u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsxs(o("WAWebSearchInput").DrawerSearchInput, {
              tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
              onSearch: v,
              focusOnMount: i,
              placeholder: P,
              children: [
                $.length === 0
                  ? u.jsx(o("WAWebEmptyState.react").Empty, {
                      title: D
                        ? s._(/*BTDS*/ "No locked chats found")
                        : s._(/*BTDS*/ "You have no locked chats"),
                    })
                  : u.jsx("div", {
                      "data-testid": void 0,
                      children: u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
                        ref: M,
                        handlers: U,
                        onFocus: G,
                        onBlur: H,
                        "data-tab": o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
                        children: u.jsx(r("WAWebFlatListContainer.react"), {
                          flatListControllers: [z],
                          className: "x1rife3k x1plvlek x1hm9lzh x1sa5p1d",
                          children: u.jsx(o("WAWebFlatList.react").FlatList, {
                            ref: w,
                            data: $,
                            renderItem: function (t) {
                              return u.jsx(
                                r("WAWebChatCellV2.react"),
                                {
                                  size: "large",
                                  ref: function (n) {
                                    F(n, h(t.chat));
                                  },
                                  onClick: function () {
                                    o("WAWebCmd").Cmd.openChatBottom({
                                      chat: t.chat,
                                    });
                                  },
                                  active: h(t.chat) === B.id,
                                  applyFocusStyles: !1,
                                  chat: t.chat,
                                  contextMenuItems: g(t.chat),
                                  forceActive: L != null && h(L) === h(t.chat),
                                  showCommunityInfo: !0,
                                  onContextMenuToggle: I,
                                },
                                t.itemKey,
                              );
                            },
                            direction: "vertical",
                            flatListController: z,
                            disablePointerEventsOnScroll: !1,
                          }),
                        }),
                      }),
                    }),
                N,
              ],
            }),
          }),
        ],
      });
    }
    ((C.displayName = C.name + " [from " + i.id + "]"), (l.default = C));
  },
  226,
);
