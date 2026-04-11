__d(
  "ExecutionEnvironment",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = !!(t !== void 0 && t.document && t.document.createElement),
      l = typeof WorkerGlobalScope == "function",
      s =
        typeof SharedWorkerGlobalScope == "function" &&
        self instanceof SharedWorkerGlobalScope,
      u = !l && e,
      c = {
        canUseDOM: e,
        canUseEventListeners: e && !!(t.addEventListener || t.attachEvent),
        canUseViewport: e && !!window.screen,
        canUseWorkers: typeof Worker != "undefined",
        isInBrowser: e || l,
        isInMainThread: u,
        isInSharedWorker: s,
        isInWorker: l,
      },
      d = c;
    i.default = d;
  },
  66,
);
