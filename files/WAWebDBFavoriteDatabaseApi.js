__d(
  "WAWebDBFavoriteDatabaseApi",
  [
    "WAWebLidMigrationDbUtils",
    "WAWebSchemaFavorite",
    "WAWebUserPrefsFavoritesLidMigration",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o(
        "WAWebUserPrefsFavoritesLidMigration",
      ).isFavoritesMigrationComplete()
        ? await p(e)
        : e;
      await o("WAWebSchemaFavorite").getFavoriteTable().bulkCreateOrReplace(t);
    }
    async function s(e) {
      var t = o(
        "WAWebUserPrefsFavoritesLidMigration",
      ).isFavoritesMigrationComplete()
        ? await p(e)
        : e;
      (await o("WAWebSchemaFavorite").getFavoriteTable().clear(),
        await o("WAWebSchemaFavorite")
          .getFavoriteTable()
          .bulkCreateOrReplace(t));
    }
    async function u(e) {
      var t = o(
        "WAWebUserPrefsFavoritesLidMigration",
      ).isFavoritesMigrationComplete()
        ? [].concat(await m(e), e)
        : e;
      await o("WAWebSchemaFavorite").getFavoriteTable().bulkRemove(t);
    }
    async function c() {
      var e = await o("WAWebSchemaFavorite").getFavoriteTable().all();
      if (e.length === 0) return 0;
      var t = Math.max.apply(
        Math,
        e.map(function (e) {
          var t = e.orderIndex;
          return t;
        }),
      );
      return t + 1;
    }
    async function d() {
      var e = await o("WAWebSchemaFavorite").getFavoriteTable().all();
      return o(
        "WAWebUserPrefsFavoritesLidMigration",
      ).isFavoritesMigrationComplete()
        ? _(e)
        : e;
    }
    async function m(e) {
      var t = await o("WAWebLidMigrationDbUtils").findAccountLidsForPnChatIds(
        e,
      );
      return e.map(function (e) {
        var n;
        return (n = t.get(e)) != null ? n : e;
      });
    }
    async function p(e) {
      var t = await o("WAWebLidMigrationDbUtils").findAccountLidsForPnChatIds(
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
    }
    async function _(e) {
      var t = await o("WAWebLidMigrationDbUtils").findChatIdsForAccountLids(
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
    }
    ((l.addOrEditFavorites = e),
      (l.setFavorites = s),
      (l.removeFavorites = u),
      (l.getNextFavoriteOrderIndex = c),
      (l.getAllFavorites = d));
  },
  98,
);
