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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(49),
        n = e.entryPoint,
        a = e.focusOnMount,
        i = e.onClose,
        l = e.ref,
        c = e.unlockEntryPoint,
        m = a === void 0 ? !0 : a,
        C = o("useWAWebSearchModel").useSearchModel(v),
        S = C.query,
        R = C.results,
        L = o("useWAWebOpenChat").useOpenChat(),
        E = L.openedChat,
        k = _(!1),
        I = k[0],
        T = k[1],
        D = R == null ? void 0 : R.query.searchText,
        x = D != null && D !== "",
        $;
      (t[0] !== D ||
      t[1] !== S ||
      t[2] !== (R == null ? void 0 : R.query.options)
        ? (($ = function () {
            S(D != null ? D : "", R == null ? void 0 : R.query.options);
          }),
          (t[0] = D),
          (t[1] = S),
          (t[2] = R == null ? void 0 : R.query.options),
          (t[3] = $))
        : ($ = t[3]),
        o("useWAWebListener").useListener(
          o("WAWebChatCollection").ChatCollection,
          "change add remove",
          $,
        ));
      var P;
      t[4] !== n || t[5] !== c
        ? ((P = {
            id: "locked-chats-drawer",
            condition: "always",
            entryPoint: n,
            unlockEntryPoint: c,
            landingSurface: o("WAWebWamEnumLandingSurface").LANDING_SURFACE
              .FOLDER,
          }),
          (t[4] = n),
          (t[5] = c),
          (t[6] = P))
        : (P = t[6]);
      var N = o("useWAWebChatLockRestriction").useChatLockRestriction(P),
        M,
        w;
      (t[7] !== n || t[8] !== N
        ? ((M = function () {
            N &&
              o("WAWebChatLockWAMUtils").chatLockActionWAMEvent({
                actionEntryPoint: n,
                chatLockActionType: o("WAWebWamEnumChatLockActionType")
                  .CHAT_LOCK_ACTION_TYPE.FOLDER_OPEN,
              });
          }),
          (w = [N, n]),
          (t[7] = n),
          (t[8] = N),
          (t[9] = M),
          (t[10] = w))
        : ((M = t[9]), (w = t[10])),
        d(M, w));
      var A;
      if (t[11] !== (R == null ? void 0 : R.results)) {
        var F;
        ((A = (F = R == null ? void 0 : R.results.map(b)) != null ? F : []),
          (t[11] = R == null ? void 0 : R.results),
          (t[12] = A));
      } else A = t[12];
      var O = A,
        B;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = s._(/*BTDS*/ "Search locked chats")), (t[13] = B))
        : (B = t[13]);
      var W = B,
        q;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = o("WAWebMiscGatingUtils").isPrivacyNarrativeV1Enabled()
            ? u.jsx(
                o("WAWebPrivacyNarrativeE2EMessage.react").E2eMessageChatList,
                { tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_FOOTER },
              )
            : null),
          (t[14] = q))
        : (q = t[14]);
      var U = q,
        V = p(null),
        H = p(null),
        G;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = new Map()), (t[15] = G))
        : (G = t[15]);
      var z = p(G),
        j;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = function (t, n) {
            t ? z.current.set(n, t) : z.current.delete(n);
          }),
          (t[16] = j))
        : (j = t[16]);
      var K = j,
        Q;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = { index: 0, id: "" }), (t[17] = Q))
        : (Q = t[17]);
      var X = _(Q),
        Y = X[0],
        J = X[1],
        Z,
        ee;
      if (t[18] !== Y || t[19] !== O) {
        var te = function (t) {
          if (O.length !== 0) {
            var e = Y.index + (t === "up" ? -1 : 1);
            e >= O.length ? (e = 0) : e < 0 && (e = O.length - 1);
            var n = O[e];
            if (n) {
              var r = h(n.chat);
              (J({ id: r, index: e }), Z == null || Z(r));
            }
          }
        };
        ((ee = {
          up: function () {
            return te("up");
          },
          down: function () {
            return te("down");
          },
          enter: function (t) {
            var e = t.target;
            if (!(Y.index < 0)) {
              var n = z.current.get(Y.id);
              if (n === e) {
                var r = O[Y.index].chat;
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
        }),
          (Z = function (t) {
            if (t != null) {
              var e = z.current.get(t);
              e && r("WAWebFocusTracer").focus(e);
            }
          }),
          (t[18] = Y),
          (t[19] = O),
          (t[20] = Z),
          (t[21] = ee));
      } else ((Z = t[20]), (ee = t[21]));
      var ne;
      t[22] !== I
        ? ((ne = function (t) {
            var e = V.current,
              n = t.relatedTarget;
            !y(e, n) ||
              (e != null && e.contains(n)) ||
              I ||
              J({ index: -1, id: "" });
          }),
          (t[22] = I),
          (t[23] = ne))
        : (ne = t[23]);
      var re = ne,
        oe;
      t[24] !== Z || t[25] !== O || t[26] !== E
        ? ((oe = function (t) {
            var e = t.target,
              n = V.current;
            if (!(!y(n, e) || e !== n)) {
              var r = 0;
              if (E != null) {
                var o = O.findIndex(function (e) {
                  return h(e.chat) === h(E);
                });
                o !== -1 && (r = o);
              }
              var a = O[r];
              if (a) {
                var i = h(a.chat);
                (J({ id: i, index: r }), Z(i));
              }
            }
          }),
          (t[24] = Z),
          (t[25] = O),
          (t[26] = E),
          (t[27] = oe))
        : (oe = t[27]);
      var ae = oe,
        ie;
      t[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((ie = new (r("WAWebFlatListController"))()), (t[28] = ie))
        : (ie = t[28]);
      var le = ie,
        se;
      t[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((se = s._(/*BTDS*/ "Locked chats")), (t[29] = se))
        : (se = t[29]);
      var ue =
          i == null
            ? o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.TAB
            : o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
        ce;
      t[30] !== i || t[31] !== ue
        ? ((ce = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: se,
            onBack: i,
            type: ue,
          })),
          (t[30] = i),
          (t[31] = ue),
          (t[32] = ce))
        : (ce = t[32]);
      var de;
      t[33] !== Y ||
      t[34] !== re ||
      t[35] !== ae ||
      t[36] !== ee ||
      t[37] !== x ||
      t[38] !== O ||
      t[39] !== E
        ? ((de =
            O.length === 0
              ? u.jsx(o("WAWebEmptyState.react").Empty, {
                  title: x
                    ? s._(/*BTDS*/ "No locked chats found")
                    : s._(/*BTDS*/ "You have no locked chats"),
                })
              : u.jsx("div", {
                  "data-testid": void 0,
                  children: u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
                    ref: V,
                    handlers: ee,
                    onFocus: ae,
                    onBlur: re,
                    "data-tab": o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
                    children: u.jsx(r("WAWebFlatListContainer.react"), {
                      flatListControllers: [le],
                      className: "x1rife3k x1plvlek x1hm9lzh x1sa5p1d",
                      children: u.jsx(o("WAWebFlatList.react").FlatList, {
                        ref: H,
                        data: O,
                        renderItem: function (t) {
                          return u.jsx(
                            r("WAWebChatCellV2.react"),
                            {
                              size: "large",
                              ref: function (n) {
                                K(n, h(t.chat));
                              },
                              onClick: function () {
                                o("WAWebCmd").Cmd.openChatBottom({
                                  chat: t.chat,
                                });
                              },
                              active: h(t.chat) === Y.id,
                              applyFocusStyles: !1,
                              chat: t.chat,
                              contextMenuItems: g(t.chat),
                              forceActive: E != null && h(E) === h(t.chat),
                              showCommunityInfo: !0,
                              onContextMenuToggle: T,
                            },
                            t.itemKey,
                          );
                        },
                        direction: "vertical",
                        flatListController: le,
                        disablePointerEventsOnScroll: !1,
                      }),
                    }),
                  }),
                })),
          (t[33] = Y),
          (t[34] = re),
          (t[35] = ae),
          (t[36] = ee),
          (t[37] = x),
          (t[38] = O),
          (t[39] = E),
          (t[40] = de))
        : (de = t[40]);
      var me;
      t[41] !== m || t[42] !== S || t[43] !== de
        ? ((me = u.jsx(r("WAWebDrawerBody.react"), {
            children: u.jsxs(o("WAWebSearchInput").DrawerSearchInput, {
              tabOrder: o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
              onSearch: S,
              focusOnMount: m,
              placeholder: W,
              children: [de, U],
            }),
          })),
          (t[41] = m),
          (t[42] = S),
          (t[43] = de),
          (t[44] = me))
        : (me = t[44]);
      var pe;
      return (
        t[45] !== l || t[46] !== ce || t[47] !== me
          ? ((pe = u.jsxs(r("WAWebDrawer.react"), {
              ref: l,
              theme: "archived",
              testid: void 0,
              tsNavigationData: f,
              children: [ce, me],
            })),
            (t[45] = l),
            (t[46] = ce),
            (t[47] = me),
            (t[48] = pe))
          : (pe = t[48]),
        pe
      );
    }
    function b(e) {
      return babelHelpers.extends(
        {},
        o("WAWebChatListMenuItem.react").getFlatListConfigFromChat(e.data, {
          showCommunityInfo: !0,
        }),
      );
    }
    function v() {
      return new (o("WAWebChatSearchModel").LockedChatSearch)();
    }
    l.default = C;
  },
  226,
);
