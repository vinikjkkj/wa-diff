__d(
  "WAWebCopyStickerToClipboard",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebCopyToClipboard",
    "WAWebStickerUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u() {
      var e = await r("JSResourceForInteraction")("WAWeb-lottie-light-canvas")
        .__setRef("WAWebCopyStickerToClipboard")
        .load();
      return e;
    }
    function c(t) {
      if (!o("WAWebCopyToClipboard").supportsCopyImageToClipboard())
        throw r("err")("Clipboard API not supported");
      var n = d(t).then(function (e) {
          return e == null
            ? Promise.reject(
                r("err")("Failed to create canvas from lottie sticker"),
              )
            : new Promise(function (t) {
                return e.toBlob(t, "image/png", 1);
              });
        }),
        a = new window.ClipboardItem({ "image/png": n });
      navigator.clipboard.write([a]).catch(function (t) {
        return o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Write image to clipboard failed",
              ])),
          )
          .sendLogs(String(t));
      });
    }
    async function d(e) {
      var t = await u(),
        n = document.createElement("canvas"),
        r = n.getContext("2d");
      ((n.width = o("WAWebStickerUtils").LOTTIE_STICKER_FULL_WIDTH),
        (n.height = o("WAWebStickerUtils").LOTTIE_STICKER_FULL_HEIGHT));
      try {
        var a = t.loadAnimation({
          renderer: "canvas",
          animationData: e,
          loop: !1,
          autoplay: !1,
          rendererSettings: { context: r },
        });
        return new Promise(function (e) {
          a.addEventListener("DOMLoaded", function () {
            return e(n);
          });
        });
      } catch (e) {
        return (
          o("WALogger")
            .LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "LottieSticker: Copy image to clipboard failed",
                ])),
            )
            .sendLogs(String(e)),
          null
        );
      }
    }
    ((l.copyLottieStickerToClipboard = c),
      (l.createCanvasFromLottieSticker = d));
  },
  98,
);
