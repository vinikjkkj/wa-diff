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
      if (e == null) return null;
      var t = {};
      return (
        e.iptc != null && (t.iptc = e.iptc),
        e.c2pa != null && (t.c2pa = e.c2pa),
        t.iptc == null && t.c2pa == null ? null : t
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield n("cr:36997").detectAiProvenanceInWorker(e),
            r = t.engineErrorCode,
            o = t.provenance,
            a = t.transferredBuffer;
          return { transferredBuffer: a, provenance: h(o), engineErrorCode: r };
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      n("cr:36997").prewarmMediaWasmWorker(e);
    }
    ((l.calculateFilehashInWorker = e),
      (l.hmacSha256InWorker = u),
      (l.transcodeToMp4InWorker = d),
      (l.mp4RepairMuxInWorker = p),
      (l.kaleidoscopeClassifyInWorker = f),
      (l.detectAiProvenanceInWorker = y),
      (l.prewarmMediaWasmWorker = b));
  },
  98,
);
