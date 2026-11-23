__d(
  "WAWebStickerPackCreatorArchive",
  [
    "WABlobToArrayBuffer",
    "WAWebCanvasUtils",
    "WAWebMediaLoad",
    "WAWebStateUtils",
    "WAWebStickerPackUtils",
    "WAWebWamEnumWebcRmrReasonCode",
    "err",
    "fflate",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [288, 144, 96],
      s = "512_size",
      u = 3,
      c = 64,
      d = "\u{1F642}",
      m = "pack",
      p = "Placeholder description.",
      _ = "unknown",
      f = new Uint8Array(0),
      g = 16,
      h = 12,
      y = 1380533830,
      C = 1464156752,
      b = 1448097880,
      v = 1095650630,
      S = 2;
    async function R(e) {
      var t, n;
      await e.downloadMedia({
        downloadEvenIfExpensive: !0,
        rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
          .DOCUMENT_DOWNLOAD,
        isUserInitiated: !0,
      });
      var a = await o("WAWebStickerPackUtils").unzipStickerPackMedia(
          o("WAWebStateUtils").unproxy(e.unsafe()).mediaData.mediaBlob,
        ),
        i = (t = e.stickers) != null ? t : [],
        l = I(e, i, a);
      if (l.length === 0)
        throw r("err")("sticker pack archive contains no stickers");
      var s = D((n = e.filename) != null ? n : ""),
        u = await Promise.all(
          l.map(function (e, t) {
            return x(e, a[e], t + 1);
          }),
        ),
        c = new Map(
          i.map(function (e) {
            var t;
            return [(t = e.fileName) != null ? t : "", e];
          }),
        ),
        d = E(
          s,
          e,
          u.map(function (e, t) {
            return k(e, c.get(l[t]));
          }),
        );
      return {
        blob: new Blob([o("fflate").zipSync(L(s, d, u))], {
          type: "application/zip",
        }),
        filename: s,
      };
    }
    function L(t, n, r) {
      var a,
        i = {};
      ((i[t + "/"] = f),
        (i[t + "/" + t + ".json"] = o("fflate").strToU8(
          ((a = JSON.stringify(n, null, 2)) != null ? a : "") +
            `
`,
        )),
        (i[t + "/" + s + "/"] = f));
      for (var l of r) {
        var u = l.stem,
          c = l.webp;
        i[t + "/" + s + "/" + u + ".webp"] = c;
      }
      for (var d of e) {
        i[t + "/" + d + "_size/"] = f;
        for (var m of r) {
          var p = m.previews,
            _ = m.stem,
            g = p.get(d);
          g != null && (i[t + "/" + d + "_size/" + _ + ".png"] = g);
        }
      }
      return i;
    }
    function E(e, t, n) {
      var r,
        o,
        a = (r = (o = t.description) != null ? o : t.caption) != null ? r : "";
      return {
        "sticker-pack-id": e,
        name: { en: T(t.filename, e) },
        publisher: T(t.stickerPackPublisher, _),
        description: { en: T(a, p) },
        "creator-pack": !0,
        "store-eligible": !0,
        searchable: !0,
        avoid_description_translations: !0,
        stickers: n,
      };
    }
    function k(e, t) {
      var n,
        r = ((n = t == null ? void 0 : t.emojis) != null ? n : [])
          .map(function (e) {
            return e.trim();
          })
          .filter(function (e) {
            return e !== "";
          })
          .slice(0, u),
        o = { image_file: e.stem, emojis: r.length > 0 ? r : [d] },
        a = P(e.webp);
      return (a != null && (o.duration = a), o);
    }
    function I(e, t, n) {
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
    function T(e, t) {
      return e != null && e !== "" ? e : t;
    }
    function D(e) {
      var t = e
        .normalize("NFKD")
        .replace(/[^A-Za-z0-9_-]+/g, "_")
        .replace(/^_+|_+$/g, "")
        .slice(0, c);
      return t !== "" ? t : m;
    }
    async function x(t, n, a) {
      var i = URL.createObjectURL(new Blob([n], { type: "image/webp" }));
      try {
        var l = await o("WAWebMediaLoad")
            .loadImage(i)
            .catch(function () {
              throw r("err")("sticker " + t + " is not a decodable image");
            }),
          s = await Promise.all(
            e.map(async function (e) {
              return [e, await $(l, e)];
            }),
          );
        return {
          stem: String(a).padStart(2, "0"),
          webp: n,
          previews: new Map(s),
        };
      } finally {
        URL.revokeObjectURL(i);
      }
    }
    async function $(e, t) {
      var n = o("WAWebCanvasUtils").createCanvas(t, t),
        a = n.getContext("2d");
      if (!(a instanceof CanvasRenderingContext2D))
        throw r("err")("2d canvas context is unavailable");
      var i = Math.min(t / e.width, t / e.height),
        l = Math.round(e.width * i),
        s = Math.round(e.height * i);
      a.drawImage(e, Math.floor((t - l) / 2), Math.floor((t - s) / 2), l, s);
      var u = await o("WAWebCanvasUtils").canvasToBlob(n, "image/png");
      return new Uint8Array(
        await o("WABlobToArrayBuffer").blobToArrayBuffer(u),
      );
    }
    function P(e) {
      var t = new DataView(e.buffer, e.byteOffset, e.byteLength);
      if (!N(t, e.length)) return null;
      for (var n = !1, r = 0, o = h; o + 8 <= e.length; ) {
        var a = t.getUint32(o, !1),
          i = t.getUint32(o + 4, !0),
          l = o + 8;
        (a === b && l < e.length && (n = M(e[l])),
          a === v && l + 15 <= e.length && (r += w(e, l)),
          (o = l + i + (i % 2)));
      }
      return n ? r : null;
    }
    function N(e, t) {
      return t >= g && e.getUint32(0, !1) === y && e.getUint32(8, !1) === C;
    }
    function M(e) {
      return Math.floor(e / S) % 2 === 1;
    }
    function w(e, t) {
      return e[t + 12] + e[t + 13] * 256 + e[t + 14] * 65536;
    }
    l.buildCreatorPackArchive = R;
  },
  98,
);
