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
    "react-compiler-runtime",
    "useWAWebChatValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.chat,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [
            o("WAWebFrontendChatGetters").getIsFavorite,
            o("WAWebChatGetters").getIsGroup,
          ]),
          (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebChatValues").useChatValues(n.id, a),
        l = i[0],
        c = i[1],
        d;
      if (l) {
        var m;
        (t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = o(
              "WAWebL10NIsUsingSupportedBritishEnglishLocale",
            ).isUsingSupportedBritishEnglishLocale()
              ? s._(/*BTDS*/ "Remove from favourites")
              : s._(/*BTDS*/ "Remove from Favorites")),
            (t[1] = m))
          : (m = t[1]),
          (d = m));
      } else {
        var p;
        (t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = o(
              "WAWebL10NIsUsingSupportedBritishEnglishLocale",
            ).isUsingSupportedBritishEnglishLocale()
              ? s._(/*BTDS*/ "Add to favourites")
              : s._(/*BTDS*/ "Add to Favorites")),
            (t[2] = p))
          : (p = t[2]),
          (d = p));
      }
      var _;
      if (t[3] !== n || t[4] !== l || t[5] !== c) {
        var f = function () {
          o("WAWebCmd").Cmd.favoriteChat(
            n,
            !l,
            c
              ? o("WAWebWamEnumFavoritesUpdateEntryPoint")
                  .FAVORITES_UPDATE_ENTRY_POINT.GROUP_INFO
              : o("WAWebWamEnumFavoritesUpdateEntryPoint")
                  .FAVORITES_UPDATE_ENTRY_POINT.CONTACT_INFO,
          );
        };
        ((_ = { testid: "li-favorite", onClick: f }),
          (t[3] = n),
          (t[4] = l),
          (t[5] = c),
          (t[6] = _));
      } else _ = t[6];
      var g = _,
        h;
      t[7] !== l
        ? ((h = l
            ? u.jsx(
                o("WAWebUnfavoriteRefreshedIcon.react").UnfavoriteRefreshedIcon,
                {},
              )
            : u.jsx(
                o("WAWebFavoriteRefreshedIcon.react").FavoriteRefreshedIcon,
                {},
              )),
          (t[7] = l),
          (t[8] = h))
        : (h = t[8]);
      var y;
      if (t[9] !== d || t[10] !== g || t[11] !== h) {
        var C = u.jsx(
          r("WAWebDrawerButtonRefreshed.react"),
          babelHelpers.extends({}, g, { icon: h, children: d }),
        );
        ((y = u.jsx(
          o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection,
          { children: C },
        )),
          (t[9] = d),
          (t[10] = g),
          (t[11] = h),
          (t[12] = y));
      } else y = t[12];
      return y;
    }
    l.default = c;
  },
  226,
);
