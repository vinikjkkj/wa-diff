__d(
  "WAWebWindowsHybridBridgeDebugFeatures",
  [
    "WALogger",
    "WAWebAppTracker",
    "WAWebBackendApi",
    "WAWebODS",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 1e3,
      c = (function () {
        function t(t) {
          var n = this,
            r,
            a,
            i;
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
              n.$1.pong(e.valueOf());
              var r = self.performance.now(),
                a = r - ((t = n.$2) != null ? t : r);
              if (((n.$2 = r), (n.$3 = e), a > 1300)) {
                var i = o(
                  "WAWebAppTracker",
                ).AppTracker.getAppContextWithLookback(a, r);
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsHybridBridgeDebugFeatures:ping:",
                      " diff:",
                      "ms appContext:",
                      "",
                    ])),
                  e,
                  a.toFixed(0),
                  i || "none",
                );
              }
              (n.$4 != null && self.clearTimeout(n.$4),
                n.$5 != null && (self.clearInterval(n.$5), (n.$5 = null)),
                (n.$4 = self.setTimeout(function () {
                  (n.$6(), (n.$5 = self.setInterval(n.$6, 1e3)));
                }, 5e3)));
            }),
            (this.$1 = t),
            (r = this.$1) == null ||
              r.addEventListener("jsLogs", function () {
                n.saveJSLogs();
              }),
            (a = this.$1) == null ||
              a.addEventListener("requestWebLogStringEvent", function (e) {
                n.requestWebLogString(e);
              }),
            (i = this.$1) == null || i.addEventListener("pingEvent", this.ping),
            this.$1.subscribe(null));
        }
        var a = t.prototype;
        return (
          (a.startHangsMonitor = function () {
            (r("WAWebODS").incr(
              "web.hybrid.bridge.debug.send.start_hangs_monitor",
            ),
              this.$1.startHangsMonitor());
          }),
          (a.saveNativeLogs = function () {
            (r("WAWebODS").incr(
              "web.hybrid.bridge.debug.send.save_native_logs",
            ),
              this.$1.saveNativeLogs());
          }),
          (a.sendAdminLogs = function () {
            (r("WAWebODS").incr(
              "web.hybrid.bridge.debug.send.send_admin_requested_logs",
            ),
              this.$1.sendAdminRequestedLogs());
          }),
          (a.requestNativeLogs = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return (
                r("WAWebODS").incr(
                  "web.hybrid.bridge.debug.send.request_native_logs",
                ),
                this.$1.requestNativeLogs()
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
                var t =
                    yield o("WAWebBackendApi").frontendSendAndReceive(
                      "getWebLogs",
                    ),
                  n = this.limitStringSize(t, 30 * u);
                (r("WAWebODS").incr(
                  "web.hybrid.bridge.debug.send.send_web_log_string",
                ),
                  this.$1.sendWebLogString(e.toString(), n));
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
