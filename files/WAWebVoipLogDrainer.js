__d(
  "WAWebVoipLogDrainer",
  [
    "WACommonTaskScheduler",
    "WALogger",
    "WAPromiseDelays",
    "WAWebABProps",
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
      $ = 10,
      P = 16,
      N = 50,
      M = 200,
      w = null;
    function A(t) {
      if (w != null) {
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
        (w = {
          voipWasm: t,
          bufferPtr: n,
          headerU32: i,
          dataU8: l,
          cancelDrainTimer: null,
          lastOverflowCount: 0,
        }),
        O(),
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
    function F() {
      var e = w;
      if (e != null) {
        (e.cancelDrainTimer != null &&
          (e.cancelDrainTimer(), (e.cancelDrainTimer = null)),
          (w = null),
          H(e));
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
    function O(e) {
      e === void 0 && (e = !1);
      var t = w;
      if (t != null) {
        var n = e ? N : M,
          r = self.setTimeout(function () {
            G();
          }, n);
        t.cancelDrainTimer = function () {
          return self.clearTimeout(r);
        };
      }
    }
    var B = new TextDecoder(),
      W = 8192,
      q = new Uint8Array(W);
    function U(e, t, n, r) {
      if (t + n <= r) q.set(e.subarray(t, t + n));
      else {
        var o = r - t;
        (q.set(e.subarray(t, r)), q.set(e.subarray(0, n - o), o));
      }
      return q.subarray(0, n);
    }
    function V(e, t) {
      var n = U(e, t, I, b),
        r = n[E] | (n[E + 1] << 8);
      if (r < I + 1 || r > b || r > W || (r & 3) !== 0)
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
      for (var a = U(e, t, r, b), i = a[k], l = I; l < r && a[l] !== 0; ) l++;
      var s = B.decode(a.subarray(I, l));
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
    function H(e) {
      var t = e.dataU8,
        n = e.headerU32;
      try {
        for (
          var a = Atomics.load(n, L), i = Atomics.load(n, S), l = 0;
          i !== a;
        ) {
          var s = V(t, i);
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
    function G() {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = w;
          if (e != null) {
            var t = e.dataU8,
              n = e.headerU32,
              a = self.performance.now(),
              i = o("WAWebABProps").getABPropConfigValue(
                "wmi_worker_scheduler_web",
              ),
              l = -1,
              s = !1;
            try {
              var u = Atomics.load(n, L);
              l = Atomics.load(n, S);
              for (var c = 0; l !== u; ) {
                if (i) {
                  if (
                    c > 0 &&
                    (Atomics.store(n, S, l),
                    yield r("WACommonTaskScheduler").yield(),
                    w !== e)
                  )
                    return;
                } else if (
                  c > 0 &&
                  c % P === 0 &&
                  self.performance.now() - a > $
                ) {
                  if (
                    (Atomics.store(n, S, l),
                    yield o("WAPromiseDelays").releaseToEventLoop(),
                    w !== e)
                  )
                    return;
                  a = self.performance.now();
                }
                var d = V(t, l);
                if (d === -1) {
                  ((l = u), (s = !0));
                  break;
                }
                ((l = d), (s = !0), c++);
              }
              var m = Atomics.load(n, R);
              if (m > e.lastOverflowCount) {
                var p = m - e.lastOverflowCount;
                (o("WALogger").WARN(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [LogDrainer] ",
                      " messages overflowed to legacy dispatch (total: ",
                      ")",
                    ])),
                  p,
                  m,
                ),
                  (e.lastOverflowCount = m));
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
              if (s && w === e)
                try {
                  Atomics.store(n, S, l);
                } catch (e) {}
            }
            O(s);
          }
        })),
        z.apply(this, arguments)
      );
    }
    ((l.startLogDrainer = A), (l.stopLogDrainer = F));
  },
  98,
);
