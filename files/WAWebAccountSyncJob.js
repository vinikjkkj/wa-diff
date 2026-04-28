__d(
  "WAWebAccountSyncJob",
  [
    "$InternalEnum",
    "WALogger",
    "WAPromiseCache",
    "WATimeUtils",
    "WAWebDefenseModeTransitionListener",
    "WAWebProfilePicThumbCollection",
    "WAWebQueryDisappearingModeJob",
    "WAWebQueryPrivacySettingsJob",
    "WAWebSchemaPrivacyDisallowedList",
    "WAWebSyncDeviceAdvDeviceListJob",
    "WAWebSyncPrivacyDisallowedLists",
    "WAWebTos",
    "WAWebUpdateDisappearingModeForContact",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = n("$InternalEnum")({
        BLOCKLIST: "blocklist",
        OPTOUTLIST: "biz_opt_out_list",
        DEVICES: "devices",
        DISAPPEARING_MODE: "disappearing_mode",
        PICTURE: "picture",
        PRIVACY: "privacy",
        STATUS: "status",
        TOS: "tos",
        NOTICE: "notice",
        USER: "user",
        TEXT_STATUS: "text_status",
      });
    function c(e) {
      return o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob(
        o("WAWebUserPrefsMeUser").getMePNandLIDWids(),
        e,
        null,
      );
    }
    function d() {
      var e = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        t = o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection.get(
          e,
        );
      return t != null
        ? o(
            "WAWebProfilePicThumbCollection",
          ).ProfilePicThumbCollection.resyncPictures([t])
        : o(
            "WAWebProfilePicThumbCollection",
          ).ProfilePicThumbCollection.resyncPicturesByWid([e]);
    }
    var m = 3e3,
      p = new (r("WAPromiseCache"))(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var t,
              n = yield o("WAWebQueryPrivacySettingsJob").getPrivacy();
            o("WAWebUserPrefsGeneral").setUserPrivacySettings(n);
            var r = yield o(
              "WAWebSyncPrivacyDisallowedLists",
            ).syncPrivacyDisallowedLists([
              (t = o("WAWebSchemaPrivacyDisallowedList"))
                .PrivacyDisallowedListType.About,
              t.PrivacyDisallowedListType.GroupAdd,
              t.PrivacyDisallowedListType.LastSeen,
              t.PrivacyDisallowedListType.ProfilePicture,
            ]);
            return { privacySettings: n, privacyDisallowedRows: r };
          } catch (t) {
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "updatePrivacySettings: failed to sync privacy settings",
                    ])),
                )
                .sendLogs("privacy_settings_sync_failed"),
              t
            );
          }
        }),
        {
          maxCached: 1,
          maxAge: m,
          shouldCache: function (t) {
            return t.privacySettings != null;
          },
        },
      );
    function _() {
      return (
        o(
          "WAWebDefenseModeTransitionListener",
        ).initDefenseModeTransitionListener(),
        p.getOrRun("privacy")
      );
    }
    function f() {
      return (
        o(
          "WAWebDefenseModeTransitionListener",
        ).initDefenseModeTransitionListener(),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "forceUpdatePrivacySettings invoked",
            ])),
        ),
        p.delete("privacy"),
        p.getOrRun("privacy")
      );
    }
    function g(e) {
      var t = o("WATimeUtils").unixTime();
      e.forEach(function (e) {
        var n;
        o("WAWebTos").TosManager.setState(
          e.id,
          e.state ? "ACCEPTED" : "NOT_ACCEPTED",
          (n = e.timestamp) != null ? n : t,
        );
      });
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
            "WAWebQueryDisappearingModeJob",
          ).queryDisappearingMode();
          yield o(
            "WAWebUpdateDisappearingModeForContact",
          ).updateDisappearingModeForContact({
            contactId: o(
              "WAWebUserPrefsMeUser",
            ).getMePnUserOrThrow_DO_NOT_USE(),
            newDuration: e.duration,
            newSettingTimestamp: e.t,
          });
        })),
        y.apply(this, arguments)
      );
    }
    ((l.AccountSyncType = u),
      (l.getDevices = c),
      (l.getAndUpdateProfilePicture = d),
      (l.updatePrivacySettings = _),
      (l.forceUpdatePrivacySettings = f),
      (l.updateTosStateFromAccountSync = g),
      (l.updateDefaultDisappearingMode = h));
  },
  98,
);
