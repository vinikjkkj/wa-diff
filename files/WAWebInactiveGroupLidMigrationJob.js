__d(
  "WAWebInactiveGroupLidMigrationJob",
  [
    "WAJids",
    "WALogger",
    "WAWebABProps",
    "WAWebABPropsCache",
    "WAWebGroupsParticipantsApi",
    "WAWebInactiveGroupLidMigration",
    "WAWebNetworkStatus",
    "WAWebQueryAndUpdateGroupMetadataJob",
    "WAWebSchemaGroupMetadata",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebABPropsCache").waitForABPropConfigsReady();
          var t = o("WAWebABProps").getABPropConfigValue(
            "enable_inactive_group_lid_migration",
          );
          if (!t) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[lid-inactive-group-migration] ABProp disabled, skip",
                ])),
            );
            return;
          }
          var n = o(
            "WAWebInactiveGroupLidMigration",
          ).isInactiveGroupLidMigrationComplete();
          if (n) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[lid-inactive-group-migration] already done, skip",
                ])),
            );
            return;
          }
          (yield r("WAWebNetworkStatus").waitIfOffline(),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[lid-inactive-group-migration] starting migration",
                ])),
            ));
          try {
            var a = yield y();
            if (a.length === 0)
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[lid-inactive-group-migration] no PN groups, done",
                  ])),
              ),
                o(
                  "WAWebInactiveGroupLidMigration",
                ).setInactiveGroupLidMigrationComplete());
            else {
              (o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[lid-inactive-group-migration] found ",
                    " PN groups",
                  ])),
                a.length,
              ),
                yield o(
                  "WAWebQueryAndUpdateGroupMetadataJob",
                ).queryAndUpdateAllGroupMetadata({
                  batchQueryArgs: {
                    groupJids: a.map(function (e) {
                      return o("WAJids").toGroupJid(e.id);
                    }),
                    queryContext: "inactive_group_migration",
                  },
                }),
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[lid-inactive-group-migration] groups queried+updated",
                    ])),
                ));
              var i = yield y();
              i.length === 0
                ? (o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[lid-inactive-group-migration] no PN groups left, done",
                      ])),
                  ),
                  o(
                    "WAWebInactiveGroupLidMigration",
                  ).setInactiveGroupLidMigrationComplete())
                : o("WALogger")
                    .LOG(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "[lid-inactive-group-migration] ",
                          " PN groups left, retry later",
                        ])),
                      i.length,
                    )
                    .sendLogs("lid-inactive-group-migration-incomplete", {
                      sampling: 0.1,
                    });
            }
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
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
        h.apply(this, arguments)
      );
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        C.apply(this, arguments)
      );
    }
    l.migrateInactiveGroupsToLid = g;
  },
  98,
);
