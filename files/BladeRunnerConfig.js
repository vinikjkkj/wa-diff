__d(
  "BladeRunnerConfig",
  [
    "RTISubscriptionManagerConfig",
    "WebDriverConfig",
    "cr:3024",
    "gkx",
    "isEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "OverrideServer",
      u = "www_sandbox",
      c = "www_tier",
      d = (function () {
        function t() {}
        var o = t.prototype;
        return (
          (o.patchRequestHeaders = function (o) {
            var t = {},
              a = r("RTISubscriptionManagerConfig").bladerunner_www_sandbox,
              i = r("RTISubscriptionManagerConfig").is_intern;
            if (
              (e || (e = r("isEmpty")))(
                r("WebDriverConfig").auxiliaryServiceInfo,
              )
            )
              a != null && (t[u] = a);
            else {
              var l,
                d =
                  (l = r("WebDriverConfig").auxiliaryServiceInfo.BladeRunner) !=
                  null
                    ? l
                    : r("WebDriverConfig").auxiliaryServiceInfo[
                        "BladeRunner-sandcastle"
                      ];
              d != null
                ? (typeof d.ip_address == "string"
                    ? (t[s] = d.ip_address + ":18295")
                    : typeof d.hostname == "string" &&
                      (t[s] = d.hostname + ":18295"),
                  typeof r("WebDriverConfig").originHost == "string" &&
                    (t[u] = "www." + r("WebDriverConfig").originHost))
                : a != null && (t[u] = a);
            }
            if (
              (i === !0 && (t[c] = "intern"),
              r("WebDriverConfig").isTestRunning && r("gkx")("20919"))
            ) {
              var m = n("cr:3024") == null ? void 0 : n("cr:3024").get();
              m != null && ((t.is_test = "true"), (t.original_request_id = m));
            }
            r("gkx")("20929") && (t["Accept-Ack"] = "RSAck");
            for (var p in o) t[p] = o[p];
            return ((t.http_referer = window.location.href), t);
          }),
          t
        );
      })(),
      m = new d(),
      p = m;
    l.default = p;
  },
  98,
);
