__d(
  "WAWebLoggerDebugInfo",
  [
    "WAWebABPropsSaga",
    "WAWebConnModel",
    "WAWebCrashlogConstants",
    "WAWebEnvironment",
    "WAWebHistorySyncLidChatGating",
    "WAWebL10N",
    "WAWebReloadReason",
    "WAWebTasksDailyStatsTask",
    "WAWebUA",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
    "WAWebUserUtils",
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
              : r("gkx")("26258") && (t.releaseChannel = "production"),
            o("WAWebUserPrefsMeUser").hasLoggedIn() &&
              (t.deviceID = o("WAWebUserUtils")
                .getMeDeviceOrThrow()
                .toString()));
          var n = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
          r("gkx")("11584") &&
            n &&
            ((t.saga_copy = o("WAWebABPropsSaga")
              .getIsSagaV1Enabled()
              .toString()),
            (t.pn = n.user.toString()));
          var a = {};
          for (var i in t) {
            var l = t[i];
            l != null && (a[i] = l);
          }
          ((a.debugIsExternalBeta = yield o(
            "WAWebUserPrefsGeneral",
          ).getWhatsAppWebExternalBetaJoinedIdb()),
            (a.isHistoryLidSession = o(
              "WAWebHistorySyncLidChatGating",
            ).isForcedHistoryLidChat()));
          var s = o("WAWebReloadReason").getLastReload();
          s != null &&
            ((a.lastReloadReason = s.reason),
            (a.lastReloadAgeS = s.ageS),
            s.msg != null && (a.lastReloadMsgCount = s.msg),
            s.receipt != null && (a.lastReloadReceiptCount = s.receipt));
          var u = yield o("WAWebTasksDailyStatsTask").getLidMigrationStatus();
          if (
            (u.completedMigrations != null &&
              (a.lidCompletedMigrations = u.completedMigrations),
            e)
          ) {
            var d = e.addLanguageFields,
              m = e.addUserAgentDetails,
              p = e.convertFields,
              _ = e.entityId,
              f = e.supportTag,
              g = e.user_review_score;
            if (
              (f != null && (a.context = f),
              _ != null && (a.entityId = _),
              g != null && (a.user_review_score = g),
              m === !0 && (a.userAgent = o("WAWebUA").UA.parser.getUA()),
              d === !0 &&
                ((a.lc = r("WAWebL10N").getRegion()),
                (a.lg = r("WAWebL10N").getLanguage())),
              p === !0)
            ) {
              var h = c(a);
              return h;
            }
          }
          return a;
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
