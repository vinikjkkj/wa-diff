__d(
  "WAWebChatContextMenu",
  [
    "fbt",
    "WAWebBizGatingUtils",
    "WAWebChatAssignmentUtils",
    "WAWebChatAssignmentWithContainerIcon.react",
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
    "WAWebCloseCircleRefreshedIcon.react",
    "WAWebCmd",
    "WAWebDropdownItemSeparator.react",
    "WAWebInboxFiltersGatingUtils",
    "WAWebL10NIsUsingSupportedBritishEnglishLocale",
    "WAWebListsGatingUtils",
    "WAWebUnfavoriteRefreshedIcon.react",
    "WAWebWamEnumFavoritesUpdateEntryPoint",
    "WDSIconIcDoNotDisturbOn.react",
    "WDSIconIcFavorite.react",
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
      o("WAWebChatAssignmentUtils").canAssignChats() &&
        p.push(
          u.jsx(r("WDSMenuItem.react"), {
            Icon: o("WAWebChatAssignmentWithContainerIcon.react")
              .ChatAssignmentWithContainerIcon,
            title: s._(/*BTDS*/ "Assign chat"),
            onPress: t,
            testid: void 0,
          }),
        );
      var _ = o("WAWebListsGatingUtils").isListsEnabled();
      if (
        (o("WAWebBizGatingUtils").canEditLabelAssociation() &&
          !_ &&
          p.push(
            u.jsx(
              o("WAWebChatContextMenuItemEditLabel.react")
                .WAWebChatContextMenuItemEditLabel,
              {
                chat: i,
                searchQuery: d,
                selectableState: m,
                multiSelection: l,
                onStartMultiSelect: c,
              },
            ),
          ),
        p.push(
          u.jsx(r("WAWebChatContextMenuItemMarkUnread.react"), { chat: i }),
        ),
        i.canToggleFavorite() &&
          o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled())
      ) {
        var f, g;
        (i.isFavorite
          ? ((g = o(
              "WAWebL10NIsUsingSupportedBritishEnglishLocale",
            ).isUsingSupportedBritishEnglishLocale()
              ? s._(/*BTDS*/ "Remove from favourites")
              : s._(/*BTDS*/ "Remove from Favorites")),
            (f = o(
              "WAWebUnfavoriteRefreshedIcon.react",
            ).UnfavoriteRefreshedIcon))
          : ((g = o(
              "WAWebL10NIsUsingSupportedBritishEnglishLocale",
            ).isUsingSupportedBritishEnglishLocale()
              ? s._(/*BTDS*/ "Add to favourites")
              : s._(/*BTDS*/ "Add to Favorites")),
            (f = r("WDSIconIcFavorite.react"))),
          p.push(
            u.jsx(
              r("WDSMenuItem.react"),
              {
                Icon: f,
                title: g,
                onPress: function () {
                  return o("WAWebCmd").Cmd.favoriteChat(
                    i,
                    !i.isFavorite,
                    o("WAWebWamEnumFavoritesUpdateEntryPoint")
                      .FAVORITES_UPDATE_ENTRY_POINT.CHAT_HEADER_CONTEXT_MENU,
                  );
                },
                testid: void 0,
              },
              "favorite",
            ),
          ));
      }
      if (
        (i.active &&
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
                testid: void 0,
                Icon: o("WAWebCloseCircleRefreshedIcon.react")
                  .CloseCircleRefreshedIcon,
              },
              "close-chat",
            ),
          ),
        _)
      ) {
        var h = function () {
          o("WAWebChatContextMenuItemEditLabel.react").handleLabelMenuItemClick(
            {
              chat: i,
              multiSelection: l,
              onStartMultiSelect: c,
              searchQuery: d,
              selectableState: m,
            },
          );
        };
        p.push(
          u.jsx(r("WAWebChatContextMenuItemEditList.react"), {
            chat: i,
            displayContext: "chat-list",
            onSMBLabelMenuItemClick: h,
          }),
        );
      }
      (p.push(u.jsx(r("WAWebDropdownItemSeparator.react"), {})),
        i.id.isBot() ||
          p.push(u.jsx(r("WAWebChatContextMenuItemBlock.react"), { chat: i })));
      var y = s._(/*BTDS*/ "Clear chat");
      return (
        p.push(
          u.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcDoNotDisturbOn.react"),
              title: y,
              onPress: function () {
                return o("WAWebCmd").Cmd.clearChat(i);
              },
              testid: void 0,
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
