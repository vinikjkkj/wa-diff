__d(
  "WAWebStickerPackUtils",
  [
    "WABlobToArrayBuffer",
    "WAMediaCalculateFilehash",
    "WAWebApiParse",
    "WAWebCanvasUtils",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaLoad",
    "WAWebRecentStickerCollectionMd",
    "WAWebStickerModel",
    "WAWebStickerPackConstants",
    "err",
    "fflate",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      for (
        var t = o(
            "WAWebRecentStickerCollectionMd",
          ).RecentStickerCollectionMd.map(function (e) {
            return e.sticker;
          }),
          n = new Map(),
          r = [],
          a = 0;
        a < Math.min(t.length, e);
        a++
      ) {
        var i,
          l = t[a],
          s = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
            l.mediaData.filehash,
          );
        if (s != null) {
          r.push({
            emojis: (i = l.mediaData.emojis) != null ? i : [],
            mimetype: l.mediaData.mimetype,
            isLottie: !!l.mediaData.isLottie,
            fileName: "sticker" + a + ".webp",
            isAnimated: !!l.mediaData.isAnimated,
          });
          var u = await s.arrayBuffer();
          n.set("sticker" + a + ".webp", new Uint8Array(u));
        }
      }
      var c = {};
      n.forEach(function (e, t) {
        c[t] = e;
      });
      var d = o("fflate").zipSync(c);
      return {
        stickerPackZip: new Blob([d], { type: "application/zip" }),
        stickerPackStickers: r,
      };
    }
    async function s(e, t) {
      var n = t.stickers,
        a = t.trayIconFileName,
        i = null;
      if ((e instanceof Blob ? (i = e) : (i = e.getBlob()), i == null))
        throw r("err")("blob is null");
      var l = await o("WABlobToArrayBuffer").blobToArrayBuffer(i),
        s = new Uint8Array(l),
        u = await o("fflate").unzipSync(s),
        c = [],
        d = async function () {
          var e = m[0],
            t = m[1];
          if (e === a) return 1;
          if (t instanceof Uint8Array) {
            var r,
              i = t.buffer,
              l = await o("WAMediaCalculateFilehash").calculateFilehash(i),
              s =
                n == null
                  ? void 0
                  : n.find(function (t) {
                      return t.fileName === e;
                    }),
              u =
                (r = s == null ? void 0 : s.mimetype) != null
                  ? r
                  : "image/webp";
            o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(
              l,
              new Blob([i], { type: u }),
            );
            var d = new (o("WAWebStickerModel").StickerModel)({
              mimetype: u,
              width: 250,
              height: 250,
              filehash: l,
              id: l,
              directPath: "",
              mediaKey: "",
              encFilehash: "",
              mediaKeyTimestamp: 0,
            });
            if (s != null) {
              var p, _;
              d.mediaData.set({
                isLottie: (p = s.isLottie) != null ? p : !1,
                isAnimated: (_ = s.isAnimated) != null ? _ : !1,
              });
            }
            c.push(d);
          }
        };
      for (var m of Object.entries(u)) await d();
      return c;
    }
    async function u(e, t, n, r, a, i, l, s, u, c) {
      (i === void 0 && (i = o("WAWebStickerPackConstants").PADDING),
        l === void 0 && (l = o("WAWebStickerPackConstants").THUMBNAIL_LENGTH),
        s === void 0 && (s = o("WAWebStickerPackConstants").THUMBNAIL_WIDTH),
        u === void 0 && (u = o("WAWebStickerPackConstants").IMAGE_LENGTH),
        c === void 0 && (c = o("WAWebStickerPackConstants").IMAGE_WIDTH));
      for (var d = n, m = r, p = 0; p < t; p++) {
        var _ = e[p],
          f = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
            _.mediaData.filehash,
          );
        if (f != null) {
          var g = window.URL.createObjectURL(f),
            h = await o("WAWebMediaLoad").loadImage(g);
          (a.drawImage(h, d, m, u, c),
            (d += l / 2 - i),
            p % 2 !== 0 &&
              ((d = t === 3 ? l / 2 - u / 2 : i), (m = s / 2 + i)));
        }
      }
    }
    function c(e) {
      if (o("WAWebApiParse").isStickerPackURL(e)) {
        var t = new URL(e),
          n = t.pathname.split("/"),
          r = n[0],
          a = n[1],
          i = n[2];
        return i;
      }
    }
    async function d(e, t, n, r, a) {
      (t === void 0 && (t = o("WAWebStickerPackConstants").THUMBNAIL_LENGTH),
        n === void 0 && (n = o("WAWebStickerPackConstants").THUMBNAIL_WIDTH),
        r === void 0 && (r = o("WAWebStickerPackConstants").IMAGE_LENGTH),
        a === void 0 && (a = o("WAWebStickerPackConstants").IMAGE_WIDTH));
      var i = o("WAWebCanvasUtils").createCanvas(t, n),
        l = i.getContext("2d");
      ((l.fillStyle = "#FFFFFF"), l.fillRect(0, 0, t, n));
      var s = o("WAWebRecentStickerCollectionMd").RecentStickerCollectionMd.map(
          function (e) {
            return e.sticker;
          },
        ),
        c = Math.min(s.length, e != null ? e : 4),
        d = o("WAWebStickerPackConstants").PADDING,
        m = o("WAWebStickerPackConstants").PADDING;
      switch (c) {
        case 1:
          ((d = t / 2 - r / 2), (m = n / 2 - a / 2));
          break;
        case 2:
          m = n / 2 - a / 2;
          break;
      }
      return (
        await u(
          s,
          c,
          d,
          m,
          l,
          o("WAWebStickerPackConstants").PADDING,
          t,
          n,
          r,
          a,
        ),
        i
      );
    }
    ((l.compressedRecentStickers = e),
      (l.decompressStickerPackMedia = s),
      (l.extractStickerPackIdFromUrl = c),
      (l.generateStickerPackThumbnail = d));
  },
  98,
);
