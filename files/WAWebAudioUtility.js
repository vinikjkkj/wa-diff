__d(
  "WAWebAudioUtility",
  [
    "WAWebBackendApi",
    "WAWebIdentityFunction",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { kMicrophone: 0, kInternalAudio: 1 },
      s = null,
      u = null;
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          s == null &&
            (s =
              o("WAWebBackendApi").frontendSendAndReceive(
                "initializeVoipWasm",
              ));
          var e = yield s;
          return ((u = e), e);
        })),
        d.apply(this, arguments)
      );
    }
    function m() {
      return u;
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield c();
          return t._malloc(e);
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
          var t = yield c();
          t._free(e);
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      var n = u;
      if (!n) throw r("err")("WASM module not initialized");
      var o = Math.floor(e / 4);
      (n.GROWABLE_HEAP_F32().set(t, o), n.onAudioDataFromJs(e, t.length));
    }
    function y(e, t) {
      var n = u;
      if (!n) throw r("err")("WASM module not initialized");
      n.requestAudioDataFromWasmVoip(e, t);
      var o = Math.floor(e / 4),
        a = t / 4,
        i = n.GROWABLE_HEAP_F32();
      return i.subarray(o, o + a);
    }
    function C(e, t, n) {
      if (
        (n === void 0 && (n = o("WAWebIdentityFunction").identityFunction),
        t.length === 0)
      )
        return new e(0);
      for (
        var r = t[0].length, a = new e(r * t.length), i = 0, l = 0;
        l < r;
        l++
      )
        for (var s = 0; s < t.length; s++) a[i++] = n(t[s][l]);
      return a;
    }
    function b(e, t, n) {
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
    ((l.AudioCaptureDevType = e),
      (l.getCachedWasmModule = m),
      (l.mallocWasmBuffer = p),
      (l.freeWasmBuffer = f),
      (l.sendAudioToWasm = h),
      (l.requestAudioFromWasm = y),
      (l.interleaveTypedArrays = C),
      (l.maybeDownsampleBuffer = b));
  },
  98,
);
