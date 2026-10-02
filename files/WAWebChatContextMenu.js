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
    "WAWebUnfavoriteRefreshedIcon.react",
    "WAWebWamEnumFavoritesUpdateEntryPoint",
    "WDSIconIcCancel.react",
    "WDSIconIcDoNotDisturbOn.react",
    "WDSIconIcFavorite.react",
    "WDSIconWdsIcTransferOwnership.react",
    "WDSMenuItem.react",
    "cr:23046",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.assignChat,
        a = e.cellRef,
        i = e.chat,
        l = e.multiSelection,
        c = e.onStartMultiSelect,
        d = e.searchQuery,
        m = e.selectableState,
        p = [
          u.jsx(
            r("WAWebChatContextMenuItemAddContact.react"),
            { chat: i },
            "AddContact",
          ),
          u.jsx(
            r("WAWebChatContextMenuItemArchive.react"),
            { chat: i },
            "Archive",
          ),
          u.jsx(r("WAWebChatContextMenuItemLock.react"), { chat: i }, "Lock"),
          u.jsx(r("WAWebChatContextMenuItemMute.react"), { chat: i }, "Mute"),
          u.jsx(
            r("WAWebChatContextMenuItemPin.react"),
            { chat: i, cellRef: a },
            "Pin",
          ),
        ];
      if (
        (o("WAWebChatAssignmentUtils").canAssignChats() &&
          p.push(
            u.jsx(r("WDSMenuItem.react"), {
              Icon: r("WDSIconWdsIcTransferOwnership.react"),
              title: s._(/*BTDS*/ "Assign chat"),
              onPress: t,
              testid: "mi-assign-chat",
            }),
          ),
        p.push(
          u.jsx(r("WAWebChatContextMenuItemMarkUnread.react"), { chat: i }),
        ),
        i.canToggleFavorite() &&
          o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled())
      ) {
        var _, f;
        (i.isFavorite
          ? ((f = o(
              "WAWebL10NIsUsingSupportedBritishEnglishLocale",
            ).isUsingSupportedBritishEnglishLocale()
              ? s._(/*BTDS*/ "Remove from favourites")
              : s._(/*BTDS*/ "Remove from Favorites")),
            (_ = o(
              "WAWebUnfavoriteRefreshedIcon.react",
            ).UnfavoriteRefreshedIcon))
          : ((f = o(
              "WAWebL10NIsUsingSupportedBritishEnglishLocale",
            ).isUsingSupportedBritishEnglishLocale()
              ? s._(/*BTDS*/ "Add to favourites")
              : s._(/*BTDS*/ "Add to Favorites")),
            (_ = r("WDSIconIcFavorite.react"))),
          p.push(
            u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: _,
                title: f,
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
        p.push(
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
      var g = function () {
        o("WAWebChatContextMenuItemEditLabel.react").handleLabelMenuItemClick({
          chat: i,
          multiSelection: l,
          onStartMultiSelect: c,
          searchQuery: d,
          selectableState: m,
        });
      };
      (p.push(
        u.jsx(r("WAWebChatContextMenuItemEditList.react"), {
          chat: i,
          displayContext: "chat-list",
          onSMBLabelMenuItemClick: g,
        }),
      ),
        p.push(u.jsx(r("WAWebDropdownItemSeparator.react"), {})),
        i.id.isBot() ||
          p.push(u.jsx(r("WAWebChatContextMenuItemBlock.react"), { chat: i })));
      var h = s._(/*BTDS*/ "Clear chat");
      return (
        p.push(
          u.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcDoNotDisturbOn.react"),
              title: h,
              onPress: function () {
                return o("WAWebCmd").Cmd.clearChat(i);
              },
              testid: "mi-clear",
              destructive: !0,
            },
            "clear",
          ),
        ),
        p.push(
          u.jsx(
            r("WAWebChatContextMenuItemDelete.react"),
            { chat: i },
            "Delete",
          ),
        ),
        p.push.apply(
          p,
          o("WAWebChatCellDebugMenuItems.react").getWAWebChatCellDebugMenuItems(
            i,
          ),
        ),
        p
      );
    }
    l.getChatContextMenuItems = c;
  },
  226,
);
