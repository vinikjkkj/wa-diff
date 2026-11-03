__d(
  "MAWVaultDb",
  [
    "FBLogger",
    "MAWQplProxy",
    "MAWVault",
    "getErrorSafe",
    "gkx",
    "isObject",
    "isPlainObject",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0.001,
      s = new WeakMap();
    function u(e, t) {
      return t[e] != null;
    }
    var c = r("gkx")("23909");
    function d(t, n, a) {
      if (!r("isPlainObject")(t) || !c || !u(n, a) || t == null) return t;
      var i = s.get(t);
      if (i != null) return i;
      var l =
        Math.random() < e
          ? o("MAWQplProxy").startQplUserFlow(r("qpl")._(25301509, "119"))
          : null;
      try {
        var d = a[n],
          m = p(t, d, o("MAWVault").vault);
        return (l == null || l.endSuccess(), s.set(t, m), m);
      } catch (e) {
        l == null || l.endFail("vault_fail");
        var _ = r("getErrorSafe")(e);
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "%s - Failed to vault an entity in the table: %s",
          _.message,
          n,
        );
      }
    }
    function m(t, n, a) {
      if (!r("isPlainObject")(t) || !c || !u(n, a) || t == null) return t;
      var i =
        Math.random() < e
          ? o("MAWQplProxy").startQplUserFlow(r("qpl")._(741087294, "2028"))
          : null;
      try {
        var l = p(t, a[n], o("MAWVault").unvault);
        return (i == null || i.endSuccess(), l);
      } catch (e) {
        i == null || i.endFail("unvault_fail");
        var s = r("getErrorSafe")(e);
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "%s - Unvaulting failed for an entity in the table: %s",
          s.message,
          n,
        );
      }
    }
    function p(e, t, n) {
      if (e == null) return e;
      var o = Object.entries(t).filter(function (t) {
        var n = t[0];
        return e[n] != null;
      });
      return o.length === 0
        ? e
        : o.reduce(
            function (e, t) {
              var o = t[0],
                a = t[1];
              return (
                typeof a != "boolean" && r("isObject")(a)
                  ? (e[o] = p(e[o], a, n))
                  : a === !0 && (e[o] = n(e[o])),
                e
              );
            },
            babelHelpers.extends({}, e),
          );
    }
    ((l.vaultDbRow = d), (l.unvaultDbRow = m), (l.setInPath = p));
  },
  98,
);
