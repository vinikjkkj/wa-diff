__d(
  "TransportSelectingClient",
  [
    "BladeRunnerDeferredClient",
    "DGWEnvUtil",
    "DGWRequestStreamDeferredClient",
    "ODS",
    "RequestStreamHandler",
    "TransportSelectingClientUtils",
    "asyncToGeneratorRuntime",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t() {
          this.$1 = r("DGWRequestStreamDeferredClient");
        }
        var a = t.prototype;
        return (
          (a.requestStream = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n, a, i, l) {
                var s,
                  u = new (r("RequestStreamHandler"))(a);
                if (r("DGWEnvUtil").isDGWEnvCompatible()) {
                  t.method != null &&
                    (e || (e = o("ODS"))).bumpEntityKey(
                      110,
                      "TransportSelectingClient",
                      t.method + ".dgw_client.request_stream",
                    );
                  var c = yield this.$1.createStream(t, n, i, u, {
                    deviceId: r("uuidv4")(),
                    authType: l == null ? void 0 : l.authType,
                    authToken: l == null ? void 0 : l.authToken,
                  });
                  return (yield c.start(), c);
                }
                t.method != null &&
                  (e || (e = o("ODS"))).bumpEntityKey(
                    110,
                    "TransportSelectingClient",
                    t.method + ".bladerunner_client.request_stream",
                  );
                var d = yield r("BladeRunnerDeferredClient").requestStream(
                  t,
                  n,
                  o("TransportSelectingClientUtils").BRHandlerConverter(
                    u,
                    (s = t.method) != null ? s : "unknown",
                  ),
                  i,
                );
                return d;
              },
            );
            function a(e, n, r, o, a) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          t
        );
      })();
    l.default = s;
  },
  98,
);
