__d(
  "WAWebAudioUtility",
  ["WAWebBackendApi", "asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = null;
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          e == null &&
            (e =
              o("WAWebBackendApi").frontendSendAndReceive(
                "initializeVoipWasm",
              ));
          var t = yield e;
          return ((s = t), t);
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      return s;
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield u();
          return t._malloc(e);
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield u();
          t._free(e);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      var n = s;
      if (!n) throw r("err")("WASM module not initialized");
      var o = Math.floor(e / 4);
      (n.GROWABLE_HEAP_F32().set(t, o), n.onAudioDataFromJs(e, t.length));
    }
    function h(e, t) {
      var n = s;
      if (!n) throw r("err")("WASM module not initialized");
      n.requestAudioDataFromWasmVoip(e, t);
      var o = Math.floor(e / 4),
        a = t / 4,
        i = n.GROWABLE_HEAP_F32();
      return i.subarray(o, o + a);
    }
    function y(e, t, n) {
      if (
        (n === void 0 &&
          (n = function (t) {
            return t;
          }),
        t.length === 0)
      )
        return new e(0);
      for (
        var r = t[0].length, o = new e(r * t.length), a = 0, i = 0;
        i < r;
        i++
      )
        for (var l = 0; l < t.length; l++) o[a++] = n(t[l][i]);
      return o;
    }
    function C(e, t, n) {
      if (n === t) return e;
      for (
        var r = t / n,
          o = Math.round(e.length / r),
          a = new Float32Array(o),
          i = 0,
          l = 0;
        i < a.length;
      ) {
        for (
          var s = Math.round((i + 1) * r), u = 0, c = 0, d = l;
          d < s && d < e.length;
          d++
        )
          ((u += e[d]), c++);
        (c > 0 && (a[i] = u / c), i++, (l = s));
      }
      return a;
    }
    ((l.getCachedWasmModule = d),
      (l.mallocWasmBuffer = m),
      (l.freeWasmBuffer = _),
      (l.sendAudioToWasm = g),
      (l.requestAudioFromWasm = h),
      (l.interleaveTypedArrays = y),
      (l.maybeDownsampleBuffer = C));
  },
  98,
);
