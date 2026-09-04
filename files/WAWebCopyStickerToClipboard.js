__d(
  "WAWebCopyStickerToClipboard",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebCopyToClipboard",
    "WAWebStickerUtils",
    "WAWebStructuredClone",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("JSResourceForInteraction")(
            "WAWeb-lottie-light-canvas",
          )
            .__setRef("WAWebCopyStickerToClipboard")
            .load();
          return e;
        })),
        d.apply(this, arguments)
      );
    }
    function m(t) {
      if (!o("WAWebCopyToClipboard").supportsCopyImageToClipboard())
        throw r("err")("Clipboard API not supported");
      var a = p(t).then(function (e) {
          return e == null
            ? (u || (u = n("Promise"))).reject(
                r("err")("Failed to create canvas from lottie sticker"),
              )
            : new (u || (u = n("Promise")))(function (t) {
                return e.toBlob(t, "image/png", 1);
              });
        }),
        i = new window.ClipboardItem({ "image/png": a });
      navigator.clipboard.write([i]).catch(function (t) {
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
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield c(),
            a = document.createElement("canvas"),
            i = a.getContext("2d");
          ((a.width = o("WAWebStickerUtils").LOTTIE_STICKER_FULL_WIDTH),
            (a.height = o("WAWebStickerUtils").LOTTIE_STICKER_FULL_HEIGHT));
          try {
            var l = t.loadAnimation({
              renderer: "canvas",
              animationData: r("WAWebStructuredClone")(e),
              loop: !1,
              autoplay: !1,
              rendererSettings: { context: i },
            });
            return new (u || (u = n("Promise")))(function (e) {
              l.addEventListener("DOMLoaded", function () {
                return e(a);
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
        })),
        _.apply(this, arguments)
      );
    }
    ((l.copyLottieStickerToClipboard = m),
      (l.createCanvasFromLottieSticker = p));
  },
  98,
);
