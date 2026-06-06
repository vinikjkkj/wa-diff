__d(
  "WAWebUpdater",
  [
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
      _ = 6e4,
      f = 1e3,
      g = (function (t) {
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
          (i.update = function (n) {
            var t = this,
              a = n === void 0 ? {} : n,
              i = a.belowHard,
              l = a.belowSoft,
              u = a.beta,
              c = a.serverVersion;
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "AppUpdate:update current: ",
                  " latest: ",
                  "",
                ])),
              String(this.activeVersion),
              String(c),
            );
            var d = ++this.latestUpdateIteration,
              m =
                c == null ? void 0 : new (o("WAWebUpdaterVersion").Version)(c),
              p = l === !0,
              f = typeof i == "number";
            return (
              this.clearHardExpiration(),
              typeof i == "number" &&
                (this.hardExpirationTimer = r("WAWebAlarm").setLocalTimeout(
                  function () {
                    if (r("WAWebCallCollection").activeCall != null) {
                      o("WALogger").LOG(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[reload] Updater: hard exp deferred (active call)",
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
                        window.setTimeout(e, _));
                    } else t.restart();
                  },
                  Date.now() + i,
                )),
              (this.updateInProgress = Promise.resolve(this.updateInProgress)
                .then(function () {
                  return t._update(m);
                })
                .then(function (e) {
                  t.updateInProgress = void 0;
                  var n = d !== t.latestUpdateIteration,
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
                      ((p || f) &&
                        ((o("WAWebStreamModel").Stream.needsUpdate = !0),
                        (o("WAWebStreamModel").Stream.isHardRefresh = f)),
                      f &&
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
                  Promise.resolve(
                    o("WAWebUpdaterDownloadStateType").DownloadState
                      .UPDATE_NOT_AVAILABLE,
                  ))
                : o("WAWebSwUpdater").updateSw();
            var e = this.activeVersion.equals(t)
              ? o("WAWebUpdaterDownloadStateType").DownloadState
                  .UPDATE_NOT_AVAILABLE
              : o("WAWebUpdaterDownloadStateType").DownloadState
                  .UPDATE_DOWNLOADED;
            return Promise.resolve(e);
          }),
          (i.killServiceWorker = function () {
            if (!(n("cr:6022") != null && n("cr:6022").alive))
              return Promise.resolve();
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
              : Promise.resolve();
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
          (i.restart = async function (t) {
            return t === !0
              ? this.update({ belowHard: 0, belowSoft: !0 })
              : (r("WAWebCallCollection").activeCall != null &&
                  (o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[reload] Updater.restart: ending active call before refresh",
                      ])),
                  ),
                  await Promise.race([
                    (async function () {
                      try {
                        var e = await o(
                          "WAWebVoipStackInterface",
                        ).getVoipStackInterface();
                        e != null &&
                          e.type === "web" &&
                          (await e.endCall(
                            o("WAWebVoipSignalingEnums").EndCallReason.Self,
                            !0,
                          ));
                      } catch (e) {}
                    })(),
                    o("WAPromiseDelays").delayMs(f),
                  ])),
                this._doRestart());
          }),
          a
        );
      })(o("WAWebUpdaterBaseUpdater").UpdaterBase),
      h = new g();
    ((l.UpdaterImpl = g), (l.Updater = h));
  },
  98,
);
