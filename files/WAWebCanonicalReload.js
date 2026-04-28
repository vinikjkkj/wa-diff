__d(
  "WAWebCanonicalReload",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebABPropsCache",
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
      _,
      f,
      g,
      h,
      y = 3 * o("WATimeUtils").MINUTE_MILLISECONDS,
      C = 5 * o("WATimeUtils").MINUTE_MILLISECONDS;
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (o("WAWebCanonicalUtils").getCanonicalReloadPending() == null) {
            if (
              e === "registration" &&
              (yield o("WAWebABPropsCache").waitForABPropConfigsReady(),
              !o("WAWebABProps").getABPropConfigValue(
                "wa_web_canonical_reg_reload_enabled",
              ) || !o("WAWebCanonicalGating").isCanonicalAppReloadEnabled())
            ) {
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] canonical registration reload disabled",
                  ])),
              );
              return;
            }
            if (
              e === "recovery" &&
              !o("WAWebCanonicalGating").isCanonicalRecoveryAppReloadEnabled()
            ) {
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] canonical recovery reload disabled",
                  ])),
              );
              return;
            }
            (o("WAWebCanonicalUtils").setCanonicalReloadPending(e),
              e === "registration"
                ? r("WAWebODS").incr(
                    "web.app.canonical.registration.reload_scheduled",
                  )
                : r("WAWebODS").incr(
                    "web.app.canonical.recovery.reload_scheduled",
                  ),
              o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] scheduling reload after canonical ",
                    "",
                  ])),
                e,
              ),
              e === "registration" ? S() : L());
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      if (o("WAWebUserPrefsAppStateSync").getAllCriticalDataSynced()) {
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[canonical] critical data already synced, reloading",
            ])),
        ),
          k("sync", "registration"));
        return;
      }
      var t = self.setTimeout(function () {
          (a(),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[canonical] timeout waiting for critical sync, reloading",
                ])),
            ),
            r("WAWebODS").incr("web.app.canonical.registration.reload_timeout"),
            k("timeout", "registration"));
        }, y),
        n = function () {
          (a(),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[canonical] critical sync done, reloading",
                ])),
            ),
            k("sync", "registration"));
        };
      function a() {
        (o("WAWebCmd").Cmd.off("on_critical_sync_done_from_bridge", n),
          self.clearTimeout(t));
      }
      o("WAWebCmd").Cmd.on("on_critical_sync_done_from_bridge", n);
    }
    function R() {
      return (
        r("WAWebCallCollection").activeCall != null ||
        !o("WAWebUserPrefsAppStateSync").getAllCriticalDataSynced()
      );
    }
    function L() {
      if (!R()) {
        E();
        return;
      }
      (o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "[canonical] reload deferred: call/sync pending",
          ])),
      ),
        r("WAWebODS").incr("web.app.canonical.recovery.reload_deferred"));
      var e = function () {
          R() || (t(), E());
        },
        t = function () {
          (r("WAWebCallCollection").off("change:activeCall", e),
            o("WAWebCmd").Cmd.off("on_critical_sync_done_from_bridge", e));
        };
      (r("WAWebCallCollection").on("change:activeCall", e),
        o("WAWebCmd").Cmd.on("on_critical_sync_done_from_bridge", e));
    }
    function E() {
      o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "[canonical] waiting for stream idle transition before reload",
          ])),
      );
      var e = function () {
        o("WAWebStreamModel").Stream.couldForce && (n(), k("idle", "recovery"));
      };
      o("WAWebStreamModel").Stream.on("change:couldForce", e);
      var t = self.setTimeout(function () {
        (n(), R() ? L() : k("timeout", "recovery"));
      }, C);
      function n() {
        (o("WAWebStreamModel").Stream.off("change:couldForce", e),
          self.clearTimeout(t));
      }
    }
    function k(e, t) {
      (o("WALogger").LOG(
        m ||
          (m = babelHelpers.taggedTemplateLiteralLoose([
            "[canonical] reload after canonical ",
            " trigger=",
            "",
          ])),
        t,
        e,
      ),
        t === "registration"
          ? r("WAWebODS").incr(
              "web.app.canonical.registration.reload_triggered",
            )
          : r("WAWebODS").incr("web.app.canonical.recovery.reload_triggered"),
        e === "idle"
          ? r("WAWebODS").incr("web.app.canonical.recovery.reload_trigger_idle")
          : e === "timeout" &&
            (t === "registration"
              ? r("WAWebODS").incr(
                  "web.app.canonical.registration.reload_trigger_timeout",
                )
              : r("WAWebODS").incr(
                  "web.app.canonical.recovery.reload_trigger_timeout",
                )),
        t === "registration"
          ? (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[reload][canonical] reloading page after canonical registration",
                ])),
            ),
            self.location.reload())
          : (o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[reload][canonical] restarting app after canonical recovery",
                ])),
            ),
            o("WAWebUpdater").Updater.restart()));
    }
    ((l.getCanonicalReloadPending = o(
      "WAWebCanonicalUtils",
    ).getCanonicalReloadPending),
      (l.setCanonicalReloadPending = o(
        "WAWebCanonicalUtils",
      ).setCanonicalReloadPending),
      (l.scheduleCanonicalReload = b));
  },
  98,
);
