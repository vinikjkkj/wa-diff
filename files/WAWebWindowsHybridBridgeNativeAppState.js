__d(
  "WAWebWindowsHybridBridgeNativeAppState",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebEventEmitter",
    "WAWebODS",
    "WAWebWindowsHybridBridgeTrace",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = n("$InternalEnum")({
        Normal: "normal",
        MinimizedToTray: "minimizedToTray",
      }),
      d = function (n, a) {
        var t = this;
        ((this.$4 = new (r("WAWebEventEmitter"))()),
          (this.$5 = function (n) {
            var r = n.toString(),
              a = c.cast(r);
            (a != null
              ? o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsHybridBridgeNativeAppState:appStateChanged: ",
                      "",
                    ])),
                  c.getName(a),
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
            return t.getAppState() === c.MinimizedToTray;
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
          (this.updateServerTime = function (e) {
            var n = t.$1.updateServerTimeAsync;
            n != null &&
              (r("WAWebODS").incr(
                "web.hybrid.bridge.native_app_state.send.update_server_time",
              ),
              o("WAWebWindowsHybridBridgeTrace")
                .traceBridgeCall(
                  {
                    bridge: "nativeAppStateBridge",
                    method: "updateServerTimeAsync",
                    type: "async",
                  },
                  function () {
                    return n.call(t.$1, e);
                  },
                )
                .then(void 0, function (e) {
                  (r("WAWebODS").incr(
                    "web.hybrid.bridge.native_app_state.send.update_server_time.fail",
                  ),
                    o("WALogger")
                      .WARN(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "WindowsHybridBridgeNativeAppState:updateServerTime failed",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e)));
                }));
          }),
          (this.$1 = n),
          (this.$2 = a),
          this.$1.addEventListener("appStateChangedEvent", this.$5),
          this.$1.subscribe(null));
      };
    l.WindowsHybridBridgeNativeAppState = d;
  },
  98,
);
