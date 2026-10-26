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
    "WAWebStickerModel",
    "WAWebStickerPackConstants",
    "asyncToGeneratorRuntime",
    "err",
    "fflate",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e instanceof Blob ? e : e.getBlob();
          if (t == null) throw r("err")("blob is null");
          var n = yield o("WABlobToArrayBuffer").blobToArrayBuffer(t);
          return o("fflate").unzipSync(new Uint8Array(n));
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
            r = t.trayIconFileName,
            a = yield s(e),
            i = [],
            l = function* () {
              var e = u[0],
                t = u[1];
              if (e === r) return 1;
              if (t instanceof Uint8Array) {
                var a,
                  l = t.buffer,
                  s = yield o("WAMediaCalculateFilehash").calculateFilehash(l),
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
                  s,
                  new Blob([l], { type: d }),
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
                i.push(m);
              }
            };
          for (var u of Object.entries(a)) yield* l();
          return i;
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      if (o("WAWebApiParse").isStickerPackURL(e)) {
        var t = new URL(e),
          n = t.pathname.split("/"),
          r = n[0],
          a = n[1],
          i = n[2];
        return i;
      }
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          a === void 0 &&
            (a = o("WAWebStickerPackConstants").STICKER_GRID_COUNT);
          var i = o("WAWebCanvasUtils").createCanvas(
              o("WAWebStickerPackConstants").THUMBNAIL_LENGTH,
              o("WAWebStickerPackConstants").THUMBNAIL_WIDTH,
            ),
            l = r("nullthrows")(i.getContext("2d")),
            s = t.slice(0, a);
          if (s.length < a) {
            var u = yield f(s[0]);
            return (
              u != null &&
                l.drawImage(
                  u,
                  0,
                  0,
                  o("WAWebStickerPackConstants").THUMBNAIL_LENGTH,
                  o("WAWebStickerPackConstants").THUMBNAIL_WIDTH,
                ),
              i
            );
          }
          var c = yield (e || (e = n("Promise"))).all(
            s.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, t) {
                    var n = yield f(e);
                    return n != null ? { image: n, index: t } : null;
                  },
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
          );
          for (var d of c)
            if (d != null) {
              var m = d.image,
                p = d.index,
                _ = p % 2,
                g = Math.floor(p / 2),
                h =
                  o("WAWebStickerPackConstants").PADDING +
                  _ *
                    (o("WAWebStickerPackConstants").IMAGE_LENGTH +
                      o("WAWebStickerPackConstants").GRID_GAP),
                y =
                  o("WAWebStickerPackConstants").PADDING +
                  g *
                    (o("WAWebStickerPackConstants").IMAGE_WIDTH +
                      o("WAWebStickerPackConstants").GRID_GAP);
              l.drawImage(
                m,
                h,
                y,
                o("WAWebStickerPackConstants").IMAGE_LENGTH,
                o("WAWebStickerPackConstants").IMAGE_WIDTH,
              );
            }
          return i;
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        g.apply(this, arguments)
      );
    }
    ((l.unzipStickerPackMedia = s),
      (l.decompressStickerPackMedia = c),
      (l.extractStickerPackIdFromUrl = m),
      (l.generateStickerGridThumbnail = p));
  },
  98,
);
