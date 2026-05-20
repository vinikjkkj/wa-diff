__d(
  "WAWebWindowsHybridBridgeDebugFeatures",
  [
    "WALogger",
    "WAWebAppTracker",
    "WAWebBackendApi",
    "WAWebODS",
    "WAWebWindowsHybridBridgeTrace",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 1e3,
      c = (function () {
        function t(t) {
          var n = this,
            a,
            i,
            l;
          ((this.$2 = null),
            (this.$3 = 0),
            (this.$4 = null),
            (this.$5 = null),
            (this.$6 = function () {
              var t,
                r = self.performance.now() - ((t = n.$2) != null ? t : 0),
                a = o("WAWebAppTracker").AppTracker.getAppContext();
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "WindowsHybridBridgeDebugFeatures:ping:",
                    " no ping ",
                    "s appContext:",
                    "",
                  ])),
                n.$3,
                (r / 1e3).toFixed(0),
                a || "none",
              );
            }),
            (this.ping = function (e) {
              var t;
              (o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                { bridge: "debugFeatures", method: "pong", type: "sync" },
                function () {
                  return n.$1.pong(e.valueOf());
                },
              ),
                r("WAWebODS").incr("web.hybrid.bridge.debug.send.pong"));
              var a = self.performance.now(),
                i = a - ((t = n.$2) != null ? t : a);
              if (((n.$2 = a), (n.$3 = e), i > 1300)) {
                var l = o(
                  "WAWebAppTracker",
                ).AppTracker.getAppContextWithLookback(i, a);
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsHybridBridgeDebugFeatures:ping:",
                      " diff:",
                      "ms appContext:",
                      "",
                    ])),
                  e,
                  i.toFixed(0),
                  l || "none",
                );
              }
              (n.$4 != null && self.clearTimeout(n.$4),
                n.$5 != null && (self.clearInterval(n.$5), (n.$5 = null)),
                (n.$4 = self.setTimeout(function () {
                  (n.$6(), (n.$5 = self.setInterval(n.$6, 1e3)));
                }, 5e3)));
            }),
            (this.$1 = t),
            (a = this.$1) == null ||
              a.addEventListener("jsLogs", function () {
                n.saveJSLogs();
              }),
            (i = this.$1) == null ||
              i.addEventListener("requestWebLogStringEvent", function (e) {
                n.requestWebLogString(e);
              }),
            (l = this.$1) == null || l.addEventListener("pingEvent", this.ping),
            this.$1.subscribe(null));
        }
        var a = t.prototype;
        return (
          (a.startHangsMonitor = function () {
            var e = this;
            (r("WAWebODS").incr(
              "web.hybrid.bridge.debug.send.start_hangs_monitor",
            ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "debugFeatures",
                  method: "startHangsMonitor",
                  type: "sync",
                },
                function () {
                  return e.$1.startHangsMonitor();
                },
              ));
          }),
          (a.saveNativeLogs = function () {
            var e = this;
            (r("WAWebODS").incr(
              "web.hybrid.bridge.debug.send.save_native_logs",
            ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "debugFeatures",
                  method: "saveNativeLogs",
                  type: "sync",
                },
                function () {
                  return e.$1.saveNativeLogs();
                },
              ));
          }),
          (a.sendAdminLogs = function () {
            var e = this;
            (r("WAWebODS").incr(
              "web.hybrid.bridge.debug.send.send_admin_requested_logs",
            ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "debugFeatures",
                  method: "sendAdminRequestedLogs",
                  type: "sync",
                },
                function () {
                  return e.$1.sendAdminRequestedLogs();
                },
              ));
          }),
          (a.requestNativeLogs = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this;
              return (
                r("WAWebODS").incr(
                  "web.hybrid.bridge.debug.send.request_native_logs",
                ),
                o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                  {
                    bridge: "debugFeatures",
                    method: "requestNativeLogs",
                    type: "sync",
                  },
                  function () {
                    return e.$1.requestNativeLogs();
                  },
                )
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.saveJSLogs = function () {
            o("WAWebBackendApi").frontendFireAndForget(
              "createDownloadDataForMdWebLogs",
            );
          }),
          (a.limitStringSize = function (t, n) {
            var e = new Blob([t], { type: "text/plain" });
            if (e.size > n) {
              var r = e.size - n;
              return t.substr(r);
            }
            return t;
          }),
          (a.requestWebLogString = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  n =
                    yield o("WAWebBackendApi").frontendSendAndReceive(
                      "getWebLogs",
                    ),
                  a = this.limitStringSize(n, 30 * u);
                (r("WAWebODS").incr(
                  "web.hybrid.bridge.debug.send.send_web_log_string",
                ),
                  o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                    {
                      bridge: "debugFeatures",
                      method: "sendWebLogString",
                      type: "sync",
                    },
                    function () {
                      return t.$1.sendWebLogString(e.toString(), a);
                    },
                  ));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })();
    l.WindowsHybridBridgeDebugFeatures = c;
  },
  98,
);
