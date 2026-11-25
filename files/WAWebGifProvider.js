__d(
  "WAWebGifProvider",
  [
    "WAWebABProps",
    "WAWebKlipyAppKey",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumGifSearchProvider",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 3;
    function s(t) {
      return (
        t === void 0 && (t = o("WAWebKlipyAppKey").getKlipyKey()),
        t !== "" && o("WAWebABProps").getABPropConfigValue("gif_provider") === e
          ? "klipy"
          : "giphy"
      );
    }
    function u() {
      return "giphy";
    }
    function c(e) {
      return e === "giphy"
        ? "GIPHY"
        : e === "klipy"
          ? "Klipy"
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function d(e) {
      return e === "giphy"
        ? o("WAWebWamEnumGifSearchProvider").GIF_SEARCH_PROVIDER.GIPHY
        : e === "klipy"
          ? o("WAWebWamEnumGifSearchProvider").GIF_SEARCH_PROVIDER.KLIPY
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function m(e) {
      return e === "giphy"
        ? o("WAWebProtobufsE2E.pb").Message$VideoMessage$Attribution.GIPHY
        : e === "klipy"
          ? o("WAWebProtobufsE2E.pb").Message$VideoMessage$Attribution.KLIPY
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    ((l.getGifPanelProvider = s),
      (l.getStickerSearchProvider = u),
      (l.getGifProviderName = c),
      (l.getGifSearchProviderWamValue = d),
      (l.getGifAttribution = m));
  },
  98,
);
