__d(
  "WAWebVoipWebTransportNativeSendRing",
  ["WAWebVoipJsWorkerMessageHandlerHelpers", "WAWebVoipWasmHeapBuffer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 8,
      s = 6,
      u = 128 * 1024,
      c = 0,
      d = 1,
      m = 256,
      p = 250,
      _ = 4294967295,
      f = null,
      g = 0,
      h = new Set();
    function y(t, n) {
      if (f != null) return !0;
      var r = Atomics.waitAsync;
      if (r == null) return (S("no Atomics.waitAsync"), !1);
      var a = t,
        i = a.initWebTransportRingBuffer,
        l = a.registerWebTransportRingRoute,
        s = a.shutdownWebTransportRingBuffer,
        c = a.unregisterWebTransportRingRoute;
      if (i == null || l == null || c == null || s == null)
        return (S("binary has no native send ring"), !1);
      var d = e + u,
        m = o("WAWebVoipWasmHeapBuffer").createHeapBufferState(),
        p = o("WAWebVoipWasmHeapBuffer").ensureHeapBuffer(t, m, d);
      if (p === 0) return (S("allocation failed"), !1);
      var _ = t.GROWABLE_HEAP_U8();
      if ((_.fill(0, p, p + d), !i(p, u)))
        return (
          o("WAWebVoipWasmHeapBuffer").freeHeapBuffer(t, m),
          S("native init refused"),
          !1
        );
      var g = {
        buffer: m,
        register: l,
        unregister: c,
        shutdown: s,
        waitAsync: r,
        header: new Int32Array(_.buffer, p, 2),
        data: new Uint8Array(_.buffer, p + e, u),
        onDatagram: n,
        timerId: null,
        waitGeneration: 0,
        handlerErrorCount: 0,
        corruptRecordCount: 0,
      };
      return ((f = g), L(g), !0);
    }
    function C(e, t, n) {
      n === void 0 && (n = []);
      var r = f;
      if (r == null) return null;
      g = (g % _) + 1;
      var a = g;
      if (!r.register(e, t, a)) return null;
      for (var i of n)
        r.register(i.ip, i.port, a) ||
          o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
            2,
            "voip: [WebTransportThread] Native send ring could not register alias " +
              i.ip +
              ":" +
              i.port +
              ", its packets use the main-thread path",
          );
      return a;
    }
    function b(e) {
      var t = f;
      return t != null ? t.unregister(t.buffer.ptr, e) : 0;
    }
    function v(e) {
      var t = f;
      t != null &&
        ((f = null),
        t.shutdown(t.buffer.ptr),
        t.timerId != null && (self.clearTimeout(t.timerId), (t.timerId = null)),
        t.waitGeneration++,
        Atomics.notify(t.header, c, 1),
        o("WAWebVoipWasmHeapBuffer").freeHeapBuffer(e, t.buffer));
    }
    function S(e) {
      h.has(e) ||
        (h.add(e),
        o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
          2,
          "voip: [WebTransportThread] Native send ring unavailable (" +
            e +
            "), using the main-thread path",
        ));
    }
    function R(e) {
      return e;
    }
    function L(e) {
      ((e.timerId = null), f === e && (E(e), x(e)));
    }
    function E(e) {
      for (
        var t = e.data, n = e.header, r = Atomics.load(n, d), o = 0;
        o < m;
        o++
      ) {
        var a = Atomics.load(n, c),
          i = (a - r + u) % u;
        if (i === 0) return;
        var l = i >= s ? k(t, r, 2) : 0;
        if (l <= s || l > i) {
          (Atomics.store(n, d, a), I(e, l, i));
          return;
        }
        var p = k(t, r + 2, 4),
          _ = D(t, (r + s) % u, l - s);
        ((r = (r + l) % u), Atomics.store(n, d, r), T(e, p, _.buffer));
      }
    }
    function k(e, t, n) {
      for (var r = 0, o = n - 1; o >= 0; o--) r = r * 256 + e[(t + o) % u];
      return r;
    }
    function I(e, t, n) {
      var r = ++e.corruptRecordCount;
      Number.isInteger(Math.log2(r)) &&
        o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
          1,
          "voip: [WebTransportThread] Native send ring skipped a corrupt record (" +
            r +
            " total): length " +
            t +
            ", published " +
            n,
        );
    }
    function T(e, t, n) {
      try {
        e.onDatagram(t, n);
      } catch (t) {
        var r = ++e.handlerErrorCount;
        Number.isInteger(Math.log2(r)) &&
          o("WAWebVoipJsWorkerMessageHandlerHelpers").logToPhysicalLogs(
            1,
            "voip: [WebTransportThread] Native send ring handler failed (" +
              r +
              " total): " +
              String(t),
          );
      }
    }
    function D(e, t, n) {
      var r = new Uint8Array(n),
        o = Math.min(n, e.byteLength - t);
      return (
        r.set(e.subarray(t, t + o)),
        o < n && r.set(e.subarray(0, n - o), o),
        r
      );
    }
    function x(e) {
      var t = Atomics.load(e.header, c);
      if (t !== Atomics.load(e.header, d)) {
        e.timerId = self.setTimeout(function () {
          return L(e);
        }, 0);
        return;
      }
      var n = e.waitAsync(e.header, c, t, p);
      if (!n.async) {
        e.timerId = self.setTimeout(function () {
          return L(e);
        }, 0);
        return;
      }
      var r = ++e.waitGeneration;
      n.value.then(function () {
        e.waitGeneration === r && L(e);
      });
    }
    ((l.startNativeSendRing = y),
      (l.registerNativeSendRoute = C),
      (l.unregisterNativeSendRoute = b),
      (l.stopNativeSendRing = v));
  },
  98,
);
