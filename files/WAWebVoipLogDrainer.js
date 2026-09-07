__d(
  "WAWebVoipLogDrainer",
  [
    "WALogger",
    "WAWebCommonTaskScheduler",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C = 20,
      b = 65536,
      v = C + b,
      S = 1,
      R = 3,
      L = 4,
      E = 0,
      k = 2,
      I = 4,
      T = 1,
      D = 2,
      x = 3,
      $ = 50,
      P = 200,
      N = null;
    function M(t) {
      if (N != null) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [LogDrainer] Already running, skipping init",
            ])),
        );
        return;
      }
      var n = t._malloc(v);
      if (n === 0) {
        o("WALogger").ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [LogDrainer] Failed to allocate ring buffer",
            ])),
        );
        return;
      }
      var r = t.GROWABLE_HEAP_U8();
      r.fill(0, n, n + v);
      var a = r.buffer,
        i = new Uint32Array(a, n, 5),
        l = new Uint8Array(a, n + C, b);
      (t.initLogRingBuffer(n, b),
        (N = {
          voipWasm: t,
          bufferPtr: n,
          headerU32: i,
          dataU8: l,
          cancelDrainTimer: null,
          lastOverflowCount: 0,
        }),
        A(),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [LogDrainer] Started - buffer at heap offset ",
              ", data size ",
              "",
            ])),
          n,
          b,
        ));
    }
    function w() {
      var e = N;
      if (e != null) {
        (e.cancelDrainTimer != null &&
          (e.cancelDrainTimer(), (e.cancelDrainTimer = null)),
          (N = null),
          U(e));
        try {
          e.voipWasm.shutdownLogRingBuffer();
        } catch (e) {
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [LogDrainer] Error shutting down C++ ring buffer",
                ])),
            )
            .catching(r("getErrorSafe")(e));
        }
        var t = e.bufferPtr,
          n = e.voipWasm;
        window.setTimeout(function () {
          try {
            n._free(t);
          } catch (e) {
            o("WALogger")
              .WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [LogDrainer] Error freeing ring buffer",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
        }, 500);
      }
    }
    function A(e) {
      e === void 0 && (e = !1);
      var t = N;
      if (t != null) {
        var n = e ? $ : P,
          r = self.setTimeout(function () {
            V();
          }, n);
        t.cancelDrainTimer = function () {
          return self.clearTimeout(r);
        };
      }
    }
    var F = new TextDecoder(),
      O = 8192,
      B = new Uint8Array(O);
    function W(e) {
      var t = e.dataSize,
        n = e.dataU8,
        r = e.length,
        o = e.readPos;
      if (o + r <= t) B.set(n.subarray(o, o + r));
      else {
        var a = t - o;
        (B.set(n.subarray(o, t)), B.set(n.subarray(0, r - a), a));
      }
      return B.subarray(0, r);
    }
    function q(e, t) {
      var n = W({ dataSize: b, dataU8: e, length: I, readPos: t }),
        r = n[E] | (n[E + 1] << 8);
      if (r < I + 1 || r > b || r > O || (r & 3) !== 0)
        return (
          o("WALogger").ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [LogDrainer] Invalid entry length ",
                " at readPos ",
                ", resetting",
              ])),
            r,
            t,
          ),
          -1
        );
      for (
        var a = W({ dataSize: b, dataU8: e, length: r, readPos: t }),
          i = a[k],
          l = I;
        l < r && a[l] !== 0;
      )
        l++;
      var s = F.decode(a.subarray(I, l));
      return (
        i === T
          ? o("WALogger").ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: wasm: [batched] ",
                  "",
                ])),
              s,
            )
          : i === D
            ? o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: wasm: [batched] ",
                    "",
                  ])),
                s,
              )
            : i === x &&
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: wasm: [batched] ",
                    "",
                  ])),
                s,
              ),
        (t + r) % b
      );
    }
    function U(e) {
      var t = e.dataU8,
        n = e.headerU32;
      try {
        for (
          var a = Atomics.load(n, L), i = Atomics.load(n, S), l = 0;
          i !== a;
        ) {
          var s = q(t, i);
          if (s === -1) {
            ((i = a), l++);
            break;
          }
          ((i = s), l++);
        }
        l > 0 && Atomics.store(n, S, i);
      } catch (e) {
        o("WALogger")
          .ERROR(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [LogDrainer] Error during final flush",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      }
    }
    function V() {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = N;
          if (e != null) {
            var t = e.dataU8,
              n = e.headerU32,
              a = -1,
              i = !1;
            try {
              var l = Atomics.load(n, L);
              a = Atomics.load(n, S);
              for (var s = 0; a !== l; ) {
                if (
                  s > 0 &&
                  (Atomics.store(n, S, a),
                  yield r("WAWebCommonTaskScheduler").yield(),
                  N !== e)
                )
                  return;
                var u = q(t, a);
                if (u === -1) {
                  ((a = l), (i = !0));
                  break;
                }
                ((a = u), (i = !0), s++);
              }
              var c = Atomics.load(n, R);
              if (c > e.lastOverflowCount) {
                var d = c - e.lastOverflowCount;
                (o("WALogger").WARN(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [LogDrainer] ",
                      " messages overflowed to legacy dispatch (total: ",
                      ")",
                    ])),
                  d,
                  c,
                ),
                  (e.lastOverflowCount = c));
              }
            } catch (e) {
              o("WALogger")
                .ERROR(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [LogDrainer] Error during drain",
                    ])),
                )
                .catching(r("getErrorSafe")(e));
            } finally {
              if (i && N === e)
                try {
                  Atomics.store(n, S, a);
                } catch (e) {}
            }
            A(i);
          }
        })),
        H.apply(this, arguments)
      );
    }
    ((l.startLogDrainer = M), (l.stopLogDrainer = w));
  },
  98,
);
