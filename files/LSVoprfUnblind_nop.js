__d(
  "LSVoprfUnblind.nop",
  ["Promise", "XPlatReactVoprf", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i, l, s, u, c) {
            var d = yield o("XPlatReactVoprf").loadXPlatReactVoprf(),
              m = d.voprfInstance,
              p = m.voprfInfo,
              _ = m.voprfWasm;
            try {
              var f = _.verifiableUnblind(
                p,
                new Uint8Array(u),
                new Uint8Array(c),
                new Uint8Array(i),
                new Uint8Array(s),
                new Uint8Array(l),
                new Uint8Array(a),
                !0,
              );
              return (e || (e = n("Promise"))).resolve([
                f.unblindedElement.buffer,
              ]);
            } catch (e) {
              throw e;
            } finally {
              o("XPlatReactVoprf").freeVoprfInstance(m);
            }
          },
        );
        function r(e, n, r, o, a, i, l, s) {
          return t.apply(this, arguments);
        }
        return r;
      })();
    ((s.__nop_name__ = "LSVoprfUnblind"), (l.default = s));
  },
  98,
);
