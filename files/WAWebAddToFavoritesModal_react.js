__d(
  "WAWebAddToFavoritesModal.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebAddToFavoritesAction",
    "WAWebFavoriteCollection",
    "WAWebNoop",
    "WAWebSelectModal.react",
    "WAWebSelectModalFooter.react",
    "WAWebWamEnumFavoritesUpdateEntryPoint",
    "WDSBanner.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n = e.onClose;
      function a(e) {
        var t = e.selectedItems,
          a = t;
        (o("WAWebAddToFavoritesAction")
          .addToFavoritesAction(
            a.map(function (e) {
              return e.id;
            }),
            {
              entryPoint: o("WAWebWamEnumFavoritesUpdateEntryPoint")
                .FAVORITES_UPDATE_ENTRY_POINT.FILTER_EMPTY_STATE_ACTION,
            },
          )
          .catch(r("WAWebNoop")),
          n());
      }
      function i(e) {
        return !e.isFavorite && e.canToggleFavorite();
      }
      function l(e) {
        return !e.isFavorite && e.canToggleFavorite();
      }
      var c =
          (t = o("WAWebABProps").getABPropConfigValue("favorites_limit")) !=
          null
            ? t
            : 100,
        d = o("WAWebFavoriteCollection").FavoriteCollection.length,
        m = Math.max(0, c - d),
        p = s._(
          /*BTDS*/ "You can add up to {favorites_limit} people or groups to favorites",
          [s._param("favorites_limit", c)],
        ),
        _ = u.jsx("div", {
          className: "x1x7fbuw",
          children: u.jsx("div", {
            className: "x1380le5 x14mko6t xefnzgg x1uvdrpn",
            children: u.jsx(r("WDSBanner.react"), {
              type: "default",
              body: s._(
                /*BTDS*/ "Add as many people or groups as you want. Only you can see who's included on your lists.",
              ),
            }),
          }),
        });
      return u.jsx(o("WAWebSelectModal.react").SelectModal, {
        listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
        title: s._(/*BTDS*/ "Add to Favorites"),
        ephemeralIcon: "chat-list",
        onConfirm: a,
        maxItems: m,
        maxItemsExceedErrorMsg: p,
        chatFilter: i,
        contactFilter: l,
        shouldShowSelectedChatList: !0,
        shouldShowSelectionSummary: !1,
        singleSelectionFooterType: o("WAWebSelectModalFooter.react").FooterType
          .CONFIRM,
        multipleSelectionFooterType: o("WAWebSelectModalFooter.react")
          .FooterType.CONFIRM,
        customHeader: _,
        hideCustomHeaderWhenSelected: !0,
        tsNavigationData: { surface: "unknown", viewName: "add-to-favorites" },
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
