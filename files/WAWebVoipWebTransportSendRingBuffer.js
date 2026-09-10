__d(
  "WAWebVoipWebTransportSendRingBuffer",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 65536,
      u = 64,
      c = 2,
      d = c * 4,
      m = 0,
      p = 1,
      _ = 4,
      f = 1e3,
      g = 4,
      h = !1;
    function y() {
      return typeof SharedArrayBuffer != "function"
        ? !1
        : typeof crossOriginIsolated != "boolean" || crossOriginIsolated;
    }
    function C(e) {
      var t = e.byteLength - d;
      return t < _ + 2
        ? null
        : {
            capacityBytes: t,
            dataU8: new Uint8Array(e, d, t),
            header: new Int32Array(e, 0, c),
          };
    }
    function b() {
      if (!y()) return null;
      var t;
      try {
        t = new SharedArrayBuffer(d + s);
      } catch (t) {
        return (
          h ||
            ((h = !0),
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [WebTransportSendRing] Ring allocation failed, staying on postMessage: ",
                    "",
                  ])),
                String(t),
              )
              .sendLogs("wt-send-ring-alloc-failed")),
          null
        );
      }
      var n = C(t);
      if (n == null) return null;
      var r = n.capacityBytes,
        a = n.dataU8,
        i = n.header,
        l = new Uint8Array(_),
        u = new DataView(l.buffer);
      function c(e, t) {
        var n = Math.min(t.byteLength, r - e);
        return (
          a.set(t.subarray(0, n), e),
          n < t.byteLength && a.set(t.subarray(n), 0),
          (e + t.byteLength) % r
        );
      }
      function f(e) {
        var t = e.byteLength,
          n = _ + t;
        if (t <= 0 || n > r - 1) return !1;
        var o = Atomics.load(i, m),
          a = Atomics.load(i, p),
          s = (o - a + r) % r;
        if (n > r - 1 - s) return !1;
        u.setUint32(0, t, !0);
        var d = c(o, l),
          f = c(d, new Uint8Array(e));
        return (Atomics.store(i, m, f), Atomics.notify(i, m, 1), !0);
      }
      return { producer: { write: f }, ringBuffer: t };
    }
    function v(e, t, n) {
      var r = C(e);
      if (r == null) return null;
      var o = r.capacityBytes,
        a = r.dataU8,
        i = r.header,
        l = new Uint8Array(_),
        s = new DataView(l.buffer),
        c = !1,
        d = 0,
        h = null,
        y = null,
        b = { corruptRecords: 0, drainedRecords: 0, handlerErrors: 0 };
      function v(e, t) {
        var n = Math.min(t.byteLength, o - e);
        (t.set(a.subarray(e, e + n)),
          n < t.byteLength && t.set(a.subarray(0, t.byteLength - n), n));
      }
      function S() {
        return (Atomics.load(i, m) - Atomics.load(i, p) + o) % o;
      }
      function R(e) {
        try {
          t(e);
        } catch (e) {
          (b.handlerErrors++, b.handlerErrors === 1 && (n == null || n(e)));
        }
      }
      function L() {
        for (
          var e = 0,
            t = Atomics.load(i, p),
            n = Atomics.load(i, m),
            r = (n - t + o) % o;
          r > _ && e < u;
        ) {
          v(t, l);
          var a = s.getUint32(0, !0);
          if (a <= 0 || a > r - _)
            return (b.corruptRecords++, Atomics.store(i, p, n), e);
          var c = new Uint8Array(a);
          v((t + _) % o, c);
          var d = _ + a;
          ((t = (t + d) % o),
            (r -= d),
            Atomics.store(i, p, t),
            e++,
            b.drainedRecords++,
            R(c.buffer));
        }
        return e;
      }
      function E() {
        h != null && (self.clearTimeout(h), (h = null));
      }
      function k() {
        var e = y;
        if (e == null) {
          h = self.setTimeout(D, 0);
          return;
        }
        e.port2.postMessage(null);
      }
      function I() {
        if (typeof MessageChannel != "function") return null;
        var e = new MessageChannel();
        return (
          (e.port1.onmessage = function () {
            D();
          }),
          e
        );
      }
      function T() {
        var e = y;
        e != null && ((y = null), e.port1.close(), e.port2.close());
      }
      function D() {
        ((h = null), c && (L(), x()));
      }
      function x() {
        if (c) {
          var e = Atomics.load(i, m);
          if (e !== Atomics.load(i, p)) {
            k();
            return;
          }
          var t = Atomics.waitAsync;
          if (t == null) {
            h = self.setTimeout(D, g);
            return;
          }
          var n = t(i, m, e, f);
          if (!n.async) {
            k();
            return;
          }
          d++;
          var r = d;
          n.value.then(function () {
            !c || r !== d || D();
          });
        }
      }
      return {
        drain: L,
        getRawOccupancyBytes: S,
        getStats: function () {
          return babelHelpers.extends({}, b);
        },
        start: function () {
          c || ((c = !0), (y = I()), D());
        },
        stop: function () {
          ((c = !1), d++, E(), T(), Atomics.notify(i, m, 1));
        },
      };
    }
    ((l.WT_SEND_RING_CAPACITY_BYTES = s),
      (l.WT_SEND_RING_MAX_DRAIN_RECORDS = u),
      (l.createWebTransportSendRing = b),
      (l.createWebTransportSendRingConsumer = v));
  },
  98,
);
