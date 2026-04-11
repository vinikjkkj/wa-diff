__d(
  "WAWebInMemoryLottieStickerCache",
  [
    "WAWebLruCacheMap",
    "WAWebMediaMmsV4Download",
    "WAWebStickerErrorWamEvent",
    "WAWebWamEnumStickerErrorType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 5e3,
      s = new (o("WAWebLruCacheMap").LruCacheMap)({ sizeLimit: e }),
      u = new (o("WAWebLruCacheMap").LruCacheMap)({ sizeLimit: e });
    function c(e) {
      var t = ["v", "ip", "op", "layers", "fr", "w", "h"];
      return t.every(function (t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      });
    }
    var d = new (o("WAWebLruCacheMap").LruCacheMap)({ sizeLimit: e });
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = s.has(e),
            r = u.has(e) || d.has(e);
          if (!(n && r)) {
            var a = yield o("WAWebMediaMmsV4Download").extractBothLottieJSON(
                t,
                e,
              ),
              i = a.primary,
              l = a.secondary;
            if (i != null && !n)
              try {
                var m = JSON.parse(i);
                c(m) && s.set(e, m);
              } catch (e) {
                new (o("WAWebStickerErrorWamEvent").StickerErrorWamEvent)({
                  stickerErrorType: o("WAWebWamEnumStickerErrorType")
                    .STICKER_ERROR_TYPE.RECEIVER_VALIDATION,
                }).commit();
              }
            if (l != null)
              try {
                var p = JSON.parse(l);
                c(p) && u.set(e, p);
              } catch (e) {}
            else i != null && d.set(e, !0);
          }
        })),
        p.apply(this, arguments)
      );
    }
    ((l.InMemoryLottieStickerCache = s),
      (l.InMemorySecondaryLottieStickerCache = u),
      (l.extractAndSetBothLottieJSONInMemoryCache = m));
  },
  98,
);
