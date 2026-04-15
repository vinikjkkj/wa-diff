__d(
  "WAWebStickerDetailsStickerPackInfo.react",
  [
    "fbt",
    "$InternalEnum",
    "WAWebAuraGating",
    "WAWebButton.react",
    "WAWebEmojiText.react",
    "WAWebFavoriteStickerAction",
    "WAWebFavoriteStickerCollection",
    "WAWebMiscGatingUtils",
    "WAWebText_DONOTUSE.react",
    "WDSIconWdsIcAuraFill.react",
    "WDSTooltip.react",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        container: {
          color: "xhslqc4",
          fontSize: "x1f6kntn",
          lineHeight: "x37zpob",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        stickerStore: { marginBottom: "xui9b5u", $$css: !0 },
        mediaViewer: { marginBottom: "x1iymm2a", $$css: !0 },
        name: {
          fontSize: "x1jchvi3",
          lineHeight: "x1xet1wb",
          color: "x14ug900",
          $$css: !0,
        },
      },
      d = n("$InternalEnum").Mirrored(["StickerStore", "MediaViewer"]);
    function m(e) {
      var t = o("react-compiler-runtime").c(27),
        n = e.isPremium,
        a = e.name,
        i = e.publisher,
        l = e.sticker,
        m = e.theme,
        p;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = ["stickerPremiumStatus"]), (t[0] = p))
        : (p = t[0]),
        o("useWAWebModelValues").useOptionalModelValues(
          l == null ? void 0 : l.mediaData,
          p,
        ));
      var _;
      if (o("WAWebMiscGatingUtils").isFavoriteStickersEnabled() && l != null) {
        var f;
        t[1] !== l.mediaData.stickerPremiumStatus
          ? ((f = r("WAWebAuraGating").canUsePremiumSticker(
              l.mediaData.stickerPremiumStatus,
            )),
            (t[1] = l.mediaData.stickerPremiumStatus),
            (t[2] = f))
          : (f = t[2]);
        var g = f,
          h;
        (t[3] !== g || t[4] !== l
          ? ((h = o(
              "WAWebFavoriteStickerCollection",
            ).FavoriteStickerCollection.get(l.filehash)
              ? u.jsx(o("WAWebButton.react").Button, {
                  onClick: function () {
                    return o(
                      "WAWebFavoriteStickerAction",
                    ).removeStickerFromFavorites(l);
                  },
                  type: "secondary",
                  children: s._(/*BTDS*/ "Remove From Favorites"),
                })
              : u.jsx(r("WDSTooltip.react"), {
                  disabled: g,
                  label: s._(
                    /*BTDS*/ "View this sticker on your phone to learn how to access and use it.",
                  ),
                  children: u.jsx(o("WAWebButton.react").Button, {
                    disabled: !g,
                    onClick: function () {
                      return o(
                        "WAWebFavoriteStickerAction",
                      ).addStickerToFavorites(l);
                    },
                    type: "secondary",
                    children: s._(/*BTDS*/ "Add to Favorites"),
                  }),
                })),
            (t[3] = g),
            (t[4] = l),
            (t[5] = h))
          : (h = t[5]),
          (_ = h));
      }
      var y = m === d.StickerStore && c.stickerStore,
        C = m === d.MediaViewer && c.mediaViewer,
        b;
      t[6] !== y || t[7] !== C
        ? ((b = [c.container, y, C]), (t[6] = y), (t[7] = C), (t[8] = b))
        : (b = t[8]);
      var v;
      t[9] !== n
        ? ((v =
            n === !0 &&
            u.jsx("span", {
              className: "x3nfvp2 x1n8ftqi x7g7pl8 x14ug900",
              children: u.jsx(r("WDSIconWdsIcAuraFill.react"), {
                height: 16,
                width: 16,
              }),
            })),
          (t[9] = n),
          (t[10] = v))
        : (v = t[10]);
      var S;
      t[11] !== a
        ? ((S =
            a &&
            u.jsx(o("WAWebEmojiText.react").EmojiText, {
              xstyle: c.name,
              text: a,
            })),
          (t[11] = a),
          (t[12] = S))
        : (S = t[12]);
      var R;
      t[13] !== a || t[14] !== i
        ? ((R =
            a &&
            i &&
            u.jsx(o("WAWebEmojiText.react").EmojiText, {
              text: "\xA0\u2022\xA0",
            })),
          (t[13] = a),
          (t[14] = i),
          (t[15] = R))
        : (R = t[15]);
      var L;
      t[16] !== i
        ? ((L = i && u.jsx(o("WAWebEmojiText.react").EmojiText, { text: i })),
          (t[16] = i),
          (t[17] = L))
        : (L = t[17]);
      var E;
      t[18] !== b || t[19] !== v || t[20] !== S || t[21] !== R || t[22] !== L
        ? ((E = u.jsxs(o("WAWebText_DONOTUSE.react").TextDiv, {
            theme: "plain",
            xstyle: b,
            children: [v, S, R, L],
          })),
          (t[18] = b),
          (t[19] = v),
          (t[20] = S),
          (t[21] = R),
          (t[22] = L),
          (t[23] = E))
        : (E = t[23]);
      var k;
      return (
        t[24] !== _ || t[25] !== E
          ? ((k = u.jsxs(u.Fragment, { children: [E, _] })),
            (t[24] = _),
            (t[25] = E),
            (t[26] = k))
          : (k = t[26]),
        k
      );
    }
    ((l.Theme = d), (l.StickerDetailsStickerPackInfo = m));
  },
  226,
);
