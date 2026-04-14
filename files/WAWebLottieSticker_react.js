__d(
  "WAWebLottieSticker.react",
  [
    "fbt",
    "WAWebInMemoryLottieStickerCache",
    "WAWebLottieWrapper.react",
    "WAWebMediaBlobProvider",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState;
    function p(e) {
      var t = e.blob,
        n = e.mediaData,
        a = m(
          o("WAWebInMemoryLottieStickerCache").InMemoryLottieStickerCache.get(
            n.filehash,
          ),
        ),
        i = a[0],
        l = a[1];
      return (
        d(
          function () {
            i == null &&
              o("WAWebInMemoryLottieStickerCache")
                .extractAndSetBothLottieJSONInMemoryCache(n.filehash, t)
                .then(function () {
                  var e = o(
                    "WAWebInMemoryLottieStickerCache",
                  ).InMemoryLottieStickerCache.get(n.filehash);
                  e != null && l(e);
                });
          },
          [n.filehash, t, i],
        ),
        i != null ? u.jsx(r("WAWebLottieWrapper.react"), { data: i }) : null
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.className,
        n = e.downloadMedia,
        o = e.mediaData,
        a = e.onClick,
        i = e.placeholderRenderer,
        l = e.startAnimation,
        c = s._(/*BTDS*/ "Sticker");
      return u.jsx("div", {
        className: t,
        onClick: a,
        "aria-label": c,
        children: u.jsx(r("WAWebMediaBlobProvider"), {
          mediaData: o,
          downloadMedia: n,
          renderPlaceholder: i,
          render: function (t) {
            return u.jsx(p, { blob: t, mediaData: o });
          },
        }),
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  226,
);
