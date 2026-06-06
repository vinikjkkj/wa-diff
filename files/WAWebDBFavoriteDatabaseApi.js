__d(
  "WAWebDBFavoriteDatabaseApi",
  [
    "WAWebLidMigrationDbUtils",
    "WAWebSchemaFavorite",
    "WAWebUserPrefsFavoritesLidMigration",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebUserPrefsFavoritesLidMigration",
          ).isFavoritesMigrationComplete()
            ? yield C(e)
            : e;
          yield o("WAWebSchemaFavorite")
            .getFavoriteTable()
            .bulkCreateOrReplace(t);
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebUserPrefsFavoritesLidMigration",
          ).isFavoritesMigrationComplete()
            ? yield C(e)
            : e;
          (yield o("WAWebSchemaFavorite").getFavoriteTable().clear(),
            yield o("WAWebSchemaFavorite")
              .getFavoriteTable()
              .bulkCreateOrReplace(t));
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WAWebUserPrefsFavoritesLidMigration",
          ).isFavoritesMigrationComplete()
            ? [].concat(yield h(e), e)
            : e;
          yield o("WAWebSchemaFavorite").getFavoriteTable().bulkRemove(t);
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaFavorite").getFavoriteTable().all();
          if (e.length === 0) return 0;
          var t = Math.max.apply(
            Math,
            e.map(function (e) {
              var t = e.orderIndex;
              return t;
            }),
          );
          return t + 1;
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaFavorite").getFavoriteTable().all();
          return o(
            "WAWebUserPrefsFavoritesLidMigration",
          ).isFavoritesMigrationComplete()
            ? v(e)
            : e;
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebLidMigrationDbUtils",
          ).findAccountLidsForPnChatIds(e);
          return e.map(function (e) {
            var n;
            return (n = t.get(e)) != null ? n : e;
          });
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebLidMigrationDbUtils",
          ).findAccountLidsForPnChatIds(
            e.map(function (e) {
              return e.id;
            }),
          );
          return e.map(function (e) {
            var n;
            return babelHelpers.extends({}, e, {
              id: (n = t.get(e.id)) != null ? n : e.id,
            });
          });
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebLidMigrationDbUtils").findChatIdsForAccountLids(
            e.map(function (e) {
              return e.id;
            }),
          );
          return e.map(function (e) {
            var n;
            return babelHelpers.extends({}, e, {
              id: (n = t.get(e.id)) != null ? n : e.id,
            });
          });
        })),
        S.apply(this, arguments)
      );
    }
    ((l.addOrEditFavorites = e),
      (l.setFavorites = u),
      (l.removeFavorites = d),
      (l.getNextFavoriteOrderIndex = p),
      (l.getAllFavorites = f));
  },
  98,
);
