__d(
  "WAWebKaleidoscopeWasmFeatureSupport",
  ["Promise", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    var e,
      l = null;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return (
            l != null ||
              (l = (yield (e || (e = n("Promise"))).all([c(), _(), m()])).every(
                Boolean,
              )),
            l
          );
        })),
        u.apply(this, arguments)
      );
    }
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return WebAssembly.validate(
            new Uint8Array([
              0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 3,
              1, 0, 1, 10, 14, 1, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11,
            ]),
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return WebAssembly.validate(
            new Uint8Array([
              0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 7,
              1, 5, 0, 208, 112, 26, 11,
            ]),
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield WebAssembly.instantiate(
                new Uint8Array([
                  0, 97, 115, 109, 1, 0, 0, 0, 1, 6, 1, 96, 1, 126, 1, 126, 3,
                  2, 1, 0, 7, 5, 1, 1, 98, 0, 0, 10, 6, 1, 4, 0, 32, 0, 11,
                ]),
              ),
              t = e.instance;
            return t.exports.b(BigInt(0)) === BigInt(0);
          } catch (e) {
            return !1;
          }
        })),
        f.apply(this, arguments)
      );
    }
    i.checkKaleidoscopeWasmFeatureSupport = s;
  },
  66,
);
