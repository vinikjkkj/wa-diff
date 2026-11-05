__d(
  "BladeRunnerConfig",
  ["RTISubscriptionManagerConfig", "WebDriverConfig", "cr:3024", "gkx"],
  function (t, n, r, o, a, i, l) {
    var e = "www_sandbox",
      s = "www_tier",
      u = (function () {
        function t() {}
        var o = t.prototype;
        return (
          (o.patchRequestHeaders = function (o) {
            var t = {},
              a = r("RTISubscriptionManagerConfig").bladerunner_www_sandbox,
              i = r("RTISubscriptionManagerConfig").is_intern;
            if (
              (a != null && (t[e] = a),
              i === !0 && (t[s] = "intern"),
              r("WebDriverConfig").isTestRunning && r("gkx")("20919"))
            ) {
              var l = n("cr:3024") == null ? void 0 : n("cr:3024").get();
              l != null && ((t.is_test = "true"), (t.original_request_id = l));
            }
            r("gkx")("20929") && (t["Accept-Ack"] = "RSAck");
            for (var u in o) t[u] = o[u];
            return ((t.http_referer = window.location.href), t);
          }),
          t
        );
      })(),
      c = new u(),
      d = c;
    l.default = d;
  },
  98,
);
