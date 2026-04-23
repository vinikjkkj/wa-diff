__d(
  "WAWebInactiveGroupLidMigrationJob",
  [
    "WAJids",
    "WALogger",
    "WAWebGroupsParticipantsApi",
    "WAWebInactiveGroupLidMigration",
    "WAWebNetworkStatus",
    "WAWebQueryAndUpdateGroupMetadataJob",
    "WAWebSchemaGroupMetadata",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _;
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = o(
            "WAWebInactiveGroupLidMigration",
          ).isInactiveGroupLidMigrationComplete();
          if (t) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[lid-inactive-group-migration] already done, skip",
                ])),
            );
            return;
          }
          (yield r("WAWebNetworkStatus").waitIfOffline(),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[lid-inactive-group-migration] starting migration",
                ])),
            ));
          try {
            var n = yield h();
            if (n.length === 0)
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[lid-inactive-group-migration] no PN groups, done",
                  ])),
              ),
                o(
                  "WAWebInactiveGroupLidMigration",
                ).setInactiveGroupLidMigrationComplete());
            else {
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[lid-inactive-group-migration] found ",
                    " PN groups",
                  ])),
                n.length,
              ),
                yield o(
                  "WAWebQueryAndUpdateGroupMetadataJob",
                ).queryAndUpdateAllGroupMetadata({
                  batchQueryArgs: {
                    groupJids: n.map(function (e) {
                      return o("WAJids").toGroupJid(e.id);
                    }),
                    queryContext: "inactive_group_migration",
                  },
                }),
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[lid-inactive-group-migration] groups queried+updated",
                    ])),
                ));
              var a = yield h();
              a.length === 0
                ? (o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[lid-inactive-group-migration] no PN groups left, done",
                      ])),
                  ),
                  o(
                    "WAWebInactiveGroupLidMigration",
                  ).setInactiveGroupLidMigrationComplete())
                : o("WALogger")
                    .LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[lid-inactive-group-migration] ",
                          " PN groups left, retry later",
                        ])),
                      a.length,
                    )
                    .sendLogs("lid-inactive-group-migration-incomplete", {
                      sampling: 0.1,
                    });
            }
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[lid-inactive-group-migration] migration failed: ",
                      "",
                    ])),
                  e instanceof Error ? e.message : String(e),
                )
                .sendLogs("lid-inactive-group-migration-failed"),
              e
            );
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebSchemaGroupMetadata")
              .getGroupMetadataTable()
              .all(),
            t = e.filter(function (e) {
              return e.isLidAddressingMode !== !0;
            }),
            n = yield o("WAWebGroupsParticipantsApi").bulkCheckMyMembership(
              t.map(function (e) {
                return o("WAWebWidFactory").createWid(e.id);
              }),
            ),
            r = [];
          return (
            t.forEach(function (e, t) {
              var o = n[t];
              o && !e.suspended && !e.terminated && r.push(e);
            }),
            r
          );
        })),
        y.apply(this, arguments)
      );
    }
    l.migrateInactiveGroupsToLid = f;
  },
  98,
);
