__d(
  "WAWebStatusVideoPrefetch",
  [
    "WALogger",
    "WAWebMediaVideoStreaming",
    "WAWebNoop",
    "WAWebSWBus",
    "WAWebSWBusActions",
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
            .catching(r("getErrorSafe")(t));
        },
      );
    }
    function u(e) {
      c(e, r("WAWebSWBusActions").STATUS_VIDEO_PREFETCH_CANCEL).catch(
        r("WAWebNoop"),
      );
    }
    async function c(e, t) {
      var n,
        a = (n = navigator.serviceWorker) == null ? void 0 : n.controller;
      if (a != null) {
        var i = await o("WAWebMediaVideoStreaming").videoStreamingInfo(e);
        if (i != null) {
          var l = { clientUrl: i.streamData.clientUrl };
          await r("WAWebSWBus").request(a, t, l);
        }
      }
    }
    ((l.prefetchStatusVideo = s), (l.cancelStatusVideoPrefetch = u));
  },
  98,
);
