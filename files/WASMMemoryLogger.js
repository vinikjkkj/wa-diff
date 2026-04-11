__d(
  "WASMMemoryLogger",
  ["FBLogger", "QPLFlow", "WAHashStringToNumber", "justknobx", "qpl", "uuidv4"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("justknobx")._("168"),
      s = (function () {
        function e() {
          var e = this;
          ((this.$1 = new FinalizationRegistry(function (t) {
            e.$3 -= t.numBytes;
            var n = t.wasmModule;
            if (n != null) {
              var r = e.$2.get(n);
              if (r != null) {
                var o = r - t.numBytes;
                o <= 0 ? e.$2.delete(n) : e.$2.set(n, o);
              }
            }
          })),
            (this.$3 = 0),
            (this.$2 = new Map()));
        }
        var t = e.prototype;
        return (
          (t.addWasmInstanceToSet = function (t, n) {
            var e = t.buffer.byteLength;
            if (
              (this.$1.register(t, { numBytes: e, wasmModule: n }),
              (this.$3 += e),
              n != null)
            ) {
              var r,
                o = (r = this.$2.get(n)) != null ? r : 0;
              this.$2.set(n, o + e);
            }
          }),
          (t.getCurrentWasmMemoryUsage = function () {
            return this.$3;
          }),
          (t.getWasmMemoryUsagePerModuleAnnotationsObject = function () {
            var e = {};
            return (
              this.$2.forEach(function (t, n) {
                e["wasm_memory_usage_" + n] = t;
              }),
              e
            );
          }),
          e
        );
      })(),
      u;
    function c() {
      if (u == null) {
        if (typeof FinalizationRegistry != "function") {
          r("FBLogger")("wmi").warn(
            "unable to run wasm memory logger - finalization registry not supported in browser",
          );
          return;
        }
        ((u = new s()),
          window.setInterval(function () {
            var e = r("qpl")._(994782764, "418"),
              t = o("WAHashStringToNumber").hashStringToNumber(r("uuidv4")()),
              n = u.getWasmMemoryUsagePerModuleAnnotationsObject(),
              a = o("QPLFlow").startQPLFlow(e, {
                annotations: {
                  int: babelHelpers.extends({}, n, {
                    wasm_total_memory_usage: u.getCurrentWasmMemoryUsage(),
                  }),
                },
                instanceKey: t,
              });
            a.endSuccess();
          }, e));
      }
      return u;
    }
    l.getOrInitWasmMemoryLogger = c;
  },
  98,
);
