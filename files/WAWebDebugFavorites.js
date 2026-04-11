__d(
  "WAWebDebugFavorites",
  ["WAWebFavoritesSync", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield r("WAWebFavoritesSync").applyMutations(e);
        })),
        s.apply(this, arguments)
      );
    }
    e.doc =
      "Apply favorites mutations to the DB. This is used for testing purposes only.";
    var u = { applyFavoritesMutations: e };
    l.default = u;
  },
  98,
);
