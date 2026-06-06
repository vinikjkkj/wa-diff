__d(
  "WAWebMediaWorkerProxy",
  ["cr:36997"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      return n("cr:36997").calculateFilehashInWorker(e);
    }
    async function s(e, t, r) {
      return n("cr:36997").hmacSha256InWorker(e, t, r);
    }
    async function u(e) {
      return n("cr:36997").transcodeToMp4InWorker(e);
    }
    async function c(e) {
      return n("cr:36997").mp4RepairMuxInWorker(e);
    }
    async function d(e) {
      return n("cr:36997").kaleidoscopeClassifyInWorker(e);
    }
    function m(e) {
      n("cr:36997").prewarmMediaWasmWorker(e);
    }
    ((l.calculateFilehashInWorker = e),
      (l.hmacSha256InWorker = s),
      (l.transcodeToMp4InWorker = u),
      (l.mp4RepairMuxInWorker = c),
      (l.kaleidoscopeClassifyInWorker = d),
      (l.prewarmMediaWasmWorker = m));
  },
  98,
);
