__d(
  "WAWebDebugFavorites",
  ["WAWebFavoritesSync", "asyncToGeneratorRuntime", "vulture"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (r("vulture")("chTyQ3v-3KXUbe_rqAspeiuYqzA="),
            yield r("WAWebFavoritesSync").applyMutations(e));
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
