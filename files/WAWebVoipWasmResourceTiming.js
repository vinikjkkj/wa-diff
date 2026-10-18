__d(
  "WAWebVoipWasmResourceTiming",
  ["WAWebVoipWasmArtifactRegistry"],
  function (t, n, r, o, a, i, l) {
    var e = 250,
      s = 2500;
    function u(e) {
      if (typeof self.performance.getEntriesByType != "function")
        return "unknown";
      if (o("WAWebVoipWasmArtifactRegistry").getSelectedVoipWasmUri() == null)
        return "not_seen";
      var t = self.performance.getEntriesByType("resource");
      return m(t, function (t) {
        return t.startTime >= e;
      }) != null
        ? "seen"
        : _(t.length)
          ? "unknown"
          : "not_seen";
    }
    function c(e) {
      var t;
      if (typeof self.performance.getEntriesByType == "function") {
        var n = m(self.performance.getEntriesByType("resource"), function (t) {
            return t.startTime >= e;
          }),
          r = p(n, "responseEnd");
        if (!(n == null || r == null || r < n.startTime)) {
          var o = { wasm_download_ms: Math.round(r - n.startTime) },
            a = p(n, "transferSize");
          return (
            a != null &&
              ((t = p(n, "decodedBodySize")) != null ? t : 0) > 0 &&
              (o.wasm_transfer_kb = Math.round(a / 1024)),
            { int: o }
          );
        }
      }
    }
    function d(e, t) {
      if (
        typeof self.performance.getEntriesByType != "function" ||
        o("WAWebVoipWasmArtifactRegistry").getSelectedVoipWasmUri() == null
      )
        return "unknown";
      var n = self.performance.getEntriesByType("resource"),
        r = m(n, function (t) {
          return t.startTime < e;
        });
      if (r == null) return _(n.length) ? "unknown" : "none";
      if (r.startTime >= t) return "started_after_trigger";
      var a = p(r, "responseEnd");
      return a == null || a < r.startTime
        ? "unknown"
        : a <= t
          ? "complete_before_trigger"
          : "in_flight_at_trigger";
    }
    function m(e, t) {
      var n = o("WAWebVoipWasmArtifactRegistry").getSelectedVoipWasmUri();
      if (n == null) return null;
      var r = new URL(n, window.location.href).href;
      return e.find(function (e) {
        return e.name === r && t(e);
      });
    }
    function p(e, t) {
      var n = e == null ? null : Reflect.get(e, t);
      return typeof n == "number" ? n : null;
    }
    function _(t) {
      return (
        Reflect.get(self, "__isresourcetimingbufferfull") === !0 ||
        t === e ||
        t >= s
      );
    }
    ((l.getVoipWasmFetchState = u),
      (l.getVoipWasmDownloadAnnotations = c),
      (l.getVoipWasmPrefetchState = d));
  },
  98,
);
