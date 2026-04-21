__d(
  "WAWebInMemoryLottieStickerCache",
  [
    "WAWebABProps",
    "WAWebLruCacheMap",
    "WAWebMediaMmsV4Download",
    "WAWebStickerErrorWamEvent",
    "WAWebStickerMimeUtils",
    "WAWebWamEnumStickerErrorType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 5e3,
      s = new (o("WAWebLruCacheMap").LruCacheMap)({ sizeLimit: e }),
      u = new (o("WAWebLruCacheMap").LruCacheMap)({ sizeLimit: e });
    function c(e, t) {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "aura_stickers_overlay_animation_enabled",
        ) &&
        t === o("WAWebStickerMimeUtils").WhatsAppLottieStickerMimeType &&
        s.has(e) &&
        u.has(e)
      );
    }
    function d(e) {
      var t = ["v", "ip", "op", "layers", "fr", "w", "h"];
      return t.every(function (t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      });
    }
    var m = new (o("WAWebLruCacheMap").LruCacheMap)({ sizeLimit: e });
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = s.has(e),
            r = u.has(e) || m.has(e);
          if (!(n && r)) {
            var a = yield o("WAWebMediaMmsV4Download").extractBothLottieJSON(
                t,
                e,
              ),
              i = a.primary,
              l = a.secondary,
              c = n;
            if (i != null && !n)
              try {
                var p = JSON.parse(i);
                d(p) && (s.set(e, p), (c = !0));
              } catch (e) {
                new (o("WAWebStickerErrorWamEvent").StickerErrorWamEvent)({
                  stickerErrorType: o("WAWebWamEnumStickerErrorType")
                    .STICKER_ERROR_TYPE.RECEIVER_VALIDATION,
                }).commit();
              }
            if (c)
              if (l != null)
                try {
                  var _ = JSON.parse(l);
                  d(_) && u.set(e, _);
                } catch (e) {}
              else i != null && m.set(e, !0);
          }
        })),
        _.apply(this, arguments)
      );
    }
    ((l.InMemoryLottieStickerCache = s),
      (l.InMemorySecondaryLottieStickerCache = u),
      (l.canShowSecondaryAnimation = c),
      (l.extractAndSetBothLottieJSONInMemoryCache = p));
  },
  98,
);
