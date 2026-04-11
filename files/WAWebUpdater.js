__d(
  "WAWebUpdater",
  [
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "WAWebAlarm",
    "WAWebCallCollection",
    "WAWebMiscBrowserUtils",
    "WAWebStreamModel",
    "WAWebSwUpdater",
    "WAWebUpdaterBaseUpdater",
    "WAWebUpdaterDownloadStateType",
    "WAWebUpdaterVersion",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
    "cr:12474",
    "cr:6022",
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
      f = 6e4,
      g = 1e3,
      h = (function (t) {
        function a() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.clearHardExpiration = function () {
            (t.prototype.clearHardExpiration.call(this),
              this.stopListening(
                r("WAWebCallCollection"),
                "change:activeCall",
              ));
          }),
          (i.showSoftUpdateBanner = function () {
            ((o("WAWebStreamModel").Stream.needsUpdate = !0),
              (o("WAWebStreamModel").Stream.isHardRefresh = !1));
          }),
          (i.update = function (a, i, l) {
            var t = this;
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "AppUpdate:update current: ",
                  " latest: ",
                  "",
                ])),
              String(this.activeVersion),
              String(a),
            );
            var u = ++this.latestUpdateIteration,
              c =
                a == null ? void 0 : new (o("WAWebUpdaterVersion").Version)(a),
              d = i === !0,
              m = typeof l == "number";
            return (
              this.clearHardExpiration(),
              typeof l == "number" &&
                (this.hardExpirationTimer = r("WAWebAlarm").setLocalTimeout(
                  function () {
                    if (r("WAWebCallCollection").activeCall != null) {
                      o("WALogger").LOG(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[reload] Updater: hard expiration deferred due to active call",
                          ])),
                      );
                      var e = function () {
                        (t.stopListening(
                          r("WAWebCallCollection"),
                          "change:activeCall",
                        ),
                          t.restart());
                      };
                      (t.listenTo(
                        r("WAWebCallCollection"),
                        "change:activeCall",
                        function () {
                          r("WAWebCallCollection").activeCall == null && e();
                        },
                      ),
                        window.setTimeout(e, f));
                    } else t.restart();
                  },
                  Date.now() + l,
                )),
              (this.updateInProgress = (_ || (_ = n("Promise")))
                .resolve(this.updateInProgress)
                .then(function () {
                  return t._update(c);
                })
                .then(function (e) {
                  t.updateInProgress = void 0;
                  var n = u !== t.latestUpdateIteration,
                    r =
                      e ===
                      o("WAWebUpdaterDownloadStateType").DownloadState.ERROR,
                    a =
                      e ===
                      o("WAWebUpdaterDownloadStateType").DownloadState
                        .UPDATE_NOT_AVAILABLE;
                  return (
                    n ||
                      r ||
                      a ||
                      ((d || m) &&
                        ((o("WAWebStreamModel").Stream.needsUpdate = !0),
                        (o("WAWebStreamModel").Stream.isHardRefresh = m)),
                      m &&
                        t.listenToAndRun(
                          o("WAWebStreamModel").Stream,
                          "change:couldForce",
                          function () {
                            o("WAWebStreamModel").Stream.couldForce &&
                              t.restart();
                          },
                        )),
                    e
                  );
                })),
              this.updateInProgress
            );
          }),
          (i._update = function (t) {
            if (
              !this.activeVersion.equals(t) &&
              n("cr:6022") != null &&
              n("cr:6022").alive
            )
              return r("WAWebCallCollection").activeCall != null
                ? (o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "AppUpdate: deferring SW update during active call",
                      ])),
                  ),
                  (_ || (_ = n("Promise"))).resolve(
                    o("WAWebUpdaterDownloadStateType").DownloadState
                      .UPDATE_NOT_AVAILABLE,
                  ))
                : o("WAWebSwUpdater").updateSw();
            var e = this.activeVersion.equals(t)
              ? o("WAWebUpdaterDownloadStateType").DownloadState
                  .UPDATE_NOT_AVAILABLE
              : o("WAWebUpdaterDownloadStateType").DownloadState
                  .UPDATE_DOWNLOADED;
            return (_ || (_ = n("Promise"))).resolve(e);
          }),
          (i.killServiceWorker = function () {
            if (!(n("cr:6022") != null && n("cr:6022").alive))
              return (_ || (_ = n("Promise"))).resolve();
            var e = navigator.serviceWorker;
            return e
              ? (o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "Killing service worker",
                    ])),
                ),
                e.ready
                  .then(function (e) {
                    return e.unregister();
                  })
                  .then(function (e) {
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "Service worker unregistration status: ",
                          "",
                        ])),
                      String(e),
                    );
                  }))
              : (_ || (_ = n("Promise"))).resolve();
          }),
          (i._doRestart = function () {
            return (
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[reload] Updater.restart",
                  ])),
              ),
              n("cr:12474") == null || n("cr:12474").saveRefreshState(),
              r("WAWebMiscBrowserUtils").hardRefresh(),
              o("WAWebUpdaterDownloadStateType").DownloadState.UPDATE_DOWNLOADED
            );
          }),
          (i.restart = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return e === !0
                  ? this.update(void 0, !0, 0)
                  : (r("WAWebCallCollection").activeCall != null &&
                      (o("WALogger").LOG(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[reload] Updater.restart: ending active call before refresh",
                          ])),
                      ),
                      yield (_ || (_ = n("Promise"))).race([
                        n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* () {
                            try {
                              var e = yield o(
                                "WAWebVoipStackInterface",
                              ).getVoipStackInterface();
                              e != null &&
                                e.type === "web" &&
                                (yield e.endCall(
                                  o("WAWebVoipSignalingEnums").EndCallReason
                                    .Self,
                                  !0,
                                ));
                            } catch (e) {}
                          },
                        )(),
                        o("WAPromiseDelays").delayMs(g),
                      ])),
                    this._doRestart());
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          a
        );
      })(o("WAWebUpdaterBaseUpdater").UpdaterBase),
      y = new h();
    ((l.UpdaterImpl = h), (l.Updater = y));
  },
  98,
);
