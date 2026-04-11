__d(
  "WAWebLottieSticker.react",
  [
    "fbt",
    "WAWebInMemoryLottieStickerCache",
    "WAWebLottieWrapper.react",
    "WAWebMediaBlobProvider",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useState;
    function p(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.blob,
        a = e.mediaData,
        i;
      t[0] !== a.filehash
        ? ((i = o(
            "WAWebInMemoryLottieStickerCache",
          ).InMemoryLottieStickerCache.get(a.filehash)),
          (t[0] = a.filehash),
          (t[1] = i))
        : (i = t[1]);
      var l = m(i),
        s = l[0],
        c = l[1],
        p,
        _;
      (t[2] !== n || t[3] !== s || t[4] !== a.filehash
        ? ((p = function () {
            s == null &&
              o("WAWebInMemoryLottieStickerCache")
                .extractAndSetBothLottieJSONInMemoryCache(a.filehash, n)
                .then(function () {
                  var e = o(
                    "WAWebInMemoryLottieStickerCache",
                  ).InMemoryLottieStickerCache.get(a.filehash);
                  e != null && c(e);
                });
          }),
          (_ = [a.filehash, n, s]),
          (t[2] = n),
          (t[3] = s),
          (t[4] = a.filehash),
          (t[5] = p),
          (t[6] = _))
        : ((p = t[5]), (_ = t[6])),
        d(p, _));
      var f;
      return (
        t[7] !== s
          ? ((f =
              s != null
                ? u.jsx(r("WAWebLottieWrapper.react"), { data: s })
                : null),
            (t[7] = s),
            (t[8] = f))
          : (f = t[8]),
        f
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.className,
        a = e.downloadMedia,
        i = e.mediaData,
        l = e.onClick,
        c = e.placeholderRenderer,
        d;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s._(/*BTDS*/ "Sticker")), (t[0] = d))
        : (d = t[0]);
      var m = d,
        _;
      t[1] !== i
        ? ((_ = function (t) {
            return u.jsx(p, { blob: t, mediaData: i });
          }),
          (t[1] = i),
          (t[2] = _))
        : (_ = t[2]);
      var f;
      t[3] !== a || t[4] !== i || t[5] !== c || t[6] !== _
        ? ((f = u.jsx(r("WAWebMediaBlobProvider"), {
            mediaData: i,
            downloadMedia: a,
            renderPlaceholder: c,
            render: _,
          })),
          (t[3] = a),
          (t[4] = i),
          (t[5] = c),
          (t[6] = _),
          (t[7] = f))
        : (f = t[7]);
      var g;
      return (
        t[8] !== n || t[9] !== l || t[10] !== f
          ? ((g = u.jsx("div", {
              className: n,
              onClick: l,
              "aria-label": m,
              children: f,
            })),
            (t[8] = n),
            (t[9] = l),
            (t[10] = f),
            (t[11] = g))
          : (g = t[11]),
        g
      );
    }
    l.default = _;
  },
  226,
);
