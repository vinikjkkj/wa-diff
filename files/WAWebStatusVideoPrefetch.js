__d(
  "WAWebStatusVideoPrefetch",
  [
    "WALogger",
    "WAWebMediaVideoStreaming",
    "WAWebNoop",
    "WAWebSWBus",
    "WAWebSWBusActions",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      return c(t, r("WAWebSWBusActions").STATUS_VIDEO_PREFETCH).catch(
        function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[status] video prefetch failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("status-video-prefetch-failed", { sampling: 0.01 });
        },
      );
    }
    function u(e) {
      c(e, r("WAWebSWBusActions").STATUS_VIDEO_PREFETCH_CANCEL).catch(
        r("WAWebNoop"),
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = (n = navigator.serviceWorker) == null ? void 0 : n.controller;
          if (a != null) {
            var i = yield o("WAWebMediaVideoStreaming").videoStreamingInfo(e);
            if (i != null) {
              var l = { clientUrl: i.streamData.clientUrl };
              yield r("WAWebSWBus").request(a, t, l);
            }
          }
        })),
        d.apply(this, arguments)
      );
    }
    ((l.prefetchStatusVideo = s), (l.cancelStatusVideoPrefetch = u));
  },
  98,
);
