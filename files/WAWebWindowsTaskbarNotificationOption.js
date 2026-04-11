__d(
  "WAWebWindowsTaskbarNotificationOption",
  ["$InternalEnum", "WAWebProtobufSyncAction.pb"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored([
      "Always",
      "Never",
      "OnlyWhenAppIsOpen",
    ]);
    function s(t) {
      return t === e.Always
        ? o("WAWebProtobufSyncAction.pb")
            .SyncActionValue$SettingsSyncAction$DisplayMode.ALWAYS
        : t === e.Never
          ? o("WAWebProtobufSyncAction.pb")
              .SyncActionValue$SettingsSyncAction$DisplayMode.NEVER
          : t === e.OnlyWhenAppIsOpen
            ? o("WAWebProtobufSyncAction.pb")
                .SyncActionValue$SettingsSyncAction$DisplayMode
                .ONLY_WHEN_APP_IS_OPEN
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t,
                );
              })();
    }
    ((l.TaskbarNotificationOption = e), (l.toDisplayMode = s));
  },
  98,
);
