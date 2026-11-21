__d(
  "WAWebCallPrivacySettingJourney",
  [
    "CallPrivacySettingUserJourneyFalcoEvent",
    "WARandomHex",
    "WAWebABProps",
    "WAWebFalcoCanonicalAbKey2",
    "WAWebFalcoCanonicalAppVersion",
    "WAWebFalcoCanonicalMdId",
    "WAWebFalcoCanonicalOsVersion",
    "WAWebGetSharedSessionId",
    "WAWebWamGlobals",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "call_screening_callee_version",
      ) > 0 &&
        o("WAWebABProps").getABPropConfigValue(
          "call_screening_setting_data_version",
        ) >= 1 &&
        o("WAWebABProps").getABPropConfigValue(
          "call_screening_log_privacy_settings_user_journey",
        )
        ? new s()
        : null;
    }
    var s = (function () {
      function e() {
        ((this.$1 = o("WARandomHex").randomHex(16)),
          (this.$2 = !1),
          (this.$3 = !1),
          (this.$4 = !1));
      }
      var t = e.prototype;
      return (
        (t.logOpened = function () {
          this.$2 || ((this.$2 = !0), this.$5("privacy_settings_open"));
        }),
        (t.logScreenOptionShown = function () {
          this.$3 || ((this.$3 = !0), this.$5("screen_option_shown"));
        }),
        (t.logOptionClicked = function (t, n) {
          this.$5(
            t === "ring"
              ? "ring_clicked"
              : t === "screen"
                ? "screen_clicked"
                : t === "silence"
                  ? "silence_clicked"
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          t,
                      );
                    })(),
            n,
          );
        }),
        (t.logClosed = function () {
          this.$4 || ((this.$4 = !0), this.$5("privacy_settings_closed"));
        }),
        (t.$5 = function (t, n) {
          var e = Date.now(),
            a = this.$1;
          r("CallPrivacySettingUserJourneyFalcoEvent").log(function () {
            var i,
              l = r("WAWebFalcoCanonicalMdId")();
            return {
              ab_key2: r("WAWebFalcoCanonicalAbKey2")(),
              app_session_id: o("WAWebGetSharedSessionId").getSharedSessionId(),
              app_version: r("WAWebFalcoCanonicalAppVersion")(),
              call_privacy_setting_action: t,
              expo_key:
                o("WAWebWamGlobals").Global == null ||
                (i = o("WAWebWamGlobals").Global.all) == null
                  ? void 0
                  : i.expoKey,
              md_id: l != null ? String(l) : null,
              os_version: r("WAWebFalcoCanonicalOsVersion")(),
              previous_setting: n,
              user_journey_event_ms: String(e),
              user_journey_funnel_id: a,
            };
          });
        }),
        e
      );
    })();
    ((l.maybeCreateCallPrivacySettingJourney = e),
      (l.CallPrivacySettingJourney = s));
  },
  98,
);
