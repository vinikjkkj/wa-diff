__d(
  "WebBloksMinsPutByVal",
  ["WebBloksErrors", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    var e = 4294967295;
    function s(t) {
      return typeof t != "number" || !Number.isInteger(t) || t < 0 || t > e
        ? null
        : t;
    }
    function u(e, t, n, r) {
      if (Array.isArray(t)) {
        var a = o("WebBloksUtils").cast(t),
          i = s(n);
        if (i == null)
          throw new (o("WebBloksErrors").WebBloksScriptError)(
            "invalid put_by_val vector index",
            e,
          );
        if (i > a.length)
          throw new (o("WebBloksErrors").WebBloksScriptError)(
            "vector index out of range",
            e,
          );
        i === a.length ? a.push(r) : (a[i] = r);
        return;
      }
      if (t != null && typeof t == "object") {
        var l = o("WebBloksUtils").cast(t),
          u = typeof n == "string" ? n : String(n);
        l[u] = r;
        return;
      }
      throw new (o("WebBloksErrors").WebBloksScriptError)(
        "put_by_val 1st argument must be a container",
        e,
      );
    }
    l.default = u;
  },
  98,
);
