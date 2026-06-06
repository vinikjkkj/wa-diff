__d(
  "WAWebDBLabelAssociationDatabaseMigrationToLid",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebLid1X1MigrationGating",
    "WAWebModelStorageUtils",
    "WAWebSchemaLabelAssociation",
    "WAWebUserPrefsLabelAssociationsLidMigration",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C;
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            o(
              "WAWebUserPrefsLabelAssociationsLidMigration",
            ).isLabelAssociationsMigrationComplete()
          ) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[labelAssocMigration] already complete",
                ])),
            );
            return;
          }
          if (
            !o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated()
          ) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[labelAssocMigration] 1-1 threads not migrated to lid",
                  ])),
              )
              .sendLogs(
                "migrateLabelAssociationsDatabaseToLid-1-1-not-migrated",
              );
            return;
          }
          var t = !1;
          (yield o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["label-association", "chat"],
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var n = e[0],
                      a = e[1],
                      i = n,
                      l = a;
                    try {
                      o("WALogger").LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[labelAssocMigration] start",
                          ])),
                      );
                      var s = yield i.all(),
                        C = [],
                        b = new Set();
                      if (
                        (o("WALogger").LOG(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "[labelAssocMigration] loaded ",
                              " assocs",
                            ])),
                          s.length,
                        ),
                        s.forEach(function (e) {
                          var t = e.associationId,
                            n = e.type;
                          if (
                            n ===
                            o("WAWebSchemaLabelAssociation")
                              .LabelAssociationType.Jid
                          ) {
                            var r = o("WAWebWidFactory").createWid(t);
                            if (r.isRegularUser()) {
                              if (r.isLid()) {
                                b.add(t);
                                return;
                              }
                              C.push(e);
                            }
                          }
                        }),
                        C.length === 0)
                      ) {
                        (o("WALogger").LOG(
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
                              "[labelAssocMigration] no assocs to migrate",
                            ])),
                        ),
                          (t = !0));
                        return;
                      }
                      o("WALogger").LOG(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[labelAssocMigration] found ",
                            " assocs to migrate",
                          ])),
                        C.length,
                      );
                      var v = C.map(function (e) {
                          return e.associationId;
                        }),
                        S = yield l.bulkGet(v),
                        R = 0,
                        L = 0,
                        E = 0,
                        k = [],
                        I = [];
                      (C.forEach(function (e, t) {
                        var n = null,
                          r = S[t];
                        if ((r != null ? (n = r.accountLid) : R++, n == null)) {
                          var a;
                          if (
                            ((n =
                              (a = o("WAWebApiContact").getCurrentLid(
                                o("WAWebWidFactory").createUserWidOrThrow(v[t]),
                              )) == null
                                ? void 0
                                : a.toString()),
                            n == null)
                          ) {
                            r != null && L++;
                            return;
                          }
                        }
                        if (b.has(n)) {
                          (E++,
                            k.push(
                              o(
                                "WAWebSchemaLabelAssociation",
                              ).createLabelAssociationPrimaryKey(e),
                            ));
                          return;
                        }
                        (k.push(
                          o(
                            "WAWebSchemaLabelAssociation",
                          ).createLabelAssociationPrimaryKey(e),
                        ),
                          I.push(
                            babelHelpers.extends({}, e, { associationId: n }),
                          ));
                      }),
                        o("WALogger").LOG(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "[labelAssocMigration] chatRows not found: ",
                              "",
                            ])),
                          R,
                        ),
                        o("WALogger").LOG(
                          _ ||
                            (_ = babelHelpers.taggedTemplateLiteralLoose([
                              "[labelAssocMigration] deduped: ",
                              "",
                            ])),
                          E,
                        ),
                        L > 0 &&
                          o("WALogger")
                            .ERROR(
                              f ||
                                (f = babelHelpers.taggedTemplateLiteralLoose([
                                  "[labelAssocMigration] accountLids not found: ",
                                  "",
                                ])),
                              L,
                            )
                            .sendLogs(
                              "migrateLabelAssociationsDatabaseToLid-not-found-account-lids",
                            ),
                        yield i.bulkRemove(k),
                        yield i.bulkCreate(I));
                      var T = yield i.count();
                      if (
                        (o("WALogger").LOG(
                          g ||
                            (g = babelHelpers.taggedTemplateLiteralLoose([
                              "[labelAssocMigration] assocs after: ",
                              "",
                            ])),
                          T,
                        ),
                        T !== s.length - E)
                      )
                        throw (
                          o("WALogger")
                            .ERROR(
                              h ||
                                (h = babelHelpers.taggedTemplateLiteralLoose([
                                  "[labelAssocMigration] count mismatch: ",
                                  " != ",
                                  " - ",
                                  "",
                                ])),
                              T,
                              s.length,
                              E,
                            )
                            .sendLogs(
                              "migrateLabelAssociationsDatabaseToLid-all-associations-after-migration-mismatch",
                            ),
                          r("err")(
                            "migrateLabelAssociationsDatabaseToLid: mismatch after migration",
                          )
                        );
                      t = L === 0;
                    } catch (e) {
                      throw (
                        o("WALogger")
                          .ERROR(
                            y ||
                              (y = babelHelpers.taggedTemplateLiteralLoose([
                                "[labelAssocMigration] error: ",
                                "",
                              ])),
                            r("getErrorSafe")(e).message,
                          )
                          .sendLogs(
                            "migrateLabelAssociationsDatabaseToLid-error",
                          ),
                        r("getErrorSafe")(e)
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
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[labelAssocMigration] complete +",
                  ])),
              ),
              o(
                "WAWebUserPrefsLabelAssociationsLidMigration",
              ).setLabelAssociationsMigrationAsComplete()));
        })),
        v.apply(this, arguments)
      );
    }
    l.migrateLabelAssociationsDatabaseToLid = b;
  },
  98,
);
