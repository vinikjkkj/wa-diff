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
            (this.$3 = null),
            (this.ping = function (t) {
              var r;
              n.$1.pong(t.valueOf());
              var a = self.performance.now(),
                i = a - ((r = n.$2) != null ? r : a);
              if (((n.$2 = a), i > 1300)) {
                var l = o(
                  "WAWebAppTracker",
                ).AppTracker.getAppContextWithLookback(i, a);
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "WindowsHybridBridgeDebugFeatures:ping:",
                      " diff:",
                      "ms appContext:",
                      "",
                    ])),
                  t,
                  i.toFixed(0),
                  l || "none",
                );
              }
              (n.$3 != null && self.clearTimeout(n.$3),
                (n.$3 = self.setTimeout(function () {
                  var e = o("WAWebAppTracker").AppTracker.getAppContext();
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "WindowsHybridBridgeDebugFeatures:ping:",
                        " no ping 10s ctx:",
                        "",
                      ])),
                    t,
                    e || "none",
                  );
                }, 1e4)));
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
