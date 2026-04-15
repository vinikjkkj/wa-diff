__d(
  "WAWebFirstPartyStickerInfo.react",
  [
    "fbt",
    "WAWebAuraGating",
    "WAWebButton.react",
    "WAWebCmd",
    "WAWebFavoriteStickerAction",
    "WAWebFavoriteStickerCollection",
    "WAWebFlex.react",
    "WAWebMiscGatingUtils",
    "WAWebStickerDetailsStickerPackInfo.react",
    "WAWebStickerPackCollectionMd",
    "WDSTooltip.react",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = 150;
    function m(e) {
      var t = o("react-compiler-runtime").c(32),
        n = e.onStickerPackView,
        a = e.showViewPackButton,
        i = e.sticker,
        l = e.stickerPackId,
        c = e.stickerPackViewDelay,
        m = p(l),
        _;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = ["stickerPremiumStatus"]), (t[0] = _))
        : (_ = t[0]),
        o("useWAWebModelValues").useOptionalModelValues(
          i == null ? void 0 : i.mediaData,
          _,
        ));
      var f;
      t[1] !== n || t[2] !== a || t[3] !== l || t[4] !== c
        ? ((f =
            a && l
              ? u.jsx(o("WAWebButton.react").Button, {
                  onClick: function (t) {
                    (t.stopPropagation(),
                      n && n(),
                      c != null
                        ? self.setTimeout(function () {
                            return o("WAWebCmd").Cmd.openStickerPack(l);
                          }, c + d)
                        : o("WAWebCmd").Cmd.openStickerPack(l));
                  },
                  type: "secondary",
                  children: s._(/*BTDS*/ "View Pack"),
                })
              : null),
          (t[1] = n),
          (t[2] = a),
          (t[3] = l),
          (t[4] = c),
          (t[5] = f))
        : (f = t[5]);
      var g = f,
        h;
      if (o("WAWebMiscGatingUtils").isFavoriteStickersEnabled() && i != null)
        if (
          o("WAWebFavoriteStickerCollection").FavoriteStickerCollection.get(
            i.filehash,
          )
        ) {
          var y;
          t[6] !== i
            ? ((y = function () {
                return o(
                  "WAWebFavoriteStickerAction",
                ).removeStickerFromFavorites(i);
              }),
              (t[6] = i),
              (t[7] = y))
            : (y = t[7]);
          var C;
          t[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((C = s._(/*BTDS*/ "Remove From Favorites")), (t[8] = C))
            : (C = t[8]);
          var b;
          (t[9] !== y
            ? ((b = u.jsx(o("WAWebButton.react").Button, {
                onClick: y,
                type: "secondary",
                children: C,
              })),
              (t[9] = y),
              (t[10] = b))
            : (b = t[10]),
            (h = b));
        } else {
          var v;
          t[11] !== i.mediaData.stickerPremiumStatus
            ? ((v = r("WAWebAuraGating").canUsePremiumSticker(
                i.mediaData.stickerPremiumStatus,
              )),
              (t[11] = i.mediaData.stickerPremiumStatus),
              (t[12] = v))
            : (v = t[12]);
          var S = v,
            R;
          t[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((R = s._(
                /*BTDS*/ "View this sticker on your phone to learn how to access and use it.",
              )),
              (t[13] = R))
            : (R = t[13]);
          var L = !S,
            E;
          t[14] !== i
            ? ((E = function () {
                return o("WAWebFavoriteStickerAction").addStickerToFavorites(i);
              }),
              (t[14] = i),
              (t[15] = E))
            : (E = t[15]);
          var k;
          t[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((k = s._(/*BTDS*/ "Add to Favorites")), (t[16] = k))
            : (k = t[16]);
          var I;
          t[17] !== L || t[18] !== E
            ? ((I = u.jsx(o("WAWebButton.react").Button, {
                disabled: L,
                onClick: E,
                type: "secondary",
                children: k,
              })),
              (t[17] = L),
              (t[18] = E),
              (t[19] = I))
            : (I = t[19]);
          var T;
          (t[20] !== S || t[21] !== I
            ? ((T = u.jsx(r("WDSTooltip.react"), {
                disabled: S,
                label: R,
                children: I,
              })),
              (t[20] = S),
              (t[21] = I),
              (t[22] = T))
            : (T = t[22]),
            (h = T));
        }
      var D = m == null ? void 0 : m.name,
        x = m == null ? void 0 : m.publisher,
        $;
      t[23] !== D || t[24] !== x
        ? (($ = u.jsx(
            o("WAWebStickerDetailsStickerPackInfo.react")
              .StickerDetailsStickerPackInfo,
            {
              name: D,
              publisher: x,
              theme: o("WAWebStickerDetailsStickerPackInfo.react").Theme
                .MediaViewer,
            },
          )),
          (t[23] = D),
          (t[24] = x),
          (t[25] = $))
        : ($ = t[25]);
      var P;
      t[26] !== h || t[27] !== g
        ? ((P = u.jsxs(o("WAWebFlex.react").FlexRow, {
            gap: 8,
            children: [g, h],
          })),
          (t[26] = h),
          (t[27] = g),
          (t[28] = P))
        : (P = t[28]);
      var N;
      return (
        t[29] !== $ || t[30] !== P
          ? ((N = u.jsxs(u.Fragment, { children: [$, P] })),
            (t[29] = $),
            (t[30] = P),
            (t[31] = N))
          : (N = t[31]),
        N
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(5),
        n,
        a;
      (t[0] !== e
        ? ((n = function () {
            e &&
              o(
                "WAWebStickerPackCollectionMd",
              ).StickerPackCollectionMd.fetchStickerPack(e);
          }),
          (a = [e]),
          (t[0] = e),
          (t[1] = n),
          (t[2] = a))
        : ((n = t[1]), (a = t[2])),
        c(n, a));
      var i;
      t[3] !== e
        ? ((i = function () {
            return e != null
              ? o("WAWebStickerPackCollectionMd").StickerPackCollectionMd.get(e)
              : null;
          }),
          (t[3] = e),
          (t[4] = i))
        : (i = t[4]);
      var l = r("useWAWebEventTargetValue")(
        o("WAWebStickerPackCollectionMd").StickerPackCollectionMd,
        "add remove reset",
        i,
      );
      return l;
    }
    l.default = m;
  },
  226,
);
