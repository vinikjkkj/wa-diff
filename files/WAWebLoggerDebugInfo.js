__d(
  "WAWebLoggerDebugInfo",
  [
    "WAWebABPropsSaga",
    "WAWebConnModel",
    "WAWebCrashlogConstants",
    "WAWebEnvironment",
    "WAWebHistorySyncLidChatGating",
    "WAWebL10N",
    "WAWebLid1X1MigrationGating",
    "WAWebTasksDailyStatsTask",
    "WAWebUA",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebWam",
    "WAWebWamGlobals",
    "asyncToGeneratorRuntime",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new Map([
      ["appIsBetaRelease", "is-beta"],
      ["appVersion", "version"],
      ["browserVersion", "browser-version"],
      ["deviceName", "os"],
      ["mcc", "phone-mcc"],
      ["mnc", "phone-mnc"],
      ["webc_bucket", "exp-bucket"],
      ["webcPhoneAppVersion", "phone-app-version"],
      ["webcPhoneCharging", "is-phone-charging"],
      ["webcPhoneDeviceManufacturer", "phone-manufacturer"],
      ["webcPhoneDeviceModel", "phone-model"],
      ["webcPhoneOsVersion", "phone-os-version"],
      ["webcPhonePlatform", "phone-os"],
      ["webcWebPlatform", "platform"],
      ["webcProtoVersion", "protocol-version"],
      ["deviceID", "device-id"],
      ["webcWebArch", "device-arch"],
      ["webcWebDeviceManufacturer", "device-manufacturer"],
      ["webcWebDeviceModel", "device-model"],
      ["webcWebOsReleaseNumber", "device-release"],
      ["deviceVersion", "os-version"],
      ["userAgent", "user-agent"],
      ["mdEnabled", "md-enabled"],
      ["hasMdCompanion", "has-md-companion"],
      ["entityId", "entity id"],
      ["isLidMigrated", "is_lid_migrated"],
      ["isHistoryLidSession", "is_history_lid_session"],
      ["lidCompletedMigrations", "lid_completed_migrations"],
    ]);
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WAWebWam").Wam.initialize();
          var t = babelHelpers.extends({}, o("WAWebWamGlobals").Global.all, {
            webcWebPlatform: o("WAWebCrashlogConstants").CLB_PLATFORM,
            webcPhonePlatform: o("WAWebConnModel").Conn.platform,
            webcProtoVersion: String(o("WAWebConnModel").Conn.protoVersion),
          });
          (r("WAWebEnvironment").isWindows &&
            (t.subplatform = o("WAWebCrashlogConstants").CLB_SUBPLATFORM),
            r("gkx")("26259")
              ? (t.releaseChannel = "intern")
              : r("gkx")("26258") && (t.releaseChannel = "production"));
          var n = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
          n && (t.deviceID = n.toString());
          var a = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
          r("gkx")("11584") &&
            a &&
            ((t.saga_copy = o("WAWebABPropsSaga")
              .getIsSagaV1Enabled()
              .toString()),
            (t.pn = a.user.toString()));
          var i = {};
          for (var l in t) {
            var s = t[l];
            s != null && (i[l] = s);
          }
          ((i.debugIsExternalBeta = yield o(
            "WAWebUserPrefsGeneral",
          ).getWhatsAppWebExternalBetaJoinedIdb()),
            (i.isLidMigrated = o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated()),
            (i.isHistoryLidSession = o(
              "WAWebHistorySyncLidChatGating",
            ).isForcedHistoryLidChat()));
          var u = yield o("WAWebTasksDailyStatsTask").getLidMigrationStatus();
          if (
            (u.completedMigrations != null &&
              (i.lidCompletedMigrations = u.completedMigrations),
            e)
          ) {
            var d = e.addLanguageFields,
              m = e.addUserAgentDetails,
              p = e.convertFields,
              _ = e.entityId,
              f = e.supportTag,
              g = e.user_review_score;
            if (
              (f != null && (i.context = f),
              _ != null && (i.entityId = _),
              g != null && (i.user_review_score = g),
              m === !0 && (i.userAgent = o("WAWebUA").UA.parser.getUA()),
              d === !0 &&
                ((i.lc = r("WAWebL10N").getRegion()),
                (i.lg = r("WAWebL10N").getLanguage())),
              p === !0)
            ) {
              var h = c(i);
              return h;
            }
          }
          return i;
        })),
        u.apply(this, arguments)
      );
    }
    function c(t) {
      var n = {};
      for (var r of Object.entries(t)) {
        var o,
          a = r[0],
          i = r[1];
        n[(o = e.get(a)) != null ? o : a] = i;
      }
      return n;
    }
    l.getDebugInfo = s;
  },
  98,
);
