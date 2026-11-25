__d(
  "LSVoprfUnblind.nop",
  ["XPlatReactVoprf"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = async function (t, n, r, a, i, l, s, u) {
      var e = await o("XPlatReactVoprf").loadXPlatReactVoprf(),
        c = e.voprfInstance,
        d = c.voprfInfo,
        m = c.voprfWasm;
      try {
        var p = m.verifiableUnblind(
          d,
          new Uint8Array(s),
          new Uint8Array(u),
          new Uint8Array(a),
          new Uint8Array(l),
          new Uint8Array(i),
          new Uint8Array(r),
          !0,
        );
        return Promise.resolve([p.unblindedElement.buffer]);
      } catch (e) {
        throw e;
      } finally {
        o("XPlatReactVoprf").freeVoprfInstance(c);
      }
    };
    ((e.__nop_name__ = "LSVoprfUnblind"), (l.default = e));
  },
  98,
);
