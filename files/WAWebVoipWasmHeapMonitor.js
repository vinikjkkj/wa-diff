__d(
  "WAWebVoipWasmHeapMonitor",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 1048576,
      m = 1e3,
      p = null,
      _ = null,
      f = null,
      g = null,
      h = 0,
      y = 0,
      C = 0;
    function b(e) {
      return (e / d).toFixed(1);
    }
    function v(e) {
      return e.GROWABLE_HEAP_U8().buffer.byteLength;
    }
    function S(e) {
      f !== e && ((f = e), (g = null), (h = 0));
    }
    function R(e) {
      S(e);
      var t = v(e),
        n = g,
        r = n == null ? 0 : t - n;
      return (
        t > h && (h = t),
        (g = t),
        { bytes: t, deltaBytes: r, peakBytes: h }
      );
    }
    function L(e) {
      var t = R(e);
      return t.deltaBytes === 0 ? null : t;
    }
    function E(t, n) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: WASM heap snapshot phase=",
            " bytes=",
            " mb=",
            " delta=",
            " peakMb=",
            "",
          ])),
        t,
        n.bytes,
        b(n.bytes),
        n.deltaBytes,
        b(n.peakBytes),
      );
    }
    function k(e) {
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "voip: WASM heap grew phase=",
            " bytes=",
            " mb=",
            " delta=",
            " peakMb=",
            "",
          ])),
        "call_state_non_none",
        e.bytes,
        b(e.bytes),
        e.deltaBytes,
        b(e.peakBytes),
      );
    }
    function I(e) {
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "voip: WASM heap monitor_start phase=",
            " bytes=",
            " mb=",
            " delta=",
            " peakMb=",
            "",
          ])),
        "call_state_non_none",
        e.bytes,
        b(e.bytes),
        e.deltaBytes,
        b(e.peakBytes),
      );
    }
    function T() {
      var e = _;
      if (e != null) {
        C++;
        var t = L(e);
        t != null && k(t);
      }
    }
    function D(e, t) {
      E(t, R(e));
    }
    function x(e, t) {
      if (p == null) {
        (S(e), (_ = e), (C = 0));
        var n = R(e);
        ((y = n.bytes), I(n), (p = window.setInterval(T, t != null ? t : m)));
      }
    }
    function $() {
      if (p != null) {
        (window.clearInterval(p), (p = null));
        var e = _;
        if (((_ = null), e != null)) {
          var t = R(e);
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: WASM heap monitor_stop phase=",
                " bytes=",
                " mb=",
                " delta=",
                " peakMb=",
                " sessionDelta=",
                " polls=",
                "",
              ])),
            "call_state_none",
            t.bytes,
            b(t.bytes),
            t.deltaBytes,
            b(t.peakBytes),
            t.bytes - y,
            C,
          ),
            (y = 0),
            (C = 0));
        }
      }
    }
    ((l.logWasmHeapSnapshot = D),
      (l.startWasmHeapMonitor = x),
      (l.stopWasmHeapMonitor = $));
  },
  98,
);
