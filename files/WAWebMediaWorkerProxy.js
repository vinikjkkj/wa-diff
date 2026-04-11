__d(
  "WAWebMediaWorkerProxy",
  ["asyncToGeneratorRuntime", "cr:36997"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return n("cr:36997").calculateFilehashInWorker(e);
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          return n("cr:36997").hmacSha256InWorker(e, t, r);
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
          return n("cr:36997").transcodeToMp4InWorker(e);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return n("cr:36997").mp4RepairMuxInWorker(e);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return n("cr:36997").kaleidoscopeClassifyInWorker(e);
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      n("cr:36997").prewarmMediaWasmWorker(e);
    }
    ((l.calculateFilehashInWorker = e),
      (l.hmacSha256InWorker = u),
      (l.transcodeToMp4InWorker = d),
      (l.mp4RepairMuxInWorker = p),
      (l.kaleidoscopeClassifyInWorker = f),
      (l.prewarmMediaWasmWorker = h));
  },
  98,
);
