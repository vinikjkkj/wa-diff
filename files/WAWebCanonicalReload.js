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
    "WAWebStreamModel",
    "WAWebUpdater",
    "WAWebUserPrefsAppStateSync",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = 5 * o("WATimeUtils").MINUTE_MILLISECONDS;
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!o("WAWebCanonicalUtils").isCanonicalReloadPending()) {
            if (
              !o("WAWebCanonicalGating").isCanonicalRecoveryAppReloadEnabled()
            ) {
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] canonical recovery reload disabled",
                  ])),
              );
              return;
            }
            (o("WAWebCanonicalUtils").setCanonicalReloadPending(!0),
              r("WAWebODS").incr("web.app.canonical.recovery.reload_scheduled"),
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] scheduling reload after canonical recovery",
                  ])),
              ),
              C());
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      r("WAWebBrokerGlobalAppState").isLogoutInProgress ||
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[reload][canonical] restarting app after canonical registration",
            ])),
        ),
        o("WAWebUpdater").Updater.restart());
    }
    function y() {
      return (
        r("WAWebCallCollection").activeCall != null ||
        !o("WAWebUserPrefsAppStateSync").getAllCriticalDataSynced()
      );
    }
    function C() {
      if (!y()) {
        b();
        return;
      }
      (o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[canonical] reload deferred: call/sync pending",
          ])),
      ),
        r("WAWebODS").incr("web.app.canonical.recovery.reload_deferred"));
      var e = function () {
          y() || (t(), b());
        },
        t = function () {
          (r("WAWebCallCollection").off("change:activeCall", e),
            o("WAWebCmd").Cmd.off("on_critical_sync_done_from_bridge", e));
        };
      (r("WAWebCallCollection").on("change:activeCall", e),
        o("WAWebCmd").Cmd.on("on_critical_sync_done_from_bridge", e));
    }
    function b() {
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[canonical] waiting for stream idle transition before reload",
          ])),
      );
      var e = function () {
        o("WAWebStreamModel").Stream.couldForce && (n(), v("idle"));
      };
      o("WAWebStreamModel").Stream.on("change:couldForce", e);
      var t = self.setTimeout(function () {
        (n(), y() ? C() : v("timeout"));
      }, _);
      function n() {
        (o("WAWebStreamModel").Stream.off("change:couldForce", e),
          self.clearTimeout(t));
      }
    }
    function v(e) {
      if (
        r("WAWebBrokerGlobalAppState").isLogoutInProgress ||
        !o("WAWebCanonicalUtils").isCanonicalReloadPending()
      ) {
        o("WAWebCanonicalUtils").setCanonicalReloadPending(!1);
        return;
      }
      (o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
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
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[reload][canonical] restarting app after canonical recovery",
            ])),
        ),
        o("WAWebUpdater").Updater.restart());
    }
    ((l.scheduleCanonicalReload = f),
      (l.restartAfterCanonicalRegistration = h));
  },
  98,
);
