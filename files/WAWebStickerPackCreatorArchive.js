__d(
  "WAWebStickerPackCreatorArchive",
  [
    "Promise",
    "WABlobToArrayBuffer",
    "WAWebCanvasUtils",
    "WAWebMediaLoad",
    "WAWebStateUtils",
    "WAWebStickerPackUtils",
    "WAWebWamEnumWebcRmrReasonCode",
    "asyncToGeneratorRuntime",
    "err",
    "fflate",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = [288, 144, 96],
      u = "512_size",
      c = 3,
      d = 64,
      m = "\uD83D\uDE42",
      p = "pack",
      _ = "Placeholder description.",
      f = "unknown",
      g = new Uint8Array(0),
      h = 16,
      y = 12,
      C = 1380533830,
      b = 1464156752,
      v = 1448097880,
      S = 1095650630,
      R = 2;
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a, i;
          yield t.downloadMedia({
            downloadEvenIfExpensive: !0,
            rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
              .DOCUMENT_DOWNLOAD,
            isUserInitiated: !0,
          });
          var l = yield o("WAWebStickerPackUtils").unzipStickerPackMedia(
              o("WAWebStateUtils").unproxy(t.unsafe()).mediaData.mediaBlob,
            ),
            s = (a = t.stickers) != null ? a : [],
            u = D(t, s, l);
          if (u.length === 0)
            throw r("err")("sticker pack archive contains no stickers");
          var c = $((i = t.filename) != null ? i : ""),
            d = yield (e || (e = n("Promise"))).all(
              u.map(function (e, t) {
                return P(e, l[e], t + 1);
              }),
            ),
            m = new Map(
              s.map(function (e) {
                var t;
                return [(t = e.fileName) != null ? t : "", e];
              }),
            ),
            p = I(
              c,
              t,
              d.map(function (e, t) {
                return T(e, m.get(u[t]));
              }),
            );
          return {
            blob: new Blob([o("fflate").zipSync(k(c, p, d))], {
              type: "application/zip",
            }),
            filename: c,
          };
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t, n) {
      var r,
        a = {};
      ((a[e + "/"] = g),
        (a[e + "/" + e + ".json"] = o("fflate").strToU8(
          ((r = JSON.stringify(t, null, 2)) != null ? r : "") + "\n",
        )),
        (a[e + "/" + u + "/"] = g));
      for (var i of n) {
        var l = i.stem,
          c = i.webp;
        a[e + "/" + u + "/" + l + ".webp"] = c;
      }
      for (var d of s) {
        a[e + "/" + d + "_size/"] = g;
        for (var m of n) {
          var p = m.previews,
            _ = m.stem,
            f = p.get(d);
          f != null && (a[e + "/" + d + "_size/" + _ + ".png"] = f);
        }
      }
      return a;
    }
    function I(e, t, n) {
      var r,
        o,
        a = (r = (o = t.description) != null ? o : t.caption) != null ? r : "";
      return {
        "sticker-pack-id": e,
        name: { en: x(t.filename, e) },
        publisher: x(t.stickerPackPublisher, f),
        description: { en: x(a, _) },
        "creator-pack": !0,
        "store-eligible": !0,
        searchable: !0,
        avoid_description_translations: !0,
        stickers: n,
      };
    }
    function T(e, t) {
      var n,
        r = ((n = t == null ? void 0 : t.emojis) != null ? n : [])
          .map(function (e) {
            return e.trim();
          })
          .filter(function (e) {
            return e !== "";
          })
          .slice(0, c),
        o = { image_file: e.stem, emojis: r.length > 0 ? r : [m] },
        a = A(e.webp);
      return (a != null && (o.duration = a), o);
    }
    function D(e, t, n) {
      var r = [];
      for (var o of t) {
        var a = o.fileName;
        a != null && n[a] != null && r.push(a);
      }
      var i = new Set(r);
      for (var l of Object.keys(n))
        l !== e.trayIconFileName && !i.has(l) && r.push(l);
      return r;
    }
    function x(e, t) {
      return e != null && e !== "" ? e : t;
    }
    function $(e) {
      var t = e
        .normalize("NFKD")
        .replace(/[^A-Za-z0-9_-]+/g, "_")
        .replace(/^_+|_+$/g, "")
        .slice(0, d);
      return t !== "" ? t : p;
    }
    function P(e, t, n) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l = URL.createObjectURL(new Blob([a], { type: "image/webp" }));
          try {
            var u = yield o("WAWebMediaLoad")
                .loadImage(l)
                .catch(function () {
                  throw r("err")("sticker " + t + " is not a decodable image");
                }),
              c = yield (e || (e = n("Promise"))).all(
                s.map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        return [e, yield M(u, e)];
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
              );
            return {
              stem: String(i).padStart(2, "0"),
              webp: a,
              previews: new Map(c),
            };
          } finally {
            URL.revokeObjectURL(l);
          }
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebCanvasUtils").createCanvas(t, t),
            a = n.getContext("2d");
          if (!(a instanceof CanvasRenderingContext2D))
            throw r("err")("2d canvas context is unavailable");
          var i = Math.min(t / e.width, t / e.height),
            l = Math.round(e.width * i),
            s = Math.round(e.height * i);
          a.drawImage(
            e,
            Math.floor((t - l) / 2),
            Math.floor((t - s) / 2),
            l,
            s,
          );
          var u = yield o("WAWebCanvasUtils").canvasToBlob(n, "image/png");
          return new Uint8Array(
            yield o("WABlobToArrayBuffer").blobToArrayBuffer(u),
          );
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      var t = new DataView(e.buffer, e.byteOffset, e.byteLength);
      if (!F(t, e.length)) return null;
      for (var n = !1, r = 0, o = y; o + 8 <= e.length; ) {
        var a = t.getUint32(o, !1),
          i = t.getUint32(o + 4, !0),
          l = o + 8;
        (a === v && l < e.length && (n = O(e[l])),
          a === S && l + 15 <= e.length && (r += B(e, l)),
          (o = l + i + (i % 2)));
      }
      return n ? r : null;
    }
    function F(e, t) {
      return t >= h && e.getUint32(0, !1) === C && e.getUint32(8, !1) === b;
    }
    function O(e) {
      return Math.floor(e / R) % 2 === 1;
    }
    function B(e, t) {
      return e[t + 12] + e[t + 13] * 256 + e[t + 14] * 65536;
    }
    l.buildCreatorPackArchive = L;
  },
  98,
);
