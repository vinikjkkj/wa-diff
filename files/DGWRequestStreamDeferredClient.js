__d(
  "DGWRequestStreamDeferredClient",
  [
    "ConstUriUtils",
    "Promise",
    "RequestStreamE2EClientSamplingConfig",
    "RtiRequestStreamE2eClientBatchFalcoEvent",
    "RtiRequestStreamE2eClientFalcoEvent",
    "RtiWebRequestStreamClient",
    "WebDriverConfig",
    "cr:3024",
    "gkx",
    "nullthrows",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t() {
          this.$1 = null;
        }
        var o = t.prototype;
        return (
          (o.createStream = function (t, n, o, a, i) {
            return (
              this.$2(),
              r("nullthrows")(this.$1).then(function (e) {
                return e.createStream(t, n, o, a, i);
              })
            );
          }),
          (o.$2 = function () {
            if (this.$1 == null) {
              var t = new (e || (e = n("Promise")))(function (e) {
                  r("requireDeferred")("DGWRequestStreamClient")
                    .__setRef("DGWRequestStreamDeferredClient")
                    .onReady(e);
                }),
                o = new e(function (e) {
                  r("requireDeferred")("DGWClient")
                    .__setRef("DGWRequestStreamDeferredClient")
                    .onReady(e);
                });
              this.$1 = e.all([t, o]).then(function (e) {
                var t = e[0],
                  n = e[1];
                return new t(u(n));
              });
            }
          }),
          t
        );
      })();
    function u(e) {
      var t;
      return {
        dgwStreamFactoryConfig: {
          get_log_dgw_streamgroup: function () {
            return r("gkx")("20920");
          },
          dgw_client_factory: e,
        },
        dgwRequestStreamRefConfig: {
          get_web_rs_unlimited_retries: function () {
            return r("gkx")("20916");
          },
          get_webdriver_test_request_id: function () {
            var e;
            return r("WebDriverConfig").isTestRunning &&
              (e = n("cr:3024") == null ? void 0 : n("cr:3024").get()) != null
              ? e
              : null;
          },
          get_overrideHeaders: function () {
            return r("RtiWebRequestStreamClient").overrideHeaders;
          },
          e2e_logger_config: {
            domain:
              (t = o("ConstUriUtils").getUri(window.location.href)) == null
                ? void 0
                : t.getDomain(),
            rs_e2e_client_event_logger: r(
              "RtiRequestStreamE2eClientFalcoEvent",
            ),
            rs_e2e_client_batch_event_logger: r(
              "RtiRequestStreamE2eClientBatchFalcoEvent",
            ),
          },
          e2e_logger_sampling_config: r("RequestStreamE2EClientSamplingConfig"),
        },
        sciIsolationConfig: {
          get_sci_dogfooding: function () {
            return r("gkx")("3193");
          },
          get_js_rs_client_route_entity_presence_to_sci: function () {
            return r("gkx")("18246");
          },
          get_js_rs_client_route_presence_unified_json_to_sci: function () {
            return r("gkx")("18259");
          },
        },
      };
    }
    var c = new s();
    l.default = c;
  },
  98,
);
