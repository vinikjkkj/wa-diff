__d(
  "LSVoprfComputeSharedSecret.nop",
  ["Promise", "XPlatReactVoprf", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i) {
            var l = yield o("XPlatReactVoprf").loadXPlatReactVoprf(),
              s = l.voprfInstance,
              u = s.voprfInfo,
              c = s.voprfWasm;
            try {
              var d = c.clientFinalize(u, new Uint8Array(a), new Uint8Array(i));
              return (e || (e = n("Promise"))).resolve([
                d.finalEvaluation.buffer,
              ]);
            } catch (e) {
              throw e;
            } finally {
              o("XPlatReactVoprf").freeVoprfInstance(s);
            }
          },
        );
        function r(e, n, r, o) {
          return t.apply(this, arguments);
        }
        return r;
      })();
    ((s.__nop_name__ = "LSVoprfComputeSharedSecret"), (l.default = s));
  },
  98,
);
