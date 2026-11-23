__d(
  "WAWebLabyrinthShadowRunInWorker",
  ["WAPromiseDelays", "WATimeUtils", "WAWebBackendWorkerClient", "err"],
  function (t, n, r, o, a, i, l) {
    var e = 10 * o("WATimeUtils").MINUTE_MILLISECONDS;
    function s(t) {
      return o("WAPromiseDelays").withTimeout(u(t), e, function () {
        throw r("err")("labyrinth-shadow-worker-timeout");
      });
    }
    async function u(e) {
      var t = await o("WAWebBackendWorkerClient").getBackendWorkerBridge();
      return t.sendAndReceive("labyrinthShadow", "run", e, !0);
    }
    l.runLabyrinthShadowInBackendWorker = s;
  },
  98,
);
