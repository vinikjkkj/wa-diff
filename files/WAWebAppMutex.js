__d(
  "WAWebAppMutex",
  [
    "WALogger",
    "WAWebAppMutexCore",
    "WAWebCmd",
    "WAWebL10N",
    "WAWebLaunchSocket",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function e() {
          ((this.$1 = new (o("WAWebAppMutexCore").WAWebAppMutexCore)({
            onAcquired: function () {
              return o("WAWebLaunchSocket").launchSocket(null);
            },
            onAcquiredComplete: function () {
              r("WAWebL10N").checkForLocaleMismatchBetweenCookieAndUserPref();
            },
            shouldPreventTakeoverOnActiveCall: function () {
              return r("justknobx")._("4316");
            },
          })),
            o("WAWebCmd").Cmd.on("ab_props_loaded_from_bridge", c),
            o("WAWebCmd").Cmd.on("on_ab_props_update_from_bridge", c));
        }
        var t = e.prototype;
        return (
          (t.init = function (t) {
            return (t === void 0 && (t = 0), this.$1.init(t));
          }),
          (t.takeoverLocal = function (t) {
            return this.$1.takeoverLocal(t);
          }),
          (t.unloadMutex = function () {
            this.$1.unloadMutex();
          }),
          (t.storagePong = function (t) {
            return this.$1.storagePong(t);
          }),
          (t.waitForCompletion = function () {
            return this.$1.waitForCompletion();
          }),
          (t.setShouldLaunchSocket = function (t) {
            this.$1.setShouldLaunchSocket(t);
          }),
          (t.hasShownCallTakeoverModal = function () {
            return this.$1.hasShownCallTakeoverModal();
          }),
          (t.requestFocusOnOtherTab = function () {
            this.$1.requestFocusOnOtherTab();
          }),
          e
        );
      })();
    function u(e) {
      r("WAWebUserPrefsStore").set(
        o("WAWebUserPrefsKeys").KEYS.MUTEX_PING_TIMEOUT_SECONDS,
        e,
      );
    }
    function c() {
      (u(1),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[mutex] setMutexBlockStrategy: ",
              "",
            ])),
          0,
        ),
        r("WAWebUserPrefsStore").set(
          o("WAWebUserPrefsKeys").UserPrefs.MutexBlockStrategy,
          0,
        ));
    }
    var d = new s();
    l.default = d;
  },
  98,
);
