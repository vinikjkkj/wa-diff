__d(
  "WAWebWindowsHybridBridgeDebugFeatures.v2608",
  ["WALogger", "WAWebBackendApi", "asyncToGeneratorRuntime"],
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
              ((n.$2 = a),
                i > 1300 &&
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "WindowsHybridBridgeDebugFeatures:ping:",
                        " diff:",
                        "ms",
                      ])),
                    t,
                    i.toFixed(0),
                  ),
                n.$3 != null && self.clearTimeout(n.$3),
                (n.$3 = self.setTimeout(function () {
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "WindowsHybridBridgeDebugFeatures:ping:",
                        " no ping 10s",
                      ])),
                    t,
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
        var r = t.prototype;
        return (
          (r.startHangsMonitor = function () {
            this.$1.startHangsMonitor();
          }),
          (r.saveNativeLogs = function () {
            this.$1.saveNativeLogs();
          }),
          (r.sendAdminLogs = function () {
            this.$1.sendAdminRequestedLogs();
          }),
          (r.requestNativeLogs = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return this.$1.requestNativeLogs();
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.saveJSLogs = function () {
            o("WAWebBackendApi").frontendFireAndForget(
              "createDownloadDataForMdWebLogs",
            );
          }),
          (r.limitStringSize = function (t, n) {
            var e = new Blob([t], { type: "text/plain" });
            if (e.size > n) {
              var r = e.size - n;
              return t.substr(r);
            }
            return t;
          }),
          (r.requestWebLogString = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t =
                    yield o("WAWebBackendApi").frontendSendAndReceive(
                      "getWebLogs",
                    ),
                  n = this.limitStringSize(t, 30 * u);
                this.$1.sendWebLogString(e.toString(), n);
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
    l.WindowsHybridBridgeDebugFeatures_v2608 = c;
  },
  98,
);
