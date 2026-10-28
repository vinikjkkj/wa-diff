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
    "WAWebTos",
    "WAWebUpdateDisappearingModeForContact",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "justknobx",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("requireDeferred")("WAWebSyncPrivacyDisallowedLists").__setRef(
        "WAWebAccountSyncJob",
      ),
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
        o("WAWebUserPrefsMeUser").getMeDeviceWids(),
        e,
        null,
      );
    }
    function d() {
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
    var m = 3e3,
      p = 1e3,
      _ = null,
      f = null,
      g = new (r("WAPromiseCache"))(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var t,
              n = yield o("WAWebQueryPrivacySettingsJob").getPrivacy();
            o("WAWebUserPrefsGeneral").setUserPrivacySettings(n);
            var r = yield s.load(),
              a = r.syncPrivacyDisallowedLists,
              i = yield a([
                (t = o("WAWebSchemaPrivacyDisallowedList"))
                  .PrivacyDisallowedListType.About,
                t.PrivacyDisallowedListType.GroupAdd,
                t.PrivacyDisallowedListType.LastSeen,
                t.PrivacyDisallowedListType.ProfilePicture,
              ]);
            return { privacySettings: n, privacyDisallowedRows: i };
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
    function h() {
      return (
        o(
          "WAWebDefenseModeTransitionListener",
        ).initDefenseModeTransitionListener(),
        g.getOrRun("privacy")
      );
    }
    function y() {
      if (
        (o(
          "WAWebDefenseModeTransitionListener",
        ).initDefenseModeTransitionListener(),
        r("justknobx")._("3378"))
      )
        return (g.delete("privacy"), g.getOrRun("privacy"));
      (_ != null && self.clearTimeout(_),
        f == null && (f = new (o("WAResolvable").Resolvable)()));
      var e = f;
      return (
        (_ = self.setTimeout(function () {
          ((_ = null),
            (f = null),
            g.delete("privacy"),
            e.resolve(g.getOrRun("privacy")));
        }, p)),
        e.promise
      );
    }
    function C(e) {
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
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        v.apply(this, arguments)
      );
    }
    ((l.AccountSyncType = u),
      (l.getDevices = c),
      (l.getAndUpdateProfilePicture = d),
      (l.updatePrivacySettings = h),
      (l.forceUpdatePrivacySettings = y),
      (l.updateTosStateFromAccountSync = C),
      (l.updateDefaultDisappearingMode = b));
  },
  98,
);
