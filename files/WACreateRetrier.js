__d(
  "WACreateRetrier",
  [
    "WAComms",
    "WAGetMediaRoute",
    "WAMediaOperationsRetrier",
    "WAPromiseDelays",
    "WAResultOrError",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e4;
    function s() {
      return Promise.race([
        o("WAComms").waitForConnection(),
        o("WAPromiseDelays").delayMs(e),
      ]);
    }
    async function u(e, t) {
      if (r("gkx")("1921"))
        return o("WAResultOrError").makeResult(
          o("WAMediaOperationsRetrier").createRouteIndependentUploadRetrier(s),
        );
      var n = await o("WAGetMediaRoute").getMediaRoute(
        { operation: "upload", serverMediaType: e },
        t,
      );
      if (!n.success) return n;
      var a = n.value,
        i = a.authToken,
        l = a.fallbackHost,
        u = a.selectedHost,
        c = new (o("WAMediaOperationsRetrier").MediaOperationsRetrier)(
          "upload",
          {
            host: { domain: u.domain, class: u.class },
            fallbackHost: l && { domain: l.domain, class: l.class },
            authToken: i,
            timeElapsed: null,
          },
          o("WAComms").waitForConnection,
        );
      return o("WAResultOrError").makeResult(c);
    }
    l.createUploadRetrier = u;
  },
  98,
);
