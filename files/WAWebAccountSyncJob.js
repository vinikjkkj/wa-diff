__d(
  "WAWebAccountSyncJob",
  [
    "$InternalEnum",
    "WALogger",
    "WAPromiseCache",
    "WAResolvable",
    "WATimeUtils",
    "WAWebApiContact",
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
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum")({
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
    function u(e) {
      return o("WAWebSyncDeviceAdvDeviceListJob").syncDeviceListJob(
        o("WAWebUserPrefsMeUser").getMePNandLIDWids(),
        e,
        null,
      );
    }
    function c() {
      var e = o("WAWebApiContact").getMeUserWids();
      for (var t of e) {
        var n = o(
          "WAWebProfilePicThumbCollection",
        ).ProfilePicThumbCollection.get(t);
        if (n != null)
          return o(
            "WAWebProfilePicThumbCollection",
          ).ProfilePicThumbCollection.resyncPictures([n]);
      }
      return o(
        "WAWebProfilePicThumbCollection",
      ).ProfilePicThumbCollection.resyncPicturesByWid(e);
    }
    var d = 3e3,
      m = 1e3,
      p = null,
      _ = null,
      f = new (r("WAPromiseCache"))(
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
          maxAge: d,
          shouldCache: function (t) {
            return t.privacySettings != null;
          },
        },
      );
    function g() {
      return (
        o(
          "WAWebDefenseModeTransitionListener",
        ).initDefenseModeTransitionListener(),
        f.getOrRun("privacy")
      );
    }
    function h() {
      if (
        (o(
          "WAWebDefenseModeTransitionListener",
        ).initDefenseModeTransitionListener(),
        r("justknobx")._("3378"))
      )
        return (f.delete("privacy"), f.getOrRun("privacy"));
      (p != null && self.clearTimeout(p),
        _ == null && (_ = new (o("WAResolvable").Resolvable)()));
      var e = _;
      return (
        (p = self.setTimeout(function () {
          ((p = null),
            (_ = null),
            f.delete("privacy"),
            e.resolve(f.getOrRun("privacy")));
        }, m)),
        e.promise
      );
    }
    function y(e) {
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
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
            "WAWebQueryDisappearingModeJob",
          ).queryDisappearingMode();
          yield o(
            "WAWebUpdateDisappearingModeForContact",
          ).updateDisappearingModeForContact({
            contactId: o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            newDuration: e.duration,
            newSettingTimestamp: e.t,
          });
        })),
        b.apply(this, arguments)
      );
    }
    ((l.AccountSyncType = s),
      (l.getDevices = u),
      (l.getAndUpdateProfilePicture = c),
      (l.updatePrivacySettings = g),
      (l.forceUpdatePrivacySettings = h),
      (l.updateTosStateFromAccountSync = y),
      (l.updateDefaultDisappearingMode = C));
  },
  98,
);
