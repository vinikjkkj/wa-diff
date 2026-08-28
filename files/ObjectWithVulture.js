__d(
  "ObjectWithVulture",
  ["isPlainObject", "mutableCopy", "vulture"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new WeakSet(),
      s = new WeakMap(),
      u = new Set();
    function c() {
      u.clear();
    }
    function d(e) {
      return (
        typeof e == "symbol" ||
        (typeof e == "string" && (e.startsWith("_") || e.startsWith("$")))
      );
    }
    function m(t, n) {
      if ((!r("isPlainObject")(t) && !Array.isArray(t)) || e.has(t)) return t;
      var o = s.get(t);
      if (o != null) return o;
      var a = Object.isFrozen(t) ? r("mutableCopy")(t) : t,
        i = new Proxy(a, {
          get: function (t, o) {
            var e = Reflect.get(t, o);
            if (d(o)) return e;
            u.has(n) || (u.add(n), r("vulture")(n));
            var a = Object.getOwnPropertyDescriptor(t, o);
            return (a == null ? void 0 : a.configurable) === !1 ? e : m(e, n);
          },
          defineProperty: function (t, r, o) {
            var e;
            if (
              Object.isFrozen(t) ||
              d(r) ||
              "get" in o ||
              "set" in o ||
              o.configurable !== !1
            )
              return Reflect.defineProperty(t, r, o);
            var a = m((e = o.value) != null ? e : t[r], n);
            return Reflect.defineProperty(
              t,
              r,
              babelHelpers.extends({}, o, { value: a }),
            );
          },
        });
      return (e.add(i), s.set(t, i), Object.isFrozen(t) && Object.freeze(i), i);
    }
    ((l.__resetForTesting = c), (l.wrapObjectWithVulture = m));
  },
  98,
);
