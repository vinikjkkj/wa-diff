__d(
  "WAWebStickerPanelContentStickerPackStickersRecentMd.react",
  [
    "fbt",
    "WAWebAvatarStickerUtils",
    "WAWebEmojiPickerConstants",
    "WAWebMediaStickerUtils",
    "WAWebNewsletterCollection",
    "WAWebNewsletterStickerUtils",
    "WAWebPanelsDisplayLocation",
    "WAWebRecentStickerCollectionMd",
    "WAWebStickerModel",
    "WAWebStickerPanelContentEmpty.react",
    "WAWebStickerPanelContentStickersScrollGridPresentational.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(11),
        n = e.displayLocation,
        a = e.isAvatarStickers,
        i = e.onDownloadEnd,
        l = e.onDownloadStart,
        c = e.onFocusPrev,
        d = e.onScroll,
        _ = e.onStickerClick,
        f = e.ref,
        h = e.resetScroll,
        y = a === void 0 ? !1 : a,
        C = p(),
        b = g(h, l, i, y),
        v =
          !y &&
          (n === o("WAWebPanelsDisplayLocation").DisplayLocation.ComposeBox ||
            n ===
              o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel),
        S;
      t[0] !== b || t[1] !== v
        ? ((S = v
            ? [o("WAWebStickerModel").Sticker.getCreateButton()].concat(b)
            : b),
          (t[0] = b),
          (t[1] = v),
          (t[2] = S))
        : (S = t[2]);
      var R = S,
        L;
      (t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = function () {
            return {
              focus: function (t) {
                var e;
                (e = C.current) == null || e.focus(t);
              },
            };
          }),
          (t[3] = L))
        : (L = t[3]),
        m(f, L));
      var E = o("useWAWebIsReadyToShowStickers.react").useIsReadyToShowStickers(
        n,
      );
      if (!E) return null;
      if (R.length === 0) {
        var k;
        return (
          t[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((k = u.jsx(r("WAWebStickerPanelContentEmpty.react"), {
                text: s._(/*BTDS*/ "You haven't sent any stickers yet"),
              })),
              (t[4] = k))
            : (k = t[4]),
          k
        );
      }
      var I;
      return (
        t[5] !== n || t[6] !== c || t[7] !== d || t[8] !== _ || t[9] !== R
          ? ((I = u.jsx(
              o(
                "WAWebStickerPanelContentStickersScrollGridPresentational.react",
              ).StickersScrollGridPresentational,
              {
                ref: C,
                onFocusPrev: c,
                onScroll: d,
                onStickerClick: _,
                onStickerEnter: _,
                selectedTab: o("WAWebEmojiPickerConstants").StickerTabs.RECENTS,
                stickers: R,
                theme: "searchable",
                displayLocation: n,
              },
            )),
            (t[5] = n),
            (t[6] = c),
            (t[7] = d),
            (t[8] = _),
            (t[9] = R),
            (t[10] = I))
          : (I = t[10]),
        I
      );
    }
    function g(e, t, n, a) {
      a === void 0 && (a = !1);
      var i = r("WAWebNewsletterCollection").getActive(),
        l = _([]),
        s = l[0],
        u = l[1],
        c = _(0),
        m = c[0],
        p = c[1],
        f = function () {
          var r = i != null,
            l = o(
              "WAWebRecentStickerCollectionMd",
            ).RecentStickerCollectionMd.map(function (e) {
              return e.sticker;
            });
          o("WAWebMediaStickerUtils").handleStickerDownloadInStickerPanel({
            stickersArr: l,
            setStickersDownloaded: u,
            stickerReuploadRetryCount: m,
            setStickerReuploadRetryCount: p,
            onChange: e,
            onDownloadStart: t,
            onDownloadEnd: n,
            filterStickers: r
              ? o("WAWebNewsletterStickerUtils").filterStickersForNewsletters
              : o("WAWebAvatarStickerUtils").filterAvatarStickers,
            isAvatarStickers: a,
          });
        };
      return (
        d(function () {
          f();
        }, []),
        o("useWAWebListener").useListener(
          o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd,
          "add remove change sort",
          f,
        ),
        s
      );
    }
    var h = f;
    l.StickerPackStickersRecent = h;
  },
  226,
);
