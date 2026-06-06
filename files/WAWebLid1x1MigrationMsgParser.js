__d(
  "WAWebLid1x1MigrationMsgParser",
  [
    "WABinary",
    "WAGzip",
    "WALogger",
    "WAWebLogoutReasonConstants",
    "WAWebProtobufLidMigrationSyncPayload.pb",
    "WAWebSocketLogoutJob",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "parseLidMigrationMappingSyncMsg: start handle peer mapping",
                ])),
            );
            var n = new (o("WABinary").Binary)(t);
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "parseLidMigrationMappingSyncMsg: after read binary",
                ])),
            );
            var r = yield o("WAGzip").inflate(n.readByteArrayView());
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "parseLidMigrationMappingSyncMsg: after decompress",
                ])),
            );
            var a = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufLidMigrationSyncPayload.pb")
                .LIDMigrationMappingSyncPayloadSpec,
              r,
            );
            if (
              (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "parseLidMigrationMappingSyncMsg: decoded (",
                    " entries)",
                  ])),
                a.pnToLidMappings.length,
              ),
              a == null || a.pnToLidMappings.length === 0)
            )
              return (
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "parseLidMigrationMappingSyncMsg: no mapping in protobuf",
                    ])),
                ),
                { mappings: [], primaryMigrationTsSec: null }
              );
            var i = a.pnToLidMappings.map(function (e) {
              var t,
                n = (t = o("WAWebWidFactory")).asUserWidOrThrow(
                  t.createUserWidOrThrow(e.pn.toString()),
                ),
                r = t.asUserWidOrThrow(
                  t.createWid(e.assignedLid.toString() + "@lid"),
                ),
                a =
                  (e == null ? void 0 : e.latestLid) != null
                    ? o("WAWebWidFactory").asUserWidOrThrow(
                        o("WAWebWidFactory").createWid(
                          e.latestLid.toString() + "@lid",
                        ),
                      )
                    : null;
              return { pnUser: n, assignedLid: r, latestLid: a };
            });
            return (
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "parseLidMigrationMappingSyncMsg: completed successfully",
                  ])),
              ),
              { mappings: i, primaryMigrationTsSec: a.chatDbMigrationTimestamp }
            );
          } catch (e) {
            (o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "parseLidMigrationMappingSyncMsg: lid sync parse failed",
                  ])),
              )
              .sendLogs("lid-migration-parse-mappings"),
              yield o("WAWebSocketLogoutJob").socketLogout(
                o("WAWebLogoutReasonConstants").LogoutReason
                  .LidMigrationFailedToParseMapping,
              ));
          }
        })),
        f.apply(this, arguments)
      );
    }
    l.parseLidMigrationMappingSyncMsg = _;
  },
  98,
);
