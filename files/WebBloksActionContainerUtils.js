__d(
  "WebBloksActionContainerUtils",
  ["WebBloksErrors", "WebBloksUtils", "justknobx"],
  function (t, n, r, o, a, i, l) {
    var e = Object.getPrototypeOf({});
    function s(t) {
      if (t == null || typeof t != "object" || Array.isArray(t)) return !1;
      var n = Object.getPrototypeOf(t);
      return n === null || n === e;
    }
    function u(e, t, n) {
      if (!r("justknobx")._("6078")) return o("WebBloksUtils").cast(t);
      if (!s(t)) throw new (o("WebBloksErrors").WebBloksScriptError)(n, e);
      return o("WebBloksUtils").cast(t);
    }
    function c(e, t, n) {
      if (!r("justknobx")._("6078")) return o("WebBloksUtils").cast(t);
      if (!Array.isArray(t))
        throw new (o("WebBloksErrors").WebBloksScriptError)(n, e);
      return o("WebBloksUtils").cast(t);
    }
    function d(e, t, n) {
      t === "__proto__"
        ? Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0,
          })
        : (e[t] = n);
    }
    ((l.isWebBloksPlainMap = s),
      (l.assertWebBloksPlainMap = u),
      (l.assertWebBloksArray = c),
      (l.writeWebBloksPlainMapValue = d));
  },
  98,
);
