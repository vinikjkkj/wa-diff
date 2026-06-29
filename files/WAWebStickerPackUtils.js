__d(
  "WAWebStickerPackUtils",
  [
    "Promise",
    "WABlobToArrayBuffer",
    "WAMediaCalculateFilehash",
    "WAWebApiParse",
    "WAWebCanvasUtils",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaLoad",
    "WAWebRecentStickerCollectionMd",
    "WAWebStickerModel",
    "WAWebStickerPackConstants",
    "asyncToGeneratorRuntime",
    "err",
    "fflate",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              var u = yield s.arrayBuffer();
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
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.stickers,
            a = t.trayIconFileName,
            i = null;
          if ((e instanceof Blob ? (i = e) : (i = e.getBlob()), i == null))
            throw r("err")("blob is null");
          var l = yield o("WABlobToArrayBuffer").blobToArrayBuffer(i),
            s = new Uint8Array(l),
            u = yield o("fflate").unzipSync(s),
            c = [],
            d = function* () {
              var e = m[0],
                t = m[1];
              if (e === a) return 1;
              if (t instanceof Uint8Array) {
                var r,
                  i = t.buffer,
                  l = yield o("WAMediaCalculateFilehash").calculateFilehash(i),
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
          for (var m of Object.entries(u)) yield* d();
          return c;
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          for (
            var t = e.context,
              n = e.gap,
              r = n === void 0 ? o("WAWebStickerPackConstants").PADDING : n,
              a = e.imageL,
              i =
                a === void 0 ? o("WAWebStickerPackConstants").IMAGE_LENGTH : a,
              l = e.imageW,
              s = l === void 0 ? o("WAWebStickerPackConstants").IMAGE_WIDTH : l,
              u = e.recentStickers,
              c = e.stickerCount,
              d = e.thumbL,
              m =
                d === void 0
                  ? o("WAWebStickerPackConstants").THUMBNAIL_LENGTH
                  : d,
              p = e.thumbW,
              _ =
                p === void 0
                  ? o("WAWebStickerPackConstants").THUMBNAIL_WIDTH
                  : p,
              f = e.x,
              g = e.y,
              h = f,
              y = g,
              C = 0;
            C < c;
            C++
          ) {
            var b = u[C],
              v = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
                b.mediaData.filehash,
              );
            if (v != null) {
              var S = window.URL.createObjectURL(v),
                R = yield o("WAWebMediaLoad").loadImage(S);
              (t.drawImage(R, h, y, i, s),
                (h += m / 2 - r),
                C % 2 !== 0 &&
                  ((h = c === 3 ? m / 2 - i / 2 : r), (y = _ / 2 + r)));
            }
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      if (o("WAWebApiParse").isStickerPackURL(e)) {
        var t = new URL(e),
          n = t.pathname.split("/"),
          r = n[0],
          a = n[1],
          i = n[2];
        return i;
      }
    }
    function f(e, t, n, r, o) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            (t === void 0 &&
              (t = o("WAWebStickerPackConstants").THUMBNAIL_LENGTH),
              n === void 0 &&
                (n = o("WAWebStickerPackConstants").THUMBNAIL_WIDTH),
              r === void 0 && (r = o("WAWebStickerPackConstants").IMAGE_LENGTH),
              a === void 0 && (a = o("WAWebStickerPackConstants").IMAGE_WIDTH));
            var i = o("WAWebCanvasUtils").createCanvas(t, n),
              l = i.getContext("2d");
            ((l.fillStyle = "#FFFFFF"), l.fillRect(0, 0, t, n));
            var s = o(
                "WAWebRecentStickerCollectionMd",
              ).RecentStickerCollectionMd.map(function (e) {
                return e.sticker;
              }),
              u = Math.min(s.length, e != null ? e : 4),
              c = o("WAWebStickerPackConstants").PADDING,
              d = o("WAWebStickerPackConstants").PADDING;
            switch (u) {
              case 1:
                ((c = t / 2 - r / 2), (d = n / 2 - a / 2));
                break;
              case 2:
                d = n / 2 - a / 2;
                break;
            }
            return (
              yield m({
                context: l,
                gap: o("WAWebStickerPackConstants").PADDING,
                imageL: r,
                imageW: a,
                recentStickers: s,
                stickerCount: u,
                thumbL: t,
                thumbW: n,
                x: c,
                y: d,
              }),
              i
            );
          },
        )),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          r === void 0 &&
            (r = o("WAWebStickerPackConstants").STICKER_GRID_COUNT);
          var a = o("WAWebCanvasUtils").createCanvas(
              o("WAWebStickerPackConstants").THUMBNAIL_LENGTH,
              o("WAWebStickerPackConstants").THUMBNAIL_WIDTH,
            ),
            i = a.getContext("2d"),
            l = t.slice(0, r);
          if (l.length < r) {
            var s = yield C(l[0]);
            return (
              s != null &&
                i.drawImage(
                  s,
                  0,
                  0,
                  o("WAWebStickerPackConstants").THUMBNAIL_LENGTH,
                  o("WAWebStickerPackConstants").THUMBNAIL_WIDTH,
                ),
              a
            );
          }
          var u = yield (e || (e = n("Promise"))).all(
            l.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, t) {
                    var n = yield C(e);
                    return n != null ? { image: n, index: t } : null;
                  },
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
          for (var c of u)
            if (c != null) {
              var d = c.image,
                m = c.index,
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
              i.drawImage(
                d,
                f,
                g,
                o("WAWebStickerPackConstants").IMAGE_LENGTH,
                o("WAWebStickerPackConstants").IMAGE_WIDTH,
              );
            }
          return a;
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e == null) return null;
          var t = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
            e.mediaData.filehash,
          );
          if (t == null) return null;
          var n = window.URL.createObjectURL(t);
          try {
            return yield o("WAWebMediaLoad").loadImage(n);
          } finally {
            window.URL.revokeObjectURL(n);
          }
        })),
        b.apply(this, arguments)
      );
    }
    ((l.compressedRecentStickers = s),
      (l.decompressStickerPackMedia = c),
      (l.extractStickerPackIdFromUrl = _),
      (l.generateStickerPackThumbnail = f),
      (l.generateStickerGridThumbnail = h));
  },
  98,
);
