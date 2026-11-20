__d(
  "WAWebLabyrinthShadowRunInWorker",
  [
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebBackendWorkerClient",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 10 * o("WATimeUtils").MINUTE_MILLISECONDS;
    function s(t) {
      return o("WAPromiseDelays").withTimeout(u(t), e, function () {
        throw r("err")("labyrinth-shadow-worker-timeout");
      });
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebBackendWorkerClient").getBackendWorkerBridge();
          return t.sendAndReceive("labyrinthShadow", "run", e, !0);
        })),
        c.apply(this, arguments)
      );
    }
    l.runLabyrinthShadowInBackendWorker = s;
  },
  98,
);
