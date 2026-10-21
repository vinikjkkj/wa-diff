__d(
  "WAWebChatContextMenu",
  [
    "fbt",
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
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n = o("react-compiler-runtime").c(3),
        a = (t = e.testid) != null ? t : "remove_favorite_icon",
        i;
      return (
        n[0] !== e || n[1] !== a
          ? ((i = u.jsx(
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
    function d(e) {
      var t = e.assignChat,
        a = e.cellRef,
        i = e.chat,
        l = e.chatListIndex,
        d = e.multiSelection,
        m = e.onStartMultiSelect,
        p = e.searchQuery,
        _ = e.selectableState,
        f = o("WAWebMetaAiChatActionLogger").getMetaAiChatListRow(p, l),
        g = [
          u.jsx(
            r("WAWebChatContextMenuItemAddContact.react"),
            { chatId: i.id },
            "AddContact",
          ),
          u.jsx(
            r("WAWebChatContextMenuItemArchive.react"),
            { chatId: i.id, metaAiChatListRow: f },
            "Archive",
          ),
          u.jsx(
            r("WAWebChatContextMenuItemLock.react"),
            { chatId: i.id },
            "Lock",
          ),
          u.jsx(
            r("WAWebChatContextMenuItemMute.react"),
            { chatId: i.id },
            "Mute",
          ),
          u.jsx(
            r("WAWebChatContextMenuItemPin.react"),
            { chatId: i.id, cellRef: a, metaAiChatListRow: f },
            "Pin",
          ),
        ];
      if (
        (o("WAWebChatAssignmentUtils").canAssignChats() &&
          g.push(
            u.jsx(r("WDSMenuItem.react"), {
              Icon: r("WDSIconWdsIcTransferOwnership.react"),
              title: s._(/*BTDS*/ "Assign chat"),
              onPress: t,
              testid: "mi-assign-chat",
            }),
          ),
        g.push(
          u.jsx(r("WAWebChatContextMenuItemMarkUnread.react"), {
            chatId: i.id,
          }),
        ),
        o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled())
      ) {
        var h, y;
        (i.isFavorite
          ? ((y = o(
              "WAWebL10NIsUsingSupportedBritishEnglishLocale",
            ).isUsingSupportedBritishEnglishLocale()
              ? s._(/*BTDS*/ "Remove from favourites")
              : s._(/*BTDS*/ "Remove from Favorites")),
            (h = c))
          : ((y = o(
              "WAWebL10NIsUsingSupportedBritishEnglishLocale",
            ).isUsingSupportedBritishEnglishLocale()
              ? s._(/*BTDS*/ "Add to favourites")
              : s._(/*BTDS*/ "Add to Favorites")),
            (h = r("WDSIconIcFavorite.react"))),
          g.push(
            u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: h,
                title: y,
                onPress: function () {
                  return o("WAWebCmd").Cmd.favoriteChat(
                    i,
                    !i.isFavorite,
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
      i.active &&
        (n("cr:23046") == null
          ? void 0
          : n("cr:23046").isWindowsHybridEnabled()) === !0 &&
        g.push(
          u.jsx(
            r("WDSMenuItem.react"),
            {
              title: s._(/*BTDS*/ "Close chat"),
              onPress: function () {
                return o("WAWebCmd").Cmd.closeChat(i);
              },
              testid: "mi-close-chat",
              Icon: r("WDSIconIcCancel.react"),
            },
            "close-chat",
          ),
        );
      var C = function () {
        o("WAWebChatContextMenuItemEditLabel.react").handleLabelMenuItemClick({
          chat: i,
          multiSelection: d,
          onStartMultiSelect: m,
          searchQuery: p,
          selectableState: _,
        });
      };
      (g.push(
        u.jsx(r("WAWebChatContextMenuItemEditList.react"), {
          chat: i,
          displayContext: "chat-list",
          onSMBLabelMenuItemClick: C,
        }),
      ),
        g.push(u.jsx(r("WAWebDropdownItemSeparator.react"), {})),
        i.id.isBot() ||
          g.push(
            u.jsx(r("WAWebChatContextMenuItemBlock.react"), { chatId: i.id }),
          ));
      var b = s._(/*BTDS*/ "Clear chat");
      return (
        g.push(
          u.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcDoNotDisturbOn.react"),
              title: b,
              onPress: function () {
                return o("WAWebCmd").Cmd.clearChat(i, void 0, f);
              },
              testid: "mi-clear",
              destructive: !0,
            },
            "clear",
          ),
        ),
        g.push(
          u.jsx(
            r("WAWebChatContextMenuItemDelete.react"),
            { chat: i, metaAiChatListRow: f },
            "Delete",
          ),
        ),
        g.push.apply(
          g,
          o("WAWebChatCellDebugMenuItems.react").getWAWebChatCellDebugMenuItems(
            i,
          ),
        ),
        g
      );
    }
    l.getChatContextMenuItems = d;
  },
  226,
);
