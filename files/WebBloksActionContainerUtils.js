__d(
  "WebBloksActionContainerUtils",
  ["WebBloksErrors", "WebBloksUtils", "justknobx"],
  function (t, n, r, o, a, i, l) {
    var e = Object.getPrototypeOf({});
    function s(t, n, a) {
      if (!r("justknobx")._("6078")) return o("WebBloksUtils").cast(n);
      if (n == null || typeof n != "object" || Array.isArray(n))
        throw new (o("WebBloksErrors").WebBloksScriptError)(a, t);
      var i = Object.getPrototypeOf(n);
      if (i !== null && i !== e)
        throw new (o("WebBloksErrors").WebBloksScriptError)(a, t);
      return o("WebBloksUtils").cast(n);
    }
    function u(e, t, n) {
      if (!r("justknobx")._("6078")) return o("WebBloksUtils").cast(t);
      if (!Array.isArray(t))
        throw new (o("WebBloksErrors").WebBloksScriptError)(n, e);
      return o("WebBloksUtils").cast(t);
    }
    function c(e, t, n) {
      t === "__proto__"
        ? Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0,
          })
        : (e[t] = n);
    }
    ((l.assertWebBloksPlainMap = s),
      (l.assertWebBloksArray = u),
      (l.writeWebBloksPlainMapValue = c));
  },
  98,
);
