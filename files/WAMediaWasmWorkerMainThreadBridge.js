__d(
  "WAMediaWasmWorkerMainThreadBridge",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null,
      l = null;
    function s(t) {
      ((e = async function (n, r) {
        var e = await t.fullyConnected;
        e.postMessage({ type: "log", logType: n, message: r });
      }),
        (l = async function (n) {
          var e = await t.fullyConnected;
          e.postMessage(babelHelpers.extends({ type: "qpl" }, n));
        }));
    }
    async function u(t, n) {
      e != null && (await e(t, n));
    }
    async function c(e) {
      l != null && (await l(e));
    }
    ((i.initBridgePort = s),
      (i.sendLogToMainThread = u),
      (i.sendQplToMainThread = c));
  },
  66,
);
