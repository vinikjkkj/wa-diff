__d(
  "WAWebFetchAndUpdateBlocklistJob",
  [
    "WAArrayUtils",
    "WALogger",
    "WAPromiseDelays",
    "WAWebApiBlocklist",
    "WAWebBackendApi",
    "WAWebBlocklistMigration",
    "WAWebCriticalEventWamEvent",
    "WAWebDBCreateLidPnMappings",
    "WAWebGetBlocklistJob",
    "WAWebLid1X1MigrationGating",
    "WAWebLidAwareContactsDB",
    "WAWebLogoutReasonConstants",
    "WAWebSetUsernameJob",
    "WAWebSocketLogoutJob",
    "WAWebUpdateLidMetadataJob",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsMultiDevice",
    "WAWebUsernameTypes",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "compactMap",
    "partitionArray",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _;
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[blocklist] fetch blocklist reason: ",
                "",
              ])),
            t,
          ),
            t === "post-migration" &&
              (yield o("WAWebUserPrefsMultiDevice").setBlocklistHash(null),
              yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
                "WAReceivedBlocklistMigrationBefore1x1Migration",
              )));
          var n = yield o("WAWebGetBlocklistJob").getBlocklist();
          if (n.errorCode != null) return n;
          if (n.type === "mismatch") {
            n.dirty && (yield L("LidBlocklistForceMigratedDirty"));
            var a = o("WAWebBlocklistMigration").isBlocklistMigrated(),
              i = n.list;
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[blocklist] updating blocklist with ",
                  " contact(s)",
                ])),
              i.items.length,
            ),
              yield o("WAWebUserPrefsMultiDevice").setBlocklistHash(n.dhash));
            var l = o("WAWebGetBlocklistJob").extractWids(i);
            if (
              (yield o("WAWebApiBlocklist").updateBlocklist(l),
              o("WAWebBackendApi").frontendFireAndForget("replaceBlocklist", {
                wids: l,
              }),
              i.addressingMode === "pn")
            ) {
              a &&
                (yield L("LidBlocklistUnexpectedPnBlocklist"),
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[blocklist] received a pn-based blocklist on a migrated device, unmigrating it",
                    ])),
                ),
                o("WAWebBlocklistMigration").setBlocklistUnmigrated());
              var m = r("compactMap")(i.items, function (e) {
                var t = e.displayName,
                  n = e.wid;
                if (t == null || !n.isLid()) return null;
                var r = {};
                return (
                  t != null && (r.displayNameLID = t),
                  { lid: n, data: r }
                );
              });
              yield o("WAWebUpdateLidMetadataJob").updateLidMetadataJob(m);
            } else
              (i.addressingMode,
                o(
                  "WAWebLid1X1MigrationGating",
                ).Lid1X1MigrationUtils.isLidMigrated()
                  ? a ||
                    (o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[blocklist] received a lid-based blocklist, marking the device as migrated",
                        ])),
                    ),
                    o("WAWebBlocklistMigration").setBlocklistMigrated())
                  : yield E(),
                yield h(i.items));
          } else
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[blocklist] no change in blocklist, skip update",
                ])),
            );
          return n;
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
          var t = [],
            n = [];
          for (var r of e)
            (r.pn != null && t.push(r),
              (r.username != null || r.displayName != null) && n.push(r));
          (yield C(t), yield v(n));
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
          var t = o("WAArrayUtils").groupBy(e, function (e) {
              return e.pn.toString();
            }),
            n = [],
            a = [],
            i = 0;
          for (var l of t.values()) {
            var s = r("partitionArray")(l, function (e) {
                return e.active;
              }),
              u = s[0],
              c = s[1],
              d = c
                .sort(function (e, t) {
                  return r("WAWebWid").compare(e.lid, t.lid);
                })
                .reverse();
            (n.push.apply(n, R(d)), u.length > 1 && i++, a.push.apply(a, R(u)));
          }
          (i > 0 &&
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[blocklist] ",
                    " PNs have multiple active LIDs",
                  ])),
                i,
              )
              .sendLogs("blocklist-multiple-active-lids"),
            yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
              mappings: n,
              flushImmediately: !1,
              identityChangeHandlingEnabled: !1,
              learningSource: "blocklist-inactive",
            }),
            yield o("WAWebDBCreateLidPnMappings").createLidPnMappings({
              mappings: a,
              flushImmediately: !1,
              identityChangeHandlingEnabled: !1,
              learningSource: "blocklist-active",
            }),
            yield o("WAWebDBCreateLidPnMappings").flushLidPnMappingsToDb());
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
          for (
            var t = [],
              n = [],
              a = yield r("WAWebLidAwareContactsDB").bulkGet(
                e.map(function (e) {
                  return e.lid.toString();
                }),
              ),
              i = 0;
            i < e.length;
            i++
          ) {
            var l = e[i],
              s = a[i];
            if (l.username != null) {
              var u = o("WAWebUsernameTypes").asMaybeUsername(l.username);
              u != null &&
                (s == null || (s.username == null && s.phoneNumber == null)) &&
                t.push({ userId: l.lid, username: u });
            } else
              (l.displayName,
                (s == null || s.displayNameLID == null) &&
                  n.push({
                    lid: l.lid,
                    data: { displayNameLID: l.displayName },
                  }));
          }
          (yield o("WAWebSetUsernameJob").setUsernamesJob(t),
            yield o("WAWebUpdateLidMetadataJob").updateLidMetadataJob(n));
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return e.map(function (e) {
        return { lid: e.lid, pn: e.pn };
      });
    }
    function L(e) {
      var t = new (o("WAWebCriticalEventWamEvent").CriticalEventWamEvent)({
        name: e,
        debug: "{fetch}",
      });
      return t.commitAndWaitForFlush();
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.hasStateDiscrepancy()
          )
            return yield o("WAWebSocketLogoutJob").socketLogout(
              o("WAWebLogoutReasonConstants").LogoutReason
                .LidMigrationStateDiscrepancy,
            );
          (o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[blocklist] received a lid-based blocklist on an unmigrated device, will send critical event and log out",
                ])),
            )
            .sendLogs("LidBlocklistUnmigratedChatDb"),
            yield L("LidBlocklistUnmigratedChatDb"),
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[blocklist] critical event committed",
                ])),
            ),
            yield o("WAPromiseDelays").delayMs(5e3),
            yield o("WAWebSocketLogoutJob").socketLogout(
              o("WAWebLogoutReasonConstants").LogoutReason
                .LidBlocklistChatDbUnmigrated,
            ));
        })),
        k.apply(this, arguments)
      );
    }
    ((l.fetchAndUpdateBlocklist = f), (l.learnIdentifiers = h));
  },
  98,
);
