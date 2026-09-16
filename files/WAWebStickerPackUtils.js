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
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e instanceof Blob ? e : e.getBlob();
          if (t == null) throw r("err")("blob is null");
          var n = yield o("WABlobToArrayBuffer").blobToArrayBuffer(t);
          return o("fflate").unzipSync(new Uint8Array(n));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.stickers,
            r = t.trayIconFileName,
            a = yield c(e),
            i = [],
            l = function* () {
              var e = s[0],
                t = s[1];
              if (e === r) return 1;
              if (t instanceof Uint8Array) {
                var a,
                  l = t.buffer,
                  u = yield o("WAMediaCalculateFilehash").calculateFilehash(l),
                  c =
                    n == null
                      ? void 0
                      : n.find(function (t) {
                          return t.fileName === e;
                        }),
                  d =
                    (a = c == null ? void 0 : c.mimetype) != null
                      ? a
                      : "image/webp";
                o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(
                  u,
                  new Blob([l], { type: d }),
                );
                var m = new (o("WAWebStickerModel").StickerModel)({
                  mimetype: d,
                  width: 250,
                  height: 250,
                  filehash: u,
                  id: u,
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
                i.push(m);
              }
            };
          for (var s of Object.entries(a)) yield* l();
          return i;
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        f.apply(this, arguments)
      );
    }
    function g(e) {
      if (o("WAWebApiParse").isStickerPackURL(e)) {
        var t = new URL(e),
          n = t.pathname.split("/"),
          r = n[0],
          a = n[1],
          i = n[2];
        return i;
      }
    }
    function h(e, t, n, r, o) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
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
              yield _({
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
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          r === void 0 &&
            (r = o("WAWebStickerPackConstants").STICKER_GRID_COUNT);
          var a = o("WAWebCanvasUtils").createCanvas(
              o("WAWebStickerPackConstants").THUMBNAIL_LENGTH,
              o("WAWebStickerPackConstants").THUMBNAIL_WIDTH,
            ),
            i = a.getContext("2d"),
            l = t.slice(0, r);
          if (l.length < r) {
            var s = yield v(l[0]);
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
                    var n = yield v(e);
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
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        S.apply(this, arguments)
      );
    }
    ((l.compressedRecentStickers = s),
      (l.unzipStickerPackMedia = c),
      (l.decompressStickerPackMedia = m),
      (l.extractStickerPackIdFromUrl = g),
      (l.generateStickerPackThumbnail = h),
      (l.generateStickerGridThumbnail = C));
  },
  98,
);
