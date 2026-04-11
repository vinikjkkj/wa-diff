__d(
  "WAWebUpdaterBaseUpdater",
  [
    "WACustomError",
    "WAWebAlarm",
    "WAWebBuildConstants",
    "WAWebEventEmitter",
    "WAWebStreamModel",
    "WAWebUpdaterVersion",
    "WAWebWAWCStorage",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        var t;
        return (
          (t = e.call(this) || this),
          (t.$UpdaterBase$p_1 = !1),
          (t.latestUpdateIteration = 0),
          (t.activeVersion = new (o("WAWebUpdaterVersion").Version)(
            o("WAWebBuildConstants").VERSION_BASE,
          )),
          r("WAWebWAWCStorage").onVersionChange(function () {
            return t.setForceUpdateOnTakeOver();
          }),
          t
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.setForceUpdateOnTakeOver = function () {
          this.$UpdaterBase$p_1 = !0;
        }),
        (n.shouldForceUpdateOnTakeOver = function () {
          var e = this.$UpdaterBase$p_1;
          return ((this.$UpdaterBase$p_1 = !1), !!e);
        }),
        (n.clearHardExpiration = function () {
          (this.hardExpirationTimer &&
            (r("WAWebAlarm").clearTimeout(this.hardExpirationTimer),
            (this.hardExpirationTimer = void 0)),
            this.stopListening(
              o("WAWebStreamModel").Stream,
              "change:couldForce",
            ));
        }),
        (n.update = function (t, n, r, a) {
          throw new (o("WACustomError").UnimplementedMethod)("Updater::update");
        }),
        (n.showSoftUpdateBanner = function () {
          throw new (o("WACustomError").UnimplementedMethod)(
            "Updater::showSoftUpdateBanner",
          );
        }),
        (n.restart = function (t) {
          throw new (o("WACustomError").UnimplementedMethod)(
            "Updater::restart",
          );
        }),
        (n.manualDownload = function () {
          throw new (o("WACustomError").UnimplementedMethod)(
            "Updater::manualDownload",
          );
        }),
        (n.killServiceWorker = function () {
          throw new (o("WACustomError").UnimplementedMethod)(
            "Updater::killServiceWorker",
          );
        }),
        t
      );
    })(r("WAWebEventEmitter"));
    l.UpdaterBase = e;
  },
  98,
);
