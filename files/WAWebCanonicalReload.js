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
      p = 5 * o("WATimeUtils").MINUTE_MILLISECONDS;
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (o("WAWebCanonicalUtils").getCanonicalReloadPending() == null) {
            if (
              !o("WAWebCanonicalGating").isCanonicalRecoveryAppReloadEnabled()
            ) {
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] canonical recovery reload disabled",
                  ])),
              );
              return;
            }
            (o("WAWebCanonicalUtils").setCanonicalReloadPending(e),
              r("WAWebODS").incr("web.app.canonical.recovery.reload_scheduled"),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] scheduling reload after canonical ",
                    "",
                  ])),
                e,
              ),
              h());
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      return (
        r("WAWebCallCollection").activeCall != null ||
        !o("WAWebUserPrefsAppStateSync").getAllCriticalDataSynced()
      );
    }
    function h() {
      if (!g()) {
        y();
        return;
      }
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[canonical] reload deferred: call/sync pending",
          ])),
      ),
        r("WAWebODS").incr("web.app.canonical.recovery.reload_deferred"));
      var t = function () {
          g() || (n(), y());
        },
        n = function () {
          (r("WAWebCallCollection").off("change:activeCall", t),
            o("WAWebCmd").Cmd.off("on_critical_sync_done_from_bridge", t));
        };
      (r("WAWebCallCollection").on("change:activeCall", t),
        o("WAWebCmd").Cmd.on("on_critical_sync_done_from_bridge", t));
    }
    function y() {
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[canonical] waiting for stream idle transition before reload",
          ])),
      );
      var e = function () {
        o("WAWebStreamModel").Stream.couldForce && (n(), C("idle", "recovery"));
      };
      o("WAWebStreamModel").Stream.on("change:couldForce", e);
      var t = self.setTimeout(function () {
        (n(), g() ? h() : C("timeout", "recovery"));
      }, p);
      function n() {
        (o("WAWebStreamModel").Stream.off("change:couldForce", e),
          self.clearTimeout(t));
      }
    }
    function C(e, t) {
      if (
        r("WAWebBrokerGlobalAppState").isLogoutInProgress ||
        o("WAWebCanonicalUtils").getCanonicalReloadPending() == null
      ) {
        o("WAWebCanonicalUtils").setCanonicalReloadPending(null);
        return;
      }
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[canonical] reload after canonical ",
            " trigger=",
            "",
          ])),
        t,
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
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[reload][canonical] restarting app after canonical recovery",
            ])),
        ),
        o("WAWebUpdater").Updater.restart());
    }
    ((l.getCanonicalReloadPending = o(
      "WAWebCanonicalUtils",
    ).getCanonicalReloadPending),
      (l.setCanonicalReloadPending = o(
        "WAWebCanonicalUtils",
      ).setCanonicalReloadPending),
      (l.scheduleCanonicalReload = _));
  },
  98,
);
