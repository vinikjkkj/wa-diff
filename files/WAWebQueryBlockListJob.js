__d(
  "WAWebQueryBlockListJob",
  [
    "WAArrayUtils",
    "WAAsyncSleep",
    "WALogger",
    "WASmaxPsaChatBlockGetRPC",
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
    var e, s, u, c, d, m, p, _, f;
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
            n.dirty && (yield I("LidBlocklistForceMigratedDirty"));
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
                (yield I("LidBlocklistUnexpectedPnBlocklist"),
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
                  : yield T(),
                yield b(i.items));
          } else
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[blocklist] no change in blocklist, skip update",
                ])),
            );
          return n;
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
          var e = yield o("WASmaxPsaChatBlockGetRPC").sendChatBlockGetRPC(),
            t;
          e: {
            var n = e;
            if (
              ((typeof n == "object" && n !== null) ||
                typeof n == "function") &&
              n.name === "ChatBlockGetResponseServerError" &&
              ((typeof n.value == "object" && n.value !== null) ||
                typeof n.value == "function") &&
              ((typeof n.value.errorChatBlockError == "object" &&
                n.value.errorChatBlockError !== null) ||
                typeof n.value.errorChatBlockError == "function") &&
              ((typeof n.value.errorChatBlockError.value == "object" &&
                n.value.errorChatBlockError.value !== null) ||
                typeof n.value.errorChatBlockError.value == "function") &&
              "code" in n.value.errorChatBlockError.value &&
              "text" in n.value.errorChatBlockError.value
            ) {
              var r = n.value.errorChatBlockError.value.code,
                a = n.value.errorChatBlockError.value.text;
              (o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "getBlockingStatusForPSAUser: server response with ",
                    ", ",
                    "",
                  ])),
                r,
                a,
              ),
                (t = { errorCode: Number(r), errorText: a }));
              break e;
            }
            if (
              ((typeof n == "object" && n !== null) ||
                typeof n == "function") &&
              n.name === "ChatBlockGetResponseSuccess" &&
              ((typeof n.value == "object" && n.value !== null) ||
                typeof n.value == "function") &&
              "blockingStatus" in n.value
            ) {
              var i = n.value.blockingStatus;
              t = i === "blocked";
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                n,
            );
          }
          return t;
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [],
            n = [];
          for (var r of e)
            (r.pn != null && t.push(r),
              (r.username != null || r.displayName != null) && n.push(r));
          (yield S(t), yield L(n));
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            (n.push.apply(n, k(d)), u.length > 1 && i++, a.push.apply(a, k(u)));
          }
          (i > 0 &&
            o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
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
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return e.map(function (e) {
        return { lid: e.lid, pn: e.pn };
      });
    }
    function I(e) {
      var t = new (o("WAWebCriticalEventWamEvent").CriticalEventWamEvent)({
        name: e,
        debug: "{fetch}",
      });
      return t.commitAndWaitForFlush();
    }
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[blocklist] received a lid-based blocklist on an unmigrated device, will send critical event and log out",
                ])),
            )
            .sendLogs("LidBlocklistUnmigratedChatDb"),
            yield I("LidBlocklistUnmigratedChatDb"),
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[blocklist] critical event committed",
                ])),
            ),
            yield o("WAAsyncSleep").asyncSleep(5e3),
            yield o("WAWebSocketLogoutJob").socketLogout(
              o("WAWebLogoutReasonConstants").LogoutReason
                .LidBlocklistChatDbUnmigrated,
            ));
        })),
        D.apply(this, arguments)
      );
    }
    ((l.fetchAndUpdateBlocklist = g),
      (l.getBlockingStatusForPSAUser = y),
      (l.learnIdentifiers = b));
  },
  98,
);
