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
        l = e.multiSelection,
        d = e.onStartMultiSelect,
        m = e.searchQuery,
        p = e.selectableState,
        _ = [
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
          _.push(
            u.jsx(r("WDSMenuItem.react"), {
              Icon: r("WDSIconWdsIcTransferOwnership.react"),
              title: s._(/*BTDS*/ "Assign chat"),
              onPress: t,
              testid: "mi-assign-chat",
            }),
          ),
        _.push(
          u.jsx(r("WAWebChatContextMenuItemMarkUnread.react"), { chat: i }),
        ),
        o("WAWebInboxFiltersGatingUtils").inboxFavoritesEnabled())
      ) {
        var f, g;
        (i.isFavorite
          ? ((g = o(
              "WAWebL10NIsUsingSupportedBritishEnglishLocale",
            ).isUsingSupportedBritishEnglishLocale()
              ? s._(/*BTDS*/ "Remove from favourites")
              : s._(/*BTDS*/ "Remove from Favorites")),
            (f = c))
          : ((g = o(
              "WAWebL10NIsUsingSupportedBritishEnglishLocale",
            ).isUsingSupportedBritishEnglishLocale()
              ? s._(/*BTDS*/ "Add to favourites")
              : s._(/*BTDS*/ "Add to Favorites")),
            (f = r("WDSIconIcFavorite.react"))),
          _.push(
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
        _.push(
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
      var h = function () {
        o("WAWebChatContextMenuItemEditLabel.react").handleLabelMenuItemClick({
          chat: i,
          multiSelection: l,
          onStartMultiSelect: d,
          searchQuery: m,
          selectableState: p,
        });
      };
      (_.push(
        u.jsx(r("WAWebChatContextMenuItemEditList.react"), {
          chat: i,
          displayContext: "chat-list",
          onSMBLabelMenuItemClick: h,
        }),
      ),
        _.push(u.jsx(r("WAWebDropdownItemSeparator.react"), {})),
        i.id.isBot() ||
          _.push(u.jsx(r("WAWebChatContextMenuItemBlock.react"), { chat: i })));
      var y = s._(/*BTDS*/ "Clear chat");
      return (
        _.push(
          u.jsx(
            r("WDSMenuItem.react"),
            {
              Icon: r("WDSIconIcDoNotDisturbOn.react"),
              title: y,
              onPress: function () {
                return o("WAWebCmd").Cmd.clearChat(i);
              },
              testid: "mi-clear",
              destructive: !0,
            },
            "clear",
          ),
        ),
        _.push(
          u.jsx(
            r("WAWebChatContextMenuItemDelete.react"),
            { chat: i },
            "Delete",
          ),
        ),
        _.push.apply(
          _,
          o("WAWebChatCellDebugMenuItems.react").getWAWebChatCellDebugMenuItems(
            i,
          ),
        ),
        _
      );
    }
    l.getChatContextMenuItems = d;
  },
  226,
);
