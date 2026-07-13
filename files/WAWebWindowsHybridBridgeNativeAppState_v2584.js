__d(
  "WAWebWindowsHybridBridgeNativeAppState.v2584",
  ["$InternalEnum", "WALogger", "WAWebEventEmitter", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = n("$InternalEnum")({
        Normal: "normal",
        MinimizedToTray: "minimizedToTray",
      }),
      m = function (a, i) {
        var t = this;
        ((this.$4 = new (r("WAWebEventEmitter"))()),
          (this.$5 = function (n) {
            var r = n.toString(),
              a = d.cast(r);
            (a != null
              ? o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsHybridBridgeNativeAppState:appStateChanged: ",
                      "",
                    ])),
                  d.getName(a),
                )
              : o("WALogger").ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsHybridBridgeNativeAppState:appStateChanged: invalid appStateId: ",
                      "",
                    ])),
                  r,
                ),
              (t.$3 = a),
              t.$4.trigger("appStateChanged", t.isMinimizedToTray()));
          }),
          (this.getAppState = function () {
            return t.$3;
          }),
          (this.getEvents = function () {
            return t.$4;
          }),
          (this.isMinimizedToTray = function () {
            return t.getAppState() === d.MinimizedToTray;
          }),
          (this.takeAppLaunchTimeStamp = function () {
            return t.$2.takeAppLaunchTimeStamp();
          }),
          (this.getFirstAppRestoreTimeStamp = function () {
            return t.$2.getFirstAppRestoreTimeStamp();
          }),
          (this.getLastAppRestoreTimeStamp = function () {
            return t.$2.getLastAppRestoreTimeStamp();
          }),
          (this.detectNativeClockSkew = function () {
            return t.$2.detectNativeClockSkew(Date.now());
          }),
          (this.getAppStateAsync = n(
            "asyncToGeneratorRuntime",
          ).asyncToGenerator(function* () {
            var e = t.$1.getAppState(),
              n = e.toString(),
              r = d.cast(n);
            return (
              r != null
                ? o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "WindowsHybridBridgeNativeAppState:getAppStateAsync: ",
                        "",
                      ])),
                    d.getName(r),
                  )
                : o("WALogger").ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "WindowsHybridBridgeNativeAppState:getAppStateAsync: invalid appState '",
                        "'",
                      ])),
                    n,
                  ),
              r
            );
          })),
          (this.takeAppLaunchSnapshotAsync = function () {
            return null;
          }),
          (this.$1 = a),
          (this.$2 = i),
          this.$1.addEventListener("appStateChangedEvent", this.$5),
          this.$1.subscribe(null));
      };
    ((l.AppState_v2584 = d), (l.WindowsHybridBridgeNativeAppState_v2584 = m));
  },
  98,
);
