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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.onClose,
        a;
      t[0] !== n
        ? ((a = function (t) {
            var e = t.selectedItems,
              a = e;
            (o("WAWebAddToFavoritesAction")
              .addToFavoritesAction(a.map(d), {
                entryPoint: o("WAWebWamEnumFavoritesUpdateEntryPoint")
                  .FAVORITES_UPDATE_ENTRY_POINT.FILTER_EMPTY_STATE_ACTION,
              })
              .catch(r("WAWebNoop")),
              n());
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = function (t) {
            return !t.isFavorite && t.canToggleFavorite();
          }),
          (t[2] = l))
        : (l = t[2]);
      var c = l,
        m;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = function (t) {
            return !t.isFavorite && t.canToggleFavorite();
          }),
          (t[3] = m))
        : (m = t[3]);
      var p = m,
        _;
      if (t[4] === Symbol.for("react.memo_cache_sentinel")) {
        var f;
        ((_ =
          (f = o("WAWebABProps").getABPropConfigValue("favorites_limit")) !=
          null
            ? f
            : 100),
          (t[4] = _));
      } else _ = t[4];
      var g = _,
        h = o("WAWebFavoriteCollection").FavoriteCollection.length,
        y = Math.max(0, g - h),
        C;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(
            /*BTDS*/ "You can add up to {favorites_limit} people or groups to favorites",
            [s._param("favorites_limit", g)],
          )),
          (t[5] = C))
        : (C = t[5]);
      var b = C,
        v,
        S;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = { className: "x1x7fbuw" }),
          (S = { className: "x1380le5 x14mko6t xefnzgg x1uvdrpn" }),
          (t[6] = v),
          (t[7] = S))
        : ((v = t[6]), (S = t[7]));
      var R;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = u.jsx(
            "div",
            babelHelpers.extends({}, v, {
              children: u.jsx(
                "div",
                babelHelpers.extends({}, S, {
                  children: u.jsx(r("WDSBanner.react"), {
                    type: "default",
                    body: s._(
                      /*BTDS*/ "Add as many people or groups as you want. Only you can see who's included on your lists.",
                    ),
                  }),
                }),
              ),
            }),
          )),
          (t[8] = R))
        : (R = t[8]);
      var L = R,
        E;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = s._(/*BTDS*/ "Add to Favorites")), (t[9] = E))
        : (E = t[9]);
      var k;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = { surface: "unknown", viewName: "add-to-favorites" }),
          (t[10] = k))
        : (k = t[10]);
      var I;
      return (
        t[11] !== i
          ? ((I = u.jsx(o("WAWebSelectModal.react").SelectModal, {
              listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
              title: E,
              ephemeralIcon: "chat-list",
              onConfirm: i,
              maxItems: y,
              maxItemsExceedErrorMsg: b,
              chatFilter: c,
              contactFilter: p,
              shouldShowSelectedChatList: !0,
              shouldShowSelectionSummary: !1,
              singleSelectionFooterType: o("WAWebSelectModalFooter.react")
                .FooterType.CONFIRM,
              multipleSelectionFooterType: o("WAWebSelectModalFooter.react")
                .FooterType.CONFIRM,
              customHeader: L,
              hideCustomHeaderWhenSelected: !0,
              tsNavigationData: k,
            })),
            (t[11] = i),
            (t[12] = I))
          : (I = t[12]),
        I
      );
    }
    function d(e) {
      return e.id;
    }
    l.default = c;
  },
  226,
);
