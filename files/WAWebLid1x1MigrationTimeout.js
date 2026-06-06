__d(
  "WAWebLid1x1MigrationTimeout",
  [
    "WAAsyncSleep",
    "WALogger",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebLid11MigrationLifecycleWamEvent",
    "WAWebLid1X1MigrationGating",
    "WAWebLid1x1MigrationTimeoutUtils",
    "WAWebLogoutReasonConstants",
    "WAWebSocketLogoutJob",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebWamEnumMigrationStageEnum",
    "WAWebWamEnumStageFailureReasonEnum",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = null;
    async function f(t) {
      if (_ != null) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[lid][timeout] already scheduled logout. is offline: ",
              "",
            ])),
          o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd(),
        );
        return;
      }
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[lid][timeout] check timeout src=",
            " offline=",
            "",
          ])),
        t,
        o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd(),
      );
      var n = await o(
          "WAWebLid1x1MigrationTimeoutUtils",
        ).shouldScheduleTimeoutForMissingPeerMessage(),
        r = n.shouldScheduleTimeout,
        a = n.timeoutUntilLogout;
      r &&
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[lid][timeout] setting logout timeout. is offline: ",
              "",
            ])),
          o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd(),
        ),
        (_ = self.setTimeout(async function () {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[lid][timeout] running logout check. is offline: ",
                "",
              ])),
            o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd(),
          );
          var e = await o(
              "WAWebLid1x1MigrationTimeoutUtils",
            ).shouldScheduleTimeoutForMissingPeerMessage(),
            t = e.shouldScheduleTimeout;
          (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[lid][timeout] should logout in second check: ",
                ". is offline: ",
                "",
              ])),
            t,
            o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd(),
          ),
            t &&
              (o(
                "WAWebLid1X1MigrationGating",
              ).Lid1X1MigrationUtils.hasStateDiscrepancy()
                ? await h()
                : await g()));
        }, a)));
    }
    async function g() {
      (o("WALogger")
        .ERROR(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[lid][timeout] logout: no peer mappings received",
            ])),
        )
        .sendLogs("lid-migration-did-not-receive-mapping"),
        await o("WAAsyncSleep").asyncSleep(5e3),
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[lid][timeout] will logout. is offline: ",
              "",
            ])),
          o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd(),
        ),
        await new (o(
          "WAWebLid11MigrationLifecycleWamEvent",
        ).Lid11MigrationLifecycleWamEvent)({
          migrationStage: o("WAWebWamEnumMigrationStageEnum")
            .MIGRATION_STAGE_ENUM.COMPANION_LOCAL_MIGRATION_FAILED,
          stageFailureReason: o("WAWebWamEnumStageFailureReasonEnum")
            .STAGE_FAILURE_REASON_ENUM
            .COMPANION_TIMEOUT_BASED_ON_DEVICE_CAPABILITY,
          isLocally1x1MigratedFromDb: o(
            "WAWebLid1X1MigrationGating",
          ).Lid1X1MigrationUtils.isLidMigrated(),
        }).commitAndWaitForFlush(!0));
      var e = await o(
          "WAWebLid1x1MigrationTimeoutUtils",
        ).shouldScheduleTimeoutForMissingPeerMessage(),
        t = e.shouldScheduleTimeout;
      t &&
        (await o("WAWebSocketLogoutJob").socketLogout(
          o("WAWebLogoutReasonConstants").LogoutReason
            .LidMigrationPeerMappingsNotReceived,
        ));
    }
    async function h() {
      (await o("WAAsyncSleep").asyncSleep(5e3),
        await new (o(
          "WAWebLid11MigrationLifecycleWamEvent",
        ).Lid11MigrationLifecycleWamEvent)({
          migrationStage: o("WAWebWamEnumMigrationStageEnum")
            .MIGRATION_STAGE_ENUM.COMPANION_LOCAL_MIGRATION_FAILED,
          stageFailureReason: o("WAWebWamEnumStageFailureReasonEnum")
            .STAGE_FAILURE_REASON_ENUM.COMPANION_UNSUPPORTED_VERSION,
          isLocally1x1MigratedFromDb:
            o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
              "WAIsAccountLidFieldMigrated",
            ) === !0,
          peerMappingBytesLength: -1,
        }).commitAndWaitForFlush(!0));
      var e = await o(
          "WAWebLid1x1MigrationTimeoutUtils",
        ).shouldScheduleTimeoutForMissingPeerMessage(),
        t = e.shouldScheduleTimeout;
      t &&
        (await o("WAWebSocketLogoutJob").socketLogout(
          o("WAWebLogoutReasonConstants").LogoutReason
            .LidMigrationStateDiscrepancy,
        ));
    }
    l.scheduleLogoutIfNeeded = f;
  },
  98,
);
