__d(
  "WAWebLogoutReason",
  ["WAWebLogoutReasonConstants"],
  function (t, n, r, o, a, i, l) {
    var e = null,
      s = null;
    function u(e) {
      return e ===
        o("WAWebLogoutReasonConstants").LogoutReason.WebFailAddChat ||
        e === o("WAWebLogoutReasonConstants").LogoutReason.WebFailEncSalt ||
        e ===
          o("WAWebLogoutReasonConstants").LogoutReason.WebFailOfflineResume ||
        e ===
          o("WAWebLogoutReasonConstants").LogoutReason
            .WebFailStorageInitialization
        ? o("WAWebLogoutReasonConstants").LOGOUT_REASON_CODE.CLIENT_FATAL
        : e === o("WAWebLogoutReasonConstants").LogoutReason.SyncdFailure ||
            e ===
              o("WAWebLogoutReasonConstants").LogoutReason
                .SyncdErrorDuringBootstrap ||
            e ===
              o("WAWebLogoutReasonConstants").LogoutReason.AccountSyncError ||
            e === o("WAWebLogoutReasonConstants").LogoutReason.SyncdTimeout ||
            e ===
              o("WAWebLogoutReasonConstants").LogoutReason.CriticalSyncTimeout
          ? o("WAWebLogoutReasonConstants").LOGOUT_REASON_CODE.SYNC_FAIL
          : e ===
              o("WAWebLogoutReasonConstants").LogoutReason.HistorySyncTimeout
            ? o("WAWebLogoutReasonConstants").LOGOUT_REASON_CODE
                .INITIAL_HISTORY_SYNC_TIMEOUT
            : e === o("WAWebLogoutReasonConstants").LogoutReason.AccountLocked
              ? o("WAWebLogoutReasonConstants").LOGOUT_REASON_CODE
                  .ACCOUNT_LOCKED
              : e ===
                    o("WAWebLogoutReasonConstants").LogoutReason
                      .UserInitiated ||
                  e ===
                    o("WAWebLogoutReasonConstants").LogoutReason
                      .InvalidAdvStatus ||
                  e ===
                    o("WAWebLogoutReasonConstants").LogoutReason
                      .AccountSyncTimeout ||
                  e === o("WAWebLogoutReasonConstants").LogoutReason.MDOptOut ||
                  e ===
                    o("WAWebLogoutReasonConstants").LogoutReason
                      .UnknownCompanion ||
                  e ===
                    o("WAWebLogoutReasonConstants").LogoutReason
                      .ClientVersionOutdated ||
                  e ===
                    o("WAWebLogoutReasonConstants").LogoutReason
                      .StorageQuotaExceeded ||
                  e ===
                    o("WAWebLogoutReasonConstants").LogoutReason
                      .PrimaryIdentityKeyChange ||
                  e ===
                    o("WAWebLogoutReasonConstants").LogoutReason
                      .MissingEncSalt ||
                  e ===
                    o("WAWebLogoutReasonConstants").LogoutReason
                      .MissingScreenLockSalt ||
                  e ===
                    o("WAWebLogoutReasonConstants").LogoutReason
                      .LidMigrationSplitThreadMismatch ||
                  e ===
                    o("WAWebLogoutReasonConstants").LogoutReason
                      .LidMigrationNoLidAvailiable ||
                  e ===
                    o("WAWebLogoutReasonConstants").LogoutReason
                      .LidMigrationPrimaryMappingsObsolete ||
                  e ===
                    o("WAWebLogoutReasonConstants").LogoutReason
                      .LidMigrationPeerMappingsNotReceived ||
                  e ===
                    o("WAWebLogoutReasonConstants").LogoutReason
                      .LidMigrationStateDiscrepancy ||
                  e ===
                    o("WAWebLogoutReasonConstants").LogoutReason
                      .LidMigrationPeerMappingsMalformed ||
                  e ===
                    o("WAWebLogoutReasonConstants").LogoutReason
                      .LidMigrationFailedToParseMapping ||
                  e ===
                    o("WAWebLogoutReasonConstants").LogoutReason
                      .LidMigrationCompanionIncompatibleKillswitch ||
                  e ===
                    o("WAWebLogoutReasonConstants").LogoutReason
                      .LidMigrationOneOnOneThreadMigrationInternalError ||
                  e ===
                    o("WAWebLogoutReasonConstants").LogoutReason
                      .LidBlocklistPnWhenMigrated ||
                  e ===
                    o("WAWebLogoutReasonConstants").LogoutReason
                      .LidBlocklistChatDbUnmigrated ||
                  e ===
                    o("WAWebLogoutReasonConstants").LogoutReason
                      .CacheStorageOpenFailed
                ? null
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    function c(t) {
      e = t;
    }
    function d(e) {
      s = e;
    }
    function m() {
      return e;
    }
    function p() {
      return s;
    }
    ((l.getErrorCodeFromLogoutReason = u),
      (l.setPrevLogoutReasonCode = c),
      (l.setPrevCustomLogoutMessage = d),
      (l.getPrevLogoutReasonCode = m),
      (l.getPrevCustomLogoutMessage = p));
  },
  98,
);
