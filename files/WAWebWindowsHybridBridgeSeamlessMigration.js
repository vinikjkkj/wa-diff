__d(
  "WAWebWindowsHybridBridgeSeamlessMigration",
  [
    "WALogger",
    "WAWebBackendEventBus",
    "WAWebODS",
    "WAWebUserPrefsMeUser",
    "WAWebWindowsUserPrefsMigrationEventEmitter",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function () {
        function t(e) {
          var t = this,
            n,
            o;
          ((this.$2 = function (e) {
            t.$3() &&
              r("WAWebWindowsUserPrefsMigrationEventEmitter").trigger(
                "storeUserPrefs",
                e,
              );
          }),
            (this.$1 = e),
            (n = this.$1) == null || n.subscribe(null),
            (o = this.$1) == null ||
              o.addEventListener("SendUserPreferencesEvent", this.$2),
            this.initialize());
        }
        var n = t.prototype;
        return (
          (n.initialize = function () {
            var t = this,
              n = r("justknobx")._("2741"),
              a = r("justknobx")._("2742");
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[SeamlessMigration] logout enabled=",
                  " maxRetries=",
                  "",
                ])),
              n,
              a,
            ),
              r("WAWebODS").incr(
                "web.hybrid.bridge.seamless_migration.send.execute_logout",
              ),
              this.$1.executeLogout(n, a),
              o(
                "WAWebBackendEventBus",
              ).BackendEventBus.onInitialChatHistorySynced(function () {
                if (t.$3()) {
                  var e = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
                  e != null &&
                    (r("WAWebODS").incr(
                      "web.hybrid.bridge.seamless_migration.send.request_user_prefs_migration",
                    ),
                    t.$1.requestUserPrefsMigration(e.toJid()));
                }
              }));
            var i = r("justknobx")._("4754");
            if (
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[SeamlessMigration] filesCleanup enabled=",
                    "",
                  ])),
                i,
              ),
              i)
            ) {
              var l = r("justknobx")._("5099");
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[SeamlessMigration] RequestFilesCleanupAfterDays ",
                    "",
                  ])),
                l,
              ),
                r("WAWebODS").incr(
                  "web.hybrid.bridge.seamless_migration.send.request_files_cleanup",
                ),
                this.$1.requestFilesCleanup(l));
            }
          }),
          (n.$3 = function () {
            return r("justknobx")._("303");
          }),
          t
        );
      })();
    l.WindowsHybridBridgeSeamlessMigration = c;
  },
  98,
);
