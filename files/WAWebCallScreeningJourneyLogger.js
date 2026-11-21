__d(
  "WAWebCallScreeningJourneyLogger",
  [
    "CallScreeningUserJourneyFalcoEvent",
    "WARandomHex",
    "WAWebABProps",
    "WAWebCallRandomIdStore",
    "WAWebFalcoCanonicalAbKey2",
    "WAWebFalcoCanonicalAppVersion",
    "WAWebFalcoCanonicalMdId",
    "WAWebFalcoCanonicalOsVersion",
    "WAWebGetSharedSessionId",
    "WAWebWamGlobals",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        function e() {
          this.$1 = null;
        }
        var t = e.prototype;
        return (
          (t.onCallerScreeningStarted = function (t) {
            if (
              t == null ||
              t === "" ||
              o("WAWebABProps").getABPropConfigValue(
                "call_screening_caller_version",
              ) < 1 ||
              !o("WAWebABProps").getABPropConfigValue(
                "call_screening_log_screening_user_journey",
              )
            ) {
              this.$1 = null;
              return;
            }
            ((this.$1 = {
              callRandomId: o("WAWebCallRandomIdStore").getOrCreateCallRandomId(
                t,
              ),
              funnelId: o("WARandomHex").randomHex(16),
            }),
              this.$2("screening_started"));
          }),
          (t.onPromptStarted = function (t) {
            this.$2(t ? "prompt_started_fallback_en" : "prompt_started");
          }),
          (t.onPromptCompleted = function () {
            this.$2("prompt_completed");
          }),
          (t.onPromptFailed = function () {
            this.$2("prompt_failed");
          }),
          (t.onSelfTimeout = function () {
            this.$3("self_timeout");
          }),
          (t.onSelfEnded = function () {
            this.$3("self_ended");
          }),
          (t.onScreeningLeft = function (t) {
            t ? this.$3("peer_ended") : (this.$1 = null);
          }),
          (t.$3 = function (t) {
            (this.$2(t), (this.$1 = null));
          }),
          (t.$2 = function (t) {
            var e = this.$1;
            if (e != null) {
              var n = Date.now();
              r("CallScreeningUserJourneyFalcoEvent").log(function () {
                var a,
                  i,
                  l = r("WAWebFalcoCanonicalMdId")();
                return {
                  ab_key2: r("WAWebFalcoCanonicalAbKey2")(),
                  app_session_id: o(
                    "WAWebGetSharedSessionId",
                  ).getSharedSessionId(),
                  app_version: r("WAWebFalcoCanonicalAppVersion")(),
                  call_random_id: (a = e.callRandomId) != null ? a : void 0,
                  expo_key:
                    o("WAWebWamGlobals").Global == null ||
                    (i = o("WAWebWamGlobals").Global.all) == null
                      ? void 0
                      : i.expoKey,
                  md_id: l != null ? String(l) : null,
                  os_version: r("WAWebFalcoCanonicalOsVersion")(),
                  screening_action: t,
                  screening_role: "caller",
                  screening_trigger_mode: "manual",
                  user_journey_event_ms: String(n),
                  user_journey_funnel_id: e.funnelId,
                };
              });
            }
          }),
          e
        );
      })(),
      s = new e();
    ((l.WAWebCallScreeningJourneyLogger = e),
      (l.CallScreeningJourneyLogger = s));
  },
  98,
);
