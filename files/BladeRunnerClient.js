__d(
  "BladeRunnerClient",
  [
    "Base64",
    "BladeRunnerConfig",
    "BladeRunnerLogger",
    "BladeRunnerSocket",
    "BladeRunnerSocketStream",
    "BladeRunnerTypes",
    "BladeRunnerTypesInternal",
    "ConstUriUtils",
    "RequestStreamE2EClientSamplingConfig",
    "RequestStreamE2ELogger",
    "RequestStreamE2ESampling",
    "RequestStreamTransport",
    "RtiRequestStreamE2eClientBatchFalcoEvent",
    "RtiRequestStreamE2eClientFalcoEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e, t) {
        ((this.$2 = o(
          "RequestStreamTransport",
        ).RequestStreamTransport.WEB_BR_MQTT),
          (this.$1 = e != null ? e : r("BladeRunnerSocket").get()),
          t && (this.$2 = t));
      }
      var t = e.prototype;
      return (
        (t.createStream = function (t, n, r, o) {
          return this.$3(t, n, r, o);
        }),
        (t.requestStream = function (t, n, r, o) {
          var e = this.$3(t, n, r, o);
          return (e.send(), e);
        }),
        (t.logInfo = function (t) {
          r("BladeRunnerLogger").info(t);
        }),
        (t.bumpCounter = function (t) {
          r("BladeRunnerLogger").bumpCounter(t);
        }),
        (t.$3 = function (t, n, a, i) {
          var e,
            l = new (o("BladeRunnerTypesInternal").GatewayStreamRequest)();
          return (
            (l.streamId = this.$1.getNextStreamId()),
            (l.requestType =
              o("BladeRunnerTypes").StreamRequestType.BLADE_RUNNER),
            (l.headers = r("BladeRunnerConfig").patchRequestHeaders(t)),
            (l.extraHeader = JSON.stringify(l.headers)),
            (l.payload = n != null ? r("Base64").encode(n) : null),
            i != null && (i.transport = "WEB_RS_MQTT"),
            (l.instrumentationData = o(
              "RequestStreamE2ESampling",
            ).validateInstrumentationData(
              r("RequestStreamE2EClientSamplingConfig"),
              l.headers || {},
              i,
            )),
            (l.e2eLogger = o("RequestStreamE2ELogger").createStreamLogger(
              l.headers,
              l.instrumentationData,
              this.$2,
              {
                domain:
                  (e = o("ConstUriUtils").getUri(window.location.href)) == null
                    ? void 0
                    : e.getDomain(),
                rs_e2e_client_event_logger: r(
                  "RtiRequestStreamE2eClientFalcoEvent",
                ),
                rs_e2e_client_batch_event_logger: r(
                  "RtiRequestStreamE2eClientBatchFalcoEvent",
                ),
              },
            )),
            new (r("BladeRunnerSocketStream"))(a, l, this.$1)
          );
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
