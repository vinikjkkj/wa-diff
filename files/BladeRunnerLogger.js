__d(
  "BladeRunnerLogger",
  ["FBLogger", "ODS"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "bladerunner_js_client",
      u = { info: "info", warning: "warning", exception: "exception" },
      c = (function () {
        function t() {
          this.setFBLoggerLevel(1);
        }
        var n = t.prototype;
        return (
          (n.info = function (t) {
            (this.$2 >= 2 && r("FBLogger")(s).info("BladeRunner info: %s", t),
              this.$3(u.info, t));
          }),
          (n.warn = function (t) {
            (this.$2 >= 1 && r("FBLogger")(s).warn("BladeRunner warn: %s", t),
              this.$3(u.warning, t));
          }),
          (n.exception = function (t, n) {
            n === void 0 && (n = "");
            var e = n + " " + t.toString();
            (this.$2 >= 0 &&
              r("FBLogger")(s).warn(
                "BladeRunner exception: %s, %s",
                n,
                t.toString(),
              ),
              this.$3(u.exception, e));
          }),
          (n.trimForLogging = function (t) {
            var e = 1024;
            return typeof t == "string" && t.length > e
              ? "[trimmed]:" + t.substring(0, e) + "..."
              : t;
          }),
          (n.bumpCounter = function (n, r) {
            (r === void 0 && (r = 1),
              (e || (e = o("ODS"))).bumpEntityKey(
                2966,
                "BladeRunnerClient",
                n,
                r,
              ));
          }),
          (n.setClientSessionId = function (t) {
            this.$1 = t;
          }),
          (n.setFBLoggerLevel = function (t) {
            this.$2 = t;
          }),
          (n.$3 = function (t, n) {}),
          t
        );
      })(),
      d = new c(),
      m = d;
    l.default = m;
  },
  98,
);
