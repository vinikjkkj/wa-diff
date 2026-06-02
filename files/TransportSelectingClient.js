__d(
  "TransportSelectingClient",
  [
    "BladeRunnerDeferredClient",
    "DGWEnvUtil",
    "DGWRequestStreamDeferredClient",
    "ODS",
    "RequestStreamHandler",
    "TransportSelectingClientUtils",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function () {
        function t() {
          this.$1 = r("DGWRequestStreamDeferredClient");
        }
        var n = t.prototype;
        return (
          (n.requestStream = async function (n, a, i, l, s) {
            var t,
              u = new (r("RequestStreamHandler"))(i);
            if (r("DGWEnvUtil").isDGWEnvCompatible()) {
              n.method != null &&
                (e || (e = o("ODS"))).bumpEntityKey(
                  110,
                  "TransportSelectingClient",
                  n.method + ".dgw_client.request_stream",
                );
              var c = await this.$1.createStream(n, a, l, u, {
                deviceId: r("uuidv4")(),
                authType: s == null ? void 0 : s.authType,
                authToken: s == null ? void 0 : s.authToken,
              });
              return (await c.start(), c);
            }
            n.method != null &&
              (e || (e = o("ODS"))).bumpEntityKey(
                110,
                "TransportSelectingClient",
                n.method + ".bladerunner_client.request_stream",
              );
            var d = await r("BladeRunnerDeferredClient").requestStream(
              n,
              a,
              o("TransportSelectingClientUtils").BRHandlerConverter(
                u,
                (t = n.method) != null ? t : "unknown",
              ),
              l,
            );
            return d;
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
