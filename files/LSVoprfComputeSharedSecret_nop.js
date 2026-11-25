__d(
  "LSVoprfComputeSharedSecret.nop",
  ["XPlatReactVoprf"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = async function (t, n, r, a) {
      var e = await o("XPlatReactVoprf").loadXPlatReactVoprf(),
        i = e.voprfInstance,
        l = i.voprfInfo,
        s = i.voprfWasm;
      try {
        var u = s.clientFinalize(l, new Uint8Array(r), new Uint8Array(a));
        return Promise.resolve([u.finalEvaluation.buffer]);
      } catch (e) {
        throw e;
      } finally {
        o("XPlatReactVoprf").freeVoprfInstance(i);
      }
    };
    ((e.__nop_name__ = "LSVoprfComputeSharedSecret"), (l.default = e));
  },
  98,
);
