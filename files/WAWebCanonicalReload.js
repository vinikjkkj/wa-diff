__d(
  "WAWebCanonicalReload",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBrokerGlobalAppState",
    "WAWebCallCollection",
    "WAWebCanonicalGating",
    "WAWebCanonicalUtils",
    "WAWebCmd",
    "WAWebODS",
    "WAWebReloadCrashAnnotations",
    "WAWebStreamModel",
    "WAWebUpdater",
    "WAWebUserPrefsAppStateSync",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = 5 * o("WATimeUtils").MINUTE_MILLISECONDS;
    async function _() {
      if (!o("WAWebCanonicalUtils").isCanonicalReloadPending()) {
        if (!o("WAWebCanonicalGating").isCanonicalRecoveryAppReloadEnabled()) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[canonical] canonical recovery reload disabled",
              ])),
          );
          return;
        }
        (o("WAWebCanonicalUtils").setCanonicalReloadPending(!0),
          r("WAWebODS").incr("web.app.canonical.recovery.reload_scheduled"),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[canonical] scheduling reload after canonical recovery",
              ])),
          ),
          g());
      }
    }
    function f() {
      return (
        r("WAWebCallCollection").activeCall != null ||
        !o("WAWebUserPrefsAppStateSync").getAllCriticalDataSynced()
      );
    }
    function g() {
      if (!f()) {
        h();
        return;
      }
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[canonical] reload deferred: call/sync pending",
          ])),
      ),
        r("WAWebODS").incr("web.app.canonical.recovery.reload_deferred"));
      var e = function () {
          f() || (t(), h());
        },
        t = function () {
          (r("WAWebCallCollection").off("change:activeCall", e),
            o("WAWebCmd").Cmd.off("on_critical_sync_done_from_bridge", e));
        };
      (r("WAWebCallCollection").on("change:activeCall", e),
        o("WAWebCmd").Cmd.on("on_critical_sync_done_from_bridge", e));
    }
    function h() {
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "[canonical] waiting for stream idle transition before reload",
          ])),
      );
      var e = function () {
        o("WAWebStreamModel").Stream.couldForce && (n(), y("idle"));
      };
      o("WAWebStreamModel").Stream.on("change:couldForce", e);
      var t = self.setTimeout(function () {
        (n(), f() ? g() : y("timeout"));
      }, p);
      function n() {
        (o("WAWebStreamModel").Stream.off("change:couldForce", e),
          self.clearTimeout(t));
      }
    }
    function y(e) {
      if (
        r("WAWebBrokerGlobalAppState").isLogoutInProgress ||
        !o("WAWebCanonicalUtils").isCanonicalReloadPending()
      ) {
        o("WAWebCanonicalUtils").setCanonicalReloadPending(!1);
        return;
      }
      (o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "[canonical] reload after canonical recovery trigger=",
            "",
          ])),
        e,
      ),
        r("WAWebODS").incr("web.app.canonical.recovery.reload_triggered"),
        e === "idle"
          ? r("WAWebODS").incr("web.app.canonical.recovery.reload_trigger_idle")
          : e === "timeout" &&
            r("WAWebODS").incr(
              "web.app.canonical.recovery.reload_trigger_timeout",
            ),
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[reload][canonical] restarting app after canonical recovery",
            ])),
        ),
        o("WAWebReloadCrashAnnotations").annotateCrashWithReloadReason(
          "canonicalRecovery.reload",
        ),
        o("WAWebUpdater").Updater.restart());
    }
    l.scheduleCanonicalReload = _;
  },
  98,
);
