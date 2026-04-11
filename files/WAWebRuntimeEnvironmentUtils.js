__d(
  "WAWebRuntimeEnvironmentUtils",
  [],
  function (t, n, r, o, a, i) {
    function e() {
      return (
        typeof WorkerGlobalScope != "undefined" &&
        typeof importScripts == "function"
      );
    }
    function l() {
      return e() && "ServiceWorkerGlobalScope" in self;
    }
    ((i.isWorker = e), (i.isServiceWorker = l));
  },
  66,
);
