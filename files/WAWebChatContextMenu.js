__d(
  "WAWebChatContextMenu",
  [
    "fbt",
    "WALogger",
    "WAWebChatAssignmentUtils",
    "WAWebChatCellDebugMenuItems.react",
    "WAWebChatContextMenuItemAddContact.react",
    "WAWebChatContextMenuItemArchive.react",
    "WAWebChatContextMenuItemBlock.react",
    "WAWebChatContextMenuItemDelete.react",
    "WAWebChatContextMenuItemEditLabel.react",
    "WAWebChatContextMenuItemEditList.react",
    "WAWebChatContextMenuItemLock.react",
    "WAWebChatContextMenuItemMarkUnread.react",
    "WAWebChatContextMenuItemMute.react",
    "WAWebChatContextMenuItemPin.react",
    "WAWebCmd",
    "WAWebDropdownItemSeparator.react",
    "WAWebGetMaybeChatById",
    "WAWebInboxFiltersGatingUtils",
    "WAWebL10NIsUsingSupportedBritishEnglishLocale",
    "WAWebMetaAiChatActionLogger",
    "WAWebWamEnumFavoritesUpdateEntryPoint",
    "WDSIconIcCancel.react",
    "WDSIconIcDoNotDisturbOn.react",
    "WDSIconIcFavorite.react",
    "WDSIconIcUnfavourite.react",
    "WDSIconWdsIcTransferOwnership.react",
    "WDSMenuItem.react",
    "cr:23046",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p = m || (m = o("react"));
    function _(e) {
      var t,
        n = o("react-compiler-runtime").c(3),
        a = (t = e.testid) != null ? t : "remove_favorite_icon",
        i;
      return (
        n[0] !== e || n[1] !== a
          ? ((i = p.jsx(
              r("WDSIconIcUnfavourite.react"),
              babelHelpers.extends({}, e, { testid: a }),
            )),
            (n[0] = e),
            (n[1] = a),
            (n[2] = i))
          : (i = n[2]),
        i
      );
    }
    function f(t) {
      var a = t.active,
        i = t.assignChat,
        l = t.cellRef,
        m = t.chatId,
        f = t.chatListIndex,
        g = t.groupMetadata,
        h = t.isCAG,
        y = t.isFavorite,
        C = t.kind,
        b = t.multiSelection,
        v = t.onStartMultiSelect,
        S = t.searchQuery,
        R = t.selectableState,
        L = o("WAWebMetaAiChatActionLogger").getMetaAiChatListRow(S, f),
        E = [
          p.jsx(
            r("WAWebChatContextMenuItemAddContact.react"),
            { chatId: m },
            "AddContact",
          ),
          p.jsx(
            r("WAWebChatContextMenuItemArchive.react"),
            { chatId: m, metaAiChatListRow: L },
            "Archive",
          ),
          p.jsx(r("WAWebChatContextMenuItemLock.react"), { chatId: m }, "Lock"),
          p.jsx(r("WAWebChatContextMenuItemMute.react"), { chatId: m }, "Mute"),
          p.jsx(
            r("WAWebChatContextMenuItemPin.react"),
            { chatId: m, cellRef: l, metaAiChatListRow: L },
            "Pin",
          ),
        ];
      if (
        (o("WAWebChatAssignmentUtils").canAssignChats() &&
          E.push(
            p.jsx(r("WDSMenuItem.react"), {
              Icon: r("WDSIconWdsIcTransferOwnership.react"),
              title: s._(/*BTDS*/ "Assign chat"),
              onPress: i,
              testid: "mi-assign-chat",
            }),
          ),
        E.push(
          p.jsx(r("WAWebChatContextMenuItemMarkUnread.react"), { chatId: m }),
        ),
        o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled())
      ) {
        var k, I;
        (y
          ? ((I = o(
              "WAWebL10NIsUsingSupportedBritishEnglishLocale",
            ).isUsingSupportedBritishEnglishLocale()
              ? s._(/*BTDS*/ "Remove from favourites")
              : s._(/*BTDS*/ "Remove from Favorites")),
            (k = _))
          : ((I = o(
              "WAWebL10NIsUsingSupportedBritishEnglishLocale",
            ).isUsingSupportedBritishEnglishLocale()
              ? s._(/*BTDS*/ "Add to favourites")
              : s._(/*BTDS*/ "Add to Favorites")),
            (k = r("WDSIconIcFavorite.react"))),
          E.push(
            p.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: k,
                title: I,
                onPress: function () {
                  var t = o("WAWebGetMaybeChatById").getMaybeChatById(m);
                  if (t == null) {
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[chat-context-menu] favorite skipped, chat left the collection",
                        ])),
                    );
                    return;
                  }
                  o("WAWebCmd").Cmd.favoriteChat(
                    t,
                    !t.isFavorite,
                    o("WAWebWamEnumFavoritesUpdateEntryPoint")
                      .FAVORITES_UPDATE_ENTRY_POINT.CHAT_HEADER_CONTEXT_MENU,
                  );
                },
                testid: "mi-favorite",
              },
              "favorite",
            ),
          ));
      }
      a &&
        (n("cr:23046") == null
          ? void 0
          : n("cr:23046").isWindowsHybridEnabled()) === !0 &&
        E.push(
          p.jsx(
            r("WDSMenuItem.react"),
            {
              title: s._(/*BTDS*/ "Close chat"),
              onPress: function () {
                var e = o("WAWebGetMaybeChatById").getMaybeChatById(m);
                if (e == null) {
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[chat-context-menu] close chat skipped, chat left the collection",
                      ])),
                  );
                  return;
                }
                o("WAWebCmd").Cmd.closeChat(e);
              },
              testid: "mi-close-chat",
              Icon: r("WDSIconIcCancel.react"),
            },
            "close-chat",
          ),
        );
      var T = function () {
        var e = o("WAWebGetMaybeChatById").getMaybeChatById(m);
        if (e == null) {
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[chat-context-menu] label chat skipped, chat left the collection",
              ])),
          );
          return;
        }
        o("WAWebChatContextMenuItemEditLabel.react").handleLabelMenuItemClick({
          chat: e,
          multiSelection: b,
          onStartMultiSelect: v,
          searchQuery: S,
          selectableState: R,
        });
      };
      (E.push(
        p.jsx(r("WAWebChatContextMenuItemEditList.react"), {
          chatId: m,
          displayContext: "chat-list",
          onSMBLabelMenuItemClick: T,
        }),
      ),
        E.push(p.jsx(r("WAWebDropdownItemSeparator.react"), {})),
        m.isBot() ||
          E.push(
            p.jsx(r("WAWebChatContextMenuItemBlock.react"), { chatId: m }),
          ));
      var D = s._(/*BTDS*/ "Clear chat");
      return (
        E.push(
          p.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcDoNotDisturbOn.react"),
              title: D,
              onPress: function () {
                var e = o("WAWebGetMaybeChatById").getMaybeChatById(m);
                if (e == null) {
                  o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[chat-context-menu] clear chat skipped, chat left the collection",
                      ])),
                  );
                  return;
                }
                o("WAWebCmd").Cmd.clearChat(e, void 0, L);
              },
              testid: "mi-clear",
              destructive: !0,
            },
            "clear",
          ),
        ),
        E.push(
          p.jsx(
            r("WAWebChatContextMenuItemDelete.react"),
            { chatId: m, metaAiChatListRow: L },
            "Delete",
          ),
        ),
        E.push.apply(
          E,
          o(
            "WAWebChatCellDebugMenuItems.react",
          ).getWAWebChatCellDebugMenuItemsFor({
            chatId: m,
            groupMetadata: g,
            isCAG: h,
            kind: C,
          }),
        ),
        E
      );
    }
    l.getChatContextMenuItems = f;
  },
  226,
);
