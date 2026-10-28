__d(
  "WAWebMediaAutoDownloadQualitySync",
  [
    "WALogger",
    "WAWebMediaAutoDownloadQuality.flow",
    "WAWebProtobufSyncAction.pb",
    "WAWebUserPrefsGeneral",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return e ===
        o("WAWebMediaAutoDownloadQuality.flow").MediaAutoDownloadQuality.AUTO
        ? o("WAWebProtobufSyncAction.pb")
            .SyncActionValue$SettingsSyncAction$MediaAutoDownloadQualitySetting
            .MEDIA_AUTO_DOWNLOAD_QUALITY_AUTO
        : e ===
            o("WAWebMediaAutoDownloadQuality.flow").MediaAutoDownloadQuality
              .STANDARD
          ? o("WAWebProtobufSyncAction.pb")
              .SyncActionValue$SettingsSyncAction$MediaAutoDownloadQualitySetting
              .MEDIA_AUTO_DOWNLOAD_QUALITY_STANDARD
          : e ===
              o("WAWebMediaAutoDownloadQuality.flow").MediaAutoDownloadQuality
                .HD
            ? o("WAWebProtobufSyncAction.pb")
                .SyncActionValue$SettingsSyncAction$MediaAutoDownloadQualitySetting
                .MEDIA_AUTO_DOWNLOAD_QUALITY_HD
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function u(t) {
      var n = c(t);
      if (n == null) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[settings-sync] Invalid media auto-download quality setting: ",
              "",
            ])),
          String(t),
        );
        return;
      }
      o("WAWebUserPrefsGeneral").setAutoDownloadMediaQuality(n);
    }
    function c(e) {
      return (function (e) {
        if (
          e ===
          o("WAWebProtobufSyncAction.pb")
            .SyncActionValue$SettingsSyncAction$MediaAutoDownloadQualitySetting
            .MEDIA_AUTO_DOWNLOAD_QUALITY_AUTO
        )
          return o("WAWebMediaAutoDownloadQuality.flow")
            .MediaAutoDownloadQuality.AUTO;
        if (
          e ===
          o("WAWebProtobufSyncAction.pb")
            .SyncActionValue$SettingsSyncAction$MediaAutoDownloadQualitySetting
            .MEDIA_AUTO_DOWNLOAD_QUALITY_STANDARD
        )
          return o("WAWebMediaAutoDownloadQuality.flow")
            .MediaAutoDownloadQuality.STANDARD;
        if (
          e ===
          o("WAWebProtobufSyncAction.pb")
            .SyncActionValue$SettingsSyncAction$MediaAutoDownloadQualitySetting
            .MEDIA_AUTO_DOWNLOAD_QUALITY_HD
        )
          return o("WAWebMediaAutoDownloadQuality.flow")
            .MediaAutoDownloadQuality.HD;
        if (
          e ===
            o("WAWebProtobufSyncAction.pb")
              .SyncActionValue$SettingsSyncAction$MediaAutoDownloadQualitySetting
              .MEDIA_AUTO_DOWNLOAD_QUALITY_UNKNOWN ||
          e === void 0
        )
          return null;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(
        o(
          "WAWebProtobufSyncAction.pb",
        ).SyncActionValue$SettingsSyncAction$MediaAutoDownloadQualitySetting.cast(
          Number(e),
        ),
      );
    }
    ((l.toSyncedMediaAutoDownloadQuality = s),
      (l.applySyncedMediaAutoDownloadQuality = u));
  },
  98,
);
