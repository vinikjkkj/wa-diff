__d(
  "WAWebWindowsHybridBridgeNativeAppState.v2634",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebEventEmitter",
    "WAWebODS",
    "WAWebWindowsHybridBridgeTrace",
    "asyncToGeneratorRuntime",
  ],
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
                      "WindowsHybridBridgeNativeAppState:appStateChanged invalid ",
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
            return o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "nativeAppStateBridge",
                method: "takeAppLaunchTimeStamp",
                type: "sync",
              },
              function () {
                return t.$2.takeAppLaunchTimeStamp();
              },
            );
          }),
          (this.getFirstAppRestoreTimeStamp = function () {
            return o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "nativeAppStateBridge",
                method: "getFirstAppRestoreTimeStamp",
                type: "sync",
              },
              function () {
                return t.$2.getFirstAppRestoreTimeStamp();
              },
            );
          }),
          (this.getLastAppRestoreTimeStamp = function () {
            return o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "nativeAppStateBridge",
                method: "getLastAppRestoreTimeStamp",
                type: "sync",
              },
              function () {
                return t.$2.getLastAppRestoreTimeStamp();
              },
            );
          }),
          (this.detectNativeClockSkew = function () {
            return o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "nativeAppStateBridge",
                method: "detectNativeClockSkew",
                type: "sync",
              },
              function () {
                return t.$2.detectNativeClockSkew(Date.now());
              },
            );
          }),
          (this.bringMainWindowToForeground = function () {
            return o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
              {
                bridge: "nativeAppStateBridge",
                method: "bringMainWindowToForeground",
                type: "async",
              },
              function () {
                return t.$1.bringMainWindowToForeground();
              },
            );
          }),
          (this.getAppStateAsync = n(
            "asyncToGeneratorRuntime",
          ).asyncToGenerator(function* () {
            r("WAWebODS").incr(
              "web.hybrid.bridge.native_app_state.send.get_app_state",
            );
            var e = o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "nativeAppStateBridge",
                  method: "getAppState",
                  type: "async",
                },
                function () {
                  return t.$1.getAppState();
                },
              ),
              n = e.toString(),
              a = d.cast(n);
            return (
              a != null
                ? o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "WindowsHybridBridgeNativeAppState:getAppStateAsync: ",
                        "",
                      ])),
                    d.getName(a),
                  )
                : o("WALogger").ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "WindowsHybridBridgeNativeAppState:getAppStateAsync invalid ",
                        "",
                      ])),
                    n,
                  ),
              a
            );
          })),
          (this.takeAppLaunchSnapshotAsync = function () {
            var e = t.$1.takeAppLaunchSnapshotAsync;
            return e == null
              ? null
              : (r("WAWebODS").incr(
                  "web.hybrid.bridge.native_app_state.send.get_app_launch_snapshot_async",
                ),
                o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                  {
                    bridge: "nativeAppStateBridge",
                    method: "takeAppLaunchSnapshotAsync",
                    type: "async",
                  },
                  function () {
                    return e.call(t.$1, Date.now());
                  },
                ));
          }),
          (this.$1 = a),
          (this.$2 = i),
          this.$1.addEventListener("appStateChangedEvent", this.$5),
          this.$1.subscribe(null));
      };
    ((l.AppState_v2634 = d), (l.WindowsHybridBridgeNativeAppState_v2634 = m));
  },
  98,
);
