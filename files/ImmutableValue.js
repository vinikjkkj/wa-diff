__d(
  "ImmutableValue",
  ["invariant", "isNode"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "_DONT_EVER_TYPE_THIS_SECRET_KEY",
      s = Math.random(),
      u = (function () {
        function e(t) {
          t === e.$1 || l(0, 5608);
        }
        return (
          (e.mergeAllPropertiesInto = function (t, n) {
            for (var e = n.length, r = 0; r < e; r++) Object.assign(t, n[r]);
          }),
          (e.deepFreezeRootNode = function (r) {
            if (!n("isNode")(r)) {
              Object.freeze(r);
              for (var t in r)
                Object.prototype.hasOwnProperty.call(r, t) &&
                  e.recurseDeepFreeze(r[t]);
              Object.seal(r);
            }
          }),
          (e.recurseDeepFreeze = function (r) {
            if (!(n("isNode")(r) || !e.shouldRecurseFreeze(r))) {
              Object.freeze(r);
              for (var t in r)
                Object.prototype.hasOwnProperty.call(r, t) &&
                  e.recurseDeepFreeze(r[t]);
              Object.seal(r);
            }
          }),
          (e.shouldRecurseFreeze = function (n) {
            return typeof n == "object" && !(n instanceof e) && n !== null;
          }),
          e
        );
      })();
    ((u.$1 = s), (u[e] = s), (i.default = u));
  },
  66,
);
