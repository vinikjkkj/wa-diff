__d(
  "WAWebMusicJourneyLogger",
  [
    "WAWebExpressionTrayUserJourneyWamEvent",
    "WAWebMusicJourneyWamEvent",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebWamEnumExpressionUserJourneyAction",
    "WAWebWamEnumExpressionUserJourneyScreen",
    "WAWebWamEnumExpressionUserJourneyTarget",
    "WAWebWamEnumMusicCategory",
    "WAWebWamEnumMusicProduct",
  ],
  function (t, n, r, o, a, i, l) {
    var e = Math.pow(2, 53);
    function s() {
      var t = Math.floor(Math.random() * e),
        n = 0;
      return {
        log: function (r, a) {
          (new (o("WAWebMusicJourneyWamEvent").MusicJourneyWamEvent)(
            babelHelpers.extends({}, a, {
              musicAction: r,
              musicProduct: o("WAWebWamEnumMusicProduct").MUSIC_PRODUCT.CHATS,
              musicSessionId: t,
              sequenceNum: n,
            }),
          ).commit(),
            (n += 1));
        },
      };
    }
    function u() {
      new (o(
        "WAWebExpressionTrayUserJourneyWamEvent",
      ).ExpressionTrayUserJourneyWamEvent)({
        expressionUserJourneyScreen: o(
          "WAWebWamEnumExpressionUserJourneyScreen",
        ).EXPRESSION_USER_JOURNEY_SCREEN.STICKERS_TAB,
        expressionUserJourneyTarget: o(
          "WAWebWamEnumExpressionUserJourneyTarget",
        ).EXPRESSION_USER_JOURNEY_TARGET.MUSIC,
        traySessionId: r("WAWebPonyfillsCryptoRandomUUID")(),
        userJourneyAction: o("WAWebWamEnumExpressionUserJourneyAction")
          .EXPRESSION_USER_JOURNEY_ACTION.CLICK,
      }).commit();
    }
    function c(e, t, n) {
      return t !== "" || (n == null ? void 0 : n.type) === "artist"
        ? o("WAWebWamEnumMusicCategory").MUSIC_CATEGORY.SEARCH
        : e === "popular"
          ? o("WAWebWamEnumMusicCategory").MUSIC_CATEGORY.POPULAR
          : e === "mood"
            ? o("WAWebWamEnumMusicCategory").MUSIC_CATEGORY.MOOD
            : e === "genre"
              ? o("WAWebWamEnumMusicCategory").MUSIC_CATEGORY.GENRE
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    ((l.createMusicJourneyLogger = s),
      (l.logSendMusicTileClick = u),
      (l.toMusicCategory = c));
  },
  98,
);
