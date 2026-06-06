__d(
  "WAWebMediaEditorUtilsCreateCanvasAndImage",
  [
    "WAWebCopyStickerToClipboard",
    "WAWebEmoji",
    "WAWebFeatureDetectionDetectWebpSupport",
    "WAWebFileUtils",
    "WAWebInMemoryLottieStickerCache",
    "WAWebMediaInMemoryBlobCache",
    "WAWebWebpToAnimationFrames",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.rgbaBuffer;
      if (!t) {
        var n = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(
          e.filehash,
        );
        if (!n) throw r("err")("Failed to get media blob");
        var a = await o("WAWebFileUtils").blobToArrayBuffer(n),
          i = (await r("WAWebWebpToAnimationFrames")(a)).frames[0];
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
    }
    function s(e) {
      return new Promise(function (t, n) {
        var r = new Image();
        ((r.crossOrigin = "anonymous"),
          (r.onload = function () {
            t(r);
          }),
          (r.onerror = n),
          (r.src = e));
      });
    }
    async function u(e) {
      var t = o("WAWebEmoji").EmojiUtil.getGlyphPath(e, 160);
      if (t != null) {
        var n = await s(t);
        return n;
      }
    }
    async function c(t) {
      var n;
      if (t.mediaData.isLottie === !0) {
        var r = o(
          "WAWebInMemoryLottieStickerCache",
        ).InMemoryLottieStickerCache.get(t.filehash);
        n = await o(
          "WAWebCopyStickerToClipboard",
        ).createCanvasFromLottieSticker(r);
      } else if (
        await o("WAWebFeatureDetectionDetectWebpSupport").detectWebpSupport()
      ) {
        var a = t.mediaData.filehash,
          i = o(
            "WAWebMediaInMemoryBlobCache",
          ).InMemoryMediaBlobCache.getOrCreateURL(a);
        n = await s(i);
      } else n = await e(t.mediaData);
      return n;
    }
    ((l.createImageFromEmoji = u), (l.createImageFromSticker = c));
  },
  98,
);
