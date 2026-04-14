__d(
  "WAWebChatInfoFavoritesSection.react",
  [
    "fbt",
    "WAWebChatGetters",
    "WAWebChatInfoDrawerSection.react",
    "WAWebCmd",
    "WAWebDrawerButtonRefreshed.react",
    "WAWebFavoriteRefreshedIcon.react",
    "WAWebFrontendChatGetters",
    "WAWebL10NIsUsingSupportedBritishEnglishLocale",
    "WAWebUnfavoriteRefreshedIcon.react",
    "WAWebWamEnumFavoritesUpdateEntryPoint",
    "react",
    "useWAWebChatValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.chat,
        n = o("useWAWebChatValues").useChatValues(t.id, [
          o("WAWebFrontendChatGetters").getIsFavorite,
          o("WAWebChatGetters").getIsGroup,
        ]),
        a = n[0],
        i = n[1],
        l;
      a
        ? (l = o(
            "WAWebL10NIsUsingSupportedBritishEnglishLocale",
          ).isUsingSupportedBritishEnglishLocale()
            ? s._(/*BTDS*/ "Remove from favourites")
            : s._(/*BTDS*/ "Remove from Favorites"))
        : (l = o(
            "WAWebL10NIsUsingSupportedBritishEnglishLocale",
          ).isUsingSupportedBritishEnglishLocale()
            ? s._(/*BTDS*/ "Add to favourites")
            : s._(/*BTDS*/ "Add to Favorites"));
      var c = function () {
          o("WAWebCmd").Cmd.favoriteChat(
            t,
            !a,
            i
              ? o("WAWebWamEnumFavoritesUpdateEntryPoint")
                  .FAVORITES_UPDATE_ENTRY_POINT.GROUP_INFO
              : o("WAWebWamEnumFavoritesUpdateEntryPoint")
                  .FAVORITES_UPDATE_ENTRY_POINT.CONTACT_INFO,
          );
        },
        d = { testid: "li-favorite", onClick: c },
        m = u.jsx(
          r("WAWebDrawerButtonRefreshed.react"),
          babelHelpers.extends({}, d, {
            icon: a
              ? u.jsx(
                  o("WAWebUnfavoriteRefreshedIcon.react")
                    .UnfavoriteRefreshedIcon,
                  {},
                )
              : u.jsx(
                  o("WAWebFavoriteRefreshedIcon.react").FavoriteRefreshedIcon,
                  {},
                ),
            children: l,
          }),
        );
      return u.jsx(
        o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection,
        { children: m },
      );
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
