__d(
  "WAWebLid1x1MigrationTimeoutUtils",
  [
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebLid1X1MigrationGating",
    "WAWebLid1X1ThreadAccountMigrations",
    "WAWebLid1X1ThreadAccountMigrations.flow",
    "WAWebProtobufSyncAction.pb",
    "WAWebSyncdDb",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = [
        o("WAWebLid1X1ThreadAccountMigrations.flow").LidThreadMigrationStatus
          .COMPLETE,
        o("WAWebLid1X1ThreadAccountMigrations.flow").LidThreadMigrationStatus
          .IN_PROGRESS,
        o("WAWebLid1X1ThreadAccountMigrations.flow").LidThreadMigrationStatus
          .READY,
      ];
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t =
              '["' +
              o("WASyncdConst").Actions.DeviceCapabilities +
              '","' +
              o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE().user +
              ':0@s.whatsapp.net"]',
            n = yield o("WAWebSyncdDb").getSyncAction(t);
          if ((n == null ? void 0 : n.binarySyncData) == null) return null;
          var r =
            (e = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
              n.binarySyncData,
            ).value) == null ||
            (e = e.deviceCapabilities) == null ||
            (e = e.lidMigration) == null
              ? void 0
              : e.chatDbMigrationTimestamp;
          return r == null ? null : o("WATimeUtils").castLongIntToUnixTime(r);
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
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[lid][timeout] check logout for missing peer msg",
              ])),
          );
          var t = o("WAWebABProps").getABPropConfigValue(
            "lid_one_on_one_migration_peer_sync_timeout_in_seconds",
          );
          if (t === 0) return { shouldScheduleTimeout: !1 };
          if (
            o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()
          )
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[lid][timeout] already migrated",
                  ])),
              ),
              { shouldScheduleTimeout: !1 }
            );
          var n = o(
            "WAWebLid1X1ThreadAccountMigrations",
          ).getLidThreadMigrationStatus().state;
          if (m.includes(n))
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[lid][timeout] already got peer mapping",
                  ])),
              ),
              { shouldScheduleTimeout: !1 }
            );
          var r = yield p();
          if (r == null)
            return (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[lid][timeout] primary did not migrate",
                  ])),
              ),
              { shouldScheduleTimeout: !1 }
            );
          var a = o("WATimeUtils").unixTime(),
            i = o("WATimeUtils").timeoutForAt(a, r, t),
            l = i / 1e3;
          return (
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[lid][timeout] logout in ",
                  "s delay=",
                  " primaryT=",
                  " localT=",
                  " state=",
                  "",
                ])),
              l,
              t,
              r,
              a,
              n,
            ),
            { shouldScheduleTimeout: !0, timeoutUntilLogout: i }
          );
        })),
        g.apply(this, arguments)
      );
    }
    ((l.PEER_MAPPING_RECEIVED_STATUSES = m),
      (l.getPrimaryMigrationTime = p),
      (l.shouldScheduleTimeoutForMissingPeerMessage = f));
  },
  98,
);
