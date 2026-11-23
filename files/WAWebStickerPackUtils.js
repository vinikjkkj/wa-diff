__d(
  "WAWebStickerPackUtils",
  [
    "WAMediaCalculateFilehash",
    "WAWebApiParse",
    "WAWebCanvasUtils",
    "WAWebMediaBoundedUnzip",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaLoad",
    "WAWebStickerModel",
    "WAWebStickerPackConstants",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e instanceof Blob ? e : e.getBlob();
      if (t == null) throw r("err")("blob is null");
      return o("WAWebMediaBoundedUnzip").unzipBlobWithLimits(
        t,
        o("WAWebMediaBoundedUnzip").STICKER_PACK_ZIP_LIMITS,
      );
    }
    async function s(t, n) {
      var r = n.stickers,
        a = n.trayIconFileName,
        i = await e(t),
        l = [],
        s = async function () {
          var e = u[0],
            t = u[1];
          if (e === a) return 1;
          if (t instanceof Uint8Array) {
            var n,
              i = t.buffer,
              s = await o("WAMediaCalculateFilehash").calculateFilehash(i),
              c =
                r == null
                  ? void 0
                  : r.find(function (t) {
                      return t.fileName === e;
                    }),
              d =
                (n = c == null ? void 0 : c.mimetype) != null
                  ? n
                  : "image/webp";
            o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(
              s,
              new Blob([i], { type: d }),
            );
            var m = new (o("WAWebStickerModel").StickerModel)({
              mimetype: d,
              width: 250,
              height: 250,
              filehash: s,
              id: s,
              directPath: "",
              mediaKey: "",
              encFilehash: "",
              mediaKeyTimestamp: 0,
            });
            if (c != null) {
              var p, _;
              m.mediaData.set({
                isLottie: (p = c.isLottie) != null ? p : !1,
                isAnimated: (_ = c.isAnimated) != null ? _ : !1,
              });
            }
            l.push(m);
          }
        };
      for (var u of Object.entries(i)) await s();
      return l;
    }
    function u(e) {
      if (o("WAWebApiParse").isStickerPackURL(e)) {
        var t = new URL(e),
          n = t.pathname.split("/"),
          r = n[0],
          a = n[1],
          i = n[2];
        return i;
      }
    }
    async function c(e, t) {
      t === void 0 && (t = o("WAWebStickerPackConstants").STICKER_GRID_COUNT);
      var n = o("WAWebCanvasUtils").createCanvas(
          o("WAWebStickerPackConstants").THUMBNAIL_LENGTH,
          o("WAWebStickerPackConstants").THUMBNAIL_WIDTH,
        ),
        a = r("nullthrows")(n.getContext("2d")),
        i = e.slice(0, t);
      if (i.length < t) {
        var l = await d(i[0]);
        return (
          l != null &&
            a.drawImage(
              l,
              0,
              0,
              o("WAWebStickerPackConstants").THUMBNAIL_LENGTH,
              o("WAWebStickerPackConstants").THUMBNAIL_WIDTH,
            ),
          n
        );
      }
      var s = await Promise.all(
        i.map(async function (e, t) {
          var n = await d(e);
          return n != null ? { image: n, index: t } : null;
        }),
      );
      for (var u of s)
        if (u != null) {
          var c = u.image,
            m = u.index,
            p = m % 2,
            _ = Math.floor(m / 2),
            f =
              o("WAWebStickerPackConstants").PADDING +
              p *
                (o("WAWebStickerPackConstants").IMAGE_LENGTH +
                  o("WAWebStickerPackConstants").GRID_GAP),
            g =
              o("WAWebStickerPackConstants").PADDING +
              _ *
                (o("WAWebStickerPackConstants").IMAGE_WIDTH +
                  o("WAWebStickerPackConstants").GRID_GAP);
          a.drawImage(
            c,
            f,
            g,
            o("WAWebStickerPackConstants").IMAGE_LENGTH,
            o("WAWebStickerPackConstants").IMAGE_WIDTH,
          );
        }
      return n;
    }
    async function d(e) {
      if (e == null) return null;
      var t = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
        e.mediaData.filehash,
      );
      if (t == null) return null;
      var n = window.URL.createObjectURL(t);
      try {
        return await o("WAWebMediaLoad").loadImage(n);
      } finally {
        window.URL.revokeObjectURL(n);
      }
    }
    ((l.unzipStickerPackMedia = e),
      (l.decompressStickerPackMedia = s),
      (l.extractStickerPackIdFromUrl = u),
      (l.generateStickerGridThumbnail = c));
  },
  98,
);
