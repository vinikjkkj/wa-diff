__d(
  "WAMediaWasmWorkerMainThreadBridge",
  ["asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null,
      l = null;
    function s(t) {
      ((e = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, n) {
          var r = yield t.fullyConnected;
          r.postMessage({ type: "log", logType: e, message: n });
        });
        return function (n, r) {
          return e.apply(this, arguments);
        };
      })()),
        (l = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var n = yield t.fullyConnected;
            n.postMessage(babelHelpers.extends({ type: "qpl" }, e));
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })()));
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          e != null && (yield e(t, n));
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          l != null && (yield l(e));
        })),
        m.apply(this, arguments)
      );
    }
    ((i.initBridgePort = s),
      (i.sendLogToMainThread = u),
      (i.sendQplToMainThread = d));
  },
  66,
);
