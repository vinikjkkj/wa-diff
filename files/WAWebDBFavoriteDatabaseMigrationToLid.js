__d(
  "WAWebDBFavoriteDatabaseMigrationToLid",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebModelStorageUtils",
    "WAWebUserPrefsFavoritesLidMigration",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S, R;
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            o(
              "WAWebUserPrefsFavoritesLidMigration",
            ).isFavoritesMigrationComplete()
          ) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "migrateFavoritesDatabaseToLid: migration already complete",
                ])),
            );
            return;
          }
          var t = !1;
          (yield o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["favorite", "chat"],
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var n = e[0],
                      a = e[1],
                      i = n,
                      l = a;
                    try {
                      o("WALogger").LOG(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "migrateFavoritesDatabaseToLid: start migration",
                          ])),
                      );
                      var R = yield i.all(),
                        L = [],
                        E = new Set();
                      if (
                        (o("WALogger").LOG(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "migrateFavoritesDatabaseToLid: loaded ",
                              " favorites",
                            ])),
                          R.length,
                        ),
                        R.forEach(function (e) {
                          var t = e.id,
                            n = o("WAWebWidFactory").createWid(t);
                          if (n.isRegularUser()) {
                            if (n.isLid()) {
                              E.add(t);
                              return;
                            }
                            L.push(e);
                          }
                        }),
                        L.length === 0)
                      ) {
                        (o("WALogger").LOG(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "migrateFavoritesDatabaseToLid: no favorites to migrate",
                            ])),
                        ),
                          (t = !0));
                        return;
                      }
                      o("WALogger").LOG(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "migrateFavoritesDatabaseToLid: found ",
                            " favorites to migrate",
                          ])),
                        L.length,
                      );
                      var k = L.map(function (e) {
                          return e.id;
                        }),
                        I = yield l.bulkGet(k),
                        T = 0,
                        D = 0,
                        x = 0,
                        $ = [],
                        P = [];
                      (L.forEach(function (e, t) {
                        var n = null,
                          r = I[t];
                        if ((r != null ? (n = r.accountLid) : T++, n == null)) {
                          var a;
                          if (
                            ((n =
                              (a = o("WAWebApiContact").getCurrentLid(
                                o("WAWebWidFactory").createUserWidOrThrow(k[t]),
                              )) == null
                                ? void 0
                                : a.toString()),
                            n == null)
                          ) {
                            r != null && D++;
                            return;
                          }
                        }
                        if (E.has(n)) {
                          (x++, $.push(e.id));
                          return;
                        }
                        ($.push(e.id),
                          P.push(babelHelpers.extends({}, e, { id: n })));
                      }),
                        o("WALogger").LOG(
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
                              "migrateFavoritesDatabaseToLid: not found chat rows: ",
                              "",
                            ])),
                          T,
                        ),
                        o("WALogger").LOG(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "migrateFavoritesDatabaseToLid: deduped favourites: ",
                              "",
                            ])),
                          x,
                        ),
                        D > 0 &&
                          o("WALogger")
                            .ERROR(
                              _ ||
                                (_ = babelHelpers.taggedTemplateLiteralLoose([
                                  "migrateFavoritesDatabaseToLid: not found account lids: ",
                                  "",
                                ])),
                              D,
                            )
                            .sendLogs(
                              "migrateFavoritesDatabaseToLid-not-found-account-lids",
                            ),
                        yield i.bulkRemove($));
                      var N = (yield i.bulkGet(
                        P.map(function (e) {
                          return e.id;
                        }),
                      )).filter(Boolean);
                      if (N.length > 0) {
                        var M = N.filter(function (e) {
                          return E.has(e.id);
                        });
                        o("WALogger")
                          .ERROR(
                            f ||
                              (f = babelHelpers.taggedTemplateLiteralLoose([
                                "migrateFavoritesDatabaseToLid: unexpected existing favs=",
                                " inLidSet=",
                                "",
                              ])),
                            N.length,
                            M.length,
                          )
                          .sendLogs(
                            "migrateFavoritesDatabaseToLid-existing-favorites",
                          );
                        var w = new Set(
                          N.map(function (e) {
                            return e.id;
                          }),
                        );
                        P = P.filter(function (e) {
                          return !w.has(e.id);
                        });
                      } else
                        o("WALogger").LOG(
                          g ||
                            (g = babelHelpers.taggedTemplateLiteralLoose([
                              "migrateFavoritesDatabaseToLid: no unexpected existing favs",
                            ])),
                        );
                      var A = new Map(
                        P.map(function (e) {
                          return [e.id, e];
                        }),
                      );
                      (A.size !== P.length
                        ? (o("WALogger")
                            .ERROR(
                              h ||
                                (h = babelHelpers.taggedTemplateLiteralLoose([
                                  "migrateFavoritesDatabaseToLid: duplicate favs=",
                                  "",
                                ])),
                              P.length - A.size,
                            )
                            .sendLogs(
                              "migrateFavoritesDatabaseToLid-duplicate-favorites",
                            ),
                          (P = Array.from(A.values())))
                        : o("WALogger").LOG(
                            y ||
                              (y = babelHelpers.taggedTemplateLiteralLoose([
                                "migrateFavoritesDatabaseToLid: no duplicate favs",
                              ])),
                          ),
                        o("WALogger").LOG(
                          C ||
                            (C = babelHelpers.taggedTemplateLiteralLoose([
                              "migrateFavoritesDatabaseToLid: adding ",
                              " favorites",
                            ])),
                          P.length,
                        ),
                        yield i.bulkCreate(P));
                      var F = yield i.count();
                      if (
                        (o("WALogger").LOG(
                          b ||
                            (b = babelHelpers.taggedTemplateLiteralLoose([
                              "migrateFavoritesDatabaseToLid: all favorites after migration: ",
                              "",
                            ])),
                          F,
                        ),
                        F !== R.length - x)
                      )
                        throw (
                          o("WALogger")
                            .ERROR(
                              v ||
                                (v = babelHelpers.taggedTemplateLiteralLoose([
                                  "migrateFavoritesDatabaseToLid: count mismatch after=",
                                  " all=",
                                  " deduped=",
                                  "",
                                ])),
                              F,
                              R.length,
                              x,
                            )
                            .sendLogs(
                              "migrateFavoritesDatabaseToLid-all-favorites-after-migration-mismatch",
                            ),
                          r("err")(
                            "migrateFavoritesDatabaseToLid: mismatch after migration",
                          )
                        );
                      t = D === 0;
                    } catch (e) {
                      var O = r("getErrorSafe")(e);
                      throw (
                        o("WALogger")
                          .ERROR(
                            S ||
                              (S = babelHelpers.taggedTemplateLiteralLoose([
                                "migrateFavoritesDatabaseToLid: migration error",
                              ])),
                          )
                          .catching(O)
                          .sendLogs("migrateFavoritesDatabaseToLid-error"),
                        O
                      );
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
            t &&
              (o("WALogger").LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "migrateFavoritesDatabaseToLid: migration complete, success",
                  ])),
              ),
              o(
                "WAWebUserPrefsFavoritesLidMigration",
              ).setFavoritesMigrationAsComplete()));
        })),
        E.apply(this, arguments)
      );
    }
    l.migrateFavoritesDatabaseToLid = L;
  },
  98,
);
