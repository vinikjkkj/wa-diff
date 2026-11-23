__d(
  "WAWebLottieStickerFirstFrame",
  [
    "WAPromiseTimeout",
    "WAWebCanvasUtils",
    "WAWebCopyStickerToClipboard",
    "WAWebInMemoryLottieStickerCache",
    "WAWebStickerUtils",
    "WAWebStructuredClone",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "image/png",
      s = 5e3;
    async function u(t, n) {
      var a = t.mediaData.filehash;
      await o(
        "WAWebInMemoryLottieStickerCache",
      ).extractAndSetBothLottieJSONInMemoryCache(a, n);
      var i = o(
        "WAWebInMemoryLottieStickerCache",
      ).InMemoryLottieStickerCache.get(a);
      if (i == null)
        throw r("err")(
          "drawLottieStickerFrame: the sticker holds no Lottie animation",
        );
      var l = document.createElement("canvas");
      ((l.width = o("WAWebStickerUtils").LOTTIE_STICKER_FULL_WIDTH),
        (l.height = o("WAWebStickerUtils").LOTTIE_STICKER_FULL_HEIGHT));
      var u = l.getContext("2d");
      if (u == null)
        throw r("err")("drawLottieStickerFrame: no 2D canvas context");
      var d = await o(
          "WAWebCopyStickerToClipboard",
        ).requireLottieWebCanvasRuntime(),
        m = d.loadAnimation({
          renderer: "canvas",
          animationData: r("WAWebStructuredClone")(i),
          loop: !1,
          autoplay: !1,
          rendererSettings: { context: u },
        });
      try {
        return (
          await o("WAPromiseTimeout").promiseTimeout(c(m), s),
          await o("WAWebCanvasUtils").canvasToBlob(l, e)
        );
      } finally {
        m.destroy();
      }
    }
    function c(e) {
      return new Promise(function (t) {
        e.addEventListener("DOMLoaded", function () {
          return t();
        });
      });
    }
    l.default = u;
  },
  98,
);
