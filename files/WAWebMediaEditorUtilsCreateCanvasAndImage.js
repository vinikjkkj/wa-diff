__d(
  "WAWebMediaEditorUtilsCreateCanvasAndImage",
  [
    "Promise",
    "WAWebCopyStickerToClipboard",
    "WAWebEmoji",
    "WAWebFeatureDetectionDetectWebpSupport",
    "WAWebFileUtils",
    "WAWebInMemoryLottieStickerCache",
    "WAWebMediaInMemoryBlobCache",
    "WAWebWebpToAnimationFrames",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.rgbaBuffer;
          if (!t) {
            var n = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
              e.filehash,
            );
            if (!n) throw r("err")("Failed to get media blob");
            var a = yield o("WAWebFileUtils").blobToArrayBuffer(n),
              i = (yield r("WAWebWebpToAnimationFrames")(a)).frames[0];
            if (!i) throw r("err")("Failed to get sticker first frame.");
            t = i.rgbaBuffer;
          }
          var l = e.fullWidth,
            s = e.fullHeight,
            u = document.createElement("canvas");
          ((u.width = l), (u.height = s));
          var c = u.getContext("2d"),
            d = c.createImageData(l, s);
          return (d.data.set(new Uint8Array(t)), c.putImageData(d, 0, 0), u);
        })),
        u.apply(this, arguments)
      );
    }
    function c(t) {
      return new (e || (e = n("Promise")))(function (e, n) {
        var r = new Image();
        ((r.crossOrigin = "anonymous"),
          (r.onload = function () {
            e(r);
          }),
          (r.onerror = n),
          (r.src = t));
      });
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebEmoji").EmojiUtil.getGlyphPath(e, 160);
          if (t != null) {
            var n = yield c(t);
            return n;
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          if (e.mediaData.isLottie === !0) {
            var n = o(
              "WAWebInMemoryLottieStickerCache",
            ).InMemoryLottieStickerCache.get(e.filehash);
            t = yield o(
              "WAWebCopyStickerToClipboard",
            ).createCanvasFromLottieSticker(n);
          } else if (
            yield o(
              "WAWebFeatureDetectionDetectWebpSupport",
            ).detectWebpSupport()
          ) {
            var r = e.mediaData.filehash,
              a = o(
                "WAWebMediaInMemoryBlobCache",
              ).InMemoryMediaBlobCache.getOrCreateURL(r);
            t = yield c(a);
          } else t = yield s(e.mediaData);
          return t;
        })),
        _.apply(this, arguments)
      );
    }
    ((l.createImageFromEmoji = d), (l.createImageFromSticker = p));
  },
  98,
);
