__d(
  "WAWebStickerPanelContentStickerPackStickersFavorite.react",
  [
    "fbt",
    "WAWebAvatarStickerUtils",
    "WAWebEmojiPickerConstants",
    "WAWebFavoriteStickerCollection",
    "WAWebMediaStickerUtils",
    "WAWebNewsletterCollection",
    "WAWebNewsletterStickerUtils",
    "WAWebStickerPanelContentEmpty.react",
    "WAWebStickerPanelContentStickersScrollGridPresentational.react",
    "react",
    "useWAWebIsReadyToShowStickers.react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useImperativeHandle,
      p = c.useRef,
      _ = c.useState;
    function f(e) {
      var t = e.displayLocation,
        n = e.onDownloadEnd,
        a = e.onDownloadStart,
        i = e.onFocusPrev,
        l = e.onScroll,
        c = e.onStickerClick,
        d = e.ref,
        _ = e.resetScroll,
        f = p(),
        h = g(_, a, n);
      m(d, function () {
        return {
          focus: function (t) {
            var e;
            (e = f.current) == null || e.focus(t);
          },
        };
      });
      var y = o("useWAWebIsReadyToShowStickers.react").useIsReadyToShowStickers(
        t,
      );
      return y
        ? h.length === 0
          ? u.jsx(r("WAWebStickerPanelContentEmpty.react"), {
              text: s._(/*BTDS*/ "You haven't favorited any stickers yet"),
            })
          : u.jsx(
              o(
                "WAWebStickerPanelContentStickersScrollGridPresentational.react",
              ).StickersScrollGridPresentational,
              {
                ref: f,
                onFocusPrev: i,
                onScroll: l,
                onStickerClick: c,
                onStickerEnter: c,
                selectedTab: o("WAWebEmojiPickerConstants").StickerTabs
                  .FAVORITES,
                stickers: h,
                displayLocation: t,
                theme: "searchable",
                loadOneRow: !0,
              },
            )
        : null;
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e, t, n) {
      var a = r("WAWebNewsletterCollection").getActive(),
        i = _([]),
        l = i[0],
        s = i[1],
        u = _(0),
        c = u[0],
        m = u[1],
        p = function () {
          var r = a != null,
            i = o(
              "WAWebFavoriteStickerCollection",
            ).FavoriteStickerCollection.map(function (e) {
              return e.sticker;
            });
          (s(i),
            o("WAWebMediaStickerUtils").handleStickerDownloadInStickerPanel({
              stickersArr: i,
              setStickersDownloaded: s,
              stickerReuploadRetryCount: c,
              setStickerReuploadRetryCount: m,
              onChange: e,
              onDownloadStart: t,
              onDownloadEnd: n,
              filterStickers: r
                ? o("WAWebNewsletterStickerUtils").filterStickersForNewsletters
                : o("WAWebAvatarStickerUtils").filterAvatarStickers,
              isAvatarStickers: !1,
            }));
        };
      return (
        d(function () {
          p();
        }, []),
        o("useWAWebListener").useListener(
          o("WAWebFavoriteStickerCollection").FavoriteStickerCollection,
          "add remove change sort",
          p,
        ),
        l
      );
    }
    l.default = f;
  },
  226,
);
